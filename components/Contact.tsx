"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type FormStatus = "idle" | "error" | "sending" | "success";

export default function Contact() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const content = {
    title: isArabic ? "لنتواصل معًا" : "Let's Connect",
    description: isArabic
      ? "يسعدني التواصل معك بشأن فرص العمل والتعاون في مشاريع الويب."
      : "I'd love to hear from you about job opportunities and web development projects.",
    name: isArabic ? "الاسم" : "Name",
    namePlaceholder: isArabic ? "أدخل اسمك" : "Enter your name",
    email: isArabic ? "البريد الإلكتروني" : "Email Address",
    emailPlaceholder: "name@example.com",
    message: isArabic ? "الرسالة" : "Message",
    messagePlaceholder: isArabic
      ? "اكتب رسالتك هنا..."
      : "Write your message here...",
    submit: isArabic ? "إرسال الرسالة" : "Send Message",
    sending: isArabic ? "جارٍ الإرسال..." : "Sending...",
    success: isArabic
      ? "تم إرسال رسالتك بنجاح. شكرًا لتواصلك!"
      : "Your message was sent successfully. Thank you for reaching out!",
    required: isArabic
      ? "يرجى ملء جميع الحقول المطلوبة."
      : "Please complete all required fields.",
    invalidEmail: isArabic
      ? "يرجى إدخال بريد إلكتروني صحيح."
      : "Please enter a valid email address.",
    genericError: isArabic
      ? "تعذّر إرسال الرسالة. يرجى المحاولة مرة أخرى."
      : "Unable to send your message. Please try again.",
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("idle");
    setErrorMessage("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage(content.required);
      setStatus("error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setErrorMessage(content.invalidEmail);
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      const result: { success?: boolean; error?: string } =
        await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Message sending failed.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMessage(content.genericError);
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary">
            {isArabic ? "تواصل معي" : "GET IN TOUCH"}
          </span>

          <h2
            id="contact-title"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {content.title}
          </h2>

          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
            {content.description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {content.name}
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  if (status !== "sending") setStatus("idle");
                  setErrorMessage("");
                }}
                placeholder={content.namePlaceholder}
                className={inputClasses}
                disabled={status === "sending"}
                aria-invalid={status === "error" && !name.trim()}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {content.email}
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                maxLength={254}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status !== "sending") setStatus("idle");
                  setErrorMessage("");
                }}
                placeholder={content.emailPlaceholder}
                className={inputClasses}
                disabled={status === "sending"}
                aria-invalid={
                  status === "error" &&
                  (!email.trim() ||
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
                }
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {content.message}
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  if (status !== "sending") setStatus("idle");
                  setErrorMessage("");
                }}
                placeholder={content.messagePlaceholder}
                className={`${inputClasses} min-h-36 resize-y`}
                disabled={status === "sending"}
                aria-invalid={status === "error" && !message.trim()}
              />
            </div>
          </div>

          {status === "success" && (
            <p
              role="status"
              aria-live="polite"
              className="mt-5 rounded-xl border border-green-600/30 bg-green-600/5 p-3 text-sm leading-6 text-foreground"
            >
              {content.success}
            </p>
          )}

          {status === "error" && (
            <p
              role="alert"
              className="mt-5 rounded-xl border border-red-500/40 p-3 text-sm leading-6 text-red-600 dark:text-red-400"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-on-primary transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? content.sending : content.submit}

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isArabic ? (
                <path d="M19 12H5m0 0 7-7m-7 7 7 7" />
              ) : (
                <path d="M5 12h14m0 0-7-7m7 7-7 7" />
              )}
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
