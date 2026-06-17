import Slide from '../Slide';
import logoImg from '../../assets/Logo.png';

export default function DeptMapSlide({ isActive }) {
  const challenges = [
    { title: "Inconsistent Quality", text: "Variations in material standards and finishing" },
    { title: "Supply Chain Delay", text: "Unpredictable delivery timelines can disrupt project schedules and increase operational pressure." },
    { title: "Price Fluctuations", text: "Frequent changes in raw material costs make budgeting and long-term planning difficult." },
    { title: "Lack of Support", text: "Limited technical guidance and after-sales assistance can slow down decision-making and execution." }
  ];

  const solutions = [
    { title: "BIS Certified Quality", text: "Strict quality checks and standardized processes ensure uniform strength, finish, and performance." },
    { title: "Reliable Supply", text: "Streamlined logistics and efficient inventory management help maintain predictable delivery schedules." },
    { title: "Transparent Pricing", text: "Well-planned sourcing and pricing strategies reduce volatility and support better cost control." },
    { title: "Dedicated Support", text: "Expert assistance from consultation to after-sales ensures smooth execution at every stage." }
  ];

  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Turning Industry Challenges to Smart Solutions</div>
      <h2>The Smart <span className="accent">Way Forward.</span></h2>
      <p className="lede">How we tackle common industry hurdles to deliver unmatched value to your business.</p>
      
      {/* Mobile Top Graphic */}
      <div className={`md:hidden flex relative w-[160px] h-[80px] mx-auto mt-[10px] mb-[4px] shrink-0 ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1100ms', animationFillMode: 'both' }}>
        <div className="absolute inset-0 flex shadow-md rounded-[12px] overflow-hidden border border-line">
          <div className="w-1/2 bg-[#1e293b] flex flex-col items-center justify-center pt-[4px]">
            <div className="text-amber text-[20px]">&#9888;&#65039;</div>
            <div className="text-white font-disp text-[9px] mt-1 font-bold tracking-wide">Challenges</div>
          </div>
          <div className="w-1/2 bg-white flex flex-col items-center justify-center pt-[4px]">
            <div className="text-green text-[20px]">&#128640;</div>
            <div className="text-ink font-disp text-[9px] mt-1 font-bold tracking-wide">Solutions</div>
          </div>
        </div>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] bg-[#1e293b] rounded-full border-[3px] border-white shadow-lg flex items-center justify-center p-[6px]">
           <img src={logoImg} alt="Sagar Logo" className="w-full h-auto object-contain" />
        </div>
      </div>

      <div className="flex flex-row w-full mt-[4px] md:mt-[30px] items-stretch gap-[8px] md:gap-[16px] flex-1 pb-2">
        
        {/* Left Column: Challenges */}
        <div className="flex-1 flex flex-col justify-start md:justify-center gap-[6px] md:gap-[20px] pt-[4px] md:pt-0">
          {challenges.map((c, i) => (
            <div key={i} className={`flex items-start gap-[4px] md:gap-[12px] bg-panel md:bg-transparent p-[6px] md:p-0 rounded-lg border border-line md:border-none ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: `${300 + (i * 200)}ms`, animationFillMode: 'both' }}>
              <div className="font-disp font-black text-[18px] md:text-[46px] leading-[0.8] text-amber-soft select-none mt-[2px] md:mt-[4px]">
                {i + 1}
              </div>
              <div>
                <b className="font-disp text-[9px] sm:text-[11px] md:text-[17px] text-amber block mb-[1px] md:mb-[2px]">{c.title}:</b>
                <span className="text-muted text-[7px] sm:text-[9px] md:text-[14px] leading-[1.2] md:leading-[1.4] block">
                  {c.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center Graphic (Desktop) */}
        <div className={`hidden md:flex relative w-[180px] flex-col items-center justify-center shrink-0 ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1100ms', animationFillMode: 'both' }}>
          <div className="absolute inset-y-0 left-[20px] right-[20px] flex shadow-xl rounded-[16px] overflow-hidden border border-line">
            <div className="w-1/2 bg-[#1e293b] flex flex-col items-center justify-start pt-[60px]">
              <div className="text-amber text-[32px]">&#9888;&#65039;</div>
              <div className="text-white font-disp text-[12px] mt-2 font-bold tracking-wide">Challenges</div>
            </div>
            <div className="w-1/2 bg-white flex flex-col items-center justify-end pb-[60px]">
              <div className="text-green text-[32px]">&#128640;</div>
              <div className="text-ink font-disp text-[12px] mt-2 font-bold tracking-wide">Solutions</div>
            </div>
          </div>
          
          <div className="w-[100px] h-[100px] bg-[#1e293b] rounded-full border-[6px] border-white shadow-2xl relative z-10 flex items-center justify-center p-[16px]">
             <img src={logoImg} alt="Sagar Logo" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Right Column: Solutions */}
        <div className="flex-1 flex flex-col justify-start md:justify-center gap-[6px] md:gap-[20px] pt-[4px] md:pt-0">
          {solutions.map((s, i) => (
            <div key={i} className={`flex items-start gap-[4px] md:gap-[12px] bg-panel md:bg-transparent p-[6px] md:p-0 rounded-lg border border-line md:border-none ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: `${1300 + (i * 200)}ms`, animationFillMode: 'both' }}>
              <div className="font-disp font-black text-[18px] md:text-[46px] leading-[0.8] text-green/20 select-none mt-[2px] md:mt-[4px]">
                {i + 1}
              </div>
              <div>
                <b className="font-disp text-[9px] sm:text-[11px] md:text-[17px] text-green block mb-[1px] md:mb-[2px]">{s.title}:</b>
                <span className="text-muted text-[7px] sm:text-[9px] md:text-[14px] leading-[1.2] md:leading-[1.4] block">
                  {s.text}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Slide>
  );
}
