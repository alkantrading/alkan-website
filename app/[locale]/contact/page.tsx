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
      <section className="py-20">
        <motion.div
          variants={stagger}
          className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-10"
        >
          {/* EMAIL */}
          <motion.div
            variants={fadeUp}
            className="rounded-[24px] border border-[#ddd0c4] bg-white p-6 shadow"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#b38968]">
              {t("email")}
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              {t("emailTitle")}
            </h3>
            <a
              href="mailto:info@alkan.com.sa"
              className="mt-3 block text-[#5f4b3e] hover:text-black"
            >
              {t("emailValue")}
            </a>
          </motion.div>

          {/* PHONE */}
          <motion.div
            variants={fadeUp}
            className="rounded-[24px] border border-[#ddd0c4] bg-white p-6 shadow"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#b38968]">
              {t("phone")}
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              {t("phoneTitle")}
            </h3>
            <a
              href="tel:+966537534345"
              className="mt-3 block text-[#5f4b3e] hover:text-black"
            >
              {t("phoneValue")}
            </a>
          </motion.div>

          {/* WHATSAPP */}
          <motion.div
            variants={fadeUp}
            className="rounded-[24px] border border-[#ddd0c4] bg-white p-6 shadow"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#b38968]">
              {t("whatsapp")}
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              {t("whatsappTitle")}
            </h3>

            <a
              href="https://wa.me/966537534345"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-[#231813] px-5 py-2 text-white text-sm hover:bg-[#3a2a22]"
            >
              {t("whatsappBtn")}
            </a>
          </motion.div>

          {/* LINKEDIN */}
          <motion.div
            variants={fadeUp}
            className="rounded-[24px] border border-[#ddd0c4] bg-white p-6 shadow"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#b38968]">
              {t("linkedin")}
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              {t("linkedinTitle")}
            </h3>

            <a
              href="https://www.linkedin.com/company/alkan-trading"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full border border-[#ccb8a6] px-5 py-2 text-sm hover:bg-[#f1e7dd]"
            >
              {t("linkedinBtn")}
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* FORM */}
      <section className="bg-[#eee6de] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold mb-6">
              {t("formTitle")}
            </h2>

            <form className="grid gap-4">
              <input
                placeholder={t("name")}
                className="p-3 rounded border"
              />
              <input
                placeholder={t("emailInput")}
                className="p-3 rounded border"
              />
              <textarea
                placeholder={t("message")}
                rows={5}
                className="p-3 rounded border"
              />
              <button className="bg-[#231813] text-white py-3 rounded-full hover:bg-[#3a2a22]">
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