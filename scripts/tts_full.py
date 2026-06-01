"""Full TTS: create task, poll, download."""
import requests, json, time

KEY = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
OUT = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"

def create_task(text):
    payload = {
        "model": "speech-2.8-hd",
        "text": text,
        "voice_setting": {
            "voice_id": "English_causual_narrator_vv1",
            "speed": 1,
            "vol": 10,
            "pitch": 1
        },
        "audio_setting": {
            "format": "mp3",
            "channel": 2
        }
    }
    headers = {"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"}
    r = requests.post("https://api.minimax.io/v1/t2a_async_v2", headers=headers, json=payload, timeout=30)
    d = r.json()
    if d.get("base_resp", {}).get("status_msg") == "success":
        print(f"  Task created: {d['task_id']}")
        return d["task_id"]
    print(f"  ERROR: {d}")
    return None

def poll_and_download(task_id, out_path):
    headers = {"Authorization": f"Bearer {KEY}"}
    for i in range(30):
        r = requests.get(f"https://api.minimax.io/v1/query/t2a_async_v2?task_id={task_id}", headers=headers, timeout=15)
        try:
            d = r.json()
        except:
            print(f"  {i+1}: JSON error, retrying...")
            time.sleep(3)
            continue
        
        s = d.get("base_resp", {}).get("status_msg", "")
        if s == "success":
            audio_url = d.get("data", {}).get("audio_url", "")
            if audio_url:
                print(f"  Downloading audio...")
                a = requests.get(audio_url, timeout=60)
                with open(out_path, "wb") as f:
                    f.write(a.content)
                print(f"  Saved: {out_path} ({len(a.content)//1024}KB)")
                return True
        print(f"  {i+1}: {s}")
        time.sleep(3)
    return False

# Test
print("Generating test audio...")
tid = create_task("The algorithm decided you should see this. It decides your mood, your shopping cart, your political views, and who you should date. You are being manipulated at scale.")
if tid:
    poll_and_download(tid, OUT + "/test-intro.mp3")
