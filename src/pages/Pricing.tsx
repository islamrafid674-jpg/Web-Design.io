import { BlurText } from '../components/BlurText';
import { CtaFooter } from '../components/CtaFooter';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <div className="bg-black min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-[10px] md:text-xs font-medium text-white font-body mb-4 md:mb-6">
            Pricing
          </div>
          <BlurText 
            text="Simple, transparent pricing" 
            className="text-4xl sm:text-5xl md:text-7xl font-heading italic text-white mb-4 md:mb-6 justify-center" 
          />
          <p className="text-white/60 max-w-2xl text-sm md:text-lg font-body font-light px-2">
            Choose the perfect plan for your brand's evolution. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24 items-center">
          {/* Starter */}
          <div className="liquid-glass rounded-3xl p-6 md:p-10 flex flex-col h-full">
            <h3 className="text-2xl font-heading italic text-white mb-2">Starter</h3>
            <p className="text-white/60 font-body text-xs md:text-sm mb-6 md:mb-8">Perfect for new businesses</p>
            <div className="mb-6 md:mb-8">
              <span className="text-4xl md:text-5xl font-heading italic text-white">$297</span>
            </div>
            <ul className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10 flex-1">
              {['5 Page Website', 'Responsive Design', 'Basic SEO Setup', '1 Revision Round', 'Standard Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-body text-xs md:text-sm">
                  <Check className="w-4 h-4 text-white/40 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full liquid-glass rounded-full px-6 py-3 text-sm md:text-base text-white font-medium hover:bg-white/10 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro */}
          <div className="liquid-glass-strong rounded-3xl p-6 md:p-10 flex flex-col relative transform md:-translate-y-4 h-full border border-white/10">
            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] md:text-xs font-bold px-3 md:px-4 py-1 rounded-full whitespace-nowrap">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-heading italic text-white mb-2 mt-2 md:mt-0">Professional</h3>
            <p className="text-white/60 font-body text-xs md:text-sm mb-6 md:mb-8">For growing companies</p>
            <div className="mb-6 md:mb-8">
              <span className="text-4xl md:text-5xl font-heading italic text-white">$950</span>
            </div>
            <ul className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10 flex-1">
              {['Up to 15 Pages', 'Advanced Animations', 'CMS Integration', 'Comprehensive SEO', '3 Revision Rounds', 'Priority Support', 'Performance Optimization'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-body text-xs md:text-sm">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-black rounded-full px-6 py-3 text-sm md:text-base font-medium hover:bg-white/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className="liquid-glass rounded-3xl p-6 md:p-10 flex flex-col h-full">
            <h3 className="text-2xl font-heading italic text-white mb-2">Enterprise</h3>
            <p className="text-white/60 font-body text-xs md:text-sm mb-6 md:mb-8">For large-scale operations</p>
            <div className="mb-6 md:mb-8">
              <span className="text-4xl md:text-5xl font-heading italic text-white">Custom</span>
            </div>
            <ul className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10 flex-1">
              {['Unlimited Pages', 'Custom Web App Features', 'E-commerce Integration', 'Dedicated Account Manager', 'Unlimited Revisions', '24/7 SLA Support', 'Custom Analytics Dashboard'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-body text-xs md:text-sm">
                  <Check className="w-4 h-4 text-white/40 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full liquid-glass rounded-full px-6 py-3 text-sm md:text-base text-white font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <CtaFooter />
    </div>
  );
}
