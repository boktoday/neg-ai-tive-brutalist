import { useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrowLeft, AlertTriangle, Zap, Brain, Briefcase, MessageCircle, Shield, Eye, Scale, Cpu } from 'lucide-react';

const questions = [
  {
    id: 'jobs',
    icon: Briefcase,
    label: 'Job / Career',
    question: 'How concerned are you about AI replacing your job or reducing your income?',
    options: [
      { text: 'Not at all — my job is safe', score: 0 },
      { text: 'Somewhat — AI is changing my field', score: 2 },
      { text: 'Very — I\'ve already seen roles eliminated', score: 4 },
      { text: 'Extremely — I\'ve been directly affected', score: 6 },
    ],
    link: '/jobs',
  },
  {
    id: 'deepfakes',
    icon: Shield,
    label: 'Deepfakes / Fraud',
    question: 'Have you or someone you know encountered AI-generated fake content (voice, video, image) used to deceive?',
    options: [
      { text: 'Not that I\'m aware of', score: 0 },
      { text: 'I\'ve seen deepfakes online', score: 2 },
      { text: 'I\'ve been targeted by an AI scam', score: 4 },
      { text: 'I\'ve lost money or reputation to deepfake fraud', score: 6 },
    ],
    link: '/deepfakes',
  },
  {
    id: 'chatbots',
    icon: MessageCircle,
    label: 'AI Chatbots / Youth',
    question: 'How concerned are you about AI chatbots affecting children or teenagers?',
    options: [
      { text: 'Not concerned', score: 0 },
      { text: 'Mildly — I\'ve heard stories', score: 2 },
      { text: 'Very — I know young people using AI companions', score: 4 },
      { text: 'Extremely — a child I know has been harmed', score: 6 },
    ],
    link: '/chatbots',
  },
  {
    id: 'psychosis',
    icon: Brain,
    label: 'AI Hallucinations',
    question: 'Have you ever trusted AI-generated information that turned out to be completely false?',
    options: [
      { text: 'Never — I always verify', score: 0 },
      { text: 'Once or twice', score: 2 },
      { text: 'Multiple times', score: 4 },
      { text: 'I\'ve made decisions based on AI hallucinations', score: 6 },
    ],
    link: '/ai-psychosis',
  },
  {
    id: 'algorithms',
    icon: Eye,
    label: 'Algorithmic Manipulation',
    question: 'How much control do you feel you have over what algorithms show you?',
    options: [
      { text: 'Complete control — I curate my own feed', score: 0 },
      { text: 'Some control — I can scroll past things', score: 2 },
      { text: 'Little control — the algorithm decides', score: 4 },
      { text: 'No control — I feel actively manipulated', score: 6 },
    ],
    link: '/algorithms',
  },
  {
    id: 'datacentres',
    icon: Zap,
    label: 'Environmental Impact',
    question: 'How aware were you of the environmental cost (energy, water) of AI before visiting this site?',
    options: [
      { text: 'Fully aware — I follow data centre issues', score: 0 },
      { text: 'Somewhat aware', score: 2 },
      { text: 'Vaguely aware', score: 4 },
      { text: 'I had no idea AI had an environmental cost', score: 6 },
    ],
    link: '/datacentres',
  },
  {
    id: 'copyright',
    icon: Scale,
    label: 'Creative Work / Copyright',
    question: 'Has AI-generated content affected your or someone else\'s creative work or income?',
    options: [
      { text: 'Not affected', score: 0 },
      { text: 'Minor — I\'ve seen my work used without consent', score: 2 },
      { text: 'Moderate — my income or clients have reduced', score: 4 },
      { text: 'Severe — my creative career has been impacted', score: 6 },
    ],
    link: '/copyright',
  },
  {
    id: 'engagement',
    icon: Cpu,
    label: 'AI Addiction / Engagement',
    question: 'How difficult would it be for you to stop using AI tools for a week?',
    options: [
      { text: 'Trivial — I barely use them', score: 0 },
      { text: 'Manageable — I\'d miss them but cope', score: 2 },
      { text: 'Hard — they\'re part of my daily routine', score: 4 },
      { text: 'Very hard — I feel dependent on them', score: 6 },
    ],
    link: '/engage-attach',
  },
  {
    id: 'actual',
    icon: AlertTriangle,
    label: 'Hype vs Reality',
    question: 'Has AI ever failed to deliver on promises made to you or your organisation?',
    options: [
      { text: 'No — AI has met or exceeded expectations', score: 0 },
      { text: 'Minor — some tools were overhyped', score: 2 },
      { text: 'Significant — we wasted time or money on AI', score: 4 },
      { text: 'Major — an AI project failed completely', score: 6 },
    ],
    link: '/actual-intelligence',
  },
];

