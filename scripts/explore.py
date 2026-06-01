import json

# Product 37 - Gildan 980 T-Shirt
d = json.load(open(r'C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\scripts\product37.json', encoding='utf-8'))
p = d['result']['product']
print(f"=== PRODUCT ===")
print(f"Title: {p['title']}")
print(f"ID: {p['id']}")
print(f"Type: {p['type']}")
print(f"Brand: {p.get('brand','')}")
print(f"Variants: {p['variant_count']}")
print(f"Techniques: {[t['display_name'] for t in p['techniques']]}")
print(f"Placements: {[f['title'] for f in p.get('files',[])]}")
print(f"Origin: {p.get('origin_country','')}")
print()

# Show first few variant prices
print("=== SAMPLE VARIANTS ===")
for v in d['result']['variants'][:5]:
    print(f"  Variant ID: {v['id']} | Size: {v['size']} | Color: {v['color']} | Price: {v['price']}")
print(f"  ... and {len(d['result']['variants'])-5} more")
