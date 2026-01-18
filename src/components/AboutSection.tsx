import { Heart, Shield, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every individual deserves to be heard and understood without judgment.",
    },
    {
      icon: Shield,
      title: "Complete Confidentiality",
      description: "Your privacy and trust are sacred. Everything shared stays protected.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Licensed professionals with specialized training in diverse therapeutic approaches.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-calm">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            A Place of Understanding
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a dedicated team of licensed psychologists committed to providing 
            evidence-based therapy in a warm, welcoming environment. Your mental health 
            matters, and we're here to walk alongside you.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-calm group hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-card border border-border/50 text-center">
          <blockquote className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
            "Our mission is to provide accessible, compassionate mental health care 
            that empowers individuals to overcome challenges and live fulfilling lives."
          </blockquote>
          <p className="mt-6 text-sm font-medium text-primary">— MindfulCare Team</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
