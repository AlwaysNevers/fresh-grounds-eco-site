import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag, Star } from "lucide-react";
import productSachets from "@/assets/product-sachets.jpg";

const benefits = [
  "Absorbs odors naturally for up to 60 days",
  "Made from upcycled coffee grounds",
  "Non-toxic & safe for pets and kids",
  "100% compostable packaging",
  "Infused with essential oils",
  "Handcrafted in small batches",
];

const ingredients = [
  { name: "Coffee Grounds", desc: "Upcycled from local cafés" },
  { name: "Baking Soda", desc: "Natural odor neutralizer" },
  { name: "Essential Oils", desc: "Pure lavender & eucalyptus" },
  { name: "Cotton Muslin", desc: "Organic, compostable fabric" },
];

const ProductSection = () => {
  return (
    <section className="section-padding bg-secondary/30" id="product">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl shadow-elevated overflow-hidden">
              <img 
                src={productSachets} 
                alt="Fresh Grounds coffee sachets flat lay with eucalyptus and coffee beans" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rating Badge */}
            <div className="absolute -top-4 -right-4 bg-background px-4 py-3 rounded-2xl shadow-medium">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">4.9</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">500+ reviews</p>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Signature Product
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mt-2 mb-4">
              Odor-Neutralizing
              <br />Coffee Sachet
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Each sachet is carefully handcrafted using rescued coffee grounds from local cafés, 
              blended with baking soda and pure essential oils, then sealed in beautiful 
              cotton muslin fabric.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage-dark" />
                  </div>
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Ingredients */}
            <div className="bg-card rounded-2xl p-6 mb-8">
              <h4 className="font-serif text-lg mb-4">What's Inside</h4>
              <div className="grid grid-cols-2 gap-4">
                {ingredients.map((item) => (
                  <div key={item.name}>
                    <span className="font-medium text-foreground text-sm">{item.name}</span>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif text-foreground">$14</span>
                  <span className="text-muted-foreground">/ 3-pack</span>
                </div>
                <p className="text-sm text-muted-foreground">Free shipping on orders $35+</p>
              </div>
              <Link to="/shop">
                <Button variant="accent-hero" className="w-full sm:w-auto">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
