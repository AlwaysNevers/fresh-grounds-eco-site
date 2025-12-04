import { Leaf, TrendingDown, Heart, Globe } from "lucide-react";

const impactStats = [
  {
    icon: TrendingDown,
    value: "6M tons",
    label: "of coffee waste produced yearly in the US",
    description: "Most ends up in landfills, releasing methane—a potent greenhouse gas.",
  },
  {
    icon: Leaf,
    value: "2nd life",
    label: "for coffee grounds",
    description: "Coffee grounds are nutrient-rich and naturally absorbent—perfect for odor control.",
  },
  {
    icon: Heart,
    value: "Zero",
    label: "harmful chemicals",
    description: "Our sachets work without synthetic fragrances or toxic ingredients.",
  },
  {
    icon: Globe,
    value: "Local",
    label: "impact",
    description: "We partner with neighborhood cafés, keeping resources in our community.",
  },
];

const WhyUpcyclingSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground" id="story">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sage-light font-medium text-sm uppercase tracking-wider">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-2 mb-6">
              Why Upcycling Matters
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Every day, millions of pounds of coffee grounds are thrown away. We believe 
              in giving waste a second chance. By transforming discarded coffee into 
              something useful, we're reducing landfill waste while creating products 
              that are safe, effective, and truly sustainable.
            </p>

            <div className="space-y-6">
              {impactStats.slice(0, 2).map((stat) => (
                <div key={stat.label} className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-7 h-7 text-sage-light" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-serif">{stat.value}</span>
                      <span className="text-sm text-primary-foreground/70">{stat.label}</span>
                    </div>
                    <p className="text-sm text-primary-foreground/60">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Grid */}
          <div className="grid grid-cols-2 gap-4">
            {impactStats.slice(2).map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 rounded-2xl ${
                  index === 0 ? "bg-sage/20" : "bg-primary-foreground/10"
                }`}
              >
                <stat.icon className={`w-8 h-8 mb-4 ${index === 0 ? "text-sage-light" : "text-primary-foreground/80"}`} />
                <div className="text-2xl font-serif mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 mb-2">{stat.label}</div>
                <p className="text-xs text-primary-foreground/50">{stat.description}</p>
              </div>
            ))}

            {/* Large feature card */}
            <div className="col-span-2 p-8 rounded-2xl bg-gradient-to-br from-sage/30 to-sage/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-sage-dark" />
                </div>
                <div>
                  <h4 className="font-serif text-xl">Circular Economy</h4>
                  <p className="text-sm text-primary-foreground/70">Waste becomes resource</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                When you're done with your sachet, simply toss it in your compost bin. 
                The coffee grounds will enrich your soil, and the cotton fabric will 
                break down naturally—completing the circle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUpcyclingSection;
