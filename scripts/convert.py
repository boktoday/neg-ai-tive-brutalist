"""Convert SVG designs to PNG for Printful."""
import cairosvg, os, glob

SRC = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs"
DST = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs"

svgs = glob.glob(os.path.join(SRC, "*.svg"))
print(f"Found {len(svgs)} SVGs to convert")

for svg_path in svgs:
    base = os.path.basename(svg_path)
    name = os.path.splitext(base)[0]
    
    # Skip hat/sticker designs (lower res)
    if base.startswith("hat-") or base.startswith("sticker-"):
        w, h = 600, 600
    elif base.startswith("mug-"):
        w, h = 1600, 600
    else:
        w, h = 1200, 1600
    
    png_path = os.path.join(DST, f"{name}.png")
    
    try:
        cairosvg.svg2png(url=svg_path, write_to=png_path, output_width=w, output_height=h)
        size = os.path.getsize(png_path)
        print(f"  ✅ {name}.png ({w}x{h}, {size/1024:.0f}KB)")
    except Exception as e:
        print(f"  ❌ {name}: {e}")

print("\nDone!")
