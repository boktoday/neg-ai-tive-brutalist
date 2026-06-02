"""Test Jina Search directly."""
import subprocess, json

KEY = "jina_9a957e8fdba0414eba3c5cd3a1865227pKWxDI8fyUrvnYK4lXJi4BU3yelt"

# Test search
result = subprocess.run(
    ["curl", "-s", "https://s.jina.ai/AI%20data%20centre%20energy%20water%20consumption%202026",
     "-H", f"Authorization: Bearer {KEY}"],
    capture_output=True, text=True, timeout=20
)
print(f"Status: {result.returncode}")
print(f"Output ({len(result.stdout)} bytes):")
print(result.stdout[:500])
