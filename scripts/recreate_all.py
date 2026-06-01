"""Delete all products and recreate with transparent designs."""

import json, subprocess, time

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"
BASE = "https://api.printful.com"
DESIGN = "https://neg-ai-tive.vercel.app/designs"

def curl(method, path, data=None):
    cmd = ["curl", "-s", "-X", method, "-H", f"Authorization: Bearer {TOKEN}"]
    if data:
        cmd += ["-H", "Content-Type: application/json", "-d", json.dumps(data)]
    cmd += [f"{BASE}{path}"]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    return json.loads(r.stdout)

# 1. Get all existing products
print("Fetching existing products...")
prods = curl("GET", "/sync/products?limit=20").get("result", [])
print(f"Found {len(prods)} products")

# 2. Delete them all (oldest first to avoid conflicts)
print("\nDeleting all products...")
for p in prods:
    pid = p["id"]
    r = curl("DELETE", f"/sync/product/{pid}")
    if r.get("code") == 200:
        print(f"  Deleted: {p['name']} (ID: {pid})")
    else:
        print(f"  FAIL: {p['name']} — {r.get('error', {}).get('message', '')}")
    time.sleep(0.3)

# 3. Wait for deletes to propagate
print("\nWaiting 3 seconds for cache to clear...")
time.sleep(3)

# 4. Recreate all products with transparent designs
print("\nRecreating all products...")

tshirt_name = "Gildan 980"  # Will be auto-detected from sync
tshirt_variants = [1980, 1981, 1982, 1983, 1984]  # S-2XL Black
tshirt_prices = ["29.99", "29.99", "29.99", "29.99", "31.99"]

mug_variants = [1320, 4830]  # 11oz, 15oz
mug_prices = ["24.99", "27.99"]

hoodie_variants = [12485, 12486, 12487, 12488, 12489]  # S-2XL Black
hoodie_prices = ["59.99", "59.99", "59.99", "59.99", "64.99"]

products = [
    # (name, design_file, variant_ids, prices, is_mug)
    ("NEG-AI-TIVE - Classic T-Shirt", "neg-ai-tive-front.png", tshirt_variants, tshirt_prices, False),
    ("I GOT NEG-AI-TIVE - Classic T-Shirt", "i-got-screwed-front.png", tshirt_variants, tshirt_prices, False),
    ("CHATGPT TOOK MY JOB - Classic T-Shirt", "chatgpt-took-job-front.png", tshirt_variants, tshirt_prices, False),
    ("I HAVE AI PSYCHOSIS - Classic T-Shirt", "ai-psychosis-front.png", tshirt_variants, tshirt_prices, False),
    ("SCAMMED BY DEEPFAKE - Classic T-Shirt", "scammed-deepfake-front.png", tshirt_variants, tshirt_prices, False),
    ("ACTUAL INTELLIGENCE - Premium T-Shirt", "actual-intelligence-front.png", tshirt_variants, ["34.99"]*4 + ["36.99"], False),
    ("AI MADE THIS DESIGN - Classic T-Shirt", "ai-made-design-front.png", tshirt_variants, tshirt_prices, False),
    ("PROMPT ENGINEER SURVIVOR - Premium Hoodie", "prompt-survivor-front.png", hoodie_variants, hoodie_prices, False),
    ("AI DATA CENTER CONTROL GRID - Premium Hoodie", "data-center-front.png", hoodie_variants, hoodie_prices, False),
    ("NEG-AI-TIVE - White Glossy Mug", "mug-neg-ai-tive.png", mug_variants, mug_prices, True),
    ("MY JOB WAS AUTOMATED - Coffee Mug", "mug-job-automated.png", mug_variants, mug_prices, True),
    ("CHATBOT STOLE MY CHILD - Coffee Mug", "mug-chatbot-stole-child.png", mug_variants, mug_prices, True),
    ("AI ALGORITHMIC ANGST - Coffee Mug", "mug-algorithmic-angst.png", mug_variants, mug_prices, True),
]

for name, design, variants, prices, is_mug in products:
    url = f"{DESIGN}/{design}"
    payload = {
        "sync_product": {"name": name, "thumbnail": url},
        "sync_variants": [
            {"variant_id": vid, "retail_price": price, "files": [{"url": url}]}
            for vid, price in zip(variants, prices)
        ]
    }
    
    r = curl("POST", "/store/products", payload)
    if r.get("code") == 200:
        print(f"  OK: {name} — ID: {r['result']['id']}")
    else:
        print(f"  FAIL: {name} — {r.get('error', {}).get('message', '')}")
    time.sleep(0.5)

print("\nDone! All products recreated with transparent PNGs.")
