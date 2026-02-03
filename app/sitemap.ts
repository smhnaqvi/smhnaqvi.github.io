import type { MetadataRoute } from 'next';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

const SITE_URL = 'https://smhnaqvi.github.io';

export const dynamic = 'force-static';

function toLastModified(value: unknown): Date {
  if (typeof value !== 'string') return new Date();
  const t = new Date(value);
  return Number.isFinite(t.getTime()) ? t : new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
    .map(({ slug }) => getPostBySlug(slug))
    .filter(Boolean);

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post!.slug}`,
    lastModified: toLastModified(post!.metadata?.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...postEntries,
  ];
}

