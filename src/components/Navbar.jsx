import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#contato' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-secondary/90 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,217,255,0.05)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-default"
        >
          <div className="w-9 h-9 bg-primary/20 border border-primary/40 rounded flex items-center justify-center font-mono font-bold text-primary shadow-[0_0_15px_rgba(0,217,255,0.2)] group-hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all">
            M
          </div>
          <span className="text-xl font-display font-bold tracking-tighter text-white">
            MeuSite<span className="text-primary hover-glitch inline-block">Dev</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors group"
            >
              <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary">[</span>
              {link.name}
              <span className="absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary">]</span>
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn-premium py-2 px-6 text-[10px] font-mono uppercase tracking-[0.2em] flex items-center gap-2 group cyber-border"
          >
            Connect_
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary hover:text-primary-light transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-secondary/95 backdrop-blur-2xl border-b border-primary/20 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-premium mt-4 w-full py-4 text-xs font-mono uppercase tracking-widest cyber-border">Falar Conosco_</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
