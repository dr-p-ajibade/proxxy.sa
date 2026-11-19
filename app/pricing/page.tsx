import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Medallion } from "@/components/Medallion";
import { CurrencySwitch, PriceTag } from "@/components/Currency";
import { CORE, SERVICES } from "@/lib/services";

export const metadata: Metadata = { title: "Pricing", description: "Compliance desk plans from R2,950 a month, monthly add ons and specialist services, in rand and US dollars." };

const FAQ = [
  { q: "How does billing work?", a: "After the free consultation you get a written agreement with your monthly fee. We invoice monthly in advance, and you can pay by EFT or debit order." },
  { q: "Can I change plans?", a: "Yes. Move up or down a plan, or add and remove add ons, from the next billing month." },
  { q: "Why are prices shown as 'from'?", a: "The price depends on your size, how many systems you use and how much is already in place. You see the final price in writing before you commit." },
  { q: "Do prices include VAT?", a: "No. Prices exclude VAT where it applies. Dollar prices are a guide for clients outside South Africa and are invoiced in US dollars." },
  { q: "Is this legal advice?", a: "No. We give compliance and information management support. Where you need a legal opinion, we work alongside your attorney." },
];

export default function Pricing() {
  const addOns = SERVICES.filter((s) => s.kind === "Monthly add on");
  const specialist = SERVICES.filter((s) => s.kind === "Specialist service");
  return (
    <>
      <PageHead label="Pricing" title={<>Plans and <em>prices.</em></>}>
        One core monthly plan, three add ons, and specialist services when you need them. Every price is a starting point, confirmed in writing after a free consultation.
      </PageHead>

      <section className="wrap py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex min-w-0 items-center gap-5">
            <Medallion slug={CORE.slug} className="w-16 md:w-20" />
            <div className="min-w-0"><p className="label text-clay">Core plan</p><h2 className="display mt-2 text-4xl md:text-5xl">{CORE.title}</h2></div>
          </div>
          <CurrencySwitch />
        </div>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink/15 bg-ink/15 md:grid-cols-3">
          {CORE.offers.map((o, i) => (
            <li key={o.name} className={`flex min-w-0 flex-col p-7 md:p-8 ${i === 1 ? "on-ink bg-ink text-paper [&_.text-muted]:text-paper/60" : "bg-paper"}`} data-reveal>
              <p className={`label ${i === 1 ? "text-ochre" : "text-clay"}`}>{o.name}</p>
              <div className="mt-4"><PriceTag price={o.price} size="lg" /></div>
              <p className={`mt-4 ${i === 1 ? "text-paper/75" : "text-ink/75"}`}>{o.detail}</p>
              <ul className={`mt-6 border-t pt-4 text-sm ${i === 1 ? "border-paper/15 text-paper/80" : "border-ink/15 text-ink/80"}`}>
                {CORE.gets.map((g) => <li key={g} className="flex gap-3 py-1.5"><span aria-hidden className={`mt-2.5 h-px w-4 shrink-0 ${i === 1 ? "bg-ochre" : "bg-clay"}`} />{g}</li>)}
              </ul>
              <Link href={`/contact/?need=${CORE.slug}`} className={`btn mt-8 self-start ${i === 1 ? "btn-clay" : "btn-line"}`}>Start with {o.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-bone">
        <div className="wrap py-14 md:py-20">
          <p className="label text-clay">Monthly add ons</p>
          <h2 className="display mt-3 text-4xl md:text-5xl">Add to any <em>plan.</em></h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink/15 bg-ink/15 md:grid-cols-3">
            {addOns.map((s) => (
              <li key={s.slug} className="flex min-w-0 flex-col bg-paper p-7" data-reveal>
                <Medallion slug={s.slug} tone="clay" className="w-16" />
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-ink/75">{s.blurb}</p>
                <div className="mt-auto pt-6"><PriceTag price={s.offers[0].price} /></div>
                <Link href={`/services/${s.slug}/`} className="mt-4 text-sm font-semibold text-clay">Details →</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-14 md:py-20">
        <p className="label text-clay">Specialist services</p>
        <h2 className="display mt-3 text-4xl md:text-5xl">For research, journals and <em>collections.</em></h2>
        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {specialist.map((s) => (
            <div key={s.slug} className="min-w-0" data-reveal>
              <div className="flex items-center gap-4">
                <Medallion slug={s.slug} className="w-14" />
                <h3 className="font-display text-2xl">{s.title}</h3>
              </div>
              <ul className="mt-4">
                {s.offers.map((o) => (
                  <li key={o.name} className="border-t border-ink/15 py-3.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"><span className="font-semibold">{o.name}</span><PriceTag price={o.price} /></div>
                    <p className="mt-1 text-sm text-muted">{o.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bone">
        <div className="wrap grid gap-12 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
          <div className="min-w-0">
            <p className="label text-clay">Billing</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Simple, <em>in writing.</em></h2>
            <Link href="/contact/" className="btn btn-clay mt-8">Book a free consultation</Link>
          </div>
          <dl className="min-w-0">
            {FAQ.map((f) => (
              <div key={f.q} className="border-t border-ink/15 py-5">
                <dt className="font-display text-xl">{f.q}</dt>
                <dd className="mt-2 text-ink/75">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
