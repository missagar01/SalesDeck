import { useState, useEffect } from 'react';
import { CONFIG } from './data/config';
import CoverSlide from './components/slides/CoverSlide';
import TimelineSlide from './components/slides/TimelineSlide';
import StatsSlide from './components/slides/StatsSlide';
import CapacitySlide from './components/slides/CapacitySlide';
import CertsSlide from './components/slides/CertsSlide';
import ProductImageSlide from './components/slides/ProductImageSlide';
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

const TOTAL_SLIDES = 18;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const go = (n) => {
    setActiveIndex(Math.max(0, Math.min(TOTAL_SLIDES - 1, n)));
  };

  const AUTO_PLAY_INTERVAL = 6000;

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPlaying, activeIndex]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e) => {
      if (e.changedTouches.length === 1 && startX !== 0) {
        const diffX = e.changedTouches[0].clientX - startX;
        const diffY = e.changedTouches[0].clientY - startY;

        const thresholdX = 60;
        const thresholdY = 50;

        if (Math.abs(diffX) > thresholdX && Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffY) < thresholdY) {
          if (diffX < 0) {
            go(activeIndex + 1);
          } else {
            go(activeIndex - 1);
          }
        }
        startX = 0;
        startY = 0;
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeIndex]);

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
        <ProductImageSlide isActive={activeIndex === 5} />
        <PillarsSlide isActive={activeIndex === 6} />
        <DeptMapSlide isActive={activeIndex === 7} />
        <TimeBoundTasksSlide isActive={activeIndex === 8} />
        <EscalationSlide isActive={activeIndex === 9} />
        <QualitySlide isActive={activeIndex === 10} />
        <SmartInventorySlide isActive={activeIndex === 11} />
        <DepartmentSlide isActive={activeIndex === 12} />
        <DistributionSlide isActive={activeIndex === 13} />
        <ManagementSystemSlide isActive={activeIndex === 14} />
        <CloseSlide isActive={activeIndex === 15} />
        <OurClientSlide isActive={activeIndex === 16} />
        <ThankYouSlide isActive={activeIndex === 17} />
      </div>



      {/* ── FLOATING NAV (above footer) ── */}
      <div className="deck-nav-float" aria-label="Slide navigation">
        <button
          onClick={() => go(activeIndex - 1)}
          aria-label="Previous slide"
          className="deck-nav-btn"
        >
          &#8249;
        </button>

        <div className="deck-dots-pill">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`deck-dot${i === activeIndex ? ' deck-dot--active' : ''}`}
            />
          ))}
        </div>

        <button
          onClick={() => go(activeIndex + 1)}
          aria-label="Next slide"
          className="deck-nav-btn"
        >
          &#8250;
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause auto play" : "Start auto play"}
          className={`deck-nav-btn ${isPlaying ? 'text-amber border-amber' : ''}`}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] ml-[2px]">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          )}
        </button>
      </div>

      {/* ── FOOTER BAR ── */}
      <footer className="deck-footer">
        <span className="deck-footer__credit">
          Powered by&nbsp;
          <a
            href="https://www.botivate.in"
            target="_blank"
            rel="noopener noreferrer"
            className="deck-footer__link"
          >
            Botivate
          </a>
        </span>
      </footer>
    </>
  );
}

export default App;
