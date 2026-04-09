import { HlsVideo } from './HlsVideo';

export function CtaFooter() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[800px] flex flex-col items-center justify-end pt-20 md:pt-32 pb-6 md:pb-8">
      <HlsVideo 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="absolute top-0 w-full h-[150px] md:h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 w-full h-[150px] md:h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 max-w-3xl w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] md:leading-[0.85] mb-4 md:mb-6">
          Your next website starts here.
        </h2>
        
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mb-8 md:mb-10">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-20 md:mb-32 w-full sm:w-auto px-4 sm:px-0">
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-white/90 transition-colors w-full sm:w-auto">
            View Pricing
          </button>
        </div>
        
        <div className="w-full pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[10px] md:text-xs font-body">
            © 2026 Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6 text-white/40 text-[10px] md:text-xs font-body">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
