"""
TTS Audio Generation Workflow â€” Reusable Script

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
  - Voice: English_causual_narrator_vv1 (default) â€” change VOICE_ID below
  - File naming: {page-slug}-full.mp3
  - Test duration: should be 3-5+ min for a full page
"""
import os, requests

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
os.makedirs(OUT, exist_ok=True)

# ====== CONFIGURATION â€” CHANGE THESE PER PAGE ======
PAGE_NAME = "pattern-of-life"          # slug for filename
VOICE_ID = "English_ImposingManner"  # voice to use
# ===================================================

TEXT = """NEG-AI-TIVE presents: Pattern of Life.  Your pattern of life data creates a profile. Every click, every swipe, every drive past a camera — you are building a digital dossier you will never see. Data brokers, advertisers, law enforcement, and foreign governments are piecing together your pattern of life from hundreds of sources. And they do not need a warrant.  Here is how they build your profile.  First, location tracking. Your phone pings cell towers 24/7. Apps track precise GPS even when background-closed. ALPR cameras log every license plate you pass. Wi-Fi networks reveal where you sleep, work, and shop. A school district in the US used ALPR data to deny enrollment based on where families parked overnight, establishing their pattern of life without consent.  Second, data broker aggregation. Over 750 registered data brokers operate in the US alone. They collect from purchase history — inferring health conditions — social media activity revealing political leanings, loyalty programs tracking every purchase, courthouse records, property deeds, voter files, and motor vehicle records. Your profile is cross-referenced, enhanced, and sold repeatedly.  Third, AI inference and enhancement. Algorithms infer pregnancy from purchase patterns. Browsing behavior predicts sexuality, religion, and income. Spending changes flag financial stress. Vocabulary analysis maps education level and personality traits. Publicis CoreAI alone profiles 2.3 billion people through AI inference, generating new data points without direct collection.  By the numbers. The data broker industry is worth over 200 billion US dollars, bigger than the NFL, music industry, and Hollywood combined. Over 750 registered data brokers in the US alone. 2.3 billion people profiled by a single ad platform through AI inference. And 33 data brokers sold US citizen data to North Korea, China, Russia, and Iran in 2025.  What do they infer about you? Pregnancy status. Health conditions. Political affiliation. Sexual orientation. Financial stress. Education level. Personality traits. Relationship status. Religious beliefs. Prescription usage. Alcohol consumption. Travel patterns. Red indicates high sensitivity data that can be used to discriminate against you.  Who is buying your pattern of life? Insurance companies assess risk, deny coverage, and raise premiums based on inferred health conditions. Employers screen candidates and monitor employees. Landlords evaluate renters and deny applications based on inferred financial stress. Law enforcement tracks suspects without warrants via commercial data — the FBI confirmed this practice in March 2026. Foreign governments buy your data too — 33 brokers admitted selling to North Korea, China, Russia, and Iran. Political campaigns micro-target voters and suppress turnout. Financial institutions determine creditworthiness beyond traditional credit scores. Other data brokers resell profiles multiple times so you never know who ends up with your data. And Generative AI developers train models on your personal data without your knowledge.  No warrant required. In March 2026, FBI Director Kash Patel confirmed before a Senate committee that the FBI regularly purchases commercial location data without obtaining a warrant. This means law enforcement can track your movements, establish your pattern of life, and identify your associates, all without probable cause or judicial oversight. The Fourth Amendment does not apply when the government simply buys your data from a broker.  Your data goes global. Californias 2025 data broker registry revealed that 33 registered brokers admitted to selling US citizens personal data to entities in North Korea, China, Russia, and Iran. Not rogue actors. Registered, legal businesses. The Department of Justices Bulk Data Rule, introduced in 2025, attempts to restrict foreign access to bulk personal data, but enforcement remains murky. Once your profile is sold internationally, there is no getting it back.  Opt-out is designed to fail. The Joint Economic Committee Senate report documented systematic dark patterns designed to prevent consumers from opting out. Companies use no-index codes to hide their data deletion request pages from search engines. Multi-step processes are deliberately confusing. Some brokers require mailed, notarized forms to delete your data. Others simply ignore requests. Enforcement is reactive, not proactive. The system is built to make opt-out nearly impossible by design.  Sources for this brief include Protegrity and the US Senate hearing from March 2026, the Joint Economic Committee Senate report from February 2026, Brightside AI, Techdirt, Privacy Rights Clearinghouse, SecureFrame and Cisco, and White and Case LLP.  This has been a NEG-AI-TIVE issue brief. For full sources, visit the page at negaitive dot com slash pattern dash of dash life."""

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

