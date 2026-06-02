"""Get all active product IDs for the website links."""
import json, subprocess

TOKEN = "9KhcIznCqmWtOGdiNSYuMWUI0fOrAIuy4UnkXiJ8"
r = subprocess.run(["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", "https://api.printful.com/sync/products?limit=40"], capture_output=True, text=True, timeout=15)
d = json.loads(r.stdout)
for p in d.get("result", []):
    if p.get("synced") == 5:
        print(f"  {p['id']}: {p['name']}")
