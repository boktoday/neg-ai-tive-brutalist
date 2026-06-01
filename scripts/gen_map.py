"""Generate a B&W world map with data centre dots using MiniMax image API."""
import requests, json, os, time

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\designs"
os.makedirs(OUT, exist_ok=True)

prompt = "A minimalist black and white world map silhouette. Clean flat continents on white background with small black dots at major technology hub locations representing data centres. Simple, bold, high contrast. No labels. No text. Vector illustration style."

headers = {"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"}
payload = {"model": "image-01", "prompt": prompt, "n": 1}

print("Generating map image...")
r = requests.post("https://api.minimax.io/v1/image_generation", headers=headers, json=payload, timeout=60)
if r.status_code != 200:
    print(f"HTTP Error: {r.status_code}: {r.text[:300]}")
    exit(1)

d = r.json()
print(f"Response: {json.dumps(d, indent=2)[:500]}")

if "data" in d and "image_urls" in d["data"]:
    url = d["data"]["image_urls"][0]
    print(f"Downloading: {url[:80]}")
    img = requests.get(url, timeout=30)
    out_path = os.path.join(OUT, "world-map-bw.png")
    with open(out_path, "wb") as f:
        f.write(img.content)
    print(f"Saved: {out_path} ({len(img.content)//1024}KB)")
else:
    print(f"Unexpected response: {d}")