const maxScore = questions.length * 6; // 54

function getLevel(score: number) {
  const pct = (score / maxScore) * 100;
  if (pct <= 15) return { label: 'Minimal Exposure', desc: 'AI hasn\'t impacted you much yet. But it\'s coming.', color: 'text-black/40' };
  if (pct <= 30) return { label: 'Moderate Exposure', desc: 'You\'ve felt the edges of AI harm. Read up on the issues affecting you most.', color: 'text-black' };
  if (pct <= 50) return { label: 'High Exposure', desc: 'AI is actively affecting your life. You should understand every angle.', color: 'text-black font-bold' };
  return { label: 'Critical Exposure', desc: 'You\'ve been deeply impacted by AI across multiple dimensions. This site was made for you.', color: 'text-black font-bold' };
}

export default function Scorecard() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (qId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);
  const answered = Object.keys(answers).length;
  const level = getLevel(totalScore);

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">Interactive</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            AI Harm<br />
            <span className="text-black font-heading">Scorecard</span>
          </h1>
          <div className="w-16 h-1 bg-black mb-6" />
          <p className="font-mono text-sm text-black/60 max-w-xl leading-relaxed">
            Answer 9 quick questions to see how AI is affecting you across the key dimensions of harm.
            Each response is linked to the relevant issue brief for deeper reading.
          </p>
        </div>
      </section>

      {/* Results (if submitted) */}
      {submitted && (
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="border-2 border-black p-8 mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50 mb-2">Your Score</p>
              <div className="text-6xl font-heading mb-2">{totalScore}<span className="text-2xl text-black/30">/{maxScore}</span></div>
              <p className={`text-lg font-bold mb-1 ${level.color}`}>{level.label}</p>
              <p className="text-sm font-mono text-black/50 mb-4">{level.desc}</p>

              {/* Progress bar */}
              <div className="h-2 bg-black/10 mb-6">
                <div className="h-full bg-black transition-all duration-500" style={{ width: `${(totalScore / maxScore) * 100}%` }} />
              </div>

              {/* Breakdown */}
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/50 mb-3">Breakdown by Issue</p>
              <div className="space-y-2">
                {questions.map((q) => {
                  const score = answers[q.id] || 0;
                  const pct = (score / 6) * 100;
                  return (
                    <a key={q.id} href={q.link} className="block border border-black/10 p-3 hover:bg-black/[0.02] transition-colors no-underline text-black">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <q.icon className="w-3 h-3 text-black/40" />
                          <span className="text-xs font-bold">{q.label}</span>
                        </div>
                        <span className="text-xs font-mono text-black/40">{score}/6</span>
                      </div>
                      <div className="h-1.5 bg-black/10">
                        <div className="h-full bg-black" style={{ width: `${pct}%` }} />
                      </div>
                    </a>
                  );
                })}
              </div>

              <button onClick={handleReset} className="mt-6 px-6 py-3 border-2 border-black text-black text-xs font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors">
                Take Again
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Questions */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {questions.map((q, idx) => {
            const Icon = q.icon;
            const answered_ = answers[q.id] !== undefined;

            return (
              <div key={q.id} className={`border-2 p-6 ${answered_ ? 'border-black' : 'border-black/20'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border-2 border-black/20 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/50">
                        {String(idx + 1).padStart(2, '0')} / {q.label}
                      </p>
                      <p className="text-sm font-bold mt-1">{q.question}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 ml-11">
                  {q.options.map((opt, oi) => (
                    <label
                      key={oi}
                      className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors text-sm ${
                        answers[q.id] === opt.score
                          ? 'bg-black text-white'
                          : 'hover:bg-black/[0.04] text-black/70'
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.score}
                        checked={answers[q.id] === opt.score}
                        onChange={() => handleAnswer(q.id, opt.score)}
                        className="sr-only"
                      />
                      <div className={`w-3 h-3 border-2 flex items-center justify-center shrink-0 ${
                        answers[q.id] === opt.score ? 'border-white bg-white' : 'border-black/30'
                      }`}>
                        {answers[q.id] === opt.score && <div className="w-1.5 h-1.5 bg-black" />}
                      </div>
                      <span>{opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Submit */}
          <div className="border-t-2 border-black pt-8 flex items-center justify-between">
            <p className="text-xs font-mono text-black/40">{answered} of {questions.length} answered</p>
            <button
              onClick={handleSubmit}
              disabled={answered < questions.length}
              className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {answered < questions.length ? `Answer All Questions (${questions.length - answered} left)` : 'See Your Score →'}
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-black/30">This is an indicative self-assessment, not a clinical or diagnostic tool.</p>
        </div>
      </footer>
    </div>
  );
}
