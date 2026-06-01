"""Update all Printful sync product designs to use transparent PNGs."""
import json, subprocess, time

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"
BASE = "https://api.printful.com"
PNG_BASE = "https://neg-ai-tive.vercel.app/designs"

def run_curl(method, path, data=None):
    cmd = ["curl", "-s", "-X", method,
           "-H", f"Authorization: Bearer {TOKEN}",
           "-H", "Content-Type: application/json"]
    if data:
        cmd += ["-d", json.dumps(data)]
    cmd += [f"{BASE}{path}"]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    return json.loads(result.stdout)

def get_all_products():
    """Get all sync products."""
    d = run_curl("GET", "/sync/products?limit=20")
    return d.get("result", [])

def get_variant(variant_id):
    """Get a sync variant."""
    d = run_curl("GET", f"/sync/variant/{variant_id}")
    return d.get("result")

def update_variant(variant_id, design_url):
    """Update a variant's design file."""
    payload = {
        "variant_id": variant_id,
        "files": [{"url": design_url}]
    }
    d = run_curl("PUT", f"/store/variant/{variant_id}", data=payload)
    return d

# Map product names to design files
product_to_design = {
    "NEG-AI-TIVE - Classic T-Shirt": "neg-ai-tive-front.png",
    "I GOT NEG-AI-TIVE - Classic T-Shirt": "i-got-screwed-front.png",
    "CHATGPT TOOK MY JOB - Classic T-Shirt": "chatgpt-took-job-front.png",
    "I HAVE AI PSYCHOSIS - Classic T-Shirt": "ai-psychosis-front.png",
    "SCAMMED BY DEEPFAKE - Classic T-Shirt": "scammed-deepfake-front.png",
    "ACTUAL INTELLIGENCE - Premium T-Shirt": "actual-intelligence-front.png",
    "AI MADE THIS DESIGN - Classic T-Shirt": "ai-made-design-front.png",
    "PROMPT ENGINEER SURVIVOR - Premium Hoodie": "prompt-survivor-front.png",
    "AI DATA CENTER CONTROL GRID - Premium Hoodie": "data-center-front.png",
    "NEG-AI-TIVE - White Glossy Mug": "mug-neg-ai-tive.png",
    "MY JOB WAS AUTOMATED - Coffee Mug": "mug-job-automated.png",
    "CHATBOT STOLE MY CHILD - Coffee Mug": "mug-chatbot-stole-child.png",
    "AI ALGORITHMIC ANGST - Coffee Mug": "mug-algorithmic-angst.png",
}

print("Fetching all products...")
products = get_all_products()
print(f"Found {len(products)} products\n")

for prod in products:
    name = prod["name"]
    design = product_to_design.get(name)
    if not design:
        print(f"  SKIP: {name} (no mapping)")
        continue
    
    design_url = f"{PNG_BASE}/{design}"
    print(f"  Updating: {name}")
    print(f"    Design: {design_url}")
    
    # Get product details to find variant IDs
    prod_id = prod["id"]
    prod_detail = run_curl("GET", f"/sync/product/{prod_id}")
    if prod_detail.get("code") != 200:
        print(f"    FAIL: Could not fetch product details")
        continue
    
    variants = prod_detail["result"].get("sync_variants", [])
    success = 0
    
    for variant in variants:
        vid = variant["id"]
        result = update_variant(vid, design_url)
        if result.get("code") == 200:
            success += 1
        else:
            print(f"    FAIL variant {vid}: {result.get('error', {}).get('message', 'unknown')}")
    
    print(f"    Updated {success}/{len(variants)} variants")
    time.sleep(0.5)  # Rate limit

print("\nDone! Open Printful dashboard to verify designs are updated.")
