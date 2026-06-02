"""Test Jina Search by saving to file first."""
import subprocess, json, os

KEY = "jina_9a957e8fdba0414eba3c5cd3a1865227pKWxDI8fyUrvnYK4lXJi4BU3yelt"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\scripts\email-cron"

# Test search - save to file
result = subprocess.run(
    ["curl", "-s", "-o", os.path.join(OUT, "jina_test.json"),
     "https://s.jina.ai/AI%20data%20centre%20energy%20water%20consumption%202026",
     "-H", f"Authorization: Bearer {KEY}"],
    capture_output=True, text=True, timeout=20
)

# Read from file
with open(os.path.join(OUT, "jina_test.json"), encoding="utf-8") as f:
    data = json.load(f)

print(f"Data items: {len(data.get('data', []))}")
for item in data.get("data", [])[:3]:
    print(f"  - {item.get('title', 'N/A')}")
    print(f"    {item.get('url', 'N/A')}")
