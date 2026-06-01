"""Generate a bumper sticker design for SCREWEDBYAI.COM"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs"

# Bumper sticker standard: ~3" x 11" at 300 DPI = 900 x 3300
w, h = 900, 3300

# Fonts
impact_path = "C:\\Windows\\Fonts\\impact.ttf"
arial_path = "C:\\Windows\\Fonts\\arial.ttf"
arialbd_path = "C:\\Windows\\Fonts\\arialbd.ttf"

FONT_BIG = ImageFont.truetype(impact_path, 220) if os.path.exists(impact_path) else ImageFont.load_default()
FONT_SMALL = ImageFont.truetype(arialbd_path, 80) if os.path.exists(arialbd_path) else ImageFont.load_default()
FONT_URL = ImageFont.truetype(impact_path, 160) if os.path.exists(impact_path) else ImageFont.load_default()

# Solid black background
img = Image.new("RGBA", (w, h), (0, 0, 0, 255))
draw = ImageDraw.Draw(img)

# === VERSION 1: Portrait layout ===
# Top: NEG-AI-TIVE (red/gold gradient)
# Bottom: SCREWEDBYAI.COM (white)

# "SCREWED" in red
text = "SCREWED"
bbox = draw.textbbox((0, 0), text, font=FONT_BIG)
tw = bbox[2] - bbox[0]
x = (w - tw) // 2
y = 400
draw.text((x+5, y+5), text, fill=(0, 0, 0, 150), font=FONT_BIG)
draw.text((x, y), text, fill=(239, 68, 68, 255), font=FONT_BIG)

# "BY AI" in gold
text = "BY AI"
bbox = draw.textbbox((0, 0), text, font=FONT_BIG)
tw = bbox[2] - bbox[0]
x = (w - tw) // 2
y = 650
draw.text((x+5, y+5), text, fill=(0, 0, 0, 150), font=FONT_BIG)
draw.text((x, y), text, fill=(245, 158, 11, 255), font=FONT_BIG)

# Separator line
line_y = 1000
for i in range(4):
    draw.rectangle([(50, line_y + i*4), (w-50, line_y + i*4 + 2)], fill=(245, 158, 11, 100))

# URL
text = "SCREWEDBYAI.COM"
bbox = draw.textbbox((0, 0), text, font=FONT_URL)
tw = bbox[2] - bbox[0]
x = (w - tw) // 2
y = 1200
# White text with black outline for readability
draw.text((x-3, y-3), text, fill=(0, 0, 0, 255), font=FONT_URL)
draw.text((x+3, y-3), text, fill=(0, 0, 0, 255), font=FONT_URL)
draw.text((x-3, y+3), text, fill=(0, 0, 0, 255), font=FONT_URL)
draw.text((x+3, y+3), text, fill=(0, 0, 0, 255), font=FONT_URL)
draw.text((x, y), text, fill=(255, 255, 255, 255), font=FONT_URL)

# Tagline
sub = "The negative effects of AI are real. Here's the evidence."
bbox = draw.textbbox((0, 0), sub, font=FONT_SMALL)
sw = bbox[2] - bbox[0]
sx = (w - sw) // 2
sy = 1500
draw.text((sx, sy), sub, fill=(150, 150, 150, 255), font=FONT_SMALL)

# Bottom bumper area
info = "WEATHERPROOF VINYL"
bbox = draw.textbbox((0, 0), info, font=FONT_SMALL)
iw = bbox[2] - bbox[0]
ix = (w - iw) // 2
iy = 1800
draw.text((ix, iy), info, fill=(80, 80, 80, 255), font=FONT_SMALL)

# === VERSION 2: Wide format (classic bumper sticker) ===
w2, h2 = 3300, 900
img2 = Image.new("RGBA", (w2, h2), (0, 0, 0, 255))
draw2 = ImageDraw.Draw(img2)

# Layout: SCREWED | BY AI | SCREWEDBYAI.COM
sections = [
    ("SCREWED", (239, 68, 68, 255), 240),
    ("BY AI", (245, 158, 11, 255), 240),
    ("SCREWEDBYAI.COM", (255, 255, 255, 255), 200),
]

x_offset = 80
for text, color, font_size in sections:
    f = ImageFont.truetype(impact_path, font_size) if os.path.exists(impact_path) else ImageFont.load_default()
    bbox = draw2.textbbox((0, 0), text, font=f)
    tw = bbox[2] - bbox[0]
    x = x_offset
    y = (h2 - bbox[3] + bbox[1]) // 2
    # White outline for the URL
    if "SCREWEDBYAI" in text:
        for ox, oy in [(-3,-3),(3,-3),(-3,3),(3,3)]:
            draw2.text((x+ox, y+oy), text, fill=(0, 0, 0, 255), font=f)
    draw2.text((x, y), text, fill=color, font=f)
    x_offset += tw + 80

# Save both versions
v1_path = os.path.join(OUT, "bumper-sticker-vertical.png")
img.save(v1_path, "PNG")
print(f"Vertical: {v1_path} ({os.path.getsize(v1_path)//1024}KB)")

v2_path = os.path.join(OUT, "bumper-sticker-horizontal.png")
img2.save(v2_path, "PNG")
print(f"Horizontal: {v2_path} ({os.path.getsize(v2_path)//1024}KB)")

print("\nDone! Both bumper sticker designs created.")
print("Upload the horizontal version to Sticker Mule for best results.")
