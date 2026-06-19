import Slide from '../Slide';
import logoImg from '../../assets/Logo.png';

export default function PillarsSlide({ isActive }) {
  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Manufacturing Infrastructure</div>
      <h2>End-to-End <span className="accent">Integration.</span></h2>
      <p className="lede">From raw materials to finished products, our entire process is controlled in-house for maximum quality and efficiency.</p>

      {/* Diagram Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-[4px] md:mt-[50px] gap-[4px] md:gap-[40px] flex-1">
        
        {/* Step 1: Raw Materials */}
        <div className={`flex flex-col items-center gap-[4px] md:gap-[12px] ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
           <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full bg-panel border-[3px] md:border-4 border-line flex items-center justify-center p-[6px] md:p-[16px] shadow-md md:shadow-lg relative overflow-hidden">
             <div className="absolute inset-0 border-l-[3px] md:border-l-[6px] border-amber rounded-full"></div>
             <img src={logoImg} alt="Sagar Logo" className="w-full h-auto object-contain relative z-10" />
           </div>
           <div className="font-disp font-semibold text-[10px] md:text-[16px] text-ink bg-panel border border-line rounded-full px-[10px] py-[2px] md:px-[16px] md:py-[6px] shadow-sm">
             Raw Materials
           </div>
        </div>

        {/* Arrow */}
        <div className={`flex justify-center ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-amber md:rotate-0 rotate-90 md:w-[32px] md:h-[32px]">
             <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        {/* Step 2: Integrated Manufacturing */}
        <div className="flex flex-col items-center relative">
          <div className={`absolute top-[10px] bottom-[10px] left-1/2 -translate-x-1/2 w-[2px] md:w-[3px] bg-line -z-10 rounded-full ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '700ms', animationFillMode: 'both' }}></div>
          
          <div className="flex flex-col gap-[4px] md:gap-[16px] w-full items-center">
            <div className={`flex items-center gap-[6px] md:gap-[10px] bg-panel border border-line rounded-full px-[10px] py-[2px] md:px-[16px] md:py-[6px] shadow-sm z-10 ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '800ms', animationFillMode: 'both' }}>
              <span className="w-[6px] h-[6px] md:w-[10px] md:h-[10px] rounded-full bg-amber shadow-[0_0_0_2px_var(--color-amber-soft)] md:shadow-[0_0_0_3px_var(--color-amber-soft)]"></span>
              <span className="text-[10px] md:text-[14px] font-medium text-ink">7 Industrial Furnaces</span>
            </div>
            <div className={`flex items-center gap-[6px] md:gap-[10px] bg-panel border border-line rounded-full px-[10px] py-[2px] md:px-[16px] md:py-[6px] shadow-sm z-10 ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '900ms', animationFillMode: 'both' }}>
              <span className="w-[6px] h-[6px] md:w-[10px] md:h-[10px] rounded-full bg-amber shadow-[0_0_0_2px_var(--color-amber-soft)] md:shadow-[0_0_0_3px_var(--color-amber-soft)]"></span>
              <span className="text-[10px] md:text-[14px] font-medium text-ink">2 CCM Units</span>
            </div>

            <div className={`bg-[linear-gradient(180deg,var(--color-amber),#b91c1c)] text-white px-[12px] py-[6px] md:px-[24px] md:py-[14px] rounded-[16px] md:rounded-[24px] font-disp font-bold text-[12px] md:text-[18px] text-center shadow-md md:shadow-lg whitespace-nowrap z-10 my-[2px] md:my-[8px] tracking-wide ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1000ms', animationFillMode: 'both' }}>
              Integrated<br className="md:block hidden"/> Manufacturing
            </div>

            <div className={`flex items-center gap-[6px] md:gap-[10px] bg-panel border border-line rounded-full px-[10px] py-[2px] md:px-[16px] md:py-[6px] shadow-sm z-10 ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1100ms', animationFillMode: 'both' }}>
              <span className="w-[6px] h-[6px] md:w-[10px] md:h-[10px] rounded-full bg-amber shadow-[0_0_0_2px_var(--color-amber-soft)] md:shadow-[0_0_0_3px_var(--color-amber-soft)]"></span>
              <span className="text-[10px] md:text-[14px] font-medium text-ink">1 Strips Mill</span>
            </div>
            <div className={`flex items-center gap-[6px] md:gap-[10px] bg-panel border border-line rounded-full px-[10px] py-[2px] md:px-[16px] md:py-[6px] shadow-sm z-10 ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1200ms', animationFillMode: 'both' }}>
              <span className="w-[6px] h-[6px] md:w-[10px] md:h-[10px] rounded-full bg-amber shadow-[0_0_0_2px_var(--color-amber-soft)] md:shadow-[0_0_0_3px_var(--color-amber-soft)]"></span>
              <span className="text-[10px] md:text-[14px] font-medium text-ink">8 Pipe Mills</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className={`flex justify-center ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1400ms', animationFillMode: 'both' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-amber md:rotate-0 rotate-90 md:w-[32px] md:h-[32px]">
             <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        {/* Step 3: Finished Products */}
        <div className="flex flex-col items-center relative">
          <div className={`absolute top-[10px] bottom-[10px] left-1/2 -translate-x-1/2 w-[2px] md:w-[3px] bg-line -z-10 rounded-full ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1600ms', animationFillMode: 'both' }}></div>

          <div className="flex flex-col gap-[4px] md:gap-[16px] w-full items-center">
            <div className={`flex items-center gap-[6px] md:gap-[10px] bg-panel border border-line rounded-full px-[10px] py-[2px] md:px-[16px] md:py-[6px] shadow-sm z-10 mt-[4px] md:mt-[24px] ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1700ms', animationFillMode: 'both' }}>
              <span className="w-[6px] h-[6px] md:w-[10px] md:h-[10px] rounded-full bg-amber shadow-[0_0_0_2px_var(--color-amber-soft)] md:shadow-[0_0_0_3px_var(--color-amber-soft)]"></span>
              <span className="text-[10px] md:text-[14px] font-medium text-ink">MS Billets</span>
            </div>

            <div className={`bg-[linear-gradient(180deg,var(--color-amber),#b91c1c)] text-white px-[12px] py-[6px] md:px-[24px] md:py-[14px] rounded-[16px] md:rounded-[24px] font-disp font-bold text-[12px] md:text-[18px] text-center shadow-md md:shadow-lg whitespace-nowrap z-10 my-[2px] md:my-[8px] tracking-wide ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1800ms', animationFillMode: 'both' }}>
              Finished<br className="md:block hidden"/> Products
            </div>

            <div className={`flex items-center gap-[6px] md:gap-[10px] bg-panel border border-line rounded-full px-[10px] py-[2px] md:px-[16px] md:py-[6px] shadow-sm z-10 ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1900ms', animationFillMode: 'both' }}>
              <span className="w-[6px] h-[6px] md:w-[10px] md:h-[10px] rounded-full bg-amber shadow-[0_0_0_2px_var(--color-amber-soft)] md:shadow-[0_0_0_3px_var(--color-amber-soft)]"></span>
              <span className="text-[10px] md:text-[14px] font-medium text-ink">MS Strips</span>
            </div>
            <div className={`flex items-center gap-[6px] md:gap-[10px] bg-panel border border-line rounded-full px-[10px] py-[2px] md:px-[16px] md:py-[6px] shadow-sm z-10 mb-[4px] md:mb-[24px] ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '2000ms', animationFillMode: 'both' }}>
              <span className="w-[6px] h-[6px] md:w-[10px] md:h-[10px] rounded-full bg-amber shadow-[0_0_0_2px_var(--color-amber-soft)] md:shadow-[0_0_0_3px_var(--color-amber-soft)]"></span>
              <span className="text-[10px] md:text-[14px] font-medium text-ink">Sagar Pipes</span>
            </div>
          </div>
        </div>

      </div>
    </Slide>
  );
}
