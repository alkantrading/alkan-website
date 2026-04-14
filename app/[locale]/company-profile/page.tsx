"use client";

import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

export default function CompanyProfilePage() {
  const t = useTranslations("CompanyProfile");

  return (
    <main className="bg-[#f5efe9] text-[#241915]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1b130f_0%,#2a1d17_45%,#140d0a_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_top_left,rgba(197,154,114,0.28),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-[#d1b196]">
              {t("heroLabel")}
            </p>

            <h1 className="max-w-4xl font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] text-white md:text-6xl lg:text-7xl">
              {t("heroTitle")}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#eadfd5] md:text-lg">
              {t("heroDesc")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/files/company-profile.pdf"
                download
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#1b130f]"
              >
                {t("download")}
              </a>

              <Link
                href="/contact"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b38968]">
              {t("introLabel")}
            </p>

            <h2 className="max-w-xl font-[var(--font-heading)] text-4xl font-semibold md:text-5xl lg:text-6xl">
              {t("introTitle")}
            </h2>

            <div className="mt-7 h-[2px] w-24 bg-[#c6a07d]" />

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f4b3e] md:text-lg">
              {t("introDesc1")}
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#5f4b3e] md:text-lg">
              {t("introDesc2")}
            </p>
          </div>

          <div className="grid gap-5">
            {[1,2,3].map((i)=>(
              <div key={i} className="rounded-[28px] border border-[#ddd0c4] bg-white p-7">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b38968]">
                  0{i}
                </p>
                <h3 className="mt-3 text-[28px] font-semibold">
                  {t(`card${i}Title`)}
                </h3>
                <p className="mt-4 text-[15px] leading-8 text-[#5f4b3e]">
                  {t(`card${i}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="bg-[#eee6de] py-24 lg:py-28 text-center">
        <h2 className="text-4xl font-semibold">{t("downloadTitle")}</h2>
        <p className="mt-4 text-[#5f4b3e]">{t("downloadDesc")}</p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="/files/company-profile.pdf" download className="btn">
            {t("download")}
          </a>
          <a href="/files/company-profile.pdf" target="_blank" className="btn">
            {t("preview")}
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1b130f] py-20 text-white text-center">
        <p>{t("ctaLabel")}</p>
        <h2 className="text-4xl mt-4">{t("ctaTitle")}</h2>

        <div className="mt-6 flex justify-center gap-4">
          <a href="/files/company-profile.pdf" className="btn">
            {t("download")}
          </a>
          <Link href="/contact" className="btn-outline">
            {t("contact")}
          </Link>
        </div>
      </section>
    </main>
  );
}