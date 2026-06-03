"""Fix sentiment page: replace unicode minus and add pagination."""
import os

path = r"C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\src\pages\Sentiment.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Step 1: Replace the Unicode minus
content = content.replace("\u2212{d}", "-{d}")

# Step 2: Add page state variable
content = content.replace(
    "const [submitting, setSubmitting] = useState(false);",
    "const [submitting, setSubmitting] = useState(false);\n  const [page, setPage] = useState(0);\n  const PER_PAGE = 10;"
)

# Step 3: Reset page on submit
content = content.replace(
    "setSubmitting(false);\n    setStep('cloud');",
    "setSubmitting(false);\n    setStep('cloud');\n    setPage(0);"
)

# Step 4: Replace the recent voices section
old_section = "            {/* Recent submissions */}\n            <div className=\"mb-8\">\n              <p className=\"text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-3\">Recent Voices</p>\n              <div className=\"space-y-2 max-h-[400px] overflow-y-auto\">\n                {submissions.slice(0, 20).map((s, i) => (\n                  <div key={i} className=\"border border-black/10 p-3\">\n                    <div className=\"flex items-center justify-between mb-1\">\n                      <div className=\"flex items-center gap-2\">\n                        <span className=\"text-sm font-bold\">{s.firstName}</span>\n                        <span className=\"text-[10px] font-mono text-black/40\">{s.location}</span>\n                      </div>\n                      <span className=\"text-[10px] font-mono text-black/20\">{new Date(s.timestamp).toLocaleDateString()}</span>\n                    </div>\n                    <div className=\"flex flex-wrap gap-1\">\n                      {s.likes.map(l => <span key={l} className=\"text-[10px] font-mono px-1.5 py-0.5 border border-black/20 bg-black/5\">+{l}</span>)}\n                      {s.dislikes.map(d => <span key={d} className=\"text-[10px] font-mono px-1.5 py-0.5 border border-black/20 bg-black/70 text-white\">-{d}</span>)}\n                    </div>\n                  </div>\n                ))}\n              </div>\n            </div>"

new_section = "            {/* Recent submissions with pagination */}\n            <div className=\"mb-8\">\n              <p className=\"text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-3\">Voices ({submissions.length})</p>\n              <div className=\"space-y-2\">\n                {submissions.slice(page * PER_PAGE, (page + 1) * PER_PAGE).map((s, i) => (\n                  <div key={i} className=\"border border-black/10 p-3\">\n                    <div className=\"flex items-center justify-between mb-1\">\n                      <div className=\"flex items-center gap-2\">\n                        <span className=\"text-sm font-bold\">{s.firstName}</span>\n                        <span className=\"text-[10px] font-mono text-black/40\">{s.location}</span>\n                      </div>\n                      <span className=\"text-[10px] font-mono text-black/20\">{new Date(s.timestamp).toLocaleDateString()}</span>\n                    </div>\n                    <div className=\"flex flex-wrap gap-1\">\n                      {s.likes.map(l => <span key={l} className=\"text-[10px] font-mono px-1.5 py-0.5 border border-black/20 bg-black/5\">+{l}</span>)}\n                      {s.dislikes.map(d => <span key={d} className=\"text-[10px] font-mono px-1.5 py-0.5 border border-black/20 bg-black/70 text-white\">-{d}</span>)}\n                    </div>\n                  </div>\n                ))}\n              </div>\n              {submissions.length > PER_PAGE && (\n                <div className=\"flex items-center justify-center gap-3 mt-4\">\n                  <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0}\n                    className=\"px-3 py-1.5 border-2 border-black/20 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed\">\n                    Prev\n                  </button>\n                  {Array.from({ length: Math.ceil(submissions.length / PER_PAGE) }, (_, i) => (\n                    <button key={i} onClick={() => setPage(i)}\n                      className={`w-7 h-7 text-[10px] font-bold ${i === page ? 'bg-black text-white' : 'border-2 border-black/20 hover:bg-black/5'} transition-colors`}>\n                      {i + 1}\n                    </button>\n                  ))}\n                  <button onClick={() => setPage(Math.min(Math.ceil(submissions.length / PER_PAGE) - 1, page + 1))} disabled={page >= Math.ceil(submissions.length / PER_PAGE) - 1}\n                    className=\"px-3 py-1.5 border-2 border-black/20 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed\">\n                    Next\n                  </button>\n                </div>\n              )}\n            </div>"

if old_section in content:
    content = content.replace(old_section, new_section)
    print("Replaced section successfully")
else:
    print("Section NOT FOUND - checking for unicode issue...")
    # Try to find the unicode minus character
    import re
    matches = list(re.finditer(r'<span[^>]*>[^<]*\u2212[^<]*</span>', content))
    print(f"Found {len(matches)} unicode minus occurrences")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Done!")
