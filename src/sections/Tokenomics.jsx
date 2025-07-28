import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Tokenomics = () => {
  const { t } = useTranslation();
  
  return (
    <section id="tokenomics" className="py-20">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('tokenomics.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Token Visualization */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Token Distribution Pie Chart */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="320" height="320" viewBox="0 0 320 320" className="transform -rotate-90">
                  {/* Ecosystem Fund - 40% (144°) */}
                  <path d="M 160 160 L 160 40 A 120 120 0 0 1 267.7 100 Z" fill="#38BDF8" />
                  
                  {/* Team & Advisors - 20% (72°) */}
                  <path d="M 160 160 L 267.7 100 A 120 120 0 0 1 267.7 220 Z" fill="#0EA5E9" />
                  
                  {/* Community - 15% (54°) */}
                  <path d="M 160 160 L 267.7 220 A 120 120 0 0 1 195.1 271.8 Z" fill="#0284C7" />
                  
                  {/* Foundation - 15% (54°) */}
                  <path d="M 160 160 L 195.1 271.8 A 120 120 0 0 1 124.9 271.8 Z" fill="#0369A1" />
                  
                  {/* Public Sale - 10% (36°) */}
                  <path d="M 160 160 L 124.9 271.8 A 120 120 0 0 1 52.3 220 Z" fill="#075985" />
                  
                  {/* Remaining space back to start */}
                  <path d="M 160 160 L 52.3 220 A 120 120 0 0 1 160 40 Z" fill="#1E293B" />
                  
                  {/* Center circle */}
                  <circle cx="160" cy="160" r="50" fill="#0F172A" />
                  
                  {/* Center text */}
                  <text x="160" y="170" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="24" fontWeight="bold" className="transform rotate-90" style={{transformOrigin: "160px 160px"}}>$VRC</text>
                </svg>
              </div>
              
              {/* Legend */}
               <div className="absolute inset-0 pointer-events-none">
                 {/* Ecosystem Fund - Top */}
                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-center">
                   <div className="text-accent font-semibold text-sm">Ecosystem Fund</div>
                   <div className="text-white text-sm">40%</div>
                 </div>
                 
                 {/* Team & Advisors - Right */}
                 <div className="absolute top-1/4 right-0 transform translate-x-2 text-center">
                   <div className="text-accent font-semibold text-sm">Team & Advisors</div>
                   <div className="text-white text-sm">20%</div>
                 </div>
                 
                 {/* Community - Bottom Right */}
                 <div className="absolute bottom-1/4 right-4 transform translate-x-2 text-center">
                   <div className="text-accent font-semibold text-sm">Community</div>
                   <div className="text-white text-sm">15%</div>
                 </div>
                 
                 {/* Foundation - Bottom Left */}
                 <div className="absolute bottom-1/4 left-4 transform -translate-x-2 text-center">
                   <div className="text-accent font-semibold text-sm">Foundation</div>
                   <div className="text-white text-sm">15%</div>
                 </div>
                 
                 {/* Public Sale - Left */}
                 <div className="absolute top-1/3 left-0 transform -translate-x-2 text-center">
                   <div className="text-accent font-semibold text-sm">Public Sale</div>
                   <div className="text-white text-sm">10%</div>
                 </div>
               </div>
            </div>
          </motion.div>
          
          {/* Right Side - Token Info */}
          <div>
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{t('tokenomics.earn.title')}</h3>
              <p className="text-light">{t('tokenomics.earn.description')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{t('tokenomics.utility.title')}</h3>
              <p className="text-light">{t('tokenomics.utility.description')}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;