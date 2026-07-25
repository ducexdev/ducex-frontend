import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const portalApiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

portalApiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get('ducex_access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

portalApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function(resolve, reject) {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return portalApiClient(originalRequest);
        }).catch((err) => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;
      
      const refreshToken = Cookies.get('ducex_refresh_token');
      if (!refreshToken) {
        isRefreshing = false;
        Cookies.remove('ducex_access_token');
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/portal/login')) {
          window.location.href = `/portal/login?redirect=${encodeURIComponent(window.location.pathname)}`;
        }
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
        const { accessToken, refreshToken: newRefresh } = data.data;

        Cookies.set('ducex_access_token', accessToken, { expires: 1/96 }); // 15 mins
        Cookies.set('ducex_refresh_token', newRefresh, { expires: 7 }); // 7 days

        portalApiClient.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        originalRequest.headers['Authorization'] = 'Bearer ' + accessToken;

        processQueue(null, accessToken);
        return portalApiClient(originalRequest);
      } catch (err) {
        processQueue(err, null);
        Cookies.remove('ducex_access_token');
        Cookies.remove('ducex_refresh_token');
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/portal/login')) {
          window.location.href = `/portal/login?redirect=${encodeURIComponent(window.location.pathname)}`;
        }
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default portalApiClient;
