import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bigpay.amrff.com/growth-hacks',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://bigpay.amrff.com/growth-hacks/proposals',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];
} 