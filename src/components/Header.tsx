'use client';

import { useState } from 'react';
import { urlFor } from '../../sanity/client';

interface SiteSettings {
  logo?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  navigation?: Array<{
    title: string;
    sectionId: string;
  }>;
  ctaButtonText?: string;
  primaryColor?: { hex?: string };
}

interface HeaderProps {
  siteSettings?: SiteSettings;
}

export default function Header({ siteSettings }: HeaderProps) {
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

  const scrollToContact = () => {
    scrollToSection('contact');
  };

  // Fallback values (original content)
  const logo = siteSettings?.logo?.asset 
    ? urlFor(siteSettings.logo.asset).url()
    : '/kamo-logo.svg';
  const logoAlt = siteSettings?.logo?.alt || 'KAMO Athletics Logo';
  const navigation = siteSettings?.navigation || [
    { title: 'HOME', sectionId: 'home' },
    { title: 'INSTAGRAM', sectionId: 'instagram' },
    { title: 'SCHEDULE', sectionId: 'schedule' },
    { title: 'ABOUT', sectionId: 'about' },
    { title: 'CONTACT', sectionId: 'contact' }
  ];
  const ctaButtonText = siteSettings?.ctaButtonText || 'CALL NOW';
  const primaryColor = siteSettings?.primaryColor?.hex || '#0b3a86';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[5px] backdrop-filter bg-[rgba(18,18,18,0.95)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Left Aligned */}
          <div className="flex-shrink-0">
            <div className="w-[70px] h-[70px] sm:w-[87px] sm:h-[87px] rounded-full flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={logo} 
                alt={logoAlt} 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item, index) => (
              <button 
                key={index}
                onClick={() => scrollToSection(item.sectionId)}
                className={`text-[#f2f2f2] text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 transition-colors cursor-pointer ${
                  index === 0 ? 'text-white' : ''
                }`}
              >
                {item.title}
              </button>
            ))}
            <button 
              onClick={scrollToContact}
              className="text-white px-6 py-3 text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:opacity-80 transition-opacity cursor-pointer"
              style={{ backgroundColor: primaryColor }}
            >
              {ctaButtonText}
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
              {navigation.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`block w-full text-left px-3 py-2 text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:text-gray-500 hover:bg-gray-800 transition-colors cursor-pointer ${
                    index === 0 ? 'text-white' : 'text-[#f2f2f2]'
                  }`}
                >
                  {item.title}
                </button>
              ))}
              <button 
                onClick={scrollToContact}
                className="block w-full text-left mx-3 mt-4 text-white px-6 py-3 text-[14.4px] tracking-[1px] uppercase font-['Segoe_UI',_sans-serif] hover:opacity-80 transition-opacity cursor-pointer"
                style={{ backgroundColor: primaryColor }}
              >
                {ctaButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
