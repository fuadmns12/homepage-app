import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://learningenglishgeuwat-ten.vercel.app/sitemap.xml',
    host: 'https://learningenglishgeuwat-ten.vercel.app',
  }
}
