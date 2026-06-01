"""Generate FULL page audio for Deepfakes with English_ImposingManner voice."""
import os, requests

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
VOICE_ID = "English_ImposingManner"
PAGE_NAME = "deepfakes"

os.makedirs(OUT, exist_ok=True)

TEXT = """NEG-AI-TIVE presents: Scammed by Deepfake.

Your CEO is not calling. Your daughter is not in jail. That video of a politician saying something outrageous is entirely fabricated. Welcome to a world where seeing is no longer believing, and the fraudsters are winning.

Financial Fraud, the Billion Dollar Heist.
In January 2024, a Hong Kong finance employee joined a video call with their CFO and colleagues. Every single person on that call was a deepfake. The employee authorized 25.6 million dollars in transfers before the fraud was discovered.
This was not a one-off. CEO fraud now targets over 400 companies per day. US deepfake losses hit 1.1 billion dollars in 2025, tripling from 360 million the year before. Deloitte projects AI fraud losses will reach 40 billion dollars annually by 2027.
A Florida mother was scammed out of 15,000 dollars by an AI voice clone of her daughter claiming to be in jail.

Democracy Under Siege.
Over 453 global political deepfake incidents were recorded in 2025 alone. In Australia, it is currently legal to use deepfakes in political advertising. The Hawke government's 1984 ban on misleading ads was repealed after 8 months and never reinstated.
The NSW government introduced election deepfake bans in March 2026, while South Australia and numerous US states have enacted their own laws. But 72 percent of Australian adults encountered online misinformation in the first half of 2025, and the gap between threat and regulation is widening.

Non-Consensual Deepfakes.
Perhaps the most insidious harm: deepfakes used to create non-consensual intimate imagery. Australia introduced federal laws in 2024 banning the sharing of sexually explicit deepfake material, with penalties of up to 7 years imprisonment.
The first prosecution occurred in 2026, a South Australian man charged with 8 counts of creating sexual material without consent. Senator David Pocock's My Face, My Rights Bill seeks to establish explicit rights over use of your face and voice. But enforcement remains a drop in the ocean compared to the volume of material being created daily.

The Detection Problem.
Here is the uncomfortable truth: we cannot reliably detect deepfakes. Australia's own CSIRO tested 16 leading deepfake detectors and found none could reliably identify real-world deepfakes. Human detection is even worse. A 2025 iProov study found only 0.1 percent of people could accurately identify all deepfakes they were shown.
Commercial AI detectors achieve around 78 percent accuracy on real content. The IRONSCALES 2025 Threat Report found that 99 percent of security leaders expressed confidence in their defenses, but the average simulated detection score was only 44 percent. The technology is advancing faster than our ability to detect it.

Validated Research Sources.
Keepnet Labs and the FBI report AI fraud losses projected to reach 40 billion dollars by 2027. US deepfake losses reached 1.1 billion dollars in 2025, tripling from 360 million in 2024.
The CSIRO found major vulnerabilities in all 16 deepfake detectors tested. Only 0.1 percent of humans could accurately detect deepfakes.
CybelAngel and IRONSCALES report that over half of US organizations reported financial losses from AI voice fraud, with average loss 280,000 dollars per incident.
The NSW Parliamentary Research Service recorded 453 global political deepfake incidents in 2025.
The ABC News reports that deepfakes are currently legal in Australian political advertising.
Senator David Pocock's My Face, My Rights Bill seeks to establish explicit rights over face and voice use.
In February 2026, the first person was charged under Australia's federal deepfake pornography laws, with maximum 7 years imprisonment.

This has been a NEG-AI-TIVE issue brief. For full sources and citations, visit the page at negaitive dot com slash deepfakes."""

print(f"Full text length: {len(TEXT)} characters")

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
