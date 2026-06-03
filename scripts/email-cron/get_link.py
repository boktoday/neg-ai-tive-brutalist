import requests
MATON_KEY = "1VSs3s4SkAtCzoapik7BmIHF2HJQLph-XZbfd-RA_pL86THI8GJoDPTOlAjZApLPUhCG9zjPfBxh9Vkd5pYGu0BI1iXfYK8FmRU"
file_id = "1copqabm5FuoGKm8ZN9fbBRGDZrT8mfzn"
info = requests.get("https://gateway.maton.ai/google-drive/drive/v3/files/" + file_id + "?fields=webViewLink", headers={"Authorization": "Bearer " + MATON_KEY}, timeout=15)
print("Status:", info.status_code)
print("Response:", info.text[:500])
