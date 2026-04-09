import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: "Days, Not Months",
      description: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy."
    },
    {
      icon: <Palette className="w-5 h-5 text-white" />,
      title: "Obsessively Crafted",
      description: "Every detail considered. Every element refined. Design so precise, it feels inevitable."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      title: "Built to Convert",
      description: "Layouts informed by data. Decisions backed by performance. Results you can measure."
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Secure by Default",
      description: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-[10px] md:text-xs font-medium text-white font-body mb-4 md:mb-6">
          Why Us
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          The difference is everything.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-6 flex flex-col items-start text-left">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-5 md:mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-heading italic text-white mb-2 md:mb-3">
              {feature.title}
            </h3>
            <p className="text-white/60 font-body font-light text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
