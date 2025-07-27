import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Roadmap = () => {
  const { t } = useTranslation();
  
  const milestones = [
    {
      period: t('roadmap.q3_2025.period'),
      title: t('roadmap.q3_2025.title'),
      description: t('roadmap.q3_2025.description')
    },
    {
      period: t('roadmap.q4_2025.period'),
      title: t('roadmap.q4_2025.title'),
      description: t('roadmap.q4_2025.description')
    },
    {
      period: t('roadmap.q1_2026.period'),
      title: t('roadmap.q1_2026.title'),
      description: t('roadmap.q1_2026.description')
    },
    {
      period: t('roadmap.q2_2026.period'),
      title: t('roadmap.q2_2026.title'),
      description: t('roadmap.q2_2026.description')
    },
    {
      period: t('roadmap.future.period'),
      title: t('roadmap.future.title'),
      description: t('roadmap.future.description')
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-primary/30">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('roadmap.title')}
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-16 h-0.5 bg-accent/30 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Circle on Timeline */}
                <div className="hidden md:block absolute left-1/2 top-16 w-4 h-4 rounded-full bg-accent transform -translate-x-1/2 -translate-y-1/2 z-10" />
                
                {/* Period */}
                <div className="text-accent font-semibold text-lg mb-4 md:text-center">{milestone.period}</div>
                
                {/* Content */}
                <div className="md:pt-10">
                  <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-light text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;