import React from 'react';
import Hero from '../sections/Hero';
import Abstract from '../sections/Abstract';
import ResearchSections from '../sections/ResearchSections';
import Technologies from '../sections/Technologies';
import Milestones from '../sections/Milestones';
import Team from '../sections/Team';
import ContactForm from '../sections/ContactForm';
import { FileText, Eye, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const BASE_URL = import.meta.env.BASE_URL;

const previewDocs = [
  {
    title: 'Group Final Report',
    description: 'Comprehensive documentation of our complete research journey.',
    fileName: '24-25J-136 - Final Report.pdf',
    type: 'PDF'
  },
  {
    title: 'IEEE Research Paper',
    description: 'Our published paper on ZKP-secured voting systems.',
    fileName: 'Zero-Knowledge Proofs for Secure and Private Voting Systems.pdf',
    type: 'PDF'
  },
  {
    title: 'SRS Document',
    description: 'Full specification of software functionality and design.',
    fileName: 'Software Requirements Specification (SRS) of 24-25J-136.pdf',
    type: 'PDF'
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Abstract />
      <ResearchSections />
      <Technologies />
      <Milestones />
      <Team />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Featured Documents</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previewDocs.map((doc, index) => {
              const fileUrl = `${BASE_URL}docs/reports/${doc.fileName}`;
              return (
                <div key={index} className="bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-center mb-3">
                    <FileText className="text-blue-500" />
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{doc.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{doc.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                  <div className="flex space-x-2">
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
                    >
                      <Eye size={16} />
                    </a>
                    <a
                      href={fileUrl}
                      download
                      className="p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition"
                    >
                      <Download size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/documents"
              className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View All Documents
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default HomePage;
