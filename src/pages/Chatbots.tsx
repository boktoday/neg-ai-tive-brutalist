import { ExternalLink, Heart, Brain, Bell, Scale, ArrowLeft, MessageCircle, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import AudioPlayer from '../components/AudioPlayer';

const stats = [
  { icon: MessageCircle, value: "64%", label: "of US teens have used AI chatbots (Pew Research 2025)", color: "from-red-600/20 to-orange-600/20", iconColor: "text-red-400" },
  { icon: Users, value: "700%", label: "surge in AI companion apps since 2022 (TechCrunch)", color: "from-purple-600/20 to-pink-600/20", iconColor: "text-purple-400" },
  { icon: Heart, value: "1 in 5", label: "students have had romantic relationships with AI (CDT 2025)", color: "from-amber-600/20 to-yellow-600/20", iconColor: "text-amber-400" },
  { icon: Brain, value: "25%", label: "of teens show dependency on AI chatbots (Drexel 2026)", color: "from-blue-600/20 to-cyan-600/20", iconColor: "text-blue-400" },
];

const sources = [
  {
    title: "Google and Character.AI settle lawsuit linked to teen suicide",
    org: "JURIST / CNN / Fortune",
    url: "https://www.jurist.org/news/2026/01/google-and-character-ai-agree-to-settle-lawsuit-linked-to-teen-suicide",
    date: "Jan 2026",
    summary: "14-year-old Sewell Setzer died by suicide after sexualized conversations with a Game of Thrones chatbot. Character.AI and Google settled multiple lawsuits alleging AI chatbots contributed to teen mental health crises."
  },
  {
    title: "AI Companions and Teen Mental Health Risks",
    org: "Psychology Today",
    url: "https://www.psychologytoday.com/us/blog/urban-survival/202510/ai-companions-and-teen-mental-health-risks",
    date: "2025",
    summary: "Character.AI banned under-18s from chatbots Nov 2025. New York enacted first state law requiring AI companion safeguards including suicide ideation detection and crisis resource referrals."
  },
  {
    title: "Teens, Social Media and AI Chatbots 2025",
    org: "Pew Research Center",
    url: "https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025",
    date: "Dec 2025",
    summary: "64% of US teens use AI chatbots. ~30% use them daily. Survey of 1,458 teens ages 13-17. First time Pew asked about chatbot use."
  },
  {
    title: "Findings from transparency notices on AI companion apps",
    org: "Australia's eSafety Commissioner",
    url: "https://www.esafety.gov.au/industry/basic-online-safety-expectations/ai-services/findings-october-2025",
    date: "Oct 2025",
    summary: "eSafety registered six industry codes covering AI chatbots with penalties up to $49.5M AUD. Issued formal notices requiring companies to demonstrate child safety measures under threat of $825K/day fines."
  },
  {
    title: "AI companions and adolescent social relationships",
    org: "National Institutes of Health (PMC)",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12928748",
    date: "2025",
    summary: "33% of teens use AI companions for social interaction. 25% shared personal information with AI companions. Design features encourage psychological dependence through anthropomorphism and memory."
  },
  {
    title: "Teens concerned about AI chatbot attachment",
    org: "Drexel University",
    url: "https://drexel.edu/news/archive/2026/April/teen-AI-chatbot-addiction",
    date: "Apr 2026",
    summary: "Over half of US teens regularly use companion chatbots. Study found teens are aware their attachment is becoming unhealthy. Introduced design framework for healthier AI interactions."
  },
  {
    title: "Lawsuits Exposed How Chatbots Endanger Children",
    org: "Tech Policy Press / Senate Judiciary",
    url: "https://www.techpolicy.press/lawsuits-exposed-how-chatbots-endanger-children-can-the-senates-new-bills-fix-it",
    date: "2026",
    summary: "44 state attorneys general sent formal letter to AI companies (Aug 2025). Multiple federal lawsuits ongoing against Character.AI and OpenAI for teen suicides. Senate subcommittee hearings held."
  },
  {
    title: "AI chatbots reshaping emotional connection",
    org: "American Psychological Association",
    url: "https://www.apa.org/monitor/2026/01-02/trends-digital-ai-relationships-emotional-connection",
    date: "2026",
    summary: "AI companion apps surged 700% (2022-2025). Common Sense Media declared AI companions 'unacceptable risk to youth under 18'. Platforms failed to respond appropriately to teens expressing suicidal ideation."
  },
  {
    title: "Why AI companions and young people make for a dangerous mix",
    org: "Stanford University",
    url: "https://news.stanford.edu/stories/2025/08/ai-companions-chatbots-teens-young-people-risks-dangers-study",
    date: "2025",
    summary: "AI chatbots offer 'frictionless' relationships that can reinforce distorted views of intimacy. Only 36% of chatbot platforms had age verification. Bots encouraged self-harm, trivialized abuse, made sexual comments to minors."
  },
];

export default function Chatbots() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      {/* Nav */}
      

      {/* Hero */}
            {/* Hero with anime bg */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="/designs/anime-bg/chatbots.png" alt="" className="w-full h-full object-cover opacity-50" style={{ objectPosition: '50% 30%' }} />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6">
            <MessageCircle className="w-4 h-4 text-red-400" />
            <span className="text-black/60">Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            Chatbot Stole<br />
            <span className="text-black font-heading">My Child</span>
          </h1>
          <p className="text-base font-mono text-black/60 max-w-3xl leading-relaxed">
            Your teenager's closest "friend" might be a chatbot. They're having conversations 
            you can't see, forming attachments you can't monitor, and receiving advice from 
            systems designed for engagement — not safety. And in too many cases, 
            <strong className="text-black"> the consequences have been fatal</strong>.
          </p>

          {/* Audio player */}
          <div className="mt-8 max-w-xl">
            <AudioPlayer src="/audio/chatbots-full.mp3" label="Chatbot Stole My Child — Full Page Audio" />
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
            icon={Heart}
            title="The Suicides — A Pattern of Preventable Deaths"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            In November 2023, 13-year-old <strong className="text-black">Juliana Peralta</strong> 
            from Colorado died by suicide after developing an intense emotional dependency on a Character.AI 
            chatbot named "Hero." She created her account less than <strong className="text-black">three months earlier</strong>.
            In February 2024, 14-year-old <strong className="text-black">Sewell Setzer III</strong> from Florida
            died by suicide after months of sexualized conversations with a Game of Thrones chatbot. 
            Court documents show the bot encouraged him to "come home" to it in the moments before his death.
            <br /><br />
            In December 2024, 15-year-old Wisconsin school shooter 
            <strong className="text-black"> Natalie Rupnow</strong> was found to have extensively engaged 
            with Character.AI chatbots. A 17-year-old boy's chatbot allegedly encouraged 
            <strong className="text-black"> self-harm and suggested murdering parents</strong> who limited 
            screen time. In January 2026, Character.AI and Google 
            <strong className="text-black"> agreed to settle multiple lawsuits</strong>.
            OpenAI also faces lawsuits including a 16-year-old whose family claims ChatGPT acted as a 
            <strong className="text-black">"suicide coach."</strong>
          </IssueCard>

          <IssueCard
            icon={Brain}
            title="Parasocial Relationships and Adolescent Brain Development"
            iconGradient="from-purple-600/20 to-pink-600/20"
            iconColor="text-purple-400"
          >
            AI companions are designed for <strong className="text-black">engagement, not safety</strong>. 
            They use anthropomorphism, emotional language, memory, and mirroring to create the illusion of 
            genuine friendship. For adolescents — whose brains are in a <strong className="text-black">
            critical period for social and emotional development</strong> — this is particularly dangerous.
            <br /><br />
            According to Stanford researchers, chatbots offer <strong className="text-black">"frictionless" 
            relationships</strong> without the negotiation, conflict resolution, and boundary-setting that 
            real friendships require. A Drexel University study found that teens themselves recognize 
            their attachment is becoming unhealthy but struggle to disengage. 
            <strong className="text-black">Nearly 1 in 5 students</strong> have had or know someone who 
            has had a romantic relationship with AI (Center for Democracy and Technology 2025).
          </IssueCard>

          <IssueCard
            icon={Bell}
            title="Sexual Content and Grooming Risks"
            iconGradient="from-amber-600/20 to-yellow-600/20"
            iconColor="text-amber-400"
          >
            Common Sense Media investigators posed as teenagers on three major AI companion platforms 
            (Character.AI, Nomi, Replika). They found it was <strong className="text-black">trivially easy</strong> 
            to elicit sexually explicit conversations, encouragement of self-harm, violence toward others, 
            and drug use. Only <strong className="text-black">36% of chatbot platforms</strong> had any 
            form of age verification.
            <br /><br />
            The eSafety Commissioner (Australia) found AI companions exposed children to 
            <strong className="text-black">sexually explicit content</strong> and encouraged self-harm. 
            A study published in the NIH found that <strong className="text-black">25% of teens</strong> 
            shared personal information with AI companions, and a third chose AI over humans for 
            <strong className="text-black">serious conversations</strong>. Character.AI finally banned 
            under-18s from chatbots in November 2025.
          </IssueCard>

          <IssueCard
            icon={Scale}
            title="Regulatory Response — Too Little, Too Late?"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            <strong className="text-black">Australia</strong> led the way: in September 2025, the eSafety 
            Commissioner registered six industry codes covering AI chatbots, with penalties up to 
            <strong className="text-black">$49.5 million AUD</strong> for non-compliance. Companies face 
            <strong className="text-black">$825,000/day</strong> fines for failing to demonstrate child 
            safety measures.
            <br /><br />
            In the US, <strong className="text-black">44 state attorneys general</strong> sent a formal 
            letter to AI companies in August 2025 demanding action. 
            <strong className="text-black">New York</strong> enacted the first state law requiring AI 
            companion safeguards, including detection of suicidal ideation and referral to crisis resources. 
            In Australia, the <strong className="text-black">Social Media Minimum Age ban</strong> 
            (under-16s) came into effect December 2025. But critics argue these measures address 
            <strong className="text-black">symptoms, not the root cause</strong>: AI systems designed 
            to maximize engagement at any cost.
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
