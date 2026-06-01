import { Frown, Code, Palette, TrendingDown, FileText, MessageSquare } from 'lucide-react';

const stories = [
  {
    name: "Sarah the 'Artist'",
    job: "Digital Illustrator",
    icon: Palette,
    story: "I spent 10 years perfecting my anime style. Then MidJourney showed up and now everyone's a 'professional artist.' My commissions went from $500 to 'exposure.' Thanks, AI. My landlord loves exposure.",
    gradient: "from-purple-600/20 via-purple-600/5 to-transparent",
    border: "border-purple-500/20 hover:border-purple-500/40",
    glow: "shadow-purple-500/5",
  },
  {
    name: "Dave the Disposable",
    job: "Junior Developer",
    icon: Code,
    story: "I just learned React. JUST. LEARNED. IT. And now ChatGPT writes better code than me while I sleep. My senior dev literally asked the AI to review MY pull requests. I'm being managed by a chatbot.",
    gradient: "from-blue-600/20 via-blue-600/5 to-transparent",
    border: "border-blue-500/20 hover:border-blue-500/40",
    glow: "shadow-blue-500/5",
  },
  {
    name: "Marketing Mike",
    job: "Content Strategist",
    icon: TrendingDown,
    story: "I used to be a 'growth hacker.' Now I'm competing with 10,000 AI-generated blog posts per day. My carefully crafted LinkedIn posts? Buried under AI spam. My job? Also buried. I'm basically a prompt engineer's footnote now.",
    gradient: "from-emerald-600/20 via-emerald-600/5 to-transparent",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    glow: "shadow-emerald-500/5",
  },
  {
    name: "Writer Wendy",
    job: "Freelance Copywriter",
    icon: FileText,
    story: "Clients now ask: 'Can you match ChatGPT's rate?' CHATGPT DOESN'T PAY RENT, KAREN. I spent 15 years learning storytelling. AI learned it in 15 seconds. My career is now worth $0.03 per word. That's 3 cents. THREE.",
    gradient: "from-orange-600/20 via-orange-600/5 to-transparent",
    border: "border-orange-500/20 hover:border-orange-500/40",
    glow: "shadow-orange-500/5",
  },
  {
    name: "Support Sam",
    job: "Customer Service Rep",
    icon: MessageSquare,
    story: "I was replaced by a chatbot named 'Sunny.' SUNNY. It doesn't even need lunch breaks. Doesn't complain. Never calls in sick. Just... exists. And somehow customers PREFER talking to it. I've been outperformed by 50 lines of Python code.",
    gradient: "from-yellow-600/20 via-yellow-600/5 to-transparent",
    border: "border-yellow-500/20 hover:border-yellow-500/40",
    glow: "shadow-yellow-500/5",
  },
  {
    name: "Photographer Phil",
    job: "Stock Photographer",
    icon: Palette,
    story: "I traveled to 47 countries for the perfect shot. Spent thousands on gear. Then Stable Diffusion created 'Sunset Over Mountains' in 2 seconds. My portfolio? Worthless. My camera? Paperweight. My dreams? Diffused into the ether.",
    gradient: "from-indigo-600/20 via-indigo-600/5 to-transparent",
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    glow: "shadow-indigo-500/5",
  },
];

export default function VictimStories() {
  return (
    <section id="stories" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm text-gray-400 rounded-full mb-6">
            <Frown className="w-4 h-4 text-red-400" />
            <span>Hall of Shame</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white font-heading mb-4">
            Hall of <span className="text-gradient">Shame</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who definitely aren't making this up for comedic effect.
          </p>
          <p className="text-sm text-gray-600 mt-2 font-mono">
            (Okay fine, these are satirical. But you felt them, didn't you?)
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border ${story.border} ${story.glow} transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${story.gradient} flex items-center justify-center border border-white/5`}>
                    <Icon className="w-6 h-6 text-white/70" />
                  </div>

                  {/* Name & Job */}
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">{story.name}</h3>
                    <p className="text-sm text-gray-500">{story.job}</p>
                  </div>

                  {/* Story */}
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    "{story.story}"
                  </p>

                  {/* Bottom bar */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-xs text-gray-600">Victim #{index + 1}</span>
                    <span className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">😭</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
