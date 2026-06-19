import { CONFIG } from '../../data/config';
import Slide from '../Slide';
import logoImg from '../../assets/tlogo.png';
import thankYouBgImg from '../../assets/Thankubackground.jpeg';

export default function ThankYouSlide({ isActive }) {
  return (
    <Slide isActive={isActive} center>
      {/* Blurred background image element just for this slide */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
          style={{ backgroundImage: `url(${thankYouBgImg})` }}
        />
        <div className="absolute inset-0 backdrop-blur-[10px] bg-white/30" />
      </div>

      <div className={`flex flex-col items-center w-full text-center relative z-10 ${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '200ms', animationFillMode: 'both' }}>

        {/* Logo */}
        <div className="mb-[15px] md:mb-[15px] w-full flex justify-center mt-[-20px] md:mt-0">
          <img src={logoImg} alt={CONFIG.brand} className="w-[85%] max-w-[300px] md:w-auto md:h-[150px] object-contain drop-shadow-sm" />
        </div>

        {/* Thank You Box */}
        <div className="border-t-[2px] border-b-[2px] border-[#ef4444] py-[10px] md:py-[15px] mb-[15px] md:mb-[20px] w-full max-w-[500px] mx-auto">
          <h1 className="font-disp font-black text-[45px] md:text-[70px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] uppercase tracking-wide leading-none m-0">
            Thank You
          </h1>
        </div>

        {/* Contact Us */}
        <div className="text-[#ef4444] font-body font-semibold text-[16px] md:text-[20px] mb-[8px] md:mb-[12px] drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.6)]">
          -Contact Us
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-[10px] md:gap-[12px] font-disp font-bold text-[14px] md:text-[18px] text-white mb-[15px] md:mb-[20px] w-full drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-center gap-[10px] w-fit mx-auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0 text-[#ef4444]">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>mkt@sagargroup.co</span>
          </div>
          
          <div className="flex items-center justify-center gap-[10px] w-fit mx-auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0 text-[#ef4444]">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+91 6266919126</span>
          </div>

          <div className="flex items-center justify-center gap-[10px] w-fit mx-auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0 text-[#ef4444]">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+91 7723020092</span>
          </div>

          <div className="flex items-center justify-center gap-[10px] w-fit mx-auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0 text-[#ef4444]">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+91 7723020091</span>
          </div>
        </div>

        {/* Follow Us */}
        <div className="text-slate-300 font-body font-medium text-[14px] md:text-[16px] mb-[8px] md:mb-[12px] drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.6)]">
          -Follow Us on
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <a href="#" className="text-white hover:text-[#ef4444] transition-colors drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.6)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-[#ef4444] transition-colors drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.6)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

      </div>
    </Slide>
  );
}
