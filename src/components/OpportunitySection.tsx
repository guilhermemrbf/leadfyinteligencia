import { TrendingUp, Building2, DollarSign, Laptop } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: Building2, value: "70%", label: "das empresas ainda não têm app" },
  { icon: DollarSign, value: "R$ 2K–10K", label: "por projeto simples" },
  { icon: Laptop, value: "15 min", label: "por dia é o suficiente" },
  { icon: TrendingUp, value: "3x", label: "mais clientes no 1º mês" },
];

const OpportunitySection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Um mercado de <span className="gradient-text">bilhões</span> esperando por você
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-14 max-w-2xl mx-auto">
            Milhares de empresas precisam de um app e não sabem a quem recorrer. Quem souber criar e oferecer <strong className="text-foreground">vai dominar esse mercado.</strong>
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass-card p-5 md:p-6 text-center hover-card-glow group h-full">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-display text-xl md:text-3xl font-extrabold gradient-text mb-1.5">{s.value}</p>
                <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
