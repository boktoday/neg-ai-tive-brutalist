import { ExternalLink, TrendingDown, DollarSign, BarChart3, Target, ArrowLeft, FlaskConical, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';

const stats = [
  { icon: TrendingDown, value: "95%", label: "of genAI pilots delivered zero financial return (MIT 2025)", color: "from-red-600/20 to-orange-600/20", iconColor: "text-red-400" },
  { icon: DollarSign, value: "$1.5T", label: "forecast AI spend in 2025 — with minimal measurable value", color: "from-purple-600/20 to-pink-600/20", iconColor: "text-purple-400" },
  { icon: BarChart3, value: "72%", label: "of organizations break even or lose on AI (Gartner 2025)", color: "from-amber-600/20 to-yellow-600/20", iconColor: "text-amber-400" },
  { icon: Target, value: "46%", label: "of AI proofs-of-concept scrapped before production (S&P Global)", color: "from-blue-600/20 to-cyan-600/20", iconColor: "text-blue-400" },
];

const sources = [
  {
    title: "The GenAI Divide: State of AI in Business 2025",
    org: "MIT NANDA Initiative / BCG / McKinsey",
    url: "https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf",
    date: "2025",
    summary: "95% of genAI pilots delivered zero measurable financial return. Only ~5% achieved rapid revenue acceleration. 88% of organizations use AI, but only 33% scale it. $1.5T spent with minimal result."
  },
  {
    title: "Gartner Predicts 30% of GenAI Projects Abandoned After POC",
    org: "Gartner",
    url: "https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025",
    date: "Jul 2024 / 2025",
    summary: "30% of genAI projects abandoned after proof of concept. 72% of organizations break even or lose money on AI. Those that fail cite poor data quality, escalating costs, unclear business value."
  },
  {
    title: "Why 90% of Enterprise AI Implementations Fail",
    org: "Talyx / S&P Global / Gartner",
    url: "https://talyx.ai/insights/enterprise-ai-implementation-failure",
    date: "2026",
    summary: "42% of companies abandoned most AI initiatives in 2025, up from 17% in 2024. 46% of AI proofs-of-concept scrapped before production. Average 8 months from prototype to production."
  },
  {
    title: "From AI Hype to ROI: How Leaders Can Realize Value",
    org: "Forbes / McKinsey / BCG / Gartner",
    url: "https://councils.forbes.com/blog/from-ai-hype-to-roi-how-leaders-can-realize-value-from-genai",
    date: "2025–2026",
    summary: "72% of organizations break even or lose money on AI. Gap between AI's promise and business impact remains wide. Success comes from organizational readiness, not AI capability."
  },
  {
    title: "Why 95% of AI Projects Fail and How Data Fixes It",
    org: "SR Analytics / S&P Global / MIT / Gartner",
    url: "https://sranalytics.io/blog/why-95-of-ai-projects-fail",
    date: "2025–2026",
    summary: "95% of genAI pilots delivered zero return. 42% of US companies abandoned AI initiatives. 60% of projects lacking AI-ready data predicted abandoned through 2026."
  },
  {
    title: "Enterprises scaled back genAI spending as 'trough of disillusionment' hit",
    org: "CIO Dive / S&P Global",
    url: "https://www.ciodive.com/news/genai-spending-enterprise-trough-disillusionment/735886",
    date: "2025–2026",
    summary: "Enterprises scaled back on AI investments after hitting ROI reality. S&P Global survey: 42% of companies abandoned AI initiatives. Honeymoon phase officially over."
  },
  {
    title: "AI project failure is increasing — 80% of AI projects fail before they start",
    org: "QuickLaunch Analytics / RAND / S&P Global",
    url: "https://quicklaunchanalytics.com/bi-blog/why-80-of-ai-projects-fail-before-they-start-its-your-data-foundation",
    date: "2025–2026",
    summary: "RAND: over 80% of AI projects fail to reach production. Data quality cited by 43% as top obstacle. Failed projects typically cost $5-10M each before cancellation."
  },
  {
    title: "60% of AI projects will be abandoned — here's what decides the rest",
    org: "Zennify / Gartner / McKinsey",
    url: "https://www.zennify.com/articles/60-of-ai-projects-will-be-abandoned-heres-what-decides-the-rest",
    date: "2025",
    summary: "Gartner: 60% of AI projects lacking AI-ready data will be abandoned through 2026. Only ~33% of organizations have begun scaling AI enterprise-wide."
  },
];

export default function ActualIntelligence() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6">
            <Lightbulb className="w-4 h-4 text-red-400" />
            <span className="text-black/60">Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            Actual<br />
            <span className="text-black font-heading">Intelligence</span>
          </h1>
          <p className="text-base font-mono text-black/60 max-w-3xl leading-relaxed">
            $1.5 trillion. That's how much the world spent on AI in 2025. 
            And <strong className="text-black">95% of generative AI pilots delivered zero measurable financial return</strong>. 
            The emperor has been parading for two years and we're only now admitting he's wearing 
            <strong className="text-black">no clothes</strong>. The real intelligence gap isn't between 
            humans and AI — it's between the <strong className="text-black">hype and the reality</strong>.
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
                  <div className="text-3xl font-black mb-1 font-heading">{stat.value}</div>
                  <div className="text-xs font-mono text-black/50 leading-relaxed">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <IssueCard
            icon={DollarSign}
            title="The $1.5 Trillion Question"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            Gartner estimated global AI spending would reach <strong className="text-black">$1.5 trillion</strong> 
            in 2025. But the MIT GenAI Divide Report, based on 150 executive interviews, a 350-employee survey, 
            and analysis of 300 public AI deployments, found that roughly 
            <strong className="text-black">95% of generative AI pilots delivered zero measurable financial return</strong>.
            <br /><br />
            The IBM Institute for Business Value found enterprise-wide AI initiatives achieved an average ROI of 
            <strong className="text-black">5.9%</strong> — despite incurring a 10%+ capital investment. 
            That's <strong className="text-black">negative net return</strong>. 
            S&P Global found 42% of companies <strong className="text-black">abandoned most AI initiatives in 2025</strong>, 
            up from 17% in 2024 — a <strong className="text-black">147% increase in abandonment</strong> in a single year. 
            The honeymoon is over and the hangover has begun.
          </IssueCard>

          <IssueCard
            icon={FlaskConical}
            title="The Pilot-to-Production Chasm"
            iconGradient="from-purple-600/20 to-pink-600/20"
            iconColor="text-purple-400"
          >
            This is the central problem of the AI industry: 
            <strong className="text-black">impressive demos that never become working products</strong>. 
            Gartner predicted 30% of generative AI projects would be abandoned after proof of concept by the end of 2025. 
            The reality appears worse. S&P Global found the average organization 
            <strong className="text-black">scrapped 46% of AI proofs-of-concept</strong> before they ever reached production.
            <br /><br />
            Only <strong className="text-black">48% of AI projects make it into production at all</strong>, 
            and those that do require an average of <strong className="text-black">8 months</strong> from prototype to production 
            (Gartner). RAND Corporation found over <strong className="text-black">80% of AI projects fail</strong> to reach 
            production deployment entirely. The failed projects aren't cheap either — each canceled POC typically costs 
            <strong className="text-black">$5-10 million</strong> before the plug is pulled.
          </IssueCard>

          <IssueCard
            icon={BarChart3}
            title="The Benchmark Illusion"
            iconGradient="from-amber-600/20 to-yellow-600/20"
            iconColor="text-amber-400"
          >
            AI models ace standardized benchmarks while failing in the real world. This is the 
            <strong className="text-black">"streetlight effect"</strong> — measuring what's easy to measure 
            rather than what matters. Models that achieve 99% on benchmark datasets routinely make 
            <strong className="text-black">obvious errors in production</strong> that any human would catch.
            <br /><br />
            A McKinsey partner described the phenomenon: "A client's AI was brilliant at detecting fraudulent 
            transactions in the training data. In production, it flagged the CEO's legitimate travel as fraud 
            and missed an actual $2M theft. The gap between benchmark performance and real-world reliability 
            is the industry's <strong className="text-black">dirty secret</strong>."
            <br /><br />
            MIT's report documented a mid-market manufacturing COO saying: 
            <strong className="text-black">"The hype on LinkedIn says everything has changed, but in our operations, 
            nothing fundamental has shifted. We're processing some contracts faster, but that's all."</strong>
          </IssueCard>

          <IssueCard
            icon={Lightbulb}
            title="Why the Gap Matters"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            This isn't just a tech industry problem. The AI hype cycle has real-world consequences:
            <br /><br />
            <strong className="text-black">Misallocated capital</strong>: $1.5T spent on AI in 2025 is $1.5T not spent 
            on other productivity-enhancing investments. <strong className="text-black">Distorted markets</strong>: 
            AI company valuations disconnected from revenue create a bubble that will eventually burst. 
            <strong className="text-black">False promises</strong>: Companies are laying off workers based on projected 
            AI efficiencies that haven't materialized.
            <br /><br />
            <strong className="text-black">Regulatory whiplash</strong>: Policymakers rush to regulate worst-case AI 
            scenarios while ignoring the more mundane but real harms. 
            <strong className="text-black">Public trust erosion</strong>: Every overhyped AI launch and subsequent 
            failure makes it harder to have a rational conversation about what AI can actually do.
            <br /><br />
            The real danger isn't that AI is too powerful — it's that we're making decisions based on 
            <strong className="text-black">what we wish AI could do</strong>, not what it actually can do. 
            Actual intelligence would mean being honest about that gap.
          </IssueCard>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 tracking-[-0.02em]">
            Validated <span className="text-black font-heading">Research</span>
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
                    <p className="text-xs font-mono text-black/40">{src.org} &middot; {src.date}</p>
                    <p className="text-sm text-black/60 leading-relaxed font-mono text-sm">{src.summary}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-gold-400 shrink-0 mt-1 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p className="text-xs font-mono text-black/30">Part of the <a href="/" className="text-black underline">NEG-AI-TIVE</a> awareness project.</p>
          <p className="mt-1 text-xs font-mono text-black/20">Always verify sources directly. Research landscape evolves rapidly.</p>
        </div>
      </footer>
    </div>
  );
}

function IssueCard({ icon: Icon, title, children, iconGradient, iconColor }: {
  icon: any; title: string; children: React.ReactNode; iconGradient: string; iconColor: string;
}) {
  return (
    <div className="border-2 border-black/10 p-8 bg-white">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center shrink-0 border border-white/5`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="space-y-3">
          <h2 className="text-lg font-heading tracking-tight">{title}</h2>
          <p className="text-black/60 leading-relaxed font-mono text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
}
