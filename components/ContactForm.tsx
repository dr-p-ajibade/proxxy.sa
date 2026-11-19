"use client";
import { useEffect, useState } from "react";
import { SERVICES } from "@/lib/services";
import { BASE, SITE } from "@/lib/site";

const ERRORS: Record<string, string> = {
  missing: "Please choose what you need, fill in your name, organisation, email, type of organisation and country, and tick the consent box.",
  email: "That email address does not look complete. Please check it and send again.",
  send: `Your request could not be sent just now. Please email ${SITE.email} instead.`,
};

export function ContactForm() {
  const [need, setNeed] = useState("");
  const [error, setError] = useState("");
  const [ts, setTs] = useState("");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const n = q.get("need"); if (n && SERVICES.some((s) => s.slug === n)) setNeed(n);
    const e = q.get("error"); if (e && ERRORS[e]) setError(ERRORS[e]);
    setTs(String(Math.floor(Date.now() / 1000)));
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const f = e.currentTarget.elements as unknown as Record<string, HTMLInputElement>;
    const ok = f["need"].value && f["name"].value.trim() && f["firm"].value.trim() && f["email"].value.trim() && f["sector"].value && f["country"].value.trim() && f["consent"].checked;
    if (!ok) { e.preventDefault(); setError(ERRORS.missing); }
  };

  return (
    <form action={`${BASE}/contact.php`} method="post" noValidate onSubmit={onSubmit} className="rounded-3xl border border-ink/15 bg-white/40 p-6 md:p-8">
      <div aria-live="polite">{error && <p className="mb-6 rounded-2xl border border-clay/40 bg-clay/5 p-4 font-semibold">{error}</p>}</div>
      <div className="grid gap-5">
        <div>
          <label htmlFor="need" className="text-sm font-semibold">What do you need help with?</label>
          <select id="need" name="need" required value={need} onChange={(e) => setNeed(e.target.value)} className="field mt-1.5">
            <option value="">Choose one</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="min-w-0"><label htmlFor="name" className="text-sm font-semibold">Your name</label><input id="name" name="name" required maxLength={120} autoComplete="name" className="field mt-1.5" /></div>
          <div className="min-w-0"><label htmlFor="firm" className="text-sm font-semibold">Organisation</label><input id="firm" name="firm" required maxLength={160} autoComplete="organization" className="field mt-1.5" /></div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="min-w-0"><label htmlFor="email" className="text-sm font-semibold">Email</label><input id="email" name="email" type="email" required maxLength={160} autoComplete="email" className="field mt-1.5" /></div>
          <div className="min-w-0"><label htmlFor="phone" className="text-sm font-semibold">Phone <span className="font-normal text-muted">(optional)</span></label><input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className="field mt-1.5" /></div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="min-w-0">
            <label htmlFor="sector" className="text-sm font-semibold">Type of organisation</label>
            <select id="sector" name="sector" required className="field mt-1.5" defaultValue="">
              <option value="">Choose one</option>
              {["Government or public body", "NGO or development partner", "University, college or research institution", "School", "Library, archive or museum", "Journal or publisher", "Small or medium business", "Other"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="min-w-0"><label htmlFor="country" className="text-sm font-semibold">Country</label><input id="country" name="country" required maxLength={80} autoComplete="country-name" className="field mt-1.5" /></div>
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-semibold">Tell us a little more <span className="font-normal text-muted">(optional, include any deadline)</span></label>
          <textarea id="message" name="message" maxLength={3000} rows={5} className="field mt-1.5" />
        </div>
        <label className="flex items-start gap-3 text-sm text-ink/80">
          <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-[#c4432b]" />
          <span>I agree that Proxxy Media may use these details to reply to me, as set out in the <a href={`${BASE}/privacy/`} className="link-u font-semibold">privacy notice</a>.</span>
        </label>
        <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="website">Leave this empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <input type="hidden" name="ts" value={ts} />
        <button type="submit" className="btn btn-clay justify-self-start">Book my free consultation</button>
      </div>
    </form>
  );
}
