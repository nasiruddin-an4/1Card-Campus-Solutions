import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import navMenu from '../constants/homePage.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navLinks } = navMenu;
  
  return (
    <div className='relative'>
      <div className="fixed top-0 left-0 w-full h-12 bg-gradient-to-b from-white via-white to-transparent z-10"></div>
      
      <nav className="fixed w-full py-2 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-16 bg-white px-5 shadow-md rounded-2xl">
            <div className="flex-shrink-0">
              <a href="#">
                <img src="src/assets/Logo.avif" alt="1Card Logo" className="h-8" />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary focus:outline-none"
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-white rounded-xl shadow-lg mt-2">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;