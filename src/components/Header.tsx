'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[5px] backdrop-filter bg-[rgba(18,18,18,0.95)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Left Aligned */}
          <div className="flex-shrink-0">
            <div className="w-[70px] h-[70px] sm:w-[87px] sm:h-[87px] rounded-full flex items-center justify-center">
              <img 
                src="/kamo-logo.svg" 
                alt="KAMO Athletics Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="relative text-white text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 transition-colors cursor-pointer"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('instagram')}
              className="text-[#f2f2f2] text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 transition-colors cursor-pointer"
            >
              INSTAGRAM
            </button>
            <button 
              onClick={() => scrollToSection('schedule')}
              className="text-[#f2f2f2] text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 transition-colors cursor-pointer"
            >
              SCHEDULE
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#f2f2f2] text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 transition-colors cursor-pointer"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#f2f2f2] text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 transition-colors cursor-pointer"
            >
              CONTACT
            </button>
            <button className="bg-[#0b3a86] text-white px-6 py-3 text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:bg-[#0a2d6b] transition-colors">
              CALL NOW
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[rgba(18,18,18,0.98)] border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-white text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 transition-colors cursor-pointer"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('instagram')}
                className="block w-full text-left px-3 py-2 text-[#f2f2f2] text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                INSTAGRAM
              </button>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="block w-full text-left px-3 py-2 text-[#f2f2f2] text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                SCHEDULE
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-[#f2f2f2] text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-[#f2f2f2] text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                CONTACT
              </button>
              <button className="block w-full text-left mx-3 mt-4 bg-[#0b3a86] text-white px-6 py-3 text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:bg-[#0a2d6b] transition-colors">
                CALL NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
