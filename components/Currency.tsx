"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { Price } from "@/lib/services";

type Cur = "zar" | "usd";
const Ctx = createContext<{ cur: Cur; set: (c: Cur) => void }>({ cur: "zar", set: () => {} });

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [cur, setCur] = useState<Cur>("zar");
  useEffect(() => {
    try { const v = localStorage.getItem("pm-cur"); if (v === "usd" || v === "zar") setCur(v); } catch {}
  }, []);
  const set = (c: Cur) => { setCur(c); try { localStorage.setItem("pm-cur", c); } catch {} };
  return <Ctx.Provider value={{ cur, set }}>{children}</Ctx.Provider>;
}

const PER: Record<Price["per"], string> = { month: "a month", once: "once off", plan: "per plan", workshop: "per workshop", project: "per project" };

export function PriceTag({ price, size = "md" }: { price: Price; size?: "md" | "lg" }) {
  const { cur } = useContext(Ctx);
  if (!price.zar) return <span className="font-display text-xl">Quoted</span>;
  const n = cur === "zar" ? `R${price.zar.toLocaleString("en-ZA").replace(/ /g, ",").replace(/\s/g, ",")}` : `US$${price.usd.toLocaleString("en-US")}`;
  return (
    <span className="whitespace-nowrap">
      <span className="text-sm text-muted">from </span>
      <span className={`font-display ${size === "lg" ? "text-4xl md:text-5xl" : "text-2xl"}`}>{n}</span>
      <span className="text-sm text-muted"> {PER[price.per]}</span>
    </span>
  );
}

export function CurrencySwitch({ tone = "paper" }: { tone?: "paper" | "ink" }) {
  const { cur, set } = useContext(Ctx);
  const base = tone === "ink" ? "border-paper/30" : "border-ink/20";
  const on = tone === "ink" ? "bg-paper text-ink" : "bg-ink text-paper";
  return (
    <div role="group" aria-label="Currency" className={`inline-flex rounded-full border p-1 ${base}`}>
      {(["zar", "usd"] as Cur[]).map((c) => (
        <button key={c} type="button" aria-pressed={cur === c} onClick={() => set(c)}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${cur === c ? on : "opacity-75 hover:opacity-100"}`}>
          {c === "zar" ? "Rand (ZAR)" : "Dollars (USD)"}
        </button>
      ))}
    </div>
  );
}
