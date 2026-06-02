"""Test Jina search with Python requests directly."""
import requests, json, os

KEY = "jina_9a957e8fdba0414eba3c5cd3a1865227pKWxDI8fyUrvnYK4lXJi4BU3yelt"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\email-cron"

# Try search
try:
    r = requests.get("https://s.jina.ai/AI%20data%20centre%20energy%20water%202026",
                     headers={"Authorization": f"Bearer {KEY}"},
                     timeout=30)
    print(f"Status: {r.status_code}")
    print(f"Length: {len(r.text)} chars")
    print(r.text[:500])
    
    with open(os.path.join(OUT, "jina_response.txt"), "w", encoding="utf-8") as f:
        f.write(r.text[:5000])
except Exception as e:
    print(f"Error: {e}")
