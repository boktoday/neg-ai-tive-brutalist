"""Fetch mockup preview URLs for ALL active products."""
import json, subprocess

TOKEN = "9KhcIznCqmWtOGdiNSYuMWUI0fOrAIuy4UnkXiJ8"
BASE = "https://api.printful.com"

r = subprocess.run(["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", f"{BASE}/sync/products?limit=40"], capture_output=True, text=True, timeout=15)
d = json.loads(r.stdout)

results = []
for p in d.get("result", []):
    if p.get("synced") != 5:
        continue
    pid = p["id"]
    name = p["name"]
    
    r2 = subprocess.run(["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", f"{BASE}/sync/product/{pid}"], capture_output=True, text=True, timeout=15)
    pd = json.loads(r2.stdout)
    if pd.get("code") != 200:
        continue
    
    variants = pd["result"].get("sync_variants", [])
    if not variants:
        continue
    
    v = variants[0]
    preview_url = None
    for f in v.get("files", []):
        if f.get("type") == "preview":
            preview_url = f.get("preview_url")
            break
        if f.get("type") == "default" and f.get("thumbnail_url") and not preview_url:
            preview_url = f.get("thumbnail_url")
    
    results.append({"name": name, "id": pid, "mockup": preview_url})
    print(f"{pid}: {preview_url}")
    print(f"    {name}")

print(f"\n=== COPY THESE ===")
for r in results:
    if r["mockup"]:
        print(f'  {{ mockup: "{r["mockup"]}", printfulId: {r["id"]} }},  // {r["name"]}')
