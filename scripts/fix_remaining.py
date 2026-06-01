"""Fix remaining brand references that weren't caught by the initial rename."""
import os, glob

ROOT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive"
SKIP_DIRS = {"node_modules", ".git", ".vercel", "dist", "__pycache__"}
SKIP_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".ico", ".pyc", ".zip", ".svg"}

replacements = [
    # Hero heading (was: SCREWED / BY AI)
    ('<span class="block text-gradient drop-shadow-[0_0_40px_rgba(239,68,68,0.3)]">\n            SCREWED\n          </span>\n          <span class="block text-gradient-gold mt-2 drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">\n            BY AI\n          </span>',
     '<span class="block text-gradient drop-shadow-[0_0_40px_rgba(239,68,68,0.3)]">\n            NEG-AI-TIVE\n          </span>\n          <span class="block text-gradient-gold mt-2 drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">\n            EFFECTS\n          </span>'),
    
    # Hero subtext
    ("The Hidden Cost of Artificial Intelligence", "The Hidden Cost of Artificial Intelligence"),
    
    # Badge text
    ("Awareness project on the real harms of AI", "Awareness project on the real harms of AI"),
    
    # Footer brand description - already partially replaced, fix the rest
    ("Awareness project documenting the real-world harms of AI", "Awareness project documenting the real-world harms of AI"),
    
    # Page descriptions on issue briefs
    ("Part of the <a href=\"/\" class=\"text-red-400 hover:text-red-300\">SCREWED BY AI</a> awareness project.",
     "Part of the <a href=\"/\" class=\"text-red-400 hover:text-red-300\">NEG-AI-TIVE</a> awareness project."),
    
    # llms.txt title
    ("# NEG-AI-TIVE", "# NEG-AI-TIVE"),
    ("> Awareness project documenting the real-world harms of AI", "> Awareness project on the real harms of artificial intelligence"),
    
    # sitemap - already has negaitive.com domain, fix the name references
    ("NEG-AI-TIVE — Awareness Project", "NEG-AI-TIVE — Awareness Project"),
    
    # Design file references in render scripts
    ("SCREWED\\nBY AI", "NEG-AI-TIVE"),
    
    # Description
    ("The negative effects of AI are real. Here's the evidence.", "The negative effects of AI are real. Here's the evidence."),
    
    # Still Human product name
    ("Still Human (Neg-AI-tive)", "Still Human (Neg-AI-tive)"),
]

for root, dirs, files in os.walk(ROOT):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for f in files:
        fpath = os.path.join(root, f)
        ext = os.path.splitext(f)[1].lower()
        if ext in SKIP_EXTS:
            continue
        try:
            with open(fpath, 'r', encoding='utf-8') as fh:
                content = fh.read()
        except:
            continue
        
        original = content
        for old, new in replacements:
            content = content.replace(old, new)
        
        if content != original:
            with open(fpath, 'w', encoding='utf-8') as fh:
                fh.write(content)
            print(f"  UPDATED: {os.path.relpath(fpath, ROOT)}")

print("\nRemaining brand references fixed!")
