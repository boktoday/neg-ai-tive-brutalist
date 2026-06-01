import { ExternalLink, Globe, FileText, Shield, Flag, Users, AlertTriangle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';

const regions = [
  {
    id: 'global',
    label: 'Global',
    icon: Globe,
    items: [
      { title: 'AI Incident Database', url: 'https://incidentdatabase.ai/', desc: 'Report and browse real-world AI failures, harms, and near-misses.' },
      { title: 'Future of Life Institute — AI Pause Petition', url: 'https://futureoflife.org/ai-pause/', desc: 'Open letter calling for a pause on giant AI experiments. 33,000+ signatories.' },
      { title: 'AlgorithmWatch', url: 'https://algorithmwatch.org/', desc: 'Investigative journalism and advocacy for algorithmic accountability worldwide.' },
      { title: 'Access Now — AI & Human Rights', url: 'https://www.accessnow.org/ai-human-rights/', desc: 'Global advocacy for AI systems that respect human rights and civil liberties.' },
      { title: 'AI Now Institute', url: 'https://ainowinstitute.org/', desc: 'Research institute examining the social implications of AI systems.' },
    ],
  },
  {
    id: 'us',
    label: 'United States',
    icon: Shield,
    items: [
      { title: 'FTC — Report AI Fraud', url: 'https://reportfraud.ftc.gov/', desc: 'Report AI-powered scams, deepfake fraud, and deceptive AI practices to the FTC.' },
      { title: 'FBI IC3 — Cyber Crime Complaints', url: 'https://www.ic3.gov/', desc: 'File a complaint about AI-enabled cybercrime, voice cloning scams, and digital fraud.' },
      { title: 'Electronic Frontier Foundation (EFF)', url: 'https://www.eff.org/issues/ai', desc: 'Leading digital rights org fighting for algorithmic transparency and accountability.' },
      { title: 'Center for AI and Digital Policy', url: 'https://www.caidp.org/', desc: 'Policy advocacy for responsible AI. Submit comments on federal AI rulemakings.' },
      { title: 'White House — AI.gov', url: 'https://ai.gov/', desc: 'US government AI policy hub. Track executive orders and federal AI regulations.' },
    ],
  },
  {
    id: 'uk',
    label: 'United Kingdom',
    icon: Flag,
    items: [
      { title: 'ICO — Report AI Data Breach', url: 'https://ico.org.uk/make-a-complaint/', desc: 'Report AI systems misusing personal data to the UK Information Commissioner\'s Office.' },
      { title: 'UK AI Safety Institute', url: 'https://www.aisi.gov.uk/', desc: 'Government body researching AI risks. Public consultations open for submissions.' },
      { title: 'Alan Turing Institute — Policy Hub', url: 'https://www.turing.ac.uk/research/interest-groups/ai-ethics', desc: 'UK\'s national AI institute. Publishes policy briefs and ethics guidelines.' },
      { title: 'Parliament — AI Petitions', url: 'https://petition.parliament.uk/', desc: 'Search and sign UK government petitions related to AI regulation and worker protections.' },
      { title: 'Trades Union Congress — AI at Work', url: 'https://www.tuc.org.uk/research-analysis/reports/ai-and-work', desc: 'Union-led campaign for worker protections against AI-driven job displacement.' },
    ],
  },
  {
    id: 'eu',
    label: 'European Union',
    icon: Globe,
    items: [
      { title: 'EU AI Act — Citizen Complaint', url: 'https://artificialintelligenceact.eu/complaints/', desc: 'Submit complaints under the EU AI Act about high-risk AI systems violating your rights.' },
      { title: 'EDPB — AI Enforcement', url: 'https://edpb.europa.eu/', desc: 'European Data Protection Board. Coordinating AI enforcement across EU member states.' },
      { title: 'European Citizen\'s Initiative', url: 'https://eci.ec.europa.eu/', desc: 'Propose or support EU-wide citizen initiatives on AI regulation and digital rights.' },
      { title: 'Algorithmic Justice League Europe', url: 'https://www.ajl.org/', desc: 'Campaigning against bias in AI systems across European Union member states.' },
      { title: 'BEUC — European Consumer Rights', url: 'https://www.beuc.eu/artificial-intelligence', desc: 'European consumer organisation advocating for safe and fair AI systems.' },
    ],
  },
  {
    id: 'asia',
    label: 'Asia Pacific',
    icon: Users,
    items: [
      { title: 'AI for Good — UN ESCAP', url: 'https://www.unescap.org/our-work/ict-disaster-risk-reduction/ai', desc: 'UN Economic and Social Commission for Asia-Pacific. AI governance resources.' },
      { title: 'Digital Rights Asia Pacific', url: 'https://www.digitalrights.asia/', desc: 'Coalition of digital rights organisations across the Asia-Pacific region.' },
      { title: 'Japan — AI Governance Report', url: 'https://www8.cao.go.jp/cstp/ai/ai.html', desc: 'Submit public comments on Japan\'s AI governance framework (in Japanese and English).' },
      { title: 'India — NITI Aayog AI Policy', url: 'https://www.niti.gov.in/ai-strategy', desc: 'India\'s national AI strategy portal. Public consultation and policy documents.' },
      { title: 'South Korea — AI Ethics Charter', url: 'https://www.msit.go.kr/', desc: 'Ministry of Science and ICT. Submit petitions on AI regulation in South Korea.' },
    ],
  },
  {
    id: 'au',
    label: 'Australia',
    icon: AlertTriangle,
    items: [
      { title: 'eSafety Commissioner — Report Harm', url: 'https://www.esafety.gov.au/report', desc: 'Report AI-generated harmful content, deepfake abuse, and cyberbullying. Protects children.' },
      { title: 'ACCC — Report AI Scams', url: 'https://www.accc.gov.au/contact-us/report-a-scam', desc: 'Report AI-enabled scams, voice cloning fraud, and deceptive AI marketing to the ACCC.' },
      { title: 'OAIC — Privacy Complaint', url: 'https://www.oaic.gov.au/privacy/privacy-complaints/', desc: 'Lodge a complaint if an AI system has mishandled your personal information.' },
      { title: 'Parliament of Australia — Petitions', url: 'https://www.aph.gov.au/Parliamentary_Business/Petitions', desc: 'Submit petitions to the Australian Parliament on AI regulation and digital rights.' },
      { title: 'CSIRO — AI Roadmap Consultation', url: 'https://www.csiro.au/en/research/technology-space/ai/AI-Roadmap', desc: 'Australia\'s national science agency. Public submissions on AI policy and research priorities.' },
      { title: 'Human Rights Commission — AI & Rights', url: 'https://humanrights.gov.au/our-work/rights-and-freedoms/artificial-intelligence', desc: 'Submit concerns about AI systems impacting human rights in Australia.' },
    ],
  },
];

export default function Action() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Flag className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">Take Action</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]">
            What Can<br />
            <span className="text-black">You Do?</span>
          </h1>
          <div className="w-16 h-1 bg-black mb-6" />
          <p className="font-mono text-sm text-black/60 max-w-2xl leading-relaxed mb-4">
            Knowledge without action is just entertainment. Here are real organisations, regulators, 
            and petition platforms where you can report harms, submit policy feedback, and push for change.
          </p>
          <p className="font-mono text-xs text-black/40">
            Verified as of June 2026. Links open in new tabs.
          </p>
        </div>
      </section>

      {/* Regions */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {regions.map((region) => {
            const Icon = region.icon;
            return (
              <div key={region.id}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5" />
                  <h2 className="text-lg font-bold tracking-tight">{region.label}</h2>
                  <div className="flex-1 h-[1px] bg-black/10" />
                </div>
                <div className="space-y-2">
                  {region.items.map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-black/10 p-4 hover:bg-black/[0.02] transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1 min-w-0">
                          <h3 className="text-sm font-bold group-hover:underline">{item.title}</h3>
                          <p className="text-xs font-mono text-black/50 leading-relaxed">{item.desc}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-black/30 shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Simple petition */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-black p-8 text-center">
            <AlertTriangle className="w-8 h-8 mx-auto mb-4" />
            <h2 className="text-2xl font-heading mb-3">Add Your Voice</h2>
            <p className="font-mono text-sm text-black/60 max-w-xl mx-auto mb-6">
              The most powerful action you can take right now is to share this information. 
              Send an issue brief to your local MP. Post a result from the quiz. 
              The awareness gap is the biggest barrier to regulation.
            </p>
            <a
              href="https://twitter.com/intent/tweet?text=The%20hidden%20cost%20of%20AI%20is%20real.%20Data%20centres%20consuming%20water%20in%20droughts.%20Chatbots%20driving%20teen%20suicides.%20Deepfakes%20stealing%20billions.%20Read%20the%20evidence%20at%20negaitive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-900 transition-colors"
            >
              Share on X →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono text-black/30">Links were verified at time of writing. Some may change. Always check official sources.</p>
        </div>
      </footer>
    </div>
  );
}
