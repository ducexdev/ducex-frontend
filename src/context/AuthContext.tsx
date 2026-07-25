'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '../lib/apiClient';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (accessToken: string, userData: User) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await apiClient.get('/auth/me');
        setUser(data.user);
      } catch (_error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = (accessToken: string, userData: User) => {
    sessionStorage.setItem('accessToken', accessToken);
    setUser(userData);
  };

  const logout = async () => {
    try {
      await apiClient.post('/auth/logout');
    } finally {
      sessionStorage.removeItem('accessToken');
      setUser(null);
      window.location.href = '/portal/login';
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
