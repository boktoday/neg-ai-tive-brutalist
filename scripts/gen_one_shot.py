"""Generate a single, shorter MP3 that covers the key points."""
import requests, os

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
os.makedirs(OUT, exist_ok=True)

TEXT = """NEG-AI-TIVE presents: AI Algorithmic Angst. The algorithm decided you should see this. It decided your mood, your shopping cart, your political views, and who you should date. It learned what makes you anxious, angry, and addicted, and it serves you more of it because engagement is profit. Your mental health is just a metric in its optimization function.

When Instagram switched to an algorithmic feed in 2016, studies show it had a measurable negative impact on teen mental health. Seventy five percent of what you see is chosen by algorithm. Emotionally negative content gets three times more engagement. You are not scrolling. You are being manipulated.

Algorithms reinforce ideological homogeneity and limit viewpoint diversity. A Georgia Tech study is auditing TikTok's impact on over ten thousand adolescents. The algorithm doesn't just reflect your interests. It shapes them.

Algorithms boost negative content because it drives engagement, creating doomscrolling that worsens anxiety and depression. Young people report the highest levels of dependence on algorithmic content. The average teen spends 5.2 hours per day on algorithmically curated content. That is 5.2 hours of their brain being optimized for someone else's profit.

This has been a NEG-AI-TIVE issue brief. Visit negaitive dot com slash algorithms for sources."""

headers = {"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"}
payload = {
    "model": "speech-2.8-hd",
    "text": TEXT,
    "voice_setting": {"voice_id": "English_causual_narrator_vv1", "speed": 1.0, "vol": 1.0, "pitch": 0},
    "audio_setting": {"sample_rate": 32000, "bitrate": 128000, "format": "mp3", "channel": 1},
    "output_format": "hex"
}

print("Generating single audio track...")
r = requests.post("https://api.minimax.io/v1/t2a_v2", headers=headers, json=payload, timeout=60)

if r.status_code != 200:
    print(f"HTTP Error: {r.text[:500]}")
else:
    d = r.json()
    if d.get("base_resp", {}).get("status_code") == 0:
        audio_hex = d["data"]["audio"]
        audio_bytes = bytes.fromhex(audio_hex)
        out_path = os.path.join(OUT, "algorithms-full.mp3")
        with open(out_path, "wb") as f:
            f.write(audio_bytes)
        print(f"Saved: algorithms-full.mp3 ({len(audio_bytes)//1024}KB)")
    else:
        print(f"API Error: {d}")
