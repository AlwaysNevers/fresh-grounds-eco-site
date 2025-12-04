import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-cream">
      <div className="container-narrow">
        <div className="relative rounded-3xl bg-primary text-primary-foreground overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-coffee-light/20 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-sage-dark" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              Ready to Freshen Up
              <br />
              <span className="text-sage-light">Sustainably?</span>
            </h2>

            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Join thousands of eco-conscious homes making a difference—one sachet at a time. 
              Free shipping on orders over $35.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button 
                  variant="secondary" 
                  size="xl" 
                  className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Shop Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="xl"
                  className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-primary-foreground/20">
              {[
                "Free shipping $35+",
                "30-day returns",
                "Satisfaction guaranteed",
              ].map((item) => (
                <span key={item} className="text-sm text-primary-foreground/70">
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
