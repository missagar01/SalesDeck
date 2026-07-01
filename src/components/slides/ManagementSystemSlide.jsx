import Slide from '../Slide';

export default function ManagementSystemSlide({ isActive }) {
  return (
    <Slide isActive={isActive} center>
      <div className="eyebrow">Our Management System</div>
      <h2>Integrated <span className="accent">Operations.</span></h2>
      <p className="lede">One cohesive platform seamlessly connecting every department.</p>

      {/* Main Diagram Container */}
      <div className="relative w-full max-w-[1000px] mx-auto mt-[10px] md:mt-[20px] flex items-center justify-center h-[300px] md:h-[360px] overflow-hidden">
        
        {/* Core Assembly Wrapper - scales down to fit perfectly without overlapping footer */}
        <div className="relative w-[220px] h-[100px] md:w-[550px] md:h-[240px] scale-[0.75] sm:scale-[0.85] md:scale-[0.62] lg:scale-[0.7] flex items-center justify-center">
          
          {/* ERP Block (z-30) */}
          <div 
            className={`absolute left-0 top-0 w-[110px] h-[100px] md:w-[250px] md:h-[240px] bg-[#2f2f2f] rounded-l-none rounded-r-[60px] md:rounded-r-[120px] z-30 flex items-center justify-center text-white font-disp font-bold text-[11px] md:text-[28px] shadow-[4px_0_15px_rgba(0,0,0,0.3)] transition-all duration-1000 ease-out ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-[-30px] opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="pr-[40px] md:pr-[100px]">ERP</span>
          </div>

          {/* CRM Block (z-20) */}
          <div 
            className={`absolute left-[55px] md:left-[150px] top-0 w-[110px] h-[100px] md:w-[250px] md:h-[240px] bg-[#d32f2f] rounded-l-none rounded-r-[60px] md:rounded-r-[120px] z-20 flex items-center justify-center text-white font-disp font-bold text-[11px] md:text-[28px] shadow-[4px_0_15px_rgba(0,0,0,0.3)] transition-all duration-1000 ease-out ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-[-30px] opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <span className="pl-[55px] md:pl-[100px]">CRM</span>
          </div>

          {/* Inventory Tracking Block (z-10) */}
          <div 
            className={`absolute left-[110px] md:left-[300px] top-0 w-[110px] h-[100px] md:w-[250px] md:h-[240px] bg-[#757575] rounded-l-none rounded-r-[60px] md:rounded-r-[120px] z-10 flex items-center justify-center text-white font-disp font-bold text-[9px] md:text-[22px] leading-[1.2] shadow-[4px_0_15px_rgba(0,0,0,0.3)] transition-all duration-1000 ease-out ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-[-30px] opacity-0'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <span className="pl-[55px] pr-[5px] md:pr-0 md:pl-[100px]">Inventory<br/>Tracking</span>
          </div>

          {/* --- Text & Arrows (Anchored to the Assembly) --- */}

          {/* Left: ERP Points */}
          <div className={`absolute right-full mr-[8px] md:mr-[40px] top-1/2 -translate-y-1/2 w-[88px] sm:w-[110px] md:w-max text-left transition-all duration-1000 ease-out ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20px]'}`} style={{ transitionDelay: '800ms' }}>
            <ul className="space-y-[6px] md:space-y-[16px] text-[11px] sm:text-[12px] md:text-[16px] text-ink font-medium leading-tight">
              <li className="flex items-start md:items-center gap-[4px] md:gap-[8px]"><span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#2f2f2f] rounded-full shrink-0 mt-[5px] md:mt-0"></span> Operations Management</li>
              <li className="flex items-start md:items-center gap-[4px] md:gap-[8px]"><span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#2f2f2f] rounded-full shrink-0 mt-[5px] md:mt-0"></span> Production Monitoring</li>
              <li className="flex items-start md:items-center gap-[4px] md:gap-[8px]"><span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#2f2f2f] rounded-full shrink-0 mt-[5px] md:mt-0"></span> Purchase &amp; Store</li>
            </ul>
            {/* Arrow pointing to ERP text */}
            <div className="absolute right-[-20px] md:right-[-60px] top-[-20px] md:top-[-45px] w-[30px] md:w-[80px]">
              <svg viewBox="0 0 100 50" fill="none" stroke="#2f2f2f" strokeWidth="3" className="w-full h-full">
                 <path d="M100,20 Q60,-10 0,40" strokeLinecap="round" />
                 <path d="M20,25 L0,40 L15,55" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Bottom: CRM Points */}
          <div className={`absolute top-full mt-[16px] md:mt-[24px] left-[50%] md:left-[50%] -translate-x-1/2 w-max transition-all duration-1000 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`} style={{ transitionDelay: '1000ms' }}>
            <ul className="space-y-[6px] md:space-y-[16px] text-[11px] sm:text-[12px] md:text-[16px] text-ink font-medium text-left leading-tight">
              <li className="flex items-center gap-[4px] md:gap-[8px]"><span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#d32f2f] rounded-full shrink-0"></span> Client Analytics</li>
              <li className="flex items-center gap-[4px] md:gap-[8px]"><span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#d32f2f] rounded-full shrink-0"></span> Order Management</li>
              <li className="flex items-center gap-[4px] md:gap-[8px]"><span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#d32f2f] rounded-full shrink-0"></span> After-sales service</li>
            </ul>
            {/* Line pointing down from CRM */}
            <div className="absolute left-[50%] -translate-x-1/2 top-[-15px] md:top-[-24px] h-[10px] md:h-[18px] w-[2px] md:w-[4px] bg-[#d32f2f]"></div>
          </div>

          {/* Right: Inventory Tracking Points */}
          <div className={`absolute left-full ml-[8px] md:ml-[30px] top-1/2 -translate-y-1/2 w-[94px] sm:w-[115px] md:w-max text-left transition-all duration-1000 ease-out ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'}`} style={{ transitionDelay: '1200ms' }}>
            <ul className="space-y-[6px] md:space-y-[16px] text-[11px] sm:text-[12px] md:text-[16px] text-ink font-medium leading-tight">
              <li className="flex items-start md:items-center gap-[4px] md:gap-[8px]"><span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#757575] rounded-full shrink-0 mt-[5px] md:mt-0"></span> Real-time Stock Monitoring</li>
              <li className="flex items-start md:items-center gap-[4px] md:gap-[8px]"><span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#757575] rounded-full shrink-0 mt-[5px] md:mt-0"></span> Batch Tracking</li>
              <li className="flex items-start md:items-center gap-[4px] md:gap-[8px]"><span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#757575] rounded-full shrink-0 mt-[5px] md:mt-0"></span> Location Management</li>
            </ul>
            {/* Arrow pointing right from Inventory */}
            <div className="absolute left-[-20px] md:left-[-70px] top-[-20px] md:top-[-45px] w-[30px] md:w-[80px]">
               <svg viewBox="0 0 100 50" fill="none" stroke="#d32f2f" strokeWidth="3" className="w-full h-full">
                 <path d="M0,40 Q40,-10 100,40" strokeLinecap="round" />
                 <path d="M80,25 L100,40 L85,55" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Tiny straight connector line to Inventory points */}
            <div className="absolute left-[-10px] md:left-[-30px] top-1/2 -translate-y-1/2 w-[8px] md:w-[20px] h-px md:h-[2px] bg-[#757575]"></div>
          </div>

        </div>
      </div>
    </Slide>
  );
}
