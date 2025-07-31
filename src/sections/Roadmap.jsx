import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Roadmap = () => {
  const { t } = useTranslation();
  
  const phases = [
    {
      period: t('roadmap.phase1.period'),
      title: t('roadmap.phase1.title'),
      tasks: t('roadmap.phase1.tasks', { returnObjects: true })
    },
    {
      period: t('roadmap.phase2.period'),
      title: t('roadmap.phase2.title'),
      tasks: t('roadmap.phase2.tasks', { returnObjects: true })
    },
    {
      period: t('roadmap.phase3.period'),
      title: t('roadmap.phase3.title'),
      tasks: t('roadmap.phase3.tasks', { returnObjects: true })
    },
    {
      period: t('roadmap.phase4.period'),
      title: t('roadmap.phase4.title'),
      tasks: t('roadmap.phase4.tasks', { returnObjects: true })
    },
    {
      period: t('roadmap.phase5.period'),
      title: t('roadmap.phase5.title'),
      tasks: t('roadmap.phase5.tasks', { returnObjects: true })
    }
  ];

  return (
    <section id="roadmap" className="pt-20 pb-10 bg-primary/30">
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
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline Circle */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-accent z-10 transform -translate-x-1/2" />
                
                {/* Content */}
                <div className={`bg-primary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 w-full md:w-96 hover:border-accent/40 transition-colors ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  {/* Period */}
                  <div className="text-accent font-semibold text-lg mb-2">{phase.period}</div>
                  
                  {/* Title */}
                  <h3 className="text-white font-bold text-xl mb-4">{phase.title}</h3>
                  
                  {/* Tasks */}
                  <ul className="space-y-2">
                    {phase.tasks && phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-light text-sm flex items-start">
                        <span className="text-accent mr-2 mt-1 text-xs">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
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