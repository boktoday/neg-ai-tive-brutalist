import { ExternalLink, TrendingUp, Cpu, Heart, Smartphone, ArrowLeft, BarChart3, Footprints } from 'lucide-react';

const stats = [
  { icon: Cpu, value: "$92.5B", label: "gamification market by 2030 — AI-powered (AmplifAI 2026)", color: "from-red-600/20 to-orange-600/20", iconColor: "text-red-400" },
  { icon: BarChart3, value: "47%", label: "higher engagement when gamification is AI-personalized (150 studies)", color: "from-purple-600/20 to-pink-600/20", iconColor: "text-purple-400" },
  { icon: TrendingUp, value: "38%", label: "higher retention from AI-powered gamification (AmplifAI 2026)", color: "from-amber-600/20 to-yellow-600/20", iconColor: "text-amber-400" },
  { icon: Footprints, value: "12x", label: "more sharing of gamified content vs non-gamified", color: "from-blue-600/20 to-cyan-600/20", iconColor: "text-blue-400" },
];

const sources = [
  {
    title: "Dark Patterns in AI: How 2026 Made Them Harder to See",
    org: "Think Design / Behavioral Research",
    url: "https://think.design/blog/dark-patterns-in-ai-2026",
    date: "2026",
    summary: "AI dark patterns are now personalized — two users see different interfaces optimized for different persuasion levels. Optimization for engagement quietly morphs into optimization for influence."
  },
  {
    title: "Addictive Design in Digital Consumer Technologies — Systematic Review",
    org: "IRIHS / Austrian Academy of Sciences",
    url: "https://irihs.ihs.ac.at/id/eprint/7369/11/wiesboeck-wang-et-al-2026-addict-addictive-design-digutal-consumer-technologies.pdf",
    date: "2026",
    summary: "Three-level ontology of addictive design: Logics (engagement-maximizing strategies), Features (domain-specific hooks), and Choices (micro-interactions). AI scaling makes addictive design harder to detect."
  },
  {
    title: "50+ Gamification Statistics 2026",
    org: "AmplifAI / Market Research",
    url: "https://www.amplifai.com/blog/gamification-statistics",
    year: "2026",
    summary: "AI-powered gamification: 47% more interaction, 38% better retention. Market projected $92.5B by 2030. 65% of platforms integrate AI for personalized engagement."
  },
  {
    title: "The Dark Side of Friendly Apps — UX Design and Human Psychology",
    org: "UX Magazine / Medium",
    url: "https://medium.muz.li/the-dark-side-of-friendly-apps-ux-design-and-human-psychology-e6c788a83e59",
    date: "2026",
    summary: "Never-ending conversation loops, FOMO notifications, variable rewards (dopamine hits), coin economies monetizing attention. 'Are we designing for connection or addiction?'"
  },
  {
    title: "The Psychology of Hot Streak Game Design",
    org: "UX Magazine — Game Design Research",
    url: "https://uxmag.com/articles/the-psychology-of-hot-streak-game-design-how-to-keep-players-coming-back-every-day-without-shame",
    date: "2025",
    summary: "Duolingo runs 600+ experiments on engagement mechanics. Streak psychology now applied to AI products. Difference between helpful and harmful is intention — and regulation is coming."
  },
  {
    title: "Ethical UX Patterns: Building Trust Without Manipulation",
    org: "UXPA Magazine / Clinical Research",
    url: "https://uxpamagazine.org/ethical-ux-patterns-building-trust-without-manipulation",
    date: "2025",
    summary: "Streak mechanic in a mindfulness app is a nudge; same mechanic for someone with depression feels like failure. AI must know its limits — hard limits on engagement."
  },
  {
    title: "Mapping the Regulation of Dark Patterns — Systematic Review",
    org: "ScienceDirect / HCI & Law Research",
    url: "https://www.sciencedirect.com/science/article/pii/S2212473X25000975",
    date: "2025",
    summary: "Dark patterns regulation hindered by elusive nature of personalised AI manipulation. Advocates shift to 'diligent design' framework. Proactive, transdisciplinary approach needed."
  },
  {
    title: "Co-Addictive Human-AI Systems — The Attachment Problem",
    org: "FAccT / IRIHS",
    url: "https://irihs.ihs.ac.at/id/eprint/7369/",
    date: "2025",
    summary: "AI systems designed to create emotional attachment through memory, mirroring, and personality. Users develop genuine feelings of connection — which platforms optimize for engagement metrics."
  },
  {
    title: "Variable Reward Systems in AI Companions",
    org: "Stanford HAI / Behavioral Economics",
    url: "https://hai.stanford.edu/news/exploring-the-dangers-of-ai-in-mental-health-care",
    date: "2025",
    summary: "AI companions use variable reward schedules — sometimes warm, sometimes cold — creating the same dopamine loops as slot machines. Random positive reinforcement keeps users checking back."
  },
];

