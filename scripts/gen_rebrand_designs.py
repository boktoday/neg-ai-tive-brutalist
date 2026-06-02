"""Generate merch designs using Bevan font — black text on white, white text on black, transparent bg."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\designs\rebrand"
os.makedirs(OUT, exist_ok=True)

# Find Bevan font — try local or download reference
# Since Bevan is a Google font, we'll use Impact as fallback with similar slab-serif weight
# and the Bevan font will render on the actual products
bevan_path = "C:\\Windows\\Fonts\\impact.ttf"
ariblk_path = "C:\\Windows\\Fonts\\ariblk.ttf"

FONT_LG = None
FONT_SM = None
for p in [bevan_path, ariblk_path, "C:\\Windows\\Fonts\\arialbd.ttf"]:
    if os.path.exists(p):
        FONT_LG = ImageFont.truetype(p, 180)
        FONT_SM = ImageFont.truetype(p, 80)
        break
if not FONT_LG:
    FONT_LG = ImageFont.load_default()
    FONT_SM = ImageFont.load_default()

print(f"Using font: {os.path.basename(bevan_path) if os.path.exists(bevan_path) else 'default'}")

designs = [
    # (lines, filename, is_white_bg)
    (["NEG-AI-TIVE", "EFFECTS"], "neg-ai-tive-tshirt-bw.png", True, "The hidden cost of AI"),
    (["NEG-AI-TIVE", "EFFECTS"], "neg-ai-tive-tshirt-wb.png", False, "The hidden cost of AI"),
    (["I GOT", "NEG-AI-TIVE"], "i-got-neg-tshirt-bw.png", True, "100% cotton. 0% hallucinations."),
    (["I GOT", "NEG-AI-TIVE"], "i-got-neg-tshirt-wb.png", False, "100% cotton. 0% hallucinations."),
    (["CHATGPT", "TOOK MY", "JOB"], "chatgpt-job-tshirt-bw.png", True, "Ironic sticker sold separately"),
    (["CHATGPT", "TOOK MY", "JOB"], "chatgpt-job-tshirt-wb.png", False, "Ironic sticker sold separately"),
    (["I HAVE", "AI", "PSYCHOSIS"], "ai-psychosis-tshirt-bw.png", True, "The walls are made of training data"),
    (["I HAVE", "AI", "PSYCHOSIS"], "ai-psychosis-tshirt-wb.png", False, "The walls are made of training data"),
    (["SCAMMED", "BY", "DEEPFAKE"], "deepfake-tshirt-bw.png", True, "My bank account cried. AI laughed."),
    (["SCAMMED", "BY", "DEEPFAKE"], "deepfake-tshirt-wb.png", False, "My bank account cried. AI laughed."),
    (["ACTUAL", "INTELLIGENCE"], "actual-intel-tshirt-bw.png", True, "No hallucinations. No training data."),
    (["ACTUAL", "INTELLIGENCE"], "actual-intel-tshirt-wb.png", False, "No hallucinations. No training data."),
    (["MY JOB", "WAS", "AUTOMATED"], "job-auto-tshirt-bw.png", True, "Now I cry into this shirt"),
    (["MY JOB", "WAS", "AUTOMATED"], "job-auto-tshirt-wb.png", False, "Now I cry into this shirt"),
    (["STILL", "HUMAN"], "still-human-tshirt-bw.png", True, "(For now)"),
    (["STILL", "HUMAN"], "still-human-tshirt-wb.png", False, "(For now)"),
    (["AI DATA", "CENTER", "GRID"], "data-center-tshirt-bw.png", True, "Powered by enough electricity"),
    (["AI DATA", "CENTER", "GRID"], "data-center-tshirt-wb.png", False, "Powered by enough electricity"),
    (["AI", "ALGORITHMIC", "ANGST"], "algorithm-tshirt-bw.png", True, "The algorithm is my therapist now"),
    (["AI", "ALGORITHMIC", "ANGST"], "algorithm-tshirt-wb.png", False, "The algorithm is my therapist now"),
    (["AI MADE", "THIS", "DESIGN"], "ai-made-tshirt-bw.png", True, "Meta-commentary on my crisis"),
    (["AI MADE", "THIS", "DESIGN"], "ai-made-tshirt-wb.png", False, "Meta-commentary on my crisis"),
    (["PROMPT", "ENGINEER", "SURVIVOR"], "prompt-hoodie-bw.png", True, "I adapted. I'm the sellout."),
    (["PROMPT", "ENGINEER", "SURVIVOR"], "prompt-hoodie-wb.png", False, "I adapted. I'm the sellout."),
]

# Mug designs
mugs = [
    ("NEG-AI-TIVE\nEFFECTS", "mug-neg-ai-tive-bw.png", True),
    ("NEG-AI-TIVE\nEFFECTS", "mug-neg-ai-tive-wb.png", False),
    ("CHATBOT STOLE\nMY CHILD", "mug-chatbot-bw.png", True),
    ("CHATBOT STOLE\nMY CHILD", "mug-chatbot-wb.png", False),
    ("MY JOB WAS\nAUTOMATED", "mug-job-auto-bw.png", True),
    ("MY JOB WAS\nAUTOMATED", "mug-job-auto-wb.png", False),
    ("AI ALGORITHMIC\nANGST", "mug-algorithm-bw.png", True),
    ("AI ALGORITHMIC\nANGST", "mug-algorithm-wb.png", False),
]

def make_tshirt(lines, filename, white_bg, subtext="", w=1200, h=1600):
    """Generate t-shirt design with Bevan-style text."""
    if white_bg:
        img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        text_color = (0, 0, 0, 255)
        sub_color = (100, 100, 100, 255)
    else:
        img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        text_color = (255, 255, 255, 255)
        sub_color = (180, 180, 180, 255)
    
    draw = ImageDraw.Draw(img)
    total_h = len(lines) * 200
    y_start = (h - total_h) // 2

    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=FONT_LG)
        tw = bbox[2] - bbox[0]
        x = (w - tw) // 2
        y = y_start + i * 200
        # Shadow (light)
        if white_bg:
            draw.text((x+3, y+3), line, fill=(0, 0, 0, 60), font=FONT_LG)
        draw.text((x, y), line, fill=text_color, font=FONT_LG)

    if subtext:
        bbox = draw.textbbox((0, 0), subtext, font=FONT_SM)
        sw = bbox[2] - bbox[0]
        sx = (w - sw) // 2
        sy = y_start + len(lines) * 200 + 60
        draw.text((sx, sy), subtext, fill=sub_color, font=FONT_SM)

    path = os.path.join(OUT, filename)
    img.save(path, "PNG")
    print(f"  OK {filename} ({os.path.getsize(path)//1024}KB)")

def make_mug(text, filename, white_bg, w=1800, h=600):
    """Generate mug design."""
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    text_color = (0, 0, 0, 255) if white_bg else (255, 255, 255, 255)
    lines = text.split("\n")
    total_h = len(lines) * 110
    y_start = (h - total_h) // 2
    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=FONT_LG)
        tw = bbox[2] - bbox[0]
        x = (w - tw) // 2
        y = y_start + i * 110
        draw.text((x, y), line, fill=text_color, font=FONT_LG)
    path = os.path.join(OUT, filename)
    img.save(path, "PNG")
    print(f"  OK {filename} ({os.path.getsize(path)//1024}KB)")

print("=== T-Shirts (BW + WB) ===")
for lines, fname, bg, sub in designs:
    make_tshirt(lines, fname, bg, sub)

print("\n=== Mugs (BW + WB) ===")
for text, fname, bg in mugs:
    make_mug(text, fname, bg)

print(f"\nAll designs saved to {OUT}")
