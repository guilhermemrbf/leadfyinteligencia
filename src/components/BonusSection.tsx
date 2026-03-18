import { Check, Gift, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const bonuses = [
  { name: "Biblioteca de Abordagens Matadoras por Nicho", fake: "R$ 197" },
  { name: "Scripts de Venda que Fecham Sozinhos", fake: "R$ 147" },
  { name: "Guia Completo: Do Zero ao 1º Cliente em 7 Dias", fake: "R$ 97" },
  { name: "Modelos de Proposta que Ninguém Recusa", fake: "R$ 127" },
  { name: "Atualizações Vitalícias de Prompts e Estratégias", fake: "R$ 297" },
];

const totalFake = bonuses.reduce((acc, b) => acc + parseInt(b.fake.replace(/\D/g, "")), 0);

const BonusSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            Bônus que valem mais que o produto
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Você ainda leva <span className="gradient-text">R$ {totalFake} em bônus</span> — de graça
          </h2>
          <p className="text-muted-foreground mb-8 md:mb-10 text-sm md:text-base max-w-lg mx-auto">
            Cada bônus é vendido separadamente no mercado. Quem entra agora <strong className="text-foreground">leva tudo incluso.</strong>
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {bonuses.map((b, i) => (
            <AnimatedSection key={i} delay={i * 70} animation="scale-in">
              <div className="glass-card p-4 md:p-5 flex items-center justify-between gap-3 hover-card-glow hover-inner-glow group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_10px_hsl(199_75%_48%/0.2)] transition-all duration-500">
                    <Gift className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-left text-sm">{b.name}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-muted-foreground line-through text-xs">{b.fake}</span>
                  <span className="text-primary font-bold text-sm">GRÁTIS</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <div className="mt-8 glass-card p-5 md:p-6 border-primary/20">
            <p className="text-lg md:text-xl font-bold">
              Total em bônus: <span className="line-through text-muted-foreground">R$ {totalFake}</span> →{" "}
              <span className="gradient-text text-2xl">R$ 0</span>
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Disponível apenas para quem garantir o acesso <strong className="text-foreground">hoje</strong>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BonusSection;
