import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Abstract: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="abstract" 
      className="py-20 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">
            Research Abstract
          </h2>
          
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              This research project explores the application of Zero-Knowledge Proofs (ZKPs) in developing a secure, 
              transparent, and privacy-preserving electronic voting system called "Praja Vote." Traditional electronic 
              voting systems face significant challenges in balancing the seemingly contradictory requirements of 
              voter privacy and election verifiability. Our approach leverages advanced cryptographic techniques to 
              create a system where voters can verify their votes were correctly counted without revealing their 
              voting choices, while election authorities can verify the validity of all votes without learning 
              individual voting patterns.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              The Praja Vote system aims to enhance democratic processes by providing a cryptographically secure 
              foundation that ensures ballot secrecy, end-to-end verifiability, and resistance to manipulation. 
              Our implementation addresses key challenges in current voting systems, including coercion resistance, 
              accessibility, and scalability. This research contributes to the ongoing academic discourse on secure 
              electronic voting and presents a viable framework for real-world deployment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Abstract;