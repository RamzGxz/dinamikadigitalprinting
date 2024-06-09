import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dinamikaprinting.my.id',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://dinamikaprinting.my.id/product',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://dinamikaprinting.my.id/auth/login',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://dinamikaprinting.my.id/auth/register',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}