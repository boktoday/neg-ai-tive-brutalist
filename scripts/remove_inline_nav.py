"""Remove inline nav sections from all page files."""
import os, re

ROOT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\src\pages"

for fname in sorted(os.listdir(ROOT)):
    if not fname.endswith(".tsx"):
        continue
    fpath = os.path.join(ROOT, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Remove the entire nav element: from <nav ...> to </nav>
    pattern = r'<nav className="fixed top-0 w-full z-50 bg-white border-b-2 border-black">.*?</nav>'
    content = re.sub(pattern, '', content, flags=re.DOTALL)
    
    # Also remove the ArrowLeft import if it's no longer needed in the nav
    # (keep it because the issue cards might use it - actually they don't, but leave for safety)
    
    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  FIXED: {fname}")
    else:
        print(f"  SKIP: {fname}")

print("\nDone!")
