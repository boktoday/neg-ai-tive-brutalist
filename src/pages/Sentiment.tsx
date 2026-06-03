import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Send, MapPin, User, ThumbsUp, ThumbsDown, TrendingUp, Globe } from 'lucide-react';

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
// Activepieces webhook — update this URL when you create the Activepieces flow
const WEBHOOK_URL = 'https://cloud.activepieces.com/api/v1/webhooks/ALSQi1UMY53tRrR5vqqkB';

export default function Sentiment() {
  const [step, setStep] = useState<'form' | 'cloud'>('form');
  const [firstName, setFirstName] = useState('');
  const [location, setLocation] = useState('');
  const [likes, setLikes] = useState<string[]>([]);
  const [dislikes, setDislikes] = useState<string[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [activeTab, setActiveTab] = useState<'like' | 'dislike'>('like');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { 
        const parsed = JSON.parse(stored);
        setSubmissions(Array.isArray(parsed) ? parsed : []);
      } catch {}
    }
  }, []);

  const toggleLike = (topic: string) => {
    setLikes(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]);
  };

  const toggleDislike = (topic: string) => {
    setDislikes(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]);
  };

  const handleSubmit = async () => {
    if (!firstName.trim() || submitting) return;
    setSubmitting(true);

    const submission: Submission = {
      firstName: firstName.trim(),
      location: location.trim() || 'Unknown',
      likes,
      dislikes,
      timestamp: Date.now(),
    };

    // Save locally
    const updated = [submission, ...submissions.filter(s => s.firstName !== submission.firstName || s.timestamp !== submission.timestamp)];
    setSubmissions(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Send to webhook
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });
    } catch {
      // Silent fail — data is saved locally
    }

    setSubmitting(false);
    setStep('cloud');
  };

  // Word cloud calculations
  const wordCounts: Record<string, { count: number; sentiment: 'like' | 'dislike' }> = {};
  submissions.forEach(s => {
    s.likes.forEach(l => {
      if (!wordCounts[l]) wordCounts[l] = { count: 0, sentiment: 'like' };
      wordCounts[l].count++;
    });
    s.dislikes.forEach(d => {
      if (!wordCounts[d]) wordCounts[d] = { count: 0, sentiment: 'dislike' };
      wordCounts[d].count++;
    });
  });

  const maxCount = Math.max(...Object.values(wordCounts).map(w => w.count), 1);

  // Top 10 lists
  const topLikes = Object.entries(wordCounts)
    .filter(([, v]) => v.sentiment === 'like')
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10);

  const topDislikes = Object.entries(wordCounts)
    .filter(([, v]) => v.sentiment === 'dislike')
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10);

  // Location breakdown
  const locationCounts: Record<string, number> = {};
  submissions.forEach(s => {
    const loc = s.location.split(',')[0].trim(); // Just city
    if (loc && loc !== 'Unknown') {
      locationCounts[loc] = (locationCounts[loc] || 0) + 1;
    }
  });
  const topLocations = Object.entries(locationCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);

  // Map dots — approximate lat/lng for common cities
  const cityCoords: Record<string, { lat: number; lng: number }> = {
    'Melbourne': { lat: -37.8, lng: 145.0 },
    'Sydney': { lat: -33.9, lng: 151.2 },
    'Brisbane': { lat: -27.5, lng: 153.0 },
    'Perth': { lat: -31.9, lng: 115.9 },
    'Adelaide': { lat: -34.9, lng: 138.6 },
    'Canberra': { lat: -35.3, lng: 149.1 },
    'London': { lat: 51.5, lng: -0.1 },
    'New York': { lat: 40.7, lng: -74.0 },
    'Los Angeles': { lat: 34.1, lng: -118.2 },
    'San Francisco': { lat: 37.8, lng: -122.4 },
    'Tokyo': { lat: 35.7, lng: 139.7 },
    'Berlin': { lat: 52.5, lng: 13.4 },
    'Paris': { lat: 48.9, lng: 2.3 },
    'Auckland': { lat: -36.8, lng: 174.8 },
    'Singapore': { lat: 1.4, lng: 103.8 },
    'Cranbourne': { lat: -38.1, lng: 145.3 },
    'Cranbourne West': { lat: -38.1, lng: 145.3 },
  };

  const sentimentScore = (s: Submission) => {
    const total = s.likes.length + s.dislikes.length;
    if (total === 0) return 0;
    return (s.likes.length - s.dislikes.length) / total;
  };

  const avgSentiment = submissions.length > 0
    ? submissions.reduce((sum, s) => sum + sentimentScore(s), 0) / submissions.length
    : 0;

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">Sentiment</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            What Do You<br />
            <span className="text-black">Think of AI?</span>
          </h1>
          <div className="w-16 h-1 bg-black mb-6" />
          <p className="font-mono text-sm text-black/60 max-w-2xl leading-relaxed">
            Tap what you like and dislike about AI. See how your views compare to everyone else.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      {submissions.length > 0 && (
        <section className="px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-black p-4 flex flex-wrap gap-6 justify-center text-center">
              <div>
                <div className="text-2xl font-heading">{submissions.length}</div>
                <div className="text-[10px] font-mono text-black/40 uppercase">Voices</div>
              </div>
              <div>
                <div className="text-2xl font-heading">{topLocations.length}</div>
                <div className="text-[10px] font-mono text-black/40 uppercase">Cities</div>
              </div>
              <div>
                <div className="text-2xl font-heading">{Object.keys(wordCounts).length}</div>
                <div className="text-[10px] font-mono text-black/40 uppercase">Topics</div>
              </div>
              <div>
                <div className="text-2xl font-heading">{avgSentiment > 0.1 ? 'Positive' : avgSentiment < -0.1 ? 'Negative' : 'Mixed'}</div>
                <div className="text-[10px] font-mono text-black/40 uppercase">Overall Mood</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {step === 'form' && (
        <section className="px-4 pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-black/60 flex items-center gap-2">
                  <User className="w-3 h-3" /> Your First Name
                </label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}
                  placeholder="e.g. Sarah"
                  className="w-full px-4 py-3 border-2 border-black/20 text-sm font-mono focus:outline-none focus:border-black transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-black/60 flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> Your Location
                </label>
                <input type="text" value={location} onChange={e => setLocation(e.target.value)}
                  placeholder="e.g. Melbourne, Australia"
                  className="w-full px-4 py-3 border-2 border-black/20 text-sm font-mono focus:outline-none focus:border-black transition-colors" />
              </div>
            </div>

            <div className="flex border-2 border-black mb-6">
              <button onClick={() => setActiveTab('like')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${activeTab === 'like' ? 'bg-black text-white' : 'bg-white text-black/50 hover:bg-black/5'}`}>
                I Like This
              </button>
              <button onClick={() => setActiveTab('dislike')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${activeTab === 'dislike' ? 'bg-black text-white' : 'bg-white text-black/50 hover:bg-black/5'}`}>
                I Don't Like This
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
              {(activeTab === 'like' ? topics.like : topics.dislike).map(topic => {
                const selected = activeTab === 'like' ? likes.includes(topic) : dislikes.includes(topic);
                return (
                  <button key={topic} onClick={() => activeTab === 'like' ? toggleLike(topic) : toggleDislike(topic)}
                    className={`px-3 py-2 text-xs font-mono border-2 transition-colors text-left ${
                      selected ? 'bg-black text-white border-black' : 'border-black/20 text-black/60 hover:border-black/40'
                    }`}>
                    {activeTab === 'like' ? '+' : '−'} {topic}
                  </button>
                );
              })}
            </div>

            <div className="border-t-2 border-black pt-6 flex items-center justify-between">
              <p className="text-xs font-mono text-black/40">{likes.length} liked · {dislikes.length} disliked</p>
              <button onClick={handleSubmit} disabled={!firstName.trim() || submitting}
                className="flex items-center gap-2 px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                {submitting ? 'Submitting...' : <><Send className="w-3 h-3" /> Submit & See the Cloud</>}
              </button>
            </div>
          </div>
        </section>
      )}

      {step === 'cloud' && (
        <section className="px-4 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Thanks */}
            <div className="border-2 border-black p-6 mb-8 text-center">
              <p className="text-lg font-heading mb-1">Thanks, {firstName}!</p>
              <p className="font-mono text-xs text-black/50">{location !== 'Unknown' && `${location} · `}{submissions.length} total submissions</p>
            </div>

            {/* Word cloud */}
            <div className="border-2 border-black p-8 mb-8 min-h-[300px] flex flex-wrap items-center justify-center gap-3">
              {Object.entries(wordCounts).length === 0 ? (
                <p className="font-mono text-xs text-black/30">No data yet. Be the first!</p>
              ) : (
                Object.entries(wordCounts).map(([word, data]) => {
                  const size = 12 + (data.count / maxCount) * 36;
                  return (
                    <span key={word} className="inline-block font-heading transition-all hover:scale-110 cursor-default"
                      style={{ fontSize: `${size}px`, opacity: 0.5 + (data.count / maxCount) * 0.5, color: data.sentiment === 'like' ? '#000' : '#666' }}
                      title={`${data.count} people`}>{word}</span>
                  );
                })
              )}
            </div>

            {/* Map + Top 10 side by side */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* World map */}
              <div className="border-2 border-black p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/60">Where They're From</span>
                </div>
                {topLocations.length === 0 ? (
                  <p className="font-mono text-xs text-black/30 text-center py-8">No locations yet</p>
                ) : (
                  <div className="relative w-full aspect-[16/9] bg-black/[0.02] overflow-hidden">
                    {/* Simple SVG world map with dots */}
                    <svg viewBox="0 0 800 450" className="w-full h-full opacity-60">
                      <rect width="800" height="450" fill="none" />
                      {/* Continents (simplified) */}
                      <path d="M80 150 L120 130 L160 135 L190 120 L210 130 L220 150 L230 170 L220 190 L200 210 L180 220 L160 215 L140 200 L120 180 L100 170 Z" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.3"/>
                      <path d="M370 100 L390 90 L410 95 L430 105 L440 120 L445 140 L440 155 L430 165 L410 170 L390 168 L380 155 L375 135 L370 120 Z" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.3"/>
                      <path d="M370 190 L390 185 L410 190 L420 210 L425 230 L420 255 L410 280 L400 300 L390 310 L380 305 L375 280 L370 250 L365 220 L365 200 Z" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.3"/>
                      <path d="M450 95 L490 85 L530 90 L570 100 L610 110 L640 130 L650 150 L645 175 L635 190 L615 200 L585 205 L555 200 L525 195 L495 190 L475 180 L460 165 L455 145 L450 120 Z" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.3"/>
                      <path d="M640 290 L670 280 L700 285 L720 300 L730 320 L720 340 L700 350 L680 355 L660 350 L645 335 L638 315 Z" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.3"/>
                      {/* Location dots */}
                      {topLocations.map(([city, count]) => {
                        const coords = cityCoords[city];
                        if (!coords) return null;
                        const x = ((coords.lng + 180) / 360) * 800;
                        const y = ((90 - coords.lat) / 180) * 450;
                        const r = Math.min(4 + count * 2, 14);
                        return (
                          <g key={city}>
                            <circle cx={x} cy={y} r={r} fill="black" opacity={0.6 + count * 0.05} className="animate-ping" style={{ animationDuration: '3s', animationDelay: `${count * 0.2}s` }} />
                            <circle cx={x} cy={y} r={r} fill="black" opacity={0.8} />
                            <text x={x} y={y - r - 4} textAnchor="middle" fontSize="8" fill="black" fontWeight="bold">{city}</text>
                          </g>
                        );
                      })}
                    </svg>
                    {/* Location list */}
                    <div className="absolute bottom-2 right-2 bg-white/90 border border-black/10 p-2 text-[10px] font-mono">
                      {topLocations.map(([city, count]) => (
                        <div key={city} className="flex justify-between gap-3">
                          <span>{city}</span>
                          <span className="font-bold">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Top 10 */}
              <div className="border-2 border-black p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/60">Top Sentiment</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-mono text-black/40 mb-2 uppercase tracking-wider">Most Liked</p>
                    {topLikes.length === 0 ? <p className="text-xs font-mono text-black/20">No data yet</p> : (
                      <div className="space-y-1">
                        {topLikes.map(([word, data], i) => (
                          <div key={word} className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-black/30 w-4">{i + 1}.</span>
                            <div className="flex-1 h-5 bg-black/5 relative">
                              <div className="h-full bg-black transition-all" style={{ width: `${(data.count / maxCount) * 100}%` }} />
                            </div>
                            <span className="text-xs font-bold w-16 text-right">{word}</span>
                            <span className="text-[10px] font-mono text-black/40 w-6 text-right">{data.count}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-black/40 mb-2 uppercase tracking-wider">Most Disliked</p>
                    {topDislikes.length === 0 ? <p className="text-xs font-mono text-black/20">No data yet</p> : (
                      <div className="space-y-1">
                        {topDislikes.map(([word, data], i) => (
                          <div key={word} className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-black/30 w-4">{i + 1}.</span>
                            <div className="flex-1 h-5 bg-black/5 relative">
                              <div className="h-full bg-black/60 transition-all" style={{ width: `${(data.count / maxCount) * 100}%` }} />
                            </div>
                            <span className="text-xs font-bold w-20 text-right truncate">{word}</span>
                            <span className="text-[10px] font-mono text-black/40 w-6 text-right">{data.count}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent submissions */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-3">Recent Voices</p>
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {submissions.slice(0, 20).map((s, i) => (
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

            <div className="text-center">
              <button onClick={() => { setStep('form'); setLikes([]); setDislikes([]); setFirstName(''); setLocation(''); }}
                className="px-8 py-3 border-2 border-black text-xs font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors">
                Add Your Voice
              </button>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono text-black/30">Data is sent to a server and stored locally. No personal tracking.</p>
        </div>
      </footer>
    </div>
  );
}
