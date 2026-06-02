"""
NEG-AI-TIVE Weekly News Cron
1. Searches latest AI harm news across 9 topics
2. Generates HTML email content
3. Sends via SendFox API

Schedule: Weekly (every Monday 8AM Melbourne time)
"""

import json, subprocess, os, time, textwrap
from datetime import datetime

# ====== CONFIG ======
SENDFOX_TOKEN = os.environ.get("SENDFOX_ACCESS_TOKEN", "")
# ====================

TOPICS = [
    ("datacentres", "AI Data Centres & Environment"),
    ("deepfakes", "Deepfakes & AI Fraud"),
    ("chatbots", "AI Chatbots & Children"),
    ("jobs", "AI & Job Automation"),
    ("ai-psychosis", "AI Hallucinations & Mental Health"),
    ("algorithms", "Algorithmic Bias & Manipulation"),
    ("actual-intelligence", "AI Hype vs Reality"),
    ("copyright", "AI Copyright & Creative Work"),
    ("engage-attach", "AI Addiction & Engagement"),
]

def search_news(topic, label):
    """Search for latest news on a topic using Tavily."""
    queries = {
        "datacentres": "AI data centre energy water consumption environment 2026",
        "deepfakes": "deepfake fraud scam detection legislation 2026",
        "chatbots": "AI chatbot children teen suicide safety legislation 2026",
        "jobs": "AI job displacement automation workforce 2026",
        "ai-psychosis": "AI hallucination mental health psychosis chatbot therapy 2026",
        "algorithms": "algorithmic bias filter bubble social media mental health 2026",
        "actual-intelligence": "AI investment ROI failure abandonment enterprise 2026",
        "copyright": "AI copyright lawsuit training data fair use 2026",
        "engage-attach": "AI addiction gamification dark patterns engagement 2026",
    }
    q = queries.get(topic, f"{label} AI 2026")
    
    result = subprocess.run(
        ["python", "-c", f"""
import requests, json
r = requests.post('https://api.tavily.com/search', json={{"query": "{q}", "search_depth": "basic", "max_results": 3, "topic": "general"}}, timeout=15)
data = r.json()
for result in data.get('results', [])[:3]:
    print(f"TITLE: {{result.get('title', '')}}")
    print(f"URL: {{result.get('url', '')}}")
    print(f"CONTENT: {{result.get('content', '')[:200]}}")
    print("---")
"""],
        capture_output=True, text=True, timeout=20
    )
    return result.stdout

def get_taivly_key():
    """Get Tavily API key from env or use default."""
    return os.environ.get("TAVILY_API_KEY", "")

def build_email(news_items):
    """Build HTML email from news items."""
    date_str = datetime.now().strftime("%A, %d %B %Y")
    
    html = f"""<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="font-family:Georgia,serif;background:#fff;color:#000;margin:0;padding:0">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 20px">
<table width="600" cellpadding="0" cellspacing="0" style="border:2px solid #000">

<!-- Header -->
<tr><td style="padding:30px 40px;border-bottom:2px solid #000;text-align:center">
<h1 style="font-size:28px;font-weight:900;margin:0;letter-spacing:-1px">NEG-AI-TIVE</h1>
<p style="font-size:11px;font-family:Courier,monospace;color:#666;margin:5px 0 0">Weekly AI Harm Brief</p>
<p style="font-size:11px;font-family:Courier,monospace;color:#999;margin:2px 0 0">{date_str}</p>
</td></tr>

<!-- Intro -->
<tr><td style="padding:20px 40px;border-bottom:1px solid #ccc">
<p style="font-size:13px;font-family:Courier,monospace;color:#333;line-height:1.6">
The latest news on how artificial intelligence is affecting people, planet, and society. 
Each item links to the full source. Read, share, act.
</p>
</td></tr>

<!-- News Items -->
"""
    
    for topic_key, topic_label, items in news_items:
        html += f"""
<tr><td style="padding:20px 40px;border-bottom:1px solid #eee">
<h2 style="font-size:15px;font-weight:700;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px">{topic_label}</h2>
"""
        for item in items:
            title = item.get("title", "Untitled")
            url = item.get("url", "")
            content = item.get("content", "")
            snippet = content[:150] + "..." if len(content) > 150 else content
            
            html += f"""
<div style="margin-bottom:12px;padding:12px;background:#f8f8f8;border-left:3px solid #000">
<p style="font-size:13px;font-weight:700;margin:0 0 4px"><a href="{url}" style="color:#000;text-decoration:none">{title}</a></p>
<p style="font-size:11px;font-family:Courier,monospace;color:#555;margin:0;line-height:1.5">{snippet}</p>
</div>
"""
        
        html += "</td></tr>"
    
    # Footer
    html += """
<tr><td style="padding:30px 40px;text-align:center">
<p style="font-size:10px;font-family:Courier,monospace;color:#999;line-height:1.5">
NEG-AI-TIVE — Awareness project on the real harms of AI.<br>
<a href="https://www.negaitive.com" style="color:#000;text-decoration:underline">negaitive.com</a>
</p>
</td></tr>

</table>
</td></tr></table>
</body>
</html>"""
    return html

