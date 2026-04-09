import { useState } from 'react';
import { BlurText } from '../components/BlurText';
import { CtaFooter } from '../components/CtaFooter';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export function Work() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <div className="bg-black min-h-screen pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <div className="liquid-glass rounded-full px-3.5 py-1 text-[10px] md:text-xs font-medium text-white font-body mb-4 md:mb-6">
              Portfolio
            </div>
            <BlurText 
              text="Selected Works" 
              className="text-4xl sm:text-5xl md:text-7xl font-heading italic text-white mb-4 md:mb-6 justify-center" 
            />
            <p className="text-white/60 max-w-2xl text-sm md:text-lg font-body font-light px-2">
              A showcase of digital experiences engineered for performance, designed with precision, and built to convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="liquid-glass rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer flex flex-col block"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image || `https://picsum.photos/seed/${project.seed}/800/600`} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-6 md:p-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-1 md:mb-2">{project.title}</h3>
                    <p className="text-white/60 font-body text-xs md:text-sm">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full liquid-glass-strong flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CtaFooter />
      </div>

      {/* Project Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col p-4 md:p-8">
          <div className="flex justify-end mb-4">
            <button 
              onClick={() => setSelectedProject(null)}
              className="liquid-glass rounded-full p-3 text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 w-full liquid-glass rounded-3xl overflow-hidden relative p-2">
            {selectedProject.url !== "#" ? (
              <iframe 
                src={selectedProject.url} 
                className="w-full h-full rounded-2xl bg-white"
                title={selectedProject.title}
              />
            ) : (
              <img 
                src={`https://picsum.photos/seed/${selectedProject.seed}/1920/1080`} 
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-2xl" 
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
