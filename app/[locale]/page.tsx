"use client";

import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import {useMemo, useState} from "react";

const materials = [
  {
    title: "Marble",
    image: "/images/materials/marbelo.jpg",
    href: "/materials/marble",
  },
  {
    title: "Granite",
    image: "/images/hero/hero-stone-wall.jpg",
    href: "/materials/granite",
  },
  {
    title: "Stone",
    image: "/images/hero/main-hero.jpg",
    href: "/materials/stone",
  },
  {
    title: "Zellige",
    image: "/images/hero/hero-marble.jpg",
    href: "/materials/zellige",
  },
];

const services = [
  {
    number: "01",
    title: "Material Supply",
    description:
      "Premium marble, granite, stone, and zellige solutions selected for distinguished residential, hospitality, and commercial projects.",
  },
  {
    number: "02",
    title: "Project Execution",
    description:
      "Professional site execution supported by craftsmanship, precision, and a strong focus on quality finishing details.",
  },
  {
    number: "03",
    title: "Custom Stone Solutions",
    description:
      "Tailored support for flooring, walls, facades, feature areas, and bespoke architectural stone applications.",
  },
];

const projectImages = Array.from({ length: 18 }, (_, index) => ({
  src: `/images/projects/project-${index + 1}.jpg`,
  title: `Project ${index + 1}`,
}));

const partnerLogos = Array.from({ length: 11 }, (_, index) => ({
  src: `/images/partners/partner-${index + 1}.png`,
  alt: `Partner ${index + 1}`,
}));

