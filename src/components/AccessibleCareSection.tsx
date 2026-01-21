import { CreditCard, ShieldCheck } from "lucide-react";

const AccessibleCareSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-sage-light/30 to-background">
      <div className="container-narrow mx-auto">
        <div className="card-calm bg-gradient-to-br from-sage-light/50 to-background border border-sage/20 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-12 h-12 rounded-lg bg-sage/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-forest" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Accessible Care</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-background/80 border border-border/30">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-foreground font-medium block">International Payments</span>
                <span className="text-muted-foreground text-sm">Secure global methods</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-background/80 border border-border/30">
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-forest" />
              </div>
              <div>
                <span className="text-foreground font-medium block">No Insurance Required</span>
                <span className="text-muted-foreground text-sm">Care for everyone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibleCareSection;
