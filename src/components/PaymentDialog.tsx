import { useState } from "react";
import {
  CheckCircle2, Copy, Mail, Phone, CreditCard,
  Calendar, ArrowRight, ArrowLeft, AlertTriangle, Clock,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PAYPAL_EMAIL = "merri8765@gmail.com";
const PAYONEER_EMAIL = "m.hammadsaani@gmail.com";
const CONTACT_PHONE  = "+92 305 7988669";
const CONTACT_EMAIL  = "mentalhealthwith01@gmail.com";

const SESSION_PLANS = [
  {
    id: "single",
    name: "Single Session",
    price: "$28",
    sessions: "1 session",
    badge: null,
  },
  {
    id: "weekly",
    name: "Weekly Plan",
    price: "$50",
    sessions: "2 sessions / week",
    badge: "Popular",
  },
  {
    id: "monthly",
    name: "Monthly Plan",
    price: "$95",
    sessions: "4 sessions / month",
    badge: "Best Value",
  },
];

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StepIndicator = ({ currentStep }: { currentStep: number }) => (
  <div className="flex items-center justify-center gap-2 mb-5">
    {[1, 2, 3].map((step) => (
      <div key={step} className="flex items-center gap-2">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
            currentStep === step
              ? "bg-primary text-primary-foreground shadow-md"
              : currentStep > step
              ? "bg-primary/20 text-primary"
              : "bg-muted text-muted-foreground"
          )}
        >
          {currentStep > step ? <CheckCircle2 className="w-4 h-4" /> : step}
        </div>
        {step < 3 && (
          <div className={cn("w-8 h-px transition-all duration-300", currentStep > step ? "bg-primary" : "bg-border")} />
        )}
      </div>
    ))}
  </div>
);

const CopyButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback: append textarea inside the dialog so Radix focus trap doesn't block select()
      const container = document.querySelector('[role="dialog"]') ?? document.body;
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.cssText = "position:absolute;left:-9999px;top:-9999px;opacity:0;pointer-events:none";
      container.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      container.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded transition-all duration-200",
        copied
          ? "bg-green-100 text-green-700"
          : "bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10"
      )}
      aria-label="Copy"
    >
      {copied ? (
        <>
          <CheckCircle2 className="w-3.5 h-3.5" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          Copy
        </>
      )}
    </button>
  );
};

