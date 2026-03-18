import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

function publishedAtTime(data: Record<string, unknown>): number {
  const raw = data.publishedAt;
  if (typeof raw !== 'string') return 0;
  const t = new Date(raw).getTime();
  return Number.isFinite(t) ? t : 0;
}

export function getAllPosts() {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md') && fileName !== 'cv.md');

  const withTime = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
    return { slug, time: publishedAtTime(data as Record<string, unknown>) };
  });

  withTime.sort((a, b) => b.time - a.time);

  return withTime.map(({ slug }) => ({ slug }));
}

export function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: data,
      content,
    };
  } catch {
    return null;
  }
}