import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Send, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary border-t border-primary/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8 group cursor-default">
              <div className="w-10 h-10 bg-primary/20 border border-primary/40 rounded flex items-center justify-center font-mono font-bold text-primary shadow-[0_0_15px_rgba(0,217,255,0.2)]">
                M
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-white">
                MeuSite<span className="text-primary hover-glitch inline-block">Dev</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed text-sm font-sans">
              Projetando o futuro da web através de arquiteturas digitais avançadas e design de alta fidelidade.
            </p>
            <div className="flex gap-4">
              {[Code, Globe, Send].map((Icon, i) => (
                <button 
                  key={i} 
                  className="w-12 h-12 rounded bg-primary/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 shadow-none hover:shadow-[0_0_20px_rgba(0,217,255,0.1)]"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em] mb-8">Navigation_Index</h4>
            <ul className="space-y-4">
              {['Início', 'Serviços', 'Sobre', 'Portfólio', 'Contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em] mb-8">System_Docs</h4>
            <ul className="space-y-4">
              {['Privacidade', 'Termos_Uso', 'Cookies', 'API_v1.0'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-slate-600 text-[10px] font-mono tracking-widest">
              &copy; {new Date().getFullYear()} MEUSITEDEV_SYSTEM_v2.0 // ALL_RIGHTS_RESERVED
            </p>
            <div className="flex items-center gap-3 text-[8px] font-mono text-primary/40">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              CORE_SYSTEM_ACTIVE_STABLE
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] font-mono font-bold text-slate-500 hover:text-primary transition-all group uppercase tracking-[0.2em]"
          >
            Terminal_Return_Top
            <div className="w-10 h-10 rounded border border-white/5 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
