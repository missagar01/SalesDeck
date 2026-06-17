import { useState, useEffect } from 'react';
import { CONFIG } from './data/config';
import CoverSlide from './components/slides/CoverSlide';
import TimelineSlide from './components/slides/TimelineSlide';
import StatsSlide from './components/slides/StatsSlide';
import CapacitySlide from './components/slides/CapacitySlide';
import CertsSlide from './components/slides/CertsSlide';
import PillarsSlide from './components/slides/PillarsSlide';
import DeptMapSlide from './components/slides/DeptMapSlide';
import TimeBoundTasksSlide from './components/slides/TimeBoundTasksSlide';
import EscalationSlide from './components/slides/EscalationSlide';
import FlowSlide from './components/slides/FlowSlide';
import QualitySlide from './components/slides/QualitySlide';
import SmartInventorySlide from './components/slides/SmartInventorySlide';
import DepartmentSlide from './components/slides/DepartmentSlide';
import DistributionSlide from './components/slides/DistributionSlide';
import ManagementSystemSlide from './components/slides/ManagementSystemSlide';
import CloseSlide from './components/slides/CloseSlide';
import OurClientSlide from './components/slides/OurClientSlide';
import ThankYouSlide from './components/slides/ThankYouSlide';

const TOTAL_SLIDES = 17;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const go = (n) => {
    setActiveIndex(Math.max(0, Math.min(TOTAL_SLIDES - 1, n)));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const t = e.target.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === ' ') go(activeIndex + 1);
      if (e.key === 'ArrowLeft') go(activeIndex - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="deck" id="deck">
        <CoverSlide isActive={activeIndex === 0} />
        <TimelineSlide isActive={activeIndex === 1} />
        <StatsSlide isActive={activeIndex === 2} />
        <CapacitySlide isActive={activeIndex === 3} />
        <CertsSlide isActive={activeIndex === 4} />
        <PillarsSlide isActive={activeIndex === 5} />
        <DeptMapSlide isActive={activeIndex === 6} />
        <TimeBoundTasksSlide isActive={activeIndex === 7} />
        <EscalationSlide isActive={activeIndex === 8} />
        <QualitySlide isActive={activeIndex === 9} />
        <SmartInventorySlide isActive={activeIndex === 10} />
        <DepartmentSlide isActive={activeIndex === 11} />
        <DistributionSlide isActive={activeIndex === 12} />
        <ManagementSystemSlide isActive={activeIndex === 13} />
        <CloseSlide isActive={activeIndex === 14} />
        <OurClientSlide isActive={activeIndex === 15} />
        <ThankYouSlide isActive={activeIndex === 16} />
      </div>

      <div className="fixed top-[20px] right-[24px] font-mono text-[12px] text-muted tracking-[.1em] z-50">
        <b className="text-ink">{String(activeIndex + 1).padStart(2, '0')}</b> / {String(TOTAL_SLIDES).padStart(2, '0')}
      </div>

      <div className="fixed bottom-[22px] left-0 right-0 flex items-center justify-center gap-[16px] z-50">
        <button 
          onClick={() => go(activeIndex - 1)}
          aria-label="Previous"
          className="w-[42px] h-[42px] rounded-full border border-line bg-[rgba(255,255,255,.85)] backdrop-blur-[6px] text-ink cursor-pointer text-[18px] transition-[.18s] hover:border-amber hover:text-amber"
        >
          &#8249;
        </button>
        <div className="flex gap-[7px]">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <i 
              key={i}
              onClick={() => go(i)}
              className={`h-[8px] rounded-[5px] bg-line cursor-pointer transition-[.2s] ${i === activeIndex ? 'w-[22px] bg-amber' : 'w-[8px]'}`}
            ></i>
          ))}
        </div>
        <button 
          onClick={() => go(activeIndex + 1)}
          aria-label="Next"
          className="w-[42px] h-[42px] rounded-full border border-line bg-[rgba(255,255,255,.85)] backdrop-blur-[6px] text-ink cursor-pointer text-[18px] transition-[.18s] hover:border-amber hover:text-amber"
        >
          &#8250;
        </button>
      </div>

      <div className="fixed bottom-[6px] left-0 right-0 text-center font-mono text-[9px] md:text-[10px] text-muted tracking-[.08em] z-50">
        Powered by{' '}
        <a 
          href="https://www.botivate.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber hover:underline transition-all"
        >
          botivate
        </a>
      </div>
    </>
  );
}

export default App;
