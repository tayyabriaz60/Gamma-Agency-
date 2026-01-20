import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Globe, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+92 305 7988669",
      href: "tel:+923057988669",
    },
    {
      icon: Mail,
      label: "Email",
      value: "mentalhealthwith01@gmail.com",
      href: "mailto:mentalhealthwith01@gmail.com",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            We're Here for You
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Taking the first step is often the hardest. Reach out today, and let's start your
            journey toward healing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="card-calm">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Schedule a Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border/50 focus:border-primary"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border/50 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How can we help you?
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us a bit about what you're experiencing and what kind of support you're looking for..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border/50 focus:border-primary min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                Request a Callback
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your information is completely confidential and will never be shared.
              </p>
            </form>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="card-calm">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-calm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-ocean-light flex items-center justify-center">
                  <Globe className="w-5 h-5 text-ocean" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Global Availability
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium block">Available 24/7</span>
                    <span className="text-muted-foreground text-sm">Round-the-clock support</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-ocean/5 border border-ocean/10">
                  <div className="w-8 h-8 rounded-full bg-ocean/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-ocean" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium block">Flexible Scheduling</span>
                    <span className="text-muted-foreground text-sm">Across all time zones</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mt-5 leading-relaxed text-sm border-t border-border/30 pt-4">
                Available anytime, anywhere — our team provides compassionate support across the
                globe, whenever you need it.
              </p>
            </div>

            {/* Emergency Note */}
            <div className="p-4 rounded-xl bg-accent border border-accent-foreground/10">
              <p className="text-sm text-accent-foreground">
                <strong>Crisis Support:</strong> If you're in crisis or need immediate help, please
                call the National Crisis Line or contact local emergency services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