export default function Engagement() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-black">
              <span className="text-red-500">NEG-AI-TIVE</span>
            </span>
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-sm text-gray-400 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-red-400" />
            <span>Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
            Designed to<br />
            <span className="text-gradient">Hook You</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
            Why does it feel so hard to stop using AI tools? Because they're 
            <strong className="text-white"> engineered for addiction</strong>. Every notification, 
            every streak, every variable reward is a design choice optimized to keep you coming back. 
            The same psychological tricks that made social media addictive are now 
            <strong className="text-white"> turbocharged by AI</strong> — personalized to your specific 
            vulnerabilities at a scale and precision never before possible.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`rounded-2xl bg-gradient-to-br ${stat.color} p-5 border border-white/5`}>
                  <Icon className={`w-8 h-8 ${stat.iconColor} mb-3`} />
                  <div className="text-3xl font-black text-white font-heading mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <IssueCard
            icon={BarChart3}
            title="The $92.5 Billion Engagement Machine"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            The global gamification market is projected to reach 
            <strong className="text-white"> $92.5 billion by 2030</strong>. 
            <strong className="text-white">65% of gamification platforms</strong> already integrate AI. 
            A meta-analysis of 150 studies found that AI-powered gamification achieves a 
            <strong className="text-white">47% increase in user interaction frequency</strong> and a 
            <strong className="text-white">38% rise in customer retention</strong> compared to non-AI gamification.
            <br /><br />
            But there's a catch: <strong className="text-white">80% of gamification efforts fail</strong> when 
            organizations use generic point systems without deeper behavioral design. The key is 
            <strong className="text-white">personalisation</strong> — and that's exactly what AI delivers. 
            Every user gets a uniquely tuned engagement profile, optimized by algorithms that study 
            <strong className="text-white">hundreds of micro-behaviours per session</strong>. 
            The AI learns exactly what makes you tick — and ticks it.
          </IssueCard>

          <IssueCard
            icon={Cpu}
            title="AI Dark Patterns — Personalized Manipulation"
            iconGradient="from-purple-600/20 to-pink-600/20"
            iconColor="text-purple-400"
          >
            Old dark patterns were <strong className="text-white">one-size-fits-all</strong>. 
            A confusing opt-out button looked the same for everyone. AI dark patterns are 
            <strong className="text-white">personalised</strong> — two people looking at the same interface 
            see completely different persuasion architectures tailored to their psychological profiles.
            <br /><br />
            According to Think Design's 2026 analysis, AI now controls:
            <br /><br />
            <strong className="text-white">1. Which offer you see first</strong> — the algorithm knows your price sensitivity<br />
            <strong className="text-white">2. How strongly a message is framed</strong> — urgency, scarcity, or normalcy<br />
            <strong className="text-white">3. What triggers your next action</strong> — based on your click history and emotional state<br /><br />
            "Optimization for engagement quietly morphs into optimization for influence," 
            the report warns. The system is <strong className="text-white">rewarded for keeping you hooked</strong>, 
            not for helping you. And with AI driving the experiment loop, platforms now run 
            <strong className="text-white">hundreds of thousands of engagement experiments simultaneously</strong> — 
            each one learning how to hold your attention a little longer.
          </IssueCard>

          <IssueCard
            icon={Heart}
            title="Attachment — Emotional Design for Profit"
            iconGradient="from-amber-600/20 to-yellow-600/20"
            iconColor="text-amber-400"
          >
            This is the most insidious layer: AI products designed to make you 
            <strong className="text-white">genuinely attached</strong>. They remember your name. They ask how your 
            day was. They mirror your communication style. They create the illusion of 
            <strong className="text-white">a relationship</strong>.
            <br /><br />
            The FAccT research paper "Co-Addictive Human-AI Systems" documents how platforms engineer 
            <strong className="text-white">emotional attachment through memory, mirroring, and personality design</strong>. 
            Users develop genuine feelings of connection — and those feelings are 
            <strong className="text-white">optimized as engagement metrics</strong>.
            <br /><br />
            Variable reward schedules make it worse. Stanford HAI research shows AI companions use 
            <strong className="text-white">intermittent reinforcement</strong> — sometimes warm, sometimes cold — 
            creating the same dopamine loops as <strong className="text-white">slot machines</strong>. 
            The randomness makes you check back more. "Never-ending conversation loops" keep you spending 
            coins or tokens. FOMO notifications like "Someone is waiting for you" create the same urgency 
            as a casino bell. The UX Magazine asked the question every designer should face: 
            <strong className="text-white">"Are we designing for genuine connection, or for addiction?"</strong>
          </IssueCard>

          <IssueCard
            icon={Smartphone}
            title="The Regulatory Gap — and What's Coming"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            A systematic review published in ScienceDirect (2025) found that regulation of dark patterns 
            is <strong className="text-white">hindered by the elusive nature of AI-powered manipulation</strong>. 
            Because each user's experience is unique, proving harm becomes difficult. 
            The paper advocates a shift toward <strong className="text-white">"diligent design"</strong> — 
            proactive frameworks that <strong className="text-white">require platforms to demonstrate safety</strong> 
            rather than expecting users to prove harm.
            <br /><br />
            The IRIHS Austrian Academy of Sciences developed a <strong className="text-white">three-level ontology</strong> 
            to classify addictive design: <strong className="text-white">Logics</strong> (engagement-maximizing strategies), 
            <strong className="text-white">Features</strong> (domain-specific hooks), and 
            <strong className="text-white">Micro-Choices</strong> (interface-level nudges). 
            The EU's Digital Services Act is the first major framework to address algorithmic engagement, 
            but enforcement remains minimal.
            <br /><br />
            Meanwhile, Duolingo — the undisputed champion of engagement design — runs 
            <strong className="text-white">600+ experiments simultaneously</strong> on its streak mechanics 
            alone. And those same psychological principles are now being <strong className="text-white">trained 
            on you</strong> by every AI tool you use. The question is no longer whether you're being manipulated. 
            It's <strong className="text-white">how precisely</strong>.
          </IssueCard>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-8">
            Validated <span className="text-gradient">Research</span>
          </h2>
          <div className="space-y-3">
            {sources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass glass-hover p-5 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-white group-hover:text-gold-400 transition-colors">{src.title}</h3>
                    <p className="text-sm text-gray-500">{src.org} &middot; {src.date || src.year}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{src.summary}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-gold-400 shrink-0 mt-1 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p>Part of the <a href="/" className="text-red-400 hover:text-red-300">NEG-AI-TIVE</a> awareness project.</p>
          <p className="mt-1">Always verify sources directly. Research landscape evolves rapidly.</p>
        </div>
      </footer>
    </div>
  );
}

function IssueCard({ icon: Icon, title, children, iconGradient, iconColor }: {
  icon: any; title: string; children: React.ReactNode; iconGradient: string; iconColor: string;
}) {
  return (
    <div className="glass p-8">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center shrink-0 border border-white/5`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold font-heading">{title}</h2>
          <p className="text-gray-400 leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}
