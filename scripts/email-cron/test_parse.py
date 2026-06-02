"""Quick test of Jina parsing."""
import re

with open(r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\email-cron\raw_AI_data_centre_energy_water_co.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Parse
items = []
blocks = re.split(r'\[\d+\] ', text)
print(f"Found {len(blocks)} blocks")
for block in blocks:
    title = ""
    url = ""
    desc = ""
    for line in block.split("\n"):
        if line.startswith("Title:"):
            title = line[6:].strip()
        elif line.startswith("URL Source:"):
            url = line[11:].strip()
        elif line.startswith("Description:"):
            desc = line[12:].strip()
    
    if title and url and "robot" not in title.lower() and "captcha" not in title.lower():
        items.append({"title": title, "url": url, "content": desc[:200]})
        print(f"  GOT: {title}")

print(f"\nTotal items: {len(items)}")
