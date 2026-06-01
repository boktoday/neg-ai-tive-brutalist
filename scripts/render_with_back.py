"""Generate NEG-AI-TIVE T-Shirt with URL on the back."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs"

# Find Impact font
font_path = "C:\\Windows\\Fonts\\impact.ttf"
arial_path = "C:\\Windows\\Fonts\\arial.ttf"
FONT_TITLE = ImageFont.truetype(font_path, 180) if os.path.exists(font_path) else ImageFont.load_default()
FONT_SUB = ImageFont.truetype(arial_path, 36) if os.path.exists(arial_path) else ImageFont.load_default()
FONT_BACK = ImageFont.truetype(font_path, 80) if os.path.exists(font_path) else ImageFont.load_default()

w, h = 1200, 1600

# === FRONT DESIGN ===
img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

lines = ["SCREWED", "BY AI"]
total_h = len(lines) * 200
y_start = (h - total_h) // 2
colors = [(239, 68, 68, 255), (245, 158, 11, 255)]

for i, line in enumerate(lines):
    color = colors[i % 2]
    bbox = draw.textbbox((0, 0), line, font=FONT_TITLE)
    tw = bbox[2] - bbox[0]
    x = (w - tw) // 2
    y = y_start + i * 200
    draw.text((x+4, y+4), line, fill=(0, 0, 0, 100), font=FONT_TITLE)
    draw.text((x, y), line, fill=color, font=FONT_TITLE)

subtext = "The negative effects of AI are real. Here's the evidence."
bbox = draw.textbbox((0, 0), subtext, font=FONT_SUB)
sw = bbox[2] - bbox[0]
sx = (w - sw) // 2
sy = y_start + len(lines) * 200 + 60
draw.text((sx, sy), subtext, fill=(100, 100, 100, 255), font=FONT_SUB)

front_path = os.path.join(OUT, "neg-ai-tive-front.png")
img.save(front_path, "PNG")
print(f"Front: {front_path}")

# === BACK DESIGN (just the URL) ===
img_back = Image.new("RGBA", (w, h), (0, 0, 0, 0))
draw_back = ImageDraw.Draw(img_back)

url = "SCREWEDBYAI.COM"
bbox = draw_back.textbbox((0, 0), url, font=FONT_BACK)
tw = bbox[2] - bbox[0]
x = (w - tw) // 2
y = h // 2 - 40

# URL text in white with slight shadow
draw_back.text((x+3, y+3), url, fill=(0, 0, 0, 80), font=FONT_BACK)
draw_back.text((x, y), url, fill=(255, 255, 255, 200), font=FONT_BACK)

back_path = os.path.join(OUT, "neg-ai-tive-back.png")
img_back.save(back_path, "PNG")
print(f"Back: {back_path}")

# === COMBINED mockup (front + vertical stripe showing back) ===
# For a combined image showing both sides
combined = Image.new("RGBA", (w * 2 + 60, h), (0, 0, 0, 0))
combined.paste(img, (0, 0), img)
combined.paste(img_back, (w + 60, 0), img_back)
# Separator line
draw_c = ImageDraw.Draw(combined)
draw_c.line([(w + 28, 0), (w + 28, h)], fill=(255, 255, 255, 30), width=2)
# Labels
draw_c.text((w//2 - 40, h - 60), "FRONT", fill=(255, 255, 255, 100), font=FONT_SUB)
draw_c.text((w + 60 + w//2 - 40, h - 60), "BACK", fill=(255, 255, 255, 100), font=FONT_SUB)

mockup_path = os.path.join(OUT, "neg-ai-tive-front-back-mockup.png")
combined.save(mockup_path, "PNG")
print(f"Mockup: {mockup_path}")

print("\nDone! Check designs/neg-ai-tive-back.png and the mockup.")
