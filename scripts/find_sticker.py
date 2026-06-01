"""Find sticker/bumper sticker products in the Printful catalog."""
import json

d = json.load(open(r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\scripts\all_prods.json", encoding="utf-8"))
for p in d.get("result", []):
    t = p.get("title", "").lower()
    tt = p.get("type", "").lower()
    n = p.get("type_name", "").lower()
    match = any(kw in t for kw in ["sticker", "decal", "bumper", "vinyl", "label", "patch"])
    match = match or any(kw in n for kw in ["sticker", "decal", "bumper", "vinyl", "label", "patch"])
    if match:
        print(f"ID:{p['id']:>5} | {p['title'][:60]} | {p['type_name'][:40]}")
        for v in p.get("variants", []):
            au = "AU" if v.get("availability_regions", {}).get("AU") else ""
            if au:
                print(f"         Var {v['id']}: {v['size']} ${v['price']} {au}")
