import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/portal/',
          '/admin/',
          '/api/',
          '/design-system/',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://www.ducexsolicitors.com/sitemap.xml',
    host: 'https://www.ducexsolicitors.com',
  };
}
