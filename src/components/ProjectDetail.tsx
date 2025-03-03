import { useParams, useNavigate } from "react-router-dom";

const projects = [
    {
      title: "DataKaleidos (FYP)",
      summary: "An AI-powered GraphRAG analytics tool that provides insights for the CPG industry.",
      problem: "Retailers struggle with data-driven decision-making and lack tools to analyze large-scale data efficiently.",
      solution: "Developed an AI-driven analytics system that processes user queries and provides interactive visual insights.",
      challenges: [
        "Handling large-scale unstructured data from multiple sources.",
        "Optimizing query response time while maintaining accuracy.",
        "Building a scalable architecture using Kubernetes and AWS."
      ],
      techStack: ["Python", "NLP", "Apache Airflow", "Web Scraping", "Llama-3", "Neo4j", "AWS"],
      timeline: "6 months",
      results: "Retailers improved decision-making, leading to a 15% increase in revenue based on insights.",
      features: ["NLP-Driven Query Interface", "Custom Visualizations", "Trend Predictions", "Real-Time Analytics"],
      demoVideo: "/demo-videos/datakal.mp4",
      github: "https://www.linkedin.com/posts/rai-muhammad-tabish_datascience-nlp-webscraping-activity-7253391747341312000-VdbO",
      imageUrl: "/Project Thumbnail Template (datakal) (1).png"
    },
    {
      title: "FLIR Lepton Camera Control and Viewer",
      summary: "A thermal imaging viewer with GPU-accelerated processing for FLIR Lepton cameras.",
      problem: "Existing tools for FLIR Lepton cameras lack real-time processing and advanced control options.",
      solution: "Built a Python-based application that integrates CUDA acceleration and PiP freeze frame capabilities.",
      challenges: [
        "Optimizing thermal image processing in real-time.",
        "Integrating Lepton SDK with a responsive UI.",
        "Ensuring compatibility across various Linux environments."
      ],
      techStack: ["Python", "OpenCV", "Lepton UVC Control", "CUDA", "PyQt"],
      timeline: "4 months",
      results: "Delivered a stable and optimized application for real-time thermal monitoring.",
      features: ["Thermal Imaging", "GPU-Enhanced Image Processing", "Manual FFC", "PiP Mode"],
      github: "https://github.com/RMTabish/FLIR-Lepton-Viewer",
      imageUrl: "/Project Thumbnail Template (lepton).png"
    },
    {
      title: "Advanced Surveillance System",
      summary: "An AI-powered multi-camera surveillance system with real-time object tracking.",
      problem: "Traditional surveillance systems lack AI-driven analysis and real-time automation.",
      solution: "Developed a unified surveillance system that integrates thermal and telescopic cameras with AI-powered tracking.",
      challenges: [
        "Synchronizing multiple camera feeds efficiently.",
        "Implementing YOLO for real-time object tracking.",
        "Optimizing video processing performance."
      ],
      techStack: ["C#", "OpenCV", "Python", "C++", "YOLO"],
      timeline: "8 months",
      results: "Enhanced security monitoring with automated detection and tracking.",
      features: ["Multi-Camera Integration", "AI-Powered Object Tracking", "Real-Time Monitoring"],
      github: "",
      imageUrl: "https://instrumentation.obs.carnegiescience.edu/FourStar/Old_version/cross_section.jpg"
    },
    {
      title: "Desktop Video Calling App",
      summary: "An internal video streaming app for local network-based video conferencing.",
      problem: "Existing video conferencing tools are resource-intensive and require internet connectivity.",
      solution: "Developed a lightweight video calling app using OpenCV, Flask, and WebSockets for local streaming.",
      challenges: [
        "Ensuring real-time low-latency audio and video transmission.",
        "Building a secure and stable peer-to-peer communication system."
      ],
      techStack: ["Python", "Flask", "OpenCV", "Web Sockets", "Tkinter"],
      timeline: "3 months",
      results: "Enabled seamless internal communication with zero dependency on external servers.",
      features: ["Real-Time Video Streaming", "Low-Latency Audio Processing", "Secure Local Networking"],
      github: "",
      imageUrl: "/Project Thumbnail Template (callinapp).png"
    },
    {
      title: "Blockchain Assistant",
      summary: "A lightweight AI assistant for blockchain-related queries using a quantized Llama 2 model.",
      problem: "Users struggle to find quick, domain-specific answers in blockchain development and research.",
      solution: "Trained and fine-tuned Llama 2 on blockchain datasets for efficient CPU-based inference.",
      challenges: [
        "Optimizing a large language model to run efficiently on CPUs.",
        "Ensuring accurate domain-specific responses."
      ],
      techStack: ["Llama 2", "PyTorch", "Quantization", "NLP", "Blockchain"],
      timeline: "5 months",
      results: "Reduced processing time by 40% compared to standard LLM models.",
      features: ["Efficient CPU-Based Inference", "Real-Time Blockchain Query Answering"],
      github: "https://github.com/RMTabish/Blockchain_assistant",
      imageUrl: "https://llama-2.ai/wp-content/uploads/2023/09/Llama-2-Model-Details.png"
    },
    {
      title: "Car Rental Website",
      summary: "A full-stack car rental platform enabling secure bookings and vehicle listings.",
      problem: "Car rental businesses lacked a streamlined online booking system with a user-friendly interface.",
      solution: "Built a responsive MERN-based platform with secure authentication and booking functionalities.",
      challenges: [
        "Handling concurrent bookings to avoid double reservations.",
        "Ensuring smooth user experience across devices."
      ],
      techStack: ["React.js", "MongoDB", "Express", "Node.js", "CSS"],
      timeline: "4 months",
      results: "Enabled automated online booking, reducing manual workload by 60%.",
      features: ["Secure Booking System", "Owner Vehicle Listings", "Mobile-Optimized UI"],
      github: "https://github.com/Web-Project-CarRental/Web-Project-CarRental.github.io",
      imageUrl: "/Project Thumbnail Template (carrental).png"
    },
    {
      title: "Brick Breaker Game in Assembly Language (x86 MASM)",
      summary: "A classic arcade game built using x86 Assembly in MASM.",
      problem: "Low-level programming is often abstract and lacks engaging real-world applications.",
      solution: "Designed a fully interactive brick-breaker game using graphics programming in Assembly.",
      challenges: [
        "Implementing smooth paddle and ball physics using Assembly.",
        "Integrating sound effects and animations with limited Assembly libraries."
      ],
      techStack: ["x86 Assembly", "MASM", "DOSBox Emulator"],
      timeline: "2 months",
      results: "Demonstrated complex game mechanics using purely Assembly language.",
      features: ["Colorful Graphics", "Multiple Levels", "Keyboard Controls"],
      github: "https://github.com/RMTabish/x86-MASM-Brick-Breaker",
      imageUrl: "/Project Thumbnail Template (brickbreaker).png"
    },
    {
      title: "Food Slicer 3D Game",
      summary: "A physics-based slicing game developed in Unity3D.",
      problem: "Wanted to explore Unity game development while creating a fun, interactive experience.",
      solution: "Built a 3D slicing game using Unity physics and Blender-modeled assets.",
      challenges: [
        "Ensuring accurate physics-based slicing interactions.",
        "Optimizing 3D rendering for performance."
      ],
      techStack: ["Unity3D", "C#", "Blender", "OOP"],
      timeline: "3 months",
      results: "Created an engaging, interactive game with smooth gameplay mechanics.",
      features: ["3D Graphics", "Physics-Based Interactions"],
      github: "https://github.com/RMTabish/food-slicer",
      imageUrl: "/slicer.jpg"
    }
  ];


