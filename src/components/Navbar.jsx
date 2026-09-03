import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ activeSection, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
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
        {/* Left Brand Logo: Deepak K. / Nishant R. style in green */}
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

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-medium text-[#00D084] border border-[#00D084] rounded hover:bg-[#00D084]/10 transition-colors"
            aria-label="Download Resume"
          >
            Resume
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#94A3B8] hover:text-white focus:outline-none rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00D084]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] bg-[#0B1220]/98 backdrop-blur-xl border-b border-[#26344D] z-40 md:hidden animate-fadeIn">
          <div className="px-6 py-8 flex flex-col justify-between h-[calc(100vh-68px)] overflow-y-auto">
            <ul className="flex flex-col space-y-5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name} className="border-b border-[#26344D]/40 pb-3">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-lg font-medium transition-colors ${isActive ? 'text-[#00D084]' : 'text-[#94A3B8] hover:text-white'
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-6 pb-8 space-y-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3 text-sm font-medium text-[#00D084] border border-[#00D084] rounded-lg hover:bg-[#00D084]/10 transition-colors"
              >
                Resume
              </a>
              <p className="text-xs text-center font-mono text-[#94A3B8]/60">
                Nishant Ranjan • Bengaluru, India
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;