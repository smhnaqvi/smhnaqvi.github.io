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
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 pt-14 pb-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 flex max-w-3xl flex-col items-center text-center md:order-1 md:items-start md:text-left">
            <span className={BADGE}>Available for work</span>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Syed Mohammad Hussain Naqvi
            </h1>
            <p className="mt-3 text-pretty text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              Dynamic Frontend Developer with over 5 years of experience creating scalable,
              high-performance applications using React.js, Next.js, and modern web technologies.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
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
            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {["React.js", "Next.js", "TypeScript", "REST APIs", "UI/UX"].map((item) => (
                <span key={item} className={BADGE}>
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="https://www.linkedin.com/in/smhnaqvi/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0958a8] hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7 0h3.84v2.19h.06c.53-1.01 1.84-2.19 3.79-2.19 4.06 0 4.81 2.67 4.81 6.14V24h-4v-7.78c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.03-3 4.12V24h-4V8Z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/smhnaqvi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.04-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.39 1.24-3.24-.12-.3-.54-1.53.12-3.2 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.32c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.67.24 2.9.12 3.2.77.85 1.24 1.93 1.24 3.24 0 4.6-2.8 5.61-5.48 5.91.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.21.69.82.57A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://wa.me/923287538988"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#1fb85a] hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.14 1.59 5.95L0 24l6.38-1.67a11.82 11.82 0 0 0 5.67 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.4-8.43Zm-8.46 18.3h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.79 1 1.01-3.69-.23-.38a9.84 9.84 0 0 1-1.5-5.27c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.89a9.77 9.77 0 0 1 2.88 6.96c0 5.43-4.42 9.84-9.85 9.84Zm5.4-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.46-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.66-1.59-.9-2.17-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.13 3.26 5.16 4.57.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="order-1 flex flex-col items-center text-center md:order-2 md:justify-self-end">
            <div className="relative h-[420px] w-[320px]">
              <Image
                src="/images/profile-image.png"
                alt="Syed Mohammad Hussain Naqvi"
                fill
                sizes="380px"
                className="object-contain scale-130 -translate-y-8 md:-translate-y-2 mask-[linear-gradient(to_top,transparent_0%,black_35%,black_100%)] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_35%,black_100%)]"
              />
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

