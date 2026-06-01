import json
d = json.load(open(r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\scripts\all_prods.json", encoding="utf-8"))
print(f"Code: {d.get('code')}")
print(f"Error: {d.get('error')}")
print(f"Result: {str(d.get('result'))[:200]}")
