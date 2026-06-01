import { ShoppingBag } from 'lucide-react';

const MOCKUP_BASE = "/designs/mockups";

const products = [
  { name: "Neg-AI-tive", type: "Classic T-Shirt", price: "$29.99+", mockup: "neg-ai-tive-tshirt.png", printfulId: 436110827 },
  { name: "My Job Was Automated", type: "Coffee Mug", price: "$24.99+", mockup: "job-automated-mug.png", printfulId: 436110925 },
  { name: "ChatGPT Took My Job", type: "Laptop Sticker", price: "$4.99", mockup: "chatgpt-took-job-tshirt.png", printfulId: null },
  { name: "Prompt Engineer Survivor", type: "Premium Hoodie", price: "$59.99+", mockup: "prompt-survivor-hoodie.png", printfulId: 436110843 },
  { name: "AI Made This Design", type: "Ironic T-Shirt", price: "$29.99+", mockup: "ai-made-design-tshirt.png", printfulId: 436110836 },
  { name: "Still Human (For Now)", type: "Trucker Hat", price: "$19.99", mockup: "hat-still-human.png", printfulId: null },
  { name: "Actual Intelligence", type: "Premium T-Shirt", price: "$34.99+", mockup: "actual-intelligence-tshirt.png", printfulId: 436110834 },
  { name: "Scammed by Deepfake", type: "Classic T-Shirt", price: "$29.99+", mockup: "scammed-deepfake-tshirt.png", printfulId: 436110831 },
  { name: "Chatbot Stole My Child", type: "Coffee Mug", price: "$24.99+", mockup: "chatbot-stole-child-mug.png", printfulId: 436110929 },
  { name: "I Have AI Psychosis", type: "Classic T-Shirt", price: "$29.99+", mockup: "ai-psychosis-tshirt.png", printfulId: 436110829 },
  { name: "AI Data Center Control Grid", type: "Premium Hoodie", price: "$59.99+", mockup: "data-center-hoodie.png", printfulId: 436110845 },
  { name: "AI Algorithmic Angst", type: "Coffee Mug", price: "$24.99+", mockup: "algorithmic-angst-mug.png", printfulId: 436110937 },
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
            Monetize Your<br />
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
                <div className="h-40 bg-black/[0.02] flex items-center justify-center mb-4 border border-black/5 overflow-hidden">
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
