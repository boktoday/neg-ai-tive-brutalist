"""
Export all NEG-AI-TIVE website content to Google Doc via Maton Gateway.
Reads source files directly since the site is a React SPA.
"""
import requests, json, os, datetime, glob

MATON_KEY = os.environ.get("MATON_API_KEY", "1VSs3s4SkAtCzoapik7BmIHF2HJQLph-XZbfd-RA_pL86THI8GJoDPTOlAjZApLPUhCG9zjPfBxh9Vkd5pYGu0BI1iXfYK8FmRU")
MATON_BASE = "https://gateway.maton.ai/google-drive"
SRC_DIR = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\src"
OUT_DIR = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\email-cron"
os.makedirs(OUT_DIR, exist_ok=True)

headers = {"Authorization": f"Bearer {MATON_KEY}", "Content-Type": "application/json"}

# Collect all source content
print("Reading source files...")
all_content = f"""NEG-AI-TIVE — Complete Website Content Export
=====================================================
Exported: {datetime.datetime.now().strftime('%A, %d %B %Y')}
Source files from: {SRC_DIR}
URL: https://www.negaitive.com
=====================================================

"""

# Read page components
page_files = sorted(glob.glob(os.path.join(SRC_DIR, "pages", "*.tsx")))
for pf in page_files:
    name = os.path.basename(pf).replace(".tsx", "")
    all_content += f"\n{'='*60}\n"
    all_content += f"PAGE: {name}\n"
    all_content += f"{'='*60}\n\n"
    
    with open(pf, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract the key parts (remove imports, keep text content)
    lines = content.split("\n")
    text_lines = []
    for line in lines:
        stripped = line.strip()
        # Skip imports, exports, const definitions
        if stripped.startswith("import ") or stripped.startswith("export ") or stripped.startswith("const ") or stripped.startswith("function ") or stripped.startswith("return (") or stripped.startswith("</") or stripped.startswith("//"):
            continue
        # Skip empty lines and JSX wrappers
        if stripped in ("", "(", ")", "{", "}", "};", ";", "]", "[", ","):
            continue
        # Skip lines that are purely JSX
        if stripped.startswith("<") and not stripped.startswith("<a") and not stripped.startswith("<p") and not stripped.startswith("<h") and not stripped.startswith("<span"):
            continue
        # Keep text content
        if len(stripped) > 10 or any(c.isalpha() for c in stripped):
            text_lines.append(stripped)
    
    # Write extracted text
    for line in text_lines[:200]:  # Limit per page
        all_content += line + "\n"
    all_content += "\n"

# Read component files
comp_files = sorted(glob.glob(os.path.join(SRC_DIR, "components", "*.tsx")))
for cf in comp_files:
    name = os.path.basename(cf).replace(".tsx", "")
    all_content += f"\n{'='*60}\n"
    all_content += f"COMPONENT: {name}\n"
    all_content += f"{'='*60}\n\n"
    
    with open(cf, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Simple extraction: grab strings between quotes
    import re
    strings = re.findall(r'"[^"]{10,}"', content)
    for s in strings[:50]:
        all_content += s.strip('"') + "\n"
    all_content += "\n"

# Read index.html
html_path = os.path.join(os.path.dirname(SRC_DIR), "index.html")
if os.path.exists(html_path):
    all_content += f"\n{'='*60}\n"
    all_content += f"INDEX.HTML (meta, structured data)\n"
    all_content += f"{'='*60}\n\n"
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()
    import re
    metas = re.findall(r'<meta[^>]+>|<title>[^<]+</title>|<script type="application/ld\+json">.*?</script>', content, re.DOTALL)
    for m in metas[:20]:
        all_content += m + "\n\n"
    all_content += "\n"

# Save locally
content_path = os.path.join(OUT_DIR, "website-export.txt")
with open(content_path, "w", encoding="utf-8") as f:
    f.write(all_content)
print(f"Saved: {content_path} ({len(all_content)} chars)")

# Upload to Google Drive
print("\nUploading to Google Drive via Maton Gateway...")

# Step 1: Create folder
folder_payload = {"name": f"NEG-AI-TIVE Export - {datetime.date.today()}", "mimeType": "application/vnd.google-apps.folder"}
r = requests.post(f"{MATON_BASE}/drive/v3/files", headers=headers, json=folder_payload, timeout=15)
folder_id = ""
if r.status_code in (200, 201):
    folder_id = r.json().get("id", "")
    print(f"Folder ID: {folder_id}")
else:
    print(f"Folder creation: {r.status_code} — {r.text[:100]}")

# Step 2: Upload text file
upload_url = f"{MATON_BASE}/upload/drive/v3/files?uploadType=multipart"
with open(content_path, "rb") as f:
    files = {
        'metadata': (None, json.dumps({
            "name": f"NEG-AI-TIVE Export - {datetime.date.today()}.txt",
            "parents": [folder_id] if folder_id else [],
        }), 'application/json; charset=UTF-8'),
        'media': (content_path, f, 'text/plain')
    }
    r = requests.post(upload_url, headers={"Authorization": f"Bearer {MATON_KEY}"}, files=files, timeout=60)

print(f"Upload: {r.status_code}")
if r.status_code in (200, 201):
    file_id = r.json().get("id", "")
    # Share
    share = requests.post(f"{MATON_BASE}/drive/v3/files/{file_id}/permissions", headers=headers,
                          json={"type": "anyone", "role": "reader"}, timeout=15)
    info = requests.get(f"{MATON_BASE}/drive/v3/files/{file_id}?fields=webViewLink", headers=headers, timeout=15)
    link = info.json().get("webViewLink", "") if info.status_code == 200 else ""
    print(f"\n✅ Google Doc: {link or f'File ID: {file_id}'}")
else:
    print(f"Upload failed: {r.text[:300]}")

print("\nDone!")
