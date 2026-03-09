import type { MetadataRoute } from 'next'

const BASE_URL = 'https://learningenglishgeuwat-ten.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/register`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]
}
