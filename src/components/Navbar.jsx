import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isWhitepaperPage = location.pathname === '/whitepaper';
  const isCommunityPage = location.pathname === '/community';
  const isNotHomePage = isWhitepaperPage || isCommunityPage;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 backdrop-blur-md py-3 shadow-lg' : 'bg-primary/70 backdrop-blur-sm py-5'}`}
    >
      <div className="container flex items-center justify-between">
        {!isNotHomePage ? (
          <Link to="/" className="text-2xl font-bold text-white">VeriCred</Link>
        ) : (
          <div className="flex-1"></div>
        )}
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {!isNotHomePage ? (
            <>
              <a href="#problem" className="text-light hover:text-accent transition-colors">{t('navbar.problem')}</a>
              <a href="#how-it-works" className="text-light hover:text-accent transition-colors">{t('navbar.howItWorks')}</a>
              <a href="#tokenomics" className="text-light hover:text-accent transition-colors">{t('navbar.tokenomics')}</a>
              <a href="#roadmap" className="text-light hover:text-accent transition-colors">{t('navbar.roadmap')}</a>
              <Link to="/community" className="text-light hover:text-accent transition-colors">{t('navbar.community')}</Link>
            </>
          ) : (
            <>
              <Link to="/#problem" className="text-light hover:text-accent transition-colors">{t('navbar.problem')}</Link>
              <Link to="/#how-it-works" className="text-light hover:text-accent transition-colors">{t('navbar.howItWorks')}</Link>
              <Link to="/#tokenomics" className="text-light hover:text-accent transition-colors">{t('navbar.tokenomics')}</Link>
              <Link to="/#roadmap" className="text-light hover:text-accent transition-colors">{t('navbar.roadmap')}</Link>
              <Link to="/community" className="text-light hover:text-accent transition-colors">{t('navbar.community')}</Link>
              <Link to="/" className="text-light hover:text-accent transition-colors">← Back to Home</Link>
            </>
          )}
          <Link to="/whitepaper" className="text-light hover:text-accent transition-colors">Whitepaper</Link>
          <LanguageSwitcher />
          {!isNotHomePage && <a href="https://app.vericred.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-4">{t('navbar.launchApp')}</a>}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary/95 backdrop-blur-md"
        >
          <div className="container py-4 flex flex-col space-y-4">
            {!isNotHomePage ? (
              <>
                <a href="#problem" className="text-light hover:text-accent transition-colors">{t('navbar.problem')}</a>
                <a href="#how-it-works" className="text-light hover:text-accent transition-colors">{t('navbar.howItWorks')}</a>
                <a href="#tokenomics" className="text-light hover:text-accent transition-colors">{t('navbar.tokenomics')}</a>
                <a href="#roadmap" className="text-light hover:text-accent transition-colors">{t('navbar.roadmap')}</a>
                <Link to="/community" className="text-light hover:text-accent transition-colors">{t('navbar.community')}</Link>
              </>
            ) : (
              <>
                <Link to="/#problem" className="text-light hover:text-accent transition-colors">{t('navbar.problem')}</Link>
                <Link to="/#how-it-works" className="text-light hover:text-accent transition-colors">{t('navbar.howItWorks')}</Link>
                <Link to="/#tokenomics" className="text-light hover:text-accent transition-colors">{t('navbar.tokenomics')}</Link>
                <Link to="/#roadmap" className="text-light hover:text-accent transition-colors">{t('navbar.roadmap')}</Link>
                <Link to="/community" className="text-light hover:text-accent transition-colors">{t('navbar.community')}</Link>
                <Link to="/" className="text-light hover:text-accent transition-colors">← Back to Home</Link>
              </>
            )}
            <Link to="/whitepaper" className="text-light hover:text-accent transition-colors">Whitepaper</Link>
            <LanguageSwitcher />
            {!isNotHomePage && <a href="https://app.vericred.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary self-start">{t('navbar.launchApp')}</a>}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;