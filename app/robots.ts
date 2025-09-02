import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sreyansu.space/sitemap.xml',
    host: 'https://sreyansu.space',
  }
}
