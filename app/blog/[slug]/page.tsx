// app/blog/[slug]/page.tsx
import posts from '@/data/posts.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// تعریف ساختار داده بر اساس JSON شما
interface Post {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  publishedAt: string;
  tags: string[];
  category: string;
  readingTime: string;
  content: string;
}

const typedPosts = posts as Post[];

export async function generateStaticParams() {
  return typedPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = typedPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.thumbnail],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = typedPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <header className="mb-8">
        <span className="text-blue-600 font-medium">{post.category}</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mt-4 gap-4">
          <span>{post.author}</span>
          <span>{post.publishedAt}</span>
          <span>{post.readingTime} read</span>
        </div>
      </header>

      <img src={post.thumbnail} alt={post.title} className="w-full rounded-2xl mb-8" />

      <div className="prose prose-blue lg:prose-xl max-w-none">
        {/* برای نمایش متن‌های طولانی بهتر است از کتابخانه‌هایی مثل react-markdown استفاده کنید */}
        {post.content}
      </div>

      <div className="flex gap-2 mt-10">
        {post.tags.map(tag => (
          <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}