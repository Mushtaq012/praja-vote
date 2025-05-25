import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  fileName: string;
}

const documents: Document[] = [
  {
    id: 'research-paper-main',
    title: 'Research Paper – ZKP-Based Secure Voting',
    description: 'Final IEEE-formatted research paper describing the combined Praja Vote framework using zk-SNARKs, MPC, HE, and Taint Analysis.',
    date: 'May 2025',
    type: 'PDF',
    fileName: 'Zero-Knowledge Proofs for Secure and Private Voting Systems.pdf'
  },
  {
    id: 'final-report-group',
    title: 'Final Group Research Report',
    description: 'Combined report detailing the full research on the ZKP-based secure voting system.',
    date: 'May 2025',
    type: 'PDF',
    fileName: '24-25J-136 - Final Report.pdf'
  },
  {
    id: 'srs-document',
    title: 'Software Requirements Specification (SRS)',
    description: 'Detailed functional and non-functional requirements of the system.',
    date: 'April 2025',
    type: 'PDF',
    fileName: 'Software Requirements Specification (SRS) of 24-25J-136.pdf'
  },
  {
    id: 'final-report-shevon',
    title: 'Final Report - Shevon (HE Module)',
    description: 'Individual report by Shevon Perera focusing on Homomorphic Encryption.',
    date: 'April 2025',
    type: 'PDF',
    fileName: 'IT 21 2789 76  - Final Report.pdf'
  },
  {
    id: 'final-report-mushtaq',
    title: 'Final Report - Mushtaq (MPC Counting)',
    description: 'Individual report by Mushtaq M.B.M on vote counting via MPC.',
    date: 'April 2025',
    type: 'PDF',
    fileName: 'IT 21 3039 20 - Final Report.pdf'
  },
  {
    id: 'final-report-rafeek',
    title: 'Final Report - Rafeek (Taint Tracking)',
    description: 'Individual report by Rafeek A.M. focusing on taint tracking and visualization.',
    date: 'April 2025',
    type: 'PDF',
    fileName: 'IT 21 3182 52 - Final report.pdf'
  },
  {
    id: 'final-report-hussain',
    title: 'Final Report - Hussain (ZKP Module)',
    description: 'Individual report by Hussain M.R.S. on Zero-Knowledge Proof integration.',
    date: 'April 2025',
    type: 'PDF',
    fileName: 'IT 21 3616 54 - Final Report.pdf'
  },
  {
    id: 'presentation-pp1',
    title: 'Project Presentation (PP1)',
    description: 'First evaluation presentation of the e-voting research project.',
    date: 'December 2024',
    type: 'PPTX',
    fileName: 'PP1_24_25J_136 .pptx'
  },
  {
    id: 'presentation-pp2',
    title: 'Project Presentation (PP2)',
    description: 'Second evaluation presentation showing 90% implementation.',
    date: 'March 2025',
    type: 'PPTX',
    fileName: 'PP2_24_25J_136 .pptx'
  },
  {
    id: 'proposal-shevon',
    title: 'Proposal Report – Shevon (HE Module)',
    description: 'Initial proposal outlining the HE-based privacy-preserving mechanism for the e-voting system.',
    date: 'August 2024',
    type: 'PDF',
    fileName: 'Proposal Report - IT 21278976.pdf'
  },
  {
    id: 'proposal-mushtaq',
    title: 'Proposal Report – Mushtaq (MPC Counting)',
    description: 'Project proposal focusing on secure vote counting via additive secret sharing and MPC.',
    date: 'August 2024',
    type: 'PDF',
    fileName: 'Proposal Report - IT 21303920.pdf'
  },
  {
    id: 'proposal-rafeek',
    title: 'Proposal Report – Rafeek (Taint Analysis)',
    description: 'Proposal focusing on dynamic taint analysis for preventing malware manipulation of votes.',
    date: 'August 2024',
    type: 'PDF',
    fileName: 'Proposal Report - IT 21318252.pdf'
  },
  {
    id: 'proposal-hussain',
    title: 'Proposal Report – Hussain',
    description: 'Proposal focusing on scalable ZKP voting to ensure voter privacy and result verifiability.',
    date: 'August 2024',
    type: 'PDF',
    fileName: 'Proposal Report - IT 21361654.pdf'
  }

];

const DocumentsPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Research Documents
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access and download project deliverables, reports, and presentations from the Praja Vote research.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {documents.map(doc => (
            <motion.div
              key={doc.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <FileText className="text-blue-600" size={24} />
                  <span className="text-xs font-medium bg-blue-100 text-blue-600 py-1 px-2 rounded">
                    {doc.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{doc.date}</span>
                  <div className="flex space-x-2">
                    <a
                      href={`/docs/reports/${doc.fileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                    >
                      <Eye size={18} />
                    </a>
                    <a
                      href={`/docs/reports/${doc.fileName}`}
                      download
                      className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors duration-300"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DocumentsPage;
