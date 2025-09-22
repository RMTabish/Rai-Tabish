import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ParticlesBackground from "../components/ParticlesBackground";
import Chatbot from "./Chatbot";

export default function Home() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showChat, setShowChat] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Rai Muhammad Tabish
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              We all know what we've to do
            </p>
            <p className="text-lg text-blue-400 mb-8">
              CEO and Co-Founder of Anviro, I love to build.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/RMTabish" className="text-gray-400 hover:text-blue-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/rai-muhammad-tabish/" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:ra.tabish@anviro.net" className="text-gray-400 hover:text-blue-400">
                <Mail className="h-6 w-6" />
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
            </div>
          </Link>
        </div>
      </div>

      {/* Chatbot Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents event conflicts
          setShowChat(!showChat);
        }}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chatbot Component */}
      {showChat && (
        <div className="fixed bottom-16 right-6 z-50">
          <Chatbot onClose={() => setShowChat(false)} />
        </div>
      )}
    </div>
  );
}