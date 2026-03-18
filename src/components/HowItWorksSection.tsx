import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entendemos seu negócio, público e posicionamento para criar a estratégia perfeita.",
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Montamos o funil ideal com tráfego + qualificação automática para atrair os clientes certos.",
  },
  {
    num: "03",
    title: "Resultado",
    desc: "Leads quentes chegando, pipeline cheio, vendas acontecendo de forma previsível.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-spacing">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Do primeiro clique ao contrato assinado
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Um processo claro, previsível e focado em resultado.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-[2.5rem] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className="glass-card p-6 md:p-8 flex items-start gap-5 md:gap-8 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{s.num}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
