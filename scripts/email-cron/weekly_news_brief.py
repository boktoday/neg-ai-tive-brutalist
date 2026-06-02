"""
NEG-AI-TIVE Weekly News Cron — Working version
Uses Jina Search for news gathering, saves to files, builds HTML email.
"""
import requests, json, os, re, time
from datetime import datetime

JINA_KEY = "jina_9a957e8fdba0414eba3c5cd3a1865227pKWxDI8fyUrvnYK4lXJi4BU3yelt"
SENDFOX_TOKEN = os.environ.get("SENDFOX_ACCESS_TOKEN", "")
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\email-cron"
os.makedirs(OUT, exist_ok=True)

TOPICS = [
    ("datacentres", "AI Data Centres & Environment", "AI data centre energy water consumption environment 2026"),
    ("deepfakes", "Deepfakes & AI Fraud", "deepfake fraud scam detection legislation 2026"),
    ("chatbots", "AI Chatbots & Children", "AI chatbot children teen suicide safety legislation 2026"),
    ("jobs", "AI & Job Automation", "AI job displacement automation workforce layoffs 2026"),
    ("ai-psychosis", "Hallucinations & Mental Health", "AI hallucination mental health psychosis chatbot therapy 2026"),
    ("algorithms", "Algorithmic Bias & Manipulation", "algorithmic bias filter bubble social media mental health 2026"),
    ("actual-intelligence", "AI Hype vs Reality", "AI investment ROI failure abandonment enterprise 2026"),
    ("copyright", "Copyright & Creative Work", "AI copyright lawsuit training data fair use artists 2026"),
    ("engage-attach", "Addiction & Engagement Design", "AI addiction gamification dark patterns engagement 2026"),
]

def search_topic(query):
    """Search Jina, save raw response, parse results."""
    safe = requests.utils.quote(query)
    url = f"https://s.jina.ai/{safe}"
    headers = {"Authorization": f"Bearer {JINA_KEY}"}
    
    try:
        r = requests.get(url, headers=headers, timeout=45)
        text = r.text
    except Exception as e:
        print(f"  REQUEST FAILED: {e}")
        return []
    
    # Save raw response
    safe_name = query[:30].replace(" ", "_").replace("%", "")
    raw_path = os.path.join(OUT, f"raw_{safe_name}.txt")
    with open(raw_path, "w", encoding="utf-8") as f:
        f.write(text[:10000])
    
    # Parse: Jina returns [N] Title: ... URL Source: ... Description: ...
    items = []
    # Split by [N] pattern
    blocks = re.split(r'\n\[\d+\] ', text)
    for block in blocks:
        title = ""
        url = ""
        desc = ""
        for line in block.split("\n"):
            if line.startswith("Title:"):
                title = line[6:].strip()
            elif line.startswith("URL Source:"):
                url = line[11:].strip()
            elif line.startswith("Description:"):
                desc = line[12:].strip()
        
        if title and url and "robot" not in title.lower() and "captcha" not in title.lower():
            items.append({"title": title, "url": url, "content": desc[:200]})
    
    return items[:3]

def build_email(news_items):
    """Build brutalist HTML email."""
    date_str = datetime.now().strftime("%A, %d %B %Y")
    
    html = f"""<!DOCTYPE html><html><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="font-family:Georgia,serif;background:#fff;color:#000;margin:0;padding:0">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 20px">
<table width="600" cellpadding="0" cellspacing="0" style="border:2px solid #000">

<tr><td style="padding:30px 40px;border-bottom:2px solid #000;text-align:center">
<h1 style="font-size:28px;margin:0;letter-spacing:-1px">NEG-AI-TIVE</h1>
<p style="font-size:11px;font-family:monospace;color:#666;margin:5px 0 0">Weekly AI Harm Brief</p>
<p style="font-size:11px;font-family:monospace;color:#999;margin:2px 0 0">{date_str}</p></td></tr>

<tr><td style="padding:20px 40px;border-bottom:1px solid #ccc">
<p style="font-size:13px;font-family:monospace;color:#333;line-height:1.6">
The latest news on how AI is affecting people, planet, and society.</p></td></tr>
"""
    for _, label, items in news_items:
        if not items:
            continue
        html += f"""<tr><td style="padding:20px 40px;border-bottom:1px solid #eee">
<h2 style="font-size:14px;font-weight:700;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px">{label}</h2>
"""
        for item in items:
            t = item.get("title", "")
            u = item.get("url", "")
            c = item.get("content", "")
            html += f"""<div style="margin-bottom:12px;padding:12px;background:#f8f8f8;border-left:3px solid #000">
<p style="font-size:13px;font-weight:700;margin:0 0 4px"><a href="{u}" style="color:#000">{t}</a></p>
<p style="font-size:11px;font-family:monospace;color:#555;margin:0">{c}</p></div>
"""
        html += "</td></tr>"
    
    html += """<tr><td style="padding:30px 40px;text-align:center">
<p style="font-size:10px;font-family:monospace;color:#999">NEG-AI-TIVE<br>
<a href="https://www.negaitive.com" style="color:#000">negaitive.com</a></p></td></tr>
</table></td></tr></table></body></html>"""
    return html

if __name__ == "__main__":
    print("=== NEG-AI-TIVE Weekly News Brief ===\n")
    
    all_news = []
    for key, label, query in TOPICS:
        print(f"  {label}...", end=" ", flush=True)
        items = search_topic(query)
        all_news.append((key, label, items))
        print(f"{len(items)} articles")
        time.sleep(1)
    
    # Build and save
    html = build_email(all_news)
    date_str = datetime.now().strftime("%Y-%m-%d")
    path = os.path.join(OUT, f"weekly-{date_str}.html")
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"\nEmail saved: {path} ({len(html)} chars)")
    
    if SENDFOX_TOKEN:
        subject = f"NEG-AI-TIVE Weekly Brief — {datetime.now().strftime('%d %B %Y')}"
        payload = {"name": f"AI Harm Brief - {date_str}", "subject": subject, "html": html}
        import subprocess
        r = subprocess.run(["curl", "-s", "-X", "POST", "-H", f"Authorization: Bearer {SENDFOX_TOKEN}",
                          "-H", "Content-Type: application/json", "-d", json.dumps(payload),
                          "https://api.sendfox.com/campaigns"], capture_output=True, text=True, timeout=30)
        print(f"SendFox: {r.stdout[:200]}")
    else:
        print("SENDFOX_ACCESS_TOKEN not set. Skipping send.")
    
    print("Done!")
