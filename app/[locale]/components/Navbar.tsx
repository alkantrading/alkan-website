"use client";

import Image from "next/image";
import {Link, usePathname} from "@/i18n/navigation";
import {useLocale, useTranslations} from "next-intl";

const mainLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "companyProfile", href: "/company-profile" },
] as const;

const materialLinks = [
  { key: "allMaterials", href: "/materials" },
  { key: "marble", href: "/materials/marble" },
  { key: "granite", href: "/materials/granite" },
  { key: "stone", href: "/materials/stone" }
] as const;

const contactLinks = [
  { key: "contactUs", href: "/contact" },
  { key: "joinUs", href: "/careers" }
] as const;

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[rgba(15,12,10,0.85)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-4 transition duration-300 hover:opacity-90"
        >
          <Image
            src="/images/logo.png"
            alt="Alkan"
            width={50}
            height={50}
            className="object-contain"
          />

          <h1 className="text-2xl font-semibold tracking-[0.18em] text-[#e8d8c3]">
            ALKAN
          </h1>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="relative text-sm font-medium !text-[#e8d8c3] transition duration-300 hover:!text-[#c59a72] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#c59a72] after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(link.key)}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="relative text-sm font-medium !text-[#e8d8c3] transition duration-300 hover:!text-[#c59a72] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#c59a72] after:transition-all after:duration-300 group-hover:after:w-full"
            >
              {t("materials")}
            </button>

            <div className="absolute left-1/2 top-full z-50 hidden w-56 -translate-x-1/2 pt-3 group-hover:block">
              <div className="rounded-2xl border border-white/10 bg-[rgba(18,14,12,0.98)] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                {materialLinks.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm text-[#e8d8c3] transition duration-300 hover:bg-white/5 hover:text-[#c59a72]"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className="relative text-sm font-medium !text-[#e8d8c3] transition duration-300 hover:!text-[#c59a72] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#c59a72] after:transition-all after:duration-300 group-hover:after:w-full"
            >
              {t("contact")}
            </button>

            <div className="absolute left-1/2 top-full z-50 hidden w-52 -translate-x-1/2 pt-3 group-hover:block">
              <div className="rounded-2xl border border-white/10 bg-[rgba(18,14,12,0.98)] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                {contactLinks.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm text-[#e8d8c3] transition duration-300 hover:bg-white/5 hover:text-[#c59a72]"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={pathname}
            locale="ar"
            className={`rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.2em] transition duration-300 ${
              locale === "ar"
                ? "bg-gradient-to-r from-[#c59a72] to-[#e6c2a3] text-black shadow-md"
                : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            }`}
          >
            AR
          </Link>

          <Link
            href={pathname}
            locale="en"
            className={`rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.2em] transition duration-300 ${
              locale === "en"
                ? "bg-gradient-to-r from-[#c59a72] to-[#e6c2a3] text-black shadow-md"
                : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            }`}
          >
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}