import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const PER_PAGE = 9;

const allProducts = [
  { name: "NEG-AI-TIVE", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/bf1/bf1c61f0446561f007a9029bf53f1de6_preview.png", printfulId: 436243284 },
  { name: "NEG-AI-TIVE", type: "T-Shirt (White)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/efa/efa4c3d546c15c53e5f8b1ed2b827c18_preview.png", printfulId: 436243299 },
  { name: "I GOT NEG-AI-TIVE", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/2c9/2c9d9943d9e91019fc6caa225004dc95_preview.png", printfulId: 436243313 },
  { name: "I GOT NEG-AI-TIVE", type: "T-Shirt (White)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/233/233f02d2221a58c6093a2db20f262608_preview.png", printfulId: 436243325 },
  { name: "CHATGPT TOOK MY JOB", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/7d4/7d4cd2dd5c8d3d45bb6a4060048df58e_preview.png", printfulId: 436243340 },
  { name: "CHATGPT TOOK MY JOB", type: "T-Shirt (White)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/e50/e50de232e128ee10d57f2287c26b2459_preview.png", printfulId: 436243354 },
  { name: "I HAVE AI PSYCHOSIS", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/edc/edca3fcc411ffaffe9dbae3e62ac957e_preview.png", printfulId: 436243367 },
  { name: "I HAVE AI PSYCHOSIS", type: "T-Shirt (White)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/06c/06c87c61f782661daa9d22eb914f07ef_preview.png", printfulId: 436243378 },
  { name: "SCAMMED BY DEEPFAKE", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/828/8288e872e2dd0fbd38284c8bc0ff1420_preview.png", printfulId: 436243389 },
  { name: "SCAMMED BY DEEPFAKE", type: "T-Shirt (White)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/da8/da81bbb1cfdba3bf59bed408edf08848_preview.png", printfulId: 436243402 },
  { name: "ACTUAL INTELLIGENCE", type: "T-Shirt (White)", price: "$34.99+", mockup: "https://files.cdn.printful.com/files/c4b/c4b565f355038327784826d4859ab023_preview.png", printfulId: 436243684 },
  { name: "MY JOB WAS AUTOMATED", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/cba/cba2fa60619401d313579d768ab010ae_preview.png", printfulId: 436243687 },
  { name: "MY JOB WAS AUTOMATED", type: "T-Shirt (White)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/5d6/5d6c8298b2e321fbd8feb1267a16d0f1_preview.png", printfulId: 436243691 },
  { name: "STILL HUMAN", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/66f/66fc2121fbe36a68946f840dd5f659ce_preview.png", printfulId: 436243696 },
  { name: "STILL HUMAN", type: "T-Shirt (White)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/fa6/fa60dbf7ef8b4e5308d992d4568cf381_preview.png", printfulId: 436243700 },
  { name: "AI DATA CENTER GRID", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/2d6/2d62e79aeb671ab9e7aa76c015089987_preview.png", printfulId: 436243702 },
  { name: "AI DATA CENTER GRID", type: "T-Shirt (White)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/055/055f40bbc5ab6716c45e30440a190201_preview.png", printfulId: 436243708 },
  { name: "AI ALGORITHMIC ANGST", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/188/1888226e72cfe694ea4f82c95b4c7411_preview.png", printfulId: 436243709 },
  { name: "AI ALGORITHMIC ANGST", type: "T-Shirt (White)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/4db/4db27ddd7fa92d0c1f51e5fce223b5da_preview.png", printfulId: 436243713 },
  { name: "AI MADE THIS DESIGN", type: "T-Shirt (Black)", price: "$29.99+", mockup: "https://files.cdn.printful.com/files/d83/d83a7e4053fb6be52a88cf5207519d41_preview.png", printfulId: 436243723 },
  { name: "PROMPT ENGINEER SURVIVOR", type: "Hoodie (Black)", price: "$59.99+", mockup: "https://files.cdn.printful.com/files/ea5/ea599ca1b8c36a64f8d659c2143b17f0_preview.png", printfulId: 436243759 },
  { name: "PROMPT ENGINEER SURVIVOR", type: "Hoodie (White)", price: "$59.99+", mockup: "https://files.cdn.printful.com/files/64d/64dffe0bfbe88257c3dfa885926bac01_preview.png", printfulId: 436243762 },
];

export default function Merch() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(allProducts.length / PER_PAGE);
  const visible = allProducts.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <section id="merch" className="py-24 bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">Merch Store</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading leading-[0.9] tracking-[-0.03em] mb-4">
            Market Your<br />
            <span className="text-black">Misery</span>
          </h2>
          <div className="w-16 h-1 bg-black" />
          <p className="font-mono text-sm mt-6 text-black/50">
            Because nothing says "I'm over it" like buying a t-shirt about it.
            <span className="block mt-1 text-black/30">* All designs probably AI-generated. We're part of the problem.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-black/10">
          {visible.map((product, index) => {
            const storeUrl = product.printfulId ? `https://www.printful.com/sync-product/${product.printfulId}` : null;
            return (
              <div key={index} className="border-b border-r border-black/10 p-6 flex flex-col hover:bg-black/[0.02] transition-colors">
                <div className="h-[336px] bg-black/[0.02] flex items-center justify-center mb-4 border border-black/5 overflow-hidden">
                  <img src={product.mockup} alt={product.name} className="w-full h-full object-cover" loading={index < 3 ? "eager" : "lazy"} />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-sm font-black tracking-tight">{product.name}</h3>
                    <p className="text-[10px] font-mono text-black/40 uppercase tracking-wider">{product.type}</p>
                  </div>
                  <span className="text-sm font-bold">{product.price}</span>
                </div>
                {storeUrl ? (
                  <a href={storeUrl} target="_blank" rel="noopener noreferrer"
                    className="mt-auto w-full py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.15em] text-center hover:bg-gray-900 transition-colors block">
                    Buy Now →
                  </a>
                ) : (
                  <div className="mt-auto w-full py-3 border-2 border-black/10 text-black/30 text-xs font-bold uppercase tracking-[0.15em] text-center">
                    Coming Soon
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0}
              className="flex items-center gap-1 px-4 py-2 border-2 border-black/20 text-xs font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronLeft className="w-3 h-3" /> Prev
            </button>
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} onClick={() => setPage(i)}
                  className={`w-8 h-8 text-xs font-bold ${i === page ? 'bg-black text-white' : 'border-2 border-black/20 hover:bg-black/5'} transition-colors`}>
                  {i + 1}
                </button>
              ))}
            </div>
            <button onClick={() => setPage(Math.min(totalPages - 1, page + 1))} disabled={page === totalPages - 1}
              className="flex items-center gap-1 px-4 py-2 border-2 border-black/20 text-xs font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
              Next <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}

        <p className="text-[10px] font-mono text-black/30 text-center mt-4">
          Showing {page * PER_PAGE + 1}–{Math.min((page + 1) * PER_PAGE, allProducts.length)} of {allProducts.length} products
        </p>
      </div>
    </section>
  );
}
