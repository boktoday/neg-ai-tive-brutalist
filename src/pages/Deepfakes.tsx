import { ExternalLink, DollarSign, Vote, UserX, ShieldOff, ArrowLeft, Phone, Building2 } from 'lucide-react';

const stats = [
  { icon: DollarSign, value: "$40B", label: "projected annual AI fraud losses by 2027 (Deloitte)", color: "from-red-600/20 to-orange-600/20", iconColor: "text-red-400" },
  { icon: Building2, value: "400+", label: "companies targeted per day by CEO deepfake fraud", color: "from-purple-600/20 to-pink-600/20", iconColor: "text-purple-400" },
  { icon: ShieldOff, value: "0.1%", label: "of people can accurately detect deepfakes (iProov 2025)", color: "from-amber-600/20 to-yellow-600/20", iconColor: "text-amber-400" },
  { icon: UserX, value: "94%", label: "increase in UK deepfake fraud attempts year-on-year", color: "from-blue-600/20 to-cyan-600/20", iconColor: "text-blue-400" },
];

const sources = [
  {
    title: "Deepfake Statistics & Trends 2026",
    org: "Keepnet Labs / FBI / Deloitte",
    url: "https://keepnetlabs.com/blog/deepfake-statistics-and-trends",
    date: "2026",
    summary: "AI fraud losses projected to reach $40B by 2027. US deepfake losses reached $1.1B in 2025, tripling from $360M in 2024. CEO fraud now targets 400+ companies daily."
  },
  {
    title: "Research reveals 'major vulnerabilities' in deepfake detectors",
    org: "CSIRO (Australia's national science agency)",
    url: "https://www.csiro.au/en/news/all/news/2025/march/research-reveals-major-vulnerabilities-in-deepfake-detectors",
    date: "2025",
    summary: "CSIRO and SKKU assessed 16 leading deepfake detectors and found NONE could reliably identify real-world deepfakes. Only 0.1% of humans could accurately detect deepfakes."
  },
  {
    title: "Voice Cloning Is the New BEC: Deepfake CEO Fraud in the US",
    org: "CybelAngel / IRONSCALES / FBI",
    url: "https://cybelangel.com/blog/deepfake-ceo-fraud-how-voice-cloning-targets-us-executives",
    date: "2026",
    summary: "Over half of US organizations reported financial losses from AI voice fraud. Average loss $280K per incident. Deepfake vishing attacks surged 1,600% in Q1 2025."
  },
  {
    title: "Deepfakes and Democracy: Political Deepfakes in NSW",
    org: "NSW Parliamentary Research Service",
    url: "https://www.parliament.nsw.gov.au/researchpapers/Documents/Political-deepfakes-and-the-new-laws-in-NSW.pdf",
    date: "2026",
    summary: "453 global political deepfake incidents in 2025. NSW introduced election deepfake bans. 72% of Australian adults encountered online misinformation (ACMA 2025)."
  },
  {
    title: "Fraud Trends 2026: AI Scams, Deepfakes, and Emerging Threats",
    org: "Sumsub / Deloitte",
    url: "https://sumsub.com/blog/fraud-trends",
    date: "2026",
    summary: "Deepfakes now account for 11% of global fraudulent activity. $12.5B lost to fraud in 2024 (25% increase). Deepfake incidents increased 1,520% in iGaming alone."
  },
  {
    title: "Political deepfakes and falsehoods in advertising",
    org: "ABC News Australia",
    url: "https://www.abc.net.au/news/2024-10-15/deepfakes-misinformation-ai-gen-in-political-advertising-legal/104470006",
    date: "2024",
    summary: "Deepfakes are currently legal in Australian political advertising. Federal laws banning misleading political ads were repealed in 1984 and never reinstated."
  },
  {
    title: "My Face, My Rights Bill — Online Safety Amendment",
    org: "Senator David Pocock (ACT)",
    url: "https://www.davidpocock.com.au/new_bill_to_protect_identity_in_deepfake_future",
    date: "2025",
    summary: "Private Senator's bill introduced Nov 2025 to establish explicit rights over face and voice use, strengthen eSafety powers against non-consensual deepfakes."
  },
  {
    title: "Deepfakes back in headlines — first prosecution under federal law",
    org: "ABC News Australia",
    url: "https://www.abc.net.au/news/2026-02-27/rise-in-sexualised-deepfakes-new-laws-explainer/106390940",
    date: "2026",
    summary: "First person charged under Australia's 2024 federal deepfake pornography laws. Maximum 7 years imprisonment for creating/sharing non-consensual deepfake material."
  },
];

