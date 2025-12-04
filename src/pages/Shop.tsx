import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Check, Star, Leaf } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Starter Pack",
    description: "Perfect for trying Fresh Grounds",
    price: 14,
    quantity: "3 sachets",
    features: ["60-day freshness each", "Mixed scents", "Free shipping"],
    popular: false,
  },
  {
    id: 2,
    name: "Home Bundle",
    description: "Best value for your whole home",
    price: 38,
    originalPrice: 45,
    quantity: "10 sachets",
    features: ["60-day freshness each", "Lavender & Eucalyptus", "Free shipping", "Save 15%"],
    popular: true,
  },
  {
    id: 3,
    name: "Subscription",
    description: "Fresh delivery every 2 months",
    price: 12,
    quantity: "3 sachets/delivery",
    features: ["Auto-renew savings", "Priority shipping", "Cancel anytime"],
    popular: false,
    isSubscription: true,
  },
];

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop | Fresh Grounds - Eco-Friendly Odor Sachets</title>
        <meta 
          name="description" 
          content="Shop our collection of eco-friendly, compostable odor neutralizing sachets made from upcycled coffee grounds." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Shop Fresh Grounds
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mt-2 mb-4">
                Choose Your Pack
              </h1>
              <p className="text-muted-foreground text-lg">
                Every purchase helps rescue coffee grounds from landfills. 
                Free shipping on orders over $35.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className={`relative rounded-3xl p-8 ${
                    product.popular 
                      ? "bg-primary text-primary-foreground shadow-elevated scale-105" 
                      : "card-elevated"
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl mb-2">{product.name}</h3>
                    <p className={`text-sm ${product.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {product.description}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-serif">${product.price}</span>
                      {product.originalPrice && (
                        <span className={`text-lg line-through ${product.popular ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className={`text-sm ${product.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {product.quantity}
                      {product.isSubscription && " • billed bi-monthly"}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          product.popular ? "bg-sage" : "bg-sage-light"
                        }`}>
                          <Check className={`w-3 h-3 ${product.popular ? "text-sage-dark" : "text-sage-dark"}`} />
                        </div>
                        <span className={`text-sm ${product.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={product.popular ? "secondary" : "accent"}
                    className={`w-full ${product.popular ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}`}
                    size="lg"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>

            {/* Trust Section */}
            <div className="bg-cream rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-7 h-7 text-sage-dark" />
                  </div>
                  <h4 className="font-serif text-lg mb-2">100% Natural</h4>
                  <p className="text-sm text-muted-foreground">
                    No synthetic fragrances or toxic chemicals. Safe for your family and pets.
                  </p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-full bg-terracotta-light flex items-center justify-center mx-auto mb-4">
                    <Star className="w-7 h-7 text-terracotta" />
                  </div>
                  <h4 className="font-serif text-lg mb-2">Satisfaction Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">
                    Not happy? Get a full refund within 30 days, no questions asked.
                  </p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-full bg-coffee-light flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-7 h-7 text-coffee-dark" />
                  </div>
                  <h4 className="font-serif text-lg mb-2">Free Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    On all orders over $35. Fast, eco-friendly packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Shop;
