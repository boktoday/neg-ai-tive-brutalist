import { useState } from 'react';

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
    <section className="py-24 bg-white border-t border-black/10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <span className="text-white text-xs font-bold">@</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">Pity Party Newsletter</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading leading-[0.9] tracking-[-0.03em] mb-4">
            Join the<br />
            <span className="text-black">Pity Party</span>
          </h2>
          <div className="w-16 h-1 bg-black" />
          <p className="font-mono text-sm mt-6 text-black/50 max-w-xl">
            Get weekly roasts of AI fails, job loss memes, and existential dread.
            <span className="block mt-1 text-black/30">100% AI-written. 0% human empathy. Just like your boss.</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@doom.com"
            className="flex-1 px-4 py-3 border-2 border-black/20 text-black text-sm font-mono placeholder:text-black/20 focus:outline-none focus:border-black transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-black text-white font-bold text-sm uppercase tracking-[0.15em] whitespace-nowrap hover:bg-gray-900 transition-colors disabled:opacity-50"
          >
            Subscribe to Pain
          </button>
        </form>

        {message && (
          <div className={`mt-6 p-4 border-2 ${status === 'success' ? 'border-black bg-black/5' : 'border-red-500 bg-red-50'}`}>
            <p className={`text-sm font-mono ${status === 'success' ? 'text-black' : 'text-red-700'}`}>
              {status === 'success' ? '✓ ' : '✗ '}{message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
