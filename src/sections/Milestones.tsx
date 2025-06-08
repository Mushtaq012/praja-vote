import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const milestones = [
  {
    id: 'milestone-1',
    title: 'Project Initiation & Literature Review',
    date: 'September 2024',
    status: 'completed',
    description: 'Defined research scope, conducted comprehensive literature review, and identified key research gaps.'
  },
  {
    id: 'milestone-2',
    title: 'Protocol Design & Security Analysis',
    date: 'November 2024',
    status: 'completed',
    description: 'Designed the ZKP-based voting protocol and conducted formal security analysis to verify its properties.'
  },
  {
    id: 'milestone-3',
    title: 'Prototype Implementation',
    date: 'February 2025',
    status: 'completed',
    description: 'Developed a working prototype of the Praja Vote system implementing the core cryptographic protocols.'
  },
  {
    id: 'milestone-4',
    title: 'Security Testing & Refinement',
    date: 'March 2025',
    status: 'completed',
    description: 'Conducting comprehensive security testing and refining the implementation based on findings.'
  },
  {
    id: 'milestone-5',
    title: 'User Studies & Usability Improvements',
    date: 'April 2025',
    status: 'completed',
    description: 'Planning user studies with diverse participant groups to assess and improve system usability.'
  },
  {
    id: 'milestone-6',
    title: 'Final System Integration & Documentation',
    date: 'May 2025',
    status: 'completed',
    description: 'Completing the integration of all system components and preparing comprehensive documentation.'
  },
  {
    id: 'milestone-7',
    title: 'Final Presentation & Thesis Submission',
    date: 'May 2025',
    status: 'completed',
    description: 'Presenting research findings to the academic committee and submitting the final thesis document.'
  }
];

const Milestones: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'in-progress':
        return 'text-orange-600 bg-orange-100';
      case 'upcoming':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const visibleMilestones = expanded ? milestones : milestones.slice(0, 4);

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
            Project Milestones
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our research journey and progress towards developing the Praja Vote system
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence>
            {visibleMilestones.map((milestone) => (
              <motion.div
                key={milestone.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <CheckCircle2
                        className={milestone.status === 'completed' ? 'text-green-600' : 'text-gray-300'}
                        size={20}
                      />
                      <h3 className="text-xl font-bold text-gray-800 ml-3">{milestone.title}</h3>
                    </div>
                    <span
                      className={`text-sm font-medium py-1 px-3 rounded-full ${getStatusColor(
                        milestone.status
                      )}`}
                    >
                      {milestone.status === 'completed'
                        ? 'Completed'
                        : milestone.status === 'in-progress'
                        ? 'In Progress'
                        : 'Upcoming'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{milestone.description}</p>
                  <div className="text-sm text-gray-500">Target Date: {milestone.date}</div>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-orange-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition"
          >
            {expanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="ml-2" size={20} />
              </>
            ) : (
              <>
                <span>Show All Milestones</span>
                <ChevronDown className="ml-2" size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