export default function Home() {
  const t = useTranslations("Home");
  const [currentProject, setCurrentProject] = useState(0);

  const duplicatedPartners = useMemo(
    () => [...partnerLogos, ...partnerLogos],
    []
  );

  const goPrevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const goNextProject = () => {
    setCurrentProject((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/images/hero/main-hero.jpg"
          alt="Luxury stone slabs"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,7,0.78)_0%,rgba(10,8,7,0.48)_42%,rgba(10,8,7,0.36)_100%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-16 lg:px-10">
          <div className="max-w-4xl animate-fade-up">
            <p className="inline-flex rounded-full border border-white/10 bg-black/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#ead8c8] backdrop-blur-md md:text-xs">
              {t("badge")}
            </p>

            <h1 className="mt-8 max-w-3xl font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:text-7xl lg:text-[88px]">
              {t("title")}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#f3e8de] md:text-lg lg:text-xl">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/materials"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#1f1713] shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-[#f0e2d2] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              >
                {t("discoverMaterials")}
              </Link>

              <Link
                href="/company-profile"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1f1713]"
              >
                {t("companyProfile")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / VALUE */}
      <section className="relative overflow-hidden bg-[#f7f2ec] py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.05]">
          <img
            src="/images/hero/hero-marble.jpg"
            alt="Marble texture background"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="animate-fade-up">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7860]">
               {t("aboutLabel")}
              </p>

              <h2 className="max-w-2xl font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] text-[#241b16] md:text-5xl lg:text-6xl">
              {t("aboutTitle")}
              </h2>

              <div className="mt-8 h-px w-24 bg-[#bb9678]" />

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#5e5044] md:text-lg">
               {t("aboutText1")}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5e5044] md:text-lg">
                {t("aboutText2")}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#1a1410] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#2a1f18]"
                >
               {t("learnMore")}
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#ccb8a6] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#241b16] transition duration-300 hover:-translate-y-1 hover:bg-white/80"
                >
                {t("contactUs")}
                </Link>
              </div>
            </div>

            <div className="grid gap-5 animate-fade-up-delay">
              <div className="rounded-[30px] border border-[#dacabd] bg-white/75 p-8 shadow-[0_18px_40px_rgba(36,26,21,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(36,26,21,0.12)]">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7860]">
                  01
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#241b16]">
                 {t("valueCard1Title")}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e5044]">
                {t("valueCard1Desc")}  
                </p>
              </div>

              <div className="rounded-[30px] border border-[#dacabd] bg-white/75 p-8 shadow-[0_18px_40px_rgba(36,26,21,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(36,26,21,0.12)]">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7860]">
                  02
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#241b16]">
                {t("valueCard2Title")}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e5044]">
                 {t("valueCard2Desc")}
                </p>
              </div>

              <div className="rounded-[30px] border border-[#dacabd] bg-white/75 p-8 shadow-[0_18px_40px_rgba(36,26,21,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(36,26,21,0.12)]">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7860]">
                  03
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#241b16]">
                 {t("valueCard3Title")}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e5044]">
             {t("valueCard3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* MATERIALS */}
<section className="bg-[#211915] px-6 py-24 text-white lg:px-10 lg:py-28">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="animate-fade-up">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#c9a98d]">
          {t("materialsLabel")}
        </p>
        <h2 className="max-w-3xl font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] md:text-5xl lg:text-6xl">
          {t("materialsTitle")}
        </h2>
      </div>

      <Link
        href="/materials"
        className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#211915]"
      >
        {t("viewAllMaterials")}
      </Link>
    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {materials.map((item) => {
        const content = (
          <div className="group relative overflow-hidden rounded-[32px] bg-[#120e0c] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <img
              src={item.image}
              alt={item.title}
              className="h-[460px] w-full object-cover transition duration-700 group-hover:scale-[1.1]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.85)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(197,154,114,0.25),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#d7bfa7]">
                {t("materialTag")}
              </p>
              <h3 className="mt-3 font-[var(--font-heading)] text-3xl font-semibold text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.8)]">
                alt={item.title}
              </h3>
            </div>
          </div>
        );

        return item.href ? (
          <Link key={item.href} href={item.href}>
            {content}
          </Link>
        ) : (
          <div key={item.href} className="cursor-default">
            {content}
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* SERVICES */}
<section className="bg-[#eee6de] py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b38968]">
          {t("servicesLabel")}
        </p>

        <h2 className="max-w-3xl font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] text-[#241915] md:text-5xl lg:text-6xl">
          {t("servicesTitle")}
        </h2>

        <div className="mt-7 h-[2px] w-24 bg-[#c6a07d]" />

        <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f4b3e] md:text-lg">
          {t("servicesDesc")}
        </p>

        <Link
          href="/services"
          className="mt-9 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#231813] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(36,26,21,0.14)] transition duration-300 hover:-translate-y-1 hover:bg-[#3a2a22]"
        >
          {t("exploreServices")}
        </Link>

        <div className="mt-12 grid gap-5">
          {/* CARD 1 */}
          <div className="rounded-[26px] border border-[#ddd0c4] bg-[rgba(255,255,255,0.76)] p-7 shadow-[0_14px_34px_rgba(36,26,21,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(36,26,21,0.10)]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b38968]">
              01
            </p>
            <h3 className="mt-3 font-[var(--font-heading)] text-[28px] font-semibold text-[#241915]">
              {t("service1Title")}
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#5f4b3e]">
              {t("service1Desc")}
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-[26px] border border-[#ddd0c4] bg-[rgba(255,255,255,0.76)] p-7 shadow-[0_14px_34px_rgba(36,26,21,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(36,26,21,0.10)]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b38968]">
              02
            </p>
            <h3 className="mt-3 font-[var(--font-heading)] text-[28px] font-semibold text-[#241915]">
              {t("service2Title")}
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#5f4b3e]">
              {t("service2Desc")}
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-[26px] border border-[#ddd0c4] bg-[rgba(255,255,255,0.76)] p-7 shadow-[0_14px_34px_rgba(36,26,21,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(36,26,21,0.10)]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b38968]">
              03
            </p>
            <h3 className="mt-3 font-[var(--font-heading)] text-[28px] font-semibold text-[#241915]">
              {t("service3Title")}
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#5f4b3e]">
              {t("service3Desc")}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-28">
        <div className="overflow-hidden rounded-[40px] border border-[#dccfc4] bg-white shadow-[0_40px_40px_rgba(36,26,21,0.10)]">
          <img
            src="/images/services/services-main.jpg"
            alt="Premium stone services"
            className="h-[440px] w-full object-cover object-center md:h-[580px] lg:h-[780px]"
          />
        </div>
      </div>
    </div>
  </div>
</section>
{/* PROJECTS SHOWCASE */}
<section className="bg-[#efe8e1] px-6 py-24 lg:px-10 lg:py-28">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7860]">
          {t("projectsLabel")}
        </p>
        <h2 className="max-w-3xl font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] text-[#241b16] md:text-5xl lg:text-6xl">
          {t("projectsTitle")}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5146] md:text-lg">
          {t("projectsDesc")}
        </p>
      </div>

      <Link
        href="/projects"
        className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#cdbba9] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#241b16] transition duration-300 hover:-translate-y-1 hover:bg-white"
      >
        {t("viewProjectsGallery")}
      </Link>
    </div>

    <div className="relative overflow-hidden rounded-[36px] shadow-[0_20px_60px_rgba(36,26,21,0.08)]">
      <img
        src={projectImages[currentProject].src}
        alt={`${t("projectTitle")} ${currentProject + 1}`}
        className="h-[420px] w-full object-cover object-center md:h-[500px] lg:h-[560px]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_100%)]" />

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#e4cfbb]">
            {t("featuredProject")}
          </p>
          <h3 className="mt-3 font-[var(--font-heading)] text-3xl font-semibold text-white md:text-4xl">
            {t("projectTitle")} {currentProject + 1}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goPrevProject}
            aria-label={t("previousProject")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
          >
            ←
          </button>

          <button
            onClick={goNextProject}
            aria-label={t("nextProject")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* PARTNERS */}
<section className="overflow-hidden bg-[#f3ece5] py-24 lg:py-28">
  <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7860]">
      {t("partnersLabel")}
    </p>
    <h2 className="font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] text-[#241b16] md:text-5xl">
      {t("partnersTitle")}
    </h2>
    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#5f5146] md:text-lg">
      {t("partnersDesc")}
    </p>
  </div>

  <div className="relative mt-12 overflow-hidden">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,#f3ece5_0%,rgba(243,236,229,0)_100%)]" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,#f3ece5_0%,rgba(243,236,229,0)_100%)]" />

    <div className="partner-marquee flex items-center gap-10 px-6 lg:px-10">
      {duplicatedPartners.map((partner, index) => (
        <div
          key={`${partner.src}-${index}`}
          className="flex h-24 min-w-[180px] items-center justify-center px-6"
        >
          <img
            src={partner.src}
            alt={partner.alt}
            className="h-10 w-auto max-w-[140px] object-contain opacity-85 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="bg-[#18120f] px-6 py-16 text-[#e9ddd1] lg:px-10">
  <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
    <div>
      <h3 className="font-[var(--font-heading)] text-3xl font-semibold text-white">
        Alkan
      </h3>
      <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[#c8aa90]">
        {t("footerBrand")}
      </p>
      <p className="mt-6 text-sm leading-7 text-[#cdbfb2]">
        {t("footerDesc")}
      </p>
    </div>

    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
        {t("footerQuickLinks")}
      </h4>
      <div className="mt-5 space-y-3 text-sm text-[#d8cabc]">
        <p>
          <Link href="/about" className="transition duration-300 hover:text-white">
            {t("footerAbout")}
          </Link>
        </p>
        <p>
          <Link href="/materials" className="transition duration-300 hover:text-white">
            {t("footerMaterials")}
          </Link>
        </p>
        <p>
          <Link href="/company-profile" className="transition duration-300 hover:text-white">
            {t("footerCompanyProfile")}
          </Link>
        </p>
        <p>
          <Link href="/contact" className="transition duration-300 hover:text-white">
            {t("footerContact")}
          </Link>
        </p>
      </div>
    </div>

    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
        {t("footerMaterialsTitle")}
      </h4>
      <div className="mt-5 space-y-3 text-sm text-[#d8cabc]">
        <p>
          <Link href="/materials/marble" className="transition duration-300 hover:text-white">
            {t("footerMarble")}
          </Link>
        </p>
        <p>
          <Link href="/materials/granite" className="transition duration-300 hover:text-white">
            {t("footerGranite")}
          </Link>
        </p>
        <p>
          <Link href="/materials/stone" className="transition duration-300 hover:text-white">
            {t("footerStone")}
          </Link>
        </p>
      </div>
    </div>

    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
        {t("footerCompanyInfo")}
      </h4>
      <div className="mt-5 space-y-3 text-sm leading-7 text-[#d8cabc]">
        <p>{t("footerLocation")}</p>
        <p>info@alkan.com.sa</p>
        <p>+966 53 753 4345</p>
        <p>{t("footerCr")}</p>
      </div>
    </div>
  </div>

  <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-[#a9917d]">
    {t("footerCopyright")}
  </div>
</footer>

<style jsx global>{`
  @keyframes partnerMarquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .partner-marquee {
    width: max-content;
    animation: partnerMarquee 30s linear infinite;
  }

  .partner-marquee:hover {
    animation-play-state: paused;
  }
`}</style>

</main>
);
}