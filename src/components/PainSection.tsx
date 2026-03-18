import { XCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pains = [
  "Vê outros faturando com apps e não sabe como começar",
  "Não sabe programar e acha que precisa aprender",
  "Não sabe qual nicho escolher nem quanto cobrar",
  "Manda mensagens genéricas e ninguém responde",
];

const PainSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Se você se identifica com isso,{" "}
            <span className="text-destructive">está deixando dinheiro na mesa</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 md:mb-10 max-w-xl mx-auto">
            O problema não é falta de talento — é falta de método. O Leadfy resolve cada um desses pontos.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
          {pains.map((pain, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass-card p-4 md:p-5 flex items-center gap-3 h-full group hover:border-destructive/20 transition-colors duration-300">
                <XCircle className="w-4 h-4 text-destructive shrink-0" />
                <p className="text-sm text-foreground/90 text-left">{pain}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <a
            href="#solucao"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline transition-all"
          >
            Veja como o Leadfy resolve isso
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PainSection;
