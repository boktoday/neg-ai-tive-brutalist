import { ExternalLink, MapPin, Eye, Database, AlertTriangle, ArrowLeft, Search, Users, Smartphone, Globe, Shield, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import AudioPlayer from '../components/AudioPlayer';

const stats = [
  { icon: Database, value: "$200B+", label: "data broker industry — bigger than NFL, music & Hollywood combined", color: "from-red-600/20 to-orange-600/20", iconColor: "text-red-400" },
  { icon: Users, value: "750+", label: "registered data brokers in the US alone (Privacy Rights Clearinghouse)", color: "from-purple-600/20 to-pink-600/20", iconColor: "text-purple-400" },
  { icon: Search, value: "2.3B", label: "people profiled by a single ad platform via AI inference (Publicis CoreAI)", color: "from-amber-600/20 to-yellow-600/20", iconColor: "text-amber-400" },
  { icon: AlertTriangle, value: "33", label: "data brokers sold US citizen data to N. Korea, China, Russia & Iran (2025)", color: "from-blue-600/20 to-cyan-600/20", iconColor: "text-blue-400" },
];

const sources = [
  {
    title: "Hidden Market for Your Personal Data: Data Brokers Selling Location Data",
    org: "Protegrity / US Senate Hearing March 2026",
    url: "https://www.protegrity.com/blog/the-hidden-market-for-your-personal-data",
    date: "2026",
    summary: "FBI Director Kash Patel admitted to Senate that FBI buys commercial location data without warrants. 33 registered data brokers reported selling US citizens' data to North Korea, China, Russia, and Iran. Data broker industry is $200B+."
  },
  {
    title: "Data Brokers: The Unseen Industry — JEC Senate Report",
    org: "U.S. Congress Joint Economic Committee — Minority",
    url: "https://www.jec.senate.gov/public/_cache/files/7f821956-d826-4241-8196-be987cc1f06c/2026-02-27-jec-data-brokers-report-final.pdf",
    date: "Feb 2026",
    summary: "Data brokers collect personal info from commercial, government, and public sources without consumer knowledge. Dark patterns obscure opt-out options. Companies use 'no index' codes to hide deletion request pages from search engines."
  },
  {
    title: "How to Prevent Data Broker Collection in 2026",
    org: "Brightside AI",
    url: "https://www.brside.com/academy/how-to-prevent-data-broker-collection-in-2026",
    date: "2026",
    summary: "AI-powered inference algorithms generate new data points without direct collection. Purchase patterns infer health conditions. Browsing behavior reveals political leanings. Social connections suggest demographics. Publicis CoreAI profiles 2.3 billion people."
  },
  {
    title: "ALPR Tech Now Preventing Parents From Enrolling Their Kids In School",
    org: "Techdirt",
    url: "https://www.techdirt.com/2026/03/24/alpr-tech-now-preventing-parents-from-enrolling-their-kids-in-school",
    date: "Mar 2026",
    summary: "School district used license plate recognition (ALPR) data to establish 'pattern of life' habits of families, denying enrollment based on overnight parking locations. ALPR data resold repeatedly as pattern-of-life data."
  },
  {
    title: "Unified Data Broker Registry: 750+ Data Brokers Identified",
    org: "Privacy Rights Clearinghouse / EFF",
    url: "https://privacyrights.org/data-brokers",
    date: "2025",
    summary: "Cross-referenced state registries to build a unified database of 750+ data brokers. Hundreds of companies registered in one state but failed to register in others. CalPrivacy fined multiple unregistered brokers."
  },
  {
    title: "Data Privacy Statistics for 2025-2026",
    org: "SecureFrame / Cisco / Pew Research",
    url: "https://secureframe.com/blog/data-privacy-statistics",
    date: "2026",
    summary: "45% of Americans had personal info stolen or exposed. 44% believe it's impossible to go through daily life without companies tracking them. 73% of organizations monitor third-party AI tools. Data leaks from GenAI up to 34%."
  },
  {
    title: "Privacy & Cybersecurity 2025-2026: Trends Ahead",
    org: "White & Case LLP",
    url: "https://www.whitecase.com/insight-alert/privacy-and-cybersecurity-2025-2026-insights-challenges-and-trends-ahead",
    date: "2026",
    summary: "Minnesota Data Privacy Act took effect July 2025 — permits consumers to review and challenge profiling decisions. DOJ Bulk Data Rule restricts foreign access to bulk personal data. States increasing data broker regulations."
  },
];

export default function PatternOfLife() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6">
            <Eye className="w-4 h-4 text-purple-500" />
            <span className="text-black/60">Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            Your "Pattern-of-Life"<br />
            <span className="text-black font-heading">Data Creates a Profile</span>
          </h1>
          <p className="text-base font-mono text-black/60 max-w-3xl leading-relaxed">
            Every click, every swipe, every drive past a camera — you're building a digital dossier 
            you'll never see. Data brokers, advertisers, law enforcement, and foreign governments 
            are piecing together your pattern of life from hundreds of sources. And 
            <strong className="text-black"> they don't need a warrant</strong>.
          </p>

          {/* Audio player */}
          <div className="mt-8 max-w-xl">
            <AudioPlayer src="/audio/pattern-of-life-full.mp3" label="Pattern of Life — Full Page Audio" />
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

      {/* How They Build It */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black/40 mb-8">How They Build Your Profile</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <IssueCard
              icon={Smartphone}
              title="Location Tracking"
              iconGradient="from-red-600/20 to-orange-600/20"
              iconColor="text-red-400"
            >
              Your phone pings cell towers <strong className="text-black">24/7</strong>. Apps track precise GPS — even when background-closed. 
              ALPR cameras log every license plate you pass. Wi-Fi networks reveal where you sleep, work, and shop. 
              A school district in the US used ALPR data to deny enrollment based on where families parked overnight, 
              establishing their "pattern of life" without consent.
            </IssueCard>

            <IssueCard
              icon={Database}
              title="Data Broker Aggregation"
              iconGradient="from-purple-600/20 to-pink-600/20"
              iconColor="text-purple-400"
            >
              <strong className="text-black">750+ registered data brokers</strong> in the US alone. They collect from: purchase history 
              (inferring health conditions), social media activity (revealing political leanings), loyalty programs 
              (tracking every purchase), courthouse records, property deeds, voter files, and motor vehicle records. 
              Your profile is cross-referenced, enhanced, and sold — repeatedly.
            </IssueCard>

            <IssueCard
              icon={Search}
              title="AI Inference & Enhancement"
              iconGradient="from-amber-600/20 to-yellow-600/20"
              iconColor="text-amber-400"
            >
              Algorithms infer <strong className="text-black">pregnancy from purchase patterns</strong>. Browsing behavior predicts 
              sexuality, religion, and income. Spending changes flag financial stress. Vocabulary analysis maps 
              education level and personality traits. Publicis CoreAI alone profiles <strong className="text-black">2.3 billion people</strong> 
              through AI inference — generating new data points without direct collection.
            </IssueCard>
          </div>
        </div>
      </section>

      {/* What They Infer */}
      <section className="py-16 px-4 border-y border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black/40 mb-4">What They Infer About You</h2>
          <p className="text-sm font-mono text-black/50 mb-8 max-w-2xl">
            Data brokers don't just collect what you give them. AI infers everything else.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Pregnancy Status", severity: "high" },
              { label: "Health Conditions", severity: "high" },
              { label: "Political Affiliation", severity: "medium" },
              { label: "Sexual Orientation", severity: "high" },
              { label: "Financial Stress", severity: "medium" },
              { label: "Education Level", severity: "low" },
              { label: "Personality Traits", severity: "low" },
              { label: "Relationship Status", severity: "medium" },
              { label: "Religious Beliefs", severity: "high" },
              { label: "Prescription Usage", severity: "high" },
              { label: "Alcohol Consumption", severity: "medium" },
              { label: "Travel Patterns", severity: "medium" },
            ].map((item, i) => {
              const severityBorder = item.severity === "high" ? "border-red-500/40 bg-red-50" :
                item.severity === "medium" ? "border-amber-500/40 bg-amber-50" :
                "border-gray-300 bg-gray-50";
              const severityText = item.severity === "high" ? "text-red-700" :
                item.severity === "medium" ? "text-amber-700" :
                "text-gray-600";
              return (
                <div
                  key={i}
                  className={`p-3 border-2 ${severityBorder} ${severityText} text-center text-xs font-bold font-mono`}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
          <p className="text-[10px] font-mono text-black/30 mt-3 text-center">
            Red = high sensitivity — can be used to discriminate against you
          </p>
        </div>
      </section>

      {/* Who's Buying */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black/40 mb-8">Who's Buying Your Pattern of Life</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { buyer: "Insurance Companies", use: "Assess risk, deny coverage, raise premiums based on inferred health conditions" },
              { buyer: "Employers", use: "Screen candidates, monitor employees, flag 'risky' hires" },
              { buyer: "Landlords", use: "Evaluate renters, deny applications based on inferred financial stress" },
              { buyer: "Law Enforcement", use: "Track suspects without warrants via commercial data (FBI confirmed, Mar 2026)" },
              { buyer: "Foreign Governments", use: "33 brokers admitted selling to North Korea, China, Russia, and Iran" },
              { buyer: "Political Campaigns", use: "Micro-target voters, suppress turnout, manipulate opinions" },
              { buyer: "Financial Institutions", use: "Determine creditworthiness beyond traditional credit scores" },
              { buyer: "Other Data Brokers", use: "Resell profiles multiple times — you never know who ends up with your data" },
              { buyer: "GenAI Developers", use: "Train models on your personal data without your knowledge (SB 361 California)" },
            ].map((item, i) => (
              <div
                key={i}
                className="border-2 border-black/10 p-5 bg-white"
              >
                <h3 className="text-sm font-heading font-bold mb-1">{item.buyer}</h3>
                <p className="text-xs font-mono text-black/50">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Issues */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <IssueCard
            icon={Shield}
            title="No Warrant Required"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            In March 2026, FBI Director Kash Patel confirmed before a Senate committee that the FBI 
            <strong className="text-black"> regularly purchases commercial location data</strong> without obtaining a warrant. 
            This means law enforcement can track your movements, establish your pattern of life, and identify 
            your associates — all without probable cause or judicial oversight. The Fourth Amendment doesn't 
            apply when the government simply buys your data from a broker.
          </IssueCard>

          <IssueCard
            icon={Globe}
            title="Your Data Goes Global"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            California's 2025 data broker registry revealed that <strong className="text-black">33 registered brokers</strong> 
            admitted to selling US citizens' personal data to entities in <strong className="text-black">North Korea, 
            China, Russia, and Iran</strong>. Not rogue actors — registered, legal businesses. The DOJ's 
            Bulk Data Rule, introduced in 2025, attempts to restrict foreign access to bulk personal data, 
            but enforcement remains murky. Once your profile is sold internationally, there is no getting it back.
          </IssueCard>

          <IssueCard
            icon={Target}
            title="Opt-Out Is Designed to Fail"
            iconGradient="from-purple-600/20 to-pink-600/20"
            iconColor="text-purple-400"
          >
            The JEC Senate report documented systematic <strong className="text-black">dark patterns</strong> designed to 
            prevent consumers from opting out. Companies use "no index" codes to hide their data deletion request 
            pages from search engines. Multi-step processes are deliberately confusing. Some brokers require 
            <strong className="text-black"> mailed, notarized forms</strong> to delete your data. Others simply ignore 
            requests — enforcement is reactive, not proactive. The system is built to make opt-out nearly 
            impossible by design.
          </IssueCard>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-8">
            Validated <span className="text-white">Research</span>
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
