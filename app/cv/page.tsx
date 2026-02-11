import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { SITE_URL } from "@/lib/site";

const cvPath = path.join(process.cwd(), "content", "cv.md");
const cvFile = fs.readFileSync(cvPath, "utf8");
const { data, content } = matter(cvFile);

type CvMetadata = {
  title?: string;
  description?: string;
};

const metadataFromFile = data as CvMetadata;

export const metadata: Metadata = {
  title: metadataFromFile.title ?? "CV",
  description: metadataFromFile.description ?? "Curriculum vitae",
  alternates: {
    canonical: `${SITE_URL}/cv`,
  },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/cv`,
    title: metadataFromFile.title ?? "CV",
    description: metadataFromFile.description ?? "Curriculum vitae",
  },
  twitter: {
    card: "summary",
    title: metadataFromFile.title ?? "CV",
    description: metadataFromFile.description ?? "Curriculum vitae",
  },
};

export default function CvPage() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 pt-12 pb-6">
        <div>
          <p className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
            Curriculum Vitae
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            {metadataFromFile.title ?? "CV"}
          </h1>
        </div>
        <a
          href="/cv.pdf"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
        >
          Download PDF
        </a>
      </header>

      <article className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
          <div className="prose prose-slate max-w-none dark:prose-invert lg:prose-lg prose-pre:p-0 prose-pre:bg-transparent">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeHighlight,
              ]}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </main>
  );
}
