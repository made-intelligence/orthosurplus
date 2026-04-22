const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://orthosurplus.com'

export default function sitemap() {
  const now = new Date()
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/catalogue', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/product', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/membership', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/vendor', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/kits', priority: 0.5, changeFrequency: 'monthly' },
  ]

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
