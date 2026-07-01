import { useState, useRef, useEffect } from 'react';
import Slide from '../Slide';

export default function QualitySlide({ isActive }) {
  const [status, setStatus] = useState('idle');
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [showLine, setShowLine] = useState(false);

  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    return clearTimers;
  }, []);

  const reset = () => {
    clearTimers();
    setStatus('idle');
    setActiveStepIndex(-1);
    setProgress(0);
  };

  useEffect(() => {
    if (isActive) {
      setTimeout(() => setShowLine(true), 100);
      reset();
    } else {
      setShowLine(false);
      reset();
    }
  }, [isActive]);

  const stepsData = [
    { title: "Raw Material", icon: "📦" },
    { title: "Process Control", icon: "⚙️" },
    { title: "Physical Testing", icon: "🔬" },
    { title: "Dimensional Check", icon: "📏" },
    { title: "Dispatch", icon: "🚚" }
  ];

  const handleRun = () => {
    if (status !== 'idle') return;
    reset();
    setStatus('running');

    const n = stepsData.length;

    stepsData.forEach((step, i) => {
      timers.current.push(setTimeout(() => {
        setActiveStepIndex(i);
        const isMobile = window.innerWidth < 768;
        const pct = isMobile ? (((i + 0.5) / n) * 100) : ((i / (n - 1)) * 100);
        setProgress(pct);

        if (i === n - 1) {
          timers.current.push(setTimeout(() => {
            setActiveStepIndex(n); // all done
            setStatus('idle');
            setProgress(100);
          }, 1100));
        }
      }, i * 1300));
    });
  };

  const isBusy = status !== 'idle';

  return (
    <Slide isActive={isActive} center>
      <div className="flex justify-between items-end gap-[16px] md:gap-[20px] flex-wrap">
        <div>
          <div className="eyebrow">Live system &middot; click to play</div>
          <h2>Quality Control <span className="accent">Process.</span></h2>
        </div>
        <div className="flex gap-[4px] sm:gap-[6px] md:gap-[10px] flex-nowrap pb-[4px] w-full md:w-auto justify-between md:justify-start">
          <button 
            className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-amber bg-amber text-[#1a0d02] font-semibold p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            onClick={() => { reset(); setTimeout(handleRun, 60); }} disabled={isBusy}
          >
            <span className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] rounded-full bg-current shadow-[0_0_8px_currentColor]"></span>Run tracker
          </button>
          <button 
            className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:border-amber hover:text-amber shrink-0"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
      
      {/* Horizontal Timeline Tracker */}
      <div className="w-full mt-[40px] md:mt-[60px] shrink-0 overflow-x-visible md:overflow-x-auto md:pb-[10px]">
        <div className="relative px-[4px] pt-[16px] w-full md:min-w-[640px]">
          
          {/* Background Track Line */}
          <div className="absolute left-[14px] right-[14px] md:left-[44px] md:right-[44px] top-[30px] md:top-[48px] h-[3px] bg-line rounded-[3px]">
             <div 
               className="absolute left-0 top-0 bottom-0 rounded-[3px] bg-[linear-gradient(90deg,var(--color-amber),#ffb066)] transition-[width] duration-1100 ease-in-out"
               style={{ width: `${progress}%` }}
             ></div>
          </div>
          
          {/* Moving Glowing Dot */}
          <div className="absolute left-[14px] right-[14px] md:left-[44px] md:right-[44px] top-[30px] md:top-[48px] h-0 pointer-events-none z-30">
            <div 
              className={`absolute top-0 w-[10px] h-[10px] md:w-[18px] md:h-[18px] rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 transition-[left] duration-1100 ease-in-out ${status !== 'idle' ? 'opacity-100' : 'opacity-0'} shadow-[0_0_16px_4px_var(--color-amber)]`}
              style={{ left: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between relative">
          {stepsData.map((step, i) => {
            const isDone = i < activeStepIndex || activeStepIndex === stepsData.length;
            const isCurrent = i === activeStepIndex;

            let ringClass = "border-line bg-panel text-muted";
            let nmClass = "text-muted opacity-60";
            let nodeScale = "scale-100";
            let iconClass = "opacity-50";

            if (isCurrent) {
              ringClass = "border-amber bg-amber-soft text-amber shadow-[0_0_0_6px_var(--color-amber-soft),0_0_24px_rgba(255,125,26,.5)]";
              nmClass = "text-amber opacity-100";
              nodeScale = "scale-110";
              iconClass = "opacity-100";
            } else if (isDone) {
              ringClass = "border-green text-green bg-panel";
              nmClass = "text-green opacity-100";
              nodeScale = "scale-100";
              iconClass = "opacity-100 grayscale-[0.2]";
            } else if (status === 'idle') {
              ringClass = "border-line bg-panel text-ink";
              nmClass = "text-ink opacity-100";
              iconClass = "opacity-100";
            }

            return (
              <div 
                key={i} 
                className="flex flex-col items-center w-auto flex-1 md:flex-none md:w-[100px] md:shrink-0"
              >
                <div 
                  className={`w-[28px] h-[28px] md:w-[64px] md:h-[64px] rounded-full flex items-center justify-center text-[12px] md:text-[24px] relative z-20 transition-all duration-300 border-2 ${ringClass} ${nodeScale}`}
                >
                  <span className={`flex items-center justify-center leading-none select-none transition-opacity duration-300 ${iconClass}`}>{step.icon}</span>
                </div>
                <div 
                  className={`font-disp text-[8.5px] md:text-[13px] font-bold uppercase tracking-wider leading-tight mt-[12px] md:mt-[16px] text-center transition-all duration-300 ${nmClass}`}
                >
                  {step.title}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {/* IS Codes Section */}
      <div className="flex flex-row md:flex-row justify-center items-start gap-[8px] sm:gap-[16px] md:gap-[50px] mt-[24px] md:mt-[60px] px-[8px] md:px-0">
        {/* IS 1161:2014 */}
        <div className={`flex flex-col items-center flex-1 md:flex-none ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
          <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[180px] md:h-[180px] bg-[#2f2f2f] rounded-full border-[3px] md:border-4 border-white shadow-md md:shadow-lg flex items-center justify-center relative text-center">
            <span className="font-disp font-bold text-[11px] sm:text-[12px] md:text-[24px] text-white tracking-wide px-1 leading-tight">IS 1161:2014</span>
          </div>
          <div className="mt-[10px] md:mt-[20px] text-center">
            <div className="font-disp font-bold text-[10px] sm:text-[12px] md:text-[20px] text-ink leading-tight">ERW MS Tubes</div>
            <div className="text-[#c00000] mt-[2px] md:mt-[4px] text-[8px] sm:text-[10px] md:text-[15px] leading-tight">(Structural)</div>
          </div>
        </div>

        {/* Arrow */}
        <div className={`hidden md:block ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
          <svg width="60" height="30" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#1a3b8b]">
             <path d="M0,25 Q50,-10 100,20" strokeLinecap="round" />
             <path d="M85,5 L100,20 L80,25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* IS 3601:2006 */}
        <div className={`flex flex-col items-center flex-1 md:flex-none ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '700ms', animationFillMode: 'both' }}>
          <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[180px] md:h-[180px] bg-[#2f2f2f] rounded-full border-[3px] md:border-4 border-white shadow-md md:shadow-lg flex items-center justify-center relative text-center">
            <span className="font-disp font-bold text-[11px] sm:text-[12px] md:text-[24px] text-white tracking-wide px-1 leading-tight">IS 3601:2006</span>
          </div>
          <div className="mt-[10px] md:mt-[20px] text-center">
            <div className="font-disp font-bold text-[10px] sm:text-[12px] md:text-[20px] text-ink leading-tight">ERW MS Tubes</div>
            <div className="text-[#c00000] mt-[2px] md:mt-[4px] text-[8px] sm:text-[10px] md:text-[15px] max-w-[150px] mx-auto leading-tight">(Mechanical)</div>
          </div>
        </div>

        {/* Arrow */}
        <div className={`hidden md:block ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '900ms', animationFillMode: 'both' }}>
           <svg width="60" height="30" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#1a3b8b]">
             <path d="M0,25 Q50,-10 100,20" strokeLinecap="round" />
             <path d="M85,5 L100,20 L80,25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* IS 4923:1997 */}
        <div className={`flex flex-col items-center flex-1 md:flex-none ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '1100ms', animationFillMode: 'both' }}>
          <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[180px] md:h-[180px] bg-[#2f2f2f] rounded-full border-[3px] md:border-4 border-white shadow-md md:shadow-lg flex items-center justify-center relative text-center">
            <span className="font-disp font-bold text-[11px] sm:text-[12px] md:text-[24px] text-white tracking-wide px-1 leading-tight">IS 4923:1997</span>
          </div>
          <div className="mt-[10px] md:mt-[20px] text-center">
            <div className="font-disp font-bold text-[10px] sm:text-[12px] md:text-[20px] text-ink leading-tight">MS Hollow Sec.</div>
            <div className="text-[#c00000] mt-[2px] md:mt-[4px] text-[8px] sm:text-[10px] md:text-[15px] leading-tight">(Structural)</div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[100px] md:hidden shrink-0"></div>
    </Slide>
  );
}
