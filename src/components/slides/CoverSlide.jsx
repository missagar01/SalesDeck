import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function CoverSlide({ isActive }) {
  const year = new Date().getFullYear();
  return (
    <Slide isActive={isActive}>
      <div className="flex items-center gap-[14px] mb-auto">
        <div className="w-[42px] h-[42px] rounded-[10px] grid place-items-center bg-[linear-gradient(150deg,var(--color-amber),#c9560a)] font-disp font-extrabold text-[#1a0d02] text-[22px]">
          {CONFIG.brand[0]}
        </div>
        <b className="font-disp text-[18px] tracking-[.04em]">{CONFIG.brand}</b>
      </div>

      <div className="eyebrow mt-12">Company presentation &middot; {year}</div>

      <h1>
        Steel you can<br />
        <span className="accent">build a name on.</span>
      </h1>

      <p className="lede">{CONFIG.tagline}</p>

      <div className="mt-auto flex flex-col md:flex-row gap-[8px] md:gap-[34px] font-mono text-[11.5px] md:text-[12.5px] text-muted tracking-[.04em]">
        <div>FOUNDED &middot; <span className="text-ink">{CONFIG.founded}</span></div>
        <div>BASE &middot; <span className="text-ink">{CONFIG.location}</span></div>
        <div>PRESENTED BY &middot; <span className="text-ink">{CONFIG.rep}</span></div>
      </div>
    </Slide>
  );
}
