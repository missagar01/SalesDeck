import { useState, useEffect } from 'react';
import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function CloseSlide({ isActive }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) setStep(0);
  }, [isActive]);
  const reasons = [
    {
      icon: (
        <svg viewBox="0 0 100 100" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]">
          {/* Cloud */}
          <path d="M70 70H30c-11 0-20-9-20-20 0-10.5 8.1-19.1 18.4-19.9C31.5 18 42 10 54 10c13.8 0 25.1 10.6 26.8 24.2C89.5 36.4 95 44.1 95 53c0 9.4-7.6 17-17 17z" fill="#2f2f2f"/>
          {/* Gear Center */}
          <circle cx="54" cy="48" r="14" fill="#d32f2f"/>
          {/* Gear Teeth */}
          <path d="M51 28h6v7h-6z M51 61h6v7h-6z M31 45h7v6h-7z M70 45h7v6h-7z M39 31l5 5-4 4-5-5z M63 61l5 5-4 4-5-5z M64 36l-5-5 4-4 5 5z M38 63l-5-5 4-4 5 5z" fill="#d32f2f"/>
          <circle cx="54" cy="48" r="6" fill="#fff"/>
        </svg>
      ),
      title: "Integrated Manufacturing",
      desc: <>End-to-end control from Ore to finished goods</>
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]">
          {/* Database Disks */}
          <path d="M20 30c0-5.5 12-10 25-10s25 4.5 25 10v40c0 5.5-12 10-25 10S20 75.5 20 70V30z" fill="#2f2f2f"/>
          <ellipse cx="45" cy="30" rx="25" ry="10" fill="#4a4a4a"/>
          <path d="M20 45c0 5.5 12 10 25 10s25-4.5 25-10" fill="none" stroke="#fff" strokeWidth="3"/>
          <path d="M20 60c0 5.5 12 10 25 10s25-4.5 25-10" fill="none" stroke="#fff" strokeWidth="3"/>
          {/* Gear Overlay */}
          <circle cx="75" cy="35" r="14" fill="#d32f2f"/>
          {/* Gear Teeth */}
          <path d="M72 15h6v7h-6z M72 48h6v7h-6z M52 32h7v6h-7z M91 32h7v6h-7z M60 20l4 4-3 3-4-4z M85 45l4 4-3 3-4-4z M86 24l-4-4 3-3 4 4z M59 49l-4-4 3-3 4 4z" fill="#d32f2f"/>
          <circle cx="75" cy="35" r="6" fill="#fff"/>
        </svg>
      ),
      title: "Reliable Supply",
      desc: <><b className="font-semibold text-ink">1-3 days</b> delivery, flexible order sizes</>
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]">
          {/* Circular Arrows */}
          <path d="M50 15 A 35 35 0 1 1 15 50" fill="none" stroke="#2f2f2f" strokeWidth="6" strokeLinecap="round"/>
          <path d="M15 50 L10 40 L20 40 Z" fill="#2f2f2f"/>
          <path d="M50 85 A 35 35 0 0 1 15 50" fill="none" stroke="#2f2f2f" strokeWidth="6" strokeLinecap="round"/>
          <path d="M15 50 L10 60 L20 60 Z" fill="#2f2f2f"/>
          {/* Hand */}
          <path d="M25 65 C 30 75, 45 80, 55 75 C 65 70, 75 60, 80 50 L 65 40 C 60 45, 55 50, 45 55 Z" fill="#2f2f2f"/>
          {/* Coin */}
          <circle cx="55" cy="40" r="15" fill="#d32f2f" stroke="#fff" strokeWidth="3"/>
          <text x="55" y="47" fontFamily="Arial" fontWeight="bold" fontSize="20" fill="#fff" textAnchor="middle">$</text>
        </svg>
      ),
      title: "Cost Effective",
      desc: <><b className="font-semibold text-ink">15-20%</b> procurement cost reduction</>
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]">
          {/* Clipboard */}
          <rect x="25" y="15" width="45" height="65" rx="4" fill="none" stroke="#2f2f2f" strokeWidth="6"/>
          <rect x="35" y="5" width="25" height="15" rx="3" fill="#2f2f2f"/>
          {/* Checkmarks */}
          <path d="M35 40 L 40 45 L 50 35" fill="none" stroke="#d32f2f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M35 55 L 40 60 L 50 50" fill="none" stroke="#d32f2f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Badge Ribbon */}
          <path d="M60 60 L 65 90 L 75 80 L 85 90 L 80 60 Z" fill="#d32f2f"/>
          {/* Badge Circle */}
          <circle cx="75" cy="65" r="14" fill="#d32f2f" stroke="#fff" strokeWidth="3"/>
          <path d="M70 65 L 73 68 L 80 60" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Quality Assured",
      desc: <><b className="font-semibold text-ink">BIS certified</b>, rigorous QC</>
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]">
          {/* Table */}
          <rect x="40" y="60" width="20" height="8" fill="#2f2f2f"/>
          <rect x="47" y="68" width="6" height="20" fill="#2f2f2f"/>
          {/* Person Left */}
          <circle cx="25" cy="40" r="10" fill="#2f2f2f"/>
          <path d="M15 75 C 15 55, 35 55, 35 75 Z" fill="#2f2f2f"/>
          {/* Person Right */}
          <circle cx="75" cy="40" r="10" fill="#2f2f2f"/>
          <path d="M65 75 C 65 55, 85 55, 85 75 Z" fill="#2f2f2f"/>
          {/* Checkmark Badge Above */}
          <circle cx="50" cy="22" r="16" fill="#d32f2f" stroke="#fff" strokeWidth="3"/>
          <path d="M42 22 L 48 28 L 58 15" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Long-term Partnership",
      desc: <><b className="font-semibold text-ink">95%</b> client retention, <b className="font-semibold text-ink">20+</b> years trust</>
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]">
          {/* Monitor */}
          <rect x="15" y="25" width="70" height="45" rx="4" fill="none" stroke="#2f2f2f" strokeWidth="6"/>
          <rect x="40" y="70" width="20" height="10" fill="#2f2f2f"/>
          <rect x="30" y="80" width="40" height="6" fill="#2f2f2f"/>
          {/* Nodes on screen */}
          <path d="M25 45 L 45 40 L 65 55" fill="none" stroke="#2f2f2f" strokeWidth="3"/>
          <circle cx="25" cy="45" r="5" fill="#2f2f2f"/>
          <circle cx="45" cy="40" r="5" fill="#2f2f2f"/>
          <circle cx="65" cy="55" r="5" fill="#2f2f2f"/>
          {/* Gear Overlay */}
          <circle cx="85" cy="20" r="14" fill="#d32f2f" stroke="#fff" strokeWidth="3"/>
          {/* Gear Teeth */}
          <path d="M82 0h6v7h-6z M82 33h6v7h-6z M62 17h7v6h-7z M101 17h7v6h-7z M70 5l4 4-3 3-4-4z M95 30l4 4-3 3-4-4z M96 9l-4-4 3-3 4 4z M69 34l-4-4 3-3 4 4z" fill="#d32f2f"/>
          <circle cx="85" cy="20" r="6" fill="#fff"/>
        </svg>
      ),
      title: "Digital Systems",
      desc: <><b className="font-semibold text-ink">A.I. Integration</b>, ERP, CRM, real-time tracking</>
    }
  ];

  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Let's build together</div>
      <h2>Reliable steel, run by a system <span className="accent">that never sleeps.</span></h2>
      <p className="lede">From your enquiry to dispatch &mdash; and every machine, part and person behind it &mdash; it all moves on the clock, on one system.</p>
      
      {/* Why Choose Us Section */}
      <div className="mt-[10px] md:mt-[60px] w-full max-w-[1200px] mx-auto">
        <h3 className="font-disp font-bold text-[14px] md:text-[22px] text-ink mb-[10px] md:mb-[30px] text-center md:text-left">Why Choose Us?</h3>
        
        <div className="grid grid-cols-2 gap-x-[10px] gap-y-[12px] md:gap-0 md:flex md:flex-row md:justify-between items-start w-full">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row items-center md:items-start flex-1 ${isActive ? 'animate-slideUp' : 'opacity-0'}`} 
              style={{ animationDelay: `${i * 150 + 200}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col items-center text-center w-full md:w-[120px] xl:w-[150px] mx-auto">
                {/* Icon Circle */}
                <div className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] rounded-full border-[2px] border-[#d32f2f] flex items-center justify-center bg-white shadow-sm transition-transform duration-300 hover:scale-110 cursor-pointer">
                  {/* Scale down the pre-rendered SVG on mobile */}
                  <div className="scale-[0.8] md:scale-100 flex items-center justify-center">
                    {reason.icon}
                  </div>
                </div>
                {/* Title */}
                <div className="font-disp font-bold text-[10px] sm:text-[12px] md:text-[14px] xl:text-[15px] text-ink mt-[6px] md:mt-[16px] leading-[1.2]">
                  {reason.title}
                </div>
                {/* Description */}
                <div className="text-[9px] sm:text-[10px] md:text-[12px] xl:text-[13px] text-muted mt-[4px] md:mt-[10px] leading-[1.3] md:leading-[1.4] max-w-[150px]">
                  {reason.desc}
                </div>
              </div>

              {/* Connecting Arrow (Desktop Only) */}
              {i < reasons.length - 1 && (
                <div 
                  className={`hidden md:flex items-center justify-center pt-[35px] text-[#d1d1d1] flex-shrink-0 mx-[5px] lg:mx-[15px] ${isActive ? 'animate-fade' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150 + 275}ms`, animationFillMode: 'both', animationDuration: '400ms' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}
