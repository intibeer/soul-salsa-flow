interface SectionHeadingProps {
  handwritten?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ handwritten, title, subtitle, centered = true, light = false }: SectionHeadingProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    {handwritten && (
      <span className={`font-handwritten text-3xl md:text-4xl ${light ? "text-primary-foreground/80" : "text-primary"} block mb-2`}>
        {handwritten}
      </span>
    )}
    <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold ${light ? "text-primary-foreground" : "text-foreground"} leading-tight`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`font-body text-lg mt-4 max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
