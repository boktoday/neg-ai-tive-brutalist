import requests
MATON_KEY = "1VSs3s4SkAtCzoapik7BmIHF2HJQLph-XZbfd-RA_pL86THI8GJoDPTOlAjZApLPUhCG9zjPfBxh9Vkd5pYGu0BI1iXfYK8FmRU"
folder_id = "1copqabm5FuoGKm8ZN9fbBRGDZrT8mfzn"
r = requests.get("https://gateway.maton.ai/google-drive/drive/v3/files?q=" + "'" + folder_id + "'+in+parents", headers={"Authorization": "Bearer " + MATON_KEY}, timeout=15)
print("Status:", r.status_code)
if r.status_code == 200:
    data = r.json()
    for f in data.get("files", []):
        print("  File:", f.get("name"), "ID:", f.get("id"), "Link:", f.get("webViewLink", ""))
else:
    print("Error:", r.text[:300])
