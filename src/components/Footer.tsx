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
