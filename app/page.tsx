import Link from "next/link";

const materials = [
  {
    title: "Marble",
    href: "/materials/marble",
    image: "/images/materials/marble-cover.jpg",
    description:
      "Explore curated marble selections defined by elegance, soft veining, and timeless appeal for interiors, feature walls, flooring, and premium architectural spaces.",
  },
  {
    title: "Granite",
    href: "/materials/granite",
    image: "/images/materials/granite-cover.jpg",
    description:
      "Discover durable granite solutions known for strength, longevity, and refined performance across kitchens, facades, high-traffic areas, and exterior applications.",
  },
  {
    title: "Stone",
    href: "/materials/stone",
    image: "/images/materials/stone-cover.jpg",
    description:
      "Natural stone materials with rich texture, organic character, and architectural depth, ideal for facades, landscaping, feature areas, and interior detailing.",
  }

];

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-[#f5efe9] text-[#241915]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1b130f] text-white">
        <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_top_left,rgba(197,154,114,0.32),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:px-10 lg:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#d1b196]">
            Our Materials
          </p>

          <h1 className="font-[var(--font-heading)] text-5xl font-semibold leading-[0.99] md:text-8xl lg:text-8xl">
            Material Collections
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#eadfd5] md:text-lg">
            Explore carefully selected marble, granite, stone, and zellige
            collections designed to meet the visual, technical, and architectural
            requirements of luxury residential, hospitality, and commercial projects.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#b38968]">
              Material Selection
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-semibold leading-[1.04] text-[#241915] md:text-5xl">
              Designed to balance beauty, performance, and architectural identity
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-24 bg-[#c6a07d]" />

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f4b3e] md:text-lg">
              Our collections are presented to support clients, designers, and
              project teams in choosing materials that combine visual elegance,
              functional durability, and a refined design presence. Each category
              offers unique qualities suited to different applications and styles.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {materials.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[30px] border border-[#ddd0c4] bg-white shadow-[0_14px_30px_rgba(36,26,21,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_46px_rgba(36,26,21,0.12)]"
              >
                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.96]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.28)_100%)]" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                    Collection
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="font-[var(--font-heading)] text-[30px] font-semibold text-[#241915]">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-[15px] leading-8 text-[#5f4b3e]">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#b38968] transition duration-300 group-hover:gap-3">
                    <span>Explore Collection</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}