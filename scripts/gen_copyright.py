"""Generate full page audio for Copyright with English_ImposingManner."""
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

gen("""NEG-AI-TIVE presents: AI Made This Design.

Every AI model you have used was built on the backs of millions of copyrighted works, books, articles, images, music, scraped from the internet without permission or payment. The creators of those works are now fighting back in courts around the world. The outcome will determine whether AI elevates human creativity or destroys the economic incentive to create.

The Largest Theft of Creative Work in History.
The LAION-5B dataset contains 5.85 billion image-text pairs scraped from the internet. It is the training backbone of Stable Diffusion, Midjourney, and most image generation models. The dataset includes copyrighted artwork, photographs, and illustrations, used without consent, credit, or compensation.
In June 2025, a US District Judge ruled that Anthropic's use of pirated copies of over 250,000 books obtained from a dataset called The Pile for AI training was not fair use. This was a landmark ruling. But paradoxically, the same judge ruled that lawfully acquired books used for the same purpose were fair use. And another judge in the same district ruled the exact opposite for Meta. The law is completely unsettled.

NYT versus OpenAI, the Case That Could Change Everything.
The New York Times sued OpenAI and Microsoft in December 2023, alleging that millions of its articles were used to train ChatGPT, which now competes directly with the Times as a source of information. The suit seeks billions of dollars in damages and demands that OpenAI destroy any chatbot models and training data using NYT content.
The central question: is AI training on copyrighted works fair use? Google Books was ruled fair use because it did not substitute for the originals. But AI training is different. These models create competing products. If the NYT wins, it will force mandatory licensing for all training data. If OpenAI wins, fair use covers AI training. Either way, the outcome is expected by early 2027.

Artists versus AI, 4 Billion Images at Stake.
The Andersen versus Stability AI case is the first AI copyright case to go to a jury trial, scheduled for Q3 2026. Plaintiffs are seeking class certification covering an estimated 4 billion images scraped from the web. If they win class certification, the settlement pressure on Stability AI and any lab that trained on LAION-5B will be enormous.
In the UK, Getty Images sued Stability AI and won a partial victory in November 2025. The court found that while the AI model weights themselves were not infringing copies, Stable Diffusion did reproduce Getty's watermarks in outputs, constituting trademark infringement. Disney and Universal have also entered the fray, suing Midjourney for generating unlicensed likenesses of copyrighted characters.

A Global Legal Patchwork.
Germany ruled AI training on song lyrics infringed copyright. The UK ruled model weights are not copies but found trademark infringement. The US has contradictory rulings: Anthropic's pirated books not fair use, lawfully acquired books were fair use. Meta ruling opposite. Australia's copyright law is under review.
Meanwhile, over 50 active lawsuits are pending globally. Some companies like Axel Springer and News Corp have chosen to license their content rather than sue. But most creators do not have that option. The fundamental question of who owns the right to train on your work remains unanswered.

Validated Research Sources.
Over 50 active AI copyright lawsuits are mapped globally. Getty Images versus Stability AI in the UK ruled model weights are not copies but trademark infringement found. The New York Times versus OpenAI case is the most watched AI copyright case. The Andersen versus Stability AI case is the first to go to jury trial.

This has been a NEG-AI-TIVE issue brief. Visit negaitive dot com slash copyright for sources.""", "copyright", "English_ImposingManner")
