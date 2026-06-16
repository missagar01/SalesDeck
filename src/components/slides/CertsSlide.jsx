import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function CertsSlide({ isActive }) {
  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Quality & government certification</div>
      <h2>Tested, stamped, <span className="accent">accountable.</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[16px] mt-[16px] md:mt-[30px] w-full">
        {CONFIG.certs.map((c, i) => (
          <div key={i} className="flex gap-[12px] md:gap-[16px] items-start p-[12px_16px] md:p-[18px_20px] border border-line rounded-[14px] bg-panel">
            <div className="flex-none w-[36px] h-[36px] md:w-[46px] md:h-[46px] rounded-full border-2 border-green text-green grid place-items-center font-mono font-semibold text-[9px] md:text-[11px]">
              {c.tag}
            </div>
            <div>
              <b className="font-disp text-[15px] md:text-[18px] block mb-[3px]">{c.name}</b>
              <span className="text-muted text-[12px] md:text-[13px] leading-[1.4]">{c.note}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}
