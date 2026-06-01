"""Quick MiniMax TTS check."""
import requests

key = "sk-api-VT68BLrdt5XNs0lBWB97pO-q4PVswv4FO8UDEhhDUytpYV4wl-2ZktZsCxkLIcGIvYL-5w4IS-oFSRzCYxLrvSTDSj65MU40a0VfNXEoTo8-9c8Bfx7d6Mc"
task_id = "404486722076758"
task_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxODc5NTI1MDMxNjk2OTI5NjM5IiwiaXNzIjoibWluaW1heCIsInN1YiI6IjQwNDQ4NjcyMjA3Njc1OCJ9.P4FjI3j_ioZiTObY2O86RfvvnfD88rv9m_LTsrxL8TtwjxXl8sqwd6CyUV74zxFT-DRSXyso8tCpXEIB-bJCC62f58tnve8C8BxgCIbwCbewhfYgK6ogIhLxlArBPYsR5WuEaa2-mtxtVsLjGzWDXFGow0xVbYlpFMgo3AD1Kpr0olyb7IFDabPiORmqrjqQupA0U_qaChzN0BTQ3iv7UTVjYEPcMD9rLbbDl4iRL_IBHGJaNywdZ_3QnkJdQ1SxOYADFW7x_fzzJg93-kBiLWn4IZe0B8aecKSQbcfMKPaFG0kjL94AjE11NIE42Oyi2k4p25-F749k4VNQ2K0dbQ"

url = f"https://api.minimax.io/v1/query/t2a_async_v2?task_id={task_id}"
headers = {"Authorization": f"Bearer {key}"}
r = requests.get(url, headers=headers, timeout=15)
print(f"Status: {r.status_code}")
print(f"Text: {r.text[:800]}")
