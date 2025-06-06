import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Github, Linkedin, Mail } from 'lucide-react';
const BASE_URL = import.meta.env.BASE_URL;

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Kavinga Y.',
    role: 'Supervisor, Cyber Security Undergraduate Program Coordinator | Senior Lecturer',
    bio: 'An experienced academic specializing in software engineering and cybersecurity. Provided expert guidance on secure development and cryptographic protocols, ensuring the project met high academic and industry standards.',
    imageUrl: `${BASE_URL}images/Kavinga Sir.jpeg`,
    socialLinks: {
      linkedin: '#',
      email: 'kavinga.y@sliit.lk'
    }
  },
  {
    id: 'member-2',
    name: 'Hansika M.',
    role: 'Assistant Supervisor',
    bio: 'A knowledgeable researcher focused on system design and security. She supported the team with technical insights and ensured smooth integration of project components.',
    imageUrl: `${BASE_URL}images/Hansika Madam.jpeg`,
    socialLinks: {
      linkedin: '#',
      email: 'hansika.m@sliit.lk'
    }
  },
  {
    id: 'member-3',
    name: 'Hussain M.R.S',
    role: 'Leader, ZKP integration and Security Tester',
    bio: 'A final-year Cyber Security undergraduate at SLIIT, specializing in Zero-Knowledge Proofs and cryptographic protocols. He contributed to the Praja Vote project by designing a privacy-preserving ZKP-based voting system.',
    imageUrl: `${BASE_URL}images/hussain.jpg`,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/seyyed-rizmy/',
      email: 'seyyedrizmy@gmail.com'
    }
  },
  {
    id: 'member-4',
    name: 'Perera U.L.S.A',
    role: 'Cryptography Researcher',
    bio: 'Final-year undergraduate student at the Sri Lanka Institute of Information Technology, specializing in Information Security Auditing. Contributed to the Prajā Vote project by implementing homomorphic encryption within the secure electronic voting system.',
    imageUrl: `${BASE_URL}images/shevon.jpg`,
    socialLinks: {
      linkedin: '#',
      email: 'Shevonperera@gmail.com'
    }
  },
  {
    id: 'member-5',
    name: 'Rafeek A.M',
    role: 'Taint Analysis Engineer, Real-Time Input Validation & CFG Visualization',
    bio: 'A final-year Cyber Security undergraduate at SLIIT, specializing in taint analysis, secure input validation, and control flow graph (CFG) modeling. Contributed to the Praja Vote project by developing a Flask-based taint tracking system with real-time monitoring that detects and logs malicious inputs instantly. Integrated visual CFG representations to enhance transparency in data flow and decision-making.',
    imageUrl: `${BASE_URL}images/ammar.jpg`,
    socialLinks: {
      linkedin: '#',
      email: 'AmmarMuham@gmail.com'
    }
  },
  {
    id: 'member-6',
    name: 'Mushtaq M.B.M',
    role: 'MPC Vote Tallying, and General Tester',
    bio: 'A final-year Cyber Security undergraduate at SLIIT, focused on privacy-preserving cryptographic techniques. Contributed to the Praja Vote project by implementing secure vote tallying using Multi-Party Computation (MPC) and integrating the backend logic for threshold-based secret reconstruction.',
    imageUrl: `${BASE_URL}images/mushtaq.jpg`,
    socialLinks: {
      linkedin: '#',
      email: 'mailto:researcher4@example.com'
    }
  }
];

const supervisors = teamMembers.filter(member =>
  member.role.toLowerCase().includes('supervisor')
);

const researchTeam = teamMembers.filter(member =>
  !member.role.toLowerCase().includes('supervisor')
);

const Team: React.FC = () => {
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
      {/* Use a full-width container with no horizontal padding */}
      <div className="mx-auto max-w-screen-xl px-0">

        {/* Supervisors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Supervisors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our supervisors who guided and mentored the research team.
          </p>
        </motion.div>

        {/* Centered flex container for grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center mb-20"
        >
          {/* The grid itself with max width and auto margin */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1200px] mx-auto">
            {supervisors.map(member => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.socialLinks.github && (
                      <a
                        href={member.socialLinks.github}
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                        aria-label={`${member.name}'s Github`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a
                        href={member.socialLinks.email}
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Our Research Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated researchers behind the Praja Vote secure voting system
          </p>
        </motion.div>

        {/* Centered research team grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1200px] mx-auto">
            {researchTeam.map(member => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.socialLinks.github && (
                      <a
                        href={member.socialLinks.github}
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                        aria-label={`${member.name}'s Github`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a
                        href={member.socialLinks.email}
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;
