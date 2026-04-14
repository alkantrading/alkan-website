"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const projects = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  image: `/images/projects/project-${i + 1}.jpg`,
}));

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={stagger}
      className="bg-[#f5efe9] text-[#241915]"
    >
      <section className="py-24 text-center lg:py-32">
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#b38968]">
            {t("label")}
          </p>

          <h1 className="font-[var(--font-heading)] text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-6 text-base leading-8 text-[#5f4b3e] md:text-lg">
            {t("description")}
          </p>
        </motion.div>
      </section>

      <section className="pb-24 lg:pb-32">
        <motion.div
          variants={stagger}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[24px] border border-[#ddd0c4] bg-white shadow-[0_12px_30px_rgba(36,26,21,0.08)]"
            >
              <div className="relative h-[260px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${t("project")} ${project.id}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#1b130f]/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-4 left-4 right-4 translate-y-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d1b196]">
                  {t("project")} {project.id}
                </p>
                <p className="mt-1 text-sm text-white">
                  {t("projectSubtitle")}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}