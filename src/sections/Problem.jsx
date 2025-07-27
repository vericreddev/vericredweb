import React from 'react';
import Card from '../components/Card';
import DocumentBroken from '../assets/icons/DocumentBroken';
import ScaleUnbalanced from '../assets/icons/ScaleUnbalanced';
import LinkBroken from '../assets/icons/LinkBroken';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Problem = () => {
  const { t } = useTranslation();
  
  const problems = [
    {
      icon: DocumentBroken,
      title: t('problem.card1.title'),
      content: t('problem.card1.content')
    },
    {
      icon: ScaleUnbalanced,
      title: t('problem.card2.title'),
      content: t('problem.card2.content')
    },
    {
      icon: LinkBroken,
      title: t('problem.card3.title'),
      content: t('problem.card3.content')
    }
  ];

  return (
    <section id="problem" className="py-20">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('problem.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              icon={problem.icon}
              title={problem.title}
              content={problem.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;