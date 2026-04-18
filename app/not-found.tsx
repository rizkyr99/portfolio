import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-rosewood/60">
          404 · out of tune
        </p>
        <h1 className="mt-4 font-display text-6xl text-rosewood font-light">
          No signal here.
        </h1>
        <p className="mt-3 text-rosewood/70 max-w-md mx-auto">
          Couldn&apos;t find that page. Maybe the cable came unplugged.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block px-5 py-2.5 rounded-full bg-rosewood text-cream font-mono text-xs uppercase tracking-widest hover:bg-sunburst-brown transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
