"use client";

import {Link} from "@/i18n/navigation";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Services");

  const services = [
    {
      number: "01",
      title: t("service1Title"),
      description: t("service1Desc"),
    },
    {
      number: "02",
      title: t("service2Title"),
      description: t("service2Desc"),
    },
    {
      number: "03",
      title: t("service3Title"),
      description: t("service3Desc"),
    },
  ];

  const process = [
    {
      step: "01",
      title: t("process1Title"),
      text: t("process1Desc"),
    },
    {
      step: "02",
      title: t("process2Title"),
      text: t("process2Desc"),
    },
    {
      step: "03",
      title: t("process3Title"),
      text: t("process3Desc"),
    },
    {
      step: "04",
      title: t("process4Title"),
      text: t("process4Desc"),
    },
  ];

  const fadeUp = {
    hidden: {opacity: 0, y: 36},
    show: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.8, ease: "easeOut" as const},
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
          <motion.div variants={fadeUp} className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.36em] text-[#d1b196]">
              {t("label")}
            </p>

            <h1 className="text-5xl font-semibold text-white md:text-6xl lg:text-7xl">
              {t("title")}
            </h1>

            <p className="mt-7 max-w-2xl text-[#eadfd5]">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div variants={stagger} className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.number}
                variants={fadeUp}
                className="rounded-xl bg-white p-6 shadow"
              >
                <p className="text-sm text-[#b38968]">{service.number}</p>
                <h3 className="mt-2 text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-[#5f4b3e]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#eee6de] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div variants={stagger} className="grid gap-6 md:grid-cols-4">
            {process.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="rounded-xl bg-white p-6 shadow"
              >
                <p className="text-sm text-[#b38968]">{item.step}</p>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-3 text-[#5f4b3e]">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <p className="text-sm text-[#b38968]">{t("ctaLabel")}</p>

        <h2 className="mt-4 text-3xl font-semibold">
          {t("ctaTitle")}
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="btn">
            {t("contact")}
          </Link>

          <Link href="/projects" className="btn-outline">
            {t("projects")}
          </Link>
        </div>
      </section>
    </motion.main>
  );
}