"""Generate FULL page audio for Jobs with English_ImposingManner voice."""
import os, requests

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
VOICE_ID = "English_ImposingManner"
PAGE_NAME = "jobs"
os.makedirs(OUT, exist_ok=True)

TEXT = """NEG-AI-TIVE presents: My Job Was Automated.

For decades, automation threatened factory floors. Now it is coming for the white-collar desk job. Whether you are a writer, coder, accountant, or lawyer, AI is restructuring the labour market faster than workers can adapt. The divide between those who can work with AI and those who cannot is growing at a staggering pace.

300 Million Jobs Exposed, and It Is Different This Time.
Previous automation waves targeted blue-collar work: factory floors, assembly lines, repetitive physical tasks. This wave targets cognitive labour. Goldman Sachs estimates 300 million full-time jobs globally are exposed to generative AI automation. McKinsey raised their estimate from 30 percent to 40 percent of working hours automatable, the timeline accelerated by AI. The IMF found approximately 60 percent of jobs in advanced economies are exposed.
What is different? AI now affects analysis, summarisation, communication, and decision support, the very tasks that defined white-collar professional work. Administrative roles face 46 percent exposure, legal 44 percent, architecture and engineering 37 percent. Construction under 6 percent. The nature of work is being redefined at every level.

Young Workers Hit Hardest.
The data is stark. A Stanford University pre-print found that early-career workers aged 22 to 25 in the most AI-exposed occupations experienced a 16 percent relative decline in employment since ChatGPT launched in late 2022. Goldman Sachs Research confirms that unemployment among 20 to 30 year-olds in tech-exposed occupations has risen by almost 3 percentage points since the start of 2025.
This corroborates widespread reports that entry-level hiring in knowledge sectors has collapsed. Companies that used to hire junior writers, coders, and analysts are instead using AI tools and expecting more from fewer, more senior staff. The career ladder bottom rungs are being removed.

The Wage Premium Divide.
Workers with AI skills now command a 56 percent wage premium over peers in identical roles without those skills, up from 25 percent the previous year, more than doubling in 12 months according to PwC 2025.
This creates a two-speed labour market. Those who can leverage AI are seeing their value skyrocket. Those who cannot, or whose entire role is automatable, face stagnant wages, reduced hours, or outright displacement. 37 percent of business leaders anticipate replacing workers with AI by the end of 2026. Already, 13.7 percent of US workers report losing a job to AI or automation.
The Dallas Federal Reserve found AI is simultaneously aiding and replacing workers, raising wages for some while suppressing them for others, creating unprecedented labour market bifurcation.

The Australian Picture.
CSIRO research tells a nuanced story. Their study of over 4,000 Australian firms found that AI-adopting companies actually hire more, not fewer, workers. But the skills demanded are rapidly evolving. 68 percent of Australian businesses have adopted some form of AI.
The Australian Parliament's Inquiry into the Digital Transformation of Workplaces recommended government-led campaigns on AI awareness, training, and upskilling. CSIRO estimates Australia needs 161,000 new AI-savvy workers by 2030.
But there is a warning too. The OECD found that while AI adoption in SMEs helps compensate for labour shortages, it also risks wage polarisation, exactly the pattern playing out globally. And paradoxically, CSIRO itself cut approximately 100 AI research roles in 2025, highlighting that no sector is immune from AI-driven restructuring.

Validated Research Sources.
Goldman Sachs estimates 300 million jobs globally exposed to AI. 40 percent of working hours are automatable according to McKinsey.
Stanford research found 16 percent employment decline for young workers aged 22 to 25 in AI-exposed roles.
PwC found a 56 percent wage premium for AI-skilled workers.
The CSIRO study of 4,000 Australian firms found AI adopters hire more, not fewer.
The Australian Parliament estimates 161,000 new AI-savvy workers are needed by 2030.
The MIT Initiative on the Digital Economy found 95 percent of organizations see zero return on genAI investment.
The Dallas Federal Reserve found AI is simultaneously aiding and replacing workers.

This has been a NEG-AI-TIVE issue brief. For full sources and citations, visit the page at negaitive dot com slash jobs."""

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
