import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Medallion } from "@/components/Medallion";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About", description: "Proxxy Media is led by Dr Patrick Ajibade, an information science scholar in records management, technology adoption and information governance." };

const CREDENTIALS = [
  "PhD in Library and Information Science, University of Fort Hare, on how small and medium firms in South Africa and Nigeria use and align their information technology",
  "MSc in Library and Information Science, cum laude, University of Fort Hare",
  "MSc in Information Studies, University of Amsterdam",
  "Postgraduate Diploma in Archives and Records Management, cum laude",
  "Manual IT quality assurance certification, NixTech, Budapest",
];
const SKILLS = ["n8n automation", "Retrieval augmented generation", "LangGraph", "Python and R", "IIIF", "Koha", "Docker"];

export default function About() {
  return (
    <>
      <PageHead label="About" title={<>Expert led, from scope <em>to delivery.</em></>}>
        Proxxy Media was founded in Budapest and now works from South Africa with clients across Africa, Europe and beyond.
      </PageHead>
      <div className="wrap grid gap-14 py-14 md:grid-cols-12 md:py-20">
        <div className="min-w-0 md:col-span-7">
          <h2 className="display text-4xl md:text-5xl">Who leads <em>the work.</em></h2>
          <p className="mt-6 text-lg text-ink/80">Dr Patrick Ajibade is a library and information science scholar, researcher and consultant. His research covers how organisations adopt technology, how they manage records, and how AI changes information governance. His most cited paper, on the technology acceptance model, has 632 citations.</p>
          <p className="mt-4 text-ink/75">The person who scopes your project is the person who delivers it. Larger projects bring in trusted specialists, always named in your agreement.</p>

          <h2 className="display mt-14 text-3xl md:text-4xl">Qualifications</h2>
          <ul className="mt-5">
            {CREDENTIALS.map((c) => <li key={c} className="flex gap-3 border-t border-ink/15 py-3.5" data-reveal><span aria-hidden className="mt-3 h-px w-6 shrink-0 bg-clay" /><span>{c}</span></li>)}
          </ul>

          <h2 className="display mt-14 text-3xl md:text-4xl">Tools we build with</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {SKILLS.map((s) => <li key={s} className="rounded-full border border-ink/20 px-3 py-1 text-[0.8rem]">{s}</li>)}
          </ul>

          <h2 className="display mt-14 text-3xl md:text-4xl">Accessibility</h2>
          <p className="mt-4 text-ink/75">This site works with a keyboard, respects your device&apos;s reduced motion setting and keeps text contrast high. If anything is hard to use, tell us at the address below.</p>

          <div className="on-ink mt-14 rounded-3xl bg-ink p-8 text-paper">
            <p className="label text-ochre">Contact</p>
            <p className="mt-3 font-display text-2xl">Start with a free 30 minute consultation.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn btn-clay">Book a free consultation</Link>
              <a href={`mailto:${SITE.email}`} className="btn btn-line whitespace-nowrap">{SITE.email}</a>
            </div>
          </div>
        </div>
        <aside className="min-w-0 md:col-span-4 md:col-start-9">
          <p className="label text-muted">Research record</p>
          <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/15 bg-ink/15">
            {[["26", "accredited publications"], ["1,012", "citations"], ["14", "h index"], ["16", "i10 index"]].map(([v, l]) => (
              <div key={l} className="bg-paper p-5"><dt className="sr-only">{l}</dt><dd><span className="font-display text-3xl">{v}</span><span className="mt-1 block text-sm text-muted">{l}</span></dd></div>
            ))}
          </dl>
          <p className="mt-3 text-sm text-muted">Google Scholar, as supplied by Dr Ajibade, November 2026.</p>
          <p className="label mt-12 text-muted">Service areas</p>
          <ul className="mt-4 grid grid-cols-4 gap-3">
            {SERVICES.map((s, i) => <li key={s.slug}><Link href={`/services/${s.slug}/`} aria-label={s.title} title={s.title} className="block rounded-full"><Medallion slug={s.slug} tone={i % 2 ? "clay" : "ink"} className="w-full" /></Link></li>)}
          </ul>
        </aside>
      </div>
    </>
  );
}
