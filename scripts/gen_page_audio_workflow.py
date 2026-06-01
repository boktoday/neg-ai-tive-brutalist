"""
TTS Audio Generation Workflow — Reusable Script

Usage:
  1. Read the page component to extract the full text
  2. Write the FULL text below (all issue cards, all content, all source descriptions)
  3. Update the PAGE_NAME and output filename
  4. Optionally change VOICE_ID
  5. Run: python scripts/gen_page_audio_workflow.py
  6. Add <AudioPlayer> to the page component
  7. Build, commit, push, deploy

STEPS TO KEEP THE SAME EVERY TIME:
  - Extract FULL text from the page component (read all IssueCard children)
  - Include all source descriptions from the research section
  - Voice: English_causual_narrator_vv1 (default) — change VOICE_ID below
  - File naming: {page-slug}-full.mp3
  - Test duration: should be 3-5+ min for a full page
"""
import os, requests

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
os.makedirs(OUT, exist_ok=True)

# ====== CONFIGURATION — CHANGE THESE PER PAGE ======
PAGE_NAME = "deepfakes"          # slug for filename
VOICE_ID = "English_ImposingManner"  # voice to use
# ===================================================

TEXT = """[INSERT FULL PAGE TEXT HERE — read from the component file]

NEG-AI-TIVE presents: Scammed by Deepfake.

[Intro from page]
...
[Issue card 1 from page]
...
[Issue card 2 from page]
...
[Issue card 3 from page]
...
[Issue card 4 from page]
...
[All research source descriptions]
...
[Outro]

This has been a NEG-AI-TIVE issue brief. For full sources, visit the page at negaitive dot com slash [page-name]."""

print(f"Text length: {len(TEXT)} characters")
if len(TEXT) > 9500:
    print("WARNING: Text is close to or exceeds 10K limit!")

headers = {"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"}
payload = {
    "model": "speech-2.8-hd",
    "text": TEXT,
    "voice_setting": {"voice_id": VOICE_ID, "speed": 1.0, "vol": 1.0, "pitch": 0},
    "audio_setting": {"sample_rate": 32000, "bitrate": 128000, "format": "mp3", "channel": 1},
    "output_format": "hex"
}

r = requests.post("https://api.minimax.io/v1/t2a_v2", headers=headers, json=payload, timeout=120)
if r.status_code != 200:
    print(f"HTTP Error: {r.status_code}: {r.text[:300]}")
    exit(1)

d = r.json()
if d.get("base_resp", {}).get("status_code") != 0:
    print(f"API Error: {d}")
    exit(1)

audio_bytes = bytes.fromhex(d["data"]["audio"])
out_path = os.path.join(OUT, f"{PAGE_NAME}-full.mp3")
with open(out_path, "wb") as f:
    f.write(audio_bytes)

minutes = len(audio_bytes) / 16000 / 60
print(f"Saved: {PAGE_NAME}-full.mp3 ({len(audio_bytes)//1024}KB, ~{minutes:.1f} min)")
print(f"Done! Now add <AudioPlayer src=\"/audio/{PAGE_NAME}-full.mp3\" /> to the page.")
