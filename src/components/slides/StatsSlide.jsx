import { CONFIG } from '../../data/config';
import Slide from '../Slide';
import constructionSkylineImg from '../../assets/construction_skyline.jpg';

export default function StatsSlide({ isActive }) {
  return (
    <Slide isActive={isActive} desktopCenter>
      <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-[14px] lg:gap-[40px] xl:gap-[50px] items-center">
        {/* Left Side: Content Texts */}
        <div className="lg:col-span-7 flex flex-col w-full">
          {/* Section 1: What do we do */}
          <div className={`${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDuration: '600ms', animationFillMode: 'both' }}>
            <div className="eyebrow">What do we do?</div>
            <h2 className="max-w-[1000px] mt-[4px] md:mt-2 text-[20px] sm:text-[24px] md:text-[32px] lg:text-[clamp(24px,3vw,38px)] xl:text-[42px] leading-[1.2]">
              We manufacture and deliver <span className="accent">high-quality steel products</span> with integrated operations.
            </h2>
            <p className="lede mt-[4px] md:mt-3 text-[13px] md:text-[16px] max-w-[800px]">
              From melting to finished goods ensuring quality, reliability, and speed.
            </p>
          </div>

          {/* Section 2: Why do we do it */}
          <div className={`mt-[12px] md:mt-[40px] ${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '200ms', animationDuration: '600ms', animationFillMode: 'both' }}>
            <div className="eyebrow">Why do we do it?</div>
            <h2 className="max-w-[1000px] mt-[4px] md:mt-2 text-[20px] sm:text-[24px] md:text-[32px] lg:text-[clamp(24px,3vw,38px)] xl:text-[42px] leading-[1.2]">
              Every business deserves a steel partner that <span className="accent">delivers on time, every time.</span>
            </h2>
            <p className="lede mt-[4px] md:mt-3 text-[13px] md:text-[16px] max-w-[800px]">
              Reducing costs, eliminating delays, and building long-term trust.
            </p>
          </div>
        </div>

        {/* Right Side: Image Div */}
        <div className={`lg:col-span-5 w-full flex justify-center ${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '400ms', animationDuration: '700ms', animationFillMode: 'both' }}>
          <div className="relative overflow-hidden rounded-[20px] border border-line bg-white shadow-md w-full aspect-16/10 sm:aspect-2/1 lg:aspect-auto lg:h-[450px] group">
            <img
              src={constructionSkylineImg}
              alt="Steel rebar installation overlooking city skyline"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for a premium look */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.2)_50%,transparent_100%)] flex flex-col justify-end p-[16px] md:p-[24px]">
              <span className="font-mono text-[9px] md:text-[11px] text-amber tracking-[0.08em] uppercase font-bold">Structural Steel & rebar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[120px] lg:hidden shrink-0"></div>
    </Slide>
  );
}
