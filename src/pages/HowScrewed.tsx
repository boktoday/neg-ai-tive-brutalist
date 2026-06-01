import { useState } from 'react';
import Navbar from '../components/Navbar';

const questions = [
  {
    q: 'Your boss announces "AI efficiency initiative." You:',
    options: [
      { text: 'Update your resume immediately', score: 3 },
      { text: 'Sign up for the AI training workshop', score: 1 },
      { text: 'Laugh — your job requires a human touch', score: 0 },
      { text: 'Ask ChatGPT to write your resignation letter', score: 2 },
    ],
  },
  {
    q: 'A video of a politician saying something wild goes viral. You:',
    options: [
      { text: 'Assume it\'s real and get outraged', score: 2 },
      { text: 'Check three sources before sharing', score: 0 },
      { text: 'Assume it\'s a deepfake — assume everything is', score: 3 },
      { text: 'Make another deepfake of them dancing', score: 1 },
    ],
  },
  {
    q: 'Your teenager is oddly quiet. You find them:',
    options: [
      { text: 'Talking to an AI boyfriend named "Ethan"', score: 3 },
      { text: 'Learning Python to build their own AI', score: 1 },
      { text: 'Reading a physical book (what?)', score: 0 },
      { text: 'Asking ChatGPT to do their homework', score: 2 },
    ],
  },
  {
    q: 'ChatGPT gives you an answer that sounds wrong. You:',
    options: [
      { text: 'Trust it — AI knows best', score: 2 },
      { text: 'Verify it, find it\'s wrong, never trust AI again, develop Existential anxiety', score: 3 },
      { text: 'Notice the error, correct it, move on', score: 1 },
      { text: 'Ask another AI to check the first AI', score: 0 },
    ],
  },
  {
    q: 'Your social media feed feels weirdly targeted today. You:',
    options: [
      { text: 'Assume the algorithm is manipulating your emotions', score: 3 },
      { text: 'Scroll past — it\'s fine', score: 0 },
      { text: 'Try to figure out why you\'re seeing this', score: 2 },
      { text: 'Search for tin foil hats on Amazon (algorithm wins)', score: 1 },
    ],
  },
  {
    q: 'Your favourite artist just released an AI-generated album. You:',
    options: [
      { text: 'Refuse to listen on principle', score: 2 },
      { text: 'Listen and feel existential dread the whole time', score: 3 },
      { text: 'Can\'t tell the difference — it slaps', score: 1 },
      { text: 'Make your own AI album and go viral', score: 0 },
    ],
  },
  {
    q: 'You discover your personal data was used to train an AI model. You:',
    options: [
      { text: 'Shrug — it\'s already out there', score: 1 },
      { text: 'Read the privacy policy for once (hero)', score: 0 },
      { text: 'Sue them (in your head)', score: 2 },
      { text: 'Realise you are the product and lie awake at 3am', score: 3 },
    ],
  },
  {
    q: 'A friend says "AI will save the world." Your response:',
    options: [
      { text: 'Send them a link to negaitive.com', score: 3 },
      { text: '"Sure, and I\'m a hologram"', score: 2 },
      { text: 'Nod politely and change the subject', score: 1 },
      { text: 'Agree — you\'ve been using ChatGPT for recipes', score: 0 },
    ],
  },
];

const maxScore = questions.length * 3;

function getResult(score: number) {
  const p = (score / maxScore) * 100;
  if (p <= 20) return {
    title: 'Basically Fine',
    line: 'AI has barely touched your life. You\'re either very lucky, very offline, or very good at ignoring reality.',
    emoji: '😌',
  };
  if (p <= 40) return {
    title: 'Mildly Screwed',
    line: 'You\'ve felt the breeze of the AI hurricane. Check a few issue briefs before it gets worse.',
    emoji: '😬',
  };
  if (p <= 60) return {
    title: 'Moderately Screwed',
    line: 'AI is actively affecting your work, relationships, or mental health. You should probably read the whole site.',
    emoji: '😰',
  };
  if (p <= 80) return {
    title: 'Severely Screwed',
    line: 'You\'re living the AI nightmare. Your boss, your wallet, your kids, your sanity — all touched by the machine.',
    emoji: '😱',
  };
  return {
    title: 'Completely Screwed',
    line: 'You are basically an AI warning label. The robots wrote this result specifically for you. Seek shelter and read every issue brief immediately.',
    emoji: '💀',
  };
}

