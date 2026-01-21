import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Peaceful nature scene"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-sage-light blob-shape opacity-60 animate-float-slow blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-ocean-light blob-shape opacity-40 animate-float blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-light/80 text-sage-dark text-sm font-medium mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gentle" />
            Licensed Mental Health Professionals
          </div>

          {/* Main Headline */}
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Your Journey to <span className="text-gradient">Healing</span> Begins Here
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            A safe, compassionate space where you can explore your thoughts, overcome challenges,
            and discover the path to emotional well-being.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="lg">
              Book a Session
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <p className="text-2xl font-serif font-semibold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-border/50 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-serif font-semibold text-foreground">2,500+</p>
              <p className="text-sm text-muted-foreground">Clients Helped</p>
            </div>
            <div className="w-px h-10 bg-border/50 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-serif font-semibold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Confidential</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
