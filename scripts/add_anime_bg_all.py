"""Add anime B&W background to hero section of all issue brief pages."""
import os, re

ROOT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\src\pages"
SKIP = {"DataCentres.tsx"}  # Already done

pages = {
    "Deepfakes.tsx": "deepfakes",
    "Chatbots.tsx": "chatbots",
    "Jobs.tsx": "jobs",
    "AIPsychosis.tsx": "ai-psychosis",
    "Algorithms.tsx": "algorithms",
    "ActualIntelligence.tsx": "actual-intelligence",
    "Copyright.tsx": "copyright",
    "Engagement.tsx": "engage-attach",
}

INSERT_HTML = '''      {/* Hero with anime bg */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="/designs/anime-bg/{slug}.png" alt="" className="w-full h-full object-cover opacity-50" style={{ objectPosition: '50% 30%' }} />
        </div>'''

for fname, slug in pages.items():
    fpath = os.path.join(ROOT, fname)
    if not os.path.exists(fpath):
        print(f"  SKIP: {fname} (not found)")
        continue
    
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the old hero section opening with the new one
    old = '<section className="pt-32 pb-16 px-4">'
    new = INSERT_HTML.replace('{slug}', slug)
    
    if old in content:
        content = content.replace(old, new, 1)
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  DONE: {fname}")
    else:
        # Try alternative pattern
        old2 = '<section className="pt-32 pb-16 px-4">'
        if old2 in content:
            content = content.replace(old2, new, 1)
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  DONE (alt): {fname}")
        else:
            print(f"  SKIP: {fname} — pattern not found")

print("\nDone!")
