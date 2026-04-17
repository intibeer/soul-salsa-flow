interface SectionHeadingProps {
  handwritten?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ handwritten, title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  const dividerBase = "mt-5 h-[2px] w-12 rounded-full";
  const dividerColor = light
    ? "bg-primary-foreground/70"
    : "bg-gradient-to-r from-orange-600 to-orange-400";

  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {handwritten && (
        <span
          className={`font-handwritten text-3xl md:text-4xl ${
            light ? "text-primary-foreground/90" : "text-primary"
          } block mb-1`}
        >
          {handwritten}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight ${
          light ? "text-primary-foreground" : "text-foreground"
        } leading-[1.1]`}
      >
        {title}
      </h2>
      <div className={`${dividerBase} ${dividerColor} ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p
          className={`font-body text-base md:text-lg mt-5 max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
