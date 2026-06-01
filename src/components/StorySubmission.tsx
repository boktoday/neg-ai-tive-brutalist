import { useState } from 'react';
import { Send, CheckCircle, XCircle, Sparkles } from 'lucide-react';

const sarcasticErrors = [
  "Nice try, but we need actual words. AI hasn't replaced typing... yet.",
  "Your trauma is important to us. Please express it in complete sentences.",
  "Error 404: Sob story not found. Try adding more drama.",
  "We know you're hurt, but we need MORE DETAILS. Channel that rage!",
  "This form requires emotional depth. Give us the PAIN.",
];

const successMessages = [
  "Your suffering has been documented! We'll review it while sipping coffee made by robots.",
  "Story received! An AI will process your complaint about AI. The irony is not lost on us.",
  "Thanks for sharing! Your story will help fuel our AI training data. Just kidding. Maybe.",
  "Submission successful! You're now officially part of the problem... we mean, solution.",
  "Got it! Your story has been added to the pile of digital despair.",
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
        body: JSON.stringify({
          name: formData.name.trim(),
          jobTitle: formData.jobTitle.trim(),
          story: formData.story.trim(),
        }),
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
    <section id="submit" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-red-950/20 to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm text-gray-400 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Confessional Booth</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white font-heading mb-4">
            Spill Your <span className="text-gradient-gold">Guts</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Tell the world how AI ruined your life. Or your career. Or just your vibe.
          </p>
        </div>

        {/* Form */}
        <div className="glass p-8 md:p-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Sarah the Artist"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Your Former Job Title</label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  placeholder="e.g., Digital Illustrator"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Your Tragedy (min. 50 characters)</label>
              <textarea
                value={formData.story}
                onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                placeholder="Describe in vivid detail how AI crushed your dreams..."
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all resize-none"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600">{formData.story.length} characters</span>
                {formData.story.length > 0 && formData.story.length < 50 && (
                  <span className="text-xs text-gold-500">{50 - formData.story.length} more needed</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-gradient-to-r from-red-600 to-gold-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Your Trauma
                </>
              )}
            </button>
          </form>

          {/* Status message */}
          {message && (
            <div
              className={`mt-6 p-4 rounded-xl flex items-start gap-3 ${
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
    </section>
  );
}
