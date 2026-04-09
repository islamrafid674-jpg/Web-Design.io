export function Testimonials() {
  const testimonials = [
    {
      quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
      name: "Sarah Chen",
      role: "CEO, JGomez Constructora"
    },
    {
      quote: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
      name: "Marcus Webb",
      role: "Owner, Eddie's Lawn Services"
    },
    {
      quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
      name: "Elena Voss",
      role: "Director, W Pabon"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-[10px] md:text-xs font-medium text-white font-body mb-4 md:mb-6">
          What They Say
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <p className="text-white/80 font-body font-light text-sm italic mb-6 md:mb-8">
              "{testimonial.quote}"
            </p>
            <div>
              <p className="text-white font-body font-medium text-sm">
                {testimonial.name}
              </p>
              <p className="text-white/50 font-body font-light text-xs">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
