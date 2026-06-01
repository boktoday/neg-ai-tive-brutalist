"""Test MiniMax TTS with the new key and async endpoint."""
import requests, json, time, os

key = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
url = "https://api.minimax.io/v1/t2a_async_v2"

payload = {
    "model": "speech-2.8-hd",
    "text": "The algorithm decided you should see this. It decided your mood, your shopping cart, your political views, and who you should date.",
    "voice_setting": {
        "voice_id": "English_causual_narrator_vv1",
        "speed": 1,
        "vol": 10,
        "pitch": 1
    },
    "audio_setting": {
        "audio_sample_rate": 32000,
        "bitrate": 128000,
        "format": "mp3",
        "channel": 2
    }
}

headers = {"Authorization": f"Bearer {key}", "Content-Type": "application/json"}
r = requests.post(url, headers=headers, json=payload, timeout=30)
print(f"Status: {r.status_code}")
print(f"Response: {r.text[:1000]}")
