import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Smartphone, Globe, BarChart3, Cloud, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    desc: 'Sites institucionais e Landing Pages de alta conversão com foco em design premium.',
    color: 'bg-blue-500/20 text-blue-400'
  },
  {
    icon: Layout,
    title: 'Sistemas Customizados',
    desc: 'Dashboards administrativos e ERPs sob medida para automatizar seu negócio.',
    color: 'bg-indigo-500/20 text-indigo-400'
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    desc: 'Apps nativos e PWA para levar sua marca direto para o bolso do seu cliente.',
    color: 'bg-cyan-500/20 text-cyan-400'
  },
  {
    icon: Database,
    title: 'Integrações de Dados',
    desc: 'Conexão entre APIs e bancos de dados robustos para garantir fluxo de informação.',
    color: 'bg-emerald-500/20 text-emerald-400'
  },
  {
    icon: Cloud,
    title: 'Infraestrutura Cloud',
    desc: 'Hospedagem segura e escalável para que seu site nunca pare de crescer.',
    color: 'bg-purple-500/20 text-purple-400'
  },
  {
    icon: BarChart3,
    title: 'SEO & Performance',
    desc: 'Otimização técnica para você aparecer no topo do Google com carregamento ultra-rápido.',
    color: 'bg-orange-500/20 text-orange-400'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-secondary">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-primary/40"></span>
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em]">Especialidades_Base</span>
            <span className="h-[1px] w-8 bg-primary/40"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tighter"
          >
            Arquitetura Digital <br />
            <span className="text-gradient">Alta Performance.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-2xl mx-auto font-sans text-sm"
          >
            Desenvolvemos infraestruturas digitais robustas com foco em escalabilidade e design centrado na experiência tecnológica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 group relative border border-white/5 hover:border-primary/20"
            >
              <div className="absolute top-4 right-4 font-mono text-[8px] text-slate-700 tracking-tighter">
                ID: 00{i + 1} // SIS_SERVICO
              </div>
              
              <div className={`w-14 h-14 rounded flex items-center justify-center mb-10 relative group-hover:scale-110 transition-transform duration-500 ${service.color.replace('500', 'primary').replace('400', 'white')}`}>
                <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors relative z-10" />
              </div>
              
              <h3 className="text-lg font-display font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                {service.title.toUpperCase()}
              </h3>
              
              <p className="text-slate-500 text-xs leading-relaxed mb-10 font-sans group-hover:text-slate-400 transition-colors">
                {service.desc}
              </p>
              
              <div className="flex items-center gap-3 text-[10px] font-mono font-bold text-primary uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all">
                <span className="w-4 h-[1px] bg-primary"></span>
                EXECUTAR_ACAO
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
