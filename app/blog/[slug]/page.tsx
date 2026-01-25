// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts } from '@/lib/posts'; // تابعی برای گرفتن همه پست‌ها هم اضافه می‌کنیم

interface Props {
  params: Promise<{ slug: string }>;
}

// ۱. تولید مسیرهای استاتیک (جایگزین دیتای JSON)
export async function generateStaticParams() {
  const posts = getAllPosts(); // تابعی که نام فایل‌ها را برمی‌گرداند
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ۲. تولید متادیتا برای سئو
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

// ۳. کامپوننت اصلی صفحه
export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <header className="mb-8">
        <span className="text-blue-600 font-medium">{post.metadata.category}</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">{post.metadata.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mt-4 gap-4">
          <span>{post.metadata.author}</span>
          <span>{post.metadata.publishedAt}</span>
          <span>{post.metadata.readingTime} read</span>
        </div>
      </header>

      {/* استفاده از تگ img یا Image نکست */}
      <img src={post.metadata.thumbnail} alt={post.metadata.title} className="w-full rounded-2xl mb-8" />

      {/* بخش نمایش محتوای مارک‌داون */}
      <div className="prose prose-blue lg:prose-xl max-w-none dark:prose-invert">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="flex gap-2 mt-10">
        {post.metadata.tags.map((tag: string) => (
          <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}