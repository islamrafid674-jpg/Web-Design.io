export function FeaturesChess() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12 md:mb-20">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-[10px] md:text-xs font-medium text-white font-body mb-4 md:mb-6">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Pro features. Zero complexity.
        </h2>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              Designed to convert. Built to perform.
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base">
              Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm md:text-base text-white font-medium hover:bg-white/10 transition-colors mt-2 md:mt-4 w-full sm:w-auto">
              Learn more
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden p-1.5 md:p-2">
              <img 
                src="https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif" 
                alt="Feature preview" 
                className="w-full h-auto rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-20">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              It gets smarter. Automatically.
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base">
              Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm md:text-base text-white font-medium hover:bg-white/10 transition-colors mt-2 md:mt-4 w-full sm:w-auto">
              See how it works
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden p-1.5 md:p-2">
              <img 
                src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif" 
                alt="Feature preview" 
                className="w-full h-auto rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
