import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
const experiences = [
  {
    title: "CEO & Co-Founder",
    company: "Anviro",
    duration: "2025 - Present",
    description:
      "Co-Founded Anviro, a Custom Software and AI development company that helps businesses 10x their productivity.",
    type: "work",
  },
];

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "FAST NUCES",
    duration: "Sep-2021 - May-2025",
    description: "Driven by a passion for computers and inspired by the dot com boom, I pursued a bachelor's degree in computer science, embraced every challenge, and built a strong foundation in software and technology.",
    type: "education",
  },
];

const certifications = [
  {
    title: 'Machine Learning Specialization ',
    issuer: 'Stanford',
    link: ''
  },
  {
    title: 'AWS Fundamenetals Specialization',
    issuer: 'AWS',
    link: ''
  },
  {
    title: 'Generative-AI with LLM',
    issuer: 'AWS',
    link: ''
  },
  {
    title: 'Learn TypeScript',
    issuer: 'Scrimba',
    link: 'https://www.coursera.org/account/accomplishments/verify/J56TCTS64GZU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    link: 'https://www.coursera.org/account/accomplishments/verify/CHS21TROS95J'
  },
  {
    title: 'Neo4j Fundamentals',
    issuer: 'Neo4j',
    link: 'https://graphacademy.neo4j.com/c/ae4e2ddc-3170-44bc-98bf-69059bb74115/'
  },
  {
    title: 'Joining Data in SQL',
    issuer: 'DataCamp',
    /*image: `${process.env.PUBLIC_URL}/certificatejoin.pdf`,*/
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a2720ed7821dd33e07fba59f028f6ab955cf3eb1'
  },
  {
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
   
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/325f0058e128c7f3ee22b16becd3607da1d6b32e'
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    
    link: 'https://www.credly.com/badges/db9ef061-2a6e-476a-8a6f-11e6c085ce8c'
  },
  {
    title: 'Introduction to Kubernetes',
    issuer: 'Data Camp',
   
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/7ead5ee2a8f4a5177fc6585463da855b62ed2247'
  },
  {
    title: ' Introduction to Natural Language Processing in Python',
    issuer: 'Data Camp',
    
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/7ead5ee2a8f4a5177fc6585463da855b62ed2247'
  },  {
    title: ' Understanding Data Engineering',
    issuer: 'Data Camp',
   
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/bb75943e6b4cddf407f6409cc7390fd4e0776fba'
  }
];
export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Work Experience Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Briefcase className="h-8 w-8 mr-3 text-blue-400" />
                Work Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                    <p className="mt-2 text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <GraduationCap className="h-8 w-8 mr-3 text-blue-400" />
                Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                    <p className="text-blue-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.duration}</p>
                    <p className="mt-2 text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 hover:text-blue-300 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <p className="text-blue-400">{cert.issuer}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}