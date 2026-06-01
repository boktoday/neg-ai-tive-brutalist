"""Create all remaining Printful products."""
import json, subprocess

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"
BASE = "https://api.printful.com"
PNG_BASE = "https://neg-ai-tive.vercel.app/designs"

def create_product(name, design_file, product_id, variant_ids, retail_price, mug=False, hoodie=False):
    """Create a sync product with the design."""
    url = f"{PNG_BASE}/{design_file}"
    
    if mug:
        payload = {
            "sync_product": {"name": name, "thumbnail": url},
            "sync_variants": [
                {"variant_id": 1320, "retail_price": retail_price, "files": [{"url": url}]},
                {"variant_id": 4830, "retail_price": str(float(retail_price) + 3), "files": [{"url": url}]},
            ]
        }
    elif hoodie:
        payload = {
            "sync_product": {"name": name, "thumbnail": url},
            "sync_variants": [
                {"variant_id": vid, "retail_price": price, "files": [{"url": url}]}
                for vid, price in zip(variant_ids, retail_price)
            ]
        }
    else:
        payload = {
            "sync_product": {"name": name, "thumbnail": url},
            "sync_variants": [
                {"variant_id": vid, "retail_price": price, "files": [{"url": url}]}
                for vid, price in zip(variant_ids, retail_price)
            ]
        }
    
    cmd = ["curl", "-s", "-X", "POST",
           "-H", f"Authorization: Bearer {TOKEN}",
           "-H", "Content-Type: application/json",
           "-d", json.dumps(payload),
           f"{BASE}/store/products"]
    
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    d = json.loads(result.stdout)
    
    if d.get("code") == 200:
        print(f"  OK: {name} — ID: {d['result']['id']}")
    else:
        print(f"  FAIL: {name} — {d}")
    return d

# T-Shirt variants (Black, S-2XL)
tshirt_variants = [1980, 1981, 1982, 1983, 1984]  # S, M, L, XL, 2XL
tshirt_prices = ["29.99", "29.99", "29.99", "29.99", "31.99"]  # 2XL extra

# Hoodie variants (Black, S-2XL)
hoodie_variants = [12485, 12486, 12487, 12488, 12489]
hoodie_prices = ["59.99", "59.99", "59.99", "59.99", "64.99"]

products_to_create = [
    # Name, design_file, type_info
    ("AI MADE THIS DESIGN - Classic T-Shirt", "ai-made-design-front.png", {"variants": tshirt_variants, "prices": tshirt_prices}),
    ("MY JOB WAS AUTOMATED - Coffee Mug", "mug-job-automated.png", {"mug": True}),
    ("CHATBOT STOLE MY CHILD - Coffee Mug", "mug-chatbot-stole-child.png", {"mug": True}),
    ("AI ALGORITHMIC ANGST - Coffee Mug", "mug-algorithmic-angst.png", {"mug": True}),
    ("PROMPT ENGINEER SURVIVOR - Premium Hoodie", "prompt-survivor-front.png", {"hoodie": True, "variants": hoodie_variants, "prices": hoodie_prices}),
    ("AI DATA CENTER CONTROL GRID - Premium Hoodie", "data-center-front.png", {"hoodie": True, "variants": hoodie_variants, "prices": hoodie_prices}),
]

print("Creating remaining products...\n")
for name, design, opts in products_to_create:
    if opts.get("mug"):
        create_product(name, design, None, None, "24.99", mug=True)
    elif opts.get("hoodie"):
        create_product(name, design, None, opts["variants"], opts["prices"], hoodie=True)
    else:
        create_product(name, design, None, opts["variants"], opts["prices"], hoodie=False)

print("\nDone!")