export default function ProjectDetail() {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.title === decodeURIComponent(title));

  if (!project) {
    return <div className="text-center text-2xl font-bold mt-20">Project Not Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline mb-4">
        ← Back to Projects
      </button>
      
      {/* Project Overview */}
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-gray-700 mt-2">{project.summary}</p>
      <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover rounded-lg mt-4" />
      
      {/* Demo Video */}
      {project.demoVideo && (
        <video className="w-full mt-4 rounded-lg" controls>
          <source src={project.demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* The Problem */}
      <h2 className="text-2xl font-semibold mt-8">🔍 The Problem</h2>
      <p className="text-gray-700 mt-2">{project.problem}</p>

      {/* The Solution */}
      <h2 className="text-2xl font-semibold mt-8">💡 The Solution</h2>
      <p className="text-gray-700 mt-2">{project.solution}</p>

      {/* Challenges */}
      <h2 className="text-2xl font-semibold mt-8">⚠️ Challenges & How I Overcame Them</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {project.challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold mt-8">🛠 Tech Stack & Tools Used</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>

      {/* Timeline */}
      <h2 className="text-2xl font-semibold mt-8">📅 Timeline & Development Process</h2>
      <p className="text-gray-700 mt-2">{project.timeline}</p>

      {/* Final Results */}
      <h2 className="text-2xl font-semibold mt-8">🏆 Final Results & Achievements</h2>
      <p className="text-gray-700 mt-2">{project.results}</p>

      {/* GitHub or Live Demo */}
      {project.github && (
        <a href={project.github} className="mt-6 inline-flex items-center text-blue-600 hover:underline">
          View Project on GitHub
        </a>
      )}
    </div>
  );
}
