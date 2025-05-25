import React from 'react';
import { motion } from 'framer-motion';

interface SectionCardProps {
  id: string;
  title: string;
  content: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ id, title, content }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      id={id}
      variants={cardVariants}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-600 mb-4">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
      <div className="h-2 bg-gradient-to-r from-blue-500 to-orange-500"></div>
    </motion.div>
  );
};

export default SectionCard;