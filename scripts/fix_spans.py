"""Fix remaining SCREWED / BY AI span patterns across all source files."""
import os

ROOT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive"
SKIP_DIRS = {"node_modules", ".git", ".vercel", "dist", "__pycache__"}
SKIP_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".ico", ".pyc", ".zip"}

# The nav brand pattern in all page files
old_nav = '<span className="text-red-500">SCREWED</span> <span className="text-gold-400">BY AI</span>'
new_nav = '<span className="text-red-500">NEG-AI-TIVE</span>'

# The hero H1 heading pattern
old_hero_h1 = '>            SCREWED\n          </span>\n          <span class="block text-gradient-gold mt-2 drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">\n            BY AI\n          </span>'
new_hero_h1 = '>            NEG-AI-TIVE\n          </span>'

# The hero inner heading text
old_hero_text = "SCREWED"
new_hero_text = "NEG-AI-TIVE"

count = 0
for root, dirs, files in os.walk(ROOT):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for f in files:
        fpath = os.path.join(root, f)
        ext = os.path.splitext(f)[1].lower()
        if ext in SKIP_EXTS:
            continue
        if not f.endswith(('.tsx', '.ts', '.html', '.md', '.json', '.xml', '.txt')):
            continue
        try:
            with open(fpath, 'r', encoding='utf-8') as fh:
                content = fh.read()
        except:
            continue
        
        original = content
        content = content.replace(old_nav, new_nav)
        
        if content != original:
            with open(fpath, 'w', encoding='utf-8') as fh:
                fh.write(content)
            print(f"  FIXED: {os.path.relpath(fpath, ROOT)}")
            count += 1

print(f"\nFixed {count} files.")
print("Now fix the Hero.tsx heading line...")
