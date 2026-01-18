import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Anxiety Treatment",
      content: "After years of struggling with anxiety, I finally found a therapist who truly understood me. The techniques I learned have transformed how I handle stress. I'm forever grateful.",
      rating: 5,
    },
    {
      name: "James & Emily T.",
      role: "Couples Therapy",
      content: "We came in on the verge of separation. Six months later, our relationship is stronger than ever. Dr. Chen helped us communicate in ways we never thought possible.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Depression Recovery",
      content: "The team at MindfulCare gave me hope when I had none. Their compassionate, evidence-based approach helped me rediscover joy in life again.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-calm">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Stories of Healing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from individuals and families who have found support, 
            healing, and hope through our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-calm relative group hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-80">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-serif font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          *Names have been changed to protect client privacy. Testimonials shared with permission.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
