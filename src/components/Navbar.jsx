import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#0B1220]/95 backdrop-blur-md border-b border-[#26344D]/80 py-4 shadow-lg shadow-black/20'
          : 'bg-transparent py-6 border-b border-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl font-bold tracking-tight text-[#00D084] hover:opacity-90 transition-opacity"
        >
          Nishant R.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`transition-colors duration-200 text-sm ${isActive
                        ? 'text-[#00D084] font-medium'
                        : 'text-[#94A3B8] hover:text-white'
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Resume Button with Green Outline */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-sm font-medium text-[#00D084] border border-[#00D084] rounded hover:bg-[#00D084]/10 transition-colors"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Right: Resume Button Only */}
        <div className="flex items-center md:hidden">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-medium text-[#00D084] border border-[#00D084] rounded hover:bg-[#00D084]/10 transition-colors"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;