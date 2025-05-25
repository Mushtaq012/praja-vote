import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Shield, Lock, Eye, Server, Code, BlocksIcon } from 'lucide-react';

const technologies = [
  {
    id: 'zkp',
    title: 'Zero-Knowledge Proofs',
    description: 'Non-interactive zero-knowledge proofs allow verification without revealing secret information',
    icon: Shield
  },
  {
    id: 'encryption',
    title: 'Homomorphic Encryption',
    description: 'Allows computation on encrypted data without revealing the underlying values',
    icon: Lock
  },
  {
    id: 'verification',
    title: 'End-to-End Verifiability',
    description: 'Enables voters to verify their votes were correctly counted without compromising privacy',
    icon: Eye
  },
  {
    id: 'distributed',
    title: 'Distributed Systems',
    description: 'Fault-tolerant architecture that prevents single points of failure',
    icon: Server
  },
  {
    id: 'smart-contracts',
    title: 'Smart Contracts',
    description: 'Self-executing contracts with the terms directly written into code',
    icon: Code
  },
  {
    id: 'secure-storage',
    title: 'Secure Data Storage',
    description: 'Encrypted and distributed storage techniques to protect sensitive voter information',
    icon: BlocksIcon
  }
];

const Technologies: React.FC = () => {
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
        staggerChildren: 0.1
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
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Technologies Used
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge cryptographic and distributed systems technologies powering our secure voting solution
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map(tech => (
            <motion.div
              key={tech.id}
              variants={itemVariants}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <tech.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{tech.title}</h3>
              </div>
              <p className="text-gray-600">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;