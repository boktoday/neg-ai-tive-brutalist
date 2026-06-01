"""Convert all issue brief page components to brutalist style."""
import os, re

ROOT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\src\pages"
SKIP = {"node_modules", ".git", ".vercel", "dist", "__pycache__"}

for fname in os.listdir(ROOT):
    if not fname.endswith(".tsx"):
        continue
    fpath = os.path.join(ROOT, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 1. Replace nav bars — change from dark to white with black text
    # Pattern: fixed top nav with SCREWED BY AI span
    old_nav = """<nav className="fixed top-0 w-full z-50 bg-\\[#0a0a0a\\]/80 backdrop-blur-xl border-b border-white/5">"""
    new_nav = """<nav className="fixed top-0 w-full z-50 bg-white border-b-2 border-black">"""
    content = re.sub(old_nav, new_nav, content)
    
    # 2. Replace SCREWED BY AI spans in nav
    content = content.replace(
        '<span className="text-red-500">NEG-AI-TIVE</span>',
        '<span className="font-heading text-2xl font-bold">NEG-AI-TIVE</span>'
    )
    
    # 3. Replace the issue brief sections — change bg from dark to white
    content = content.replace(
        '<div className="min-h-screen bg-\\[#0a0a0a\\] text-white">',
        '<div className="min-h-screen bg-white text-black">'
    )
    # Already replaced in most files but let's be safe
    content = content.replace(
        'min-h-screen bg-[#0a0a0a] text-white',
        'min-h-screen bg-white text-black'
    )
    
    # 4. Replace stat cards — remove gradient backgrounds, use solid borders
    content = re.sub(
        r'rounded-2xl bg-gradient-to-br [\w\/-]+ p-5 border border-white/5',
        'border-2 border-black/10 p-5 bg-black/[0.02]',
        content
    )
    
    # 5. Replace stat icon colors and text
    content = content.replace(
        'text-xs text-gray-500 leading-relaxed',
        'text-xs font-mono text-black/50 leading-relaxed'
    )
    content = content.replace(
        'text-3xl font-black text-white font-heading mb-1',
        'text-3xl font-black mb-1 font-heading'
    )
    
    # 6. Replace issue card backgrounds (glass -> white with border)
    content = re.sub(
        r'className="glass p-8"',
        'className="border-2 border-black/10 p-8 bg-white"',
        content
    )
    content = re.sub(
        r'className="glass glass-hover p-5 group"',
        'className="border border-black/10 p-5 hover:bg-black/[0.02] transition-colors block group"',
        content
    )
    
    # 7. Replace text colors
    content = content.replace(
        'text-lg md:text-xl text-gray-400',
        'text-base font-mono text-black/60'
    )
    content = content.replace(
        'text-gray-400 leading-relaxed',
        'text-black/60 leading-relaxed font-mono text-sm'
    )
    content = content.replace(
        'text-sm text-gray-500',
        'text-xs font-mono text-black/40'
    )
    
    # 8. Replace strong tags in text
    content = content.replace(
        '<strong className="text-white">',
        '<strong className="text-black">'
    )
    
    # 9. Replace "text-gradient" / "text-gradient-gold" with black
    content = content.replace('className="text-gradient"', 'className="text-black font-heading"')
    content = content.replace('className="text-gradient-gold"', 'className="text-black font-heading"')
    
    # 10. Replace the inline pill badges
    content = re.sub(
        r'className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-sm text-gray-400 rounded-full mb-6"',
        'className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6"',
        content
    )
    
    # 11. Replace issue brief badge spans
    content = content.replace(
        '<span>Issue Brief</span>',
        '<span className="text-black/60">Issue Brief</span>'
    )
    
    # 12. Replace titles
    content = re.sub(
        r'className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight"',
        'className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9] tracking-[-0.03em]"',
        content
    )
    
    # 13. Replace section headers
    content = re.sub(
        r'className="text-3xl md:text-4xl font-black font-heading mb-8"',
        'className="text-3xl md:text-4xl font-heading mb-8 tracking-[-0.02em]"',
        content
    )
    
    # 14. Replace footer
    content = content.replace(
        '<footer className="border-t border-white/5 py-8 px-4">',
        '<footer className="border-t-2 border-black py-8 px-4">'
    )
    content = content.replace(
        '<p>Part of the <a href="/" className="text-red-400 hover:text-red-300">NEG-AI-TIVE</a> awareness project.</p>',
        '<p className="text-xs font-mono text-black/30">Part of the <a href="/" className="text-black underline">NEG-AI-TIVE</a> awareness project.</p>'
    )
    content = content.replace(
        '<p className="mt-1">Always verify sources directly. Research landscape evolves rapidly.</p>',
        '<p className="mt-1 text-xs font-mono text-black/20">Always verify sources directly. Research landscape evolves rapidly.</p>'
    )
    
    # 15. Issue card heading
    content = re.sub(
        r'className="text-2xl font-bold font-heading"',
        'className="text-lg font-heading tracking-tight"',
        content
    )
    
    # 16. Issue card icon containers
    content = re.sub(
        r'w-12 h-12 rounded-xl bg-gradient-to-br [\w\/-]+ flex items-center justify-center shrink-0 border border-white/5',
        'w-10 h-10 border-2 border-black/20 flex items-center justify-center shrink-0',
        content
    )
    
    # 17. Icon colors
    for old_color, new in [
        ('text-red-400', 'text-black/60'),
        ('text-blue-400', 'text-black/60'),
        ('text-purple-400', 'text-black/60'),
        ('text-amber-400', 'text-black/60'),
        ('text-cyan-400', 'text-black/60'),
    ]:
        content = content.replace(f'className="{old_color}"', f'className="{new}"')
    
    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  UPDATED: {fname}")
    else:
        print(f"  SKIP: {fname} (no changes)")

print("\nDone!")
