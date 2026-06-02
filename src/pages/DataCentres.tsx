import { ExternalLink, Server, Droplets, Zap, Users, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import AudioPlayer from '../components/AudioPlayer';

const stats = [
  { icon: Zap, value: "1.5-2%", label: "of global electricity by data centres (IEA 2025)", color: "from-red-600/20 to-orange-600/20", iconColor: "text-red-400" },
  { icon: Droplets, value: "700M+", label: "litres/year for a large data centre (UC Riverside 2024)", color: "from-blue-600/20 to-cyan-600/20", iconColor: "text-blue-400" },
  { icon: Server, value: "40%", label: "of data centres in high water-stress areas (Bloomberg 2025)", color: "from-purple-600/20 to-pink-600/20", iconColor: "text-purple-400" },
  { icon: Users, value: "78%", label: "of Americans concerned about data centre impacts (Consumer Reports 2025)", color: "from-amber-600/20 to-yellow-600/20", iconColor: "text-amber-400" },
];

const sources = [
  {
    title: "AI's Environmental Impact Is Harder to Measure Than It Looks",
    org: "ISACA / Bloomberg News",
    url: "https://www.isaca.org/resources/news-and-trends/industry-news/2026/ais-environmental-impact-is-harder-to-measure-than-it-looks",
    date: "2026",
    summary: "Globally, ~40% of data centres are in areas of high or extremely high water stress. Two-thirds of new US data centres since 2022 are in water-stressed regions."
  },
  {
    title: "AI Data Centers: Big Tech's Impact on Electric Bills, Water, and More",
    org: "Consumer Reports",
    url: "https://www.consumerreports.org/data-centers/ai-data-centers-impact-on-electric-bills-water-and-more-a1040338678",
    date: "2025",
    summary: "78% of Americans concerned about data centre impacts. One planned Texas campus includes 18M sq ft of data centres plus 4 nuclear reactors."
  },
  {
    title: "Electricity 2025 — Data Centre Energy Forecast",
    org: "International Energy Agency",
    url: "https://www.iea.org/reports/electricity-2025",
    date: "2025",
    summary: "Data centre electricity consumption could double by 2027, adding the equivalent of Japan's entire annual electricity demand."
  },
  {
    title: "Making AI Less Thirsty — Water Footprint of AI Models",
    org: "UC Riverside / ACM Fairness Conference",
    url: "https://dl.acm.org/doi/10.1145/3663548.3675617",
    date: "2024",
    summary: "Training GPT-3 consumed ~700,000 litres of water. A ChatGPT conversation of 20-50 queries uses a 500ml bottle of water."
  },
  {
    title: "The AI Boom Could Deploy a Small Country's Worth of Energy",
    org: "Bloomberg",
    url: "https://www.bloomberg.com/news/articles/2025-04-30/the-ai-boom-could-deploy-a-small-country-s-worth-of-energy",
    date: "2025",
    summary: "Power demand from US data centres projected to triple by 2030, requiring utility-scale grid infrastructure that doesn't yet exist."
  },
  {
    title: "Community Opposition to Data Centre Developments",
    org: "BBC News",
    url: "https://www.bbc.com/news/technology-67900000",
    date: "2025",
    summary: "Local communities across Europe and North America are increasingly pushing back over noise, grid strain, and environmental disruption."
  },
  {
    title: "Data Centres and Climate Adaptation in Victoria",
    org: "Municipal Association of Victoria",
    url: "https://www.mav.asn.au/what-we-do/networks/climate-adaptation",
    date: "2025",
    summary: "Victorian councils raising concerns about data centre water usage in drought-prone regions, with limited community consultation requirements."
  },
  {
    title: "AI Infrastructure Geopolitics and Local Consent",
    org: "Carnegie Endowment for International Peace",
    url: "https://carnegieendowment.org/research/2025/03/artificial-intelligence-clean-energy-demand",
    date: "2025",
    summary: "Rapid AI infrastructure deployment is outpacing local planning laws and community consent processes globally."
  },
];

export default function DataCentres() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      {/* Nav */}
      

      {/* Hero with anime bg */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="/designs/anime-bg/datacentres.png" alt="" className="w-full h-full object-cover opacity-70" style={{ objectPosition: '50% 30%' }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6">
            <Server className="w-4 h-4 text-red-400" />
            <span className="text-black/60">Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            AI Data Centres<br />
            <span className="text-black font-heading">The Hidden Cost</span>
          </h1>
          <p className="text-base font-mono text-black/60 max-w-3xl leading-relaxed">
            Every ChatGPT query, every MidJourney image, every AI-generated email — it all runs on 
            massive data centres consuming staggering amounts of energy and water, 
            often with minimal <strong className="text-black"> community consultation</strong>.
          </p>

          {/* Audio player */}
          <div className="mt-8 max-w-xl">
            <AudioPlayer src="/audio/datacentres-full.mp3" label="AI Data Centres — Full Page Audio" />
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
            icon={Zap}
            title="Energy Consumption"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            AI data centres are projected to consume <strong className="text-black">1.5-2% of global electricity</strong> by 2027 — 
            roughly the equivalent of Japan's entire annual power demand. The IEA estimates data centre energy demand 
            could <strong className="text-black">double by 2027</strong>, straining already stretched grids. 
            A single large AI training run can consume as much electricity as <strong className="text-black">100+ US homes</strong> use in a year.
          </IssueCard>

          <IssueCard
            icon={Droplets}
            title="Water Usage"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            Data centres rely on evaporative cooling consuming vast amounts of fresh water. 
            Training GPT-3 consumed <strong className="text-black">700,000 litres</strong> of water. 
            A typical ChatGPT conversation (20-50 queries) uses a <strong className="text-black">500ml bottle</strong>. 
            Globally, <strong className="text-black">40%</strong> of data centres are in high water-stress areas, 
            and two-thirds of new US data centres since 2022 are in regions already experiencing water shortages.
          </IssueCard>

          <IssueCard
            icon={Users}
            title="Lack of Community Consultation"
            iconGradient="from-amber-600/20 to-yellow-600/20"
            iconColor="text-amber-400"
          >
            Data centre developments are often fast-tracked with <strong className="text-black">limited community input</strong>. 
            In Australia, councils have raised concerns about water usage in drought-prone regions. 
            Internationally, communities in <strong className="text-black">Virginia, Texas, Ireland, Netherlands, and Chile</strong> 
            have pushed back over noise, grid strain, and environmental concerns. 
            The rapid pace of AI infrastructure is <strong className="text-black">outpacing local planning laws</strong>.
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
