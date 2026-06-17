import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function CertsSlide({ isActive }) {
  const products = [
    {
      title: "Sagar MS Pipes",
      items: ["Round Pipes", "Square Pipes", "Rectangular Pipes", "Hollow Section Pipes"]
    },
    {
      title: "MS Stripes",
      items: ["Multiple Thickness", "Custom Widths"]
    },
    {
      title: "MS Billets",
      items: ["Quality Assured", "BIS Compliant", "CCM Produced"]
    }
  ];

  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Product Portfolio</div>
      <h2>Engineered for <span className="accent">Excellence.</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[8px] md:gap-[24px] mt-[10px] md:mt-[34px] w-full">
        {products.map((p, i) => (
          <div 
            key={i} 
            className={`flex flex-col bg-panel border-b-2 border-r-2 border-amber rounded-[12px] overflow-hidden ${isActive ? 'animate-slideIn' : 'opacity-0'}`}
            style={{ 
              animationDelay: isActive ? `${i * 300 + 300}ms` : '0ms', 
              animationFillMode: 'both' 
            }}
          >
            <div className="bg-[#1e293b] text-white text-center py-[8px] md:py-[16px] font-disp font-bold text-[15px] md:text-[20px]">
              {p.title}
            </div>
            <div className="p-[10px] px-[16px] md:p-[24px] flex-1">
              <ul className="flex flex-col gap-[6px] md:gap-[14px]">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-[8px] md:gap-[10px] text-ink text-[12px] md:text-[15px] font-medium">
                    <span className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-amber flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[16px] md:mt-[48px] flex flex-row items-center justify-center gap-[4px] sm:gap-[8px] md:gap-[24px] w-full whitespace-nowrap">
        <div className="bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] border border-line rounded-full px-[8px] py-[4px] md:px-[20px] md:py-[12px] font-disp font-semibold text-[9px] sm:text-[11px] md:text-[16px] text-amber text-center shadow-md">
          Minimal joints per bundle
        </div>
        
        <div className="text-amber flex-shrink-0">
          <svg className="w-[10px] h-[10px] md:w-[24px] md:h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>

        <div className="bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] border border-line rounded-full px-[8px] py-[4px] md:px-[20px] md:py-[12px] font-disp font-semibold text-[9px] sm:text-[11px] md:text-[16px] text-amber text-center shadow-md">
          Higher durability
        </div>

        <div className="text-amber flex-shrink-0">
          <svg className="w-[10px] h-[10px] md:w-[24px] md:h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>

        <div className="bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] border border-line rounded-full px-[8px] py-[4px] md:px-[20px] md:py-[12px] font-disp font-semibold text-[9px] sm:text-[11px] md:text-[16px] text-amber text-center shadow-md">
          Reduced leakage risk
        </div>
      </div>
    </Slide>
  );
}
