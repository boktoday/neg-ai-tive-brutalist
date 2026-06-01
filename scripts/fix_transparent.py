"""Force all Printful products to use transparent PNG files."""
import json, subprocess, time

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"
BASE = "https://api.printful.com"
PNG_BASE = "https://neg-ai-tive.vercel.app/designs"

def curl(method, path, data=None):
    cmd = ["curl", "-s", "-X", method, "-H", f"Authorization: Bearer {TOKEN}"]
    if data:
        cmd += ["-H", "Content-Type: application/json", "-d", json.dumps(data)]
    cmd += [f"{BASE}{path}"]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    return json.loads(r.stdout)

# 1. Upload all transparent PNGs to Printful file system with cache-busting
print("Uploading transparent files to Printful...")
designs = [
    "neg-ai-tive-front.png", "i-got-screwed-front.png", "chatgpt-took-job-front.png",
    "ai-psychosis-front.png", "scammed-deepfake-front.png", "actual-intelligence-front.png",
    "ai-made-design-front.png", "prompt-survivor-front.png", "data-center-front.png",
    "still-human-front.png", "job-automated-front.png", "algorithmic-angst-front.png",
    "mug-neg-ai-tive.png", "mug-job-automated.png", "mug-chatbot-stole-child.png",
    "mug-algorithmic-angst.png", "neg-ai-tive-back.png",
]

file_ids = {}
for design in designs:
    url = f"{PNG_BASE}/{design}?v=3"
    r = curl("POST", "/v2/files", {"url": url, "filename": design})
    if "data" in r and r["data"].get("id"):
        fid = r["data"]["id"]
        file_ids[design] = fid
        print(f"  {design} -> file ID: {fid}")
    else:
        print(f"  FAIL: {design} — {r}")
    time.sleep(0.5)

print(f"\nGot {len(file_ids)} file IDs")

# 2. Delete all existing products
print("\nDeleting all existing products...")
prods = curl("GET", "/sync/products?limit=30").get("result", [])
print(f"Found {len(prods)} products")

deleted = 0
for p in prods:
    pid = p["id"]
    if p["synced"] > 0:  # Only delete active products
        r = curl("DELETE", f"/sync/product/{pid}")
        if r.get("code") == 200:
            deleted += 1
            print(f"  Deleted: {p['name']}")
        time.sleep(0.3)

print(f"Deleted {deleted} products")
time.sleep(3)

# 3. Recreate with file IDs
print("\nRecreating all products with transparent file IDs...")

tshirt_vids = [1980, 1981, 1982, 1983, 1984]
tshirt_prices = ["29.99","29.99","29.99","29.99","31.99"]
tshirt_prices_premium = ["34.99","34.99","34.99","34.99","36.99"]
hoodie_vids = [12485, 12486, 12487, 12488, 12489]
hoodie_prices = ["59.99","59.99","59.99","59.99","64.99"]
mug_vids = [1320, 4830]
mug_prices = ["24.99", "27.99"]

def make_prod(name, design_file, vids, prices, back_file=None):
    fid = file_ids.get(design_file)
    if not fid:
        print(f"  SKIP {name}: no file ID for {design_file}")
        return
    
    files = [{"id": fid}]
    if back_file and back_file in file_ids:
        files.append({"id": file_ids[back_file]})
    
    payload = {
        "sync_product": {"name": name, "thumbnail": f"{PNG_BASE}/{design_file}?v=3"},
        "sync_variants": [
            {"variant_id": vid, "retail_price": price, "files": files}
            for vid, price in zip(vids, prices)
        ]
    }
    r = curl("POST", "/store/products", payload)
    if r.get("code") == 200:
        print(f"  OK: {name}")
    else:
        print(f"  FAIL: {name} — {r.get('error',{}).get('message','')}")
    time.sleep(0.7)

products_list = [
    ("NEG-AI-TIVE - Classic T-Shirt", "neg-ai-tive-front.png", tshirt_vids, tshirt_prices, "neg-ai-tive-back.png"),
    ("I GOT NEG-AI-TIVE - Classic T-Shirt", "i-got-screwed-front.png", tshirt_vids, tshirt_prices, None),
    ("CHATGPT TOOK MY JOB - Classic T-Shirt", "chatgpt-took-job-front.png", tshirt_vids, tshirt_prices, None),
    ("I HAVE AI PSYCHOSIS - Classic T-Shirt", "ai-psychosis-front.png", tshirt_vids, tshirt_prices, None),
    ("SCAMMED BY DEEPFAKE - Classic T-Shirt", "scammed-deepfake-front.png", tshirt_vids, tshirt_prices, None),
    ("ACTUAL INTELLIGENCE - Premium T-Shirt", "actual-intelligence-front.png", tshirt_vids, tshirt_prices_premium, None),
    ("AI MADE THIS DESIGN - Classic T-Shirt", "ai-made-design-front.png", tshirt_vids, tshirt_prices, None),
    ("PROMPT ENGINEER SURVIVOR - Premium Hoodie", "prompt-survivor-front.png", hoodie_vids, hoodie_prices, None),
    ("AI DATA CENTER CONTROL GRID - Premium Hoodie", "data-center-front.png", hoodie_vids, hoodie_prices, None),
    ("NEG-AI-TIVE - White Glossy Mug", "mug-neg-ai-tive.png", mug_vids, mug_prices, None),
    ("MY JOB WAS AUTOMATED - Coffee Mug", "mug-job-automated.png", mug_vids, mug_prices, None),
    ("CHATBOT STOLE MY CHILD - Coffee Mug", "mug-chatbot-stole-child.png", mug_vids, mug_prices, None),
    ("AI ALGORITHMIC ANGST - Coffee Mug", "mug-algorithmic-angst.png", mug_vids, mug_prices, None),
]

for name, design, vids, prices, back in products_list:
    make_prod(name, design, vids, prices, back)

print("\nDone! All products recreated with transparent PNG file IDs.")
