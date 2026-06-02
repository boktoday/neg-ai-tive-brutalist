"""Generate anime-style B&W backgrounds for issue brief pages using MiniMax image API."""
import requests, json, os, time

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\designs\anime-bg"
os.makedirs(OUT, exist_ok=True)

headers = {"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"}

pages = [
    {
        "slug": "datacentres",
        "prompt": "anime style black and white greyscale illustration of massive data centre buildings with glowing server windows stretching into the horizon at night, smoke and steam rising from cooling towers, power lines crossing the sky, cinematic wide angle, detailed linework, high contrast noir style, atmospheric, pen and ink texture, no color except subtle grey tones"
    },
    {
        "slug": "deepfakes",
        "prompt": "anime style black and white greyscale illustration of a cracked mirror face, distorted reflection, digital glitch patterns, surveillance camera eye, noir mystery atmosphere, high contrast ink drawing style, detailed crosshatching, cinematic shadows, no color"
    },
    {
        "slug": "chatbots",
        "prompt": "anime style black and white greyscale illustration of a teenager sitting alone in a dark room illuminated only by a phone screen showing a chatbot conversation bubble, empty chair across from them, lonely atmosphere, high contrast noir manga style, detailed linework, no color"
    },
    {
        "slug": "jobs",
        "prompt": "anime style black and white greyscale illustration of an empty office cubicle farm, monitors flickering with code, a single office chair overturned, abandoned workplace, noir atmosphere, high contrast ink drawing, detailed machinery and cables, no color"
    },
    {
        "slug": "ai-psychosis",
        "prompt": "anime style black and white greyscale illustration of a person holding their head in distress while floating AI chatbot bubbles swirl around them like hallucinations, distorted faces in the static, psychological horror manga style, high contrast, detailed hatching, no color"
    },
    {
        "slug": "algorithms",
        "prompt": "anime style black and white greyscale illustration of a giant eye made of binary code and data streams overlooking a city, searchlight beams scanning the streets, surveillance state vibe, noir cyberpunk manga style, high contrast, detailed, no color"
    },
    {
        "slug": "actual-intelligence",
        "prompt": "anime style black and white greyscale illustration of a giant robot puppet master pulling strings over tiny human figures, cracked stage, theatrical spotlight, noir manga style, high contrast ink drawing, smoke and mirrors, no color"
    },
    {
        "slug": "copyright",
        "prompt": "anime style black and white greyscale illustration of an artists easel with a blank canvas being consumed by digital glitch static, paintbrushes snapped, copyright symbol dissolving into data fragments, noir manga style, high contrast, no color"
    },
    {
        "slug": "engage-attach",
        "prompt": "anime style black and white greyscale illustration of a person chained to a giant smartphone with dopamine sparks firing from the screen, slot machine reels in the background, addiction noir manga style, high contrast, detailed linework, no color"
    },
]

print(f"Generating {len(pages)} anime-style B&W backgrounds...\n")

for page in pages:
    print(f"Creating {page['slug']}...")
    payload = {"model": "image-01", "prompt": page["prompt"], "n": 1}
    
    r = requests.post("https://api.minimax.io/v1/image_generation", headers=headers, json=payload, timeout=60)
    
    if r.status_code != 200:
        print(f"  HTTP Error: {r.text[:100]}")
        continue
    
    d = r.json()
    if "data" in d and "image_urls" in d["data"]:
        url = d["data"]["image_urls"][0]
        print(f"  URL: {url[:60]}...")
        img = requests.get(url, timeout=30)
        out_path = os.path.join(OUT, f"{page['slug']}.png")
        with open(out_path, "wb") as f:
            f.write(img.content)
        print(f"  Saved: {page['slug']}.png ({len(img.content)//1024}KB)")
    else:
        print(f"  API Error: {d.get('base_resp', {}).get('status_msg', str(d)[:100])}")
    
    time.sleep(3)

print(f"\nDone! {len(pages)} backgrounds generated in {OUT}")
