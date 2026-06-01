"""Generate simple bumper stickers: just SCREWEDBYAI.COM on white and black backgrounds."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs"

# Bumper sticker size: 3000 x 900 pixels (10" x 3" at 300 DPI)
w, h = 3000, 900

# Font - try Impact for boldness, fallback to Arial Black
fonts = ["C:\\Windows\\Fonts\\impact.ttf", "C:\\Windows\\Fonts\\ariblk.ttf", "C:\\Windows\\Fonts\\arialbd.ttf"]
FONT = None
for p in fonts:
    if os.path.exists(p):
        FONT = ImageFont.truetype(p, 200)
        break
if not FONT:
    FONT = ImageFont.load_default()

url = "SCREWEDBYAI.COM"

def draw_centered(draw, text, font, color, bg_color, width, height):
    # Wide centered layout
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    x = (width - tw) // 2
    # Vertically centered
    th = bbox[3] - bbox[1]
    y = (height - th) // 2 - 10  # slight nudge up for visual centering
    draw.text((x, y), text, fill=color, font=font)

# === VERSION 1: White background, Black text ===
img_w = Image.new("RGB", (w, h), (255, 255, 255))
draw_w = ImageDraw.Draw(img_w)
draw_centered(draw_w, url, FONT, (0, 0, 0), (255, 255, 255), w, h)

v1_path = os.path.join(OUT, "bumper-white-black.png")
img_w.save(v1_path, "PNG")
print(f"White/Black: {v1_path} ({os.path.getsize(v1_path)//1024}KB)")

# === VERSION 2: Black background, White text ===
img_b = Image.new("RGB", (w, h), (0, 0, 0))
draw_b = ImageDraw.Draw(img_b)
draw_centered(draw_b, url, FONT, (255, 255, 255), (0, 0, 0), w, h)

v2_path = os.path.join(OUT, "bumper-black-white.png")
img_b.save(v2_path, "PNG")
print(f"Black/White: {v2_path} ({os.path.getsize(v2_path)//1024}KB)")

print("\nDone! Two simple bumper sticker designs with just the URL.")
