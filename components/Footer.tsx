import Link from "next/link";
import { CTA, NAV, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { Logo } from "./Logo";

const LAWS = [
  { name: "POPIA", url: "https://inforegulator.org.za" },
  { name: "PAIA", url: "https://inforegulator.org.za" },
  { name: "NDPA", url: "https://ndpc.gov.ng" },
  { name: "GDPR", url: "https://commission.europa.eu/law/law-topic/data-protection_en" },
];

export function Footer() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <div aria-hidden className="band lines-arc opacity-30" />
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-paper/70">Information governance as a monthly service. Founded in Budapest, working from South Africa with clients worldwide.</p>
          <p className="mt-6"><a className="link-u whitespace-nowrap font-mono text-sm text-ochre" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div>
        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="label text-paper/50">Site</h2>
          <ul className="mt-4 space-y-2">
            {[...NAV, CTA, { href: "/privacy/", label: "Privacy notice" }].map((n) => <li key={n.href}><Link className="link-u text-paper/85" href={n.href}>{n.label}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Services" className="md:col-span-3">
          <h2 className="label text-paper/50">Services</h2>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((s) => <li key={s.slug}><Link className="link-u text-paper/85" href={`/services/${s.slug}/`}>{s.title}</Link></li>)}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <h2 className="label text-paper/50">Laws we work with</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {LAWS.map((p) => <li key={p.name}><a className="inline-block rounded-full border border-paper/25 px-3 py-1 text-sm text-paper/80 hover:border-ochre hover:text-ochre" href={p.url} rel="noopener">{p.name}</a></li>)}
          </ul>
          <p className="mt-5 text-sm text-paper/55">Proxxy Media gives compliance support, not legal advice. Where you need a legal opinion, we work alongside your attorney.</p>
        </div>
      </div>
      <div className="wrap flex flex-col gap-3 border-t border-paper/15 py-6 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Proxxy Media.</p>
        <a href="#top" className="link-u text-paper/85">Back to top ↑</a>
      </div>
    </footer>
  );
}
