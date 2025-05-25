import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  BookOpen,
  Search,
  Target,
  HelpCircle,
  CheckSquare,
  FlaskRound as Flask
} from 'lucide-react';

const researchSections = [
  {
    id: 'domain',
    title: 'Domain Overview',
    icon: BookOpen,
    content:
      'Electronic voting represents a critical intersection of cryptography, cybersecurity, and democratic processes. This research explores how Zero-Knowledge Proofs, a powerful cryptographic technique, can address the inherent tensions between transparency, privacy, and security in voting systems.'
  },
  {
    id: 'literature',
    title: 'Literature Survey',
    icon: Search,
    content:
      'Our comprehensive review examined over 75 papers across cryptographic voting protocols, practical implementation challenges, and user experience considerations. Key findings highlight the evolution from mixnet-based approaches to modern ZKP-based solutions.'
  },
  {
    id: 'gap',
    title: 'Research Gap',
    icon: Target,
    content:
      'Current systems struggle to balance cryptographic security with practical usability. Most solutions either compromise privacy for verifiability or sacrifice transparency for confidentiality, creating a clear need for innovation.'
  },
  {
    id: 'problem',
    title: 'Problem Statement',
    icon: HelpCircle,
    content:
      'How can we implement Zero-Knowledge Proofs in electronic voting to guarantee ballot secrecy and end-to-end verifiability while maintaining usability for the general public?'
  },
  {
    id: 'objectives',
    title: 'Research Objectives',
    icon: CheckSquare,
    content: [
      'Design a ZKP-based voting protocol ensuring privacy and verification',
      'Implement a proof-of-concept system',
      'Evaluate security against comprehensive threat models',
      'Assess usability with diverse participant groups',
      'Develop real-world deployment guidelines'
    ]
  },
  {
    id: 'methodology',
    title: 'Methodology',
    icon: Flask,
    content:
      'Our approach combines formal security analysis, software implementation, and empirical evaluation, following rigorous academic standards and industry best practices.'
  }
];

const ResearchSections: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Research Framework
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to developing a secure voting system based on Zero-Knowledge Proofs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {researchSections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Icon className="text-blue-600 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 ml-4">{section.title}</h3>
                  </div>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2 text-gray-600 flex-grow">
                      {section.content.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 leading-relaxed flex-grow">{section.content}</p>
                  )}
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-orange-500 mt-auto"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSections;
