"use client";

import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <main className="bg-[#f5efe9] text-[#241915]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src="/images/about/about-hero.jpg"
          alt={t("heroAlt")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,12,9,0.74)_0%,rgba(18,12,9,0.58)_45%,rgba(18,12,9,0.66)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-[#d1b196]">
              {t("heroLabel")}
            </p>

            <h1 className="max-w-4xl font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] text-white md:text-6xl lg:text-7xl">
              {t("heroTitle")}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#f0e2d6] md:text-lg">
              {t("heroDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
          <div className="animate-fade-up">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b38968]">
              {t("introLabel")}
            </p>

            <h2 className="max-w-xl font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] text-[#241915] md:text-5xl lg:text-6xl">
              {t("introTitle")}
            </h2>

            <div className="mt-7 h-[2px] w-24 bg-[#c6a07d]" />

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f4b3e] md:text-lg">
              {t("introDesc1")}
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#5f4b3e] md:text-lg">
              {t("introDesc2")}
            </p>

            <Link
              href="/company-profile"
              className="mt-9 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#231813] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(36,26,21,0.14)] transition duration-300 hover:-translate-y-1 hover:bg-[#3a2a22]"
            >
              {t("companyProfile")}
            </Link>
          </div>

          <div className="animate-fade-up-delay">
            <div className="overflow-hidden rounded-[34px] border border-[#dccfc4] bg-white shadow-[0_20px_50px_rgba(36,26,21,0.10)]">
              <img
                src="/images/about/about-hero.jpg"
                alt={t("introImageAlt")}
                className="h-[420px] w-full object-cover object-center md:h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FACTORY */}
      <section className="bg-[#eee6de] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 max-w-4xl animate-fade-up">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b38968]">
              {t("factoryLabel")}
            </p>

            <h2 className="max-w-4xl font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] text-[#241915] md:text-5xl lg:text-6xl">
              {t("factoryTitle")}
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[#5f4b3e] md:text-lg">
              {t("factoryDesc")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="animate-fade-up">
              <div className="overflow-hidden rounded-[30px] border border-[#dccfc4] bg-white shadow-[0_20px_50px_rgba(36,26,21,0.10)]">
                <video
                  src="/videos/factory.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[280px] w-full object-cover md:h-[340px] lg:h-[380px]"
                />
              </div>
            </div>

            <div className="grid gap-5 animate-fade-up-delay">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-[26px] border border-[#ddd0c4] bg-[rgba(255,255,255,0.80)] p-7 shadow-[0_14px_34px_rgba(36,26,21,0.06)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#b38968]">
                    0{item}
                  </p>
                  <h3 className="mt-3 font-[var(--font-heading)] text-[28px] font-semibold text-[#241915]">
                    {t(`factoryCard${item}Title`)}
                  </h3>
                  <p className="mt-4 text-[15px] leading-8 text-[#5f4b3e]">
                    {t(`factoryCard${item}Desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 animate-fade-up-delay md:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[30px] border border-[#dccfc4] bg-white shadow-[0_20px_50px_rgba(36,26,21,0.10)] md:row-span-2">
              <img
                src="/images/about/factory-main.jpg"
                alt={t("factoryMainAlt")}
                className="h-full min-h-[420px] w-full object-cover object-center"
              />
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#dccfc4] bg-white shadow-[0_20px_50px_rgba(36,26,21,0.10)]">
              <img
                src="/images/about/factory-side-1.jpg"
                alt={t("factorySide1Alt")}
                className="h-[280px] w-full object-cover object-center"
              />
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#dccfc4] bg-white shadow-[0_20px_50px_rgba(36,26,21,0.10)]">
              <img
                src="/images/about/factory-side-2.jpg"
                alt={t("factorySide2Alt")}
                className="h-[280px] w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY ALKAN */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 max-w-3xl animate-fade-up">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b38968]">
              {t("whyLabel")}
            </p>
            <h2 className="font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] text-[#241915] md:text-5xl lg:text-6xl">
              {t("whyTitle")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-[26px] border border-[#ddd0c4] bg-[rgba(255,255,255,0.80)] p-7 shadow-[0_14px_34px_rgba(36,26,21,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b38968]">
                  0{item}
                </p>
                <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold text-[#241915]">
                  {t(`whyCard${item}Title`)}
                </h3>
                <p className="mt-4 text-[15px] leading-8 text-[#5f4b3e]">
                  {t(`whyCard${item}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* LOCATIONS */}
<section className="relative overflow-hidden bg-[#eee6de] py-24 lg:py-28">
  <div className="absolute inset-0 opacity-[0.05]">
    <img
      src="/images/hero/hero-stone-wall.jpg"
      alt="Stone texture"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
    <div className="mb-14 max-w-4xl animate-fade-up">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b38968]">
        {t("locationsLabel")}
      </p>

      <h2 className="max-w-4xl font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] text-[#241915] md:text-5xl lg:text-6xl">
        {t("locationsTitle")}
      </h2>

      <p className="mt-7 max-w-3xl text-base leading-8 text-[#5f4b3e] md:text-lg">
        {t("locationsDesc")}
      </p>
    </div>

    <div className="grid gap-7 lg:grid-cols-2">
      {/* HEAD OFFICE */}
      <div className="group rounded-[34px] border border-[#d8c7b8] bg-[rgba(255,255,255,0.78)] p-8 shadow-[0_24px_60px_rgba(36,26,21,0.10)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#b38968] hover:shadow-[0_30px_70px_rgba(36,26,21,0.16)]">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f3e7db] text-2xl text-[#8b5e3c] shadow-inner">
          ◎
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b38968]">
          {t("headOfficeLabel")}
        </p>

        <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold text-[#241915]">
          {t("headOfficeTitle")}
        </h3>

        <p className="mt-4 text-[15px] leading-8 text-[#5f4b3e]">
          {t("headOfficeDesc")}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://maps.app.goo.gl/nw64xrpe6GgAxMCm7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#231813] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3a2a22]"
          >
            {t("viewOnMaps")}
          </a>

          <Link
            href="/contact"
            className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#cdbba9] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#241915] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            {t("contactUs")}
          </Link>
        </div>
      </div>

      {/* FACTORY */}
      <div className="group rounded-[34px] border border-[#d8c7b8] bg-[rgba(255,255,255,0.78)] p-8 shadow-[0_24px_60px_rgba(36,26,21,0.10)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#b38968] hover:shadow-[0_30px_70px_rgba(36,26,21,0.16)]">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f3e7db] text-2xl text-[#8b5e3c] shadow-inner">
          ◈
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b38968]">
          {t("factoryLocationLabel")}
        </p>

        <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold text-[#241915]">
          {t("factoryLocationTitle")}
        </h3>

        <p className="mt-4 text-[15px] leading-8 text-[#5f4b3e]">
          {t("factoryLocationDesc")}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://maps.app.goo.gl/4Jpcjf3dwbtuiWMN8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#231813] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3a2a22]"
          >
            {t("viewOnMaps")}
          </a>

          <Link
            href="/contact"
            className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#cdbba9] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#241915] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            {t("contactUs")}
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* CTA */}
      <section className="bg-[#1b130f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#c8aa90]">
            {t("ctaLabel")}
          </p>

          <h2 className="mx-auto max-w-4xl font-[var(--font-heading)] text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
            {t("ctaTitle")}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#1b130f] transition duration-300 hover:-translate-y-1"
            >
              {t("contact")}
            </Link>

            <Link
              href="/company-profile"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              {t("companyProfile")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}