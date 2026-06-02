"""Test SendFox API and send a test email."""
import json, subprocess, os

KEY = os.environ.get("SENDFOX_API_KEY", "")
if not KEY:
    print("No SENDFOX_API_KEY found")
    exit(1)

print(f"Key: {KEY[:20]}...")

# First, check the API works
r = subprocess.run(
    ["curl", "-s", "-H", f"Authorization: Bearer {KEY}",
     "https://api.sendfox.com/me"],
    capture_output=True, text=True, timeout=15
)
print(f"Me endpoint: {r.stdout[:200]}")

# Check lists
r2 = subprocess.run(
    ["curl", "-s", "-H", f"Authorization: Bearer {KEY}",
     "https://api.sendfox.com/lists"],
    capture_output=True, text=True, timeout=15
)
print(f"Lists: {r2.stdout[:300]}")
