"""Create remaining Printful products one by one."""
import json, subprocess, time

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"
PNG = "https://negaitive.com/designs/rebrand"
BASE = "https://api.printful.com"

tshirt_v = [1980, 1981, 1982, 1983, 1984]
tshirt_p = ["29.99","29.99","29.99","29.99","31.99"]
mug_v = [1320, 4830]
mug_p = ["24.99", "27.99"]
hoodie_v = [12485, 12486, 12487, 12488, 12489]
hoodie_p = ["59.99","59.99","59.99","59.99","64.99"]

remaining = [
    ("AI DATA CENTER GRID - T-Shirt (Black)", "data-center-tshirt-wb.png", tshirt_v, tshirt_p),
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

for name, design, vids, prices in remaining:
    time.sleep(1.5)
    url = f"{PNG}/{design}"
    payload = {
        "sync_product": {"name": name, "thumbnail": url},
        "sync_variants": [{"variant_id": vid, "retail_price": price, "files": [{"url": url}]} for vid, price in zip(vids, prices)]
    }
    cmd = ["curl", "-s", "-X", "POST", "-H", f"Authorization: Bearer {TOKEN}", "-H", "Content-Type: application/json", "-d", json.dumps(payload), f"{BASE}/store/products"]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    d = json.loads(r.stdout)
    if d.get("code") == 200:
        print(f"OK: {name}")
    else:
        print(f"FAIL: {name} — {d.get('error',{}).get('message','')}")
