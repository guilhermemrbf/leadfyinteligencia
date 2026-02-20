import { Gift } from "lucide-react";
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
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
            Bônus Exclusivos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Você ainda recebe <span className="gradient-text">tudo isso</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Inclusos em qualquer plano, sem custo adicional.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {bonuses.map((b, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass-card p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Gift className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-left">{b.name}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-muted-foreground line-through text-sm">
                    {b.fake}
                  </span>
                  <span className="text-primary font-bold">R$ 0</span>
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
