import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none" />
      <div className="scanning-line" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/30 text-primary text-[10px] font-mono uppercase tracking-[0.2em] mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Status: Online // Design & Tecnologia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tighter hover-glitch cursor-default"
          >
            Sua presença digital no <span className="text-gradient">próximo nível.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans tracking-wide leading-relaxed"
          >
            Fundimos design minimalista com tecnologia de ponta para criar 
            experiências que definem o futuro digital da sua marca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#contato" className="btn-premium group flex items-center gap-2 text-sm uppercase tracking-widest px-10 py-4 cyber-border">
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="btn-outline text-sm uppercase tracking-widest px-10 py-4">
              Explorar Portfólio
            </a>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
        >
          {[
            { icon: Code2, title: 'ARQUITETURA DE CÓDIGO', desc: 'Sistemas escaláveis e prontos para o futuro.' },
            { icon: Rocket, title: 'PERFORMANCE NEURAL', desc: 'Otimização máxima com carregamento instantâneo.' },
            { icon: Shield, title: 'CIBERSEGURANÇA', desc: 'Proteção de dados com protocolos de última geração.' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors shadow-[0_0_20px_rgba(0,217,255,0.1)]">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-mono font-bold text-white mb-3 tracking-widest">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] animate-pulse-slow" />
      </div>
    </section>
  );
};

export default Hero;
