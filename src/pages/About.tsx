import { ArrowRight, Mail, Calendar, Quote, Award, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Quote className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">About</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            Insight Guy<br />
            <span className="text-black">Brendan O'Keefe</span>
          </h1>
          <div className="w-16 h-1 bg-black mb-6" />
          <p className="font-mono text-sm text-black/60 max-w-2xl leading-relaxed">
            AI Integration Specialist. Agent builder. Long-time AI practitioner who went deep into the negatives.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-t-2 border-black pt-8 mb-8">
            <h2 className="text-2xl font-heading tracking-tight">The Story</h2>
          </div>

          <div className="space-y-6 font-mono text-sm text-black/70 leading-relaxed">

            <div className="border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/50">2023 — The Beginning</span>
              </div>
              <p>
                I got into AI early — before ChatGPT made it a household name. I saw the potential immediately 
                and started building. Over three years, I built AI agents, automated workflows, and 
                integrated AI into real-world systems. I experienced the positive side first-hand: 
                productivity gains, new capabilities, things that were impossible five years ago 
                becoming routine. I was an AI optimist.
              </p>
            </div>

            <div className="border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/50">2026 — The Turning Point</span>
              </div>
              <p>
                Earlier this year, I started questioning the direction. The more I built, the more I saw 
                the other side. Data centres consuming water in drought-stricken communities. Deepfakes 
                destroying lives. AI chatbots driving teenagers to suicide. Algorithms designed to addict. 
                Jobs being eliminated not because it made sense, but because Wall Street demanded it.
              </p>
              <p className="mt-3">
                I realised the AI conversation was almost entirely one-sided. The industry, the media, 
                the investors — all talking about what AI can do. Almost nobody talking about what it's 
                actually doing to people, communities, and the planet.
              </p>
            </div>

            <div className="border-2 border-black p-6 bg-black/[0.02]">
              <div className="flex items-center gap-3 mb-3">
                <Quote className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/50">Now</span>
              </div>
              <p>
                So I did a deep dive. Not into the next breakthrough model or the latest benchmark. 
                But into the negatives. The harms. The costs. The victims.
              </p>
              <p className="mt-3">
                This site is the result. Nine research-backed issue briefs. Real data from real sources. 
                No hype. No venture capital agenda. Just the evidence — laid out in black and white, 
                literally.
              </p>
              <p className="mt-3 font-bold">
                I'm still an AI builder. But now I'm an honest one.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Background */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-t-2 border-black pt-8 mb-6">
            <h2 className="text-2xl font-heading tracking-tight">Background</h2>
          </div>
          <div className="border border-black/10 p-6 space-y-3 font-mono text-xs text-black/60 leading-relaxed">
            <p><strong className="text-black">Role:</strong> AI Integration Specialist — building AI-first systems for businesses and individuals.</p>
            <p><strong className="text-black">Location:</strong> Melbourne, Australia (Cranbourne West, VIC 3977)</p>
            <p><strong className="text-black">Stack:</strong> LM Studio, Qwen3, MiniMax, DeepSeek, local agents, Python automation, multi-agent orchestration.</p>
            <p><strong className="text-black">Focus:</strong> Local AI deployment, privacy-first agent systems, AI harm awareness, practical alternatives to cloud dependency.</p>
            <p><strong className="text-black">Projects:</strong> AI Orchestrator, Lead with AI, Quest IEP App, and this site — NEG-AI-TIVE.</p>
          </div>
        </div>
      </section>

      {/* Consulting CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-black p-8 text-center">
            <Mail className="w-6 h-6 mx-auto mb-4" />
            <h2 className="text-2xl font-heading mb-3">Need an Honest AI Consultant?</h2>
            <p className="font-mono text-xs text-black/50 max-w-lg mx-auto leading-relaxed mb-6">
              I help businesses and individuals navigate AI the right way — locally, privately, 
              and with full awareness of both the benefits AND the risks. No hype. No upsells. 
              Just practical, hands-on guidance from someone who's built both sides of the fence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:boktoday@gmail.com?subject=AI%20Consulting%20Inquiry"
                className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4" /> Email Me
              </a>
              <a
                href="https://calendly.com/boktoday/ai-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-black text-xs font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors"
              >
                <Calendar className="w-4 h-4" /> Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono text-black/30">Built by Brendan O'Keefe. Melbourne, Australia.</p>
        </div>
      </footer>
    </div>
  );
}
