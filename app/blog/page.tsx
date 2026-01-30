import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and notes.',
};

type PostMeta = {
  title?: string;
  description?: string;
  thumbnail?: string;
  author?: string;
  publishedAt?: string;
  tags?: string[];
  category?: string;
  readingTime?: string;
};

function toTime(value: unknown): number {
  if (typeof value !== 'string') return 0;
  const t = new Date(value).getTime();
  return Number.isFinite(t) ? t : 0;
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
    .map(({ slug }) => getPostBySlug(slug))
    .filter(Boolean)
    .map((post) => ({
      slug: post!.slug,
      metadata: post!.metadata as PostMeta,
    }))
    .sort((a, b) => toTime(b.metadata.publishedAt) - toTime(a.metadata.publishedAt));

  return (
    <main className="min-h-screen">
      <header className="mx-auto max-w-5xl px-6 pt-16 pb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
          <span className="opacity-90">Blog</span>
        </div>

        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          Articles
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          A collection of posts about web development, engineering, and production learnings.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-8 text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            No posts yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {posts.map((post) => {
              const href = `/blog/${post.slug}`;
              const title = post.metadata.title ?? post.slug;

              return (
                <Link
                  key={post.slug}
                  href={href}
                  className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative">
                    {post.metadata.thumbnail ? (
                      <div className="relative h-44 w-full sm:h-48">
                        <Image
                          src={post.metadata.thumbnail}
                          alt=""
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-44 w-full bg-linear-to-br from-slate-100 to-slate-200 dark:from-white/10 dark:to-white/5 sm:h-48" />
                    )}

                    <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/45 opacity-0 transition group-hover:opacity-100" />
                  </div>

                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      {post.metadata.category ? (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                          {post.metadata.category}
                        </span>
                      ) : null}
                      {post.metadata.publishedAt ? (
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {post.metadata.publishedAt}
                        </span>
                      ) : null}
                    </div>

                    <h2
                      className="mt-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden"
                      title={title}
                    >
                      {title}
                    </h2>

                    {post.metadata.description ? (
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                        {post.metadata.description}
                      </p>
                    ) : null}

                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {post.metadata.readingTime ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-slate-400/80 dark:bg-slate-500" aria-hidden="true" />
                          <span>{post.metadata.readingTime} read</span>
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
