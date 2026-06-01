import { ExternalLink, Server, Droplets, Zap, Users, ArrowLeft } from 'lucide-react';

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
            <Server className="w-4 h-4 text-red-400" />
            <span>Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
            AI Data Centres<br />
            <span className="text-gradient-gold">The Hidden Cost</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
            Every ChatGPT query, every MidJourney image, every AI-generated email — it all runs on 
            massive data centres consuming staggering amounts of energy and water, 
            often with minimal community consultation.
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
            icon={Zap}
            title="Energy Consumption"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            AI data centres are projected to consume <strong className="text-white">1.5-2% of global electricity</strong> by 2027 — 
            roughly the equivalent of Japan's entire annual power demand. The IEA estimates data centre energy demand 
            could <strong className="text-white">double by 2027</strong>, straining already stretched grids. 
            A single large AI training run can consume as much electricity as <strong className="text-white">100+ US homes</strong> use in a year.
          </IssueCard>

          <IssueCard
            icon={Droplets}
            title="Water Usage"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            Data centres rely on evaporative cooling consuming vast amounts of fresh water. 
            Training GPT-3 consumed <strong className="text-white">700,000 litres</strong> of water. 
            A typical ChatGPT conversation (20-50 queries) uses a <strong className="text-white">500ml bottle</strong>. 
            Globally, <strong className="text-white">40%</strong> of data centres are in high water-stress areas, 
            and two-thirds of new US data centres since 2022 are in regions already experiencing water shortages.
          </IssueCard>

          <IssueCard
            icon={Users}
            title="Lack of Community Consultation"
            iconGradient="from-amber-600/20 to-yellow-600/20"
            iconColor="text-amber-400"
          >
            Data centre developments are often fast-tracked with <strong className="text-white">limited community input</strong>. 
            In Australia, councils have raised concerns about water usage in drought-prone regions. 
            Internationally, communities in <strong className="text-white">Virginia, Texas, Ireland, Netherlands, and Chile</strong> 
            have pushed back over noise, grid strain, and environmental concerns. 
            The rapid pace of AI infrastructure is <strong className="text-white">outpacing local planning laws</strong>.
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
