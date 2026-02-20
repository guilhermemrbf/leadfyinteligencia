import { Gift, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const bonuses = [
  { name: "Biblioteca de Abordagens por Nicho", fake: "R$ 97" },
  { name: "Scripts de Venda de Apps", fake: "R$ 67" },
  { name: "Guia Completo de Prospecção", fake: "R$ 47" },
  { name: "Modelos de Proposta Comercial", fake: "R$ 57" },
  { name: "Atualizações Vitalícias de Prompts", fake: "R$ 197" },
];

const BonusSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            Bônus Exclusivos
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Você ainda recebe <span className="gradient-text">tudo isso</span>
          </h2>
          <p className="text-muted-foreground mb-10 md:mb-12 text-sm md:text-base">
            Inclusos em qualquer plano, sem custo adicional.
          </p>
        </AnimatedSection>

        <div className="space-y-3 md:space-y-4">
          {bonuses.map((b, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass-card p-4 md:p-5 flex items-center justify-between gap-3 md:gap-4 hover-card-glow hover-inner-glow group">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_10px_hsl(199_75%_48%/0.2)] transition-all duration-300">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-left text-sm md:text-base">{b.name}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                  <span className="text-muted-foreground line-through text-xs md:text-sm">
                    {b.fake}
                  </span>
                  <span className="text-primary font-bold text-sm md:text-base">R$ 0</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
