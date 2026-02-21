import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 500, suffix: "+", label: "Pessoas usando o Leadfy para vender apps" },
  { value: 2, suffix: "K+", label: "Ticket médio por app vendido (R$)" },
  { value: 15, suffix: " min", label: "Por dia para prospectar clientes" },
  { value: 98, suffix: "%", label: "De satisfação entre os usuários" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl font-extrabold gradient-text mb-2">
        {value}
        <span>{suffix}</span>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              Resultados Reais
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Números que <span className="gradient-text">falam por si</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <StatItem {...s} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
