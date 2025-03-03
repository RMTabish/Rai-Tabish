import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useState,useRef } from 'react';
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";



const projects = [
  {
    title: "DataKaleidos (FYP)",
    description: "An GraphRAG driven data analytics tool which entertain the user queries about the CPG industries and respond to them with insights, visualizations and suggestions along with ability to scrape large scale data from all around internet (USER: In my Islamabad store what item should should i start selling more? DataKaleidos: Based on your user review and sales history the best product to sell in islamabad is burgers, here is a Graph chart that shows how its sales grew over the past 2 months ).",
    technologies: ["Python","Natural Language Processing (NLP)", "Apache Airflow","Web Scraping","LAMA-3","Knowledge Graphs","Kubernetes","Amazon Web Services (AWS)", "ETL", "Neo4j"],
    imageUrl: `/Project Thumbnail Template (datakal) (1).png`,
    github: "https://www.linkedin.com/posts/rai-muhammad-tabish_datascience-nlp-webscraping-activity-7253391747341312000-VdbO",
    features: ["NLP-Driven Query Interface","Custom Visualizations and Reporting","Sentiment Analysis and Trend Prediction","Integrated Historical and Real-Time Insights"]
  },
  {
    title: "FLIR Lepton Camera Control and Viewer",
    description: "Developed a Python-based thermal camera viewer for FLIR Lepton with advanced features like radiometry, manual FFC, PiP freeze frame, and GPU-optimized image processing using cuda, delivered as an auto-launching Ubuntu application.",
    technologies: ["Python", "OpenCV", "Lepton UVC Control","CUDA","PyQt","Thermal Cameras"],
    imageUrl: `/Project Thumbnail Template (lepton).png`,
    /*Thermal Imaging: "https://github.com/RMTabish/food-slicer",*/
    features: ["Thermal Imaging","Picture-in-Picture (PiP) Mode","GPU-Enhanced Image Processing"]
  },  {
    title: "Advanced Surveillance System",
    description: "A comprehensive surveillance solution integrating thermal cameras, telescopic cameras, and short-range cameras into a unified system. The application provides seamless control over all devices, leveraging AI-powered features such as object detection and tracking. Designed for efficiency, it runs on custom hardware for optimal performance.",    
    imageUrl: `https://instrumentation.obs.carnegiescience.edu/FourStar/Old_version/cross_section.jpg`,
    technologies: ["C#","OpenCV","Python","SDK", "C++", "Yolo"]
  }, {
    title: "Desktop Video Calling App",
    description: "It is an in-house streaming application currently deployed on the local network, enabling users to join and start video and audio streaming sessions seamlessly. The tech stack includes Python, with Flask handling the backend for managing streaming sessions and connections. OpenCV and PyAudio are integrated to facilitate real-time video and audio capture and transmission. Socket programming ensures seamless communication between the client and server, while the user interface is implemented using Tkinter, providing an intuitive platform for users to effortlessly start and join streams.",
    imageUrl: `/Project Thumbnail Template (callinapp).png`,
    github: "",
    technologies: ["Python","OpenCV","Web Sockets","Tkinter"]
  },
  {
    title: "Blockchain Assistant",
    description: "Developed a lightweight, CPU-optimized assistant using a quantized Llama 2 model. The model is fine-tuned on a Blockchain book to answer domain-specific questions efficiently on devices without GPU support.",
    technologies: ["Llama 2", "PyTorch", "Quantization", "Natural Language Processing", "Blockchain"],
    imageUrl: "https://llama-2.ai/wp-content/uploads/2023/09/Llama-2-Model-Details.png", 
    features: [
      "Efficient CPU-based inference",
      "Fine-tuned on Blockchain data",
      "Real-time Blockchain query answering"
    ],
    repository: "https://github.com/RMTabish/Blockchain_assistant"
  },  
  {
    title: "Coin612 Controller Application",
    description: "A desktop application for controlling Coin612 Thermal Camera, featuring real-time monitoring and control capabilities.",
    imageUrl: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
    github: "https://github.com/RMTabish/Coin612_Controller_Application",
    technologies: ["Python", "PyQt","SDK","C++","OpenCV","Serial Communication"]
  },
  {
    title: "Car Rental Website",
    description: "Developed a responsive car rental platform using MERN enabling secure bookings, vehicle listings, and seamless user experience across devices.",
    technologies: ["REACT.js", "MongoDB", "Express","HTML","CSS","JavaScript"],
    imageUrl: `/Project Thumbnail Template (carrental).png`,
    github: "https://github.com/Web-Project-CarRental/Web-Project-CarRental.github.io",
    features: ["Car Booking System", "Vehicle Listing for Owners", "Responsive design"]
  },
  {
    title: "Brick Breaker Game in Assembly Language (x86 MASM)",
    description: "A graphical Brick Breaker game implemented in x86 Assembly Language using Microsoft Macro Assembler (MASM). The game features colorful graphics, sound effects, multiple levels, and responsive controls, offering an engaging experience while demonstrating low-level programming concepts.",
    technologies: ["x86 Assembly", "MASM", "DOSBox Emulator", "Low-Level Programming", "Graphics Programming"],
    imageUrl: `/Project Thumbnail Template (brickbreaker).png`,
    features: [
      "Colorful graphics created using assembly code",
      "Basic sound effects for an enhanced experience",
      "Multiple levels with increasing difficulty",
      "Responsive paddle controls using keyboard arrow keys"
    ],
    repository: "https://github.com/RMTabish/x86-MASM-Brick-Breaker",
    usage: [
      "Control the paddle using arrow keys",
      "Keep the ball in play to break all bricks",
      "Advance to the next level after clearing all bricks"
    ]
  }
,  
  {
    title: "Food Slicer",
    description: "A user frienldy 3D game developed in Using Unity engine and blender to design the assests.",
    technologies: ["Unity3D", "C#", "Blender","OOP"],
    imageUrl: `/slicer.jpg`,
    github: "https://github.com/RMTabish/food-slicer",
    features: ["3D"]
  },

  {
    title: "Fast Society Management System",
    description: "A comprehensive management system Societies with consistement database management for universities to mange there club's announcments and members and to streamline the organization process.",
    imageUrl: `/Project Thumbnail Template (mng).png`,
    github: "https://github.com/RMTabish/Fast-Society-Management-s",
    technologies: ["C#","Database Design","Window forms","Google forms", "SQL Server"]
  },
 

];
export default function Projects() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState({});
  const projectRefs = useRef([]);

  const toggleDescription = (index) => {
    setExpanded((prev) => {
      const newExpanded = { ...prev, [index]: !prev[index] };

      if (newExpanded[index]) {
        // Scroll back to the project card smoothly after expansion
        projectRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      return newExpanded;
    });
  };

  return (
    <div className="relative z-10 min-h-screen bg-black text-white">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                ref={(el) => (projectRefs.current[index] = el)} // Attach ref to each project
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="cursor-pointer bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:bg-gray-700 transition-shadow duration-300"
              >
                <div className="relative">
                  <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-64" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {expanded[index] ? project.description : `${project.description.substring(0, 100)}...`}
                  </p>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-blue-400 hover:underline focus:outline-none"
                  >
                    {expanded[index] ? "See Less" : "See More"}
                  </button>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}