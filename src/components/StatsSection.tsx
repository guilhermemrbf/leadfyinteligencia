import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Pessoas já faturando" },
  { value: 10, suffix: "K", label: "Ticket médio por app (R$)" },
  { value: 15, suffix: " min", label: "Por dia para prospectar" },
  { value: 98, suffix: "%", label: "Satisfação dos membros" },
];

const StatsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-extrabold gradient-text mb-1.5">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
