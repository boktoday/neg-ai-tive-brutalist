"""Find an AU-friendly hat product."""
import json, subprocess

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"

# Get all categories
result = subprocess.run(
    ["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}",
     "https://api.printful.com/categories"],
    capture_output=True, text=True, timeout=15
)
cats = json.loads(result.stdout)

# Find hat-related categories
for c in cats["result"]["categories"]:
    title = c["title"].lower()
    if any(w in title for w in ["hat", "cap", "headwear", "beanie", "bucket"]):
        print(f"Category {c['id']}: {c['title']} (parent: {c['parent_id']})")
