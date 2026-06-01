"""Generate FULL page audio for Data Centres using the complete page text."""
import os, requests

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
os.makedirs(OUT, exist_ok=True)

TEXT = """NEG-AI-TIVE presents: AI Data Centres, the Hidden Cost.

Every ChatGPT query, every MidJourney image, every AI-generated email, it all runs on massive data centres consuming staggering amounts of energy and water, often with minimal community consultation.

Energy Consumption.
AI data centres are projected to consume 1.5 to 2 percent of global electricity by 2027, roughly the equivalent of Japan's entire annual power demand. The IEA estimates data centre energy demand could double by 2027, straining already stretched grids. A single large AI training run can consume as much electricity as over 100 US homes use in a year.

Water Usage.
Data centres rely on evaporative cooling consuming vast amounts of fresh water. Training GPT-3 consumed 700,000 litres of water. A typical ChatGPT conversation of 20 to 50 queries uses a 500 millilitre bottle of water. Globally, 40 percent of data centres are in high water stress areas, and two-thirds of new US data centres since 2022 are in regions already experiencing water shortages.

Lack of Community Consultation.
Data centre developments are often fast-tracked with limited community input. In Australia, councils have raised concerns about water usage in drought-prone regions. Internationally, communities in Virginia, Texas, Ireland, the Netherlands, and Chile have pushed back over noise, grid strain, and environmental concerns. The rapid pace of AI infrastructure is outpacing local planning laws.

Validated Research Sources.
The ISACA and Bloomberg News 2026 report found that globally, approximately 40 percent of data centres are in areas of high or extremely high water stress, and two-thirds of new US data centres since 2022 are in water-stressed regions.

Consumer Reports 2025 found that 78 percent of Americans are concerned about data centre impacts. They reported on a planned Texas campus that includes 18 million square feet of data centres plus four nuclear reactors.

The International Energy Agency's 2025 Electricity report projects data centre electricity consumption could double by 2027, adding the equivalent of Japan's entire annual electricity demand.

The UC Riverside 2024 study Making AI Less Thirsty found that training GPT-3 consumed approximately 700,000 litres of water. A ChatGPT conversation of 20 to 50 queries uses a 500 millilitre bottle of water.

Bloomberg 2025 reported that power demand from US data centres is projected to triple by 2030, requiring utility-scale grid infrastructure that does not yet exist.

The BBC News 2025 report on community opposition found that local communities across Europe and North America are increasingly pushing back over noise, grid strain, and environmental disruption.

The Municipal Association of Victoria 2025 reported that Victorian councils are raising concerns about data centre water usage in drought-prone regions, with limited community consultation requirements.

The Carnegie Endowment for International Peace 2025 report found that rapid AI infrastructure deployment is outpacing local planning laws and community consent processes globally.

This has been a NEG-AI-TIVE issue brief. For full sources and citations, visit the page at negaitive dot com slash datacentres."""

print(f"Full text length: {len(TEXT)} characters")

headers = {"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"}
payload = {
    "model": "speech-2.8-hd",
    "text": TEXT,
    "voice_setting": {"voice_id": "English_causual_narrator_vv1", "speed": 1.0, "vol": 1.0, "pitch": 0},
    "audio_setting": {"sample_rate": 32000, "bitrate": 128000, "format": "mp3", "channel": 1},
    "output_format": "hex"
}

r = requests.post("https://api.minimax.io/v1/t2a_v2", headers=headers, json=payload, timeout=120)
if r.status_code != 200:
    print(f"HTTP Error: {r.status_code}: {r.text[:300]}")
else:
    d = r.json()
    if d.get("base_resp", {}).get("status_code") == 0:
        audio_bytes = bytes.fromhex(d["data"]["audio"])
        out_path = os.path.join(OUT, "datacentres-full.mp3")
        with open(out_path, "wb") as f:
            f.write(audio_bytes)
        minutes = len(audio_bytes) / 16000 / 60
        print(f"Saved: datacentres-full.mp3 ({len(audio_bytes)//1024}KB, ~{minutes:.1f} min)")
    else:
        print(f"API Error: {d}")
