"""Generate TTS audio for the Algorithms issue brief page."""
import json, subprocess, os, re

API_KEY = "sk-api-tFhk8PCw8VUmCcthFrPix2Gj8hXBWmu5Hd8CWElGPn6BtJXNJwdGiyib-jMUdLFkoQNmKe47AndG_GvOBOfcOtPjQ7RLUrsLmjH6cPKxSEwb77GjR3wQzm4"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
os.makedirs(OUT, exist_ok=True)

# Full page text
intro = """NEG-AI-TIVE presents: AI Algorithmic Angst.
The algorithm decided you should see this. It decided your mood, your shopping cart, your political views, and who you should date.
It learned what makes you anxious, angry, and addicted, and it serves you more of it because engagement is profit.
Your mental health is just a metric in its optimization function."""

card1_title = "The Algorithmic Takeover, You Are the Product"
card1 = """When Instagram switched from a chronological feed to an algorithmic one in 2016, it seemed like a convenience. But a 2026 CESifo working paper using Dutch LISS panel data revealed something darker: the introduction of Instagram's algorithmic feed had a measurable negative impact on teen mental health.
Today, 75 percent of what you see on any major platform is chosen by algorithm, not by your conscious choice. These algorithms optimize for a single metric: engagement. Not accuracy, not diversity, not your wellbeing. Engagement.
And the most engaging content is reliably the most emotional, extreme, and polarizing. Emotionally negative content gets 3 times more engagement than neutral content. You're not scrolling. You're being manipulated."""

card2_title = "Filter Bubbles and Echo Chambers"
card2 = """A 2025 systematic review by Ahmmad in Societies Journal confirmed what many suspected: social media algorithms consistently reinforce ideological homogeneity, limit viewpoint diversity, and intensify polarization among young users.
The algorithm shows you more of what you've already engaged with, creating a self-reinforcing cycle of narrowing perspectives. This isn't accidental. The PMC study Normalizing Toxicity found that algorithmic processes create u-loops, feedback cycles where users who engage with extreme content are fed progressively more extreme versions.
A Georgia Tech study, funded by a 1.7 million dollar grant, is now auditing TikTok's recommendation algorithm specifically because of concerns about its impact on over 10,000 adolescents. The algorithm doesn't just reflect your interests. It shapes them."""

card3_title = "The Mental Health Toll"
card3 = """The mechanism is well-documented. Algorithms boost emotionally charged, especially negative or sensational, content because it drives the highest engagement. This creates doomscrolling: compulsive consumption of bad news that worsens anxiety and depression.
A TPM journal study of 250 respondents across age groups found young participants reported the highest levels of anxiety and dependence on external validation from algorithmic content. Engagement-based ranking reinforces anxiety, depression, and body image distress.
Exposure to self-harm and diet content is algorithmically linked to eating disorders and suicidal ideation. The average teen spends 5.2 hours per day on algorithmically curated content. That's 5.2 hours of their brain being optimized for someone else's profit."""

card4_title = "The Transparency Problem"
card4 = """A scoping review published in 2025 found that 23 percent of policy reports recommended algorithmic transparency as a priority. The algorithms operate opaquely, with little transparency — users have no idea why they're seeing what they're seeing.
Calls for algorithmic transparency have been made by over 70 policy reports, non-profits, and research institutions worldwide. The EU's Digital Services Act requires large platforms to provide algorithmic transparency. Australia's eSafety Commissioner has recommended similar measures. The US has no equivalent federal law.
In the absence of regulation, the algorithms continue optimizing for engagement at the expense of mental health, and we're left to wonder what they're doing to us."""

outro = """This has been a NEG-AI-TIVE issue brief. For full sources and citations, visit the page at negaitive dot com slash algorithms."""

sections = [
    ("00-intro", intro),
    ("01-takeover", card1),
    ("02-filter-bubbles", card2),
    ("03-mental-health", card3),
    ("04-transparency", card4),
    ("05-outro", outro),
]

for slug, text in sections:
    out_path = os.path.join(OUT, f"algorithms-{slug}.mp3")
    
    payload = {
        "model": "speech-01-turbo",
        "text": text,
        "voice_id": "English_causual_narrator_vv1",
        "speed": 1.0,
        "vol": 1.0,
        "pitch": 0,
        "audio_sample_rate": 32000,
        "bitrate": 128000,
        "format": "mp3"
    }
    
    print(f"Generating: {slug}...")
    
    result = subprocess.run(
        ["curl", "-s", "-X", "POST",
         "-H", f"Authorization: Bearer {API_KEY}",
         "-H", "Content-Type: application/json",
         "-d", json.dumps(payload),
         "https://api.minimax.chat/v1/t2a_v2"],
        capture_output=True, text=True, timeout=120
    )
    
    try:
        resp = json.loads(result.stdout)
        if "data" in resp and "audio_url" in resp["data"]:
            audio_url = resp["data"]["audio_url"]
            print(f"  Audio URL: {audio_url[:60]}...")
            
            # Download the audio
            dl_result = subprocess.run(
                ["curl", "-s", "-o", out_path, audio_url],
                capture_output=True, text=True, timeout=60
            )
            if os.path.exists(out_path) and os.path.getsize(out_path) > 0:
                print(f"  Saved: {out_path} ({os.path.getsize(out_path)//1024}KB)")
            else:
                print(f"  FAILED to download audio")
        else:
            print(f"  API ERROR: {result.stdout[:300]}")
    except Exception as e:
        print(f"  ERROR: {e}")

print("\nDone! All audio files generated.")
