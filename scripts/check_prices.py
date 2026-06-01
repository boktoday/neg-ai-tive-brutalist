"""Fetch actual Printful retail prices for all products."""
import json, subprocess

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"

result = subprocess.run(
    ["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}",
     "https://api.printful.com/sync/products?limit=30"],
    capture_output=True, text=True, timeout=15
)
d = json.loads(result.stdout)

for p in d.get("result", []):
    if p["synced"] == 0:
        continue
    pid = p["id"]
    r2 = subprocess.run(
        ["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}",
         f"https://api.printful.com/sync/product/{pid}"],
        capture_output=True, text=True, timeout=15
    )
    pd = json.loads(r2.stdout)
    if pd.get("code") != 200:
        continue
    variants = pd["result"].get("sync_variants", [])
    if variants:
        prices = set()
        for v in variants:
            prices.add(v["retail_price"])
        sorted_prices = sorted(prices, key=float)
        print(f"  {p['name']}")
        print(f"    Prices: {', '.join(f'${x}' for x in sorted_prices)}")
