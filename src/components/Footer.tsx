import { Twitter, Facebook, Share2, Bot, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black text-gradient font-heading mb-4">NEG-AI-TIVE</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              A satirical monument to the negative impacts of AI, outdated, or just generally annoyed by artificial intelligence.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Bot className="w-4 h-4" />
              <span className="font-mono">100% AI-Generated Site</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-heading">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: 'Horror Stories', href: '#stories' },
                { label: 'Submit Story', href: '#submit' },
                { label: 'Newsletter', href: '#newsletter' },
                { label: 'Legal', href: '/legal' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 font-heading">Issue Briefs</h4>
            <ul className="space-y-2">
              {[
                { label: 'AI Data Centres', href: '/datacentres' },
                { label: 'Scammed by Deepfake', href: '/deepfakes' },
                { label: 'Chatbot Stole My Child', href: '/chatbots' },
                { label: 'My Job Was Automated', href: '/jobs' },
                { label: 'AI Psychosis', href: '/ai-psychosis' },
                { label: 'Algorithmic Angst', href: '/algorithms' },
                { label: 'Actual Intelligence', href: '/actual-intelligence' },
                { label: 'AI Made This Design', href: '/copyright' },
                { label: 'Designed to Hook You', href: '/engage-attach' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Share */}
          <div>
            <h4 className="text-white font-bold mb-4 font-heading">Share the Pain</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://twitter.com/intent/tweet?text=I%20got%20screwed%20by%20AI%20and%20all%20I%20got%20was%20this%20website&url=https://negaitive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/30 transition-all duration-300"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://negaitive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-700/20 hover:border-blue-600/30 transition-all duration-300"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400" />
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Neg-AI-tive',
                      text: 'Check out this hilarious site about AI taking over everything',
                      url: window.location.href,
                    });
                  }
                }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/30 transition-all duration-300"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <p className="text-xs text-gray-600">
              Help us go viral so we can afford rent. Or not. We're doomed anyway.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Neg-AI-tive. All rights reserved. None of them matter anyway.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and existential dread</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
