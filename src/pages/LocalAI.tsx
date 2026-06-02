import Navbar from '../components/Navbar';
import { Cpu, Smartphone, Zap, Globe, Lock, Wifi, ChevronRight } from 'lucide-react';

const ramTiers = [
  {
    ram: '8 GB',
    icon: Smartphone,
    desc: 'Entry-level laptop, older PC, or basic machine',
    models: [
      { name: 'Qwen2.5-1.5B-Instruct', type: 'Text', size: '~1GB', speed: '40-60 t/s', use: 'Chat, summarisation, writing assistance' },
      { name: 'Qwen2.5-Coder-1.5B', type: 'Code', size: '~1GB', speed: '35-55 t/s', use: 'Code completion, debugging' },
      { name: 'Liquid-1.3B', type: 'Text', size: '~900MB', speed: '45-65 t/s', use: 'Fast inference, conversational' },
      { name: 'StepFun-1.5B', type: 'Text', size: '~1.1GB', speed: '35-50 t/s', use: 'Lightweight reasoning tasks' },
      { name: 'OpenBMB/MiniCPM-2B', type: 'Text', size: '~1.5GB', speed: '25-35 t/s', use: 'Knowledge QA, instruction following' },
    ],
    agent: 'OpenFang (lite) — Basic task automation, simple web scraping, local file operations. ~2GB RAM overhead.',
    verdict: 'Great for chat, coding assistance, and basic agent tasks. Not suitable for large context windows or complex multi-agent systems.',
  },
  {
    ram: '16 GB',
    icon: Cpu,
    desc: 'Mid-range laptop/desktop, MacBook Air/Pro M1+',
    models: [
      { name: 'Qwen2.5-7B-Instruct (Q4)', type: 'Text', size: '~4.5GB', speed: '12-20 t/s', use: 'Full chat, reasoning, analysis' },
      { name: 'Qwen2.5-Coder-7B (Q4)', type: 'Code', size: '~4.5GB', speed: '12-18 t/s', use: 'Advanced code generation, refactoring' },
      { name: 'Liquid-7B (Q4)', type: 'Text', size: '~4.5GB', speed: '15-25 t/s', use: 'Fast, efficient general purpose' },
      { name: 'StepFun-7B (Q4)', type: 'Text', size: '~4.5GB', speed: '10-16 t/s', use: 'Complex reasoning, analysis' },
      { name: 'MiniCPM-3B', type: 'Text', size: '~2GB', speed: '20-30 t/s', use: 'Lightning fast, great for tool use' },
      { name: 'Hermes-2-Pro-7B (Q4)', type: 'Agent', size: '~4.5GB', speed: '10-18 t/s', use: 'Function calling, JSON mode, agent workflows' },
    ],
    agent: 'Hermes (full) + OpenFang — Function calling, JSON mode, multi-step agent workflows. ~4GB overhead. Can run 2 models simultaneously (7B + 3B).',
    verdict: 'Sweet spot for local AI. Can run high-quality 7B models comfortably and even manage agent systems alongside.',
  },
  {
    ram: '32 GB',
    icon: Zap,
    desc: 'High-end desktop, workstation, gaming PC',
    models: [
      { name: 'Qwen2.5-14B-Instruct (Q4)', type: 'Text', size: '~9GB', speed: '8-14 t/s', use: 'Advanced reasoning, long form, analysis' },
      { name: 'Qwen2.5-32B-Instruct (Q4)', type: 'Text', size: '~18GB', speed: '3-6 t/s', use: 'Near GPT-4 level capability' },
      { name: 'Liquid-12B (Q4)', type: 'Text', size: '~8GB', speed: '10-18 t/s', use: 'High quality, efficient inference' },
      { name: 'StepFun-14B (Q4)', type: 'Text', size: '~9GB', speed: '6-10 t/s', use: 'Deep reasoning, technical tasks' },
      { name: 'Qwen2.5-72B (Q3)', type: 'Text', size: '~28GB', speed: '1-3 t/s', use: 'Frontier-level, heavy, best for batch' },
      { name: 'Hermes-2-Pro-12B (Q4)', type: 'Agent', size: '~8GB', speed: '8-14 t/s', use: 'Advanced agent capabilities, multi-tool' },
    ],
    agent: 'QwenPaw + Hermes + AgentZero — Full multi-agent orchestration. Can run 3-4 models concurrently. MoA (Mixture of Agents) setups. ~8GB overhead.',
    verdict: 'Runs frontier-level open models (14B-32B) with ease. Full multi-agent systems. Only limitation is speed on very large models (72B).',
  },
];

const agentSystems = [
  { name: 'QwenPaw', desc: 'Browser automation agent for web tasks. Navigate, click, type, extract data from any website. Ideal for research, data collection, form filling.', ram: '4-6GB' },
  { name: 'Hermes', desc: 'Function-calling specialist. JSON mode, tool use, structured outputs. The backbone of any agent system. Works with any OpenAI-compatible API.', ram: '4-5GB' },
  { name: 'AgentZero', desc: 'Multi-agent orchestrator. Coordinates multiple AI agents working together. MoA (Mixture of Agents) for improved output quality.', ram: '6-8GB' },
  { name: 'OpenFang', desc: 'Lightweight agent framework for file operations, web scraping, and task automation. Perfect for 8GB systems and basic automation.', ram: '2-3GB' },
];

