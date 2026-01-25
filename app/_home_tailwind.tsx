import React from "react";
import Link from "next/link";
import posts from "@/data/posts.json"; // فرض بر این است که فایل JSON را در این مسیر ساخته‌اید

// تعریف تایپ برای پست‌ها
interface Post {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  publishedAt: string;
}

// NOTE: این کامپوننت فقط برای نگه‌داری نسخه Tailwind قبلی است و route نیست.
export default function HomeTailwindBackup() {
  const latestPosts = (posts as Post[]).slice(0, 3);

  return (
    <div className="bg-[#0f172a] text-white font-sans">
      {/* Navigation - تبدیل شده به Tailwind */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">SMHN</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <Link href="/blog" className="hover:text-white transition-colors text-blue-400">
              Blog
            </Link>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm">
              <span>👋 Hello, I&apos;m</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Syed Mohammad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Hussain Naqvi
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 font-medium">
              Senior Frontend Developer
            </h2>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              Creating exceptional digital experiences with modern web technologies. Expert in building
              scalable, user-centric applications.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image Area */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
              <img
                src="/images/profile-image.png"
                alt="Syed Mohammad Hussain Naqvi"
                className="relative z-10 w-full h-full object-cover rounded-3xl border border-slate-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- New Blog Section (Automated from JSON) --- */}
      <section id="blog" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
              <p className="text-slate-400">Insights into modern web development</p>
            </div>
            <Link href="/blog" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
              View All Posts <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <article className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-2 duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <time className="text-xs text-slate-500">{post.publishedAt}</time>
                    <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-3 line-clamp-2">{post.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

