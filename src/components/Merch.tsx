import { ShoppingBag } from 'lucide-react';

const MOCKUP_BASE = "/designs/rebrand";
const STORE_BASE = "https://www.printful.com/sync-product";

const products = [
  { name: "NEG-AI-TIVE", type: "T-Shirt", price: "$29.99+", mockup: "neg-ai-tive-tshirt-wb.png", printfulId: 436243284 },
  { name: "I GOT NEG-AI-TIVE", type: "T-Shirt", price: "$29.99+", mockup: "i-got-neg-tshirt-wb.png", printfulId: 436243313 },
  { name: "CHATGPT TOOK MY JOB", type: "T-Shirt", price: "$29.99+", mockup: "chatgpt-job-tshirt-wb.png", printfulId: 436243340 },
  { name: "I HAVE AI PSYCHOSIS", type: "T-Shirt", price: "$29.99+", mockup: "ai-psychosis-tshirt-wb.png", printfulId: 436243367 },
  { name: "SCAMMED BY DEEPFAKE", type: "T-Shirt", price: "$29.99+", mockup: "deepfake-tshirt-wb.png", printfulId: 436243389 },
  { name: "ACTUAL INTELLIGENCE", type: "T-Shirt", price: "$34.99+", mockup: "actual-intel-tshirt-wb.png", printfulId: 436243684 },
  { name: "MY JOB WAS AUTOMATED", type: "T-Shirt", price: "$29.99+", mockup: "job-auto-tshirt-wb.png", printfulId: 436243687 },
  { name: "STILL HUMAN", type: "T-Shirt", price: "$29.99+", mockup: "still-human-tshirt-wb.png", printfulId: 436243696 },
  { name: "AI DATA CENTER GRID", type: "T-Shirt", price: "$29.99+", mockup: "data-center-tshirt-wb.png", printfulId: 436243702 },
  { name: "AI ALGORITHMIC ANGST", type: "T-Shirt", price: "$29.99+", mockup: "algorithm-tshirt-wb.png", printfulId: 436243709 },
  { name: "AI MADE THIS DESIGN", type: "T-Shirt", price: "$29.99+", mockup: "ai-made-tshirt-wb.png", printfulId: 436243723 },
  { name: "PROMPT ENGINEER SURVIVOR", type: "Hoodie", price: "$59.99+", mockup: "prompt-hoodie-wb.png", printfulId: 436243759 },
];

export default function Merch() {
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
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.03em] mb-4">
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
          {products.map((product, index) => {
            const storeUrl = product.printfulId ? `https://neg-ai-tive.printful.com/products/${product.printfulId}` : null;
            const mockupSrc = product.mockup ? `${MOCKUP_BASE}/${product.mockup}` : null;

            return (
              <div key={index} className="border-b border-r border-black/10 p-6 flex flex-col hover:bg-black/[0.02] transition-colors">
                {/* Mockup */}
                <div className="bg-black/[0.02] flex items-center justify-center mb-4 border border-black/5 overflow-hidden" style={{height:'336px'}}>
                  {mockupSrc ? (
                    <img src={mockupSrc} alt={product.name} className="w-full h-full object-cover" loading={index < 3 ? "eager" : "lazy"} />
                  ) : (
                    <ShoppingBag className="w-10 h-10 text-black/10" />
                  )}
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
      </div>
    </section>
  );
}
