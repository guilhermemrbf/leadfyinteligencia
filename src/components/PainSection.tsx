import { AlertTriangle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pains = [
  "Você sabe criar apps incríveis, mas encontrar clientes parece impossível.",
  "Depende de indicações, sorte ou anúncios que custam caro e não convertem.",
  "A prospecção é lenta, incerta e trava porque você não sabe o que dizer.",
  "Já tentou abordar empresas, mas desistiu por falta de método e respostas.",
];

const PainSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            A culpa não é sua
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-5 md:mb-6">
            Você sabe criar. Mas ninguém te ensinou a{" "}
            <span className="gradient-text">vender.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto">
            A maioria dos criadores de apps domina a tecnologia, mas trava na hora
            de buscar clientes. E sem clientes, o melhor app do mundo não paga as
            contas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {pains.map((pain, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-5 md:p-6 text-left flex items-start gap-3 md:gap-4 h-full hover-card-glow hover-inner-glow group">
                <AlertTriangle className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-foreground/90 text-sm md:text-base">{pain}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
