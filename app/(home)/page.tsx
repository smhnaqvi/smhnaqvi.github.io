import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

const CARD =
  "rounded-2xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5";
const BADGE =
  "inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200";

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Calibrion AI",
    date: "January 2023 - Present",
    bullets: [
      "Developed reusable UI components using React, boosting productivity and consistency.",
      "Implemented responsive design principles to ensure seamless performance across devices.",
      "Collaborated with UX designers and backend developers to build user-centric applications.",
      "Integrated RESTful APIs into the frontend architecture for smooth data handling and real-time updates.",
    ],
    tags: ["React", "TypeScript", "UI Components", "REST APIs"],
  },
  {
    role: "Frontend Developer",
    company: "Philia",
    date: "June 2023 - Present",
    bullets: [
      "Built dual dashboards for business and client users with rewards, client management, and import tooling.",
      "Used React.js, Material UI, and React Query for the business panel and Next.js for the client panel.",
      "Developed interactive game components like prize wheel and slot machine to improve engagement.",
      "Delivered supporting integrations including a Chrome extension and WHMCS synchronization module.",
    ],
    tags: ["React", "Next.js", "Material UI", "React Query"],
  },
  {
    role: "Frontend Developer",
    company: "Limoo Host",
    date: "April 2022 - Present",
    bullets: [
      "Designed and developed campaign websites using HTML5, CSS3, and JavaScript.",
      "Created a custom UI component library to standardize design patterns and accelerate delivery.",
      "Collaborated with design and backend teams to build responsive, SEO-friendly interfaces.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "SEO"],
  },
  {
    role: "Full-stack Developer",
    company: "Deviatech",
    date: "February 2018 - Present",
    bullets: [
      "Developed and maintained web applications with smooth frontend-backend integrations.",
      "Worked across PHP, MySQL, JavaScript, and Golang stacks.",
      "Improved user interfaces and optimized application performance through efficient coding practices.",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "Golang"],
  },
];

const skillGroups = {
  Frontend: ["React.js", "Next.js", "HTML5", "CSS", "JavaScript", "TypeScript", "Material UI"],
  "State Management": ["Redux", "Zustand", "React Query"],
  Backend: ["Node.js", "PHP", "Golang", "MySQL"],
  "Tools & Focus": ["Git", "WHMCS", "Chrome Extension Dev", "Problem Solving", "UI/UX Focus"],
};

const education = [
  {
    title: "Associate Degree in Computer Software Engineering",
    school: "Islamic Azad University, Mashhad",
    date: "October 2022 - January 2025",
  },
  {
    title: "High School",
    school: "Navvab Safavi, Mashhad",
    date: "February 2018 - January 2021",
  },
];

const projects = [
  {
    name: "Calibrion AI",
    description:
      "AI platform focused on data analysis and business intelligence with reusable frontend systems.",
    href: "https://www.calibrion.ai/",
    image: "/images/portfolio-1.jpg",
    tags: ["React", "Material UI", "React Query", "Django"],
  },
  {
    name: "Philia",
    description:
      "A SaaS engagement platform with dual dashboards, games, and tooling for business and client users.",
    href: "https://philia.vip/",
    image: "/images/portfolio-2.jpg",
    tags: ["Next.js", "React", "Material UI", "REST API"],
  },
  {
    name: "Zoneit",
    description:
      "Cloud hosting website with modern UX patterns and responsive front-end architecture.",
    href: "https://zoneit.cloud/",
    image: "/images/portfolio-3.jpg",
    tags: ["HTML", "CSS", "React", "Next.js"],
  },
];

