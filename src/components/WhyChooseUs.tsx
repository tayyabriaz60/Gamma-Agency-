import { CheckCircle2, Award, Clock, Lock, Sparkles, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Licensed Professionals",
      description:
        "All our therapists hold advanced degrees and are fully licensed in their respective fields.",
    },
    {
      icon: Lock,
      title: "Strict Confidentiality",
      description:
        "Your sessions and personal information are protected by the highest ethical standards.",
    },
    {
      icon: Sparkles,
      title: "Evidence-Based Therapy",
      description:
        "We use scientifically proven methods including CBT, DBT, and mindfulness-based approaches.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Approach",
      description:
        "Every treatment plan is tailored to your unique needs, goals, and circumstances.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Evening and weekend appointments available to fit your busy lifestyle.",
    },
    {
      icon: CheckCircle2,
      title: "Proven Results",
      description: "95% of our clients report significant improvement in their mental well-being.",
    },
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            You Deserve the Best Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We understand that choosing a therapist is a significant decision. Here's why families
            trust MindfulCare for their mental health needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, _index) => (
            <div
              key={reason.title}
              className="group p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
