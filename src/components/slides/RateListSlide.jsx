import Slide from '../Slide';

const STRIP_ROWS = [
  { size: '100 MM', p1: '3600', p2: '2900', p3: '2900' },
  { size: '128 MM', p1: '3300', p2: '2600', p3: '2600' },
  { size: '148 MM', p1: '3100', p2: '2400', p3: '2400' },
  { size: '184 MM', p1: '3100', p2: '2400', p3: '2400' },
  { size: '200 MM', p1: '3100', p2: '2400', p3: '2400' },
  { size: '234 MM', p1: '3500', p1Note: '(1.40)', p2: '2700', p3: '2600' },
  { size: '274 MM', p1: null, p2: '3500', p3: '2700' },
];

const STRIP_NOTES = [
  'Rate on next day payment basis.',
  'GST charged extra as applicable.',
  'Loading charge ₹285/PMT extra on basic prices.',
];

const GAUGE_ROWS = [
  { size: "0.50'' (20OD/15X15)", p0: '10000', p1: '7500', p2: '6500', p3: '6500' },
  { size: "0.75'' (25OD/19X19)", p0: '9000', p1: '6500', p2: '5500', p3: '5500' },
  { size: "1.00'' (32OD/25X25)", p0: '8000', p1: '5500', p2: '4500', p3: '4500' },
  { size: "1.25'' (42OD/31X31)", p0: '7500', p1: '5000', p2: '4000', p3: '4000' },
  { size: "1.50'' (48OD/38X38 / 25x50)", p0: '7000', p1: '4500', p2: '3500', p3: '3500' },
  { size: "2.00'' (60OD/47X47/56X37)", p0: '7000', p1: '4500', p2: '3500', p3: '3500' },
  { size: "2.50'' (76OD/62X62/80X40)", p0: null, p1: '5000', p2: '4000', p3: '3700' },
  { size: "3.00'' (88OD/72X72/96X48)", p0: null, p1: null, p2: '5200', p3: '4200' },
];

const GAUGE_NOTES = [
  'Difference charges added on basic price.',
  'Under & over 20 Ft size: +₹500/PMT.',
  'Jointless pipes: +₹500 on basic price.',
  'Next day payment basis; +₹200 per 7 days.',
  'Loading charges ₹385/PMT extra.',
  'Minimum 5 MT lift — below that +₹500.',
  'Lift material within 15 days of booking.',
];

