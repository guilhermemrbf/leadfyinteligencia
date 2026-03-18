import AnimatedSection from "./AnimatedSection";
import { TrendingDown, UserX, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    text: "Investindo em tráfego pago sem retorno real",
  },
  {
    icon: UserX,
    text: "Leads chegando, mas ninguém comprando",
  },
  {
    icon: RefreshCw,
    text: "Dependendo de indicação para sobreviver",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-spacing" style={{ background: "hsl(0 0% 6%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14">
            Você reconhece algum desses problemas?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-14">
          {problems.map((p, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-6 md:p-8 text-center h-full hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                <p.icon className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                <p className="text-foreground text-base font-medium leading-relaxed">{p.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <p className="text-2xl md:text-3xl font-bold">
            <span className="gradient-text-animated">A Leadfy foi construída exatamente para resolver isso.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSection;
