"""Generate placeholder mockups for items without Printful products."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs\mockups"

# Find a bold font
font_paths = [
    "C:\\Windows\\Fonts\\impact.ttf",
    "C:\\Windows\\Fonts\\ariblk.ttf",
    "C:\\Windows\\Fonts\\arialbd.ttf",
    "C:\\Windows\\Fonts\\segoeuib.ttf",
]
FONT = None
for p in font_paths:
    if os.path.exists(p):
        FONT = ImageFont.truetype(p, 48)
        break
if not FONT:
    FONT = ImageFont.load_default()

def make_sticker_mockup(filename, text):
    """Make a sticker-style mockup - glossy black circle on grey bg."""
    w, h = 600, 600
    img = Image.new("RGB", (w, h), (30, 30, 35))
    draw = ImageDraw.Draw(img)
    
    # Sticker circle
    draw.ellipse([(50, 50), (550, 550)], fill=(15, 15, 15), outline=(60, 60, 60), width=3)
    
    # Text
    lines = text.split("\n")
    total_h = len(lines) * 60
    y_start = (h - total_h) // 2
    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=FONT)
        tw = bbox[2] - bbox[0]
        x = (w - tw) // 2
        y = y_start + i * 60
        # Red for first line, gold for second
        color = (239, 68, 68) if i == 0 else (245, 158, 11)
        draw.text((x+2, y+2), line, fill=(0, 0, 0), font=FONT)
        draw.text((x, y), line, fill=color, font=FONT)
    
    # Glossy highlight
    draw.ellipse([(120, 100), (480, 250)], fill=(255, 255, 255, 8))
    
    path = os.path.join(OUT, filename)
    img.save(path, "PNG")
    print(f"  OK {filename} ({os.path.getsize(path)//1024}KB)")
    return path

def make_hat_mockup(filename, text):
    """Make a hat-style mockup - cap shape on dark bg."""
    w, h = 600, 600
    img = Image.new("RGB", (w, h), (30, 30, 35))
    draw = ImageDraw.Draw(img)
    
    # Hat silhouette (simple curved shape)
    points = [(100, 500), (50, 200), (100, 100), (500, 100), (550, 200), (500, 500)]
    draw.polygon(points, fill=(20, 20, 25), outline=(50, 50, 55))
    
    # Bill of the hat
    draw.ellipse([(50, 450), (550, 530)], fill=(15, 15, 20), outline=(40, 40, 45))
    
    # Text on hat
    bbox = draw.textbbox((0, 0), text, font=FONT)
    tw = bbox[2] - bbox[0]
    x = (w - tw) // 2
    y = 220
    draw.text((x+2, y+2), text, fill=(0, 0, 0), font=FONT)
    draw.text((x, y), text, fill=(255, 255, 255), font=FONT)
    
    path = os.path.join(OUT, filename)
    img.save(path, "PNG")
    print(f"  OK {filename} ({os.path.getsize(path)//1024}KB)")
    return path

print("Creating missing mockups...")
make_sticker_mockup("chatgpt-took-job-tshirt.png", "CHATGPT\nTOOK MY\nJOB")
make_hat_mockup("hat-still-human.png", "STILL\nHUMAN")

print("\nDone!")
