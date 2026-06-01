import sys, json, os, subprocess

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"
BASE = "https://api.printful.com"

def curl_get(path):
    result = subprocess.run(
        ["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", f"{BASE}{path}"],
        capture_output=True, text=True, timeout=30
    )
    return json.loads(result.stdout)

# 1. Get categories
print("=== CATEGORIES (Apparel & Accessories) ===")
cats = curl_get("/categories")["result"]
for c in cats:
    print(f"  {c}")

print("\n=== T-SHIRTS ===")
prods = curl_get("/products?category_id=24&limit=20")["result"]
for p in prods:
    print(f"  ID:{p['id']} | {p['title']} | variants:{p['variant_count']}")

print("\n=== MUGS ===")
mugs = curl_get("/products?category_id=5&limit=10")["result"]
for p in mugs:
    print(f"  ID:{p['id']} | {p['title']} | variants:{p['variant_count']}")

print("\n=== HOODIES ===")
hoods = curl_get("/products?category_id=67&limit=10")["result"]
for p in hoods:
    print(f"  ID:{p['id']} | {p['title']} | variants:{p['variant_count']}")

print("\n=== HATS ===")
hats = curl_get("/products?category_id=96&limit=10")["result"]
for p in hats:
    print(f"  ID:{p['id']} | {p['title']} | variants:{p['variant_count']}")
