import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import { BlurText } from './BlurText';

export function Hero() {
  return (
    <section className="relative overflow-visible min-h-[100vh] md:min-h-[1000px] w-full flex flex-col">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute left-0 w-full h-full md:h-auto object-cover md:object-contain z-0"
        style={{ top: '10%' }}
        poster="https://picsum.photos/seed/hero/1920/1080"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/5 z-0" />
      <div className="absolute bottom-0 w-full h-[200px] md:h-[300px] bg-gradient-to-b from-transparent to-black z-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center pt-[120px] md:pt-[150px] px-4 md:px-6 text-center flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 md:gap-3 mb-6 md:mb-8 max-w-[90vw]"
        >
          <span className="bg-white text-black rounded-full px-2 md:px-3 py-1 text-[10px] md:text-xs font-semibold whitespace-nowrap">New</span>
          <span className="text-white/90 text-xs md:text-sm font-medium pr-2 md:pr-3 truncate">Introducing AI-powered web design.</span>
        </motion.div>
        
        <BlurText 
          text="The Website Your Brand Deserves" 
          delay={0.1}
          staggerDelay={0.1}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.85] md:leading-[0.8] max-w-2xl tracking-[-2px] md:tracking-[-4px] justify-center"
        />
        
        <motion.p 
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 md:mt-8 text-sm md:text-base text-white font-body font-light leading-relaxed md:leading-tight max-w-[90vw] md:max-w-lg"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
        </motion.p>
        
        <motion.div 
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <button className="liquid-glass-strong rounded-full px-5 py-3 md:py-2.5 flex items-center justify-center gap-2 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="rounded-full px-5 py-3 md:py-2.5 flex items-center justify-center gap-2 text-white font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
            <Play className="w-4 h-4 fill-white" />
            Watch the Film
          </button>
        </motion.div>
        
        <div className="mt-auto pb-8 pt-12 md:pt-16 flex flex-col items-center w-full">
          <div className="liquid-glass rounded-full px-4 py-1.5 text-[10px] md:text-xs font-medium text-white/60 font-body mb-6 md:mb-8">
            Trusted by the teams behind
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 text-xl sm:text-2xl md:text-3xl font-heading italic text-white/80 px-4">
            <span>Stripe</span>
            <span>Vercel</span>
            <span>Linear</span>
            <span>Notion</span>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
}
