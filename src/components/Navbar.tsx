import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    //{ name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">
                
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="https://github.com/RMTabish" className="text-gray-600 hover:text-blue-600">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/rai-muhammad-tabish/" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:raimuhammadtabish@gmail.com" className="text-gray-600 hover:text-blue-600">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex items-center justify-around px-4">
              <a href="https://github.com/RMTabish" className="text-gray-600 hover:text-blue-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/rai-muhammad-tabish/" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:raimuhammadtabish@gmail.com" className="text-gray-600 hover:text-blue-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}