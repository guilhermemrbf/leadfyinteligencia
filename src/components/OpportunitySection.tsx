import { TrendingUp, Building2, DollarSign, Laptop } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: Building2, value: "70%", label: "das empresas NÃO têm app — estão implorando por um" },
  { icon: DollarSign, value: "R$ 2K–10K", label: "por projeto simples que a IA cria em minutos" },
  { icon: Laptop, value: "15 min", label: "por dia. É TUDO que você precisa investir." },
  { icon: TrendingUp, value: "3x", label: "mais clientes já no 1º mês com o Leadfy" },
];

const OpportunitySection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            A oportunidade da década
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Um mercado de <span className="gradient-text">bilhões</span> que{" "}
            <span className="gradient-text">ninguém está explorando</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-14 max-w-2xl mx-auto">
            Milhares de empresas <strong className="text-foreground">precisam desesperadamente</strong> de um app e não têm a quem recorrer.
            A pergunta é: vai ser <strong className="text-foreground">você</strong> ou seu concorrente?
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 80} animation="scale-in">
              <div className="glass-card p-5 md:p-6 text-center hover-card-glow hover-inner-glow group h-full">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-display text-xl md:text-3xl font-extrabold gradient-text mb-1.5">{s.value}</p>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
