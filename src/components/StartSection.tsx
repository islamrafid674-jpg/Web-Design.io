import { HlsVideo } from './HlsVideo';

export function StartSection() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center py-20 md:py-32">
      <HlsVideo 
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="absolute top-0 w-full h-[150px] md:h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 w-full h-[150px] md:h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 max-w-3xl">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-[10px] md:text-xs font-medium text-white font-body mb-4 md:mb-6">
          How It Works
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-4 md:mb-6">
          You dream it. We ship it.
        </h2>
        
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mb-8 md:mb-10 px-2">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
        </p>
        
        <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm md:text-base text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
          Get Started
        </button>
      </div>
    </section>
  );
}
