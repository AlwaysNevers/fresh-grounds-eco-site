import { Coffee, MapPin, Handshake } from "lucide-react";

const partners = [
  {
    name: "Red Whale Coffee",
    location: "Downtown SF",
    contribution: "~50 lbs/month",
    specialty: "Single-origin beans",
  },
  {
    name: "Morning Ritual Café",
    location: "Mission District",
    contribution: "~35 lbs/month",
    specialty: "Organic blends",
  },
  {
    name: "The Grind House",
    location: "Oakland",
    contribution: "~40 lbs/month",
    specialty: "Fair trade coffee",
  },
  {
    name: "Coastal Brew",
    location: "Berkeley",
    contribution: "~30 lbs/month",
    specialty: "Local roasters",
  },
];

const PartnershipsSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sage-light text-sage-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Handshake className="w-4 h-4" />
            <span>Local Partnerships</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Powered by Local Cafés
          </h2>
          <p className="text-muted-foreground text-lg">
            We partner with amazing local coffee shops who share our commitment 
            to sustainability. Together, we're turning their waste into something wonderful.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner) => (
            <div key={partner.name} className="card-elevated p-6 bg-background">
              <div className="w-12 h-12 rounded-full bg-coffee-light flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-coffee-dark" />
              </div>
              <h4 className="font-serif text-lg text-foreground mb-1">{partner.name}</h4>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <MapPin className="w-3 h-3" />
                {partner.location}
              </div>
              <div className="pt-3 border-t border-border">
                <div className="text-xs text-muted-foreground mb-1">Monthly contribution</div>
                <div className="font-medium text-accent">{partner.contribution}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-card rounded-3xl p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Own a Café? Partner With Us
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Join our network of eco-conscious cafés. We'll pick up your used coffee grounds 
            for free and give your waste a second life.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4"
          >
            Become a Partner →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
