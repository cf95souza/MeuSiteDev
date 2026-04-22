import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Loader2, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ['Todos', 'Web', 'Sistemas', 'App'];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error: supabaseError } = await supabase
        .from('projects')
        .select('*')
        .order('ordem', { ascending: true });

      if (supabaseError) throw supabaseError;
      setProjects(data || []);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Houve um erro ao sincronizar os dados do portfólio.');
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.categoria.toLowerCase() === filter.toLowerCase());

  return (
    <section id="portfolio" className="py-24 relative bg-secondary">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[1px] bg-primary/40"></span>
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em]">Project_Archives</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-display font-bold text-white tracking-tighter"
            >
              Engenharia de <span className="text-gradient">Impacto.</span>
            </motion.h2>
          </div>

          <div className="flex p-1 bg-white/[0.03] border border-white/10 rounded-lg backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-md text-[10px] font-mono uppercase tracking-[0.2em] transition-all ${
                  filter === cat 
                    ? 'bg-primary text-secondary font-bold shadow-[0_0_20px_rgba(0,217,255,0.3)]' 
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Sincronizando_Dados...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-400 font-mono text-sm">{error}</p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id || project.titulo}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 cursor-pointer"
                >
                  <img 
                    src={project.imagem_url} 
                    alt={project.titulo}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                  />
                  
                  {/* Tech Overlay Decor */}
                  <div className="absolute top-4 left-4 font-mono text-[8px] text-primary/40 group-hover:text-primary transition-colors">
                    {project.nome || `DATA_SNAPSHOT_00${i+1}`} // ARCHIVE.SYS
                  </div>
                  
                  {/* Gradient and Scanlines */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex justify-between items-end mb-6">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2 leading-none uppercase tracking-tighter">{project.titulo}</h3>
                        <div className="flex gap-2">
                          {(project.tags || []).map(tag => (
                            <span key={tag} className="px-2 py-0.5 border border-primary/20 bg-primary/5 text-[9px] font-mono text-primary uppercase tracking-widest">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-primary/20 border border-primary/40 rounded flex items-center justify-center text-primary">
                          <Rocket className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-secondary/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-secondary border border-white/10 overflow-hidden shadow-2xl rounded-2xl cyber-border flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-secondary/80 border border-white/10 rounded-full text-white hover:text-primary transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-3/5 h-64 md:h-auto overflow-hidden relative border-b md:border-b-0 md:border-r border-white/5">
                <img 
                  src={selectedProject.imagem_url} 
                  alt={selectedProject.titulo}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10">
                  <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-2">Technical_Asset</div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter leading-none">{selectedProject.titulo}</h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-[9px] uppercase tracking-widest rounded">
                      {selectedProject.categoria}
                    </span>
                    <span className="text-slate-600 font-mono text-[9px] uppercase tracking-widest leading-none">
                      Archive_v1.0
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-10 font-sans tracking-wide">
                    {selectedProject.descricao || 'Nenhuma descrição detalhada disponível para este projeto.'}
                  </p>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Stack_Deployed_</h4>
                    <div className="flex flex-wrap gap-2">
                      {(selectedProject.tags || []).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 uppercase tracking-widest transition-colors hover:border-primary/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-10 border-t border-white/5 flex gap-4">
                  {selectedProject.github_url && (
                    <a 
                      href={selectedProject.github_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 btn-outline py-4 text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      <Code className="w-4 h-4" /> Source_Code
                    </a>
                  )}
                  {selectedProject.live_url && (
                    <a 
                      href={selectedProject.live_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 btn-premium py-4 text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 cyber-border"
                    >
                      <ExternalLink className="w-4 h-4" /> Open_Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Placeholder icon for cards to indicate it's clickable
const Rocket = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.5-1 1-4c2 1 3 3 3 3z" />
    <path d="M12 15v5s1-.5 4-1c-1-2-3-3-3-3z" />
  </svg>
);

export default Portfolio;
