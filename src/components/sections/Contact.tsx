"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      setFormData({ name: "", subject: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionTitle>{t.contact.title}</SectionTitle>
      <div className="text-right">
        <div className="space-y-6">
          <div>
            <p className="text-body font-display text-[var(--c-text-primary)]">
              {t.contact.intro}
            </p>
            <p className="text-body font-display text-[var(--c-text-secondary)]">
              {t.contact.emailText}{" "}
              <a
                href="mailto:rahim100codeur@gmail.com"
                className="text-[var(--text-accent)] hover:underline font-medium transition-colors hover:text-[var(--text-accent)]"
              >
                rahim100codeur@gmail.com
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.form.name}
                required
                className="w-full rounded-sm border border-[var(--c-border-input)] bg-transparent px-4 py-2 text-[var(--c-text-primary)] placeholder-[var(--c-placeholder)] transition-colors focus:border-[var(--text-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.contact.form.subject}
                required
                className="w-full rounded-sm border border-[var(--c-border-input)] bg-transparent px-4 py-2 text-[var(--c-text-primary)] placeholder-[var(--c-placeholder)] transition-colors focus:border-[var(--text-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.form.email}
                required
                className="w-full rounded-sm border border-[var(--c-border-input)] bg-transparent px-4 py-2 text-[var(--c-text-primary)] placeholder-[var(--c-placeholder)] transition-colors focus:border-[var(--text-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.form.message}
                required
                rows={6}
                className="w-full resize-none rounded-sm border border-[var(--c-border-input)] bg-transparent px-4 py-2 text-[var(--c-text-primary)] placeholder-[var(--c-placeholder)] transition-colors focus:border-[var(--text-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--text-accent)]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-sm border border-[var(--c-bg-contrast)] bg-[var(--c-text-primary)] px-5 py-2 font-medium text-[var(--c-text-on-light)] transition-all duration-100 hover:cursor-pointer hover:px-6 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span>
                {status === "sending"
                  ? t.contact.form.sending
                  : status === "success"
                    ? t.contact.form.sent
                    : t.contact.form.send}
              </span>
            </button>

            {status === "success" && (
              <p className="text-sm text-[var(--text-accent)]">
                {t.contact.form.success}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-[var(--c-feedback-error-text)]">
                {t.contact.form.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
