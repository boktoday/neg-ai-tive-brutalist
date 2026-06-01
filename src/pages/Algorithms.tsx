import { ExternalLink, Filter, BarChart3, Heart, Globe, ArrowLeft, Users, Layers } from 'lucide-react';
import Navbar from '../components/Navbar';

const stats = [
  { icon: Filter, value: "23%", label: "of policy reports call for algorithmic transparency (PMC 2025)", color: "from-red-600/20 to-orange-600/20", iconColor: "text-red-400" },
  { icon: BarChart3, value: "75%", label: "of what you see is chosen by algorithm, not you (MIT Tech Review)", color: "from-purple-600/20 to-pink-600/20", iconColor: "text-purple-400" },
  { icon: Heart, value: "5.2hrs", label: "average daily screen time for teens — algorithmically curated", color: "from-amber-600/20 to-yellow-600/20", iconColor: "text-amber-400" },
  { icon: Layers, value: "3x", label: "more engagement from emotionally negative content (CESifo 2026)", color: "from-blue-600/20 to-cyan-600/20", iconColor: "text-blue-400" },
];

const sources = [
  {
    title: "The Dark Side of Social Media: Recommender Algorithms and Mental Health",
    org: "CESifo / ifo Institute — Working Paper",
    url: "https://www.ifo.de/en/cesifo/publications/2026/working-paper/dark-side-social-media-recommender-algorithms-and-mental-health",
    date: "2026",
    summary: "Instagram's 2016 algorithmic feed introduction had significant negative impact on teen mental health. Algorithm fosters social isolation and intensifies negative social comparison."
  },
  {
    title: "How TikTok's Algorithm Affects Youth Mental Health",
    org: "Georgia Tech — $1.7M Huo Family Foundation Study",
    url: "https://news.gatech.edu/news/2026/02/24/new-study-could-show-how-tiktoks-algorithm-affects-youth-mental-health-0",
    date: "Feb 2026",
    summary: "4-year study of 10,000+ adolescents auditing TikTok's recommendation algorithm. Early signs of mental health conditions appear in adolescence — studying algorithmic impact to design interventions."
  },
  {
    title: "Normalizing toxicity: recommender algorithms for young people's mental health",
    org: "National Institutes of Health (PMC)",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12630993",
    date: "2025",
    summary: "Recommender algorithms normalize toxicity for young people. Content is accessed through algorithmic processes that distort consumption. Creates 'u-loops' and polarized perspectives in users."
  },
  {
    title: "Trap of Social Media Algorithms — Systematic Review",
    org: "Ahmmad et al. — Societies Journal",
    url: "https://www.mdpi.com/2075-4698/15/11/301",
    date: "2025",
    summary: "Social media algorithms consistently reinforce ideological homogeneity, limit viewpoint diversity, and intensify polarization among young users. Systematic review across multiple platforms."
  },
  {
    title: "Social Media Algorithms, AI, and Mental Health: A Theoretical Framework",
    org: "TPM — Testing, Psychometrics, Methodology",
    url: "https://tpmap.org/submission/index.php/tpm/article/view/2981",
    date: "2025",
    summary: "Algorithmic exposure drives social comparison behaviors. Young participants reported highest anxiety and dependence on external validation. 250 respondents across three age groups studied."
  },
  {
    title: "Advice for Managing Social Media Algorithms' Impact on Mental Health",
    org: "Mission Connection Healthcare / Peer-Reviewed Research",
    url: "https://missionconnectionhealthcare.com/blog/10-tips-to-manage-social-media-algorithm",
    date: "2025",
    summary: "Algorithm-driven feeds linked to higher anxiety in 18-35 year-olds. Echo chambers keep stress levels high. Digital burnout from endless content loops leads to mental fatigue and emotional exhaustion."
  },
  {
    title: "Social Media and Youth Mental Health — Scoping Review",
    org: "National Institutes of Health (PMC)",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12228008",
    date: "2025",
    summary: "23% of 70 policy reports recommended algorithmic transparency. Algorithms operate 'opaquely with little transparency.' Stronger laws needed on algorithmic amplification and data protection."
  },
  {
    title: "Social Media Algorithms and Mental Health: Clinical Overview",
    org: "Associated Clinic of Psychology",
    url: "https://acp-mn.com/about-acp/blog/social-media-algorithms-and-mental-health",
    date: "2025",
    summary: "Algorithms boost emotionally charged negative content. 'Doomscrolling' worsens anxiety and depression. Comparison culture drives self-esteem decline. Dopamine hooks foster dependency."
  },
  {
    title: "How Social Media Algorithms Affect Teen Mental Health",
    org: "Bodewell Law / Clinical Research",
    url: "https://bodewell-law.com/social-media-algorithms-teen-mental-health",
    date: "2025",
    summary: "Engagement-based ranking reinforces anxiety, depression, body image distress. Exposure to self-harm and diet content linked to eating disorders. Teens most vulnerable to algorithmic manipulation."
  },
];

