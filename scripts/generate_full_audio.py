"""Generate a single full-page audio track using MiniMax async API, then download."""
import requests, json, time, os

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
os.makedirs(OUT, exist_ok=True)

FULL_TEXT = """NEG-AI-TIVE presents: AI Algorithmic Angst. The algorithm decided you should see this. It decided your mood, your shopping cart, your political views, and who you should date. It learned what makes you anxious, angry, and addicted, and it serves you more of it because engagement is profit. Your mental health is just a metric in its optimization function.

The Algorithmic Takeover. You Are the Product. When Instagram switched from a chronological feed to an algorithmic one in 2016, it seemed like a convenience. But a 2026 CESifo working paper using Dutch LISS panel data revealed something darker: the introduction of Instagram's algorithmic feed had a measurable negative impact on teen mental health. Today, 75 percent of what you see on any major platform is chosen by algorithm, not by your conscious choice. These algorithms optimize for a single metric: engagement. Not accuracy, not diversity, not your wellbeing. Engagement. And the most engaging content is reliably the most emotional, extreme, and polarizing. Emotionally negative content gets 3 times more engagement than neutral content. You are not scrolling. You are being manipulated.

Filter Bubbles and Echo Chambers. A 2025 systematic review by Ahmmad in Societies Journal confirmed what many suspected: social media algorithms consistently reinforce ideological homogeneity, limit viewpoint diversity, and intensify polarization among young users. The algorithm shows you more of what you have already engaged with, creating a self-reinforcing cycle of narrowing perspectives. This is not accidental. The PMC study Normalizing Toxicity found that algorithmic processes create u-loops, feedback cycles where users who engage with extreme content are fed progressively more extreme versions. A Georgia Tech study, funded by a 1.7 million dollar grant, is now auditing TikTok's recommendation algorithm specifically because of concerns about its impact on over 10,000 adolescents. The algorithm does not just reflect your interests. It shapes them.

The Mental Health Toll. The mechanism is well-documented. Algorithms boost emotionally charged, especially negative or sensational, content because it drives the highest engagement. This creates doomscrolling: compulsive consumption of bad news that worsens anxiety and depression. A TPM journal study of 250 respondents across age groups found young participants reported the highest levels of anxiety and dependence on external validation from algorithmic content. Engagement-based ranking reinforces anxiety, depression, and body image distress. Exposure to self-harm and diet content is algorithmically linked to eating disorders and suicidal ideation. The average teen spends 5.2 hours per day on algorithmically curated content. That is 5.2 hours of their brain being optimized for someone else's profit.

The Transparency Problem. A scoping review published in 2025 found that 23 percent of policy reports recommended algorithmic transparency as a priority. The algorithms operate opaquely, with little transparency. Users have no idea why they are seeing what they are seeing. Calls for algorithmic transparency have been made by over 70 policy reports, non-profits, and research institutions worldwide. The EU's Digital Services Act requires large platforms to provide algorithmic transparency. Australia's eSafety Commissioner has recommended similar measures. The US has no equivalent federal law. In the absence of regulation, the algorithms continue optimizing for engagement at the expense of mental health, and we are left to wonder what they are doing to us.

This has been a NEG-AI-TIVE issue brief. For full sources and citations, visit the page at negaitive dot com slash algorithms."""

# Use async API for long text
headers = {"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"}
payload = {
    "model": "speech-2.8-hd",
    "text": FULL_TEXT,
    "voice_setting": {"voice_id": "English_causual_narrator_vv1", "speed": 1, "vol": 10, "pitch": 1},
    "audio_setting": {"format": "mp3", "channel": 2}
}

print("Creating async TTS task for full page text...")
r = requests.post("https://api.minimax.io/v1/t2a_async_v2", headers=headers, json=payload, timeout=30)
d = r.json()
tid = d.get("task_id", "")
tok = d.get("task_token", "")
print(f"Task ID: {tid}")
print(f"Status: {d.get('base_resp', {}).get('status_msg', '')}")

if not tid:
    print("No task ID, using sync API with combined text instead...")
    # Fallback to sync API
    sync_payload = {
        "model": "speech-2.8-hd",
        "text": FULL_TEXT[:5000],
        "voice_setting": {"voice_id": "English_causual_narrator_vv1", "speed": 1.0, "vol": 1.0, "pitch": 0},
        "audio_setting": {"sample_rate": 32000, "bitrate": 128000, "format": "mp3", "channel": 1},
        "output_format": "hex"
    }
    r2 = requests.post("https://api.minimax.io/v1/t2a_v2", headers=headers, json=sync_payload, timeout=60)
    d2 = r2.json()
    audio_hex = d2.get("data", {}).get("audio", "")
    if audio_hex:
        audio_bytes = bytes.fromhex(audio_hex)
        out_path = os.path.join(OUT, "algorithms-full.mp3")
        with open(out_path, "wb") as f:
            f.write(audio_bytes)
        print(f"Saved: algorithms-full.mp3 ({len(audio_bytes)//1024}KB)")
    else:
        print(f"Error: {r2.text[:300]}")
else:
    print("Polling for async result (may take 30-60 seconds)...")
    for i in range(30):
        q = requests.get(f"https://api.minimax.io/v1/query/t2a_async_v2?task_id={tid}", headers=headers, timeout=15)
        try:
            qd = q.json()
            s = qd.get("base_resp", {}).get("status_msg", "")
            if s == "success":
                audio_url = qd.get("data", {}).get("audio_url", "")
                if audio_url:
                    print(f"Downloading from: {audio_url[:60]}...")
                    a = requests.get(audio_url, timeout=60)
                    out_path = os.path.join(OUT, "algorithms-full.mp3")
                    with open(out_path, "wb") as f:
                        f.write(a.content)
                    print(f"Saved: algorithms-full.mp3 ({len(a.content)//1024}KB)")
                break
            print(f"  {i+1}: {s}")
        except:
            print(f"  {i+1}: waiting...")
        time.sleep(5)
