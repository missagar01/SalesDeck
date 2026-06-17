import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function StatsSlide({ isActive }) {
  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">What do we do?</div>
      <h2 className="max-w-[1000px] mt-2 text-[clamp(28px,4vw,50px)] leading-[1.2]">
        We manufacture and deliver <span className="accent">high-quality steel products</span> with integrated operations.
      </h2>
      <p className="lede mt-4 max-w-[800px]">
        From melting to finished goods ensuring quality, reliability, and speed.
      </p>

      <div className="eyebrow mt-[40px] md:mt-[60px]">Why do we do it?</div>
      <h2 className="max-w-[1000px] mt-2 text-[clamp(28px,4vw,50px)] leading-[1.2]">
        Every business deserves a steel partner that <span className="accent">delivers on time, every time.</span>
      </h2>
      <p className="lede mt-4 max-w-[800px]">
        Reducing costs, eliminating delays, and building long-term trust.
      </p>
      
      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}
