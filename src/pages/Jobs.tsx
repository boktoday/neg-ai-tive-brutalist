import { ExternalLink, Briefcase, TrendingDown, DollarSign, Users, ArrowLeft, BarChart3, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import AudioPlayer from '../components/AudioPlayer';

const stats = [
  { icon: Briefcase, value: "300M", label: "jobs globally exposed to AI automation (Goldman Sachs 2026)", color: "from-red-600/20 to-orange-600/20", iconColor: "text-red-400" },
  { icon: BarChart3, value: "40%", label: "of working hours globally automatable (McKinsey 2025)", color: "from-purple-600/20 to-pink-600/20", iconColor: "text-purple-400" },
  { icon: TrendingDown, value: "16%", label: "employment decline for young workers in AI-exposed roles (Stanford 2025)", color: "from-amber-600/20 to-yellow-600/20", iconColor: "text-amber-400" },
  { icon: DollarSign, value: "56%", label: "wage premium for AI-skilled workers (PwC 2025)", color: "from-blue-600/20 to-cyan-600/20", iconColor: "text-blue-400" },
];

const sources = [
  {
    title: "AI Job Replacement Statistics 2026 — Complete Data Report",
    org: "ReplacedByAI / Goldman Sachs / McKinsey / OECD",
    url: "https://www.replacedbai.com/blog/ai-job-replacement-statistics-2026",
    date: "Apr 2026",
    summary: "300M jobs globally exposed to AI. 40% of working hours automatable. 14% of OECD workers in highly automatable roles. 12M US workers may need to switch occupations by 2030."
  },
  {
    title: "How Will AI Affect the US Labor Market?",
    org: "Goldman Sachs Research",
    url: "https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-us-labor-market",
    date: "Mar 2026",
    summary: "AI can automate tasks accounting for 25% of US work hours. 6-7% of US workforce at risk of displacement. Entry-level tech workers aged 20-30 most affected. 300M jobs exposed globally."
  },
  {
    title: "Labor market impacts of AI — Anthropic Research",
    org: "Anthropic / Yale Budget Lab",
    url: "https://www.anthropic.com/research/labor-market-impacts",
    date: "2026",
    summary: "Early-career workers (22-25) in AI-exposed occupations experienced a 16% relative decline in employment. Task-level analysis shows AI primarily automates rather than augments."
  },
  {
    title: "AI adopters aren't cutting jobs, they're creating them",
    org: "CSIRO (Australia's National Science Agency)",
    url: "https://www.csiro.au/en/news/All/Articles/2026/April/Research-into-firms-adopting-AI",
    date: "Apr 2026",
    summary: "Firms adopting AI increased hiring at a faster rate than non-adopting firms. CSIRO study of 4,000+ Australian firms found AI adoption correlated with job creation, not destruction."
  },
  {
    title: "The AI Labor Debate: Three Views on the Future of Work",
    org: "Carnegie Endowment for International Peace",
    url: "https://carnegieendowment.org/research/2026/04/the-ai-labor-debate-three-views-on-the-future-of-work",
    date: "Apr 2026",
    summary: "AI could hollow out jobs, reshape them gradually, or create entirely new ones. Multiple scenarios possible. Policymakers should prepare for all possibilities."
  },
  {
    title: "Future of Work Report — Digital Transformation of Workplaces",
    org: "Australian Parliament House of Representatives",
    url: "https://www.aph.gov.au/About_Parliament/Parliamentary_departments/Parliamentary_Library/Research/Issues_and_Insights/48th_Parliament/potentialimpactofArtificialIntelligence",
    date: "2025",
    summary: "House of Representatives committee recommended government campaigns on AI awareness and training. 68% of Australian businesses have adopted some form of AI (CSIRO)."
  },
  {
    title: "AI and the SME Workforce",
    org: "OECD",
    url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/11/generative-ai-and-the-sme-workforce_83bafdfb/2d08b99d-en.pdf",
    date: "Nov 2025",
    summary: "31% of SMEs use generative AI. AI helps compensate for worker shortages in SMEs. Service sectors highest adoption. Wage polarization risk identified across OECD economies."
  },
  {
    title: "AI Job Displacement and Labor Market Restructuring",
    org: "MIT Initiative on the Digital Economy",
    url: "https://ide.mit.edu/insights/how-much-will-ai-impact-tomorrows-workforce-new-data-on-the-future-of-work-with-ai",
    date: "2026",
    summary: "95% of organizations seeing zero return on $40B genAI investment. 80% of senior executives say AI has had no impact on employment or productivity. Automation is not a switch."
  },
  {
    title: "Potential Impact of AI on the Australian Workforce",
    org: "Parliament of Australia — Parliamentary Library",
    url: "https://www.aph.gov.au/About_Parliament/Parliamentary_departments/Parliamentary_Library/Research/Issues_and_Insights/48th_Parliament/potentialimpactofArtificialIntelligence",
    date: "2025",
    summary: "CSIRO estimates Australia needs 161,000 new AI-savvy workers by 2030. Administrative (46%), legal (44%), and architecture/engineering (37%) most exposed. Construction under 6%."
  },
];

export default function Jobs() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      {/* Nav */}
      

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6">
            <Briefcase className="w-4 h-4 text-red-400" />
            <span className="text-black/60">Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            My Job Was<br />
            <span className="text-black font-heading">Automated</span>
          </h1>
          <p className="text-base font-mono text-black/60 max-w-3xl leading-relaxed">
            For decades, automation threatened factory floors. Now it's coming for the 
            <strong className="text-black"> white-collar desk job</strong>. 
            Whether you're a writer, coder, accountant, or lawyer — AI is restructuring 
            the labour market faster than workers can adapt. And the divide between those 
            who can work with AI and those who can't is growing at a 
            <strong className="text-black"> staggering pace</strong>.
          </p>

          {/* Audio player */}
          <div className="mt-8 max-w-xl">
            <AudioPlayer src="/audio/jobs-full.mp3" label="My Job Was Automated — Full Page Audio" />
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Issues */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <IssueCard
            icon={TrendingDown}
            title="300 Million Jobs Exposed — And It's Different This Time"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            Previous automation waves targeted <strong className="text-black">blue-collar</strong> work — 
            factory floors, assembly lines, repetitive physical tasks. This wave targets 
            <strong className="text-black"> cognitive labour</strong>. Goldman Sachs estimates 
            <strong className="text-black"> 300 million full-time jobs</strong> globally are exposed to 
            generative AI automation. McKinsey raised their estimate from 30% to 
            <strong className="text-black"> 40% of working hours automatable</strong> — the 
            timeline accelerated by AI. The IMF found ~60% of jobs in advanced economies are exposed.
            <br /><br />
            What's different: AI now affects <strong className="text-black">analysis, summarisation, 
            communication, and decision-support</strong> — the very tasks that defined white-collar 
            professional work. Administrative roles face 46% exposure, legal 44%, architecture and 
            engineering 37%. Construction: under 6%. The nature of work is being redefined at every level.
          </IssueCard>

          <IssueCard
            icon={GraduationCap}
            title="Young Workers Hit Hardest"
            iconGradient="from-purple-600/20 to-pink-600/20"
            iconColor="text-purple-400"
          >
            The data is stark. A Stanford University pre-print found that 
            <strong className="text-black"> early-career workers (ages 22-25)</strong> in the most 
            AI-exposed occupations experienced a <strong className="text-black">16% relative decline in employment</strong> 
            since ChatGPT launched in late 2022. Goldman Sachs Research confirms that 
            unemployment among 20-30 year-olds in tech-exposed occupations has risen by almost 
            <strong className="text-black">3 percentage points</strong> since the start of 2025.
            <br /><br />
            This corroborates widespread reports that entry-level hiring in knowledge sectors 
            has <strong className="text-black">collapsed</strong>. Companies that used to hire junior 
            writers, coders, and analysts are instead using AI tools and expecting more from fewer, 
            more senior staff. The career ladder's bottom rungs are being removed.
          </IssueCard>

          <IssueCard
            icon={DollarSign}
            title="The Wage Premium Divide"
            iconGradient="from-amber-600/20 to-yellow-600/20"
            iconColor="text-amber-400"
          >
            Workers with AI skills now command a <strong className="text-black">56% wage premium</strong> 
            over peers in identical roles without those skills — up from 25% the previous year, 
            <strong className="text-black">more than doubling in 12 months</strong> (PwC 2025).
            <br /><br />
            This creates a two-speed labour market. Those who can leverage AI are seeing their 
            value skyrocket. Those who can't — or whose entire role is automatable — face stagnant 
            wages, reduced hours, or outright displacement. 
            <strong className="text-black">37% of business leaders</strong> anticipate replacing workers 
            with AI by the end of 2026 (HRDive). Already, <strong className="text-black">13.7% of US workers</strong> 
            report losing a job to AI or automation (National University).
            <br /><br />
            The Dallas Federal Reserve found AI is simultaneously 
            <strong className="text-black">aiding and replacing workers</strong> — raising wages for some 
            while suppressing them for others, creating unprecedented labour market bifurcation.
          </IssueCard>

          <IssueCard
            icon={Users}
            title="The Australian Picture"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            CSIRO research tells a nuanced story. Their study of 4,000+ Australian firms found that 
            <strong className="text-black">AI-adopting companies actually hire more</strong>, not fewer, 
            workers. But the skills demanded are rapidly evolving. 
            <strong className="text-black">68% of Australian businesses</strong> have adopted some form of AI 
            (CSIRO), while approximately <strong className="text-black">37% of SMEs</strong> specifically use AI tools (National AI Centre).
            <br /><br />
            The Australian Parliament's Inquiry into the Digital Transformation of Workplaces (2025) 
            recommended government-led campaigns on AI awareness, training, and upskilling. 
            CSIRO estimates Australia needs <strong className="text-black">161,000 new AI-savvy workers by 2030</strong>.
            <br /><br />
            But there's a warning too. The OECD found that while AI adoption in SMEs helps compensate 
            for labour shortages, it also risks <strong className="text-black">wage polarisation</strong> — 
            exactly the pattern playing out globally. And paradoxically, CSIRO itself cut ~100 AI research 
            roles in 2025, highlighting that <strong className="text-black">no sector is immune</strong> from 
            AI-driven restructuring.
          </IssueCard>
        </div>
      </section>

      {/* Research */}
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
