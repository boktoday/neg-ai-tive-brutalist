"""Poll TTS task and download audio."""
import requests, json, time, os

key = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
task_id = "404486722076758"
task_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxODc5NTI1MDMxNjk2OTI5NjM5IiwiaXNzIjoibWluaW1heCIsInN1YiI6IjQwNDQ4NjcyMjA3Njc1OCJ9.P4FjI3j_ioZiTObY2O86RfvvnfD88rv9m_LTsrxL8TtwjxXl8sqwd6CyUV74zxFT-DRSXyso8tCpXEIB-bJCC62f58tnve8C8BxgCIbwCbewhfYgK6ogIhLxlArBPYsR5WuEaa2-mtxtVsLjGzWDXFGow0xVbYlpFMgo3AD1Kpr0olyb7IFDabPiORmqrjqQupA0U_qaChzN0BTQ3iv7UTVjYEPcMD9rLbbDl4iRL_IBHGJaNywdZ_3QnkJdQ1SxOYADFW7x_fzzJg93-kBiLWn4IZe0B8aecKSQbcfMKPaFG0kjL94AjE11NIE42Oyi2k4p25-F749k4VNQ2K0dbQ"
out_dir = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\public\audio"
os.makedirs(out_dir, exist_ok=True)

# Poll for result
url = f"https://api.minimax.io/v1/query/t2a_async_v2?task_id={task_id}&task_token={task_token}"
headers = {"Authorization": f"Bearer {key}"}

for attempt in range(20):
    r = requests.get(url, headers=headers, timeout=30)
    data = r.json()
    status = data.get("base_resp", {}).get("status_msg", "unknown")
    print(f"Attempt {attempt+1}: {status}")
    
    if status == "success":
        audio_url = data.get("data", {}).get("audio_url")
        if audio_url:
            print(f"Audio URL: {audio_url[:80]}...")
            out_path = os.path.join(out_dir, "algorithms-00-intro.mp3")
            audio_r = requests.get(audio_url, timeout=60)
            with open(out_path, "wb") as f:
                f.write(audio_r.content)
            print(f"Saved: {out_path} ({len(audio_r.content)//1024}KB)")
            break
    elif status == "fail":
        print(f"Failed: {data}")
        break
    
    time.sleep(5)
