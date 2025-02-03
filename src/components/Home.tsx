import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm Rai Muhammad Tabish
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate Computer Scientist who gets things done.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/RMTabish"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rai-muhammad-tabish/"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:raimuhammadtabish@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+923039222567"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-w-1 aspect-h-1">
          <img
            src={`${import.meta.env.BASE_URL}nicatDP.jpeg`}
            alt="Coding workspace"
            className="rounded-full shadow-xl object-cover w-65 h-65"
          />

          </div>
        </div>
      </motion.div>

      <div className="mt-16 text-center">
        <Link to="/projects">
          <div className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-pointer group">
            <span className="mr-2">View My Work</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
        <a
  href="/Rai Tabish FAST-NUCES-ISB.pdf"
  download="Rai Tabish FAST-NUCES.pdf"
  className="inline-flex items-center px-4 py-2 mt-4 border border-gray-600 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-colors duration-200 cursor-pointer group"
>
  <span className="mr-2">Download Resume</span>
  <svg
    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12l6 6M10 18l10-10"
    />
  </svg>
</a>


      </div>
    </div>
  );
}
