export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black tracking-tight mb-4">NEG-AI-TIVE</h3>
            <p className="text-xs font-mono text-black/50 leading-relaxed mb-4">
              Awareness project documenting the real-world harms of AI.
            </p>
            <div className="text-[10px] font-mono text-black/30 border border-black/10 inline-block px-2 py-1">
              100% AI-Generated Site
            </div>
          </div>

          {/* Issue Briefs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Issue Briefs</h4>
            <ul className="space-y-2">
              {[
                '/datacentres', '/deepfakes', '/chatbots', '/jobs',
                '/ai-psychosis', '/algorithms', '/actual-intelligence',
                '/copyright', '/engage-attach',
              ].map((href) => (
                <li key={href}>
                  <a href={href} className="text-xs font-mono text-black/50 hover:text-black transition-colors">{href}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Info</h4>
            <ul className="space-y-2">
              <li><a href="/legal" className="text-xs font-mono text-black/50 hover:text-black transition-colors">Legal</a></li>
              <li><a href="/sitemap.xml" className="text-xs font-mono text-black/50 hover:text-black transition-colors">Sitemap</a></li>
              <li><a href="/llms.txt" className="text-xs font-mono text-black/50 hover:text-black transition-colors">LLMs.txt</a></li>
            </ul>
          </div>

          {/* Share */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Share</h4>
            <div className="flex gap-2 mb-4">
              {/* X/Twitter */}
              <a
                href="https://twitter.com/intent/tweet?text=NEG-AI-TIVE%20%E2%80%94%20The%20hidden%20cost%20of%20artificial%20intelligence&url=https://negaitive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border-2 border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                aria-label="Share on X"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://negaitive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border-2 border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Copy link */}
              <button
                onClick={() => { navigator.clipboard.writeText('https://negaitive.com'); }}
                className="w-8 h-8 border-2 border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                aria-label="Copy link"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </button>
            </div>
            <p className="text-xs font-mono text-black/40 leading-relaxed">
              Help us go viral so we can afford rent. Or not. We're doomed anyway.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-black/30">
            &copy; {currentYear} neg-AI-tive. All rights reserved. None of them matter anyway.
          </p>
          <p className="text-[10px] font-mono text-black/30">
            Made with existential dread
          </p>
        </div>
      </div>
    </footer>
  );
}
