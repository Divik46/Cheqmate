import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <div className="mb-10 flex items-baseline justify-between gap-6">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0a0a0a]">
          Best of the week
        </h2>
        <Link href="#" className="text-sm font-medium text-[#6b7280] hover:opacity-80">
          See all posts →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Feature card */}
        <article className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-[#d6e4f2] p-1">
          <div className="relative h-[520px] w-full rounded-3xl overflow-hidden">
            <Image
              src="/images/Frame 4.png"
              alt="Feature"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay chips and title */}
          <div className="pointer-events-none absolute inset-0 p-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold shadow">
                  Sep 06, 2022
                </span>
                <span className="inline-block rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold shadow">
                  Travel
                </span>
              </div>

              <div className="mt-24 max-w-xl">
                <div className="inline-block rounded-2xl bg-white px-3 py-1 text-xs font-semibold shadow">
                  Travel
                </div>
                <div className="mt-3 inline-block rounded-2xl bg-white p-4 pr-5 shadow">
                  <h3 className="text-3xl sm:text-4xl font-bold leading-snug text-[#0a0a0a]">
                    Get to your dream now destinations with
                    <br />
                    Travel Pro
                  </h3>
                </div>
              </div>
            </div>

            {/* Arrow button */}
            <div className="absolute bottom-6 right-6">
              <button className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-105 transition">
                <span className="sr-only">Open article</span>
                ↗
              </button>
            </div>
          </div>
        </article>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* Top card (ad/info) */}
          <aside className="rounded-3xl bg-[#cfe7e9] p-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" /> ADS
              </span>
              <button className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-white shadow">+
              </button>
            </div>

            <div className="mt-6 text-xs font-semibold">Become A</div>
            <div className="text-xs font-semibold">BROADCAST MEMBER</div>

            <h3 className="mt-4 text-2xl font-extrabold max-w-xs text-[#0a0a0a]">
              Real talk in a
              <br />
              corporate world
            </h3>

            <Link
              href="#"
              className="mt-10 inline-block text-sm font-semibold underline underline-offset-4 text-[#0a0a0a]"
            >
              Lean more
            </Link>

            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 [--ring:rgba(0,0,0,0.06)] ring-[var(--ring)]" />
          </aside>

          {/* Bottom image card */}
          <article className="relative rounded-3xl overflow-hidden">
            <div className="relative h-72 w-full">
              <Image
                src="/images/q-6c12dbae.png"
                alt="Fashion"
                fill
                className="object-cover"
              />
            </div>

            {/* count bubble */}
            <div className="absolute top-4 right-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur text-sm font-semibold shadow">
                24
              </div>
            </div>

            {/* CTA */}
            <div className="absolute bottom-6 left-6">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold shadow hover:scale-[1.02] transition"
              >
                See all picks →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}


