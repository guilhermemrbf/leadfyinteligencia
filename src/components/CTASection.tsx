import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  return (
    <section id="cta" className="spotlight-bg section-spacing">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Pronto para parar de adivinhar e{" "}
            <span className="gradient-text">começar a crescer?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-lg mx-auto">
            Fale com um especialista da Leadfy. Sem enrolação, sem pitch genérico.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <a
            href="#"
            className="btn-shimmer inline-block text-lg font-bold text-primary-foreground px-10 py-5 rounded-xl relative"
          >
            <span className="relative z-10">Quero minha estratégia gratuita →</span>
          </a>
          <p className="text-muted-foreground text-sm mt-5">
            Vagas limitadas por semana. Atendemos com foco, não em escala.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