export default function Deepfakes() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
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

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-sm text-gray-400 rounded-full mb-6">
            <Phone className="w-4 h-4 text-red-400" />
            <span>Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
            Scammed by<br />
            <span className="text-gradient">Deepfake</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
            Your CEO isn't calling. Your daughter isn't in jail. That video of a politician 
            saying something outrageous is entirely fabricated. Welcome to a world where 
            <strong className="text-white"> seeing is no longer believing</strong> — and 
            the fraudsters are winning.
          </p>
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
                  <div className="text-3xl font-black text-white font-heading mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{stat.label}</div>
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
            icon={DollarSign}
            title="Financial Fraud — The Billion Dollar Heist"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            In January 2024, a Hong Kong finance employee joined a video call with their "CFO" and colleagues. 
            Every single person on that call was a <strong className="text-white">deepfake</strong>. 
            The employee authorized <strong className="text-white">$25.6 million</strong> in transfers before the fraud was discovered.
            This was not a one-off. CEO fraud now targets <strong className="text-white">400+ companies per day</strong>. 
            US deepfake losses hit <strong className="text-white">$1.1 billion</strong> in 2025 — tripling from $360M the year before. 
            Deloitte projects AI fraud losses will reach <strong className="text-white">$40 billion annually by 2027</strong>.
            A Florida mother was scammed out of $15,000 by an AI voice clone of her "daughter" claiming to be in jail.
          </IssueCard>

          <IssueCard
            icon={Vote}
            title="Democracy Under siege"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            Over <strong className="text-white">453 global political deepfake incidents</strong> were recorded in 2025 alone. 
            In Australia, it is currently <strong className="text-white">legal</strong> to use deepfakes in political advertising — 
            the Hawke government's 1984 ban on misleading ads was repealed after 8 months and never reinstated. 
            The NSW government introduced election deepfake bans in March 2026, while South Australia and numerous US states 
            have enacted their own laws. But <strong className="text-white">72% of Australian adults</strong> encountered online 
            misinformation in the first half of 2025 (ACMA), and with generative AI making deepfakes cheaper and more convincing 
            by the month, the gap between threat and regulation is widening.
          </IssueCard>

          <IssueCard
            icon={UserX}
            title="Non-Consensual Deepfakes"
            iconGradient="from-purple-600/20 to-pink-600/20"
            iconColor="text-purple-400"
          >
            Perhaps the most insidious harm: deepfakes used to create <strong className="text-white">non-consensual intimate imagery</strong>. 
            Australia introduced federal laws in 2024 banning the sharing of sexually explicit deepfake material, 
            with penalties of up to <strong className="text-white">7 years imprisonment</strong>. 
            The first prosecution occurred in 2026 — a South Australian man charged with 8 counts of creating 
            sexual material without consent. Senator David Pocock's <strong className="text-white">"My Face, My Rights" Bill</strong> 
            (Nov 2025) seeks to establish explicit rights over use of your face and voice. 
            But enforcement remains a drop in the ocean compared to the volume of material being created daily.
          </IssueCard>

          <IssueCard
            icon={ShieldOff}
            title="The Detection Problem"
            iconGradient="from-amber-600/20 to-yellow-600/20"
            iconColor="text-amber-400"
          >
            Here's the uncomfortable truth: <strong className="text-white">we can't reliably detect deepfakes</strong>. 
            Australia's own CSIRO tested 16 leading deepfake detectors and found <strong className="text-white">none</strong> 
            could reliably identify real-world deepfakes. Human detection is even worse — a 2025 iProov study found 
            only <strong className="text-white">0.1% of people</strong> could accurately identify all deepfakes they were shown. 
            Commercial AI detectors achieve ~78% accuracy on in-the-wild content. The IRONSCALES 2025 Threat Report found 
            that 99% of security leaders expressed confidence in their defenses, but the average simulated detection score 
            was only <strong className="text-white">44%</strong>. The technology is advancing faster than our ability to detect it.
          </IssueCard>
        </div>
      </section>

      {/* Research */}
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
                    <p className="text-sm text-gray-500">{src.org} &middot; {src.date}</p>
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
