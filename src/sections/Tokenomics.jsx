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
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Token Circle */}
              <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse"></div>
              
              {/* Token Distribution Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#38BDF8" strokeWidth="3" strokeDasharray="251.2" strokeDashoffset="0" />
                  
                  {/* Ecosystem Fund - 40% */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#38BDF8" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="150.72" />
                  
                  {/* Team & Advisors - 20% */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#0EA5E9" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="200.96" transform="rotate(144 50 50)" />
                  
                  {/* Community & Early Supporters - 15% */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#0284C7" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="213.52" transform="rotate(216 50 50)" />
                  
                  {/* Foundation Reserve - 15% */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#0369A1" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="213.52" transform="rotate(270 50 50)" />
                  
                  {/* Public Sale / Liquidity - 10% */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#075985" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="225.08" transform="rotate(324 50 50)" />
                  
                  {/* Center VRC */}
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">$VRC</text>
                </svg>
              </div>
              
              {/* Labels */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-accent font-semibold text-xs">Ecosystem Fund</div>
                <div className="text-light text-xs">40%</div>
              </div>
              
              <div className="absolute top-2 -right-8 transform text-center">
                <div className="text-accent font-semibold text-xs">Team & Advisors</div>
                <div className="text-light text-xs">20%</div>
              </div>
              
              <div className="absolute bottom-2 right-2 transform text-center">
                <div className="text-accent font-semibold text-xs">Community</div>
                <div className="text-light text-xs">15%</div>
              </div>
              
              <div className="absolute bottom-2 left-2 transform text-center">
                <div className="text-accent font-semibold text-xs">Foundation</div>
                <div className="text-light text-xs">15%</div>
              </div>
              
              <div className="absolute top-2 -left-8 transform text-center">
                <div className="text-accent font-semibold text-xs">Public Sale</div>
                <div className="text-light text-xs">10%</div>
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