import json
d = json.load(open(r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\scripts\all_prods.json", encoding="utf-8"))
print(type(d))
if isinstance(d, dict):
    for k in d:
        print(f"  key: {k}")
    r = d.get("result", [])
    print(f"  result type: {type(r)}")
    if r:
        print(f"  first item type: {type(r[0])}")
        if isinstance(r[0], dict):
            print(f"  keys: {list(r[0].keys())[:10]}")
elif isinstance(d, list):
    print(f"  length: {len(d)}")
    print(f"  first item: {d[0][:100] if isinstance(d[0], str) else d[0]}")
