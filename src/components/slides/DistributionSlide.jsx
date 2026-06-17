import Slide from '../Slide';

export default function DistributionSlide({ isActive }) {
  const models = [
    {
      title: "Dealers & Distributors",
      text: "We work with an established network of authorized dealers and distributors to ensure wide market reach and consistent product availability. This channel helps us serve multiple regions efficiently while maintaining pricing discipline, product knowledge, and after-sales support."
    },
    {
      title: "Direct Institutional Sales",
      text: "For large-scale buyers such as corporates, government bodies, and institutions, we offer direct sales solutions."
    },
    {
      title: "Project Based Contractors",
      text: "We collaborate closely with project-based contractors for infrastructure, industrial, and commercial projects. This approach ensures timely supply aligned with project schedules, technical coordination, and flexible fulfillment."
    }
  ];

  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Distribution Model</div>
      <h2>Our robust <span className="accent">Network.</span></h2>
      <p className="lede">Strategically designed to reach every segment with speed, reliability, and precision.</p>

      <div className="flex flex-col gap-[8px] md:gap-[20px] mt-[8px] md:mt-[30px] max-w-[900px] mx-auto">
        {models.map((model, i) => (
          <div 
            key={i} 
            className={`flex gap-[8px] md:gap-[16px] bg-panel border border-line rounded-lg p-[10px] md:p-[20px] shadow-sm relative overflow-hidden ${isActive ? 'animate-slideIn' : 'opacity-0'}`}
            style={{ animationDelay: `${300 + (i * 200)}ms`, animationFillMode: 'both' }}
          >
            {/* Green vertical bar on the left */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] md:w-[6px] bg-[#67b51b]"></div>
            
            <div className="pl-[8px] md:pl-[12px]">
              <b className="font-disp text-[13px] md:text-[20px] text-ink block mb-[2px] md:mb-[8px] leading-tight">
                {model.title}
              </b>
              <p className="text-muted text-[11px] md:text-[14.5px] leading-[1.3] md:leading-[1.5]">
                {model.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
