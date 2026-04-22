import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Site Institucional',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp number provided by user
    const phoneNumber = '5511949156525';
    
    // Formatting message for WhatsApp
    const text = `*Nova Transmissão de Contato - MeuSiteDev*%0A%0A` +
                 `*Nome:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Tipo de Projeto:* ${formData.projectType}%0A%0A` +
                 `*Mensagem:*%0A${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[1px] bg-primary/40"></span>
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em]">Link_Comunicacao</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tighter"
            >
              Inicie a sua <br />
              <span className="text-gradient">transmissão.</span>
            </motion.h2>
            
            <p className="text-slate-500 text-sm mb-12 font-sans leading-relaxed max-w-md">
              Pronto para elevar o seu ecossistema digital? Nossa equipe de engenheiros e designers está em standby para processar o seu próximo grande projeto.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'FLUXO_DADOS', value: 'contato@meusite.dev' },
                { icon: Phone, label: 'LINK_VOZ', value: '+55 (11) 94915-6525' },
                { icon: MapPin, label: 'GEO_LOCALIZACAO', value: 'São Paulo, Brasil' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 p-5 rounded border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary group-hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-display font-medium text-sm tracking-wide">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-10 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 font-mono text-[8px] text-slate-700">BUFFER_ENTRADA_v2.0</div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Nome_Usuario</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-secondary/50 border border-white/10 rounded px-5 py-4 text-sm text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,217,255,0.1)] transition-all font-sans"
                    placeholder="IDENTIFIQUE-SE"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Email_Usuario</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-secondary/50 border border-white/10 rounded px-5 py-4 text-sm text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,217,255,0.1)] transition-all font-sans"
                    placeholder="EMAIL@PROTOCOLO.IO"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Tipo_Projeto</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-secondary/50 border border-white/10 rounded px-5 py-4 text-sm text-white focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer"
                >
                  <option value="Site Institucional">Site Institucional</option>
                  <option value="Aplicativo Mobile">Aplicativo Mobile</option>
                  <option value="Sistemas de Gestão">Sistemas de Gestão</option>
                  <option value="Dashboard de Negócios">Dashboard de Negócios</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Carga_Mensagem</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-secondary/50 border border-white/10 rounded px-5 py-4 text-sm text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,217,255,0.1)] transition-all resize-none font-sans"
                  placeholder="DESCREVA OS OBJETIVOS DA MISSÃO..."
                ></textarea>
              </div>

              <button type="submit" className="btn-premium w-full flex items-center justify-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.3em] py-5 cyber-border">
                Transmitir_Dados
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default Contact;
