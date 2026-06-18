import { useState, useRef, useEffect } from 'react';
import Slide from '../Slide';

export default function FlowSlide({
  isActive,
  flows, // Array of flow configurations
  defaultFlowId,
  eyebrow,
  title,
}) {
  const [activeFlowId, setActiveFlowId] = useState(defaultFlowId || flows[0].id);
  const activeFlow = flows.find(f => f.id === activeFlowId) || flows[0];

  const [status, setStatus] = useState('idle'); // idle, running, error
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [isAlert, setIsAlert] = useState(false);
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [previewMeta, setPreviewMeta] = useState(activeFlow.previewMeta);
  const [previewBadge, setPreviewBadge] = useState({ text: '', show: false, ok: false });
  const [previewBig, setPreviewBig] = useState(activeFlow.previewBig || `${activeFlow.idLabel} #—`);

  const timers = useRef([]);
  const logRef = useRef(null);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    return clearTimers;
  }, []);

  const reset = (flow = activeFlow) => {
    clearTimers();
    setStatus('idle');
    setActiveStepIndex(-1);
    setIsAlert(false);
    setLogs([]);
    setProgress(0);
    setPreviewMeta(flow.previewMeta);
    setPreviewBadge({ text: '', show: false, ok: false });
    setPreviewBig(flow.previewBig || `${flow.idLabel} #—`);
  };

  const setTab = (id) => {
    const flow = flows.find(f => f.id === id);
    setActiveFlowId(id);
    reset(flow);
  };

  const play = (isAlt) => {
    if (status !== 'idle') return;
    setStatus('running');
    setIsAlert(isAlt);
    setLogs([]);

    const steps = isAlt ? activeFlow.altSteps : activeFlow.steps;
    const no = activeFlow.idPrefix + (10000 + Math.floor(Math.random() * 8999));
    setPreviewBig(`${activeFlow.idLabel} #${no}`);
    setPreviewBadge({ text: '', show: true, ok: false });

    const n = steps.length;

    steps.forEach((step, i) => {
      timers.current.push(setTimeout(() => {
        setActiveStepIndex(i);
        const isMobile = window.innerWidth < 768;
        const pct = isMobile ? (((i + 0.5) / n) * 100) : ((i / (n - 1)) * 100);
        setProgress(pct);

        const timestamp = new Date().toTimeString().slice(0, 8);
        setLogs(prev => [...prev, { time: timestamp, msg: step.msg, alert: step.alert || (isAlt && isAlert) }]);
        setPreviewMeta(`${step.nm} — ${step.msg}`);
        setPreviewBadge({ text: step.nm.toUpperCase(), show: true, ok: i === n - 1 });

        if (i === n - 1) {
          timers.current.push(setTimeout(() => {
            setActiveStepIndex(n); // all done
            const doneMsg = 'Cycle complete — handled end to end, hands-free.';
            setLogs(prev => [...prev, { time: new Date().toTimeString().slice(0, 8), msg: doneMsg, ok: true }]);
            setPreviewMeta(activeFlow.doneMeta(isAlt));
            setStatus('idle');
            setProgress(100);
          }, 1100));
        }
      }, i * 1300));
    });
  };

  const isBusy = status !== 'idle';
  const steps = (status === 'running' && isAlert) ? activeFlow.altSteps : activeFlow.steps;

  return (
    <Slide isActive={isActive}>
      <div className="flex justify-between items-end gap-[20px] flex-wrap">
        <div>
          <div className="eyebrow">{eyebrow || activeFlow.eyebrow}</div>
          <h2 className="text-[clamp(24px,3.4vw,44px)]" dangerouslySetInnerHTML={{ __html: title || activeFlow.title }}></h2>
        </div>
        <div className="flex gap-[6px] md:gap-[10px] flex-nowrap">
          <button
            className="font-mono text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-amber bg-amber text-[#1a0d02] font-semibold p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[6px] md:gap-[8px] hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            onClick={() => { reset(); setTimeout(() => play(false), 60); }} disabled={isBusy}
          >
            <span className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-current shadow-[0_0_8px_currentColor]"></span>{activeFlow.runLabel || 'Run'}
          </button>

          {(activeFlow.altSteps || activeFlow.altLabel) && (
            <button
              className="font-mono text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[6px] md:gap-[8px] hover:border-red hover:text-red disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              onClick={() => { reset(); setTimeout(() => play(true), 60); }} disabled={isBusy || !activeFlow.altSteps}
            >
              {activeFlow.altLabel || 'Simulate delay'}
            </button>
          )}

          <button
            className="font-mono text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[6px] md:gap-[8px] hover:border-amber hover:text-amber shrink-0"
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </div>

      {flows.length > 1 && (
        <div className="flex gap-[6px] md:gap-[8px] mt-[16px] md:mt-[22px] flex-nowrap">
          {flows.map(f => (
            <button
              key={f.id}
              className={`font-mono text-[10px] md:text-[12px] tracking-[.04em] cursor-pointer border p-[6px_8px] md:p-[9px_14px] rounded-[9px] transition-[.18s] hover:text-ink shrink-0 ${activeFlowId === f.id ? 'border-amber text-amber bg-amber-soft' : 'border-line bg-panel2 text-muted'
                }`}
              onClick={() => { if (!isBusy) setTab(f.id) }}
            >
              {f.tab}
            </button>
          ))}
        </div>
      )}
        <div className="w-full mt-[12px] md:mt-[26px] shrink-0 overflow-x-visible md:overflow-x-auto md:pb-[10px]">
        <div className="relative px-[4px] pt-[16px] w-full md:min-w-[640px]">
          <div className={`absolute left-[4px] right-[4px] md:left-[44px] md:right-[44px] top-[30px] ${activeFlow.compact ? 'md:top-[49px]' : 'md:top-[58px]'} h-[3px] bg-line rounded-[3px]`}>
            <div 
              className={`absolute left-0 top-0 bottom-0 rounded-[3px] transition-[width] duration-[1100ms] ease-in-out ${isAlert ? 'bg-[linear-gradient(90deg,var(--color-red),#ff8d86)]' : 'bg-[linear-gradient(90deg,var(--color-amber),#ffb066)]'}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className={`absolute left-[4px] right-[4px] md:left-[44px] md:right-[44px] top-[30px] ${activeFlow.compact ? 'md:top-[49px]' : 'md:top-[58px]'} h-0 pointer-events-none z-30`}>
            <div 
              className={`absolute top-0 w-[10px] h-[10px] md:w-[18px] md:h-[18px] rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 transition-[left] duration-[1100ms] ease-in-out ${status !== 'idle' ? 'opacity-100' : 'opacity-0'} ${isAlert ? 'shadow-[0_0_16px_4px_var(--color-red)]' : 'shadow-[0_0_16px_4px_var(--color-amber)]'}`}
              style={{ left: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between relative">
          {steps.map((step, i) => {
            const isDone = i < activeStepIndex || activeStepIndex === steps.length;
            const isCurrent = i === activeStepIndex;
            const stepAlert = step.alert || (isAlert && isCurrent);

            let ringClass = "border-line bg-panel";
            let nmClass = "text-muted";
            let nodeScale = "scale-100";

            if (isCurrent) {
              if (stepAlert) {
                ringClass = "border-red bg-red-soft shadow-[0_0_0_6px_var(--color-red-soft),0_0_24px_rgba(255,90,82,.5)]";
                nmClass = "text-red";
              } else {
                ringClass = "border-amber bg-amber-soft shadow-[0_0_0_6px_var(--color-amber-soft),0_0_24px_rgba(255,125,26,.5)]";
                nmClass = "text-amber";
              }
              nodeScale = "scale-110";
            } else if (isDone) {
              ringClass = "border-green text-green bg-panel";
              nmClass = "text-green";
            }

            return (
              <div key={i} className="flex flex-col items-center w-auto flex-1 md:flex-none md:w-[80px] md:shrink-0">
                <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center text-[11px] relative z-20 transition-all duration-300 ${ringClass} ${isCurrent ? nodeScale : ''} ${activeFlow.compact ? 'md:w-[52px] md:h-[52px] md:text-[18px]' : 'md:w-[64px] md:h-[64px] md:text-[24px]'}`}>
                  {step.ic}
                </div>
                <div className={`font-disp text-[7.5px] uppercase tracking-[0.02em] leading-tight mt-[6px] text-center transition-colors duration-300 ${nmClass} ${activeFlow.compact ? 'md:text-[9px]' : 'md:text-[11px]'}`}>
                  {step.nm}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-[18px] mt-[28px] shrink-0">
        <div className="bg-[#0a0f14] border border-line rounded-[14px] p-[16px_18px] font-mono text-[12.5px] h-[160px] flex flex-col">
          <div className="text-muted text-[10.5px] tracking-[.2em] uppercase mb-[12px] flex-none">System activity log</div>
          <div ref={logRef} className="overflow-y-auto flex-1">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-[12px] mb-[9px] leading-[1.4] animate-slideIn">
                <span className="text-cyan flex-none">{log.time}</span>
                <span className={log.alert ? 'text-red' : (log.ok ? 'text-green' : '')}>{log.msg}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-panel border border-line rounded-[14px] p-[12px_14px] md:p-[16px_18px] h-auto md:h-[160px] flex flex-col justify-center">
          <div className="font-mono text-[9px] md:text-[10.5px] tracking-[.2em] uppercase text-muted">{activeFlow.previewHd}</div>
          <div className="font-disp font-extrabold text-[16px] md:text-[26px] m-[4px_0_2px] md:m-[8px_0_2px]">{previewBig}</div>
          <div className="text-muted text-[11.5px] md:text-[13px] leading-[1.45]">{previewMeta}</div>
          {previewBadge.show && (
            <span className={`inline-block font-mono text-[9.5px] md:text-[11px] p-[3px_8px] md:p-[4px_10px] rounded-[6px] mt-[8px] md:mt-[12px] tracking-[.06em] self-start ${previewBadge.ok ? 'bg-[rgba(70,209,126,.12)] text-green' : 'bg-amber-soft text-amber'}`}>
              {previewBadge.text}
            </span>
          )}
        </div>
      </div>
    </Slide>
  );
}