export default function HowScrewed() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const answered = Object.keys(answers).length;
  const result = getResult(total);

  const select = (qi: number, score: number) => {
    setAnswers(p => ({ ...p, [qi]: score }));
  };

  const shareText = encodeURIComponent(`I got "${result.title}" on the How Screwed Are You? quiz! 🤖💀\n\nTake it here: https://negaitive.com/screwed\n\nHow screwed are YOU?`);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6">Interactive Quiz</div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            How Screwed<br />
            <span className="text-black">Are You?</span>
          </h1>
          <div className="w-16 h-1 bg-black mb-6" />
          <p className="font-mono text-sm text-black/60 max-w-xl leading-relaxed">
            8 quick questions. One brutal truth. Find out how badly AI has already got you.
          </p>
        </div>
      </section>

      {/* Result */}
      {submitted && (
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="border-2 border-black p-8 text-center mb-8">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50 mb-2">Your Result</p>
              <h2 className="text-4xl font-heading mb-3">{result.title}</h2>
              <p className="font-mono text-sm text-black/60 max-w-md mx-auto mb-6">{result.line}</p>
              <div className="h-2 bg-black/10 mb-6 max-w-xs mx-auto">
                <div className="h-full bg-black transition-all" style={{ width: `${(total / maxScore) * 100}%` }} />
              </div>
              <p className="text-xs font-mono text-black/30 mb-6">Score: {total}/{maxScore}</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-900 transition-colors"
                >
                  Share on X
                </a>
                <button
                  onClick={() => { setAnswers({}); setSubmitted(false); }}
                  className="px-6 py-3 border-2 border-black text-xs font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors"
                >
                  Take Again
                </button>
                <a
                  href="/scorecard"
                  className="px-6 py-3 border-2 border-black/30 text-xs font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors"
                >
                  Full Scorecard
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Questions */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {questions.map((q, qi) => {
            const isAnswered = answers[qi] !== undefined;
            return (
              <div key={qi} className={`border-2 p-6 ${isAnswered ? 'border-black' : 'border-black/20'}`}>
                <p className="text-xs font-mono text-black/40 mb-3">Q{qi + 1}/{questions.length}</p>
                <p className="text-sm font-bold mb-4">{q.q}</p>
                <div className="space-y-1">
                  {q.options.map((opt, oi) => (
                    <label
                      key={oi}
                      className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors text-sm ${
                        answers[qi] === opt.score ? 'bg-black text-white' : 'hover:bg-black/[0.04] text-black/70'
                      }`}
                    >
                      <input type="radio" name={`q${qi}`} checked={answers[qi] === opt.score} onChange={() => select(qi, opt.score)} className="sr-only" />
                      <div className={`w-3 h-3 border-2 flex items-center justify-center shrink-0 ${answers[qi] === opt.score ? 'border-white bg-white' : 'border-black/30'}`}>
                        {answers[qi] === opt.score && <div className="w-1.5 h-1.5 bg-black" />}
                      </div>
                      <span>{opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="border-t-2 border-black pt-8 flex items-center justify-between">
            <p className="text-xs font-mono text-black/40">{answered}/{questions.length}</p>
            <button
              onClick={() => setSubmitted(true)}
              disabled={answered < questions.length}
              className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {answered < questions.length ? `Answer All (${questions.length - answered} left)` : 'See My Fate →'}
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-black/30">This quiz is for entertainment. But also kind of not. Read the issue briefs.</p>
        </div>
      </footer>
    </div>
  );
}
