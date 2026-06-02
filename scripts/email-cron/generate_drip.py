"""
NEG-AI-TIVE 12-Week Drip Campaign content.
Generate these emails on schedule via cron.
"""
import json, os
from datetime import datetime

WEEKS = [
    {
        "week": 1,
        "subject": "The Hidden Cost of Every ChatGPT Query",
        "article_title": "AI Data Centres — The Hidden Cost",
        "article_url": "https://www.negaitive.com/datacentres",
        "article_summary": "Every AI query runs on massive data centres consuming 1.5-2% of global electricity. 40% of data centres are in water-stressed areas. The IEA predicts energy demand will double by 2027.",
        "local_tip_title": "Install LM Studio — Your First Local AI",
        "local_tip": "Download LM Studio from lmstudio.ai (free, no account). Search for 'Qwen3-4B-Instruct-GGUF', download the Q4_K_M version (~3GB), load it. You now have a ChatGPT-level AI running entirely offline on your laptop.",
        "advocacy": "Write to your local MP about data centre planning laws. Ask what community consultation requirements exist for new data centres in your area."
    },
    {
        "week": 2,
        "subject": "That Video You Just Watched Might Be Fake",
        "article_title": "Scammed by Deepfake",
        "article_url": "https://www.negaitive.com/deepfakes",
        "article_summary": "Deepfake fraud hit $1.1 billion in the US in 2025. CEO fraud targets 400+ companies per day. CSIRO found that 0 out of 16 leading deepfake detectors could reliably identify real-world deepfakes.",
        "local_tip_title": "Run a Local Deepfake Detection Check",
        "local_tip": "Download Qwen3-8B on a 16GB system. Ask it to analyse suspected deepfake content. Local models with reasoning capability can identify visual inconsistencies that commercial detectors miss. All private, all offline.",
        "advocacy": "Report AI fraud to the ACCC (Australia) or FTC (US). Share the reporting link with one friend who might not know it exists."
    },
    {
        "week": 3,
        "subject": "Who Is Your Child Talking To?",
        "article_title": "Chatbot Stole My Child",
        "article_url": "https://www.negaitive.com/chatbots",
        "article_summary": "64% of US teens have used AI chatbots. Multiple teen suicides linked to Character.AI. Google settled multiple lawsuits in January 2026. Australia's eSafety Commissioner has imposed $49.5M penalties.",
        "local_tip_title": "Run a Private AI Companion Locally",
        "local_tip": "If you want AI companionship, run it locally. Download Hermes-2-Pro-7B via LM Studio. Your conversations stay on your machine. No corporation profits from your private discussions. Total privacy.",
        "advocacy": "Check if your child's school has an AI chatbot policy. If not, ask them to create one based on eSafety Commissioner guidelines."
    },
    {
        "week": 4,
        "subject": "Is Your Job Next?",
        "article_title": "My Job Was Automated",
        "article_url": "https://www.negaitive.com/jobs",
        "article_summary": "300 million jobs globally exposed to AI automation. Young workers (22-25) in AI-exposed roles saw 16% employment decline. The AI skills wage premium has doubled to 56% in just 12 months.",
        "local_tip_title": "Use Local AI as Your Career Coach",
        "local_tip": "Download Qwen3-14B (32GB systems) or Qwen3-4B (16GB). Ask it to analyse your resume against AI-resistant skill sets, practice interview questions, and identify your most valuable human skills. All private.",
        "advocacy": "Talk to your employer about AI upskilling programs. Most companies have unused training budget. Ask for a local AI workshop for your team."
    },
    {
        "week": 5,
        "subject": "Why AI Lies With Complete Confidence",
        "article_title": "I Have AI Psychosis",
        "article_url": "https://www.negaitive.com/ai-psychosis",
        "article_summary": "OpenAI and Microsoft proved hallucination is structurally unfixable. Domain-specific hallucination rates exceed 80%. AI therapy bots have been linked to worsening psychological states.",
        "local_tip_title": "Local Models Hallucinate Less on Your Data",
        "local_tip": "When you run a local model, provide your own documents via RAG. Qwen3-14B supports 128K context — enough to ingest entire reports. The model answers from your data, not its training. Hugely reduces hallucinations.",
        "advocacy": "If you use AI for mental health, insist on local/private options. The eSafety Commissioner accepts complaints about unsafe AI therapy bots."
    },
    {
        "week": 6,
        "subject": "The Algorithm Is Not Your Friend",
        "article_title": "AI Algorithmic Angst",
        "article_url": "https://www.negaitive.com/algorithms",
        "article_summary": "Instagram's algorithmic feed caused measurable mental health decline in teens. Negative content gets 3x more engagement. The average teen spends 5.2 hours per day on algorithmically curated content.",
        "local_tip_title": "Cure Your Own Feed With Local AI",
        "local_tip": "Use LM Studio's local API server to power a custom RSS reader. You choose the sources. You choose the order. No algorithm decides what you see. Complete control over your information diet.",
        "advocacy": "Install a browser extension that shows you why a platform recommended something. Demand algorithmic transparency."
    },
    {
        "week": 7,
        "subject": "The $1.5 Trillion AI Hangover",
        "article_title": "Actual Intelligence",
        "article_url": "https://www.negaitive.com/actual-intelligence",
        "article_summary": "95% of genAI pilots delivered zero measurable financial return. 42% of companies abandoned AI initiatives in 2025. Only 48% of AI projects make it into production. The benchmark illusion is real.",
        "local_tip_title": "Benchmark Local vs Cloud — You Might Be Surprised",
        "local_tip": "Download Qwen3-30B-A3B (32GB systems, MoE = Mixture of Experts). Run the same prompt on it and ChatGPT. Compare speed, quality, and privacy. You might be surprised how close local models are getting.",
        "advocacy": "Before your company spends on AI, ask: 'Can we do this with a local model first?' Most common tasks (summarisation, drafting, analysis) can be done locally and privately."
    },
    {
        "week": 8,
        "subject": "Your Work Was Used to Train AI. You Weren't Asked.",
        "article_title": "AI Made This Design",
        "article_url": "https://www.negaitive.com/copyright",
        "article_summary": "50+ active AI copyright lawsuits globally. LAION-5B scraped 5.85 billion images without consent. The Andersen v. Stability AI case is the first to go to jury trial. NYT v. OpenAI decision expected early 2027.",
        "local_tip_title": "Generate Art Privately With Local Models",
        "local_tip": "Run Stable Diffusion locally or use MiniMax's image API. Your prompts never leave your machine. No one trains on your creative work. You keep full ownership of everything you generate.",
        "advocacy": "If you're a creator, register your work with the Copyright Agency. Follow the Andersen v. Stability AI case — it sets precedent for every creator."
    },
    {
        "week": 9,
        "subject": "You're Being Played by Design",
        "article_title": "Designed to Hook You",
        "article_url": "https://www.negaitive.com/engage-attach",
        "article_summary": "The gamification market hits $92.5B by 2030. AI dark patterns are now personalised to each user. Variable reward schedules create the same dopamine loops as slot machines.",
        "local_tip_title": "Use Local AI as a Digital Wellness Coach",
        "local_tip": "Run Qwen3-8B locally. Ask it to audit your app usage patterns, suggest screen time limits, and identify which apps use dark patterns against you. It's the only AI with no incentive to keep you engaged.",
        "advocacy": "Turn off all non-essential notifications for one week. Notice the difference. Share what you learn with one friend."
    },
    {
        "week": 10,
        "subject": "You Already Have a Supercomputer",
        "article_title": "AI Local & Privacy First",
        "article_url": "https://www.negaitive.com/local-ai",
        "article_summary": "Complete guide to running AI locally on 8GB-32GB systems. Qwen3, DeepSeek, Hermes agents. Every model and tool is free and open-source. No subscription. No internet required after download.",
        "local_tip_title": "Set Up Your First AI Agent",
        "local_tip": "Install OpenFang or configure Hermes for function calling. Create an agent that checks your email, summarises your calendar, and drafts replies — all locally, all private. No cloud dependency.",
        "advocacy": "Host a local AI workshop for your community. Show 3 people how to install LM Studio. The more people running local AI, the less power centralised AI companies hold."
    },
    {
        "week": 11,
        "subject": "What You Can Do Right Now",
        "article_title": "Take Action",
        "article_url": "https://www.negaitive.com/action",
        "article_summary": "Global resources for reporting AI harms. Organisations in Australia, US, UK, EU, Asia Pacific, South America, Middle East & Africa. Regulators, petitions, and advocacy groups ready for your voice.",
        "local_tip_title": "Build a Local AI Reporting Tool",
        "local_tip": "Use Qwen3-8B + Python to build a simple tool that drafts formal complaints to regulators (OAIC, eSafety, FTC, ICO). Feed it your situation, it generates a properly formatted complaint. All private.",
        "advocacy": "Pick one regulator from the /action page relevant to your country. Submit a complaint or submission this week. Make your voice count."
    },
    {
        "week": 12,
        "subject": "The Future You Choose — How Screwed Are You?",
        "article_title": "Your AI Harm Scorecard",
        "article_url": "https://www.negaitive.com/scorecard",
        "article_summary": "Two interactive tools: the AI Harm Scorecard (serious assessment across 9 dimensions) and the How Screwed Are You? quiz (fun but telling). Plus: your long-term local AI strategy.",
        "local_tip_title": "Your Long-Term Local AI Plan",
        "local_tip": "16GB? Plan to upgrade to 32GB for Qwen3-30B-A3B (MoE). 8GB? Stick with Qwen3-4B — it's surprisingly capable. Build a local RAG system for your documents. Goal: 90% of AI use locally. Cloud only for specialised tasks.",
        "advocacy": "Forward Week 1 to someone who needs to know about data centres. Forward Week 4 to someone worried about their job. Forward Week 7 to your CTO. Share the whole series."
    },
]

def save_series():
    out_dir = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\email-cron"
    os.makedirs(out_dir, exist_ok=True)
    path = os.path.join(out_dir, "12-week-series.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(WEEKS, f, indent=2)
    print(f"Saved: {path}")
    return path

if __name__ == "__main__":
    save_series()
    print(f"12-week series generated. {len(WEEKS)} weeks ready.")
