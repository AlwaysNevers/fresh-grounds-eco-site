import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Fresh Grounds</title>
        <meta 
          name="description" 
          content="Get in touch with Fresh Grounds. Questions about our eco-friendly sachets? Want to partner with us? We'd love to hear from you." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  Get in Touch
                </span>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground mt-2 mb-6">
                  We'd Love to
                  <br />Hear From You
                </h1>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  Have questions about our products? Interested in partnering with us? 
                  Or just want to share your Fresh Grounds story? We're all ears.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-sage-light flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-sage-dark" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">hello@freshgrounds.co</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-terracotta-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-terracotta" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-coffee-light flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-coffee-dark" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Response Time</h4>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Partnership CTA */}
                <div className="mt-12 p-6 rounded-2xl bg-cream">
                  <h4 className="font-serif text-xl text-foreground mb-2">
                    Café Partnership Inquiries
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Own a café and want to donate your used coffee grounds? 
                    We'll pick them up for free and turn them into something amazing.
                  </p>
                  <span className="text-accent font-medium text-sm">
                    partnerships@freshgrounds.co
                  </span>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card-elevated p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-sage-dark" />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="accent" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
