import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function TimelineSlide({ isActive }) {
  const milestones = [
    {
      type: 'major',
      title: '2005',
      points: [
        <>Incorporation at <b className="font-semibold text-ink">Raipur</b></>,
        <><b className="font-semibold text-ink">SMS &amp; CCM</b> Setup</>
      ]
    },
    {
      type: 'minor',
      topTitle: 'Expansion Phase',
      points: [
        <><b className="font-semibold text-ink">7</b> Furnaces</>,
        <><b className="font-semibold text-ink">2</b> CCM</>,
        <><b className="font-semibold text-ink">8</b> Pipemills</>,
        <>Sagar Pipe Mills <b className="font-semibold text-ink">Launch</b></>
      ]
    },
    {
      type: 'major',
      title: <>Recent<br/>Years</>,
      points: [
        'BIS Norms',
        'Safety Focus',
        <>PAN India <b className="font-semibold text-ink">Expansion</b></>
      ]
    },
    {
      type: 'minor',
      topTitle: 'Current Phase',
      points: [
        <>Digital<br className="md:hidden" /> Transformation</>,
        <>Data-driven<br className="md:hidden" /> Decisions</>
      ]
    }
  ];

  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Who we are</div>
      <h2>India's trusted steel manufacturer with <span className="accent">20 years of excellence.</span></h2>
      <p className="lede mb-[20px]">
        Specializing in MS Pipes, Strips, and Billets under the "Sagar Pipes" brand.
      </p>
      
      {/* The Timeline Diagram */}
      <div className="relative mt-[16px] md:mt-[24px] w-full max-w-[1000px] mx-auto h-[280px] md:h-[320px]">
        
        {/* Horizontal Timeline Line */}
        <div className="absolute top-[100px] left-[2%] right-[2%] h-[2px] bg-[#1a1a1a] z-0"></div>
        {/* Arrow at the end of the line */}
        <div className="absolute top-[96px] right-[2%] w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-[#1a1a1a] z-0"></div>

        <div className="flex justify-between absolute top-0 left-0 right-0 h-full z-10">
          {milestones.map((m, i) => (
            <div key={i} className={`relative flex flex-col items-center w-[25%] h-full ${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: `${i * 200 + 300}ms`, animationFillMode: 'both' }}>
              
              {m.type === 'major' ? (
                <>
                  {/* Large Circle */}
                  <div className="absolute top-[60px] md:top-[50px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-b from-[#6b0000] to-[#d30000] flex items-center justify-center text-white font-disp font-bold text-[18px] md:text-[22px] leading-[1.1] text-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] z-20">
                    {m.title}
                  </div>
                  
                  {/* Small line from circle to triangle */}
                  <div className="absolute top-[140px] md:top-[150px] w-[1px] h-[30px] bg-[#1a1a1a]"></div>
                  
                  {/* Triangle */}
                  <div className="absolute top-[170px] md:top-[180px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#d32f2f]"></div>
                  
                  {/* Points */}
                  <div className="absolute top-[190px] md:top-[200px] w-full flex justify-center">
                    <ul className="space-y-[8px] md:space-y-[12px] text-[12px] md:text-[15px] text-muted text-left w-max">
                      {m.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-[6px]">
                          <span className="w-[4px] h-[4px] mt-[6px] md:mt-[8px] bg-ink rounded-full shrink-0"></span>
                          <span className="max-w-[150px] leading-[1.3]">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  {/* Top Text */}
                  <div className="absolute top-[30px] font-disp font-bold text-[13px] md:text-[16px] text-ink text-center z-20 bg-panel px-2 whitespace-nowrap">
                    {m.topTitle}
                  </div>
                  
                  {/* Continuous vertical line */}
                  <div className="absolute top-[50px] w-[1px] h-[120px] md:h-[130px] bg-[#1a1a1a] z-10"></div>
                  
                  {/* Grey Dot on Timeline */}
                  <div className="absolute top-[96px] w-[10px] h-[10px] rounded-full bg-[#1a1a1a] z-20"></div>

                  {/* Triangle */}
                  <div className="absolute top-[170px] md:top-[180px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#d32f2f]"></div>
                  
                  {/* Points */}
                  <div className="absolute top-[190px] md:top-[200px] w-full flex justify-center">
                    <ul className="space-y-[8px] md:space-y-[12px] text-[12px] md:text-[15px] text-muted text-left w-max">
                      {m.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-[6px]">
                          <span className="w-[4px] h-[4px] mt-[6px] md:mt-[8px] bg-ink rounded-full shrink-0"></span>
                          <span className="max-w-[150px] leading-[1.3]">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
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
