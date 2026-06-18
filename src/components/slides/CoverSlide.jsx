import { CONFIG } from '../../data/config';
import Slide from '../Slide';
import logoImg from '../../assets/tlogo.png';

export default function CoverSlide({ isActive }) {
  const year = new Date().getFullYear();
  return (
    <Slide isActive={isActive} center>
      <div className={`flex flex-col items-center w-full text-center ${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDuration: '600ms' }}>

        {/* Logo — top on mobile */}
        <div className="w-full flex justify-center mb-[16px] md:mb-[0px] mt-0 md:mt-0">
          <img src={logoImg} alt={CONFIG.brand} className="w-[65%] max-w-[220px] md:w-auto md:h-[200px] object-contain drop-shadow-sm" />
        </div>

        {/* Company Name + Tagline */}
        <div className="flex flex-col items-center justify-center mb-[20px] md:mb-[30px]">
          <div className="eyebrow justify-center mb-[8px] md:mb-[20px]">Company presentation &middot; {year}</div>

          <h1 className="max-w-[1200px] mx-auto leading-none pb-[5px]" style={{ fontSize: 'clamp(26px, 8vw, 90px)' }}>
            <span className="accent">{CONFIG.company}</span>
          </h1>

          <p className="lede text-center mx-auto mt-[8px] md:mt-[15px]">{CONFIG.tagline}</p>
        </div>

        {/* Details — bottom on mobile */}
        <div className="flex flex-col items-center gap-[8px] md:gap-[8px] font-mono text-[11px] md:text-[13px] text-muted tracking-[.04em] text-center">
          <div className="flex flex-row gap-[16px] md:gap-[24px] justify-center">
            <div>FOUNDED &middot; <span className="text-ink">{CONFIG.founded}</span></div>
            <div>BASE &middot; <span className="text-ink">{CONFIG.location}</span></div>
          </div>
          <div className="flex flex-col md:flex-row gap-[6px] md:gap-[24px] justify-center">
            <div>EMAIL &middot; <span className="text-ink">{CONFIG.email}</span></div>
          </div>
          <div className="flex flex-col md:flex-row gap-[6px] md:gap-[24px] justify-center">
            <div>PHONE &middot; <span className="text-ink">{CONFIG.phone}</span></div>
          </div>
        </div>

      </div>
    </Slide>
  );
}
