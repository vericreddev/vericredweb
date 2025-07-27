import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      number: '01',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description')
    },
    {
      number: '02',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description')
    },
    {
      number: '03',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description')
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-primary/30">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('howItWorks.title')}
        </motion.h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 transform md:translate-x-[-0.5px] hidden md:block" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-lg z-10">
                  {step.number}
                </div>
                
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-light">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;