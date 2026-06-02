"""Fetch ALL products with mockups, prices, and generate correct website data."""
import json, subprocess

TOKEN = "9KhcIznCqmWtOGdiNSYuMWUI0fOrAIuy4UnkXiJ8"
BASE = "https://api.printful.com"

# Get all products (active only)
r = subprocess.run(["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", f"{BASE}/sync/products?limit=100"], capture_output=True, text=True, timeout=15)
d = json.loads(r.stdout)

products = []
for p in d.get("result", []):
    if p.get("synced") != 5:
        continue
    
    pid = p["id"]
    name = p["name"]
    
    # Get product detail for variants
    r2 = subprocess.run(["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", f"{BASE}/sync/product/{pid}"], capture_output=True, text=True, timeout=15)
    pd = json.loads(r2.stdout)
    if pd.get("code") != 200:
        continue
    
    variants = pd["result"].get("sync_variants", [])
    if not variants:
        continue
    
    # Get preview mockup from first variant
    v = variants[0]
    preview_url = None
    for f in v.get("files", []):
        if f.get("type") == "preview":
            preview_url = f.get("preview_url")
            break
    
    # Get price range
    prices = sorted(set(float(vv["retail_price"]) for vv in variants))
    min_price = prices[0] if prices else 0
    max_price = prices[-1] if len(prices) > 1 else None
    
    # Parse type and color from name
    name_lower = name.lower()
    item_type = "T-Shirt"
    if "hoodie" in name_lower:
        item_type = "Hoodie"
    elif "mug" in name_lower:
        item_type = "Mug"
    
    color = "(Black)"
    if "(White)" in name:
        color = "(White)"
    elif "(Black)" in name:
        color = "(Black)"
    
    # Clean display name (remove type and color suffix)
    display = name.replace(" - T-Shirt", "").replace(" - Premium T-Shirt", "").replace(" - Hoodie", "").replace(" - Mug", "").replace(" - Classic T-Shirt", "").replace("(Black)", "").replace("(White)", "").strip()
    
    price_str = f"${min_price:.2f}"
    if max_price and max_price > min_price:
        price_str += f"+"
    
    product = {
        "id": pid,
        "name": display,
        "type": f"{item_type} {color}",
        "price": price_str,
        "mockup": preview_url or "",
        "printfulId": pid,
    }
    products.append(product)
    
    print(f"{pid}: {name}")
    print(f"  Type: {item_type} {color}")
    print(f"  Price: {price_str}")
    print(f"  Mockup: {preview_url}")
    print()

print(f"\n=== {len(products)} products ===\n")
print("Copy this into the website:")
print()
print("const allProducts = [")
for p in products:
    m = p["mockup"] or "/designs/rebrand/neg-ai-tive-tshirt-wb.png"
    print(f'  {{ name: "{p["name"]}", type: "{p["type"]}", price: "{p["price"]}", mockup: "{m}", printfulId: {p["printfulId"]} }},')
print("];")
