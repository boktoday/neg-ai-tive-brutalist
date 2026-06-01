import { useState } from 'react';

const sarcasticErrors = [
  "Nice try, but we need actual words. AI hasn't replaced typing... yet.",
  "Your trauma is important to us. Please express it in complete sentences.",
  "Error 404: Sob story not found. Try adding more drama.",
  "We know you're hurt, but we need MORE DETAILS. Channel that rage!",
];

const successMessages = [
  "Your suffering has been documented! We'll review it while sipping coffee made by robots.",
  "Story received! An AI will process your complaint about AI. The irony is not lost on us.",
  "Submission successful! You're now officially part of the problem... we mean, solution.",
];

export default function StorySubmission() {
  const [formData, setFormData] = useState({ name: '', jobTitle: '', story: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.jobTitle.trim() || !formData.story.trim()) {
      setStatus('error');
      setMessage(sarcasticErrors[Math.floor(Math.random() * sarcasticErrors.length)]);
      return;
    }
    if (formData.story.length < 50) {
      setStatus('error');
      setMessage("Is that it? AI replaced you with a 50-character sob story? Give us at least 50 characters of pure anguish!");
      return;
    }
    setStatus('loading');
    try {
      const webhookUrl = import.meta.env.VITE_STORY_WEBHOOK_URL;
      if (!webhookUrl) throw new Error('Webhook URL not configured');
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name.trim(), jobTitle: formData.jobTitle.trim(), story: formData.story.trim() }),
      });
      if (!response.ok) throw new Error('Webhook request failed');
      setStatus('success');
      setMessage(successMessages[Math.floor(Math.random() * successMessages.length)]);
      setFormData({ name: '', jobTitle: '', story: '' });
      setTimeout(() => { setStatus('idle'); setMessage(''); }, 5000);
    } catch {
      setStatus('error');
      setMessage("Even our submission system is broken. Probably AI's fault. Try again?");
    }
  };

  return (
    <section id="submit" className="py-24 bg-white border-t border-black/10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">Confessional Booth</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.03em] mb-4">
            Spill Your<br />
            <span className="text-black">Guts</span>
          </h2>
          <div className="w-16 h-1 bg-black" />
          <p className="font-mono text-sm mt-6 text-black/50">Tell the world how AI ruined your life. Or your career. Or just your vibe.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-black/60">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah the Artist"
                className="w-full px-4 py-3 border-2 border-black/20 text-black text-sm font-mono placeholder:text-black/20 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-black/60">Your Former Job</label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                placeholder="e.g. Digital Illustrator"
                className="w-full px-4 py-3 border-2 border-black/20 text-black text-sm font-mono placeholder:text-black/20 focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-black/60">Your Tragedy (min. 50 char)</label>
            <textarea
              value={formData.story}
              onChange={(e) => setFormData({ ...formData, story: e.target.value })}
              placeholder="Describe in vivid detail how AI crushed your dreams..."
              rows={6}
              className="w-full px-4 py-3 border-2 border-black/20 text-black text-sm font-mono placeholder:text-black/20 focus:outline-none focus:border-black transition-colors resize-none"
            />
            <div className="flex justify-between mt-2 text-xs text-black/30 font-mono">
              <span>{formData.story.length} characters</span>
              {formData.story.length > 0 && formData.story.length < 50 && <span className="text-black/60">{50 - formData.story.length} more needed</span>}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-black text-white font-bold text-sm uppercase tracking-[0.15em] hover:bg-gray-900 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Submitting...' : 'Submit Your Trauma →'}
          </button>
        </form>

        {/* Status message */}
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
