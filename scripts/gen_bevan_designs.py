"""Regenerate merch PNGs using actual Bevan font for Printful."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\designs\rebrand"
BEVAN_PATH = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\designs\Bevan-Regular.ttf"
os.makedirs(OUT, exist_ok=True)

if os.path.exists(BEVAN_PATH) and os.path.getsize(BEVAN_PATH) > 50000:
    FONT = ImageFont.truetype(BEVAN_PATH, 160)
    FONT_SM = ImageFont.truetype(BEVAN_PATH, 70)
    print(f"Using Bevan font!")
else:
    FONT = ImageFont.truetype("C:\\Windows\\Fonts\\impact.ttf", 180)
    FONT_SM = ImageFont.truetype("C:\\Windows\\Fonts\\impact.ttf", 80)
    print("Bevan not found, using Impact fallback")

def make_tshirt(lines, filename, white_bg, subtext="", w=1200, h=1600):
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    text_color = (0, 0, 0, 255) if white_bg else (255, 255, 255, 255)
    sub_color = (100, 100, 100, 255) if white_bg else (180, 180, 180, 255)
    
    total_h = len(lines) * 190
    y_start = (h - total_h) // 2
    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=FONT)
        tw = bbox[2] - bbox[0]
        x = (w - tw) // 2
        y = y_start + i * 190
        if white_bg:
            draw.text((x+3, y+3), line, fill=(0, 0, 0, 50), font=FONT)
        draw.text((x, y), line, fill=text_color, font=FONT)
    if subtext:
        bbox = draw.textbbox((0, 0), subtext, font=FONT_SM)
        sw = bbox[2] - bbox[0]
        sx = (w - sw) // 2
        sy = y_start + len(lines) * 190 + 50
        draw.text((sx, sy), subtext, fill=sub_color, font=FONT_SM)
    path = os.path.join(OUT, filename)
    img.save(path, "PNG")
    print(f"  {filename} ({os.path.getsize(path)//1024}KB)")

def make_mug(text, filename, white_bg, w=1800, h=600):
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    text_color = (0, 0, 0, 255) if white_bg else (255, 255, 255, 255)
    lines = text.split("\n")
    total_h = len(lines) * 110
    y_start = (h - total_h) // 2
    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=FONT)
        tw = bbox[2] - bbox[0]
        x = (w - tw) // 2
        y = y_start + i * 110
        draw.text((x, y), line, fill=text_color, font=FONT)
    path = os.path.join(OUT, filename)
    img.save(path, "PNG")
    print(f"  {filename} ({os.path.getsize(path)//1024}KB)")

print("=== Regenerating ALL designs with Bevan font ===")

# T-shirts
tshirts = [
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
for lines, fname, bg, sub in tshirts:
    make_tshirt(lines, fname, bg, sub)

# Mugs
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
for text, fname, bg in mugs:
    make_mug(text, fname, bg)

print(f"\nAll {len(tshirts) + len(mugs)} designs regenerated with Bevan font!")
