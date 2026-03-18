import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const bonuses = [
  "Biblioteca de Abordagens por Nicho",
  "Scripts de Venda Prontos",
  "Guia: Do Zero ao 1º Cliente em 7 Dias",
  "Modelos de Proposta Profissionais",
  "Atualizações Vitalícias",
];

const BonusSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Você ainda leva <span className="gradient-text">bônus exclusivos</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-sm md:text-base max-w-lg mx-auto">
            Tudo incluso para quem entra agora. Sem custo adicional.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="glass-card p-6 md:p-8 border-primary/15">
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {bonuses.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BonusSection;