// Step 1
const SessionStep = ({
  selected, onSelect, onNext,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}) => (
  <div key="step-1" className="flex flex-col gap-3">
    <DialogHeader>
      <DialogTitle className="font-serif text-xl text-center">Choose Your Plan</DialogTitle>
      <DialogDescription className="text-center text-xs">
        All sessions are conducted via secure video call.
      </DialogDescription>
    </DialogHeader>

    <div className="flex flex-col gap-2">
      {SESSION_PLANS.map((plan) => (
        <label
          key={plan.id}
          className={cn(
            "flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200",
            selected === plan.id
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40 bg-background"
          )}
        >
          <input
            type="radio"
            name="session-plan"
            value={plan.id}
            checked={selected === plan.id}
            onChange={() => onSelect(plan.id)}
            className="accent-primary"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">{plan.name}</span>
              {plan.badge && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {plan.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{plan.sessions}</p>
          </div>
          <span className="font-bold text-primary">{plan.price}</span>
        </label>
      ))}
    </div>

    <p className="text-xs text-center text-muted-foreground">
      No charge until you confirm payment in the next step.
    </p>

    <Button onClick={onNext} disabled={!selected} className="w-full">
      Next <ArrowRight className="w-4 h-4 ml-1" />
    </Button>
  </div>
);

// Step 2
const PaymentStep = ({
  selectedPlan, onNext, onBack,
}: {
  selectedPlan: (typeof SESSION_PLANS)[0] | undefined;
  onNext: () => void;
  onBack: () => void;
}) => (
  <div key="step-2" className="flex flex-col gap-3">
    <DialogHeader>
      <DialogTitle className="font-serif text-xl text-center">Complete Payment</DialogTitle>
      <DialogDescription className="text-center text-xs">
        Send payment via PayPal or Payoneer.
      </DialogDescription>
    </DialogHeader>

    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200">
      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
      <p className="text-xs text-amber-800">
        <span className="font-semibold">Important:</span> Complete payment <span className="font-semibold">before</span> your session. Sessions confirm on receipt only.
      </p>
    </div>

    {selectedPlan && (
      <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-primary/5 border border-primary/20">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">{selectedPlan.name}</span>
          <span className="text-xs text-muted-foreground">— {selectedPlan.sessions}</span>
        </div>
        <span className="font-bold text-primary">{selectedPlan.price}</span>
      </div>
    )}

    {/* PayPal */}
    <div className="p-3 rounded-lg border border-border bg-background">
      <div className="flex items-center gap-2 mb-1.5">
        <CreditCard className="w-4 h-4 text-primary" />
        <span className="font-semibold text-sm text-foreground">PayPal</span>
      </div>
      <div className="flex items-center justify-between bg-muted rounded px-3 py-2">
        <span className="text-sm font-mono text-foreground">{PAYPAL_EMAIL}</span>
        <CopyButton value={PAYPAL_EMAIL} />
      </div>
      <p className="text-xs text-muted-foreground mt-1.5">
        Send as <span className="font-medium">"Friends &amp; Family"</span> — include your name in the note.
      </p>
    </div>

    {/* Payoneer */}
    <div className="p-3 rounded-lg border border-border bg-background">
      <div className="flex items-center gap-2 mb-1.5">
        <CreditCard className="w-4 h-4 text-primary" />
        <span className="font-semibold text-sm text-foreground">Payoneer</span>
      </div>
      <div className="flex items-center justify-between bg-muted rounded px-3 py-2">
        <span className="text-sm font-mono text-foreground">{PAYONEER_EMAIL}</span>
        <CopyButton value={PAYONEER_EMAIL} />
      </div>
      <p className="text-xs text-muted-foreground mt-1.5">
        Use <span className="font-medium">"Pay a contact"</span> and send to the exact email above.
      </p>
    </div>

    <div className="flex gap-2">
      <Button variant="outline" onClick={onBack} className="flex-1">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back
      </Button>
      <Button onClick={onNext} className="flex-1">
        Next <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  </div>
);

// Step 3
const ConfirmationStep = ({
  selectedPlan, onDone, onBack,
}: {
  selectedPlan: (typeof SESSION_PLANS)[0] | undefined;
  onDone: () => void;
  onBack: () => void;
}) => (
  <div key="step-3" className="flex flex-col gap-3">
    <DialogHeader>
      <DialogTitle className="font-serif text-xl text-center">Send Payment Proof</DialogTitle>
      <DialogDescription className="text-center text-xs">
        Share your screenshot or transaction ID with us.
      </DialogDescription>
    </DialogHeader>

    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-green-50 border border-green-200">
      <Clock className="w-4 h-4 text-green-700 mt-0.5 shrink-0" />
      <p className="text-xs text-green-800">
        <span className="font-semibold">Confirmed within 30 minutes</span> of receiving your payment proof.
      </p>
    </div>

    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-1">Send proof to</p>

      {[
        { icon: Phone, label: "WhatsApp", value: CONTACT_PHONE },
        { icon: Mail,  label: "Email",    value: CONTACT_EMAIL },
      ].map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border bg-background">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground leading-none mb-0.5">{label}</p>
            <p className="text-sm font-medium text-foreground truncate">{value}</p>
          </div>
          <CopyButton value={value} />
        </div>
      ))}
    </div>

    {selectedPlan && (
      <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-primary/5 border border-primary/20">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">{selectedPlan.name}</span>
        </div>
        <span className="font-bold text-primary">{selectedPlan.price}</span>
      </div>
    )}

    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200">
      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
      <p className="text-xs text-amber-800">
        <span className="font-semibold">Reminder:</span> Pay before your session — unconfirmed bookings may be cancelled.
      </p>
    </div>

    <div className="flex gap-2">
      <Button variant="outline" onClick={onBack} className="flex-1">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back
      </Button>
      <Button onClick={onDone} className="flex-1">
        Done <CheckCircle2 className="w-4 h-4 ml-1" />
      </Button>
    </div>
  </div>
);

// Main Dialog
const PaymentDialog = ({ open, onOpenChange }: PaymentDialogProps) => {
  const [step, setStep] = useState(1);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const selectedPlan = SESSION_PLANS.find((p) => p.id === selectedPlanId);

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setSelectedPlanId(null);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-md max-h-[90vh] overflow-y-auto"
        overlayClassName="bg-black/40"
      >
        <StepIndicator currentStep={step} />

        {step === 1 && (
          <SessionStep
            selected={selectedPlanId}
            onSelect={setSelectedPlanId}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <PaymentStep
            selectedPlan={selectedPlan}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <ConfirmationStep
            selectedPlan={selectedPlan}
            onDone={handleClose}
            onBack={() => setStep(2)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;