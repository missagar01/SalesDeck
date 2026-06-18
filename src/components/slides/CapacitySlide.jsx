import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../Slide';
import logo from '../../assets/tlogo.png';
import { TrendingDown, Users, Star, Briefcase, Award, Factory, Clock, MapPin } from 'lucide-react';

export default function CapacitySlide({ isActive }) {
  // Perfect Infinity Loop Path (Lemniscate style)
  const infinityPath = `
    M 500 250 
    C 600 100, 850 100, 850 250 
    C 850 400, 600 400, 500 250 
    C 400 100, 150 100, 150 250 
    C 150 400, 400 400, 500 250 Z
  `;

  const nodes = [
    { id: 1, left: "32.5%", top: "27.4%", val: "15-20%", title: "Cost Savings", icon: TrendingDown, popupClass: "bottom-full right-full mb-3 mr-10 origin-bottom-right", x: "0%", y: "0%" },
    { id: 2, left: "15%", top: "50%", val: "95%", title: "Client Retention", icon: Users, popupClass: "right-full mr-10 top-1/2 origin-right", x: "0%", y: "-50%" },
    { id: 3, left: "32.5%", top: "72.6%", val: "1000+", title: "Satisfied Clients", icon: Star, popupClass: "top-full right-full mt-3 mr-10 origin-top-right", x: "0%", y: "0%" },
    { id: 4, left: "50%", top: "15%", val: "1200+", title: "Workforce", icon: Briefcase, popupClass: "bottom-full mb-4 left-1/2 origin-bottom", x: "-50%", y: "0%" },
    { id: 5, left: "50%", top: "85%", val: "20+ Yrs", title: "Industry Experience", icon: Award, popupClass: "top-full mt-4 left-1/2 origin-top", x: "-50%", y: "0%" },
    { id: 6, left: "67.5%", top: "27.4%", val: "25 Acres", title: "Manufacturing Facility", icon: Factory, popupClass: "bottom-full left-full mb-3 ml-10 origin-bottom-left", x: "0%", y: "0%" },
    { id: 7, left: "85%", top: "50%", val: "1-3 Days", title: "Delivery Time", icon: Clock, popupClass: "left-full ml-10 top-1/2 origin-left", x: "0%", y: "-50%" },
    { id: 8, left: "67.5%", top: "72.6%", val: "8 States", title: "PAN-India Reach", icon: MapPin, popupClass: "top-full left-full mt-3 ml-10 origin-top-left", x: "0%", y: "0%" },
  ];

  const [activeNodes, setActiveNodes] = useState(nodes.map(n => n.id));

  return (
    <Slide isActive={isActive} center>
      <div className="w-full flex flex-col items-start select-none">
        
        {/* Header Block */}
        <div className="w-full text-left">
          <div className="eyebrow">Key Metrics Dashboard</div>
          <h2><span className="accent">Driving Excellence</span> Every Day</h2>
          <p className="lede mt-2 text-left">
            The numbers that define our commitment to quality, reliability, and growth.
          </p>
        </div>

        {/* Interactive Infinity Loop UI */}
        <div className="relative w-[95%] sm:w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl aspect-[2/1] mt-[70px] sm:mt-16 mb-8 sm:mb-4 scale-[0.55] sm:scale-90 md:scale-100 mx-auto origin-center shrink-0">
          
          {/* SVG Infinity Loop Graphic */}
          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full drop-shadow-xl overflow-visible pointer-events-none">
            <defs>
              <linearGradient id="inf-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />   {/* Theme Red */}
                <stop offset="40%" stopColor="#fca5a5" />
                <stop offset="50%" stopColor="#64748b" />  {/* Theme Slate */}
                <stop offset="60%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#0ea5e9" /> {/* Theme Cyan */}
              </linearGradient>
            </defs>
            
            {/* Base Thick Colorful Track */}
            <path 
              d={infinityPath} 
              fill="none" 
              stroke="url(#inf-grad)" 
              strokeWidth="45" 
              strokeLinecap="round" 
              className="opacity-95"
            />

            {/* Animated Flowing Pulse */}
            <motion.path 
              d={infinityPath}
              fill="none"
              stroke="#ffffff"
              strokeWidth="35"
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray="0.1 0.9"
              animate={{ strokeDashoffset: [0, -1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="opacity-80 blur-[1px]"
            />
          </svg>

          {/* Central Logo */}
          <img 
            src={logo} 
            alt="Sagar TMT" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-6 sm:h-9 md:h-11 w-auto object-contain pointer-events-none drop-shadow-md" 
          />

          {/* Interactive Overlay Nodes */}
          {nodes.map((node) => {
            const isActiveNode = activeNodes.includes(node.id);
            const Icon = node.icon;
            
            return (
              <div 
                key={node.id} 
                className="absolute z-20"
                style={{ left: node.left, top: node.top, transform: 'translate(-50%, -50%)' }}
              >
                {/* Clickable Node Button */}
                <button 
                  onClick={() => setActiveNodes(prev => prev.includes(node.id) ? prev.filter(id => id !== node.id) : [...prev, node.id])}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg flex items-center justify-center border-[3px] transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isActiveNode ? 'bg-[#dc2626] border-white text-white' : 'bg-white border-[#dc2626] text-[#dc2626]'
                  }`}
                  aria-label={`Toggle ${node.title}`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Popup Detail Card */}
                <AnimatePresence>
                  {isActiveNode && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, x: node.x || 0, y: node.y || 0 }}
                      animate={{ opacity: 1, scale: 1, x: node.x || 0, y: node.y || 0 }}
                      exit={{ opacity: 0, scale: 0.5, x: node.x || 0, y: node.y || 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`absolute ${node.popupClass} w-36 sm:w-44 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 z-30 flex flex-col items-center text-center`}
                    >
                      <span className="text-lg sm:text-xl font-extrabold text-slate-900 mb-0 tracking-tight">{node.val}</span>
                      <span className="text-[10px] sm:text-xs font-semibold text-slate-600 leading-snug">{node.title}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

        </div>
      </div>
      
      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[100px] lg:hidden shrink-0"></div>
    </Slide>
  );
}
