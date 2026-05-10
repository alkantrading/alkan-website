"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className="bg-[#f5efe9] text-[#241915]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1b130f_0%,#2a1d17_45%,#140d0a_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d1b196]">
              {t("label")}
            </p>

            <h1 className="font-[var(--font-heading)] text-5xl font-semibold leading-tight text-white md:text-6xl">
              {t("title")}
            </h1>

            <p className="mt-6 text-lg text-[#eadfd5] leading-8">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </section>
{/* CONTACT CARDS */}
<section className="py-24">
  <motion.div
    variants={stagger}
    className="mx-auto grid max-w-7xl gap-7 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-10"
  >
    {/* EMAIL */}
    <motion.div
      variants={fadeUp}
      className="group rounded-[32px] border border-[#d8c7b8] bg-[rgba(255,255,255,0.72)] p-8 shadow-[0_18px_45px_rgba(36,26,21,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#b38968] hover:shadow-[0_28px_60px_rgba(36,26,21,0.16)]"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e7db] text-[#8b5e3c] shadow-inner">
        ✉
      </div>

      <p className="text-[11px] uppercase tracking-[0.32em] text-[#b38968]">
        {t("email")}
      </p>

      <h3 className="mt-4 text-2xl font-semibold text-[#241915] transition duration-300 group-hover:text-[#8b5e3c]">
        {t("emailTitle")}
      </h3>

      <a
        href="mailto:info@alkan.com.sa"
        className="mt-4 block text-[15px] leading-7 text-[#6b5a4d] transition duration-300 group-hover:text-[#241915]"
      >
        {t("emailValue")}
      </a>
    </motion.div>

    {/* PHONE */}
    <motion.div
      variants={fadeUp}
      className="group rounded-[32px] border border-[#d8c7b8] bg-[rgba(255,255,255,0.72)] p-8 shadow-[0_18px_45px_rgba(36,26,21,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#b38968] hover:shadow-[0_28px_60px_rgba(36,26,21,0.16)]"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e7db] text-[#8b5e3c] shadow-inner">
        ☎
      </div>

      <p className="text-[11px] uppercase tracking-[0.32em] text-[#b38968]">
        {t("phone")}
      </p>

      <h3 className="mt-4 text-2xl font-semibold text-[#241915] transition duration-300 group-hover:text-[#8b5e3c]">
        {t("phoneTitle")}
      </h3>

      <a
        href="tel:+966537534345"
        className="mt-4 block text-[15px] leading-7 text-[#6b5a4d] transition duration-300 group-hover:text-[#241915]"
      >
        {t("phoneValue")}
      </a>
    </motion.div>

    {/* WHATSAPP */}
    <motion.div
      variants={fadeUp}
      className="group rounded-[32px] border border-[#d8c7b8] bg-[rgba(255,255,255,0.72)] p-8 shadow-[0_18px_45px_rgba(36,26,21,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#b38968] hover:shadow-[0_28px_60px_rgba(36,26,21,0.16)]"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e7db] text-[#8b5e3c] shadow-inner">
        ✆
      </div>

      <p className="text-[11px] uppercase tracking-[0.32em] text-[#b38968]">
        {t("whatsapp")}
      </p>

      <h3 className="mt-4 text-2xl font-semibold text-[#241915] transition duration-300 group-hover:text-[#8b5e3c]">
        {t("whatsappTitle")}
      </h3>

      <a
        href="https://wa.me/966537534345"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[#231813] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#3a2a22]"
      >
        {t("whatsappBtn")}
      </a>
    </motion.div>

    {/* LINKEDIN */}
    <motion.div
      variants={fadeUp}
      className="group rounded-[32px] border border-[#d8c7b8] bg-[rgba(255,255,255,0.72)] p-8 shadow-[0_18px_45px_rgba(36,26,21,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#b38968] hover:shadow-[0_28px_60px_rgba(36,26,21,0.16)]"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e7db] text-[#8b5e3c] shadow-inner">
        in
      </div>

      <p className="text-[11px] uppercase tracking-[0.32em] text-[#b38968]">
        {t("linkedin")}
      </p>

      <h3 className="mt-4 text-2xl font-semibold text-[#241915] transition duration-300 group-hover:text-[#8b5e3c]">
        {t("linkedinTitle")}
      </h3>

      <a
        href="https://www.linkedin.com/company/alkan-trading"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-full border border-[#ccb8a6] bg-white/60 px-6 py-3 text-sm font-medium text-[#241915] transition-all duration-300 hover:scale-105 hover:bg-[#f1e7dd]"
      >
        {t("linkedinBtn")}
      </a>
    </motion.div>
  </motion.div>
</section>
{/* FORM */}
<section className="relative overflow-hidden bg-[#eee6de] py-24">
  <div className="absolute inset-0 opacity-[0.04]">
    <img
      src="/images/hero/hero-marble.jpg"
      alt="Marble texture"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
    
    {/* IMAGE SIDE */}
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-[36px] shadow-[0_30px_80px_rgba(36,26,21,0.18)]"
    >
      <img
      src="/images/hero/hero-stone-wall.jpg"
        alt="Luxury marble project"
        className="h-full min-h-[620px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,9,0.08)_0%,rgba(20,12,9,0.72)_100%)]" />

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <p className="text-xs uppercase tracking-[0.34em] text-[#e0c3a7]">
          ALKAN MARBLE & STONE
        </p>

        <h3 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold leading-tight">
          Crafted for timeless luxury spaces
        </h3>

        <p className="mt-5 max-w-md text-sm leading-7 text-[#f1e5da]">
          Premium marble, granite, and custom stone solutions tailored for villas, hospitality, and architectural excellence.
        </p>
      </div>
    </motion.div>

    {/* FORM SIDE */}
    <motion.div
      variants={fadeUp}
      className="rounded-[36px] border border-[#d8c7b8] bg-[rgba(255,255,255,0.55)] p-8 shadow-[0_24px_60px_rgba(36,26,21,0.10)] backdrop-blur-md md:p-10"
    >
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.34em] text-[#b38968]">
          CONTACT FORM
        </p>

        <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold text-[#241915]">
          {t("formTitle")}
        </h2>

        <div className="mt-5 h-[2px] w-20 bg-[#c6a07d]" />
      </div>

      <form className="grid gap-5">
        <input
          placeholder={t("name")}
          className="h-14 rounded-2xl border border-[#cbb8a8] bg-white/60 px-5 text-[#241915] outline-none transition duration-300 placeholder:text-[#9b7f6a] focus:border-[#b38968] focus:bg-white focus:shadow-[0_0_0_4px_rgba(179,137,104,0.12)]"
        />

        <input
          placeholder={t("emailInput")}
          className="h-14 rounded-2xl border border-[#cbb8a8] bg-white/60 px-5 text-[#241915] outline-none transition duration-300 placeholder:text-[#9b7f6a] focus:border-[#b38968] focus:bg-white focus:shadow-[0_0_0_4px_rgba(179,137,104,0.12)]"
        />

        <textarea
          placeholder={t("message")}
          rows={7}
          className="resize-none rounded-2xl border border-[#cbb8a8] bg-white/60 px-5 py-4 text-[#241915] outline-none transition duration-300 placeholder:text-[#9b7f6a] focus:border-[#b38968] focus:bg-white focus:shadow-[0_0_0_4px_rgba(179,137,104,0.12)]"
        />

        <button className="mt-3 rounded-full bg-[#231813] py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_14px_34px_rgba(36,26,21,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3a2a22] hover:shadow-[0_20px_45px_rgba(36,26,21,0.28)]">
          {t("send")}
        </button>
      </form>
    </motion.div>
  </div>
</section>
      {/* CTA */}
      <section className="py-16 text-center">
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-semibold">
            {t("ctaTitle")}
          </h2>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://wa.me/966537534345"
              target="_blank"
              className="bg-[#231813] text-white px-6 py-3 rounded-full"
            >
              {t("whatsapp")}
            </a>

            <a
              href="https://www.linkedin.com/company/alkan-trading"
              target="_blank"
              className="border px-6 py-3 rounded-full"
            >
              {t("linkedin")}
            </a>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}