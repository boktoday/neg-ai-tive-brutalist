"""Fix duplicate declarations in Sentiment.tsx."""
path = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\src\pages\Sentiment.tsx"
with open(path, "r") as f:
    c = f.read()

c = c.replace(
    "const [page, setPage] = useState(0);\n  const PER_PAGE = 10;\n  const [page, setPage] = useState(0);\n  const PER_PAGE = 10;",
    "const [page, setPage] = useState(0);\n  const PER_PAGE = 10;"
)

with open(path, "w") as f:
    f.write(c)
print("Fixed!")
