import { useState, useRef, useEffect } from 'react';
import Slide from '../Slide';

export default function SmartInventorySlide({ isActive }) {
  const [status, setStatus] = useState('idle');
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [indentNum, setIndentNum] = useState('—');

  const timers = useRef([]);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

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
    setLogs([]);
    setIndentNum('—');
  };

  useEffect(() => {
    if (isActive) {
      reset();
    } else {
      reset();
    }
  }, [isActive]);

  const stepsData = [
    { title: "Low Stock", icon: "📉", log: "System detected low inventory for RM-Iron-Ore" },
    { title: "Auto-Indent", icon: "📝", log: "Auto-indent created #IND-9021" },
    { title: "Get Offers", icon: "💬", log: "RFQs sent to 3 approved vendors" },
    { title: "HOD Approval", icon: "✅", log: "Indent approved by HOD (Production)" },
    { title: "PO Issued", icon: "📄", log: "Purchase Order PO-8842 issued to Vendor A" },
    { title: "Material Lifted", icon: "🚚", log: "Material dispatched from vendor site" },
    { title: "Sample Test", icon: "🧪", log: "Gate entry recorded. Sample drawn for QC" },
    { title: "Lab Approval", icon: "🔬", log: "Lab approved sample. Quality pass" },
    { title: "In Stock", icon: "📦", log: "Material GRN completed. Stock updated." },
    { title: "Accounts Close", icon: "🧾", log: "Vendor invoice cleared for payment." }
  ];

  const handleRun = () => {
    if (status !== 'idle') return;
    reset();
    setStatus('running');

    const n = stepsData.length;
    
    timers.current.push(setTimeout(() => {
       setIndentNum('IND-9021');
    }, 1300 * 1 + 500)); 

    stepsData.forEach((step, i) => {
      timers.current.push(setTimeout(() => {
        setActiveStepIndex(i);
        const isMobile = window.innerWidth < 768;
        const pct = isMobile ? (((i + 0.5) / n) * 100) : ((i / (n - 1)) * 100);
        setProgress(pct);
        setLogs(prev => [...prev, { time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'}), text: step.log }]);

        if (i === n - 1) {
          timers.current.push(setTimeout(() => {
            setActiveStepIndex(n); // all done
            setStatus('idle');
            setProgress(100);
            setLogs(prev => [...prev, { time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'}), text: "Cycle complete." }]);
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
          <div className="eyebrow flex items-center gap-[8px]">
            <span className="w-[24px] h-[3px] bg-[#ff7d1a] block"></span>
            <span className="text-[#3b82f6] uppercase tracking-[0.15em] font-bold text-[10px] md:text-[13px]">Smart Inventory &middot; Click to play</span>
          </div>
          <h2>Stock runs low? <span className="accent">It refills itself.</span></h2>
        </div>
        <div className="flex gap-[4px] sm:gap-[6px] md:gap-[10px] flex-nowrap pb-[4px] w-full md:w-auto justify-between md:justify-start">
          <button 
            className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-amber bg-amber text-[#1a0d02] font-semibold p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            onClick={() => { reset(); setTimeout(handleRun, 60); }} disabled={isBusy}
          >
            <span className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] rounded-full bg-current shadow-[0_0_8px_currentColor]"></span>Trigger a refill
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
      <div className="w-full mt-[20px] md:mt-[50px] shrink-0">
        <div className="relative px-[4px] w-full">
          
          {/* Background Track Line (Desktop) */}
          <div className="hidden md:block absolute md:left-[32px] md:right-[32px] lg:left-[40px] lg:right-[40px] top-[28px] h-[3px] bg-line rounded-[3px] z-0">
             <div 
               className="absolute left-0 top-0 bottom-0 rounded-[3px] bg-[linear-gradient(90deg,var(--color-amber),#ffb066)] transition-[width] duration-1100 ease-in-out"
               style={{ width: `${progress}%` }}
             ></div>
          </div>
          
          {/* Moving Glowing Dot (Desktop) */}
          <div className="hidden md:block absolute md:left-[32px] md:right-[32px] lg:left-[40px] lg:right-[40px] top-[28px] h-0 pointer-events-none z-30">
            <div 
              className={`absolute top-0 w-[14px] h-[14px] rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 transition-[left] duration-1100 ease-in-out ${status !== 'idle' ? 'opacity-100' : 'opacity-0'} shadow-[0_0_16px_4px_var(--color-amber)]`}
              style={{ left: `${progress}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-5 gap-y-[20px] md:flex md:justify-between relative z-10">
          {stepsData.map((step, i) => {
            const isDone = i < activeStepIndex || activeStepIndex === stepsData.length;
            const isCurrent = i === activeStepIndex;

            let ringClass = "border-line bg-panel2 text-muted";
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
                className="flex flex-col items-center w-auto flex-1 md:flex-none md:w-[64px] lg:w-[80px] md:shrink-0 relative"
              >
                {/* Mobile Track Line Fragment */}
                {i !== 4 && i !== 9 && (
                  <div className="md:hidden absolute left-[50%] right-[-50%] top-[12px] h-[2px] bg-line -z-10">
                    <div className="absolute left-0 top-0 bottom-0 bg-[linear-gradient(90deg,var(--color-amber),#ffb066)] transition-all duration-1100"
                         style={{ width: isDone ? '100%' : (isCurrent ? '50%' : '0%') }}></div>
                  </div>
                )}
                
                <div 
                  className={`w-[24px] h-[24px] md:w-[56px] md:h-[56px] rounded-full flex items-center justify-center text-[10px] md:text-[20px] relative z-20 transition-all duration-300 border-[3px] ${ringClass} ${nodeScale}`}
                >
                  <span className={`transition-opacity duration-300 ${iconClass}`}>{step.icon}</span>
                </div>
                <div 
                  className={`font-disp text-[7.5px] md:text-[10px] font-bold uppercase tracking-wider leading-tight mt-[12px] md:mt-[16px] text-center transition-all duration-300 ${nmClass}`}
                >
                  {step.title}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px] mt-[20px] md:mt-[50px]">
        {/* System Activity Log */}
        <div className="flex-2 border border-line bg-panel rounded-[12px] p-[12px] md:p-[20px] h-[110px] md:h-[200px] overflow-hidden flex flex-col relative">
          <div className="text-muted font-mono text-[9px] md:text-[12px] uppercase tracking-widest mb-[6px] md:mb-[12px]">System Activity Log</div>
          <div ref={logRef} className="h-[70px] md:h-[148px] overflow-y-auto pr-[4px]">
            <div className="flex flex-col gap-[6px] md:gap-[8px]">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-[8px] md:gap-[12px] text-[11px] md:text-[14px] font-mono animate-slideIn" style={{ animationDuration: '300ms' }}>
                  <span className="text-muted shrink-0">[{log.time}]</span>
                  <span className="text-ink">{log.text}</span>
                </div>
              ))}
              {status === 'idle' && logs.length === 0 && (
                <div className="text-muted italic text-[11px] md:text-[14px]">Waiting for system trigger...</div>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[15px] bg-linear-to-t from-panel to-transparent pointer-events-none"></div>
        </div>

        {/* What the store sees */}
        <div className="flex-1 border border-line bg-panel2 rounded-[12px] p-[12px] md:p-[24px] flex flex-col justify-center min-h-[90px] md:min-h-0">
          <div className="text-muted font-mono text-[9px] md:text-[12px] uppercase tracking-widest mb-[4px] md:mb-[8px]">What the store sees</div>
          <div className="text-[16px] sm:text-[20px] md:text-[28px] font-bold text-ink mb-[4px] md:mb-[8px] leading-tight">
            Indent #{indentNum}
          </div>
          <div className="text-muted text-[11px] md:text-[14px] leading-snug">
            {status === 'idle' && logs.length === 0 ? "Press \"Trigger a refill\" to watch raw material restock end to end." : "Processing restock order automatically."}
          </div>
        </div>
      </div>

      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[100px] md:hidden shrink-0"></div>
    </Slide>
  );
}
