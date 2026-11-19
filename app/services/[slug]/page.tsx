import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/PageHead";
import { Medallion } from "@/components/Medallion";
import { CurrencySwitch, PriceTag } from "@/components/Currency";
import { SERVICES, serviceBySlug } from "@/lib/services";

export const dynamicParams = false;
export function generateStaticParams() { return SERVICES.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  return s ? { title: s.title, description: s.blurb } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();
  const i = SERVICES.indexOf(s);
  const prev = SERVICES[(i - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(i + 1) % SERVICES.length];
  return (
    <>
      <PageHead label={s.kind} title={s.title} aside={<Medallion slug={s.slug} tone="paper" className="w-36 md:w-52" />}>{s.blurb}</PageHead>

      <nav aria-label="Other services" className="wrap pt-10">
        <ul className="flex flex-wrap gap-2">
          {SERVICES.map((o) => (
            <li key={o.slug}>
              <Link href={`/services/${o.slug}/`} aria-current={o.slug === s.slug ? "page" : undefined}
                className={`inline-block rounded-full border px-3 py-1 text-[0.8rem] ${o.slug === s.slug ? "border-ink bg-ink text-paper" : "border-ink/20 hover:border-clay hover:text-clay"}`}>{o.short}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="wrap grid gap-14 py-14 md:py-20 lg:grid-cols-[1fr_22rem]">
        <div className="min-w-0">
          <p className="label text-clay">Who it is for</p>
          <p className="mt-3 max-w-2xl font-display text-2xl leading-snug">{s.who}</p>

          <h2 className="display mt-14 text-4xl md:text-5xl">What you <em>get.</em></h2>
          <ul className="mt-6">
            {s.gets.map((g) => <li key={g} className="flex gap-3 border-t border-ink/15 py-4 text-lg" data-reveal><span aria-hidden className="mt-3.5 h-px w-6 shrink-0 bg-clay" /><span>{g}</span></li>)}
          </ul>

          <div className="mt-14 flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-4xl md:text-5xl">Ways to <em>buy.</em></h2>
            <CurrencySwitch />
          </div>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-ink/15 bg-ink/15 sm:grid-cols-2">
            {s.offers.map((o) => (
              <li key={o.name} className="flex min-w-0 flex-col bg-paper p-6 md:p-7" data-reveal>
                <p className="font-display text-[1.35rem] leading-tight">{o.name}</p>
                <div className="mt-3"><PriceTag price={o.price} /></div>
                <p className="mt-3 text-ink/75">{o.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">Prices are starting points and exclude VAT where it applies. Your final price is agreed in writing after the free consultation.</p>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="on-ink rounded-3xl bg-ink p-8 text-paper">
            <p className="label text-ochre">Next step</p>
            <p className="mt-3 font-display text-2xl leading-snug">Talk it through in a free 30 minute consultation.</p>
            <Link href={`/contact/?need=${s.slug}`} className="btn btn-clay mt-6">Book a free consultation</Link>
          </div>
        </aside>
      </div>

      <nav aria-label="Previous and next service" className="wrap pb-20 md:pb-28">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/15 bg-ink/15 sm:grid-cols-2">
          {[{ s: prev, l: "Previous" }, { s: next, l: "Next" }].map(({ s: o, l }) => (
            <Link key={l} href={`/services/${o.slug}/`} className="group flex min-w-0 items-center gap-4 bg-paper p-6 hover:bg-bone">
              <Medallion slug={o.slug} className="w-14" />
              <span className="min-w-0"><span className="label block text-muted">{l}</span><span className="font-display text-xl">{o.title}</span></span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
