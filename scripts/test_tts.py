import requests, os
key = os.environ.get("MINIMAX_API_KEY", "")
print(f"Key: {key[:15]}...{key[-10:]}")
print(f"Key length: {len(key)}")

url = "https://api.minimax.chat/v1/t2a_v2"
headers = {"Authorization": f"Bearer {key}", "Content-Type": "application/json"}
data = {"model": "speech-01-turbo", "text": "Hello world, this is a test of the TTS system.", "voice_id": "male-qn-qingse"}
r = requests.post(url, headers=headers, json=data, timeout=30)
print(f"Status: {r.status_code}")
print(f"Response: {r.text[:500]}")
