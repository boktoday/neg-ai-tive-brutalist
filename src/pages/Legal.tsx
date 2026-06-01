import { ArrowLeft, Scale, Shield, AlertTriangle } from 'lucide-react';

export default function Legal() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-black">
              <span className="text-red-500">NEG-AI-TIVE</span>
            </span>
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-sm text-gray-400 rounded-full mb-6">
            <Scale className="w-4 h-4 text-red-400" />
            <span>Legal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
            Terms &<br />
            <span className="text-gradient">Privacy</span>
          </h1>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Disclaimer */}
          <div className="glass p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center shrink-0 border border-white/5">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-heading">Disclaimer</h2>
                <div className="text-gray-400 leading-relaxed space-y-3">
                  <p>
                    <strong className="text-white">NEG-AI-TIVE is a satirical website.</strong> All victim stories, 
                    testimonials, and character accounts are works of fiction created for comedic and 
                    educational purposes. Any resemblance to actual persons, living or dead, or actual 
                    events is purely coincidental.
                  </p>
                  <p>
                    The issue briefs on this site cite validated research from academic institutions, 
                    government agencies, and news organisations. While we make every effort to ensure 
                    accuracy, the research landscape evolves rapidly. Readers should verify sources 
                    directly before drawing conclusions or making decisions based on this content.
                  </p>
                  <p>
                    This site does not provide medical, legal, or financial advice. If you or someone 
                    you know is experiencing suicidal thoughts, self-harm, or a mental health crisis, 
                    please contact Lifeline Australia on <strong className="text-white">13 11 14</strong> 
                    or Beyond Blue on <strong className="text-white">1300 22 4636</strong>.
                  </p>
                  <p>
                    Merchandise is provided via Printful, a third-party print-on-demand service. 
                    NEG-AI-TIVE is not responsible for production quality, shipping times, or 
                    fulfilment issues — these are handled entirely by Printful.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="glass p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600/20 to-yellow-600/20 flex items-center justify-center shrink-0 border border-white/5">
                <Scale className="w-6 h-6 text-amber-400" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-heading">Terms of Use</h2>
                <div className="text-gray-400 leading-relaxed space-y-3">
                  <p>
                    By accessing this website, you agree to the following terms:
                  </p>
                  <p>
                    <strong className="text-white">1. Satirical Nature.</strong> This website is a 
                    satirical project. Content is provided for entertainment and educational purposes. 
                    Do not take the victim stories, slogans, or merchandise descriptions as factual 
                    accounts of real events.
                  </p>
                  <p>
                    <strong className="text-white">2. Intellectual Property.</strong> All design files, 
                    slogans, page content, and creative works on this site are original creations 
                    (with AI assistance). The merchandise designs are our original works. You may not 
                    reproduce, redistribute, or resell our designs without explicit permission.
                  </p>
                  <p>
                    <strong className="text-white">3. User-Submitted Content.</strong> By submitting a 
                    story through our submission form, you grant us a non-exclusive, royalty-free license 
                    to display your submission on this website and associated social media. 
                    Submissions may be edited for length and clarity. We reserve the right to 
                    remove or decline any submission.
                  </p>
                  <p>
                    <strong className="text-white">4. Third-Party Services.</strong> Our newsletter 
                    subscription, merchandise store, and certain other features are powered by third-party 
                    services (Activepieces, Printful, Vercel). Your use of those services is subject 
                    to their respective terms and privacy policies.
                  </p>
                  <p>
                    <strong className="text-white">5. No Guarantees.</strong> This site is provided 
                    "as is" without any warranties, express or implied. We do not guarantee 
                    uninterrupted access, accuracy of information, or that the site will be free 
                    from errors or harmful code.
                  </p>
                  <p>
                    <strong className="text-white">6. Changes.</strong> We reserve the right to update 
                    these terms at any time. Continued use of the site after changes constitutes 
                    acceptance of the updated terms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="glass p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center shrink-0 border border-white/5">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-heading">Privacy Policy</h2>
                <div className="text-gray-400 leading-relaxed space-y-3">
                  <p>
                    <strong className="text-white">Last updated:</strong> June 2026
                  </p>
                  <p>
                    <strong className="text-white">Data We Collect.</strong> We collect minimal data:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong className="text-white">Email addresses</strong> — only if you subscribe to our newsletter (via Activepieces webhook)</li>
                    <li><strong className="text-white">Story submissions</strong> — name, job title, and story content (via webhook)</li>
                    <li><strong className="text-white">Anonymous analytics</strong> — one-dollar-stats tracking (page views only, no personal data)</li>
                  </ul>
                  <p className="mt-3">
                    <strong className="text-white">What We Don't Collect.</strong> We do not use cookies 
                    for tracking, do not collect IP addresses, do not use fingerprinting, and do not 
                    sell any user data.
                  </p>
                  <p>
                    <strong className="text-white">Third-Party Data Handling.</strong> Newsletter 
                    subscriptions go through Activepieces. Merchandise purchases go through Printful 
                    (their checkout, their privacy policy). Website hosting via Vercel. Each of these 
                    services has its own privacy policy governing how they handle your data.
                  </p>
                  <p>
                    <strong className="text-white">Your Rights.</strong> You may request deletion of 
                    your submitted data at any time by emailing us. Newsletter subscribers can 
                    unsubscribe via the link in every email.
                  </p>
                  <p>
                    <strong className="text-white">Contact.</strong> For privacy-related inquiries, 
                    please reach out through our site or raise an issue on our GitHub repository.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p>Part of the <a href="/" className="text-red-400 hover:text-red-300">NEG-AI-TIVE</a> awareness project.</p>
        </div>
      </footer>
    </div>
  );
}
