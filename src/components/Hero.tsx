import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white text-black overflow-hidden pt-16">

      {/* Full-height bold stripe on the left */}
      <div className="absolute top-0 left-0 w-2 h-full bg-black" />

      {/* Large "NEG-AI-TIVE" as raw background watermark */}
      <div className="absolute top-8 left-8 text-[200px] md:text-[400px] font-black text-black/[0.03] leading-none pointer-events-none select-none">
        NEG-AI-TIVE
      </div>

      <div className="relative z-10 px-8 max-w-5xl mx-auto w-full">

        {/* Top bar: badge + tagline */}
        <div className="flex items-center gap-4 mb-16 border-l-8 border-black pl-4">
          <div className="w-3 h-3 bg-black" />
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-black/60">
            Awareness Project
          </p>
          <span className="text-black/20 mx-2">//</span>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-black/60">
            The Hidden Cost of AI
          </p>
        </div>

        {/* Main headline */}
        <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-heading leading-[0.85] mb-8 tracking-[-0.04em]">
          <span className="block">NEG-</span>
          <span className="block">AI-</span>
          <span className="block">TIVE</span>
        </h1>

        {/* Separator */}
        <div className="w-full h-1 bg-black mb-8" />

        {/* Description — set in monospace, like a teletype */}
        <p className="font-mono text-base md:text-lg leading-relaxed max-w-2xl mb-12 text-black/80">
          Artists replaced. Writers ghosted. Coders obsolete. Marketers buried in spam.
          The negative effects of AI are real. Here's the evidence.
        </p>

        {/* CTA buttons — raw black boxes */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#stories"
            className="inline-block px-10 py-5 bg-black text-white font-bold text-lg no-underline hover:bg-gray-900 transition-colors border-2 border-black"
          >
            Read the Horror Stories →
          </a>
          <a
            href="#submit"
            className="inline-block px-10 py-5 border-2 border-black text-black font-bold text-lg no-underline hover:bg-black hover:text-white transition-colors"
          >
            Share Your Trauma
          </a>
        </div>

        {/* Stats — raw numbers */}
        <div className="mt-16 flex flex-wrap gap-12 border-t-2 border-black/10 pt-8">
          {[
            { label: 'Victims Documented', value: '12,847' },
            { label: 'Jobs Lost to AI', value: '∞' },
            { label: 'Research Sources', value: '40+' },
          ].map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="text-4xl md:text-5xl font-black tracking-tight">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] mt-1 text-black/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-black/30" />
      </div>
    </section>
  );
}
