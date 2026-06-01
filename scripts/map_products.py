"""Map merch names to Printful sync product external IDs."""
import json, subprocess

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"

result = subprocess.run(
    ["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}",
     "https://api.printful.com/sync/products?limit=30"],
    capture_output=True, text=True, timeout=15
)
d = json.loads(result.stdout)

for p in d.get("result", []):
    if p["synced"] > 0:
        name = p["name"]
        print(f"  {name} -> ID: {p['id']}")
