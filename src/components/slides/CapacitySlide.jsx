import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function CapacitySlide({ isActive }) {
  const metrics = [
    { num: "15-20%", lab: "Cost Savings" },
    { num: "1200+", lab: "Workforce" },
    { num: "25 Acres", lab: "Manufacturing Facility" },
    { num: "95%", lab: "Client Retention" },
    { num: "1-3 Days", lab: "Delivery Time" },
    { num: "1000+", lab: "Satisfied Clients" },
    { num: "20+ Yrs", lab: "Industry Experience" },
    { num: "8 States", lab: "PAN-India Reach" },
  ];

  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Key Metrics Dashboard</div>
      <h2><span className="accent">Driving Excellence</span> Every Day</h2>
      <p className="lede">The numbers that define our commitment to quality, reliability, and growth.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-[18px] mt-[18px] md:mt-[34px]">
        {metrics.map((c, i) => (
          <div key={i} className="bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] border border-line rounded-[16px] p-[14px_16px] md:p-[24px_22px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[60px] h-[60px] bg-[radial-gradient(80px_80px_at_100%_0,var(--color-amber-soft),transparent_70%)]"></div>
            <div className="font-disp font-extrabold text-[24px] md:text-[clamp(28px,3.4vw,40px)] leading-none text-amber">{c.num}</div>
            <div className="font-mono text-[11px] md:text-[13px] tracking-[.05em] uppercase text-ink mt-[8px] md:mt-[10px] leading-snug">{c.lab}</div>
          </div>
        ))}
      </div>
      
      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}
