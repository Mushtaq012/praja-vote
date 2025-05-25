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
    name: 'Mr. Hussain Rizmy',
    role: 'Leader, ZKP integration and Secuirty Tester',
    bio: 'A final-year Cyber Security undergraduate at SLIIT, specializing in Zero-Knowledge Proofs and cryptographic protocols. He contributed to the Praja Vote project by designing a privacy-preserving ZKP-based voting system.',
    imageUrl: `${BASE_URL}images/hussain.jpg`, // 
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/seyyed-rizmy/',
      email: 'seyyedrizmy@gmail.com'
    }
  },
  {
    id: 'member-2',
    name: 'Michael Chen',
    role: 'Cryptography Researcher',
    bio: 'Ph.D. candidate focusing on zero-knowledge proofs and their applications in privacy-preserving systems.',
    imageUrl: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      github: '#',
      linkedin: '#',
      email: 'mailto:researcher2@example.com'
    }
  },
  {
    id: 'member-3',
    name: 'Sarah Johnson',
    role: 'Systems Architect',
    bio: 'Expert in distributed systems design with a focus on security and scalability in mission-critical applications.',
    imageUrl: 'https://images.pexels.com/photos/5212692/pexels-photo-5212692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      github: '#',
      linkedin: '#',
      email: 'mailto:researcher3@example.com'
    }
  },
  {
    id: 'member-4',
    name: 'David Nkosi',
    role: 'UX Researcher',
    bio: 'Specializes in human-computer interaction and designing usable security interfaces for diverse user groups.',
    imageUrl: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      github: '#',
      linkedin: '#',
      email: 'mailto:researcher4@example.com'
    }
  }
];

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
      <div className="container mx-auto px-6">
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
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map(member => (
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
        </motion.div>
      </div>
    </section>
  );
};

export default Team;