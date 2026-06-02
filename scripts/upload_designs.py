"""Upload all rebranded design files to Printful and create products with proper mockups."""
import json, subprocess, time, os

NEW_TOKEN = "9KhcIznCqmWtOGdiNSYuMWUI0fOrAIuy4UnkXiJ8"
BASE = "https://api.printful.com"
PNG_BASE = "https://negaitive.com/designs/rebrand"
DESIGNS_DIR = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\designs\rebrand"

# All design files
design_files = sorted([f for f in os.listdir(DESIGNS_DIR) if f.endswith(".png")])
print(f"Found {len(design_files)} design files")

def curl(method, path, data=None, form=None):
    cmd = ["curl", "-s", "-X", method, "-H", f"Authorization: Bearer {NEW_TOKEN}"]
    if data:
        cmd += ["-H", "Content-Type: application/json", "-d", json.dumps(data)]
    if form:
        cmd += ["-F", form]
    cmd += [f"{BASE}{path}"]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    try:
        return json.loads(r.stdout)
    except:
        return {"error": r.stdout[:200]}

# Step 1: Upload all files via v2 API
print("\n=== Uploading designs to Printful ===")
file_ids = {}
for fname in design_files:
    fpath = os.path.join(DESIGNS_DIR, fname)
    url = f"{PNG_BASE}/{fname}"
    r = curl("POST", "/v2/files", {"url": url, "filename": fname})
    if r.get("data", {}).get("id"):
        fid = r["data"]["id"]
        file_ids[fname] = fid
        print(f"  OK {fname} -> file ID: {fid}")
    else:
        print(f"  FAIL {fname}: {r}")
    time.sleep(0.5)

print(f"\nUploaded {len(file_ids)} files")

# Step 2: Create all products using file IDs
print("\n=== Creating products ===")
tshirt_v = [1980, 1981, 1982, 1983, 1984]
tshirt_p = ["29.99","29.99","29.99","29.99","31.99"]
mug_v = [1320, 4830]
mug_p = ["24.99", "27.99"]
hoodie_v = [12485, 12486, 12487, 12488, 12489]
hoodie_p = ["59.99","59.99","59.99","59.99","64.99"]

products = [
    ("NEG-AI-TIVE - T-Shirt (Black)", "neg-ai-tive-tshirt-wb.png", tshirt_v, tshirt_p),
    ("NEG-AI-TIVE - T-Shirt (White)", "neg-ai-tive-tshirt-bw.png", tshirt_v, tshirt_p),
    ("I GOT NEG-AI-TIVE - T-Shirt (Black)", "i-got-neg-tshirt-wb.png", tshirt_v, tshirt_p),
    ("I GOT NEG-AI-TIVE - T-Shirt (White)", "i-got-neg-tshirt-bw.png", tshirt_v, tshirt_p),
    ("CHATGPT TOOK MY JOB - T-Shirt (Black)", "chatgpt-job-tshirt-wb.png", tshirt_v, tshirt_p),
    ("CHATGPT TOOK MY JOB - T-Shirt (White)", "chatgpt-job-tshirt-bw.png", tshirt_v, tshirt_p),
    ("I HAVE AI PSYCHOSIS - T-Shirt (Black)", "ai-psychosis-tshirt-wb.png", tshirt_v, tshirt_p),
    ("I HAVE AI PSYCHOSIS - T-Shirt (White)", "ai-psychosis-tshirt-bw.png", tshirt_v, tshirt_p),
    ("SCAMMED BY DEEPFAKE - T-Shirt (Black)", "deepfake-tshirt-wb.png", tshirt_v, tshirt_p),
    ("SCAMMED BY DEEPFAKE - T-Shirt (White)", "deepfake-tshirt-bw.png", tshirt_v, tshirt_p),
    ("ACTUAL INTELLIGENCE - T-Shirt (Black)", "actual-intel-tshirt-wb.png", tshirt_v, ["34.99"]*4+["36.99"]),
    ("ACTUAL INTELLIGENCE - T-Shirt (White)", "actual-intel-tshirt-bw.png", tshirt_v, ["34.99"]*4+["36.99"]),
    ("MY JOB WAS AUTOMATED - T-Shirt (Black)", "job-auto-tshirt-wb.png", tshirt_v, tshirt_p),
    ("MY JOB WAS AUTOMATED - T-Shirt (White)", "job-auto-tshirt-bw.png", tshirt_v, tshirt_p),
    ("STILL HUMAN - T-Shirt (Black)", "still-human-tshirt-wb.png", tshirt_v, tshirt_p),
    ("STILL HUMAN - T-Shirt (White)", "still-human-tshirt-bw.png", tshirt_v, tshirt_p),
    ("AI DATA CENTER GRID - T-Shirt (Black)", "data-center-tshirt-wb.png", tshirt_v, tshirt_p),
    ("AI DATA CENTER GRID - T-Shirt (White)", "data-center-tshirt-bw.png", tshirt_v, tshirt_p),
    ("AI ALGORITHMIC ANGST - T-Shirt (Black)", "algorithm-tshirt-wb.png", tshirt_v, tshirt_p),
    ("AI ALGORITHMIC ANGST - T-Shirt (White)", "algorithm-tshirt-bw.png", tshirt_v, tshirt_p),
    ("AI MADE THIS DESIGN - T-Shirt (Black)", "ai-made-tshirt-wb.png", tshirt_v, tshirt_p),
    ("AI MADE THIS DESIGN - T-Shirt (White)", "ai-made-tshirt-bw.png", tshirt_v, tshirt_p),
    ("PROMPT ENGINEER SURVIVOR - Hoodie (Black)", "prompt-hoodie-wb.png", hoodie_v, hoodie_p),
    ("PROMPT ENGINEER SURVIVOR - Hoodie (White)", "prompt-hoodie-bw.png", hoodie_v, hoodie_p),
    ("NEG-AI-TIVE - Mug (White)", "mug-neg-ai-tive-bw.png", mug_v, mug_p),
    ("NEG-AI-TIVE - Mug (Black)", "mug-neg-ai-tive-wb.png", mug_v, mug_p),
    ("CHATBOT STOLE MY CHILD - Mug (White)", "mug-chatbot-bw.png", mug_v, mug_p),
    ("CHATBOT STOLE MY CHILD - Mug (Black)", "mug-chatbot-wb.png", mug_v, mug_p),
    ("MY JOB WAS AUTOMATED - Mug (White)", "mug-job-auto-bw.png", mug_v, mug_p),
    ("MY JOB WAS AUTOMATED - Mug (Black)", "mug-job-auto-wb.png", mug_v, mug_p),
    ("AI ALGORITHMIC ANGST - Mug (White)", "mug-algorithm-bw.png", mug_v, mug_p),
    ("AI ALGORITHMIC ANGST - Mug (Black)", "mug-algorithm-wb.png", mug_v, mug_p),
]

for name, design, vids, prices in products:
    fid = file_ids.get(design)
    if not fid:
        print(f"  SKIP {name}: no file ID for {design}")
        continue
    
    url = f"{PNG_BASE}/{design}"
    payload = {
        "sync_product": {"name": name, "thumbnail": url},
        "sync_variants": [
            {"variant_id": vid, "retail_price": price, "files": [{"id": fid}]}
            for vid, price in zip(vids, prices)
        ]
    }
    r = curl("POST", "/store/products", payload)
    if r.get("code") == 200:
        print(f"  OK: {name}")
    else:
        print(f"  FAIL: {name} — {r.get('error',{}).get('message','')}")
    time.sleep(1)

print("\nDone! Products created with uploaded file IDs — mockups will auto-generate.")
