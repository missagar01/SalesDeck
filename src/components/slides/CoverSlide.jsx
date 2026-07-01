import { CONFIG } from '../../data/config';
import Slide from '../Slide';
import logoImg from '../../assets/tlogo.png';

export default function CoverSlide({ isActive }) {
  const year = new Date().getFullYear();
  return (
    <Slide isActive={isActive} center>
      <div className={`flex flex-col items-center w-full text-center ${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDuration: '600ms' }}>

        {/* Logo — top on mobile */}
        <div className="w-full flex justify-center mb-[16px] md:mb-0 mt-0 md:mt-0">
          <img src={logoImg} alt={CONFIG.brand} className="w-[85%] max-w-[330px] md:w-auto md:h-[clamp(155px,27vh,310px)] object-contain drop-shadow-sm" />
        </div>

        {/* Company Name + Tagline */}
        <div className="flex flex-col items-center justify-center mb-[clamp(10px,3vh,30px)]">
          <div className="eyebrow justify-center mb-[clamp(6px,1.5vh,20px)]">Company presentation &middot; {year}</div>

          <h1 className="max-w-[1200px] mx-auto leading-none pb-[5px]" style={{ fontSize: 'clamp(26px, min(8vw, 9vh), 90px)' }}>
            <span className="accent">{CONFIG.company}</span>
          </h1>

          <p className="lede text-center mx-auto mt-[clamp(4px,1vh,15px)] font-bold text-black">{CONFIG.tagline}</p>
        </div>

        {/* Details — bottom on mobile */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-[6px] md:gap-[20px] max-w-[850px] w-full mx-auto mt-[clamp(6px,1.5vh,20px)]">
          {/* Card 1: Roots */}
          <div className="group flex flex-row items-center justify-start min-w-0 gap-[6px] md:gap-[12px] bg-white/45 backdrop-blur-md border border-white/60 hover:border-amber/40 p-[6px] pl-[6px] md:p-[14px] md:pl-[52px] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md w-full max-w-[340px] md:max-w-none mx-auto">
            <div className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] rounded-lg bg-amber/10 text-amber flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px] md:w-[20px] md:h-[20px]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="text-left min-w-0">
              <div className="font-mono text-[6.5px] md:text-[10px] tracking-widest md:tracking-[.15em] text-amber font-bold uppercase mb-px">Est. & Location</div>
              <div className="font-body text-[7.5px] md:text-[13px] font-bold text-black leading-snug wrap-break-word">{CONFIG.founded} &middot; {CONFIG.location}</div>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="group flex flex-row items-center justify-start min-w-0 gap-[6px] md:gap-[12px] bg-white/45 backdrop-blur-md border border-white/60 hover:border-amber/40 p-[6px] pl-[6px] md:p-[14px] md:pl-[52px] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md w-full max-w-[340px] md:max-w-none mx-auto">
            <div className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] rounded-lg bg-amber/10 text-amber flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px] md:w-[20px] md:h-[20px]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="text-left min-w-0">
              <div className="font-mono text-[6.5px] md:text-[10px] tracking-widest md:tracking-[.15em] text-amber font-bold uppercase mb-px">Email</div>
              <div className="font-body text-[7.5px] md:text-[13px] font-bold text-black leading-snug break-all">{CONFIG.email}</div>
            </div>
          </div>

          {/* Card 3: Support */}
          <div className="group flex flex-row items-center justify-start min-w-0 gap-[6px] md:gap-[12px] bg-white/45 backdrop-blur-md border border-white/60 hover:border-amber/40 p-[6px] pl-[6px] md:p-[14px] md:pl-[52px] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md w-full max-w-[340px] md:max-w-none mx-auto">
            <div className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] rounded-lg bg-amber/10 text-amber flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px] md:w-[20px] md:h-[20px]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="text-left min-w-0">
              <div className="font-mono text-[6.5px] md:text-[10px] tracking-widest md:tracking-[.15em] text-amber font-bold uppercase mb-px">Phone Support</div>
              <div className="font-body text-[7px] md:text-[12px] font-bold text-black leading-tight flex flex-col">
                {CONFIG.phone.split(',').map((num, i) => (
                  <span key={i} className="truncate">{num.trim()}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </Slide>
  );
}
