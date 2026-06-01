import { useState } from 'react';
import { Mail, CheckCircle, XCircle, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setMessage("An email address would be helpful. Unless you're communicating telepathically?");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage("That's not an email. Nice try, but AI can detect fake emails faster than you can type them.");
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://cloud.activepieces.com/api/v1/webhooks/ALSQi1UMY53tRrR5vqqkB', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      if (!response.ok) throw new Error('Webhook request failed');

      setStatus('success');
      setMessage("Welcome to the club! Check your inbox for AI-generated content about hating AI. Yes, we see the irony.");
      setEmail('');
      setTimeout(() => { setStatus('idle'); setMessage(''); }, 5000);
    } catch {
      setStatus('error');
      setMessage("Our newsletter system crashed. Probably an AI bug. How fitting.");
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-gold-950/20 to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="glass p-8 md:p-12 relative overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-sm text-gray-400 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Pity Party Newsletter</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-4">
              Join the <span className="text-gradient-gold">Pity Party</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Get weekly roasts of AI fails, job loss memes, and existential dread.
              <span className="block text-sm text-gray-600 mt-1 font-mono">
                100% AI-written. 0% human empathy. Just like your boss.
              </span>
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@doom.com"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mx-auto" />
                  ) : (
                    'Subscribe to Pain'
                  )}
                </button>
              </div>
            </form>

            {/* Status message */}
            {message && (
              <div
                className={`mt-6 p-4 rounded-xl flex items-start gap-3 text-left ${
                  status === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/20'
                    : 'bg-red-500/10 border border-red-500/20'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                )}
                <p className={`text-sm ${status === 'success' ? 'text-emerald-300' : 'text-red-300'}`}>
                  {message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
