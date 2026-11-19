import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Free consultation", description: "Book a free 30 minute consultation with Proxxy Media." };

export default function Contact() {
  return (
    <>
      <PageHead label="Free consultation" title={<>Thirty minutes, <em>no obligation.</em></>}>
        Tell us what you need. We reply by email to set a time, and you leave the call knowing what it would take and what it would cost.
      </PageHead>
      <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="min-w-0">
          <h2 className="display text-3xl md:text-4xl">What happens <em>next.</em></h2>
          <ol className="mt-6">
            {["We reply by email to agree a time.", "We meet online for 30 minutes.", "You get a short written scope and price, if you want one."].map((t, i) => (
              <li key={t} className="flex gap-4 border-t border-ink/15 py-4"><span className="label pt-1 text-clay">0{i + 1}</span><span>{t}</span></li>
            ))}
          </ol>
          <p className="mt-8 text-ink/75">Prefer email? Write to</p>
          <p className="mt-1"><a className="link-u whitespace-nowrap font-mono text-sm text-clay" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div>
        <div className="relative min-w-0"><ContactForm /></div>
      </div>
    </>
  );
}
