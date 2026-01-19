import { Brain, Heart, Users, Smile, Baby, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description:
        "One-on-one sessions to address anxiety, depression, trauma, and personal growth.",
      color: "bg-sage-light",
    },
    {
      icon: Users,
      title: "Couples Therapy",
      description: "Strengthen your relationship through improved communication and understanding.",
      color: "bg-ocean-light",
    },
    {
      icon: Heart,
      title: "Family Counseling",
      description: "Navigate family dynamics and build healthier, more supportive relationships.",
      color: "bg-accent",
    },
    {
      icon: Smile,
      title: "Anxiety & Depression",
      description: "Evidence-based treatments to help you manage symptoms and reclaim your life.",
      color: "bg-sage-light",
    },
    {
      icon: Leaf,
      title: "Stress Management",
      description: "Learn practical techniques to reduce stress and improve overall well-being.",
      color: "bg-ocean-light",
    },
    {
      icon: Baby,
      title: "Child & Teen Therapy",
      description: "Age-appropriate support for young people facing emotional challenges.",
      color: "bg-accent",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a wide range of therapeutic services to support you on your journey toward
            emotional wellness and personal growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, _index) => (
            <div
              key={service.title}
              className="group card-calm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
