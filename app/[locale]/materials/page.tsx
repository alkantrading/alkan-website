"use client";

import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

export default function MaterialsPage() {
  const t = useTranslations("Materials");

  const materials = [
    {
      title: t("marbleTitle"),
      image: "/images/materials/marble-cover.jpg",
      href: "/materials/marble",
      description: t("marbleDesc"),
    },
    {
      title: t("graniteTitle"),
      image: "/images/materials/granite-cover.jpg",
      href: "/materials/granite",
      description: t("graniteDesc"),
    },
    {
      title: t("stoneTitle"),
      image: "/images/materials/stone-cover.jpg",
      href: "/materials/stone",
      description: t("stoneDesc"),
    },
  ];

  return (
    <main className="bg-[#211915] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero-marble.jpg"
            alt="Materials background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,16,13,0.78)_0%,rgba(33,25,21,0.96)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#c9a98d]">
            {t("label")}
          </p>

          <h1 className="mt-6 max-w-4xl font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] md:text-6xl lg:text-7xl">
            {t("title")}
          </h1>

          <div className="mt-7 h-px w-24 bg-[#bb9678]" />

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#e6d7ca] md:text-lg">
            {t("description")}
          </p>
        </div>
      </section>

      {/* MATERIALS GRID */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {materials.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-[32px] bg-[#120e0c] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-[1.1]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.9)_100%)]" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-[#d7bfa7]">
                    {t("collection")}
                  </p>

                  <h2 className="mt-3 font-[var(--font-heading)] text-4xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#eadfd6]">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-[#d7bfa7] transition duration-300 group-hover:translate-x-1">
                    {t("explore")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}