const cloudModels = [
  { name: 'MiniMax', region: 'China', models: 'MiniMax-M1, speech-01, image-01', pricing: '~$0.15/M tokens (text), $0.002/image', note: 'Excellent TTS and image gen. Speach-2.8-hd is best-in-class for voice.' },
  { name: 'Qwen (Alibaba)', region: 'China', models: 'Qwen-Max, Qwen-Plus, Qwen-Turbo', pricing: '~$0.50-1.20/M tokens (Max), $0.15-0.35/M (Turbo)', note: 'Top-tier reasoning, strong coding. Competitive with GPT-4 at lower cost.' },
  { name: 'DeepSeek', region: 'China', models: 'DeepSeek-V3, DeepSeek-R1, DeepSeek-Coder', pricing: '~$0.14-0.27/M tokens (V3), $0.55/M (R1)', note: 'Best value for coding. R1 matches o1-preview on reasoning at fraction of cost.' },
];

export default function LocalAI() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">Guide</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            AI Local &<br />
            <span className="text-black">Privacy First</span>
          </h1>
          <div className="w-16 h-1 bg-black mb-6" />
          <p className="font-mono text-sm text-black/60 max-w-2xl leading-relaxed mb-4">
            You don't need a paid subscription, the cloud, or a $10,000 GPU to run capable AI. 
            A standard laptop or desktop with 8-32GB of RAM can run everything from chat assistants 
            to multi-agent systems — completely offline, private, and free.
          </p>
          <p className="font-mono text-xs text-black/40">
            All speeds based on CPU-only inference (no GPU needed). GPU acceleration improves speeds 2-5x.
          </p>
        </div>
      </section>

      {/* RAM Tiers */}
      {ramTiers.map((tier, ti) => (
        <section key={ti} className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="border-t-2 border-black pt-8 mb-6 flex items-center gap-4">
              <tier.icon className="w-6 h-6" />
              <h2 className="text-2xl font-heading tracking-tight">{tier.ram} RAM</h2>
              <div className="flex-1 h-[1px] bg-black/10" />
              <span className="text-[10px] font-mono text-black/40">{tier.desc}</span>
            </div>

            <div className="space-y-2 mb-6">
              {tier.models.map((m, mi) => (
                <div key={mi} className="border border-black/10 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-black/30 uppercase tracking-wider">{m.type}</span>
                        <h3 className="text-sm font-bold">{m.name}</h3>
                      </div>
                      <p className="text-xs font-mono text-black/50 mt-1">{m.use}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-mono text-black/40">{m.size}</p>
                      <p className="text-xs font-mono text-black/30">{m.speed}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-2 border-black p-4 mb-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/60 mb-2">Capabilities</p>
              <p className="text-xs font-mono text-black/70 leading-relaxed">{tier.agent}</p>
            </div>

            <p className="text-xs font-mono text-black/40 italic">{tier.verdict}</p>
          </div>
        </section>
      ))}

      {/* LM Studio Setup */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-t-2 border-black pt-8 mb-6">
            <h2 className="text-2xl font-heading tracking-tight">Getting Started with LM Studio</h2>
          </div>
          <div className="space-y-3">
            {[
              'Download LM Studio from lmstudio.ai (free, no account needed)',
              'Install and launch — it detects your hardware automatically',
              'Search for models: Qwen, Liquid, or StepFun (use Q4_K_M quantisation for best quality/speed balance)',
              'Download the model — GPT-accelerated downloads from Hugging Face',
              'Load the model in LM Studio — adjust context window to fit your RAM (8GB = 8K, 16GB = 32K, 32GB = 128K+)',
              'Enable local API server (port 1234) — OpenAI-compatible endpoint',
              'Connect any tool (Continue.dev, Open Interpreter, custom apps) to http://localhost:1234',
              'All inference runs 100% offline. No data leaves your machine.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-black text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                <p className="text-xs font-mono text-black/70 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Systems */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-t-2 border-black pt-8 mb-6">
            <h2 className="text-2xl font-heading tracking-tight">Local AI Agent Systems</h2>
          </div>
          <div className="space-y-3">
            {agentSystems.map((a, i) => (
              <div key={i} className="border border-black/10 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-bold">{a.name}</h3>
                    <p className="text-xs font-mono text-black/50 mt-1 leading-relaxed">{a.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-black/30 shrink-0">{a.ram} RAM</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Alternatives */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-t-2 border-black pt-8 mb-6">
            <h2 className="text-2xl font-heading tracking-tight">Cloud — Cheap & Non-US Models</h2>
          </div>
          <p className="font-mono text-xs text-black/50 mb-6 max-w-xl leading-relaxed">
            If you need more power than local can provide, these providers offer excellent models at 
            a fraction of OpenAI/Anthropic pricing — and they're based outside the US.
          </p>
          <div className="space-y-3">
            {cloudModels.map((c, i) => (
              <div key={i} className="border-2 border-black p-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-sm font-bold">{c.name}</h3>
                  <span className="text-[10px] font-mono text-black/40 uppercase">{c.region}</span>
                </div>
                <p className="text-xs font-mono text-black/70 mb-2">{c.models}</p>
                <p className="text-xs font-mono text-black/50 mb-1">{c.pricing}</p>
                <p className="text-xs font-mono text-black/40 italic">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-black p-8 text-center">
            <Wifi className="w-6 h-6 mx-auto mb-4 stroke-[1.5]" />
            <h2 className="text-xl font-heading mb-3">Free. Private. Offline.</h2>
            <p className="font-mono text-xs text-black/50 max-w-lg mx-auto leading-relaxed mb-6">
              Every model and tool mentioned here is open-source and free to use. 
              No subscriptions. No data collection. No internet required after download.
            </p>
            <a href="https://lmstudio.ai" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-900 transition-colors">
              Download LM Studio →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono text-black/30">Prices and specs accurate as of June 2026. Model sizes approximate. Quantisation methods vary.</p>
        </div>
      </footer>
    </div>
  );
}
