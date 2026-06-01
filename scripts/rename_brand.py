"""Rename NEG-AI-TIVE to neg-AI-tive across all source files."""
import os, glob

ROOT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive"
SKIP_DIRS = {"node_modules", ".git", ".vercel", "dist", "__pycache__"}
SKIP_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".ico", ".woff", ".woff2", ".ttf", ".eot", ".zip", ".pyc"}

# Replacement rules: (old_text, new_text)
# Order matters — do specific/varied case replacements first
replacements = [
    # --- DOMAIN & URL ---
    ("negaitive.com", "negaitive.com"),
    ("neg-ai-tive", "neg-ai-tive"),
    ("neg-ai-tive", "neg-ai-tive"),
    
    # --- BRAND NAME IN HEADINGS (all caps style) ---
    ("NEG-AI-TIVE", "NEG-AI-TIVE"),
    ("Neg-AI-tive", "Neg-AI-tive"),
    ("Neg-AI-tive", "Neg-AI-tive"),
    
    # --- PRODUCT NAMES ---
    ("I GOT NEG-AI-TIVE", "Neg-AI-tive Victim"),
    ("I Got Neg-AI-tive", "Neg-AI-tive Victim"),
    ("NEG-AI-TIVE - Classic T-Shirt", "NEG-AI-TIVE - Classic T-Shirt"),
    ("NEG-AI-TIVE - White Glossy Mug", "NEG-AI-TIVE - White Glossy Mug"),
    ("NEG-AI-TIVE - Classic T-Shirt", "NEG-AI-TIVE - Classic T-Shirt"),
    
    # --- PAGE TITLE ---
    ("Neg-AI-tive Satire Landing Page", "neg-AI-tive — Satire Landing Page"),
    ("NEG-AI-TIVE — Satire Landing Page", "NEG-AI-TIVE — Satire Landing Page"),
    
    # --- DESCRIPTION ---
    ("A satirical monument to the negative impacts of AI", "A satirical monument to the negative impacts of AI"),
    ("neg-ai-tive-front", "neg-ai-tive-front"),
    ("neg-ai-tive-back", "neg-ai-tive-back"),
    ("neg-ai-tive-mug", "neg-ai-tive-mug"),
    ("neg-ai-tive-tshirt", "neg-ai-tive-tshirt"),
]

def should_skip(path):
    parts = path.replace(ROOT, "").lstrip("\\/").split("\\")
    for part in parts:
        if part in SKIP_DIRS:
            return True
    ext = os.path.splitext(path)[1].lower()
    if ext in SKIP_EXTS:
        return True
    return False

def rename_file(old_path, new_path):
    if old_path != new_path and os.path.exists(old_path):
        os.makedirs(os.path.dirname(new_path), exist_ok=True)
        os.rename(old_path, new_path)
        print(f"  RENAMED: {os.path.basename(old_path)} -> {os.path.basename(new_path)}")

print("=== Step 1: Rename files ===")
for root, dirs, files in os.walk(ROOT):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for f in files:
        fpath = os.path.join(root, f)
        if should_skip(fpath):
            continue
        # Rename files containing "neg-ai-tive"
        for old, new in [("neg-ai-tive", "neg-ai-tive"), ("neg-ai-tive", "neg-ai-tive")]:
            if old in f.lower():
                new_f = f.replace(old, new)
                new_path = os.path.join(root, new_f)
                os.rename(fpath, new_path)
                print(f"  RENAMED: {f} -> {new_f}")

print("\n=== Step 2: Replace text in files ===")
for root, dirs, files in os.walk(ROOT):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for f in files:
        fpath = os.path.join(root, f)
        if should_skip(fpath):
            continue
        try:
            with open(fpath, 'r', encoding='utf-8') as fh:
                content = fh.read()
        except (UnicodeDecodeError, PermissionError):
            continue
        
        original = content
        for old, new in replacements:
            content = content.replace(old, new)
        
        if content != original:
            with open(fpath, 'w', encoding='utf-8') as fh:
                fh.write(content)
            print(f"  UPDATED: {os.path.relpath(fpath, ROOT)}")

print("\nDone! Brand renamed to NEG-AI-TIVE")
