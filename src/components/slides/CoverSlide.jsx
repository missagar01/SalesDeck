import { CONFIG } from '../../data/config';
import Slide from '../Slide';
import logoImg from '../../assets/Logo.png';

export default function CoverSlide({ isActive }) {
  const year = new Date().getFullYear();
  return (
    <Slide isActive={isActive}>
      <div className={`flex flex-col items-center justify-center w-full h-full text-center ${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDuration: '600ms' }}>
        
        {/* Logo */}
        <div className="mb-[-80px] md:mb-[10px] w-full flex justify-center mt-[-30px] md:mt-0">
          <img src={logoImg} alt={CONFIG.brand} className="w-[85%] max-w-[350px] md:w-auto md:h-[250px] object-contain drop-shadow-sm" />
        </div>

        {/* Central Text */}
        <div className="flex flex-col items-center justify-center mb-[40px] md:mb-[60px]">
          <div className="eyebrow justify-center mb-[15px] md:mb-[20px]">Company presentation &middot; {year}</div>

          <h1 className="max-w-[1200px] mx-auto leading-none pb-[5px]" style={{ fontSize: 'clamp(40px, 8vw, 90px)' }}>
            <span className="accent">{CONFIG.company}</span>
          </h1>

          <p className="lede text-center mx-auto mt-[10px] md:mt-[15px]">{CONFIG.tagline}</p>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col items-center gap-[6px] md:gap-[8px] font-mono text-[11px] md:text-[13px] text-muted tracking-[.04em] text-center">
          <div className="flex flex-col md:flex-row gap-[6px] md:gap-[24px] justify-center">
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
