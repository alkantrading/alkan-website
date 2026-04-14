"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const stones = [
  "Birch",
  "Chiaro",
  "Classic Extra Light",
  "Classico",
  "Crema Classico",
  "Light Beige",
  "Romano",
  "Silver",
  "Veincut",
];

export default function StonePage() {
  const t = useTranslations("Materials");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f5efe9] px-6 py-16 text-[#241915]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b38968]">
            {t("label")}
          </p>

          <h1 className="mt-4 font-[var(--font-heading)] text-5xl font-semibold md:text-6xl">
            {t("stoneTitle")}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#5f4b3e]">
            {t("stoneDesc")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {stones.map((name) => (
            <div
              key={name}
              onDoubleClick={() => setSelectedImage(name)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[16px] border border-[#ddd0c4] bg-white shadow-sm transition duration-300 group-hover:shadow-lg">
                <img
                  src={`/images/stone/${name}.jpg`}
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
                src={`/images/stone/${selectedImage}.jpg`}
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