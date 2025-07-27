import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ icon: Icon, title, content }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <Icon />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-light text-sm">{content}</p>
      </div>
    </motion.div>
  );
};

export default Card;