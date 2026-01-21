import { useState } from "react";
import {
  Brain,
  Heart,
  Users,
  Smile,
  Baby,
  Leaf,
  UserRound,
  GraduationCap,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const therapyTypes = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one sessions to address personal challenges and foster growth.",
      color: "bg-sage-light",
    },
    {
      icon: Heart,
      title: "Couples Therapy",
      description: "Strengthen your relationship through improved communication and understanding.",
      color: "bg-ocean-light",
    },
    {
      icon: Users,
      title: "Family Counseling",
      description: "Navigate family dynamics and build healthier, more supportive relationships.",
      color: "bg-accent",
    },
    {
      icon: HeartHandshake,
      title: "Group Counseling",
      description:
        "Connect with others in a supportive group setting for shared healing experiences.",
      color: "bg-sage-light",
    },
  ];

  const ageGroups = [
    {
      icon: Baby,
      title: "Children",
      description:
        "Age-appropriate therapy designed to support emotional development and well-being.",
      color: "bg-ocean-light",
    },
    {
      icon: UserRound,
      title: "Adults",
      description:
        "Comprehensive mental health support tailored to adult life challenges and goals.",
      color: "bg-accent",
    },
    {
      icon: GraduationCap,
      title: "Seniors",
      description: "Compassionate care addressing the unique emotional needs of older adults.",
      color: "bg-sage-light",
    },
  ];

  const additionalServices = [
    {
      icon: Smile,
      title: "Anxiety & Depression",
      description: "Evidence-based treatments to help you manage symptoms and reclaim your life.",
      color: "bg-ocean-light",
    },
    {
      icon: Leaf,
      title: "Stress Management",
      description: "Learn practical techniques to reduce stress and improve overall well-being.",
      color: "bg-accent",
    },
    {
      icon: Baby,
      title: "Child & Teen Therapy",
      description:
        "Specialized support for young people facing emotional and behavioral challenges.",
      color: "bg-sage-light",
    },
  ];

  const ServiceCard = ({ service }: { service: (typeof therapyTypes)[0] }) => (
    <div className="group card-calm hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div
        className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <service.icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
      {/*<span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">*/}
      {/*  Learn more <ArrowRight className="w-4 h-4" />*/}
      {/*</span>*/}
    </div>
  );

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

        {/* Therapy Types */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              By Therapy Type
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapyTypes.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        {/* Age Groups */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-ocean rounded-full"></div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              By Age Group
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ageGroups.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        {/* Additional Services - Expandable */}
        <div
          className={`overflow-hidden transition-all duration-500 ${showAllServices ? "max-h-[1000px] opacity-100 mb-12" : "max-h-0 opacity-0"}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-sage rounded-full"></div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              Specialized Services
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAllServices(!showAllServices)}
            className="gap-2"
          >
            {showAllServices ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View All Services <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
