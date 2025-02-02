import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Reviews from "./components/Reviews";
import Contact from './components/Contact';

function App() {
  return (
    
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          
          <Route path="/reviews" element={<Reviews />} />
         
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;