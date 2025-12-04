import { Coffee, Wind, Droplets, Package } from "lucide-react";

const steps = [
  {
    icon: Coffee,
    title: "Collect",
    description: "We rescue used coffee grounds from local cafés before they end up in landfills.",
    color: "bg-coffee-light",
    iconColor: "text-coffee-dark",
  },
  {
    icon: Wind,
    title: "Dry & Sterilize",
    description: "Grounds are carefully dried and sterilized to remove moisture and bacteria.",
    color: "bg-terracotta-light",
    iconColor: "text-terracotta",
  },
  {
    icon: Droplets,
    title: "Blend",
    description: "We mix the grounds with baking soda and pure essential oils for maximum effectiveness.",
    color: "bg-sage-light",
    iconColor: "text-sage-dark",
  },
  {
    icon: Package,
    title: "Seal & Ship",
    description: "Each blend is hand-sealed in compostable cotton muslin and shipped plastic-free.",
    color: "bg-cream-dark",
    iconColor: "text-coffee",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding" id="how-it-works">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From café waste to your home—discover our sustainable upcycling process 
            that transforms coffee grounds into powerful odor eliminators.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step Number */}
                <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold items-center justify-center z-10">
                  {index + 1}
                </div>

                <div className="card-elevated p-8 text-center h-full">
                  {/* Icon */}
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                  </div>

                  {/* Mobile Step Number */}
                  <div className="lg:hidden inline-flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">Step {index + 1}</span>
                  </div>

                  <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {[
            { value: "500+", label: "lbs of coffee rescued" },
            { value: "15", label: "café partners" },
            { value: "100%", label: "plastic-free packaging" },
            { value: "60", label: "days of freshness" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-serif text-coffee mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
