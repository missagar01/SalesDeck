import { CONFIG } from '../../data/config';
import Slide from '../Slide';
import ourClientImg from '../../assets/OurClient.png';

export default function OurClientSlide({ isActive }) {
  return (
    <Slide isActive={isActive}>
      <div className={`flex flex-col items-center justify-center w-full h-full ${isActive ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
        <h2 className="mb-[30px] md:mb-[50px] font-disp font-bold text-[30px] md:text-[45px] text-ink text-center">
          Our <span className="text-[#d32f2f]">Clients</span>
        </h2>
        <div className="w-full max-w-[1000px] mx-auto bg-white rounded-[16px] shadow-sm border border-line p-[20px] md:p-[40px] flex items-center justify-center">
          <img 
            src={ourClientImg} 
            alt="Our Clients" 
            className="max-w-full w-auto object-contain max-h-[60vh]" 
          />
        </div>
      </div>
    </Slide>
  );
}
