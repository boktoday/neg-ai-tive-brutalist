import { ExternalLink, BookOpen, FileText, Scale, Palette, ArrowLeft, Image, Music } from 'lucide-react';
import Navbar from '../components/Navbar';
import AudioPlayer from '../components/AudioPlayer';

const stats = [
  { icon: Scale, value: "4B+", label: "images at stake in Andersen v. Stability class action (2026)", color: "from-red-600/20 to-orange-600/20", iconColor: "text-red-400" },
  { icon: FileText, value: "50+", label: "active copyright lawsuits against AI companies globally", color: "from-purple-600/20 to-pink-600/20", iconColor: "text-purple-400" },
  { icon: BookOpen, value: "250K+", label: "books illegally pirated for AI training (Anthropic ruling 2025)", color: "from-amber-600/20 to-yellow-600/20", iconColor: "text-amber-400" },
  { icon: Music, value: "2", label: "different countries' rulings — on opposite sides of fair use (2025)", color: "from-blue-600/20 to-cyan-600/20", iconColor: "text-blue-400" },
];

const sources = [
  {
    title: "AI Copyright Lawsuits for Authors & Publishers — 2026 Tracker",
    org: "Manuscript Report",
    url: "https://manuscriptreport.com/data/ai-copyright-lawsuits",
    date: "2026",
    summary: "50+ active lawsuits mapped. Getty v. Stability AI (UK): model weights ruled not 'copies'. NYT v. OpenAI: fair use question pending. Andersen v. Stability: seeking class cert for 4B images."
  },
  {
    title: "Getty Images v. Stability AI — UK High Court Ruling",
    org: "High Court of England and Wales / Latham & Watkins",
    url: "https://www.lw.com/en/insights/getty-images-v-stability-ai-english-high-court-rejects-secondary-copyright-claim",
    date: "Nov 2025",
    summary: "Court ruled AI model weights are not 'infringing copies'. But found trademark infringement where outputs reproduced Getty watermarks. Getty granted appeal Dec 2025. Damages phase ongoing."
  },
  {
    title: "NYT v. OpenAI — Full 2026 Status and Analysis",
    org: "LawFold / NYT / S.D.N.Y.",
    url: "https://lawfold.com/nyt-openai-lawsuit-update-today",
    date: "2026",
    summary: "Most watched AI copyright case. Discovery closing. Summary judgment motions expected late 2026. Outcome will set precedent for fair use in AI training across the entire industry."
  },
  {
    title: "AI Copyright Wars 2026 — Andersen v. Stability, Anthropic Settlement",
    org: "BirJob Legal Analysis",
    url: "https://www.birjob.com/blog/ai-copyright-wars-2026",
    date: "2026",
    summary: "Andersen v. Stability first AI copyright case to go to jury (Q3 2026). Anthropic ruling: pirated books not fair use, but lawfully acquired books were transformative fair use. Mixed signals."
  },
  {
    title: "Getty Images statement on UK ruling — November 2025",
    org: "Getty Images Newsroom",
    url: "https://newsroom.gettyimages.com/en/getty-images/getty-images-issues-statement-on-ruling-in-stability-ai-uk-litigation",
    date: "Nov 2025",
    summary: "Getty's statement: Court confirmed copyright works were used to train Stable Diffusion. Ruling established intangible AI models subject to copyright claims. Getty pursuing US case."
  },
  {
    title: "Is Generative AI Fair Use of Copyright Works? NYT v. OpenAI",
    org: "Kluwer Copyright Blog",
    url: "https://legalblogs.wolterskluwer.com/copyright-blog/is-generative-ai-fair-use-of-copyright-works-nyt-v-openai",
    date: "2026",
    summary: "Central legal question: Is AI training on copyrighted works 'fair use'? Google Books was ruled fair use. But AI training is fundamentally different — it creates competing products that substitute for originals."
  },
  {
    title: "GEMA v. OpenAI — Munich Regional Court Ruling",
    org: "GEMA / German Courts / Chambers and Partners",
    url: "https://chambers.com/articles/copyright-and-ai-remain-in-focus-for-2026-with-getty-appeal-given-the-green-light",
    date: "Nov 2025",
    summary: "German court ruled against OpenAI, finding AI training on song lyrics infringed copyright. Sets EU on diverging path from UK and US on training data copyright."
  },
  {
    title: "Disney & Universal v. Midjourney — Hollywood Enters the Fray",
    org: "U.S. District Court / McKool Smith",
    url: "https://www.mckoolsmith.com/newsroom-ailitigation-41",
    date: "2025–2026",
    summary: "Disney and Universal sued Midjourney for generating unlicensed likenesses of copyrighted characters. First major Hollywood studio lawsuit against AI image generation."
  },
  {
    title: "New York Times v. OpenAI — Original Complaint",
    org: "The New York Times / S.D.N.Y.",
    url: "https://www.nytimes.com/2023/12/27/business/media/new-york-times-open-ai-microsoft-lawsuit.html",
    date: "Dec 2023 / Ongoing",
    summary: "NYT sued OpenAI and Microsoft for using millions of articles to train AI chatbots that compete with the Times. Seeks billions in damages and destruction of models trained on its data."
  },
];

