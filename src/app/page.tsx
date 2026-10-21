import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight">sounegbe<span className="text-cyan-400">.</span></Link>
          <a href="https://github.com/sounegbe" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-600 px-4 py-2 text-sm hover:border-cyan-400">GitHub ↗</a>
        </header>
        <section className="py-28 sm:py-36">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">AI Engineer · Developer</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl">Building intelligent solutions for real-world problems.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">I explore artificial intelligence and software engineering through hands-on projects, experimentation, and continuous learning.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://github.com/sounegbe?tab=repositories" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">Explore my projects ↗</a>
            <a href="https://github.com/sounegbe" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-400">Connect on GitHub</a>
          </div>
        </section>
        <footer className="border-t border-slate-800 pt-6 text-sm text-slate-500">Portfolio foundation · More sections coming soon</footer>
      </div>
    </main>
  );
}
