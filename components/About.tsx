"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const content = {
    en: {
      eyebrow: "A LITTLE ABOUT ME",
      title: "About Me",
      paragraphs: [
        "Hi, I’m Muhammad Adam, a web developer focused on building interactive and practical user interfaces with React. I enjoy turning ideas into clear, user-friendly web experiences, and I keep learning by building projects and exploring new solutions.",
        "I believe real growth comes from practice, problem-solving, and attention to detail. I’m working toward creating responsive, fast interfaces and writing clean, maintainable code.",
      ],
      highlights: [
        {
          title: "What I enjoy",
          description:
            "Building interfaces with React and improving the user experience.",
          icon: "code",
        },
        {
          title: "Learning by doing",
          description:
            "Developing my skills through projects and solving practical problems.",
          icon: "projects",
        },
        {
          title: "My goal",
          description:
            "Creating reliable, user-friendly interfaces and growing as a web developer.",
          icon: "target",
        },
      ],
    },
    ar: {
      eyebrow: "نبذة عني",
      title: "من أنا",
      paragraphs: [
        "أنا محمد آدم، مطور ويب أركز على بناء واجهات تفاعلية وعملية باستخدام React. أستمتع بتحويل الأفكار إلى تجارب ويب واضحة وسهلة الاستخدام، وأتعلم باستمرار من خلال بناء المشاريع وتجربة حلول جديدة.",
        "أؤمن بأن التطور الحقيقي يأتي من الممارسة وحل المشكلات والاهتمام بالتفاصيل. وأسعى إلى تطوير مهاراتي في بناء واجهات سريعة ومتجاوبة، وكتابة كود منظم يسهل تطويره وصيانته.",
      ],
      highlights: [
        {
          title: "اهتمامي الأساسي",
          description: "React، بناء الواجهات، وتحسين تجربة المستخدم.",
          icon: "code",
        },
        {
          title: "التعلم بالممارسة",
          description:
            "تطوير مهاراتي من خلال المشاريع والتعامل مع المشكلات العملية.",
          icon: "projects",
        },
        {
          title: "هدفي المهني",
          description:
            "بناء واجهات موثوقة وسهلة الاستخدام، والاستمرار في التطور كمطور ويب.",
          icon: "target",
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary">
            {text.eyebrow}
          </p>

          <h2
            id="about-title"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {text.title}
          </h2>

          <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
          {text.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {text.highlights.map((item, index) => (
          <article
            key={item.icon}
            className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50 hover:bg-surface-secondary motion-reduce:transition-none sm:p-7"
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-border bg-surface-elevated text-primary">
              {index === 0 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="m8 8-4 4 4 4" />
                  <path d="m16 8 4 4-4 4" />
                  <path d="m14 5-4 14" />
                </svg>
              )}

              {index === 1 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M8 4v16M3 9h5M3 14h5" />
                  <path d="m12 11 2 2 4-4" />
                </svg>
              )}

              {index === 2 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              )}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