def save_email(html_content):
    """Save email HTML to file for review."""
    out_dir = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\email-cron"
    os.makedirs(out_dir, exist_ok=True)
    date = datetime.now().strftime("%Y-%m-%d")
    path = os.path.join(out_dir, f"weekly-{date}.html")
    with open(path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Email saved: {path}")
    return path

def send_via_sendfox(html_content, subject):
    """Send email campaign via SendFox API."""
    if not SENDFOX_TOKEN:
        print("No SENDFOX_ACCESS_TOKEN set. Skipping send.")
        return False
    
    # First create the campaign
    headers = {
        "Authorization": f"Bearer {SENDFOX_TOKEN}",
        "Content-Type": "application/json"
    }
    
    # Create campaign
    payload = {
        "name": f"AI Harm Brief - {datetime.now().strftime('%Y-%m-%d')}",
        "subject": subject,
        "html": html_content,
        "lists": []  # Add list IDs here
        # "scheduled_at": "2026-06-08 08:00:00"  # Next Monday
    }
    
    result = subprocess.run(
        ["curl", "-s", "-X", "POST",
         "-H", f"Authorization: Bearer {SENDFOX_TOKEN}",
         "-H", "Content-Type: application/json",
         "-d", json.dumps(payload),
         "https://api.sendfox.com/campaigns"],
        capture_output=True, text=True, timeout=30
    )
    print(f"SendFox response: {result.stdout[:300]}")
    return result.stdout

if __name__ == "__main__":
    print(f"=== NEG-AI-TIVE Weekly News Brief Generator ===\n")
    
    # Step 1: Search for latest news across all topics
    print("Searching for latest news...\n")
    all_news = []
    for topic_key, topic_label in TOPICS:
        print(f"  {topic_label}...", end=" ", flush=True)
        raw = search_news(topic_key, topic_label)
        
        # Parse the output
        items = []
        lines = raw.strip().split("\n")
        current = {}
        for line in lines:
            if line.startswith("TITLE: "):
                if current.get("title"):
                    items.append(current)
                current = {"title": line[7:], "url": "", "content": ""}
            elif line.startswith("URL: "):
                current["url"] = line[5:]
            elif line.startswith("CONTENT: "):
                current["content"] = line[9:]
            elif line == "---" and current.get("title"):
                items.append(current)
                current = {}
        if current.get("title"):
            items.append(current)
        
        all_news.append((topic_key, topic_label, items))
        print(f"{len(items)} items")
        time.sleep(1)  # Rate limit
    
    # Step 2: Generate email content
    print("\nGenerating email...")
    html = build_email(all_news)
    path = save_email(html)
    
    # Step 3: Send via SendFox
    date = datetime.now().strftime("%-d %B %Y")
    subject = f"NEG-AI-TIVE Weekly Brief — {date}"
    print(f"\nSubject: {subject}")
    print(f"Size: {len(html)} chars")
    
    if SENDFOX_TOKEN:
        send_via_sendfox(html, subject)
    else:
        print("\nSENDFOX_ACCESS_TOKEN not set. Email saved locally.")
        print("Set the env var and re-run to send.")
    
    print(f"\nDone! Email saved to: {path}")