export const metadata: Metadata = {
  title: "Syed Mohammad Hussain Naqvi - Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 5+ years of experience building scalable React and Next.js applications.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Syed Mohammad Hussain Naqvi - Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 5+ years of experience building scalable React and Next.js applications.",
    url: SITE_URL,
    siteName: "Syed Mohammad Hussain Naqvi",
    images: [{ url: "/images/profile-image.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Mohammad Hussain Naqvi - Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 5+ years of experience building scalable React and Next.js applications.",
    images: ["/images/profile-image.png"],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/30">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            SMHN
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-slate-100">
              Experience
            </a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-slate-100">
              Skills
            </a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-100">
              Projects
            </a>
            <Link href="/cv" className="hover:text-slate-900 dark:hover:text-slate-100">
              CV
            </Link>
            <Link href="/blog" className="hover:text-slate-900 dark:hover:text-slate-100">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-black" />
        <div className="mx-auto grid max-w-5xl gap-8 px-6 pt-14 pb-12 md:grid-cols-[1.25fr_0.75fr] md:items-center">
          <div>
            <span className={BADGE}>Available for work</span>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Syed Mohammad Hussain Naqvi
            </h1>
            <p className="mt-3 max-w-2xl text-pretty text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              Dynamic Frontend Developer with over 5 years of experience creating scalable,
              high-performance applications using React.js, Next.js, and modern web technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                View Projects
              </a>
              <Link
                href="/cv"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              >
                View CV
              </Link>
              <a
                href="/cv.pdf"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              >
                Download PDF
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["React.js", "Next.js", "TypeScript", "REST APIs", "UI/UX"].map((item) => (
                <span key={item} className={BADGE}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className={`${CARD} p-5`}>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100 dark:bg-white/10">
                <Image
                  src="/images/profile-image.png"
                  alt="Syed Mohammad Hussain Naqvi"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Senior Frontend Developer
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Lahore, Pakistan</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-slate-100 px-3 py-2 dark:bg-white/10">
                <p className="text-slate-500 dark:text-slate-400">Experience</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">5+ Years</p>
              </div>
              <div className="rounded-xl bg-slate-100 px-3 py-2 dark:bg-white/10">
                <p className="text-slate-500 dark:text-slate-400">Primary Stack</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">React / Next.js</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          Experience
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Professional journey building high-impact products across startups and SaaS platforms.
        </p>
        <div className="mt-7 space-y-6">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className={`${CARD} p-6`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {item.role} · {item.company}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {item.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className={BADGE}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          Skills
        </h2>
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div key={group} className={`${CARD} p-6`}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className={BADGE}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          Featured Projects
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Selected products where I built reusable systems and responsive user experiences.
        </p>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={`${CARD} group overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className="relative h-40 w-full">
                <Image src={project.image} alt={project.name} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={BADGE}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <article className={`${CARD} p-6`}>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Education</h2>
            <div className="mt-4 space-y-4">
              {education.map((entry) => (
                <div key={entry.title}>
                  <h3 className="font-medium text-slate-900 dark:text-slate-100">{entry.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{entry.school}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{entry.date}</p>
                </div>
              ))}
            </div>
          </article>

          <article className={`${CARD} p-6`}>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Languages & Contact</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Urdu", "English", "Persian"].map((language) => (
                <span key={language} className={BADGE}>
                  {language}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-2 text-sm">
              <p className="text-slate-600 dark:text-slate-300">
                Email:{" "}
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="mailto:smhnaqvi111@gmail.com">
                  smhnaqvi111@gmail.com
                </a>
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Phone:{" "}
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="tel:+923287538988">
                  +92 328 753 8988
                </a>
              </p>
              <div className="flex gap-3 pt-2">
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="https://github.com/smhnaqvi" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="https://www.linkedin.com/in/smhnaqvi/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pt-4 pb-16">
        <article className={`${CARD} p-8`}>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Let&apos;s work together</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
            If you are hiring for frontend roles, building a Next.js product, or need UI engineering support, I would love to collaborate.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:smhnaqvi111@gmail.com"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Email Me
            </a>
            <a
              href="/cv.pdf"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </article>
      </section>

      <footer className="border-t border-slate-200/70 py-10 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6 text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Syed Mohammad Hussain Naqvi
        </div>
      </footer>
    </main>
  );
}

