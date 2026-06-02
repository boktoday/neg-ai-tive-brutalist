import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Send, MapPin, User, ThumbsUp, ThumbsDown } from 'lucide-react';

const topics = {
  like: [
    'Productivity', 'Coding Help', 'Writing Assistance', 'Research', 'Creativity',
    'Data Analysis', 'Translation', 'Learning', 'Brainstorming', 'Automation',
    'Personal Assistant', 'Image Generation', 'Summarisation', 'Accessibility',
  ],
  dislike: [
    'Job Loss', 'Deepfakes', 'Plagiarism', 'Bias', 'Hallucinations',
    'Privacy Loss', 'Addiction', 'Data Centres', 'Water Usage', 'Surveillance',
    'Copyright Theft', 'Misinformation', 'Echo Chambers', 'Loss of Human Touch',
  ],
};

interface Submission {
  firstName: string;
  location: string;
  likes: string[];
  dislikes: string[];
  timestamp: number;
}

const STORAGE_KEY = 'neg-ai-tive-sentiment';

export default function Sentiment() {
  const [step, setStep] = useState<'form' | 'submit' | 'cloud'>('form');
  const [firstName, setFirstName] = useState('');
  const [location, setLocation] = useState('');
  const [likes, setLikes] = useState<string[]>([]);
  const [dislikes, setDislikes] = useState<string[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [activeTab, setActiveTab] = useState<'like' | 'dislike'>('like');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setSubmissions(JSON.parse(stored)); } catch {}
    }
  }, []);

  const toggleLike = (topic: string) => {
    setLikes(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]);
  };

  const toggleDislike = (topic: string) => {
    setDislikes(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]);
  };

  const handleSubmit = () => {
    if (!firstName.trim()) return;
    
    const submission: Submission = {
      firstName: firstName.trim(),
      location: location.trim() || 'Unknown',
      likes,
      dislikes,
      timestamp: Date.now(),
    };
    
    const updated = [submission, ...submissions];
    setSubmissions(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setStep('cloud');
  };

  // Calculate word cloud weights
  const wordCounts: Record<string, { count: number; sentiment: 'like' | 'dislike' }> = {};
  submissions.forEach(s => {
    s.likes.forEach(l => {
      wordCounts[l] = { count: (wordCounts[l]?.count || 0) + 1, sentiment: 'like' };
    });
    s.dislikes.forEach(d => {
      wordCounts[d] = { count: (wordCounts[d]?.count || 0) + 1, sentiment: 'dislike' };
    });
  });

  const maxCount = Math.max(...Object.values(wordCounts).map(w => w.count), 1);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">Sentiment</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            What Do You<br />
            <span className="text-black">Think of AI?</span>
          </h1>
          <div className="w-16 h-1 bg-black mb-6" />
          <p className="font-mono text-sm text-black/60 max-w-xl leading-relaxed">
            Tap what you like and dislike about AI. See how your views compare to everyone else.
          </p>
        </div>
      </section>

      {step === 'form' && (
        <section className="px-4 pb-24">
          <div className="max-w-3xl mx-auto">

            {/* Name + Location */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-black/60 flex items-center gap-2">
                  <User className="w-3 h-3" /> Your First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="e.g. Sarah"
                  className="w-full px-4 py-3 border-2 border-black/20 text-sm font-mono focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-black/60 flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> Your Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="e.g. Melbourne, Australia"
                  className="w-full px-4 py-3 border-2 border-black/20 text-sm font-mono focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Like / Dislike tabs */}
            <div className="flex border-2 border-black mb-6">
              <button
                onClick={() => setActiveTab('like')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${activeTab === 'like' ? 'bg-black text-white' : 'bg-white text-black/50 hover:bg-black/5'}`}
              >
                I Like This
              </button>
              <button
                onClick={() => setActiveTab('dislike')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${activeTab === 'dislike' ? 'bg-black text-white' : 'bg-white text-black/50 hover:bg-black/5'}`}
              >
                I Don't Like This
              </button>
            </div>

            {/* Topic grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
              {(activeTab === 'like' ? topics.like : topics.dislike).map(topic => {
                const selected = activeTab === 'like' ? likes.includes(topic) : dislikes.includes(topic);
                return (
                  <button
                    key={topic}
                    onClick={() => activeTab === 'like' ? toggleLike(topic) : toggleDislike(topic)}
                    className={`px-3 py-2 text-xs font-mono border-2 transition-colors text-left ${
                      selected
                        ? activeTab === 'like'
                          ? 'bg-black text-white border-black'
                          : 'bg-black text-white border-black'
                        : 'border-black/20 text-black/60 hover:border-black/40'
                    }`}
                  >
                    {activeTab === 'like' ? '+' : '−'} {topic}
                  </button>
                );
              })}
            </div>

            {/* Summary */}
            <div className="border-t-2 border-black pt-6 flex items-center justify-between">
              <p className="text-xs font-mono text-black/40">
                {likes.length} liked · {dislikes.length} disliked
              </p>
              <button
                onClick={handleSubmit}
                disabled={!firstName.trim()}
                className="flex items-center gap-2 px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Send className="w-3 h-3" /> Submit & See the Cloud
              </button>
            </div>
          </div>
        </section>
      )}

      {step === 'submit' && (
        <section className="px-4 pb-24 text-center">
          <p className="font-mono text-sm text-black/60">Submitting...</p>
        </section>
      )}

      {step === 'cloud' && (
        <section className="px-4 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Thanks message */}
            <div className="border-2 border-black p-6 mb-8 text-center">
              <p className="text-lg font-heading mb-1">Thanks, {firstName}!</p>
              <p className="font-mono text-xs text-black/50">{location !== 'Unknown' && `${location} · `}{submissions.length} total submissions</p>
            </div>

            {/* Word cloud */}
            <div className="border-2 border-black p-8 min-h-[400px] flex flex-wrap items-center justify-center gap-3">
              {Object.entries(wordCounts).length === 0 ? (
                <p className="font-mono text-xs text-black/30">No data yet. Be the first!</p>
              ) : (
                Object.entries(wordCounts).map(([word, data]) => {
                  const size = 12 + (data.count / maxCount) * 36;
                  const isLike = data.sentiment === 'like';
                  return (
                    <span
                      key={word}
                      className="inline-block font-heading transition-all hover:scale-110"
                      style={{
                        fontSize: `${size}px`,
                        opacity: 0.5 + (data.count / maxCount) * 0.5,
                        color: isLike ? '#000' : '#666',
                      }}
                      title={`${data.count} people`}
                    >
                      {word}
                    </span>
                  );
                })
              )}
            </div>

            {/* Recent submissions */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-3">Recent Voices</p>
              <div className="space-y-2">
                {submissions.slice(0, 10).map((s, i) => (
                  <div key={i} className="border border-black/10 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">{s.firstName}</span>
                        <span className="text-[10px] font-mono text-black/40">{s.location}</span>
                      </div>
                      <span className="text-[10px] font-mono text-black/20">{new Date(s.timestamp).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {s.likes.map(l => <span key={l} className="text-[10px] font-mono px-1.5 py-0.5 border border-black/20 bg-black/5">+{l}</span>)}
                      {s.dislikes.map(d => <span key={d} className="text-[10px] font-mono px-1.5 py-0.5 border border-black/20 bg-black/70 text-white">−{d}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit another */}
            <div className="mt-8 text-center">
              <button
                onClick={() => { setStep('form'); setLikes([]); setDislikes([]); setFirstName(''); setLocation(''); }}
                className="px-8 py-3 border-2 border-black text-xs font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors"
              >
                Add Your Voice
              </button>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono text-black/30">Data stored locally in your browser. No server. No tracking.</p>
        </div>
      </footer>
    </div>
  );
}
