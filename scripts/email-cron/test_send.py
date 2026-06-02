"""Send a test email campaign via SendFox to boktoday@gmail.com."""
import json, subprocess, os

KEY = os.environ.get("SENDFOX_API_KEY", "")
LIST_ID = 634800  # "Test Automation - Brendan Only"

html = """<!DOCTYPE html><html><head><meta charset="UTF-8"></head>
<body style="font-family:Georgia,serif;background:#fff;color:#000;padding:40px">
<div style="max-width:600px;margin:0 auto;border:2px solid #000;padding:30px">
<h1 style="font-size:24px;margin:0 0 10px">NEG-AI-TIVE</h1>
<p style="font-size:11px;font-family:monospace;color:#999;margin:0 0 20px;border-bottom:1px solid #ccc;padding-bottom:15px">
Weekly AI Harm Brief — Test Edition</p>

<h2 style="font-size:16px;font-weight:700">This is a test email</h2>
<p style="font-size:13px;font-family:monospace;color:#555;line-height:1.6">
If you're reading this, the SendFox integration is working correctly.
The weekly brief will contain the latest AI harm news across 9 topics,
curated by Jina Search and formatted in this brutalist style.
</p>

<div style="margin:20px 0;padding:15px;background:#f8f8f8;border-left:3px solid #000">
<p style="font-size:12px;font-family:monospace;color:#333;margin:0">
<strong>Upcoming:</strong> 12-week email series covering data centres,
deepfakes, chatbots, jobs, AI psychosis, algorithms, hype vs reality,
copyright, engagement addiction, local AI, and advocacy actions.
</p>
</div>

<p style="font-size:10px;font-family:monospace;color:#999;margin-top:30px;text-align:center">
NEG-AI-TIVE — <a href="https://www.negaitive.com" style="color:#000">negaitive.com</a><br>
<a href="{{unsubscribe_url}}" style="color:#999">Unsubscribe</a>
</p>
</div></body></html>"""

payload = {
    "title": "NEG-AI-TIVE Weekly Brief — Test",
    "subject": "NEG-AI-TIVE Test — SendFox Integration Working",
    "from_name": "NEG-AI-TIVE",
    "from_email": "boktoday@gmail.com",
    "html": html,
    "lists": [LIST_ID],
}

result = subprocess.run(
    ["curl", "-s", "-X", "POST",
     "-H", f"Authorization: Bearer {KEY}",
     "-H", "Content-Type: application/json",
     "-d", json.dumps(payload),
     "https://api.sendfox.com/campaigns"],
    capture_output=True, text=True, timeout=30
)
print(f"Response: {result.stdout[:500]}")
