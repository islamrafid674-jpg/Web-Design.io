import { BlurText } from '../components/BlurText';

export function GetStarted() {
  return (
    <div className="bg-black min-h-screen pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 md:px-12 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-[10px] md:text-xs font-medium text-white font-body mb-4 md:mb-6">
            Contact
          </div>
          <BlurText 
            text="Let's build something extraordinary" 
            className="text-4xl sm:text-5xl md:text-7xl font-heading italic text-white mb-4 md:mb-6 justify-center" 
          />
          <p className="text-white/60 text-sm md:text-lg font-body font-light px-2">
            Tell us about your project and we'll get back to you within 24 hours to schedule a strategy call.
          </p>
        </div>
        
        <form className="liquid-glass rounded-2xl md:rounded-3xl p-6 md:p-12 flex flex-col gap-5 md:gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white/80 text-xs md:text-sm font-body">First Name</label>
              <input 
                type="text" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm md:text-base focus:outline-none focus:border-white/30 transition-colors" 
                placeholder="Jane"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/80 text-xs md:text-sm font-body">Last Name</label>
              <input 
                type="text" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm md:text-base focus:outline-none focus:border-white/30 transition-colors" 
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-white/80 text-xs md:text-sm font-body">Email Address</label>
            <input 
              type="email" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm md:text-base focus:outline-none focus:border-white/30 transition-colors" 
              placeholder="jane@example.com"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-white/80 text-xs md:text-sm font-body">Company / Website</label>
            <input 
              type="text" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm md:text-base focus:outline-none focus:border-white/30 transition-colors" 
              placeholder="https://yourcompany.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white/80 text-xs md:text-sm font-body">Project Details</label>
            <textarea 
              rows={5} 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm md:text-base focus:outline-none focus:border-white/30 transition-colors resize-none"
              placeholder="Tell us about your goals, timeline, and budget..."
            ></textarea>
          </div>
          
          <button 
            type="button" 
            className="liquid-glass-strong rounded-full px-6 py-3.5 md:py-4 text-sm md:text-base text-white font-medium font-body hover:bg-white/10 transition-colors mt-2 md:mt-4 w-full"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
