"use client";

import { useLanguage } from "@/components/LanguageProvider";

const projects = [
  {
    id: "task-manager",
    title: {
      en: "Task Manager",
      ar: "إدارة المهام",
    },
    description: {
      en: "A demo task management app for organizing tasks and tracking progress.",
      ar: "تطبيق تجريبي لتنظيم المهام ومتابعة مستوى الإنجاز.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    type: "tasks",
  },
  {
    id: "weather-app",
    title: {
      en: "Weather App",
      ar: "تطبيق الطقس",
    },
    description: {
      en: "A demo weather interface designed to display current weather information.",
      ar: "واجهة تجريبية لعرض معلومات حالة الطقس بطريقة واضحة.",
    },
    technologies: ["React", "API", "CSS"],
    type: "weather",
  },
  {
    id: "personal-portfolio",
    title: {
      en: "Personal Portfolio",
      ar: "الموقع الشخصي",
    },
    description: {
      en: "A personal website to showcase skills, projects, and development progress.",
      ar: "موقع شخصي لعرض المهارات والمشاريع والتطور في مجال البرمجة.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "portfolio",
  },
];

const content = {
  en: {
    eyebrow: "SOME OF MY WORK",
    title: "My Projects",
    description:
      "A selection of projects showcasing my ability to build modern, interactive, and user-focused web experiences.",
    demo: "Live Demo",
    github: "GitHub",
    placeholder: "Demo project",
    unavailable: "Link will be added later",
  },
  ar: {
    eyebrow: "نماذج من أعمالي",
    title: "مشاريعي",
    description:
      "استكشف مجموعة من مشاريعي التي تعكس مهاراتي في تطوير واجهات ويب حديثة، تجمع بين التصميم المتقن والأداء العالي وسهولة الاستخدام.",
    demo: "معاينة المشروع",
    github: "GitHub",
    placeholder: "مشروع تجريبي",
    unavailable: "ستُضاف الروابط لاحقًا",
  },
};

function ProjectPreview({ type }: { type: string }) {
  if (type === "tasks") {
    return (
      <div
        aria-hidden="true"
        className="flex h-full min-h-44 flex-col gap-3 rounded-xl border border-border bg-background p-4"
      >
        <div className="flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-foreground/15" />
          <div className="size-6 rounded-lg bg-primary/15" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-primary/10 p-2">
            <div className="h-2 w-8 rounded-full bg-primary/40" />
            <div className="mt-3 h-4 w-5 rounded bg-primary/20" />
          </div>
          <div className="rounded-lg bg-surface-secondary p-2">
            <div className="h-2 w-8 rounded-full bg-foreground/20" />
            <div className="mt-3 h-4 w-5 rounded bg-foreground/10" />
          </div>
          <div className="rounded-lg bg-surface-secondary p-2">
            <div className="h-2 w-8 rounded-full bg-foreground/20" />
            <div className="mt-3 h-4 w-5 rounded bg-foreground/10" />
          </div>
        </div>
        {[0, 1, 2].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="size-3 rounded border border-border-strong" />
            <div
              className={`h-2 rounded-full bg-foreground/10 ${
                item === 1 ? "w-2/5" : "w-3/5"
              }`}
            />
          </div>
        ))}
      </div>
    );
  }

  if (type === "weather") {
    return (
      <div
        aria-hidden="true"
        className="flex h-full min-h-44 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/15 via-primary/10 to-indigo-500/15 p-4"
      >
        <div className="text-4xl" aria-hidden="true">
          ☀️
        </div>
        <div className="mt-2 h-3 w-20 rounded-full bg-foreground/20" />
        <div className="mt-3 h-8 w-16 rounded-lg bg-foreground/10" />
        <div className="mt-3 flex gap-3">
          <div className="h-2 w-8 rounded-full bg-foreground/10" />
          <div className="h-2 w-8 rounded-full bg-foreground/10" />
          <div className="h-2 w-8 rounded-full bg-foreground/10" />
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="flex h-full min-h-44 flex-col justify-between rounded-xl border border-border bg-background p-4"
    >
      <div className="flex items-center justify-between">
        <div className="h-3 w-24 rounded-full bg-foreground/15" />
        <div className="flex gap-1">
          <div className="size-2 rounded-full bg-primary/50" />
          <div className="size-2 rounded-full bg-foreground/15" />
          <div className="size-2 rounded-full bg-foreground/15" />
        </div>
      </div>
      <div>
        <div className="h-3 w-3/4 rounded-full bg-primary/30" />
        <div className="mt-2 h-3 w-1/2 rounded-full bg-foreground/15" />
        <div className="mt-4 h-7 w-20 rounded-lg bg-primary/15" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-primary">
          {text.eyebrow}
        </p>

        <h2
          id="projects-title"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {text.title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {text.description}
        </p>
      </div>

      <ul className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary/40 motion-reduce:transition-none sm:p-5">
              <ProjectPreview type={project.type} />

              <div className="flex flex-1 flex-col pt-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.title[language]}
                  </h3>
                  <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {text.placeholder}
                  </span>
                </div>

                <p className="text-sm leading-7 text-muted">
                  {project.description[language]}
                </p>

                <ul
                  aria-label={
                    language === "ar"
                      ? "التقنيات المستخدمة"
                      : "Technologies used"
                  }
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-lg border border-border bg-surface-secondary px-2.5 py-1.5 text-xs font-medium text-foreground"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-5">
                  <span
                    title={text.unavailable}
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-primary/10 px-3 py-2 text-sm font-semibold text-primary/60"
                  >
                    {text.demo}
                  </span>

                  <span
                    title={text.unavailable}
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-semibold text-muted"
                  >
                    {text.github}
                  </span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