export default function Copyright() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      

            {/* Hero with anime bg */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="/designs/anime-bg/copyright.png" alt="" className="w-full h-full object-cover opacity-70" style={{ objectPosition: '50% 30%' }} />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6">
            <Palette className="w-4 h-4 text-red-400" />
            <span className="text-black/60">Issue Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            AI Made This<br />
            <span className="text-black font-heading">Design</span>
          </h1>
          <p className="text-base font-mono text-black/60 max-w-3xl leading-relaxed">
            Every AI model you've used was built on the backs of 
            <strong className="text-black"> millions of copyrighted works</strong> — books, articles, images, 
            music — scraped from the internet <strong className="text-black">without permission or payment</strong>. 
            The creators of those works are now fighting back in courts around the world, 
            and the outcome will determine whether AI is a tool that 
            <strong className="text-black">elevates human creativity</strong> or 
            <strong className="text-black">destroys the economic incentive to create</strong>.
          </p>

          {/* Audio player */}
          <div className="mt-8 max-w-xl">
            <AudioPlayer src="/audio/copyright-full.mp3" label="AI Made This Design — Full Page Audio" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`rounded-2xl bg-gradient-to-br ${stat.color} p-5 border border-white/5`}>
                  <Icon className={`w-8 h-8 ${stat.iconColor} mb-3`} />
                  <div className="text-3xl font-black mb-1 font-heading">{stat.value}</div>
                  <div className="text-xs font-mono text-black/50 leading-relaxed">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <IssueCard
            icon={BookOpen}
            title="The Largest Theft of Creative Work in History"
            iconGradient="from-red-600/20 to-orange-600/20"
            iconColor="text-red-400"
          >
            The LAION-5B dataset contains <strong className="text-black">5.85 billion image-text pairs</strong> 
            scraped from the internet. It's the training backbone of Stable Diffusion, Midjourney, and most 
            image-generation models. The dataset includes copyrighted artwork, photographs, and illustrations — 
            used <strong className="text-black">without consent, credit, or compensation</strong>.
            <br /><br />
            In June 2025, a US District Judge ruled that <strong className="text-black">Anthropic's use of 
            pirated copies</strong> of over 250,000 books (obtained from a dataset called The Pile) for AI 
            training was <strong className="text-black">not fair use</strong>. This was a landmark ruling. 
            But paradoxically, the same judge ruled that <strong className="text-black">lawfully acquired books</strong> 
            used for the same purpose <strong className="text-black">were</strong> fair use. And another judge 
            in the same district ruled the exact opposite for Meta. 
            The law is <strong className="text-black">completely unsettled</strong>.
          </IssueCard>

          <IssueCard
            icon={FileText}
            title="NYT v. OpenAI — The Case That Could Change Everything"
            iconGradient="from-purple-600/20 to-pink-600/20"
            iconColor="text-purple-400"
          >
            The <strong className="text-black">New York Times</strong> sued OpenAI and Microsoft in December 2023, 
            alleging that millions of its articles were used to train ChatGPT — which now 
            <strong className="text-black">competes directly with the Times</strong> as a source of information. 
            The suit seeks <strong className="text-black">billions of dollars in damages</strong> and demands that 
            OpenAI destroy any chatbot models and training data using NYT content.
            <br /><br />
            The central question: <strong className="text-black">Is AI training on copyrighted works "fair use"?</strong> 
            Google Books was ruled fair use because it didn't substitute for the originals. But AI training 
            is different — these models create competing products. If the NYT wins, it will force 
            <strong className="text-black">mandatory licensing</strong> for all training data. If OpenAI wins, 
            fair use covers AI training and the creative industry shifts to 
            <strong className="text-black">legislative strategy</strong>. Either way, the 
            <strong className="text-black">outcome is expected by early 2027</strong>.
          </IssueCard>

          <IssueCard
            icon={Image}
            title="Artists v. AI — 4 Billion Images at Stake"
            iconGradient="from-amber-600/20 to-yellow-600/20"
            iconColor="text-amber-400"
          >
            The <strong className="text-black">Andersen v. Stability AI</strong> case is the first AI copyright 
            case to go to a <strong className="text-black">jury trial</strong>, scheduled for Q3 2026. 
            Plaintiffs Sarah Andersen (comic artist), Kelly McKernan, and Karla Ortiz are seeking 
            <strong className="text-black">class certification covering an estimated 4 billion images</strong> 
            scraped from the web. If they win class certification, the settlement pressure on Stability AI 
            and any lab that trained on LAION-5B will be <strong className="text-black">enormous</strong>.
            <br /><br />
            In the UK, Getty Images sued Stability AI and won a partial victory in November 2025: the court 
            found that while the AI model weights themselves weren't "infringing copies," 
            <strong className="text-black">Stable Diffusion did reproduce Getty's watermarks</strong> in 
            outputs, constituting trademark infringement. Getty was granted leave to appeal the copyright 
            finding. <strong className="text-black">Disney and Universal</strong> have also entered the fray, 
            suing Midjourney for generating unlicensed likenesses of their copyrighted characters. 
            Hollywood is now watching.
          </IssueCard>

          <IssueCard
            icon={Scale}
            title="A Global Legal Patchwork"
            iconGradient="from-blue-600/20 to-cyan-600/20"
            iconColor="text-blue-400"
          >
            The legal landscape is a mess of <strong className="text-black">contradictory rulings</strong>:
            <br /><br />
            <strong className="text-black">Germany (Nov 2025)</strong>: GEMA v. OpenAI — court ruled AI training 
            on song lyrics infringed copyright. EU diverging from US.<br /><br />
            <strong className="text-black">UK (Nov 2025)</strong>: Getty v. Stability AI — model weights not 
            "copies" under UK law, but trademark infringement found. Appeal granted Dec 2025.<br /><br />
            <strong className="text-black">US (Jun 2025)</strong>: Anthropic ruling — pirated books not fair use; 
            lawfully acquired books were. Meta ruling in same district — opposite conclusion.<br /><br />
            <strong className="text-black">Australia</strong>: Copyright law under review by the Australian 
            Law Reform Commission. No AI-specific copyright legislation passed yet.
            <br /><br />
            Meanwhile, <strong className="text-black">50+ active lawsuits</strong> are pending globally. 
            Some companies (Axel Springer, AP, News Corp) have chosen to 
            <strong className="text-black">license their content</strong> rather than sue. But most creators 
            don't have that option. The fundamental question — <strong className="text-black">who owns the 
            right to train on your work?</strong> — remains unanswered.
          </IssueCard>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 tracking-[-0.02em]">
            Validated <span className="text-black font-heading">Research</span>
          </h2>
          <div className="space-y-3">
            {sources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass glass-hover p-5 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-white group-hover:text-gold-400 transition-colors">{src.title}</h3>
                    <p className="text-xs font-mono text-black/40">{src.org} &middot; {src.date}</p>
                    <p className="text-sm text-black/60 leading-relaxed font-mono text-sm">{src.summary}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-gold-400 shrink-0 mt-1 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p className="text-xs font-mono text-black/30">Part of the <a href="/" className="text-black underline">NEG-AI-TIVE</a> awareness project.</p>
          <p className="mt-1 text-xs font-mono text-black/20">Always verify sources directly. Research landscape evolves rapidly.</p>
        </div>
      </footer>
    </div>
  );
}

function IssueCard({ icon: Icon, title, children, iconGradient, iconColor }: {
  icon: any; title: string; children: React.ReactNode; iconGradient: string; iconColor: string;
}) {
  return (
    <div className="border-2 border-black/10 p-8 bg-white">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center shrink-0 border border-white/5`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="space-y-3">
          <h2 className="text-lg font-heading tracking-tight">{title}</h2>
          <p className="text-black/60 leading-relaxed font-mono text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
}
