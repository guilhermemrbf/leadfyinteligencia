import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 340, suffix: "+", label: "Empresas atendidas" },
  { value: 12, prefix: "R$ ", suffix: "M+", label: "Em receita gerada para clientes" },
  { value: 4.9, suffix: "★", label: "Avaliação média dos clientes", isDecimal: true },
  { value: 72, suffix: "h", label: "Para os primeiros resultados aparecerem" },
];

const StatsSection = () => {
  return (
    <section id="resultados" className="section-spacing" style={{ background: "linear-gradient(180deg, hsl(259 40% 8%) 0%, hsl(0 0% 4%) 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
            Números que falam por si
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-3 animate-number-pop" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
                  {s.prefix || ""}
                  {s.isDecimal ? s.value : <AnimatedCounter end={s.value} suffix={s.suffix} />}
                  {s.isDecimal && s.suffix}
                </div>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
