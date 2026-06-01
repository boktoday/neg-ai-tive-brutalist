"""Fetch Printful product mockup preview URLs and download them."""
import json, subprocess, os

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs"

result = subprocess.run(
    ["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}",
     "https://api.printful.com/sync/products?limit=30"],
    capture_output=True, text=True, timeout=15
)
d = json.loads(result.stdout)

mockups = []
for p in d.get("result", []):
    if p["synced"] == 0:
        continue
    pid = p["id"]
    # Get product details to find preview URLs
    r2 = subprocess.run(
        ["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}",
         f"https://api.printful.com/sync/product/{pid}"],
        capture_output=True, text=True, timeout=15
    )
    pd = json.loads(r2.stdout)
    if pd.get("code") != 200:
        continue
    
    variants = pd["result"].get("sync_variants", [])
    if not variants:
        continue
    
    # Get the first variant's preview
    v = variants[0]
    preview_url = None
    for f in v.get("files", []):
        if f["type"] == "preview":
            preview_url = f.get("preview_url")
            break
        if f["type"] == "default" and f.get("thumbnail_url"):
            if not preview_url:
                preview_url = f.get("thumbnail_url")
    
    name = p["name"]
    mockups.append({"name": name, "id": pid, "preview_url": preview_url})
    print(f"{name}")
    print(f"  Preview: {preview_url}")
    print()

# Also print as a JSON for easy reference
with open(os.path.join(OUT, "..", "..", "scripts", "mockup_data.json"), "w") as f:
    json.dump(mockups, f, indent=2)
