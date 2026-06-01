import json, subprocess, sys

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"
PROD_IDS = {
    484: "AS Colour 5101 Hoodie (AU)",
    1574: "Surf Cap US-ONLY",
}

for pid, name in PROD_IDS.items():
    result = subprocess.run(
        ["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}",
         f"https://api.printful.com/products/{pid}"],
        capture_output=True, text=True, timeout=15
    )
    d = json.loads(result.stdout)
    print(f"\n=== {name} ===")
    for v in d.get("result", {}).get("variants", []):
        if "black" in v.get("name", "").lower():
            print(f"  Variant ID: {v['id']} | Size: {v['size']} | Color: {v['color']} | ${v['price']}")
