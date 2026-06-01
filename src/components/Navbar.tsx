import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const issueBriefs = [
  { label: 'AI Data Centres', href: '/datacentres' },
  { label: 'Scammed by Deepfake', href: '/deepfakes' },
  { label: 'Chatbot Stole My Child', href: '/chatbots' },
  { label: 'My Job Was Automated', href: '/jobs' },
  { label: 'AI Psychosis', href: '/ai-psychosis' },
  { label: 'Algorithmic Angst', href: '/algorithms' },
  { label: 'Actual Intelligence', href: '/actual-intelligence' },
  { label: 'AI Made This Design', href: '/copyright' },
  { label: 'Designed to Hook You', href: '/engage-attach' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (hash click)
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white border-b-2 border-black' : 'bg-white border-b border-black/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="font-heading text-2xl tracking-tight no-underline text-black">
          NEG-AI-TIVE
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Issue Briefs dropdown */}
          <div className="relative group">
            <button className="text-xs font-bold uppercase tracking-[0.15em] text-black/60 hover:text-black transition-colors py-2">
              Issue Briefs ▾
            </button>
            <div className="absolute right-0 top-full mt-1 w-56 bg-white border-2 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-1">
                {issueBriefs.map((brief) => (
                  <a
                    key={brief.href}
                    href={brief.href}
                    className="block px-4 py-2 text-xs font-mono text-black/70 hover:bg-black hover:text-white transition-colors no-underline"
                  >
                    {brief.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/legal" className="text-xs font-bold uppercase tracking-[0.15em] text-black/60 hover:text-black transition-colors no-underline">
            Legal
          </a>
          <a href="/scorecard" className="text-xs font-bold uppercase tracking-[0.15em] bg-black text-white px-3 py-1.5 hover:bg-gray-900 transition-colors no-underline">
            Scorecard
          </a>
          <a href="/action" className="text-xs font-bold uppercase tracking-[0.15em] bg-black text-white px-3 py-1.5 hover:bg-gray-900 transition-colors no-underline">
            Act
          </a>
          <a href="/screwed" className="text-xs font-bold uppercase tracking-[0.15em] bg-black text-white px-3 py-1.5 hover:bg-gray-900 transition-colors no-underline">
            Quiz
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-black" />
          ) : (
            <Menu className="w-5 h-5 text-black" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-black">
          <div className="px-6 py-4 space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-2 pt-2">
              Issue Briefs
            </p>
            {issueBriefs.map((brief) => (
              <a
                key={brief.href}
                href={brief.href}
                onClick={handleNavClick}
                className="block py-2 text-sm font-mono text-black/80 hover:text-black no-underline"
              >
                {brief.label}
              </a>
            ))}
            <div className="border-t border-black/10 my-3 pt-3">
              <a
                href="/legal"
                onClick={handleNavClick}
                className="block py-2 text-xs font-bold uppercase tracking-[0.15em] text-black/60 hover:text-black no-underline"
              >
                Legal
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
