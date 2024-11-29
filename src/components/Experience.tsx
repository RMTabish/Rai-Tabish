import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "Technology Program Intern",
    company: "Knodemy",
    duration: "September 2024 - Present",
    description:
      "Created curriculum on programming fundamentals and data structures for young learners. Building an inhouse web-based Learning Management System in MERN stack with a focus on content delivery, collaboration, and responsive design.",
    type: "work",
  },
  {
    title: "Freelancer",
    company: "Fiverr",
    duration: "January 2023 - Present",
    description:
      "Completed 15+ projects in image processing, .NET desktop applications (C++, C#, OpenCV, Python). Achieved consistent 5-star ratings, earning a Level 1 badge within one month.",
    type: "work",
  },
  {
    title: "CS Lab Demonstrator",
    company: "FAST NUCES, Islamabad",
    duration: "Sep 2024 - Jan 2024",
    description:
      "Taught Programming Fundamentals to over 50 first-year students, assisting with course design and evaluation. Guided students in algorithm development and provided hands-on practice with Linux OS and C++ programming.",
    type: "work",
  },
  {
    title: "Head of Sponsorship",
    company: "FAST Computing Society",
    duration: "January 2023 - January 2024",
    description:
      "Curated the sponsorship team, designed proposals, and liaised with potential sponsors. Collaborated with other teams to organize hackathons and events throughout 2023-2024.",
    type: "work",
  },
  {
    title: "Member",
    company: "FAST Literary Society",
    duration: "Sep 2021 - Dec 2023",
    description:
      "Actively participated in organizing literary events and fostering a collaborative environment for members. Supported event planning and engagement initiatives to promote literary activities on campus.",
    type: "work",
  },
  {
    title: "Android Development Intern",
    company: "Code Knitters – NSTP, Islamabad",
    duration: "May 2023 - Jul 2023",
    description:
      "Developed an Android dictionary app with Kotlin and Android Studio, integrating API for definitions and synonyms. Gained experience with Kotlin, version control (Git), and collaboration in a startup environment.",
    type: "work",
  },
  {
    title: "Game Development Intern",
    company: "AirDev (Remote)",
    duration: "January 2022 - April 2022",
    description:
      "Collaborated on a game development project using Unity, designing 3D assets in Blender. Built a Fruit Slicer game for Android and Windows, enhancing skills in game design and C# scripting.",
    type: "work",
  },
  {
    title: "CS Lab Demonstrator",
    company: "FAST NUCES, Islamabad",
    duration: "January 2023 - November 2023",
    description:
      "Guided students retaking Programming Fundamentals, focusing on C++ and Linux OS. Adapted teaching style to diverse learning needs, improving students’ programming and problem-solving skills.",
    type: "work",
  },
];

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "FAST NUCES",
    duration: "Sep-2021 - May-2025",
    description: "Relevant Courses: Artificial Intelligence, Statistical Modeling, Blockchain, Data Engineering, Database Management,Computer Networks, Information and security, Ethical Hacking, Data Structures & Algorithms, OOP, Operating Systems,C++ Program Design, Database Management Systems.",
    type: "education",
  },
  {
    title: "Fellow of Science in Pre-Engineering",
    institution: "I-M-C-B 1-8/3",
    duration: "Jan-2019 - June-2021",
    //description: "Relevant Courses: Artificial Intelligence, Statistical Modeling, Blockchain, Data Engineering, Database Management,Computer Networks, Information and security, Ethical Hacking, Data Structures & Algorithms, OOP, Operating Systems,C++ Program Design, Database Management Systems.",
    type: "education",
  },
];

const certifications = [

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="h-8 w-8 mr-3 text-blue-600" />
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.duration}</p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="h-8 w-8 mr-3 text-blue-600" />
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900">{edu.title}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.duration}</p>
                  <p className="mt-2 text-gray-700">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h2>
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                <p className="text-blue-600">{cert.issuer}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
