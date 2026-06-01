const stories = [
  {
    name: "Sarah the 'Artist'",
    job: "Digital Illustrator",
    story: "I spent 10 years perfecting my anime style. Then MidJourney showed up and now everyone's a 'professional artist.' My commissions went from $500 to 'exposure.' Thanks, AI. My landlord loves exposure.",
  },
  {
    name: "Dave the Disposable",
    job: "Junior Developer",
    story: "I just learned React. JUST. LEARNED. IT. And now ChatGPT writes better code than me while I sleep. My senior dev literally asked the AI to review MY pull requests. I'm being managed by a chatbot.",
  },
  {
    name: "Marketing Mike",
    job: "Content Strategist",
    story: "I used to be a 'growth hacker.' Now I'm competing with 10,000 AI-generated blog posts per day. My carefully crafted LinkedIn posts? Buried under AI spam. My job? Also buried. I'm basically a prompt engineer's footnote now.",
  },
  {
    name: "Writer Wendy",
    job: "Freelance Copywriter",
    story: "Clients now ask: 'Can you match ChatGPT's rate?' CHATGPT DOESN'T PAY RENT, KAREN. I spent 15 years learning storytelling. AI learned it in 15 seconds. My career is now worth $0.03 per word. That's 3 cents. THREE.",
  },
  {
    name: "Support Sam",
    job: "Customer Service Rep",
    story: "I was replaced by a chatbot named 'Sunny.' SUNNY. It doesn't even need lunch breaks. Doesn't complain. Never calls in sick. Just... exists. And somehow customers PREFER talking to it. I've been outperformed by 50 lines of Python code.",
  },
  {
    name: "Photographer Phil",
    job: "Stock Photographer",
    story: "I traveled to 47 countries for the perfect shot. Spent thousands on gear. Then Stable Diffusion created 'Sunset Over Mountains' in 2 seconds. My portfolio? Worthless. My camera? Paperweight. My dreams? Diffused into the ether.",
  },
];

export default function VictimStories() {
  return (
    <section id="stories" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header — brutalist minimal */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <span className="text-white text-xs font-bold">#</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">Hall of Shame</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading leading-[0.9] tracking-[-0.03em]">
            Hall of<br />
            <span className="text-black">Shame</span>
          </h2>
          <div className="w-16 h-1 bg-black mt-6" />
          <p className="font-mono text-sm mt-6 max-w-xl text-black/50">
            Real stories from real people who definitely aren't making this up for comedic effect.
            <span className="block mt-1 text-black/30">(Okay fine, these are satirical. But you felt them, didn't you?)</span>
          </p>
        </div>

        {/* Stories — brutalist grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {stories.map((story, index) => (
            <div
              key={index}
              className="border border-black/10 p-6 flex flex-col hover:bg-black/[0.02] transition-colors"
            >
              {/* Victim number */}
              <div className="text-[10px] font-bold tracking-[0.2em] text-black/30 mb-4">
                VICTIM #{String(index + 1).padStart(2, '0')}
              </div>

              {/* Name + job */}
              <div className="mb-4">
                <h3 className="text-xl font-black tracking-tight">{story.name}</h3>
                <p className="text-xs font-mono text-black/40">{story.job}</p>
              </div>

              {/* Separator */}
              <div className="w-full h-[1px] bg-black/10 mb-4" />

              {/* Story */}
              <p className="text-sm leading-relaxed text-black/70 flex-1">
                "{story.story}"
              </p>

              {/* Read more indicator */}
              <div className="mt-4 text-xs font-bold text-black/30 tracking-[0.15em]">
                ● ● ●
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
