"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const granites = [
  "Alpunis",
  "Avocatus",
  "Azul Bahia",
  "Azul Cielo",
  "Copacabana",
  "Cosmic Black",
  "Eclipse Copacabana",
  "KASHMIR WHITE Granite",
  "LABRADOR SCURO Granite",
  "Lemurian Blue Top",
  "NAJRAN BROWN Granite",
  "NEW HALAYEB Granite",
  "SAUDI BIANCO Granite",
];

export default function GranitePage() {
  const t = useTranslations("Materials");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f5efe9] text-[#241915] px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b38968]">
            {t("label")}
          </p>

          <h1 className="mt-4 font-[var(--font-heading)] text-5xl font-semibold md:text-6xl">
            {t("graniteTitle")}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[#5f4b3e] leading-8">
            {t("graniteDesc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {granites.map((name) => (
            <div
              key={name}
              onDoubleClick={() => setSelectedImage(name)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[16px] border border-[#ddd0c4] bg-white shadow-sm transition duration-300 group-hover:shadow-lg">
                <img
                  src={`/images/granite/${name}.jpg`}
                  alt={name}
                  className="h-[120px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <p className="mt-3 text-center text-sm font-medium text-[#3d2e25] transition group-hover:text-[#b38968]">
                {name}
              </p>
            </div>
          ))}

        </div>

        {/* MODAL */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <img
                src={`/images/granite/${selectedImage}.jpg`}
                alt={selectedImage}
                className="max-h-[80vh] w-full rounded-[22px] object-contain shadow-2xl"
              />

              <p className="mt-4 text-center text-lg text-white">
                {selectedImage}
              </p>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}