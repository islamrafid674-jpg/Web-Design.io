import { HlsVideo } from './HlsVideo';

export function Stats() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[600px] flex items-center justify-center py-20 md:py-32">
      <HlsVideo 
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0 saturate-0"
      />
      
      <div className="absolute top-0 w-full h-[150px] md:h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 w-full h-[150px] md:h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
      
      <div className="relative z-10 px-4 md:px-6 w-full max-w-6xl mx-auto">
        <div className="liquid-glass rounded-2xl md:rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-1 md:mb-2">200+</span>
              <span className="text-white/60 font-body font-light text-[10px] md:text-sm">Sites launched</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-1 md:mb-2">98%</span>
              <span className="text-white/60 font-body font-light text-[10px] md:text-sm">Client satisfaction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-1 md:mb-2">3.2x</span>
              <span className="text-white/60 font-body font-light text-[10px] md:text-sm">More conversions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-1 md:mb-2">5 days</span>
              <span className="text-white/60 font-body font-light text-[10px] md:text-sm">Average delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
