"""Generate TTS audio using the proven customized_skills approach."""
import json, subprocess, os, requests

NEW_KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
os.makedirs(OUT, exist_ok=True)

def generate_speech(text, out_name):
    """Generate speech using the sync /v1/t2a_v2 endpoint with hex output."""
    headers = {
        "Authorization": f"Bearer {NEW_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "speech-2.8-hd",
        "text": text,
        "voice_setting": {
            "voice_id": "English_causual_narrator_vv1",
            "speed": 1.0,
            "vol": 1.0,
            "pitch": 0
        },
        "audio_setting": {
            "sample_rate": 32000,
            "bitrate": 128000,
            "format": "mp3",
            "channel": 1
        },
        "output_format": "hex"
    }
    
    print(f"  Generating: {out_name}...")
    r = requests.post("https://api.minimax.io/v1/t2a_v2", headers=headers, json=payload, timeout=60)
    
    if r.status_code != 200:
        print(f"  ERROR HTTP {r.status_code}: {r.text[:300]}")
        return None
    
    result = r.json()
    if result.get("base_resp", {}).get("status_code") != 0:
        msg = result.get("base_resp", {}).get("status_msg", "unknown")
        print(f"  API ERROR: {msg}")
        return None
    
    audio_hex = result.get("data", {}).get("audio")
    if not audio_hex:
        print(f"  No audio data in response")
        return None
    
    audio_bytes = bytes.fromhex(audio_hex)
    out_path = os.path.join(OUT, f"{out_name}.mp3")
    with open(out_path, "wb") as f:
        f.write(audio_bytes)
    
    print(f"  Saved: {out_name}.mp3 ({len(audio_bytes)//1024}KB)")
    return out_path

# The full Algorithms page text, broken into sections
sections = {
    "algorithms-00-intro": """NEG-AI-TIVE presents: AI Algorithmic Angst. The algorithm decided you should see this. It decided your mood, your shopping cart, your political views, and who you should date. It learned what makes you anxious, angry, and addicted, and it serves you more of it because engagement is profit. Your mental health is just a metric in its optimization function.""",
    
    "algorithms-01-takeover": """The Algorithmic Takeover. You Are the Product. When Instagram switched from a chronological feed to an algorithmic one in 2016, it seemed like a convenience. But a 2026 CESifo working paper using Dutch LISS panel data revealed something darker: the introduction of Instagram's algorithmic feed had a measurable negative impact on teen mental health. Today, 75 percent of what you see on any major platform is chosen by algorithm, not by your conscious choice. These algorithms optimize for a single metric: engagement. Not accuracy, not diversity, not your wellbeing. Engagement. And the most engaging content is reliably the most emotional, extreme, and polarizing. Emotionally negative content gets 3 times more engagement than neutral content. You are not scrolling. You are being manipulated.""",
    
    "algorithms-02-filter-bubbles": """Filter Bubbles and Echo Chambers. A 2025 systematic review by Ahmmad in Societies Journal confirmed what many suspected: social media algorithms consistently reinforce ideological homogeneity, limit viewpoint diversity, and intensify polarization among young users. The algorithm shows you more of what you have already engaged with, creating a self-reinforcing cycle of narrowing perspectives. This is not accidental. The PMC study Normalizing Toxicity found that algorithmic processes create u-loops, feedback cycles where users who engage with extreme content are fed progressively more extreme versions. A Georgia Tech study, funded by a 1.7 million dollar grant, is now auditing TikTok's recommendation algorithm specifically because of concerns about its impact on over 10,000 adolescents. The algorithm does not just reflect your interests. It shapes them.""",
    
    "algorithms-03-mental-health": """The Mental Health Toll. The mechanism is well-documented. Algorithms boost emotionally charged, especially negative or sensational, content because it drives the highest engagement. This creates doomscrolling: compulsive consumption of bad news that worsens anxiety and depression. A TPM journal study of 250 respondents across age groups found young participants reported the highest levels of anxiety and dependence on external validation from algorithmic content. Engagement-based ranking reinforces anxiety, depression, and body image distress. Exposure to self-harm and diet content is algorithmically linked to eating disorders and suicidal ideation. The average teen spends 5.2 hours per day on algorithmically curated content. That is 5.2 hours of their brain being optimized for someone else's profit.""",
    
    "algorithms-04-transparency": """The Transparency Problem. A scoping review published in 2025 found that 23 percent of policy reports recommended algorithmic transparency as a priority. The algorithms operate opaquely, with little transparency. Users have no idea why they are seeing what they are seeing. Calls for algorithmic transparency have been made by over 70 policy reports, non-profits, and research institutions worldwide. The EU's Digital Services Act requires large platforms to provide algorithmic transparency. Australia's eSafety Commissioner has recommended similar measures. The US has no equivalent federal law. In the absence of regulation, the algorithms continue optimizing for engagement at the expense of mental health, and we are left to wonder what they are doing to us.""",
    
    "algorithms-05-outro": """This has been a NEG-AI-TIVE issue brief. For full sources and citations, visit the page at negaitive dot com slash algorithms.""",
}

print(f"Generating {len(sections)} audio files for the Algorithms page...\n")
for name, text in sections.items():
    generate_speech(text, name)
    print()

print("All done!")
