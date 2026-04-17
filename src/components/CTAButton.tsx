import { Link } from "react-router-dom";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost";
  external?: boolean;
  size?: "sm" | "md" | "lg";
}

const CTAButton = ({ to, children, variant = "primary", external = false, size = "md" }: CTAButtonProps) => {
  const sizeStyles = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4 text-sm",
  };

  const base = `inline-flex items-center justify-center gap-2 font-body font-semibold tracking-[0.18em] uppercase transition-all duration-300 rounded-full ${sizeStyles[size]} will-change-transform`;

  const styles = {
    primary: `${base} bg-primary text-primary-foreground hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-orange-glow active:translate-y-0`,
    outline: `${base} border border-foreground/80 text-foreground hover:bg-foreground hover:text-background hover:border-foreground hover:-translate-y-0.5`,
    light: `${base} border border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:-translate-y-0.5`,
    ghost: `${base} text-primary hover:text-orange-700 hover:gap-3`,
  };

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={styles[variant]}>
        {children}
        {variant === "ghost" && <span aria-hidden="true">→</span>}
      </a>
    );
  }

  return (
    <Link to={to} className={styles[variant]}>
      {children}
      {variant === "ghost" && <span aria-hidden="true">→</span>}
    </Link>
  );
};

export default CTAButton;
