"""Regenerate PNG designs with TRANSPARENT backgrounds for t-shirt printing."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs"

# Find fonts
FONT_CANDIDATES = [
    "C:\\Windows\\Fonts\\impact.ttf",
    "C:\\Windows\\Fonts\\ariblk.ttf",
    "C:\\Windows\\Fonts\\arialbd.ttf",
]
FONT_TITLE = None
FONT_SUB = None
FONT_MUG = None

for path in FONT_CANDIDATES:
    if os.path.exists(path):
        if "impact" in path.lower():
            FONT_TITLE = ImageFont.truetype(path, 180)
            FONT_SUB = ImageFont.truetype(path.replace("impact.ttf", "arial.ttf"), 40)
            FONT_MUG = ImageFont.truetype(path, 100)
        elif "ariblk" in path.lower() and not FONT_TITLE:
            FONT_TITLE = ImageFont.truetype(path, 160)
            FONT_MUG = ImageFont.truetype(path, 90)
        elif "arialbd" in path.lower() and not FONT_SUB:
            FONT_SUB = ImageFont.truetype(path, 40)

if not FONT_TITLE:
    FONT_TITLE = ImageFont.load_default()
if not FONT_SUB:
    FONT_SUB = ImageFont.load_default()
if not FONT_MUG:
    FONT_MUG = FONT_TITLE

print(f"Using font: Impact")

def make_tshirt_png(lines, filename, subtext="", w=1200, h=1600):
    # RGBA with transparent background
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    total_h = len(lines) * 200
    y_start = (h - total_h) // 2

    colors = [(239, 68, 68, 255), (245, 158, 11, 255)]  # Red, Gold (full opacity)
    for i, line in enumerate(lines):
        color = colors[i % 2]
        bbox = draw.textbbox((0, 0), line, font=FONT_TITLE)
        tw = bbox[2] - bbox[0]
        x = (w - tw) // 2
        y = y_start + i * 200
        # Shadow
        draw.text((x+4, y+4), line, fill=(0, 0, 0, 100), font=FONT_TITLE)
        # Main text
        draw.text((x, y), line, fill=color, font=FONT_TITLE)

    if subtext:
        bbox = draw.textbbox((0, 0), subtext, font=FONT_SUB)
        sw = bbox[2] - bbox[0]
        sx = (w - sw) // 2
        sy = y_start + len(lines) * 200 + 60
        draw.text((sx, sy), subtext, fill=(100, 100, 100, 255), font=FONT_SUB)

    path = os.path.join(OUT, filename)
    img.save(path, "PNG")
    print(f"  OK {filename} ({os.path.getsize(path)//1024}KB, transparent)")

def make_mug_png(text, filename, w=1800, h=600):
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    lines = text.split("\\n") if "\\n" in text else text.split("\n")
    total_h = len(lines) * 110
    y_start = (h - total_h) // 2
    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=FONT_MUG)
        tw = bbox[2] - bbox[0]
        x = (w - tw) // 2
        y = y_start + i * 110
        draw.text((x+3, y+3), line, fill=(0, 0, 0, 100), font=FONT_MUG)
        draw.text((x, y), line, fill=(245, 158, 11, 255), font=FONT_MUG)
    path = os.path.join(OUT, filename)
    img.save(path, "PNG")
    print(f"  OK {filename} ({os.path.getsize(path)//1024}KB, transparent)")

# === REGENERATE ALL ===
print("=== T-SHIRTS ===")
tshirts = [
    (["SCREWED", "BY AI"], "neg-ai-tive-front.png", "The negative effects of AI are real. Here's the evidence."),
    (["I GOT", "SCREWED", "BY AI"], "i-got-screwed-front.png", "100% cotton. 0% job security."),
    (["CHATGPT", "TOOK MY", "JOB"], "chatgpt-took-job-front.png", "Ironic laptop sticker sold separately"),
    (["I HAVE", "AI", "PSYCHOSIS"], "ai-psychosis-front.png", "The walls are made of training data"),
    (["SCAMMED", "BY", "DEEPFAKE"], "scammed-deepfake-front.png", "My bank account cried. The AI laughed."),
    (["ACTUAL", "INTELLIGENCE"], "actual-intelligence-front.png", "No hallucinations. No training data."),
    (["PROMPT", "ENGINEER", "SURVIVOR"], "prompt-survivor-front.png", "I adapted. I'm the sellout."),
    (["AI MADE", "THIS", "DESIGN"], "ai-made-design-front.png", "Meta-commentary on my existential crisis"),
    (["STILL", "HUMAN"], "still-human-front.png", "(For now)"),
    (["MY JOB", "WAS", "AUTOMATED"], "job-automated-front.png", "Now I cry into this shirt"),
    (["AI DATA", "CENTER", "CONTROL GRID"], "data-center-front.png", "Powered by enough electricity"),
    (["AI", "ALGORITHMIC", "ANGST"], "algorithmic-angst-front.png", "The algorithm is my therapist now"),
]
for lines, fname, sub in tshirts:
    make_tshirt_png(lines, fname, sub)

print("\n=== MUGS ===")
mugs = [
    ("NEG-AI-TIVE", "mug-neg-ai-tive.png"),
    ("CHATBOT STOLE\nMY CHILD", "mug-chatbot-stole-child.png"),
    ("MY JOB WAS\nAUTOMATED", "mug-job-automated.png"),
    ("AI ALGORITHMIC\nANGST", "mug-algorithmic-angst.png"),
]
for text, fname in mugs:
    make_mug_png(text, fname)

print("\n=== HATS ===")
hats = [("SCREWED", "hat-screwed.png"), ("STILL HUMAN", "hat-still-human.png")]
for text, fname in hats:
    img = Image.new("RGBA", (900, 500), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    bbox = draw.textbbox((0, 0), text, font=FONT_TITLE)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text(((900 - tw) // 2, (500 - th) // 2), text, fill=(255, 255, 255, 255), font=FONT_TITLE)
    path = os.path.join(OUT, fname)
    img.save(path, "PNG")
    print(f"  OK {fname}")

print("\n=== STICKERS ===")
stickers = [
    ("CHATGPT\nTOOK MY\nJOB", "sticker-chatgpt-took-job.png"),
    ("I GOT\nNEG-AI-TIVE", "sticker-got-screwed.png"),
]
for text, fname in stickers:
    img = Image.new("RGBA", (600, 600), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    lines = text.split("\n")
    total_h = len(lines) * 80
    y_start = (600 - total_h) // 2
    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=FONT_MUG)
        tw = bbox[2] - bbox[0]
        x = (600 - tw) // 2
        y = y_start + i * 80
        draw.text((x, y), line, fill=(239, 68, 68, 255), font=FONT_MUG)
    path = os.path.join(OUT, fname)
    img.save(path, "PNG")
    print(f"  OK {fname}")

print(f"\nAll transparent PNGs saved to {OUT}")
