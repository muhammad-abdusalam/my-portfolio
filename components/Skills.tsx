"use client";

import { useLanguage } from "@/components/LanguageProvider";

const skills = [
  {
    name: "JavaScript",
    category: "language",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-9">
        <rect x="3" y="3" width="18" height="18" fill="#F7DF1E" />
        <text
          x="12"
          y="12"
          fill="#000000"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="central"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "React",
    category: "frontend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-9 text-[#61DAFB]"
      >
        <circle cx="12" cy="12" r="2.1" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.1" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="3.9" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="3.9"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="3.9"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-9 text-[#38BDF8]"
      >
        <path
          d="M12 6.5c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.1 1.1 2.3 2.3 4.7 2.3 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C15.6 7.7 14.4 6.5 12 6.5ZM6 12.5c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.1 1.1 2.3 2.3 4.7 2.3 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C9.6 13.7 8.4 12.5 6 12.5Z"
          transform="translate(0 -1)"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "language",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-9">
        <rect x="3" y="3" width="18" height="18" fill="#3178C6" />
        <text
          x="12"
          y="12"
          fill="#FFFFFF"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="central"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-9 text-foreground"
      >
        <circle
          cx="12"
          cy="12"
          r="9.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7.5 16V8l9 9M14.5 8v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Git",
    category: "tools",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-9 text-[#F05032]"
      >
        <path d="M21.4 11.1 12.9 2.6a1.9 1.9 0 0 0-2.7 0L8.5 4.3l2.2 2.2a2.4 2.4 0 0 1 3.1 3.1l2.1 2.1a2.4 2.4 0 1 1-1.4 1.4l-2-2a2.4 2.4 0 0 1-3.1-3.1L7.2 5.8l-4.6 4.6a1.9 1.9 0 0 0 0 2.7l8.5 8.5a1.9 1.9 0 0 0 2.7 0l7.6-7.6a1.9 1.9 0 0 0 0-2.9Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "tools",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-9 text-foreground"
      >
        <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
];

const content = {
  en: {
    eyebrow: "WHAT I WORK WITH",
    title: "My Skills",
    description:
      "I use a range of technologies and tools to build interactive, responsive web interfaces, and I continue to improve my skills through hands-on projects and practice.",
  },
  ar: {
    eyebrow: "التقنيات التي أستخدمها",
    title: "مهاراتي",
    description:
      "أستخدم مجموعة من التقنيات والأدوات لبناء واجهات ويب تفاعلية ومتجاوبة، وأطوّر مهاراتي باستمرار من خلال المشاريع والتطبيق العملي.",
  },
};

export default function Skills() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-primary">
          {text.eyebrow}
        </p>

        <h2
          id="skills-title"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {text.title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {text.description}
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className="group flex min-h-28 items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary/50 hover:bg-surface-secondary motion-reduce:transition-none sm:min-h-32 sm:flex-col sm:justify-center sm:gap-3 sm:p-5">
              <span className="flex size-10 shrink-0 items-center justify-center sm:size-12">
                {skill.icon}
              </span>

              <span className="text-sm font-semibold text-foreground sm:text-base">
                {skill.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
