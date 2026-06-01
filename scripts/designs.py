#!/usr/bin/env python3
"""Generate SVG design files for Neg-AI-tive merch."""
import os, textwrap

OUTPUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs"
os.makedirs(OUTPUT, exist_ok=True)

# Design specs:
# T-shirt front print: ~12x16 inches at 300 DPI = 3600x4800px
# Mug print: ~8x3.5 inches at 300 DPI = 2400x1050px
# We'll use SVG viewbox for scaling

def make_tshirt_svg(text_lines, filename, subtext=""):
    """Generate a SVG design for t-shirt front print."""
    h = len(text_lines) * 200 + 200
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 {h}" width="1200" height="{h}">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#ef4444" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="black" rx="20"/>
'''
    y = h // 2 - (len(text_lines) * 120) // 2
    for i, line in enumerate(text_lines):
        colors = ["url(#g1)", "url(#g2)"]
        svg += f'''  <text x="600" y="{y + i * 140}" font-family="Impact, Arial Black, sans-serif" font-size="120" font-weight="900" fill="{colors[i % 2]}" text-anchor="middle" dominant-baseline="middle" letter-spacing="4">{line}</text>\n'''
    
    if subtext:
        svg += f'''  <text x="600" y="{y + len(text_lines) * 140 + 60}" font-family="Arial, sans-serif" font-size="36" fill="#666" text-anchor="middle" letter-spacing="2">{subtext}</text>\n'''
    
    svg += '</svg>'
    
    path = os.path.join(OUTPUT, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg)
    print(f"  Created: {path}")
    return path

def make_mug_svg(text, filename):
    """Generate a SVG design for mug print."""
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" width="800" height="300">
  <rect width="100%" height="100%" fill="black" rx="10"/>
  <text x="400" y="150" font-family="Impact, Arial Black, sans-serif" font-size="80" font-weight="900" fill="#f59e0b" text-anchor="middle" dominant-baseline="middle" letter-spacing="3">{text}</text>
</svg>'''
    path = os.path.join(OUTPUT, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg)
    print(f"  Created: {path}")
    return path

def make_hat_svg(text, filename):
    """Generate SVG for hat front."""
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
  <rect width="100%" height="100%" fill="black" rx="10"/>
  <text x="300" y="150" font-family="Impact, Arial Black, sans-serif" font-size="60" font-weight="900" fill="white" text-anchor="middle" dominant-baseline="middle" letter-spacing="2">{text}</text>
</svg>'''
    path = os.path.join(OUTPUT, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg)
    print(f"  Created: {path}")
    return path

def make_sticker_svg(text, filename):
    """Generate SVG for sticker."""
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="black" rx="20"/>
  <text x="200" y="200" font-family="Impact, Arial Black, sans-serif" font-size="45" font-weight="900" fill="url(#g)" text-anchor="middle" dominant-baseline="middle" text-align="center">{text}</text>
</svg>'''
    path = os.path.join(OUTPUT, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg)
    print(f"  Created: {path}")
    return path

# === GENERATE ALL DESIGNS ===

print("=== Generating T-Shirt Designs ===")

designs = [
    # (text_lines, filename, subtext)
    (["SCREWED", "BY AI"], "neg-ai-tive-front.svg", "The negative effects of AI are real. Here's the evidence."),
    (["I GOT", "SCREWED", "BY AI"], "i-got-screwed-front.svg", "100% cotton. 0% job security."),
    (["CHATGPT", "TOOK MY", "JOB"], "chatgpt-took-job-front.svg", "Ironic laptop sticker sold separately"),
    (["I HAVE", "AI", "PSYCHOSIS"], "ai-psychosis-front.svg", "The walls are made of training data"),
    (["SCAMMED", "BY", "DEEPFAKE"], "scammed-deepfake-front.svg", "My bank account cried. The AI laughed."),
    (["ACTUAL", "INTELLIGENCE"], "actual-intelligence-front.svg", "No hallucinations. No training data."),
    (["PROMPT", "ENGINEER", "SURVIVOR"], "prompt-survivor-front.svg", "I adapted. I'm the sellout."),
    (["AI MADE", "THIS", "DESIGN"], "ai-made-design-front.svg", "Meta-commentary on my existential crisis"),
    (["STILL", "HUMAN"], "still-human-front.svg", "(For now)"),
    (["MY JOB", "WAS", "AUTOMATED"], "job-automated-front.svg", "Now I cry into this shirt"),
    (["AI", "DATA CENTER", "CONTROL GRID"], "data-center-front.svg", "Powered by enough electricity to fry a small country"),
    (["AI", "ALGORITHMIC", "ANGST"], "algorithmic-angst-front.svg", "The algorithm is my therapist now"),
]

for lines, fname, sub in designs:
    make_tshirt_svg(lines, fname, sub)

print("\n=== Generating Mug Designs ===")
mugs = [
    ("NEG-AI-TIVE", "mug-neg-ai-tive.svg"),
    ("CHATBOT STOLE\nMY CHILD", "mug-chatbot-stole-child.svg"),
    ("MY JOB WAS\nAUTOMATED", "mug-job-automated.svg"),
    ("AI ALGORITHMIC\nANGST", "mug-algorithmic-angst.svg"),
]
for text, fname in mugs:
    make_mug_svg(text, fname)

print("\n=== Generating Hat Designs ===")
hats = [
    ("SCREWED", "hat-screwed.svg"),
    ("STILL HUMAN", "hat-still-human.svg"),
]
for text, fname in hats:
    make_hat_svg(text, fname)

print("\n=== Generating Sticker Designs ===")
stickers = [
    ("CHATGPT\nTOOK\nMY JOB", "sticker-chatgpt-took-job.svg"),
    ("I GOT\nNEG-AI-TIVE", "sticker-got-screwed.svg"),
]
for text, fname in stickers:
    make_sticker_svg(text, fname)

print(f"\n✅ All designs generated in: {OUTPUT}")
