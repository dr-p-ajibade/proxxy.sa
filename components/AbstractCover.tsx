import { Glyph } from "./Medallion";
export function AbstractCover({ motif, index = 0, className = "" }: { motif: string; index?: number; className?: string }) {
  const looks = [
    { bg: "bg-ink", glyph: "text-ochre", lines: "lines-arc opacity-20" },
    { bg: "bg-clay", glyph: "text-ink", lines: "lines-arc-ink opacity-20" },
    { bg: "bg-ink-3", glyph: "text-paper", lines: "lines-wave opacity-15" },
  ];
  const l = looks[index % looks.length];
  return (
    <div aria-hidden className={`relative overflow-hidden ${l.bg} ${className}`}>
      <div className={`absolute inset-0 ${l.lines}`} />
      <Glyph slug={motif} className={`absolute -bottom-[22%] -right-[10%] aspect-square h-[125%] w-auto ${l.glyph}`} />
    </div>
  );
}
