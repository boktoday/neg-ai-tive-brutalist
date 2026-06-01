"""Download Printful mockup images locally."""
import json, subprocess, os

OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs\mockups"
os.makedirs(OUT, exist_ok=True)

# Map product names to clean filenames
products = {
    "NEG-AI-TIVE - Classic T-Shirt": "neg-ai-tive-tshirt",
    "I GOT NEG-AI-TIVE - Classic T-Shirt": "i-got-screwed-tshirt",
    "CHATGPT TOOK MY JOB - Classic T-Shirt": "chatgpt-took-job-tshirt",
    "I HAVE AI PSYCHOSIS - Classic T-Shirt": "ai-psychosis-tshirt",
    "SCAMMED BY DEEPFAKE - Classic T-Shirt": "scammed-deepfake-tshirt",
    "ACTUAL INTELLIGENCE - Premium T-Shirt": "actual-intelligence-tshirt",
    "AI MADE THIS DESIGN - Classic T-Shirt": "ai-made-design-tshirt",
    "PROMPT ENGINEER SURVIVOR - Premium Hoodie": "prompt-survivor-hoodie",
    "AI DATA CENTER CONTROL GRID - Premium Hoodie": "data-center-hoodie",
    "NEG-AI-TIVE - White Glossy Mug": "neg-ai-tive-mug",
    "MY JOB WAS AUTOMATED - Coffee Mug": "job-automated-mug",
    "CHATBOT STOLE MY CHILD - Coffee Mug": "chatbot-stole-child-mug",
    "AI ALGORITHMIC ANGST - Coffee Mug": "algorithmic-angst-mug",
}

# Mockup URLs from the API
urls = {
    "NEG-AI-TIVE - Classic T-Shirt": "https://files.cdn.printful.com/files/081/0818efe404f9a0c59da612bd79134aa3_preview.png",
    "I GOT NEG-AI-TIVE - Classic T-Shirt": "https://files.cdn.printful.com/files/9f8/9f8bdc48f9fd5ed0ed2af588f1a10961_preview.png",
    "CHATGPT TOOK MY JOB - Classic T-Shirt": "https://files.cdn.printful.com/files/dc8/dc8b18130605638363660a427881a5a3_preview.png",
    "I HAVE AI PSYCHOSIS - Classic T-Shirt": "https://files.cdn.printful.com/files/6fb/6fb4798b8c02f74988ac17651de36b25_preview.png",
    "SCAMMED BY DEEPFAKE - Classic T-Shirt": "https://files.cdn.printful.com/files/a72/a729ec4982eb260adec27f066526d7ee_preview.png",
    "ACTUAL INTELLIGENCE - Premium T-Shirt": "https://files.cdn.printful.com/files/1f8/1f89d0ff9f4c2fdac69af343be9546a4_preview.png",
    "AI MADE THIS DESIGN - Classic T-Shirt": "https://files.cdn.printful.com/files/f8a/f8aa334af412c4bea42f19ce236a0014_preview.png",
    "PROMPT ENGINEER SURVIVOR - Premium Hoodie": "https://files.cdn.printful.com/files/aa5/aa592bdb4e43c8295eb267d7d571aa80_preview.png",
    "AI DATA CENTER CONTROL GRID - Premium Hoodie": "https://files.cdn.printful.com/files/14e/14e3df8debf324a11be38e8d9d6dbf1c_preview.png",
    "NEG-AI-TIVE - White Glossy Mug": "https://files.cdn.printful.com/files/27d/27d55d2855c28d704dc135a53238c486_preview.png",
    "MY JOB WAS AUTOMATED - Coffee Mug": "https://files.cdn.printful.com/files/f64/f642b997008349b80b20b043c5aba62f_preview.png",
    "CHATBOT STOLE MY CHILD - Coffee Mug": "https://files.cdn.printful.com/files/c48/c485df3b2cee7035e8014217983d0837_preview.png",
    "AI ALGORITHMIC ANGST - Coffee Mug": "https://files.cdn.printful.com/files/ca1/ca19a2607e65afa4edc725b74f8ed437_preview.png",
}

print("Downloading mockup images...")
for name, url in urls.items():
    fname = products.get(name, name.lower().replace(" ", "-")) + ".png"
    path = os.path.join(OUT, fname)
    result = subprocess.run(
        ["curl", "-s", "-o", path, url],
        capture_output=True, text=True, timeout=30
    )
    if os.path.exists(path) and os.path.getsize(path) > 0:
        print(f"  OK {fname} ({os.path.getsize(path)//1024}KB)")
    else:
        print(f"  FAIL {fname}")

print(f"\nDone! {len(urls)} mockups downloaded to {OUT}")
