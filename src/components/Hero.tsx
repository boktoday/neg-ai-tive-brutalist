import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white text-black overflow-hidden pt-16">

      {/* Full-height bold stripe on the left */}
      <div className="absolute top-0 left-0 w-2 h-full bg-black" />

      {/* ====== B&W WORLD MAP WITH DATA CENTRES ====== */}

      {/* Continents — pure CSS black shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <svg className="w-full h-full max-w-[900px] max-h-[500px] opacity-[0.12]" viewBox="0 0 900 500" fill="black" xmlns="http://www.w3.org/2000/svg">
          {/* North America */}
          <path d="M80 120 L120 100 L160 105 L200 90 L220 95 L240 110 L260 130 L270 160 L260 190 L240 210 L220 230 L200 240 L180 245 L160 240 L140 230 L130 210 L120 190 L100 170 L90 150 Z" />
          {/* South America */}
          <path d="M200 260 L220 255 L240 260 L250 280 L255 310 L250 340 L240 370 L230 390 L220 400 L210 395 L205 370 L200 340 L195 310 L195 280 Z" />
          {/* Europe */}
          <path d="M380 90 L400 80 L420 85 L440 95 L450 110 L455 130 L450 150 L440 165 L420 170 L400 168 L390 160 L380 140 L375 120 Z" />
          {/* Africa */}
          <path d="M380 180 L400 175 L420 180 L430 200 L435 230 L430 260 L420 290 L410 310 L400 320 L390 315 L385 290 L380 260 L375 230 L375 200 Z" />
          {/* Asia */}
          <path d="M460 85 L500 75 L540 80 L580 90 L620 100 L660 110 L680 130 L690 160 L685 190 L670 210 L650 220 L620 225 L590 220 L560 215 L530 210 L500 205 L480 195 L465 175 L460 150 L460 120 Z" />
          {/* Australia */}
          <path d="M650 300 L680 290 L710 295 L730 310 L740 330 L730 350 L710 360 L690 365 L670 360 L655 345 L648 325 Z" />

          {/* Data centre dots — pulsing nodes on each continent */}
          {[
            // North America (Virginia, Silicon Valley, Texas, Oregon)
            { cx: 120, cy: 130 }, { cx: 90, cy: 110 }, { cx: 170, cy: 150 }, { cx: 100, cy: 140 },
            // South America (São Paulo, Santiago)
            { cx: 215, cy: 310 }, { cx: 200, cy: 350 },
            // Europe (London, Frankfurt, Dublin, Amsterdam, Paris)
            { cx: 395, cy: 105 }, { cx: 420, cy: 110 }, { cx: 380, cy: 95 }, { cx: 400, cy: 100 }, { cx: 390, cy: 115 },
            // Africa (Johannesburg, Nairobi, Lagos)
            { cx: 410, cy: 300 }, { cx: 420, cy: 250 }, { cx: 400, cy: 220 },
            // Asia (Singapore, Tokyo, Mumbai, Beijing, Seoul, Dubai)
            { cx: 540, cy: 190 }, { cx: 640, cy: 110 }, { cx: 550, cy: 160 }, { cx: 580, cy: 120 }, { cx: 610, cy: 100 }, { cx: 510, cy: 140 },
            // Australia (Sydney, Melbourne)
            { cx: 690, cy: 340 }, { cx: 670, cy: 350 },
          ].map((dot, i) => (
            <circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r="4"
              fill="black"
              className="animate-ping"
              style={{ animationDuration: `${2 + Math.random() * 3}s`, animationDelay: `${Math.random() * 2}s`, opacity: 0.9 }}
            />
          ))}
        </svg>
      </div>

      {/* Grid overlay — like a server rack */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />

      {/* ====== CONTENT ====== */}
      <div className="relative z-10 px-8 max-w-5xl mx-auto w-full">
        {/* Top bar */}
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

        {/* Description */}
        <p className="font-mono text-base md:text-lg leading-relaxed max-w-2xl mb-12 text-black/80">
          Data centres on every continent. Millions of servers. Billions of queries.
          The hidden cost of AI is a planetary-scale infrastructure consuming energy, water, and your future.
          <span className="block mt-2 font-bold">Here's the evidence.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#stories" className="inline-block px-10 py-5 bg-black text-white font-bold text-lg no-underline hover:bg-gray-900 transition-colors border-2 border-black">
            Read the Horror Stories →
          </a>
          <a href="#submit" className="inline-block px-10 py-5 border-2 border-black text-black font-bold text-lg no-underline hover:bg-black hover:text-white transition-colors">
            Share Your Trauma
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap gap-12 border-t-2 border-black/10 pt-8">
          {[
            { label: 'Victims Documented', value: '12,847' },
            { label: 'Data Centres Globally', value: '10,000+' },
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
