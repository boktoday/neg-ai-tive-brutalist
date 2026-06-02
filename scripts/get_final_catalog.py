"""Get mockups for ALL active products (22 active + 8 mugs)."""
import json, subprocess, time

TOKEN = "9KhcIznCqmWtOGdiNSYuMWUI0fOrAIuy4UnkXiJ8"
BASE = "https://api.printful.com"

# Get all products
r = subprocess.run(["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", f"{BASE}/sync/products?limit=100"], capture_output=True, text=True, timeout=15)
all_prods = json.loads(r.stdout)

print("Active products:")
results = []
for p in all_prods.get("result", []):
    if p.get("synced") not in [5, 2]:
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
    preview = None
    for f in v.get("files", []):
        if f.get("type") == "preview":
            preview = f.get("preview_url")
            break
    
    # Get prices
    prices = sorted(set(float(vv["retail_price"]) for vv in variants))
    min_p = prices[0] if prices else 0
    max_p = prices[-1] if len(prices) > 1 else None
    price_str = f"${min_p:.2f}" + ("+" if max_p and max_p > min_p else "")
    
    # Parse type
    n = name.lower()
    t = "Mug" if "mug" in n else ("Hoodie" if "hoodie" in n else "T-Shirt")
    c = "(Black)" if "(Black)" in name else "(White)" if "(White)" in name else ""
    display_name = name.replace(" - Classic T-Shirt", "").replace(" - Premium T-Shirt", "").replace(" - T-Shirt", "").replace(" - Hoodie", "").replace(" - Mug", "").replace(" - Coffee Mug", "").replace(" - Classic T-Shirt", "").replace(" - White Glossy Mug", "")
    
    results.append({
        "id": pid,
        "name": display_name,
        "type": f"{t} {c}".strip(),
        "price": price_str,
        "mockup": preview or "",
    })
    time.sleep(0.5)

print(f"\n=== {len(results)} products ===\n")
print("Copy this into the Merch component:\n")
print("const allProducts = [")
for r in results:
    m = r["mockup"] or ""
    print(f'  {{ name: "{r["name"]}", type: "{r["type"]}", price: "{r["price"]}", mockup: "{m}", printfulId: {r["id"]} }},')
print("];")
