"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const marbles = [
  "Aella",
  "Afyon Gold",
  "Arabescato Aegento",
  "Arabescato Carrara",
  "Arabescato Corchia",
  "Arabescato Grigio Orobico",
  "Ariston White",
  "Armani Grey",
  "Bamboo Blue",
  "Beige",
  "Belvedere",
  "Biancatto",
  "Bianco Carrara",
  "Bianco Classico",
  "Bianco Michelangelo",
  "Bianco Venato",
  "Black Marquina",
  "Breccia Daragona",
  "breccia",
  "Calacatta Barocco",
  "Calacatta Bellini",
  "Calacatta Bettogli",
  "Calacatta Borghini",
  "Calacatta Gold",
  "Calacatta Green",
  "Calacatta",
  "Cipollino Green",
  "Emperador Dark",
  "Fantastic Grey",
  "Karaman Grey",
  "Matrix",
  "Narsis",
  "Portoro",
  "Red Alicante",
  "Rosso Levanto",
  "Silver Eldorado",
  "treventino",
  "Zebrino"
];

export default function MarblePage() {
  const t = useTranslations("Materials");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f5efe9] px-6 py-16 text-[#241915]">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b38968]">
            {t("label")}
          </p>

          <h1 className="mt-4 font-[var(--font-heading)] text-5xl font-semibold md:text-6xl">
            {t("marbleTitle")}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[#5f4b3e] leading-8">
            {t("marbleDesc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {marbles.map((name) => (
            <div
              key={name}
              onDoubleClick={() => setSelectedImage(name)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[16px] border border-[#ddd0c4] bg-white shadow-sm transition duration-300 group-hover:shadow-lg">
                <img
                  src={`/images/marble/${name}.jpg`}
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
                src={`/images/marble/${selectedImage}.jpg`}
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