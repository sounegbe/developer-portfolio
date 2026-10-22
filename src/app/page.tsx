import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "NOVA AI",
    category: "AI Research",
    description: "An experimental AI research project exploring structured hypotheses, experiments, observations, and model improvement.",
    stack: ["Python", "Research", "AI"],
    href: null,
  },
  {
    number: "02",
    title: "Football Pulse AI Studio",
    category: "AI Content Tools",
    description: "A developing workspace for turning football research into verified scripts, articles, and multimedia content.",
    stack: ["AI", "Content Workflow", "Web"],
    href: "https://github.com/sounegbe/football-pulse-AI-studio",
  },
  {
    number: "03",
    title: "Foundation Platform",
    category: "Community Technology",
    description: "A community-focused platform being built to support member registration, programme information, and notifications.",
    stack: ["Python", "FastAPI", "Web"],
    href: "https://github.com/sounegbe/foundation-platform",
  },
];

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[780px] bg-[radial-gradient(ellipse_at_75%_20%,rgba(20,184,166,0.16),transparent_50%),radial-gradient(ellipse_at_20%_35%,rgba(59,130,246,0.12),transparent_48%)]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <header className="flex min-h-24 flex-wrap items-center justify-between gap-5 border-b border-white/10 py-5">
          <Link href="/" className="text-xl font-extrabold tracking-tight" aria-label="Sounegbe homepage">
            sounegbe<span className="text-teal-300">.</span>
          </Link>
          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-300 sm:gap-8">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-teal-300 focus-visible:text-teal-300">{item.label}</a>
            ))}
            <a href="https://github.com/sounegbe" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-teal-300 hover:text-teal-300">GitHub ↗</a>
          </nav>
        </header>

        <section aria-labelledby="hero-title" className="grid min-h-[680px] items-center gap-12 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-32">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-teal-400/25 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-200">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-teal-300" /> AI Engineer · Builder · Learner
            </p>
            <h1 id="hero-title" className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Exploring what&apos;s possible with <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">intelligent technology.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              I&apos;m an AI Engineer who enjoys turning ambitious ideas into practical experiments and software projects. I build, test, learn, and keep improving.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal-300 px-7 font-bold text-slate-950 transition hover:bg-teal-200">Explore my work <span aria-hidden="true" className="ml-2">↗</span></a>
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 font-semibold text-white transition hover:border-teal-300 hover:text-teal-300">Get in touch</a>
            </div>
          </div>
          <div aria-label="Decorative AI-inspired graphic" className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center">
            <div className="absolute inset-2 rounded-full border border-teal-300/15" />
            <div className="absolute inset-[12%] rounded-full border border-dashed border-cyan-300/25" />
            <div className="absolute inset-[23%] rounded-full border border-teal-300/20 bg-teal-300/5 shadow-[0_0_100px_rgba(45,212,191,0.12)]" />
            <div className="relative flex h-40 w-40 rotate-12 items-center justify-center rounded-[2.5rem] border border-teal-300/40 bg-slate-900/90 shadow-2xl shadow-teal-500/10 sm:h-48 sm:w-48">
              <span className="-rotate-12 text-center text-5xl font-black tracking-tighter text-teal-200 sm:text-6xl">AI<span className="text-white">.</span></span>
            </div>
            <span className="absolute left-[6%] top-[20%] rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300">Research</span>
            <span className="absolute bottom-[16%] right-[1%] rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300">Build → Test → Learn</span>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="scroll-mt-24 border-t border-white/10 py-24">
          <p className="section-kicker">01 / About</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 id="about-title" className="text-4xl font-bold tracking-tight sm:text-5xl">Curiosity meets <span className="text-teal-300">code.</span></h2>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>My work sits at the intersection of artificial intelligence, software engineering, and problem-solving. I enjoy learning through real projects, not just tutorials.</p>
              <p>From research experiments to community platforms and creative tools, I&apos;m focused on making technology useful, understandable, and accessible.</p>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">Python · AI experimentation · Web development · Collaboration</p>
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 border-t border-white/10 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="section-kicker">02 / Selected work</p>
              <h2 id="projects-title" className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Projects in progress<span className="text-teal-300">.</span></h2>
            </div>
            <a href="https://github.com/sounegbe?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-teal-300 hover:text-teal-200">All GitHub repositories ↗</a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/[0.055]">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  <span>{project.category}</span><span>{project.number}</span>
                </div>
                <h3 className="mt-12 text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item}</span>)}
                </div>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 self-start text-sm font-bold text-teal-300 hover:text-teal-200">View repository <span aria-hidden="true">↗</span><span className="sr-only">for {project.title}</span></a>
                ) : (
                  <span className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-slate-400" aria-label={`${project.title} source code is private`}>Private source code · Portfolio showcase</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 border-t border-white/10 py-24">
          <div className="rounded-[2rem] border border-teal-300/20 bg-gradient-to-br from-teal-400/10 via-slate-900 to-slate-900 p-8 sm:p-12">
            <p className="section-kicker">03 / Connect</p>
            <h2 id="contact-title" className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Have an idea worth exploring?</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">I&apos;m interested in meaningful projects, learning opportunities, and conversations about AI and software.</p>
            <a href="https://github.com/sounegbe" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-teal-300 px-7 font-bold text-slate-950 transition hover:bg-teal-200">Connect on GitHub ↗</a>
          </div>
        </section>

        <footer className="flex flex-wrap justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} sounegbe. Built with curiosity.</span>
          <a href="#hero-title" className="hover:text-teal-300">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
