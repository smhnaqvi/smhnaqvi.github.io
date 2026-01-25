// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      images: [post.metadata.thumbnail],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen">
      {/* Hero / cover */}
      <header className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={post.metadata.thumbnail} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[var(--color-background)]" />
        </div>

        <div className="mx-auto max-w-5xl px-6 pt-16 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <span className="opacity-90">{post.metadata.category}</span>
          </div>

          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {post.metadata.title}
          </h1>

          {post.metadata.description ? (
            <p className="mt-4 max-w-3xl text-pretty text-base text-white/85 sm:text-lg">
              {post.metadata.description}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80">
            <span className="font-medium text-white/90">{post.metadata.author}</span>
            <span aria-hidden="true">•</span>
            <span>{post.metadata.publishedAt}</span>
            <span aria-hidden="true">•</span>
            <span>{post.metadata.readingTime} read</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px]">
          <div className="min-w-0">
            <div className="prose prose-slate max-w-none dark:prose-invert lg:prose-lg prose-pre:p-0 prose-pre:bg-transparent">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  rehypeHighlight,
                ]}
                components={{
                  pre({ children, ...props }) {
                    return (
                      <pre
                        {...props}
                        className="not-prose my-6 overflow-x-auto rounded-2xl border border-white/10 bg-[#0b1220] p-4 text-sm leading-6 text-white shadow-sm"
                      >
                        {children}
                      </pre>
                    );
                  },
                  code({ className, children, ...props }) {
                    const isInline = !className;
                    if (isInline) {
                      return (
                        <code
                          {...props}
                          className="rounded-md bg-black/5 px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/10"
                        >
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    );
                  },
                  a({ children, ...props }) {
                    return (
                      <a {...props} className="font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500">
                        {children}
                      </a>
                    );
                  },
                  blockquote({ children, ...props }) {
                    return (
                      <blockquote
                        {...props}
                        className="not-prose my-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                      >
                        {children}
                      </blockquote>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Tags</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.metadata.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile tags */}
        <div className="mt-10 flex flex-wrap gap-2 lg:hidden">
          {post.metadata.tags?.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}