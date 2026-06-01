"""Generate full page audio for Actual Intelligence with English_Resonant_Man."""
import os, requests
KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
def gen(text, page, voice):
    os.makedirs(OUT, exist_ok=True)
    print(f"Generating {page} with {voice} ({len(text)} chars)...")
    r = requests.post("https://api.minimax.io/v1/t2a_v2", headers={"Authorization": f"Bearer {KEY}","Content-Type":"application/json"}, json={"model":"speech-2.8-hd","text":text,"voice_setting":{"voice_id":voice,"speed":1.0,"vol":1.0,"pitch":0},"audio_setting":{"sample_rate":32000,"bitrate":128000,"format":"mp3","channel":1},"output_format":"hex"}, timeout=120)
    if r.status_code!=200: print(f"  HTTP Error: {r.text[:200]}"); return
    d=r.json()
    if d.get("base_resp",{}).get("status_code")!=0: print(f"  API Error: {d}"); return
    audio=bytes.fromhex(d["data"]["audio"])
    with open(os.path.join(OUT,f"{page}-full.mp3"),"wb") as f: f.write(audio)
    print(f"  Saved: {page}-full.mp3 ({len(audio)//1024}KB, ~{len(audio)/16000/60:.1f}min)")

gen("""NEG-AI-TIVE presents: Actual Intelligence.
1.5 trillion dollars. That is how much the world spent on AI in 2025. And 95 percent of generative AI pilots delivered zero measurable financial return. The emperor has been parading for two years and we are only now admitting he is wearing no clothes. The real intelligence gap is not between humans and AI. It is between the hype and the reality.

The 1.5 Trillion Dollar Question.
Gartner estimated global AI spending would reach 1.5 trillion dollars in 2025. But the MIT GenAI Divide Report, based on 150 executive interviews, a 350 employee survey, and analysis of 300 public AI deployments, found that roughly 95 percent of generative AI pilots delivered zero measurable financial return.
The IBM Institute for Business Value found enterprise-wide AI initiatives achieved an average ROI of 5.9 percent, despite incurring a 10 percent plus capital investment. That is negative net return. S&P Global found 42 percent of companies abandoned most AI initiatives in 2025, up from 17 percent in 2024, a 147 percent increase in abandonment in a single year. The honeymoon is over and the hangover has begun.

The Pilot to Production Chasm.
This is the central problem of the AI industry: impressive demos that never become working products. Gartner predicted 30 percent of generative AI projects would be abandoned after proof of concept by the end of 2025. The reality appears worse. S&P Global found the average organization scrapped 46 percent of AI proofs of concept before they ever reached production.
Only 48 percent of AI projects make it into production at all, and those that do require an average of 8 months from prototype to production. RAND Corporation found over 80 percent of AI projects fail to reach production deployment entirely. Each canceled proof of concept typically costs 5 to 10 million dollars before the plug is pulled.

The Benchmark Illusion.
AI models ace standardized benchmarks while failing in the real world. This is the streetlight effect, measuring what is easy to measure rather than what matters. Models that achieve 99 percent on benchmark datasets routinely make obvious errors in production that any human would catch.
A McKinsey partner described the phenomenon: a client's AI was brilliant at detecting fraudulent transactions in the training data. In production, it flagged the CEO's legitimate travel as fraud and missed an actual 2 million dollar theft. The gap between benchmark performance and real-world reliability is the industry's dirty secret.

Why the Gap Matters.
This is not just a tech industry problem. The AI hype cycle has real-world consequences. 1.5 trillion dollars spent on AI is 1.5 trillion not spent on other productivity-enhancing investments. Companies are laying off workers based on projected AI efficiencies that have not materialized. Policymakers rush to regulate worst-case AI scenarios while ignoring more mundane but real harms.
The real danger is not that AI is too powerful. It is that we are making decisions based on what we wish AI could do, not what it actually can do. Actual intelligence would mean being honest about that gap.

Validated Research Sources.
MIT found 95 percent of generative AI pilots delivered zero return. Gartner predicted 30 percent of AI projects would be abandoned after proof of concept. S&P Global found 42 percent of companies abandoned AI initiatives. RAND found over 80 percent of AI projects fail to reach production.
The IBM Institute for Business Value found average ROI of 5.9 percent on AI investments. McKinsey documented the benchmark illusion where AI fails in production.

This has been a NEG-AI-TIVE issue brief. Visit negaitive dot com slash actual-intelligence for sources.""", "actual-intelligence", "English_Resonant_Man")
