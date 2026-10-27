"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const content = {
    en: {
      availability: "Available for new opportunities",
      greeting: "Hi, I’m",
      name: "Muhammad Adam",
      description:
        "Full-Stack Developer crafting fast, accessible, thoughtful web experiences.",
      projects: "View My Projects",
      contact: "Contact Me",
      role: "Full-Stack Developer",
      location: "Based in Egypt",
      work: "Open to Work",
      codeName: "Muhammad Adam",
      codeRole: "Full-Stack",
      codePassion: "Building for the web",
      codeStatus: "Open to Work",
    },
    ar: {
      availability: "متاح لفرص عمل جديدة",
      greeting: "مرحبًا، أنا",
      name: "محمد آدم",
      description: "مطور ويب أبني تجارب ويب سريعة وسهلة الوصول ومدروسة بعناية.",
      projects: "استعرض مشاريعي",
      contact: "تواصل معي",
      role: "مطور ويب",
      location: "مقيم في مصر",
      work: "متاح للعمل",
      codeName: "محمد آدم",
      codeRole: "مطور ويب",
      codePassion: "بناء تجارب الويب",
      codeStatus: "متاح للعمل",
    },
  };

  const text = content[language];

  return (
    <section
      id="home"
      className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:gap-12 md:py-24 lg:gap-16 lg:px-10 lg:py-28"
    >
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-emerald-500"
          />
          {text.availability}
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {text.greeting}
          <span className="mt-2 block text-primary">{text.name}</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
          {text.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-on-primary transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
          >
            {text.projects}
            <span aria-hidden="true">{isEnglish ? "→" : "←"}</span>
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong bg-surface px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
          >
            {text.contact}
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          {[text.role, text.location, text.work].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-primary"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-hidden="true"
        className="relative hidden min-h-80 items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-hero-glow via-background to-surface-secondary p-6 sm:p-8 md:flex"
      >
        <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border-strong bg-surface-elevated shadow-2xl shadow-slate-950/10">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
            </div>

            <span className="font-mono text-xs text-muted">developer.js</span>

            <span className="text-xs text-muted">JS</span>
          </div>

          <div className="p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2 text-xs text-muted">
              <span className="size-2 rounded-full bg-emerald-400" />
              {text.codeStatus}
            </div>

            <div className="overflow-x-auto rounded-xl dark:bg-[#0b1428] p-4 font-mono text-xs leading-7 text-slate-200 sm:p-5 sm:text-sm">
              <p>
                <span className="text-purple-300">const</span>{" "}
                <span className="text-sky-300">developer</span> = {"{"}
              </p>

              <p className="pl-4">
                <span className="text-sky-200">name</span>:{" "}
                <span className="text-emerald-300">
                  {JSON.stringify(text.codeName)}
                </span>
                ,
              </p>

              <p className="pl-4">
                <span className="text-sky-200">role</span>:{" "}
                <span className="text-emerald-300">
                  {JSON.stringify(text.codeRole)}
                </span>
                ,
              </p>

              <p className="pl-4">
                <span className="text-sky-200">passion</span>:{" "}
                <span className="text-emerald-300">
                  {JSON.stringify(text.codePassion)}
                </span>
              </p>

              <p>{"};"}</p>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 text-xs text-muted">
              <span>{text.codeStatus}</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
