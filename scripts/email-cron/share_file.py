import requests
MATON_KEY = "1VSs3s4SkAtCzoapik7BmIHF2HJQLph-XZbfd-RA_pL86THI8GJoDPTOlAjZApLPUhCG9zjPfBxh9Vkd5pYGu0BI1iXfYK8FmRU"
FILE_ID = "1REKxX8zRe4_tdE1JmM-0fYViWIB_xv0R"

# Share publicly
r = requests.post("https://gateway.maton.ai/google-drive/drive/v3/files/" + FILE_ID + "/permissions",
    headers={"Authorization": "Bearer " + MATON_KEY, "Content-Type": "application/json"},
    json={"type": "anyone", "role": "reader"},
    timeout=15)
print("Share status:", r.status_code)
print("Share response:", r.text[:200])

# Get web link
info = requests.get("https://gateway.maton.ai/google-drive/drive/v3/files/" + FILE_ID + "?fields=webViewLink",
    headers={"Authorization": "Bearer " + MATON_KEY},
    timeout=15)
print("Info status:", info.status_code)
if info.status_code == 200:
    link = info.json().get("webViewLink", "")
    print("Link:", link)
