import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  return (
    <nav className="bg-black shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white"></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="https://github.com/RMTabish" className="text-gray-300 hover:text-blue-400">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/rai-muhammad-tabish/" className="text-gray-300 hover:text-blue-400">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:ra.tabish@anviro.net" className="text-gray-300 hover:text-blue-400">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-black border-t border-gray-700">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? "bg-gray-800 text-blue-400"
                    : "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-4 pb-3">
            <div className="flex items-center justify-around px-4">
              <a href="https://github.com/RMTabish" className="text-gray-300 hover:text-blue-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/rai-muhammad-tabish/" className="text-gray-300 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:ra.tabish@anviro.net" className="text-gray-300 hover:text-blue-400">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
