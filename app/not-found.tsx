import Link from "next/link";
export default function NotFound() {
  return (
    <section className="wrap py-24 md:py-32">
      <p className="label text-clay">Page not found</p>
      <h1 className="display mt-4 text-5xl md:text-7xl">That page has <em>moved on.</em></h1>
      <p className="mt-6 max-w-xl text-lg text-ink/75">The address may be old or mistyped. Everything we offer is on the services page.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/services/" className="btn btn-clay">Browse services</Link><Link href="/" className="btn btn-line">Back to home</Link></div>
    </section>
  );
}
