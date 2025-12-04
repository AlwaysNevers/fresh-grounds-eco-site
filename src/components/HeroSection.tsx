import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, Sparkles } from "lucide-react";
import heroSachet from "@/assets/hero-sachet.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage-light rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream-dark rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta-light rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sage-light text-sage-dark px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <Recycle className="w-4 h-4" />
              <span>Made from upcycled coffee grounds</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
              Fresh Scents,
              <br />
              <span className="text-coffee">Zero Waste</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-up animation-delay-200">
              Our compostable sachets transform used coffee grounds into powerful, 
              non-toxic odor neutralizers. Good for your home, great for the planet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Link to="/shop">
                <Button variant="hero">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="hero-outline" onClick={() => scrollToSection("how-it-works")}>
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 animate-fade-up animation-delay-400">
              {[
                { icon: Leaf, label: "100% Natural" },
                { icon: Recycle, label: "Compostable" },
                { icon: Sparkles, label: "Non-Toxic" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
                  <badge.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in animation-delay-200">
            <div className="relative w-full max-w-lg">
              {/* Main Product Image */}
              <div className="aspect-square rounded-3xl shadow-elevated overflow-hidden">
                <img 
                  src={heroSachet} 
                  alt="Fresh Grounds odor-neutralizing sachet made from upcycled coffee grounds" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-medium animate-float">
                <span className="font-medium">Eco-Certified ✓</span>
              </div>

              {/* Second Floating Element */}
              <div className="absolute -top-4 -right-4 bg-background px-5 py-3 rounded-2xl shadow-medium animate-float animation-delay-200">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-sage" />
                  <span className="font-medium text-foreground text-sm">100% Natural</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
