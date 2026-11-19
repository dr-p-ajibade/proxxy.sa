import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";

export const metadata: Metadata = { title: "Request received", robots: { index: false } };
export default function Thanks() {
  return (
    <>
      <PageHead label="Request received" title={<>Thank you, <em>it is in.</em></>}>We will email you at the address you gave to set a time for your free consultation.</PageHead>
      <div className="wrap py-14 md:py-20">
        <div className="rounded-2xl border border-ink/15 p-8">
          <p className="font-display text-2xl">Before the call, gather what you already have.</p>
          <p className="mt-3 text-ink/75">A PAIA manual, a privacy notice, a file plan, a funder&apos;s brief or a list of tasks your team repeats every week all help us give you a useful answer.</p>
          <Link href="/services/" className="btn btn-line mt-6">Browse services</Link>
        </div>
      </div>
    </>
  );
}
