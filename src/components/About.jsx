import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '5+', label: 'Anos de Experiência' },
    { icon: Users, value: '50+', label: 'Clientes Felizes' },
    { icon: Zap, value: '100%', label: 'Entrega Ágil' },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/5 relative cyber-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipe trabalhando" 
                className="w-full h-full object-cover grayscale mix-blend-luminosity brightness-75 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="scanning-line z-20" />
            </div>
            
            {/* Tech Overlay Card */}
            <motion.div
              initial={{ x: 20, y: 20, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 bg-surface-card/80 backdrop-blur-xl p-10 border border-primary/20 shadow-2xl hidden sm:block cyber-border"
            >
              <p className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-3">Core_Philosophy</p>
              <p className="text-2xl font-display font-bold text-white leading-none">NOSSO DNA_</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[1px] bg-primary/40"></span>
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em]">System_Profile</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tighter"
            >
              Codificando o seu <br />
              <span className="text-gradient">sucesso digital.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-500 text-sm mb-10 leading-relaxed font-sans max-w-xl"
            >
              A MeuSiteDev opera na convergência entre design vanguardista e engenharia de software robusta. 
              Nossa missão é construir ecossistemas digitais que não apenas existem, mas dominam seus nichos de mercado.
            </motion.p>

            <div className="space-y-5 mb-14">
              {[
                'UX focado em conversão e usabilidade técnica',
                'Arquiteturas modernas sustentadas por React & Node.js',
                'Design Systems exclusivos e escaláveis',
                'Performance neural e otimização de infraestrutura'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-slate-400 group"
                >
                  <div className="w-5 h-5 rounded border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Zap className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-mono group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-10 pt-10 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">{stat.value}</div>
                  <div className="text-slate-600 text-[9px] font-mono uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
