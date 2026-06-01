"""Add Navbar import and component to all page files."""
import os

ROOT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\src\pages"
IMPORT_LINE = "import Navbar from '../components/Navbar';\n"

for fname in sorted(os.listdir(ROOT)):
    if not fname.endswith(".tsx"):
        continue
    fpath = os.path.join(ROOT, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 1. Add import after the last import line
    if IMPORT_LINE not in content:
        # Find the last import
        lines = content.split('\n')
        last_import_idx = -1
        for i, line in enumerate(lines):
            if line.strip().startswith('import '):
                last_import_idx = i
        if last_import_idx >= 0:
            lines.insert(last_import_idx + 1, IMPORT_LINE.strip())
            content = '\n'.join(lines)
    
    # 2. Replace the old nav section with nothing (we use the component now)
    # Remove the old inline nav (from <nav to </nav>)
    old_nav_pattern_start = '      <nav className="fixed top-0 w-full z-50 bg-white border-b-2 border-black">'
    old_nav_pattern_end = '        </nav>'
    
    # Check if the old inline nav section exists
    if old_nav_pattern_start in content:
        # Find start and end
        start_idx = content.find(old_nav_pattern_start)
        end_idx = content.find(old_nav_pattern_end, start_idx)
        if end_idx > 0:
            end_idx += len(old_nav_pattern_end)
            content = content[:start_idx] + content[end_idx:]
    
    # 3. Add <Navbar /> right after the opening div
    content = content.replace(
        '<div className="min-h-screen bg-white text-black">',
        '<div className="min-h-screen bg-white text-black">\n      <Navbar />'
    )
    
    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  UPDATED: {fname}")
    else:
        print(f"  SKIP: {fname}")

print("\nDone!")
