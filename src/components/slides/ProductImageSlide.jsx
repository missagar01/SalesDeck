import { useState } from 'react';
import Slide from '../Slide';
import { X, ZoomIn } from 'lucide-react';

// Import assets
import msBillets from '../../assets/MS Billets.jpg';
import silicoManganese from '../../assets/Silico Manganese.jpg';
import msTubes from '../../assets/MS Tubes.jpg';
import tmtBars from '../../assets/TMT Bars.jpg';
import msStrips from '../../assets/MS-Strips.jpg';
import squarePipe from '../../assets/Square Pipe.jpeg';
import rectangularPips from '../../assets/Rectangular Pips.jpeg';
import scaffoldingChalli from '../../assets/Scaffolding Challi.png';
import cuplockVerticalStandard from '../../assets/Cuplock VerticalStandard.jpeg';
import cuplockLedgerHorizontal from '../../assets/Cuplock LedgerHorizontal.jpeg';

export default function ProductImageSlide({ isActive }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { title: "MS Billets", img: msBillets },
    { title: "Silico Manganese", img: silicoManganese },
    { title: "MS Tubes", img: msTubes },
    { title: "TMT Bars", img: tmtBars },
    { title: "MS Strips", img: msStrips },
    { title: "Square Pipe", img: squarePipe },
    { title: "Rectangular Pipes", img: rectangularPips },
    { title: "Scaffolding Challi", img: scaffoldingChalli },
    { title: "Cuplock Vertical/Standard", img: cuplockVerticalStandard },
    { title: "Cuplock Ledger/Horizontal", img: cuplockLedgerHorizontal }
  ];

  return (
    <Slide isActive={isActive} center>
      <div className="eyebrow">Product Gallery</div>
      <h2>Visualizing our <span className="accent">Product Portfolio.</span></h2>
      <p className="lede text-[13px]! md:text-[15px]! mt-[4px]! md:mt-[8px]! leading-snug">
        High-quality steel products manufactured with precision and certified to meet the highest industry standards.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[8px] md:gap-[14px] mt-[10px] md:mt-[18px] w-full max-w-7xl mx-auto pb-[20px] md:pb-[30px]">
        {products.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelectedProduct(p)}
            className={`flex flex-col bg-white border border-line rounded-[8px] md:rounded-[12px] overflow-hidden group shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer h-auto ${
              isActive ? 'animate-slideIn' : 'opacity-0'
            }`}
            style={{
              animationDelay: isActive ? `${i * 80 + 100}ms` : '0ms',
              animationFillMode: 'both'
            }}
          >
            {/* Image Container */}
            <div className="relative aspect-16/6 md:aspect-16/10 w-full overflow-hidden bg-slate-100 shrink-0 border-b border-line">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-1.5 rounded-full shadow-md text-amber transition-transform duration-300 transform scale-75 group-hover:scale-100">
                  <ZoomIn size={16} />
                </div>
              </div>
            </div>

            {/* Label Container */}
            <div className="p-[6px] md:p-[8px] grow flex flex-col justify-center bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] min-w-0">
              <h3 className="font-disp font-bold text-[11px] md:text-[13px] text-ink leading-tight text-center truncate group-hover:text-amber transition-colors duration-200">
                {p.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade"
          onClick={() => setSelectedProduct(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-110 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Modal Content */}
          <div 
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking the content itself
          >
            <img 
              src={selectedProduct.img} 
              alt={selectedProduct.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <h3 className="text-white font-disp font-extrabold text-[20px] md:text-[28px] mt-4 tracking-wide text-center">
              {selectedProduct.title}
            </h3>
          </div>
        </div>
      )}
    </Slide>
  );
}
