import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { icon: "w-8 h-8 text-sm", text: "text-lg" },
  md: { icon: "w-10 h-10 text-base", text: "text-xl" },
  lg: { icon: "w-12 h-12 text-lg", text: "text-2xl" },
};

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const s = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "rounded-xl bg-gradient-to-br from-primary to-gold-muted flex items-center justify-center font-serif font-bold text-primary-foreground shadow-lg",
          s.icon
        )}
        aria-hidden="true"
      >
        Γ
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn("font-serif font-semibold text-foreground tracking-tight", s.text)}>
            The Gamma
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans font-semibold mt-0.5">
            Agency
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
