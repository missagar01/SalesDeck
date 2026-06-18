import { CONFIG } from '../../data/config';
import Slide from '../Slide';
import pipeImg from '../../assets/sagar_ms_pipes.png';
import stripeImg from '../../assets/ms_stripes_coils.png';
import billetImg from '../../assets/ms_billets.png';

export default function CertsSlide({ isActive }) {
  const products = [
    {
      title: "Sagar MS Pipes",
      items: ["Round Pipes", "Square Pipes", "Rectangular Pipes", "Hollow Section Pipes"],
      img: pipeImg
    },
    {
      title: "MS Stripes",
      items: ["Multiple Thickness", "Custom Widths"],
      img: stripeImg
    },
    {
      title: "MS Billets",
      items: ["Quality Assured", "BIS Compliant", "CCM Produced"],
      img: billetImg
    }
  ];

  return (
    <Slide isActive={isActive} center>
      <div className="eyebrow">Product Portfolio</div>
      <h2>Engineered for <span className="accent">Excellence.</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] md:gap-[24px] mt-[16px] md:mt-[34px] w-full">
        {products.map((p, i) => (
          <div 
            key={i} 
            className={`flex flex-row md:flex-col bg-white border border-line rounded-[12px] md:rounded-[16px] overflow-hidden group shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 h-auto md:h-[350px] ${isActive ? 'animate-slideIn' : 'opacity-0'}`}
            style={{ 
              animationDelay: isActive ? `${i * 120 + 200}ms` : '0ms', 
              animationFillMode: 'both' 
            }}
          >
            {/* Left/Top Part: Product Image */}
            <div className="w-[100px] md:w-full h-full md:h-[150px] relative overflow-hidden bg-slate-100 shrink-0 border-r md:border-r-0 md:border-b border-line">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
            </div>

            {/* Right/Bottom Part: Text Content */}
            <div className="p-[12px] md:p-[18px] flex-grow flex flex-col justify-center md:justify-start bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] min-w-0">
              <h3 className="font-disp font-bold text-[14px] md:text-[18px] text-ink mb-[4px] md:mb-[12px] leading-tight truncate">
                {p.title}
              </h3>
              
              {/* Responsive Bullet List */}
              <ul className="flex flex-col gap-[4px] md:gap-[8px]">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-[6px] md:gap-[8px] text-ink text-[11px] md:text-[14px] font-medium leading-tight">
                    <span className="w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full bg-amber flex-shrink-0"></span>
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[24px] md:mt-[48px] flex flex-row items-center justify-center gap-[4px] sm:gap-[8px] md:gap-[24px] w-full whitespace-nowrap">
        <div className="bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] border border-line rounded-full px-[10px] py-[6px] md:px-[20px] md:py-[12px] font-disp font-semibold text-[10px] sm:text-[11px] md:text-[16px] text-amber text-center shadow-md">
          Minimal joints per bundle
        </div>
        
        <div className="text-amber flex-shrink-0">
          <svg className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>

        <div className="bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] border border-line rounded-full px-[10px] py-[6px] md:px-[20px] md:py-[12px] font-disp font-semibold text-[10px] sm:text-[11px] md:text-[16px] text-amber text-center shadow-md">
          Higher durability
        </div>

        <div className="text-amber flex-shrink-0">
          <svg className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>

        <div className="bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] border border-line rounded-full px-[10px] py-[6px] md:px-[20px] md:py-[12px] font-disp font-semibold text-[10px] sm:text-[11px] md:text-[16px] text-amber text-center shadow-md">
          Reduced leakage risk
        </div>
      </div>
    </Slide>
  );
}