export default function RateListSlide({ isActive }) {
  return (
    <Slide isActive={isActive} center>
      <div className={`w-full ${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
        <h2>Gauge-Wise <span className="accent">Diff. Rate List.</span></h2>
      </div>

      <div className="w-full mt-[18px] md:mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px]">
        {/* MS Strips column */}
        <div className={`flex flex-col min-w-0 ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <div className="flex items-center gap-[6px] mb-[8px] md:mb-[10px]">
            <h3 className="font-disp font-bold text-[13px] md:text-[17px] text-ink">SAGAR STRIPS G.D</h3>
            <span className="text-[8.5px] md:text-[10.5px] font-mono text-muted uppercase tracking-wide">CG Strips &amp; Pipes Assoc.</span>
          </div>

          <div className="w-full overflow-x-auto rounded-[10px] md:rounded-[14px] border border-line shadow-sm bg-white">
            <table className="w-full min-w-0 md:min-w-[400px] border-collapse text-center">
              <thead>
                <tr className="bg-amber text-white">
                  <th className="px-[6px] md:px-[14px] py-px md:py-[11px] text-left font-disp text-[8.5px] md:text-[12px] uppercase tracking-wide">Thickness</th>
                  <th className="px-[6px] md:px-[14px] py-px md:py-[11px] font-disp text-[8.5px] md:text-[12px] uppercase tracking-wide">1.20-1.49</th>
                  <th className="px-[6px] md:px-[14px] py-px md:py-[11px] font-disp text-[8.5px] md:text-[12px] uppercase tracking-wide">1.50-1.89</th>
                  <th className="px-[6px] md:px-[14px] py-px md:py-[11px] font-disp text-[8.5px] md:text-[12px] uppercase tracking-wide">1.90+</th>
                </tr>
              </thead>
              <tbody>
                {STRIP_ROWS.map((r, i) => (
                  <tr key={r.size} className={`border-t border-line ${i % 2 === 1 ? 'bg-panel' : 'bg-white'}`}>
                    <td className="px-[6px] md:px-[14px] py-px md:py-[9px] text-left font-disp font-bold text-ink text-[9.5px] md:text-[13.5px]">{r.size}</td>
                    <td className="px-[6px] md:px-[14px] py-px md:py-[9px] font-mono tabular-nums text-ink text-[9.5px] md:text-[13px]">
                      {r.p1 ?? <span className="text-muted">&mdash;</span>}
                      {r.p1Note && <span className="block text-[8px] md:text-[10px] text-muted">{r.p1Note}</span>}
                    </td>
                    <td className="px-[6px] md:px-[14px] py-px md:py-[9px] font-mono tabular-nums text-ink text-[9.5px] md:text-[13px]">{r.p2}</td>
                    <td className="px-[6px] md:px-[14px] py-px md:py-[9px] font-mono tabular-nums text-ink text-[9.5px] md:text-[13px]">{r.p3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-[10px] md:mt-[12px] flex flex-col gap-[4px] md:gap-[5px]">
            {STRIP_NOTES.map((n, i) => (
              <div key={i} className="flex items-start gap-[6px] text-muted text-[9px] md:text-[11.5px] leading-tight">
                <span className="w-[4px] h-[4px] rounded-full bg-amber shrink-0 mt-[5px]"></span>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sagar ISI Pipes column */}
        <div className={`flex flex-col min-w-0 ${isActive ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '220ms', animationFillMode: 'both' }}>
          <div className="flex items-center gap-[6px] mb-[8px] md:mb-[10px] flex-wrap">
            <h3 className="font-disp font-bold text-[13px] md:text-[17px] text-ink">SAGAR PIPE G.D</h3>
            <span className="shrink-0 border border-amber rounded-full px-[8px] py-[2px] font-disp font-bold text-[8px] md:text-[10px] text-amber uppercase tracking-wide">100% ISI</span>
          </div>

          <div className="w-full overflow-x-auto rounded-[10px] md:rounded-[14px] border border-line shadow-sm bg-white">
            <table className="w-full min-w-0 md:min-w-[440px] border-collapse text-center">
              <thead>
                <tr className="bg-amber text-white">
                  <th className="px-[5px] md:px-[12px] py-[3px] md:py-[11px] text-left font-disp text-[8px] md:text-[12px] uppercase tracking-wide">Size</th>
                  <th className="px-[5px] md:px-[12px] py-[3px] md:py-[11px] font-disp text-[8px] md:text-[12px] uppercase tracking-wide">1.00</th>
                  <th className="px-[5px] md:px-[12px] py-[3px] md:py-[11px] font-disp text-[8px] md:text-[12px] uppercase tracking-wide">1.20-1.49</th>
                  <th className="px-[5px] md:px-[12px] py-[3px] md:py-[11px] font-disp text-[8px] md:text-[12px] uppercase tracking-wide">1.50+</th>
                  <th className="px-[5px] md:px-[12px] py-[3px] md:py-[11px] font-disp text-[8px] md:text-[12px] uppercase tracking-wide">1.90+</th>
                </tr>
              </thead>
              <tbody>
                {GAUGE_ROWS.map((r, i) => (
                  <tr key={r.size} className={`border-t border-line ${i % 2 === 1 ? 'bg-panel' : 'bg-white'}`}>
                    <td className="px-[5px] md:px-[12px] py-px md:py-[8px] text-left font-disp font-bold text-ink text-[8px] md:text-[12px] md:whitespace-nowrap leading-tight">{r.size}</td>
                    <td className="px-[5px] md:px-[12px] py-px md:py-[8px] font-mono tabular-nums text-ink text-[9px] md:text-[12.5px]">{r.p0 ?? <span className="text-muted">&mdash;</span>}</td>
                    <td className="px-[5px] md:px-[12px] py-px md:py-[8px] font-mono tabular-nums text-ink text-[9px] md:text-[12.5px]">{r.p1 ?? <span className="text-muted">&mdash;</span>}</td>
                    <td className="px-[5px] md:px-[12px] py-px md:py-[8px] font-mono tabular-nums text-ink text-[9px] md:text-[12.5px]">{r.p2}</td>
                    <td className="px-[5px] md:px-[12px] py-px md:py-[8px] font-mono tabular-nums text-ink text-[9px] md:text-[12.5px]">{r.p3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-[10px] md:mt-[12px] grid grid-cols-2 gap-x-[10px] md:gap-x-[14px] gap-y-[4px] md:gap-y-[5px]">
            {GAUGE_NOTES.map((n, i) => (
              <div key={i} className="flex items-start gap-[6px] text-muted text-[9px] md:text-[11.5px] leading-tight">
                <span className="w-[4px] h-[4px] rounded-full bg-amber shrink-0 mt-[5px]"></span>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to prevent navigation overlap */}
      <div className="h-[20px] md:h-[70px] shrink-0"></div>
    </Slide>
  );
}
