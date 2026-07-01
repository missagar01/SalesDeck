import { useState, useRef, useEffect } from 'react';
import Slide from '../Slide';

export default function DepartmentSlide({ isActive }) {
  const [activeTab, setActiveTab] = useState('maintenance'); // 'maintenance', 'spare-parts', 'hr'
  const [status, setStatus] = useState('idle'); // 'idle', 'running', 'delay'
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [recordId, setRecordId] = useState('—');

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

  const reset = (tab = activeTab) => {
    clearTimers();
    setStatus('idle');
    setActiveStepIndex(-1);
    setProgress(0);
    setLogs([]);
    setRecordId('—');
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    if (isActive) {
      reset(activeTab);
    } else {
      reset(activeTab);
    }
  }, [isActive]);

  const tabs = [
    { id: 'maintenance', label: '🛠️ Maintenance' },
    { id: 'spare-parts', label: '🔩 Spare Parts' },
    { id: 'hr', label: '👥 Manpower & HR' }
  ];

  const maintenanceSteps = [
    { title: "Breakdown", icon: "🚨", log: "Machine #42 reported breakdown." },
    { title: "Auto-Assign", icon: "🔧", log: "Technician assigned automatically." },
    { title: "Spare Parts", icon: "🔩", log: "Required parts requested from store." },
    { title: "Repair", icon: "🛠️", log: "Repair work in progress." },
    { title: "QC Check", icon: "🔬", log: "Quality check passed after repair." },
    { title: "Back Online", icon: "▶️", log: "Machine #42 is back online." }
  ];

  const maintenanceDelaySteps = [
    { title: "Breakdown", icon: "🚨", log: "Machine down; TAT clock starts.", delayLog: true },
    { title: "TAT Breach", icon: "⏰", log: "Repair not started in time — system auto-calls the technician.", delayLog: true, isError: true },
    { title: "Escalated", icon: "⬆️", log: "Issue escalated to Plant Head." },
    { title: "Resolved", icon: "✅", log: "Technician arrived, machine fixed." }
  ];

  const sparePartsSteps = [
    { title: "Part Low", icon: "📉", log: "Stock for Part #Bearing-608 is low." },
    { title: "Auto-Indent", icon: "📄", log: "Indent #SP-4029 generated." },
    { title: "HOD Approval", icon: "✅", log: "HOD approved the indent." },
    { title: "PO & Receive", icon: "📄", log: "PO issued and parts received." },
    { title: "Issued to Job", icon: "🔧", log: "Parts issued to Job #JOB-18258." }
  ];

  const hrSteps = [
    { title: "Attendance", icon: "🕒", log: "Shift attendance punched." },
    { title: "Shift Roster", icon: "👥", log: "Auto-aligned with shift roster." },
    { title: "Leave", icon: "📝", log: "Leave request auto-processed." },
    { title: "Approved", icon: "✅", log: "Leave approved by manager." },
    { title: "Overtime", icon: "⏰", log: "Overtime hours calculated." },
    { title: "Payroll", icon: "💰", log: "Payroll updated for the month." }
  ];

  let currentSteps = [];
  if (activeTab === 'maintenance') {
    currentSteps = status === 'delay' ? maintenanceDelaySteps : maintenanceSteps;
  } else if (activeTab === 'spare-parts') {
    currentSteps = sparePartsSteps;
  } else if (activeTab === 'hr') {
    currentSteps = hrSteps;
  }

  const handleRun = (mode = 'normal') => {
    if (status !== 'idle') return;
    
    // If we're starting a delay mode, set status right away so currentSteps updates
    if (mode === 'delay' && activeTab === 'maintenance') {
      setStatus('delay');
      setActiveStepIndex(-1);
      setProgress(0);
      setLogs([]);
      setRecordId('—');
      
      const steps = maintenanceDelaySteps;
      const n = steps.length;
      
      timers.current.push(setTimeout(() => {
         setRecordId('JOB-18258');
      }, 500)); 

      steps.forEach((step, i) => {
        timers.current.push(setTimeout(() => {
          setActiveStepIndex(i);
          const isMobile = window.innerWidth < 768;
          const pct = isMobile ? (((i + 0.5) / n) * 100) : ((i / (n - 1)) * 100);
          setProgress(pct);
          setLogs(prev => [...prev, { time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'}), text: step.log, isError: step.isError }]);

          if (i === n - 1) {
            timers.current.push(setTimeout(() => {
              setActiveStepIndex(n); // all done
              setProgress(100);
            }, 1100));
          }
        }, i * 1500));
      });
      return;
    }

    reset();
    setStatus('running');

    const n = currentSteps.length;
    
    timers.current.push(setTimeout(() => {
       if (activeTab === 'maintenance') setRecordId('JOB-18258');
       if (activeTab === 'spare-parts') setRecordId('SP-4029');
       if (activeTab === 'hr') setRecordId('HR-9921');
    }, 1300 * 1 + 500)); 

    currentSteps.forEach((step, i) => {
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

  const isBusy = status !== 'idle' && status !== 'delay';
  const isDelaying = status === 'delay';

  const renderButtons = () => {
    if (activeTab === 'maintenance') {
      return (
        <>
          <button 
            className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-amber bg-amber text-[#1a0d02] font-semibold p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            onClick={() => { reset(); setTimeout(() => handleRun('normal'), 60); }} disabled={isBusy || isDelaying}
          >
            <span className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] rounded-full bg-current shadow-[0_0_8px_currentColor]"></span>Run a repair
          </button>
          <button 
            className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:border-amber hover:text-amber disabled:opacity-40 shrink-0"
            onClick={() => { clearTimers(); setStatus('idle'); setTimeout(() => handleRun('delay'), 60); }} disabled={isBusy || isDelaying}
          >
            Simulate a delay
          </button>
          <button 
            className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:border-amber hover:text-amber shrink-0"
            onClick={() => reset()}
          >
            Reset
          </button>
        </>
      );
    }

    let runLabel = "Run";
    if (activeTab === 'spare-parts') runLabel = "Restock a part";
    if (activeTab === 'hr') runLabel = "Run an HR cycle";

    return (
      <>
        <button 
          className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-amber bg-amber text-[#1a0d02] font-semibold p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          onClick={() => { reset(); setTimeout(() => handleRun('normal'), 60); }} disabled={isBusy}
        >
          <span className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] rounded-full bg-current shadow-[0_0_8px_currentColor]"></span>{runLabel}
        </button>
        <button 
          className="font-mono text-[9px] sm:text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[5px_8px] sm:p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[4px] md:gap-[8px] hover:border-amber hover:text-amber shrink-0"
          onClick={() => reset()}
        >
          Reset
        </button>
      </>
    );
  };

  return (
    <Slide isActive={isActive} center>
      <div className="flex justify-between items-end gap-[16px] md:gap-[20px] flex-wrap">
        <div>
          <div className="eyebrow flex items-center gap-[8px]">
            <span className="w-[24px] h-[3px] bg-[#ff7d1a] block"></span>
            <span className="text-[#ff7d1a] uppercase tracking-[0.15em] font-bold text-[10px] md:text-[13px]">Every department &middot; Click to play</span>
          </div>
          <h2>Same system runs <span className="accent">the whole plant.</span></h2>
          
          <div className="flex gap-[8px] mt-[16px] md:mt-[24px]">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => reset(tab.id)}
                className={`px-[12px] py-[8px] md:px-[16px] md:py-[10px] rounded-[8px] text-[10px] md:text-[12px] font-mono tracking-wider transition-all border ${
                  activeTab === tab.id 
                  ? 'border-amber text-amber bg-amber-soft' 
                  : 'border-line text-muted bg-panel hover:bg-panel2'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
        <div className="flex gap-[4px] sm:gap-[6px] md:gap-[10px] flex-nowrap pb-[4px] w-full md:w-auto justify-between md:justify-start">
          {renderButtons()}
        </div>
      </div>
      
      {/* Horizontal Timeline Tracker */}
      <div className="w-full mt-[20px] md:mt-[50px] shrink-0">
        <div className="relative px-[4px] w-full">
          
          {/* Background Track Line (Desktop) */}
          <div className="hidden md:block absolute md:left-[32px] md:right-[32px] lg:left-[40px] lg:right-[40px] top-[28px] h-[3px] bg-line rounded-[3px] z-0">
             <div 
               className={`absolute left-0 top-0 bottom-0 rounded-[3px] transition-[width] duration-1100 ease-in-out ${status === 'delay' && activeStepIndex >= 1 ? 'bg-[linear-gradient(90deg,#ff4d4d,#ff8a8a)]' : 'bg-[linear-gradient(90deg,var(--color-amber),#ffb066)]'}`}
               style={{ width: `${progress}%` }}
             ></div>
          </div>
          
          {/* Moving Glowing Dot (Desktop) */}
          <div className="hidden md:block absolute md:left-[32px] md:right-[32px] lg:left-[40px] lg:right-[40px] top-[28px] h-0 pointer-events-none z-30">
            <div 
              className={`absolute top-0 w-[14px] h-[14px] rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 transition-[left] duration-1100 ease-in-out ${status !== 'idle' ? 'opacity-100' : 'opacity-0'} ${status === 'delay' && activeStepIndex >= 1 ? 'shadow-[0_0_16px_4px_#ff4d4d]' : 'shadow-[0_0_16px_4px_var(--color-amber)]'}`}
              style={{ left: `${progress}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-3 md:flex md:justify-between relative gap-y-[20px] md:gap-y-0 z-10">
          {currentSteps.map((step, i) => {
            const isDone = i < activeStepIndex || activeStepIndex === currentSteps.length;
            const isCurrent = i === activeStepIndex;
            const isErrorState = step.isError;

            let ringClass = "border-line bg-panel2 text-muted";
            let nmClass = "text-muted opacity-60";
            let nodeScale = "scale-100";
            let iconClass = "opacity-50";

            if (isCurrent) {
              if (isErrorState) {
                ringClass = "border-[#ff4d4d] bg-red-soft text-[#ff4d4d] shadow-[0_0_0_6px_rgba(255,77,77,0.2),0_0_24px_rgba(255,77,77,.6)]";
                nmClass = "text-[#ff4d4d] opacity-100";
              } else {
                ringClass = "border-amber bg-amber-soft text-amber shadow-[0_0_0_6px_var(--color-amber-soft),0_0_24px_rgba(255,125,26,.5)]";
                nmClass = "text-amber opacity-100";
              }
              nodeScale = "scale-110";
              iconClass = "opacity-100";
            } else if (isDone) {
              if (isErrorState) {
                ringClass = "border-[#ff4d4d] text-[#ff4d4d] bg-panel";
                nmClass = "text-[#ff4d4d] opacity-100";
              } else {
                ringClass = "border-green text-green bg-panel";
                nmClass = "text-green opacity-100";
              }
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
                {i !== 2 && i !== 5 && i !== currentSteps.length - 1 && (
                  <div className="md:hidden absolute left-[50%] right-[-50%] top-[12px] h-[2px] bg-line -z-10">
                    <div className={`absolute left-0 top-0 bottom-0 transition-all duration-1100 ${status === 'delay' && activeStepIndex >= 1 ? 'bg-[linear-gradient(90deg,#ff4d4d,#ff8a8a)]' : 'bg-[linear-gradient(90deg,var(--color-amber),#ffb066)]'}`}
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
                <div key={i} className={`flex gap-[8px] md:gap-[12px] text-[11px] md:text-[14px] font-mono animate-slideIn ${log.isError ? 'text-[#ff4d4d]' : ''}`} style={{ animationDuration: '300ms' }}>
                  <span className={`${log.isError ? 'text-[#ff4d4d]' : 'text-muted'} shrink-0`}>[{log.time}]</span>
                  <span className={`${log.isError ? 'text-[#ff4d4d]' : 'text-ink'}`}>{log.text}</span>
                </div>
              ))}
              {status === 'idle' && logs.length === 0 && (
                <div className="text-muted italic text-[11px] md:text-[14px]">Waiting for system trigger...</div>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[15px] bg-linear-to-t from-panel to-transparent pointer-events-none"></div>
        </div>

        {/* Dynamic Store/Board view */}
        <div className="flex-1 border border-line bg-panel2 rounded-[12px] p-[12px] md:p-[24px] flex flex-col justify-center min-h-[90px] md:min-h-0">
          <div className="text-muted font-mono text-[9px] md:text-[12px] uppercase tracking-widest mb-[4px] md:mb-[8px]">
            {activeTab === 'maintenance' && "Maintenance Board"}
            {activeTab === 'spare-parts' && "Store View"}
            {activeTab === 'hr' && "HR Desk"}
          </div>
          <div className="text-[16px] sm:text-[20px] md:text-[28px] font-bold text-ink mb-[4px] md:mb-[8px] leading-tight">
            {activeTab === 'maintenance' && `Job #${recordId}`}
            {activeTab === 'spare-parts' && `Part indent #${recordId}`}
            {activeTab === 'hr' && `Record #${recordId}`}
          </div>
          <div className="text-muted text-[11px] md:text-[14px] leading-snug">
            {status === 'idle' && logs.length === 0 && activeTab === 'maintenance' && "Run a breakdown-to-back-online cycle, or simulate a delay to see escalation."}
            {status === 'idle' && logs.length === 0 && activeTab === 'spare-parts' && "Watch a low spare part get indented, approved, received and issued to a job."}
            {status === 'idle' && logs.length === 0 && activeTab === 'hr' && "Watch attendance flow through shifts, leave, overtime and payroll — hands-free."}
            
            {status === 'delay' && activeStepIndex >= 1 && (
              <span className="text-ink">
                TAT Breach — Repair not started in time — system auto-calls the technician.
              </span>
            )}
            {status === 'running' && logs.length > 0 && "Processing automatically..."}
          </div>
          {status === 'delay' && activeStepIndex >= 1 && (
            <div className="mt-[10px] md:mt-[16px]">
              <span className="inline-block px-[8px] py-[3px] md:px-[10px] md:py-[4px] bg-red-soft border border-[#ff4d4d] text-[#ff4d4d] text-[9px] md:text-[10px] font-mono uppercase tracking-widest rounded-[4px]">
                TAT Breach
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[100px] md:hidden shrink-0"></div>
    </Slide>
  );
}
