import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Pessoas já faturando com o Leadfy" },
  { value: 10, suffix: "K", label: "Ticket médio por app vendido (R$)" },
  { value: 15, suffix: " min", label: "Por dia para fechar clientes novos" },
  { value: 98, suffix: "%", label: "De satisfação — quase ninguém cancela" },
];

const StatsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
              Números que <span className="gradient-text">provam que funciona</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
              Não é promessa. São fatos. Veja os números de quem já está dentro.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 120} animation="scale-in">
              <div className="text-center group">
                <div className="font-display text-3xl md:text-5xl font-extrabold gradient-text mb-2 group-hover:scale-105 transition-transform duration-500">
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
