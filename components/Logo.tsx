import { SITE } from "@/lib/site";
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg aria-hidden viewBox="0 0 40 40" className="h-9 w-9 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round">
        <circle cx="20" cy="20" r="18.5" strokeWidth="1.3" />
        <path d="M8 24a12 12 0 0 1 24 0M12.5 24a7.5 7.5 0 0 1 15 0M17 24a3 3 0 0 1 6 0" strokeWidth="1.5" />
        <path d="M9 29h22" strokeWidth="1.5" />
        <circle cx="20" cy="11" r="1.6" fill="currentColor" stroke="none" />
      </svg>
      <span className="whitespace-nowrap font-display text-[1.35rem] font-semibold leading-none tracking-[0.03em]">{SITE.name}</span>
    </span>
  );
}
