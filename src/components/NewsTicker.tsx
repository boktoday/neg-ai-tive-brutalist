import { useEffect, useState } from 'react';

const headlines = [
  { text: '95% of genAI pilots delivered zero financial return — MIT 2025', href: '/actual-intelligence' },
  { text: '40% of data centres in high water-stress areas — Bloomberg 2025', href: '/datacentres' },
  { text: '$40B projected AI fraud losses by 2027 — Deloitte', href: '/deepfakes' },
  { text: '64% of US teens have used AI chatbots — Pew Research 2025', href: '/chatbots' },
  { text: '300M jobs globally exposed to AI automation — Goldman Sachs 2026', href: '/jobs' },
  { text: 'AI hallucinations are structurally unfixable — OpenAI/Microsoft 2025', href: '/ai-psychosis' },
  { text: '78% of Americans concerned about data centre impacts — Consumer Reports 2025', href: '/datacentres' },
  { text: '42% of companies abandoned AI initiatives in 2025 — S&P Global', href: '/actual-intelligence' },
  { text: 'AI companion apps surged 700% since 2022 — TechCrunch', href: '/chatbots' },
  { text: 'CSIRO: 0 of 16 deepfake detectors worked reliably — 2025', href: '/deepfakes' },
  { text: '453 political deepfake incidents recorded globally in 2025 — NSW Parliament', href: '/deepfakes' },
  { text: 'Instagram algorithmic feed caused measurable teen mental health decline — CESifo 2026', href: '/algorithms' },
  { text: '16% employment decline for young workers in AI-exposed roles — Stanford 2025', href: '/jobs' },
  { text: 'AI chatbots may induce or exacerbate delusions — King\'s College London 2026', href: '/ai-psychosis' },
  { text: 'Character.AI and Google settle lawsuits over teen suicides — Jan 2026', href: '/chatbots' },
  { text: '$1.5T spent on AI in 2025 — 95% had no measurable return — MIT', href: '/actual-intelligence' },
  { text: '56% wage premium for AI-skilled workers — PwC 2025', href: '/jobs' },
  { text: 'AI-generated dark patterns personalised to each user — Think Design 2026', href: '/engage-attach' },
  { text: 'Over 50 AI copyright lawsuits active globally — 2026', href: '/copyright' },
  { text: 'Image dataset LAION-5B contains 5.85B images scraped without consent', href: '/copyright' },
];

export default function NewsTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = headlines[index];

  return (
    <div className="border-t-2 border-black bg-white">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-4">
        {/* Label */}
        <div className="shrink-0 flex items-center gap-2">
          <div className="w-2 h-2 bg-black animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Live Feed</span>
        </div>

        {/* Ticker item */}
        <a
          href={current.href}
          className="text-xs font-mono text-black/70 hover:text-black transition-colors truncate no-underline"
        >
          {current.text}
        </a>

        {/* Index indicator */}
        <span className="shrink-0 text-[10px] font-mono text-black/30">
          {index + 1}/{headlines.length}
        </span>
      </div>
    </div>
  );
}
