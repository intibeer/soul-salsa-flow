import { Link } from "react-router-dom";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
  external?: boolean;
}

const CTAButton = ({ to, children, variant = "primary", external = false }: CTAButtonProps) => {
  const base = "inline-block px-8 py-3 font-body text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-sm";

  const styles = {
    primary: `${base} bg-primary text-primary-foreground hover:opacity-90`,
    outline: `${base} border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground`,
    light: `${base} border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground`,
  };

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={styles[variant]}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={styles[variant]}>
      {children}
    </Link>
  );
};

export default CTAButton;
