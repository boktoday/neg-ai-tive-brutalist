"""Upload a design file to Printful and create a sync product."""
import json, os, subprocess, sys

TOKEN = "nVuKTz3WAt70HtteODaoaHYXgFt8sg2VGBOs0dBP"
BASE = "https://api.printful.com"

DESIGNS_DIR = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive\public\designs"

def run_curl(method, path, data=None, file_path=None):
    cmd = ["curl", "-s", "-H", f"Authorization: Bearer {TOKEN}", "-X", method, f"{BASE}{path}"]
    if data:
        cmd += ["-H", "Content-Type: application/json", "-d", json.dumps(data)]
    if file_path:
        cmd += ["-F", f"file=@{file_path}"]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    try:
        return json.loads(result.stdout)
    except:
        print(f"  ERROR: {result.stdout[:500]}")
        return None

def upload_file(filepath):
    """Upload a file to Printful file library."""
    print(f"Uploading: {filepath}")
    result = run_curl("POST", "/files", file_path=filepath)
    if result and result.get("code") == 200:
        file_id = result["result"]["id"]
        print(f"  File uploaded. ID: {file_id}")
        return file_id
    else:
        print(f"  Upload failed: {result}")
        return None

def create_product(name, file_id, product_id, variant_ids, retail_price, description=""):
    """Create a sync product with the design."""
    sync_variants = []
    for vid in variant_ids:
        sync_variants.append({
            "variant_id": vid,
            "retail_price": retail_price,
            "files": [{"id": file_id}]
        })
    
    payload = {
        "sync_product": {
            "name": name,
            "thumbnail": ""
        },
        "sync_variants": sync_variants
    }
    
    print(f"Creating product: {name}")
    result = run_curl("POST", "/store/products", data=payload)
    if result and result.get("code") == 200:
        prod = result["result"]["sync_product"]
        print(f"  Product created! ID: {prod['id']}, Name: {prod['name']}")
        print(f"  View in dashboard: https://www.printful.com/dashboard/sync-products/{prod['id']}")
        return prod
    else:
        print(f"  Creation failed: {result}")
        return None

if __name__ == "__main__":
    action = sys.argv[1] if len(sys.argv) > 1 else "upload"
    
    if action == "upload":
        # Upload a design file
        fname = sys.argv[2] if len(sys.argv) > 2 else "neg-ai-tive-front.svg"
        filepath = os.path.join(DESIGNS_DIR, fname)
        file_id = upload_file(filepath)
        if file_id:
            print(f"\nFile ID: {file_id}")
            print(f"Use: python pf_create.py create <file_id>")
    
    elif action == "create":
        file_id = int(sys.argv[2])
        product = create_product(
            name="NEG-AI-TIVE - Classic T-Shirt",
            file_id=file_id,
            product_id=37,  # Gildan 980
            variant_ids=[1980, 1981, 1982, 1983, 1984],  # S, M, L, XL, 2XL in Black
            retail_price="29.99",
            description="Wear your unemployment with pride. 100% cotton, 0% job security."
        )
