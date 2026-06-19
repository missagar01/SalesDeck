import { useState, useRef, useEffect } from 'react';
import Slide from '../Slide';

export default function TimeBoundTasksSlide({ isActive }) {
  const [status, setStatus] = useState('idle'); // 'idle', 'running', 'delaying'
  const [activeStage, setActiveStage] = useState(-1); // 0: owner, 1: reminder, 2: escalated, 3: done
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
    setActiveStage(-1);
    setProgress(0);
  };

  useEffect(() => {
    if (isActive) reset();
    else reset();
  }, [isActive]);

  const handleRunNormal = () => {
    setStatus('running');
    setActiveStage(0);
    setProgress(0);

    // Animate progress to 40% over 1.5s, then finish
    timers.current.push(setTimeout(() => {
      setProgress(40);
    }, 50));

    timers.current.push(setTimeout(() => {
      setActiveStage(3); // Done
      setStatus('idle');
    }, 1500));
  };

  const handleRunDelay = () => {
    setStatus('delaying');
    setActiveStage(0);
    setProgress(0);

    // 1. Fill progress to 100% (TAT Breach)
    timers.current.push(setTimeout(() => {
      setProgress(100);
    }, 50));

    // 2. Trigger reminder after progress fills
    timers.current.push(setTimeout(() => {
      setActiveStage(1); // Reminder & call
    }, 1500));

    // 3. Trigger escalation
    timers.current.push(setTimeout(() => {
      setActiveStage(2); // Escalated
    }, 3000));

    // 4. Resolve
    timers.current.push(setTimeout(() => {
      setActiveStage(3); // Done
      setStatus('idle');
    }, 4500));
  };

  const isBusy = status !== 'idle';

  let statusText = "Pending";
  let statusColor = "text-muted";
  
  if (status === 'running') {
    statusText = "In progress...";
    statusColor = "text-amber";
  } else if (status === 'delaying') {
    if (activeStage === 0) {
      statusText = "Approaching TAT...";
      statusColor = "text-amber";
    } else if (activeStage === 1) {
      statusText = "TAT Breached — Auto-calling owner";
      statusColor = "text-red-500";
    } else if (activeStage === 2) {
      statusText = "Escalated to HOD";
      statusColor = "text-red-500";
    }
  }
  
  if (activeStage === 3) {
    if (status === 'idle' && progress === 40) {
      statusText = "Cleared on time";
      statusColor = "text-green";
    } else {
      statusText = "HOD cleared it — task closed";
      statusColor = "text-green";
    }
  }

  const isDelayColor = status === 'delaying' && activeStage >= 1;

  return (
    <Slide isActive={isActive}>
      <div className="flex justify-between items-end gap-[16px] md:gap-[20px] flex-wrap">
        <div>
          <div className="eyebrow flex items-center gap-[8px]">
            <span className="w-[24px] h-[3px] bg-[#ff7d1a] block"></span>
            <span className="text-[#ff7d1a] uppercase tracking-[0.15em] font-bold text-[10px] md:text-[13px]">Time-bound tasks &middot; Click to play</span>
          </div>
          <h2>No task ever <span className="accent">goes quiet.</span></h2>
        </div>
        <div className="flex gap-[4px] sm:gap-[6px] md:gap-[10px] flex-nowrap pb-[4px] w-full md:w-auto justify-between md:justify-start">
          <button 
            className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-amber bg-amber text-[#1a0d02] font-semibold p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            onClick={() => { reset(); setTimeout(handleRunNormal, 60); }} disabled={isBusy}
          >
            <span className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] rounded-full bg-current shadow-[0_0_8px_currentColor]"></span>Finish on time
          </button>
          <button 
            className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:border-amber hover:text-amber disabled:opacity-40 shrink-0"
            onClick={() => { reset(); setTimeout(handleRunDelay, 60); }} disabled={isBusy}
          >
            Watch a delay
          </button>
          <button 
            className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:border-amber hover:text-amber shrink-0"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[30px] mt-[16px] md:mt-[36px] lg:mt-[48px] h-auto md:h-[320px]">
        
        {/* Left Panel - Active Task */}
        <div className="flex-[3] border border-line bg-panel rounded-[12px] md:rounded-[16px] p-[16px] md:p-[32px] flex flex-col justify-center relative">
          <div className="text-muted font-mono text-[10px] md:text-[12px] uppercase tracking-[0.1em] mb-[8px] md:mb-[12px]">Active Task</div>
          <div className="text-[20px] md:text-[32px] font-bold text-ink leading-tight mb-[4px] md:mb-[8px]">
            Confirm dispatch — Order #IC-1042
          </div>
          <div className="text-muted text-[12px] md:text-[15px] mb-[24px] md:mb-[60px]">
            Owner: Dispatch desk &middot; TAT: 30 min
          </div>
          
          <div>
            <div className="flex justify-between items-end mb-[10px]">
              <div className="text-muted font-mono text-[10px] md:text-[12px] uppercase tracking-[0.1em]">Time used</div>
              <div className={`font-mono text-[10px] md:text-[12px] uppercase tracking-[0.05em] transition-colors duration-300 ${statusColor}`}>
                {statusText}
              </div>
            </div>
            
            {/* Progress Bar Container */}
            <div className="h-[8px] md:h-[12px] w-full bg-line rounded-full overflow-hidden relative">
              <div 
                className={`absolute left-0 top-0 bottom-0 rounded-full transition-all ease-linear ${isDelayColor ? 'bg-red-500' : 'bg-green'}`}
                style={{ width: `${progress}%`, transitionDuration: status === 'delaying' && progress === 100 ? '1.5s' : (status === 'running' ? '1.5s' : '0.3s') }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Steps */}
        <div className="flex-[2] flex flex-col gap-[8px] md:gap-[16px]">
          
          {/* Box 1: Task Owner */}
          <div className={`flex-1 border rounded-[12px] md:rounded-[16px] p-[12px] md:p-[20px] flex gap-[12px] md:gap-[16px] items-center transition-all duration-300 ${
            status === 'idle'
              ? 'border-line bg-panel opacity-100 shadow-sm'
              : activeStage >= 0
              ? 'border-amber bg-amber-soft opacity-100 shadow-md'
              : 'border-line bg-panel2 opacity-60'
          }`}>
            <div className={`w-[36px] h-[36px] md:w-[48px] md:h-[48px] rounded-[8px] md:rounded-[10px] flex items-center justify-center text-[16px] md:text-[20px] shrink-0 transition-all duration-300 ${
              status !== 'idle' && activeStage >= 0 ? 'bg-[#ff7d1a]/20 text-[#ff7d1a]' : 'bg-line text-muted'
            }`}>
              👤
            </div>
            <div>
              <div className={`font-bold text-[13px] md:text-[16px] mb-[2px] md:mb-[4px] transition-colors duration-300 ${
                status !== 'idle' && activeStage >= 0 ? 'text-amber' : 'text-ink'
              }`}>
                Task owner
              </div>
              <div className="text-muted text-[10px] md:text-[13px] leading-snug">
                Assigned with a 30-minute clock running in the background.
              </div>
            </div>
          </div>
          
          {/* Box 2: Auto reminder & call */}
          <div className={`flex-1 border rounded-[12px] md:rounded-[16px] p-[12px] md:p-[20px] flex gap-[12px] md:gap-[16px] items-center transition-all duration-300 ${
            status === 'idle'
              ? 'border-line bg-panel opacity-100 shadow-sm'
              : activeStage >= 1
              ? 'border-red-500 bg-red-soft opacity-100 shadow-md'
              : 'border-line bg-panel2 opacity-60'
          }`}>
            <div className={`w-[36px] h-[36px] md:w-[48px] md:h-[48px] rounded-[8px] md:rounded-[10px] flex items-center justify-center text-[16px] md:text-[20px] shrink-0 transition-all duration-300 ${
              status !== 'idle' && activeStage >= 1 ? 'bg-red-500/20 text-red-500' : 'bg-line text-muted'
            }`}>
              📞
            </div>
            <div>
              <div className={`font-bold text-[13px] md:text-[16px] mb-[2px] md:mb-[4px] transition-colors duration-300 ${
                status !== 'idle' && activeStage >= 1 ? 'text-red-500' : 'text-ink'
              }`}>
                Auto reminder & call
              </div>
              <div className="text-muted text-[10px] md:text-[13px] leading-snug">
                The moment the TAT breaches, the system pings and calls the owner to clear it.
              </div>
            </div>
          </div>
          
          {/* Box 3: Escalated to HOD */}
          <div className={`flex-1 border rounded-[12px] md:rounded-[16px] p-[12px] md:p-[20px] flex gap-[12px] md:gap-[16px] items-center transition-all duration-300 ${
            status === 'idle'
              ? 'border-line bg-panel opacity-100 shadow-sm'
              : activeStage >= 2
              ? 'border-[#3b82f6] bg-[#3b82f6]/10 opacity-100 shadow-md'
              : 'border-line bg-panel2 opacity-60'
          }`}>
            <div className={`w-[36px] h-[36px] md:w-[48px] md:h-[48px] rounded-[8px] md:rounded-[10px] flex items-center justify-center text-[16px] md:text-[20px] shrink-0 transition-all duration-300 ${
              status !== 'idle' && activeStage >= 2 ? 'bg-[#3b82f6]/20 text-[#3b82f6]' : 'bg-line text-muted'
            }`}>
              ⬆️
            </div>
            <div>
              <div className={`font-bold text-[13px] md:text-[16px] mb-[2px] md:mb-[4px] transition-colors duration-300 ${
                status !== 'idle' && activeStage >= 2 ? 'text-[#3b82f6]' : 'text-ink'
              }`}>
                Escalated to HOD
              </div>
              <div className="text-muted text-[10px] md:text-[13px] leading-snug">
                Still pending? It jumps to the Head of Department with the full history.
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[100px] md:hidden shrink-0"></div>
    </Slide>
  );
}
