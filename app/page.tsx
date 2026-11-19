import Link from "next/link";
import { Wheel } from "@/components/Wheel";
import { Medallion } from "@/components/Medallion";
import { AbstractCover } from "@/components/AbstractCover";
import { CurrencySwitch, PriceTag } from "@/components/Currency";
import { CORE, SERVICES } from "@/lib/services";

const WHY = [
  {
    motif: "automation-care",
    label: "AI adoption",
    title: "AI is only as safe as your filing",
    text: "Two thirds of organisations have delayed or cancelled Microsoft Copilot over concerns that it could surface confidential files.",
    source: { name: "CoreView 2026, via Infosecurity Magazine", url: "https://infosecurity-magazine.com/news/microsoft-copilot-delayed-over" },
  },
  {
    motif: "compliance-desk",
    label: "Regulation",
    title: "Regulators are now checking",
    text: "Only about half of South Africa's public bodies filed their annual PAIA report this year, and the Information Regulator is issuing formal enforcement notices.",
    source: { name: "Information Regulator figures, via Polity, September 2026", url: "https://www.polity.org.za/article/the-regulator-is-watching-new-enforcement-signals-for-popia-and-paia-compliance-2026-09-01" },
  },
  {
    motif: "research-data",
    label: "Research",
    title: "Publicly funded research must now be open",
    text: "South Africa approved a National Open Science Policy in December 2025, and a data management plan is how researchers meet it.",
    source: { name: "Stellenbosch University Library, May 2026", url: "https://blogs.sun.ac.za/libraryresearchnews/2026/05/29/did-you-know-that-south-africa-has-a-national-open-science-policy/" },
  },
];

const STEPS = [
  { n: "01", title: "Talk", text: "A free 30 minute consultation. You tell us what you need and we tell you honestly what it would take." },
  { n: "02", title: "Agree", text: "A written scope with a fixed monthly fee or project price, before any work starts." },
  { n: "03", title: "Run", text: "We do the work every month, report on it, and you can change plans as you grow." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="on-ink relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="lines-wave absolute inset-0 opacity-[0.06]" />
        <div className="wrap relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <p className="label text-ochre">Information governance, as a monthly service</p>
            <h1 className="display mt-5 text-[2.9rem] sm:text-6xl lg:text-[4.5rem]">Your records and data, <em>handled every month.</em></h1>
            <p className="mt-6 max-w-xl text-lg text-paper/75">Proxxy Media keeps organisations in line with POPIA, Nigeria&apos;s NDPA and the GDPR, keeps their records in order, and brings in automation and AI safely, for one predictable monthly fee.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn btn-clay">Book a free consultation</Link>
              <Link href="/pricing/" className="btn btn-line">See plans and prices</Link>
            </div>
            <ul className="mt-9 flex flex-wrap gap-2" aria-label="Laws we work with">
              {["POPIA", "PAIA", "NDPA", "GDPR", "Open science"].map((c) => (
                <li key={c} className="rounded-full border border-paper/25 px-3 py-1 text-[0.8rem] text-paper/80">{c}</li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <Wheel>
              <div>
                <p className="display text-5xl md:text-6xl">8</p>
                <p className="label mt-2 text-ochre">service areas</p>
              </div>
            </Wheel>
          </div>
        </div>
        <div aria-hidden className="band lines-arc opacity-30" />
      </section>

      {/* Services grid */}
      <section className="wrap py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="label text-clay">What we look after</p>
            <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">One partner for your <em>information.</em></h2>
          </div>
          <Link href="/services/" className="btn btn-line">Open all services →</Link>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <li key={s.slug} className="bg-paper" data-reveal>
              <Link href={`/services/${s.slug}/`} className="group flex h-full min-w-0 flex-col p-6 md:p-7">
                <div className="flex items-start justify-between gap-3">
                  <Medallion slug={s.slug} tone={i % 2 ? "clay" : "ink"} className="w-20 md:w-24" />
                  <span className="label text-right text-muted">{s.kind}</span>
                </div>
                <h3 className="mt-6 font-display text-[1.35rem] leading-tight">{s.title}</h3>
                <p className="mt-3 text-ink/75">{s.blurb}</p>
                <span className="mt-auto pt-6 text-sm font-semibold text-clay">Browse <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Stat block: the research behind the work */}
      <section className="on-ink relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="lines-arc absolute inset-0 opacity-[0.06]" />
        <div className="wrap relative py-20 md:py-28">
          <p className="label text-ochre">The research behind the work</p>
          <p className="display mt-5 text-[13vw] leading-none sm:text-7xl md:text-8xl lg:text-9xl" data-reveal>1,012</p>
          <p className="mt-6 max-w-2xl text-lg text-paper/75">citations of research by Dr Patrick Ajibade, who leads every Proxxy Media engagement. His work on how organisations adopt technology and manage information is what our plans are built on.</p>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-paper/15 md:grid-cols-4">
            {[
              { name: "Accredited publications", value: "26" },
              { name: "h index", value: "14" },
              { name: "i10 index", value: "16" },
              { name: "Most cited paper", value: "632 citations" },
            ].map((p) => (
              <div key={p.name} className="bg-ink p-6">
                <dt className="label text-paper/55">{p.name}</dt>
                <dd className="mt-2 font-display text-2xl md:text-3xl">{p.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 max-w-3xl text-sm text-paper/50">Counted on Google Scholar, as supplied by Dr Ajibade in November 2026. Publications are those accredited by South Africa&apos;s Department of Higher Education and Training.</p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-bone">
        <div className="wrap py-20 md:py-28">
          <p className="label text-clay">Why it matters now</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">Good governance is <em>no longer optional.</em></h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {WHY.map((w, i) => (
              <article key={w.title} className="min-w-0" data-reveal>
                <AbstractCover motif={w.motif} index={i} className="aspect-[4/3] rounded-2xl" />
                <p className="label mt-5 text-clay">{w.label}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight">{w.title}</h3>
                <p className="mt-3 text-ink/75">{w.text}</p>
                <p className="mt-3 text-sm text-muted">Source: <a className="link-u" href={w.source.url} rel="noopener">{w.source.name}</a></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plans preview and steps */}
      <section className="wrap py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="label text-clay">The core plan</p>
            <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">The compliance desk, <em>by size.</em></h2>
          </div>
          <CurrencySwitch />
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink/15 bg-ink/15 md:grid-cols-3">
          {CORE.offers.map((o, i) => (
            <li key={o.name} className={`flex min-w-0 flex-col p-7 md:p-8 ${i === 1 ? "on-ink bg-ink text-paper" : "bg-paper"}`} data-reveal>
              <p className={`label ${i === 1 ? "text-ochre" : "text-clay"}`}>{o.name}</p>
              <div className={`mt-4 ${i === 1 ? "[&_.text-muted]:text-paper/60" : ""}`}><PriceTag price={o.price} size="lg" /></div>
              <p className={`mt-4 ${i === 1 ? "text-paper/75" : "text-ink/75"}`}>{o.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">Add records care, automation care or training to any plan. <Link href="/pricing/" className="link-u font-semibold text-clay">Compare everything →</Link></p>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t border-ink pt-5" data-reveal>
              <p className="label text-clay">{s.n}</p>
              <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-ink/75">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
