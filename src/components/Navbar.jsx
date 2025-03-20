import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import navMenu from '../constants/homePage.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navLinks } = navMenu;
  
  return (
    <div className='relative'>
      <div className="bg-gradient-to-b h-12 w-full fixed from-white left-0 to-transparent top-0 via-white z-40"></div>
      
      <nav className="w-full fixed py-2 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex bg-white h-16 justify-between rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] items-center px-5">
            <div className="flex-shrink-0">
              <a href="#">
                <img src="src/assets/Logo.avif" alt="1Card Logo" className="h-8" />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden items-center md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 text-sm duration-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="justify-center p-2 rounded-md text-gray-500 focus:outline-none hover:text-primary inline-flex items-center"
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="bg-white rounded-xl shadow-lg md:hidden mt-2">
              <div className="pb-3 pt-2 px-2 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 block duration-300 hover:text-primary px-3 py-2 transition-colors"
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