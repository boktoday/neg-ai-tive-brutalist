"""Generate a B&W thumbs down favicon for NEG-AI-TIVE."""
from PIL import Image, ImageDraw, ImageFont
import os

OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public"

# Create a 32x32 favicon
size = 32
img = Image.new("RGB", (size, size), (255, 255, 255))
draw = ImageDraw.Draw(img)

# Draw a simple thumbs down shape
# Thumb (vertical rectangle)
draw.rectangle([12, 14, 18, 26], fill=(0, 0, 0))
# Thumb base/tip
draw.ellipse([11, 24, 19, 28], fill=(0, 0, 0))
# Hand/palm area
draw.rectangle([18, 16, 28, 26], fill=(0, 0, 0))
# Fingers (left side)
for i in range(3):
    y = 12 + i * 3
    draw.rectangle([20, y, 28, y + 2], fill=(0, 0, 0))

# Save as favicon.ico
ico_path = os.path.join(OUT, "favicon.ico")
img.save(ico_path, format="ICO", sizes=[(32, 32)])
print(f"Saved: {ico_path} ({os.path.getsize(ico_path)} bytes)")

# Also save as PNG
png_path = os.path.join(OUT, "favicon.png")
img.save(png_path, "PNG")
print(f"Saved: {png_path}")
