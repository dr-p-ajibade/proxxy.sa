import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Medallion } from "@/components/Medallion";
import { PriceTag } from "@/components/Currency";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = { title: "Services", description: "Compliance desk, records care, automation care, training, research data, journal publishing, library systems and digitisation services." };

export default function Services() {
  return (
    <>
      <PageHead label="Services" title={<>Eight areas, <em>one partner.</em></>}>
        The compliance desk is the core monthly plan. Records care, automation care and training are monthly add ons. Four specialist services cover research data, journals, library systems and digitisation.
      </PageHead>

      <nav aria-label="Service areas" className="sticky top-[calc(4.5rem+9px)] z-30 border-b border-ink/15 bg-paper/95 backdrop-blur">
        <ul className="wrap flex gap-2 overflow-x-auto py-3">
          {SERVICES.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a href={`#${s.slug}`} className="flex items-center gap-2 rounded-full border border-ink/20 py-1 pl-1 pr-3 text-[0.8rem] hover:border-clay hover:text-clay">
                <Medallion slug={s.slug} className="w-8" />{s.short}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="wrap py-14 md:py-20">
        {SERVICES.map((s, i) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-40 grid gap-8 border-t border-ink/15 py-14 first:border-t-0 first:pt-0 md:grid-cols-[14rem_1fr]">
            <div><Medallion slug={s.slug} tone={i % 2 ? "clay" : "ink"} className="w-36 md:w-48" /></div>
            <div className="min-w-0">
              <p className="label text-clay">{s.kind}</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-4 max-w-2xl text-lg text-ink/75">{s.blurb}</p>
              <div className="mt-8 grid gap-10 lg:grid-cols-2">
                <div className="min-w-0">
                  <h3 className="label text-muted">You get</h3>
                  <ul className="mt-3">
                    {s.gets.map((g) => <li key={g} className="flex gap-3 border-t border-ink/15 py-3.5"><span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-clay" /><span>{g}</span></li>)}
                  </ul>
                </div>
                <div className="min-w-0">
                  <h3 className="label text-muted">Ways to buy</h3>
                  <ul className="mt-3">
                    {s.offers.map((o) => (
                      <li key={o.name} className="border-t border-ink/15 py-3.5" data-reveal>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <span className="font-semibold">{o.name}</span><PriceTag price={o.price} />
                        </div>
                        <p className="mt-1 text-sm text-muted">{o.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/services/${s.slug}/`} className="btn btn-line">More about {s.short.toLowerCase()} →</Link>
                <Link href={`/contact/?need=${s.slug}`} className="btn btn-clay">Ask about this</Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
