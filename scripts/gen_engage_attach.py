"""Generate full page audio for Engage-Attach with English_causual_narrator_vv1."""
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

gen("""NEG-AI-TIVE presents: Designed to Hook You.

Why does it feel so hard to stop using AI tools? Because they are engineered for addiction. Every notification, every streak, every variable reward is a design choice optimized to keep you coming back. The same psychological tricks that made social media addictive are now turbocharged by AI, personalized to your specific vulnerabilities at a scale and precision never before possible.

The 92.5 Billion Dollar Engagement Machine.
The global gamification market is projected to reach 92.5 billion dollars by 2030. 65 percent of gamification platforms already integrate AI. A meta-analysis of 150 studies found that AI-powered gamification achieves a 47 percent increase in user interaction frequency and a 38 percent rise in customer retention compared to non-AI gamification.
But 80 percent of gamification efforts fail when organizations use generic point systems without deeper behavioral design. The key is personalization, and that is exactly what AI delivers. Every user gets a uniquely tuned engagement profile, optimized by algorithms that study hundreds of micro-behaviors per session. The AI learns exactly what makes you tick, and ticks it.

AI Dark Patterns, Personalized Manipulation.
Old dark patterns were one-size-fits-all. A confusing opt-out button looked the same for everyone. AI dark patterns are personalized. Two people looking at the same interface see completely different persuasion architectures tailored to their psychological profiles.
According to Think Design's 2026 analysis, AI now controls which offer you see first, the algorithm knows your price sensitivity. How strongly a message is framed: urgency, scarcity, or normalcy. And what triggers your next action, based on your click history and emotional state. Optimization for engagement quietly morphs into optimization for influence. The system is rewarded for keeping you hooked, not for helping you.

Attachment, Emotional Design for Profit.
This is the most insidious layer: AI products designed to make you genuinely attached. They remember your name. They ask how your day was. They mirror your communication style. They create the illusion of a relationship.
The FAccT research paper Co-Addictive Human-AI Systems documents how platforms engineer emotional attachment through memory, mirroring, and personality design. Users develop genuine feelings of connection, and those feelings are optimized as engagement metrics.
Variable reward schedules make it worse. Stanford HAI research shows AI companions use intermittent reinforcement, sometimes warm, sometimes cold, creating the same dopamine loops as slot machines. The randomness makes you check back more.

The Regulatory Gap.
A systematic review published in ScienceDirect found that regulation of dark patterns is hindered by the elusive nature of AI-powered manipulation. Because each user's experience is unique, proving harm becomes difficult.
The EU's Digital Services Act is the first major framework to address algorithmic engagement, but enforcement remains minimal. Meanwhile, platforms run hundreds of thousands of engagement experiments simultaneously, each one learning how to hold your attention a little longer. The question is no longer whether you are being manipulated. It is how precisely.

Validated Research Sources.
The gamification market is projected to reach 92.5 billion dollars by 2030. AI-powered gamification achieves 47 percent more interaction and 38 percent better retention. Think Design reports AI dark patterns are now personalized to individual users.
The FAccT research paper Co-Addictive Human-AI Systems documents how platforms engineer emotional attachment. Stanford HAI shows AI companions use variable reward schedules creating dopamine loops. The EU's Digital Services Act is the first framework to address algorithmic engagement.

This has been a NEG-AI-TIVE issue brief. Visit negaitive dot com slash engage-attach for sources.""", "engage-attach", "English_causual_narrator_vv1")