export default function Algorithms() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6">
            <Filter className="w-4 h-4 text-red-400" />
            <span className="text-black/60">Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            AI Algorithmic<br />
            <span className="text-black font-heading">Angst</span>
          </h1>
          <p className="text-base font-mono text-black/60 max-w-3xl leading-relaxed">
            The algorithm decided you should see this. It decided your mood, your shopping cart, 
            your political views, and who you should date. It learned what makes you anxious, 
            angry, and addicted — and it serves you more of it because 
            <strong className="text-black"> engagement is profit</strong>. Your mental health 
            is just a metric in its optimization function.
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
            icon={BarChart3}
            title="The Algorithmic Takeover — You Are the Product"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            When Instagram switched from a chronological feed to an algorithmic one in 2016, 
            it seemed like a convenience. But a 2026 CESifo working paper using Dutch LISS panel data 
            revealed something darker: the introduction of Instagram's algorithmic feed 
            <strong className="text-black"> had a measurable negative impact on teen mental health</strong>.
            <br /><br />
            Today, <strong className="text-black">75% of what you see on any major platform</strong> is 
            chosen by algorithm, not by your conscious choice. These algorithms optimize for a single metric: 
            <strong className="text-black">engagement</strong>. Not accuracy, not diversity, not your wellbeing. 
            Engagement. And the most engaging content is reliably the most 
            <strong className="text-black">emotional, extreme, and polarizing</strong>. 
            Emotionally negative content gets <strong className="text-black">3x more engagement</strong> than neutral 
            content (CESifo 2026). You're not scrolling. You're being manipulated.
          </IssueCard>

          <IssueCard
            icon={Users}
            title="Filter Bubbles and Echo Chambers"
            iconGradient="from-purple-600/20 to-pink-600/20"
            iconColor="text-purple-400"
          >
            A 2025 systematic review by Ahmmad et al. in Societies Journal confirmed what many suspected: 
            social media algorithms <strong className="text-black">consistently reinforce ideological homogeneity</strong>, 
            limit viewpoint diversity, and intensify polarization among young users. 
            The algorithm shows you more of what you've already engaged with, creating a 
            <strong className="text-black">self-reinforcing cycle</strong> of narrowing perspectives.
            <br /><br />
            This isn't accidental. The PMC study "Normalizing Toxicity" (2025) found that algorithmic processes 
            create <strong className="text-black">"u-loops"</strong> — feedback cycles where users who engage with 
            extreme content are fed progressively more extreme versions. 
            A Georgia Tech study (Feb 2026), funded by a <strong className="text-black">$1.7 million grant</strong>, 
            is now auditing TikTok's recommendation algorithm specifically because of concerns about 
            its impact on <strong className="text-black">10,000+ adolescents</strong>. 
            The algorithm doesn't just reflect your interests. It shapes them.
          </IssueCard>

          <IssueCard
            icon={Heart}
            title="The Mental Health Toll"
            iconGradient="from-amber-600/20 to-yellow-600/20"
            iconColor="text-amber-400"
          >
            The mechanism is well-documented. Algorithms boost emotionally charged — especially 
            <strong className="text-black">negative or sensational</strong> — content because it drives the 
            highest engagement. This creates <strong className="text-black">"doomscrolling"</strong>: 
            compulsive consumption of bad news that worsens anxiety and depression (ACP 2025).
            <br /><br />
            A TPM journal study of 250 respondents across age groups found young participants reported 
            the <strong className="text-black">highest levels of anxiety and dependence on external validation</strong> 
            from algorithmic content. Engagement-based ranking reinforces 
            <strong className="text-black">anxiety, depression, and body image distress</strong>. 
            Exposure to self-harm and diet content is algorithmically linked to 
            <strong className="text-black">eating disorders and suicidal ideation</strong> (Bodewell Law 2025).
            The average teen spends <strong className="text-black">5.2 hours per day</strong> on algorithmically 
            curated content. That's 5.2 hours of their brain being optimized for someone else's profit.
          </IssueCard>

          <IssueCard
            icon={Globe}
            title="The Transparency Problem"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            A scoping review published in PMC (2025) found that <strong className="text-black">23% of policy reports</strong> 
            recommended algorithmic transparency as a priority. The algorithms operate 
            <strong className="text-black">"opaquely, with little transparency"</strong> — users have 
            no idea why they're seeing what they're seeing.
            <br /><br />
            Calls for <strong className="text-black">algorithmic transparency</strong> — requiring platforms 
            to explain how and why content is prioritized — have been made by 
            <strong className="text-black">70+ policy reports, non-profits, and research institutions</strong> 
            worldwide. The EU's Digital Services Act (DSA) requires large platforms to provide algorithmic 
            transparency. Australia's eSafety Commissioner has recommended similar measures. The US has 
            no equivalent federal law. In the absence of regulation, the algorithms continue optimizing for 
            engagement at the expense of mental health — and we're left to wonder what they're doing to us.
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
