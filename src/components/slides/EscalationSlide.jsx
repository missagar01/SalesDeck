import { useState, useRef, useEffect } from 'react';
import Slide from '../Slide';

export default function EscalationSlide({ isActive }) {
  const [activeTab, setActiveTab] = useState('dealers');
  const [status, setStatus] = useState('idle');
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [progress, setProgress] = useState(0);

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
    reset();
  }, [isActive, activeTab]);

  const dealersData = [
    { title: "Competitive Margin", icon: "💰" },
    { title: "Reliable Supply", icon: "🚚" },
    { title: "Flexible Order Sizes", icon: "📦" },
    { title: "Brand Recall", icon: "⭐" }
  ];

  const consumerData = [
    { title: "Superior Durability", icon: "🛡️" },
    { title: "Minimal Joints", icon: "🔗" },
    { title: "BIS Certified", icon: "✅" },
    { title: "On-Time Delivery", icon: "⏱️" },
    { title: "Cost Saving", icon: "💵" }
  ];

  const currentData = activeTab === 'dealers' ? dealersData : consumerData;

  const handleRun = () => {
    if (status !== 'idle') return;
    reset();
    setStatus('running');

    const n = currentData.length;

    currentData.forEach((step, i) => {
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
    <Slide isActive={isActive}>
      <div className="flex justify-between items-end gap-[16px] md:gap-[20px] flex-wrap">
        <div>
          <div className="eyebrow">Value That Delivers &middot; click to play</div>
          <h2>For Every <span className="accent">Stakeholder.</span></h2>
        </div>
        <div className="flex gap-[6px] md:gap-[10px] flex-nowrap">
          <button 
            className="font-mono text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-amber bg-amber text-[#1a0d02] font-semibold p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[6px] md:gap-[8px] hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            onClick={() => { reset(); setTimeout(handleRun, 60); }} disabled={isBusy}
          >
            <span className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-current shadow-[0_0_8px_currentColor]"></span>Run timeline
          </button>
          <button 
            className="font-mono text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[6px] md:gap-[8px] hover:border-amber hover:text-amber shrink-0"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
      
      <p className="lede mt-[16px]">Tailored benefits designed specifically for your success, whether you're a dealer or an end-to-end consumer.</p>

      {/* Tabs */}
      <div className="flex gap-[16px] mt-[30px] border-b border-line pb-[12px]">
        <button 
          onClick={() => { if (!isBusy) setActiveTab('dealers') }}
          className={`font-disp font-bold text-[16px] md:text-[22px] pb-[4px] px-[8px] md:px-[16px] transition-all relative ${activeTab === 'dealers' ? 'text-amber' : 'text-muted hover:text-ink'}`}
        >
          For Dealers
          {activeTab === 'dealers' && (
            <div className="absolute bottom-[-13px] left-0 right-0 h-[3px] bg-amber rounded-t-full"></div>
          )}
        </button>
        <button 
          onClick={() => { if (!isBusy) setActiveTab('consumers') }}
          className={`font-disp font-bold text-[16px] md:text-[22px] pb-[4px] px-[8px] md:px-[16px] transition-all relative ${activeTab === 'consumers' ? 'text-amber' : 'text-muted hover:text-ink'}`}
        >
          For End-to-end Consumer
          {activeTab === 'consumers' && (
            <div className="absolute bottom-[-13px] left-0 right-0 h-[3px] bg-amber rounded-t-full"></div>
          )}
        </button>
      </div>

      {/* Horizontal Timeline Tracker */}
      <div className="w-full mt-[60px] md:mt-[80px] shrink-0 overflow-x-visible md:overflow-x-auto md:pb-[10px]">
        <div className="relative px-[4px] w-full md:min-w-[640px]">
          
          {/* Background Track Line */}
          <div className="absolute left-[14px] right-[14px] md:left-[44px] md:right-[44px] top-[14px] md:top-[32px] h-[3px] bg-line rounded-[3px]">
             <div 
               className="absolute left-0 top-0 bottom-0 rounded-[3px] bg-[linear-gradient(90deg,var(--color-amber),#ffb066)] transition-[width] duration-[1100ms] ease-in-out"
               style={{ width: `${progress}%` }}
             ></div>
          </div>
          
          {/* Moving Glowing Dot */}
          <div className="absolute left-[14px] right-[14px] md:left-[44px] md:right-[44px] top-[14px] md:top-[32px] h-0 pointer-events-none z-30">
            <div 
              className={`absolute top-0 w-[10px] h-[10px] md:w-[18px] md:h-[18px] rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 transition-[left] duration-[1100ms] ease-in-out ${status !== 'idle' ? 'opacity-100' : 'opacity-0'} shadow-[0_0_16px_4px_var(--color-amber)]`}
              style={{ left: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between relative">
          {currentData.map((step, i) => {
            const isDone = i < activeStepIndex || activeStepIndex === currentData.length;
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
              // When completely idle, show them clearly but without highlight
              ringClass = "border-line bg-panel text-ink";
              nmClass = "text-ink opacity-100";
              iconClass = "opacity-100";
            }

            return (
              <div 
                key={`${activeTab}-${i}`} 
                className="flex flex-col items-center w-auto flex-1 md:flex-none md:w-[120px] md:shrink-0"
              >
                <div 
                  className={`w-[28px] h-[28px] md:w-[64px] md:h-[64px] rounded-full flex items-center justify-center text-[12px] md:text-[24px] relative z-20 transition-all duration-300 border-2 ${ringClass} ${nodeScale}`}
                >
                  <span className={`transition-opacity duration-300 ${iconClass}`}>{step.icon}</span>
                </div>
                <div 
                  className={`font-disp text-[8.5px] md:text-[13px] font-bold uppercase tracking-[0.05em] leading-tight mt-[12px] md:mt-[16px] text-center transition-all duration-300 ${nmClass}`}
                >
                  <span className={`block mb-1 text-[8px] md:text-[10px] ${isCurrent ? 'text-amber' : (isDone ? 'text-green' : (status === 'idle' ? 'text-amber opacity-80' : 'text-muted'))}`}>Step {i + 1}</span>
                  {step.title}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}
