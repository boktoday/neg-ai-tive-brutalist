"""Fetch Printful-generated mockup preview URLs for all products."""
import json, subprocess

TOKEN = "9KhcIznCqmWtOGdiNSYuMWUI0fOrAIuy4UnkXiJ8"
BASE = "https://api.printful.com"

r = subprocess.run(["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", f"{BASE}/sync/products?limit=40"], capture_output=True, text=True, timeout=15)
d = json.loads(r.stdout)

mockups = {}
for p in d.get("result", []):
    if p.get("synced") != 5:
        continue
    pid = p["id"]
    name = p["name"]
    
    # Get product details to find preview URLs
    r2 = subprocess.run(["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", f"{BASE}/sync/product/{pid}"], capture_output=True, text=True, timeout=15)
    pd = json.loads(r2.stdout)
    
    if pd.get("code") != 200:
        continue
    
    variants = pd["result"].get("sync_variants", [])
    if not variants:
        continue
    
    # Get the first variant's preview image
    v = variants[0]
    preview_url = None
    for f in v.get("files", []):
        if f.get("type") == "preview":
            preview_url = f.get("preview_url")
            break
        if f.get("type") == "default" and f.get("thumbnail_url"):
            if not preview_url:
                preview_url = f.get("thumbnail_url")
    
    mockups[name] = preview_url
    short = name[:50]
    print(f"  {preview_url or 'NONE'}")
    print(f"    <- {short}")

print(f"\n=== Product -> Mockup Map ===")
for name, url in mockups.items():
    if url:
        print(f"  {url}")
