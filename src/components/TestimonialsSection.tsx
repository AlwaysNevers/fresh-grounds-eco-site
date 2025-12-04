import { Star, Car, Bath, Dumbbell, PawPrint } from "lucide-react";

const useCases = [
  { icon: Car, label: "Cars", description: "Keeps your car smelling fresh on every drive" },
  { icon: Bath, label: "Bathrooms", description: "Neutralizes odors naturally, no harsh chemicals" },
  { icon: Dumbbell, label: "Gym Bags", description: "Tackles post-workout funk effectively" },
  { icon: PawPrint, label: "Pet Areas", description: "Safe for furry friends, tough on smells" },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "San Francisco, CA",
    text: "I've tried so many air fresheners, but Fresh Grounds is the only one that actually neutralizes odors instead of just masking them. Plus, I love knowing I'm helping reduce waste!",
    rating: 5,
    useCase: "Kitchen",
  },
  {
    name: "Michael T.",
    location: "Oakland, CA",
    text: "Put one in my gym bag and the difference is incredible. My wife actually lets me keep my bag inside now! The natural scent is subtle and pleasant.",
    rating: 5,
    useCase: "Gym Bag",
  },
  {
    name: "Emily R.",
    location: "Berkeley, CA",
    text: "As a dog owner, I'm always battling pet odors. These sachets are a game-changer—completely safe for my pups and they work so well!",
    rating: 5,
    useCase: "Pet Area",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Versatile Solutions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mt-2">
              Where to Use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((item) => (
              <div key={item.label} className="card-elevated p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-sage-dark" />
                </div>
                <h4 className="font-serif text-lg text-foreground mb-2">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Customer Love
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mt-2">
              What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card-elevated p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <div className="px-3 py-1 bg-sage-light text-sage-dark rounded-full text-xs font-medium">
                      {testimonial.useCase}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
