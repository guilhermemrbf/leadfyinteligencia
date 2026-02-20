import { Search, MessageSquare, Sparkles, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Encontre leads no seu nicho",
    desc: "O sistema busca empresas que precisam de apps no seu segmento automaticamente.",
  },
  {
    num: "02",
    icon: MessageSquare,
    title: "Receba abordagens prontas",
    desc: "Prompts inteligentes geram mensagens personalizadas por nicho para cada lead.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Personalize e envie",
    desc: "Ajuste a mensagem em segundos e envie diretamente para o decisor da empresa.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Feche clientes e fature",
    desc: "Com prospecção consistente, feche novos contratos toda semana e escale seu negócio.",
  },
];

const StepsSection = () => {
  return (
    <section id="como-funciona" className="section-spacing">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Com o Leadfy, prospectar é{" "}
              <span className="gradient-text">simples e rápido</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-5 md:p-7 hover-card-glow hover-inner-glow group h-full relative overflow-hidden">
                {/* Big number background */}
                <span className="absolute -top-2 -right-2 font-display text-[4rem] md:text-[5rem] font-extrabold text-primary/[0.04] leading-none select-none pointer-events-none group-hover:text-primary/[0.08] transition-colors duration-500">
                  {s.num}
                </span>

                <div className="flex items-start gap-4 md:gap-5 relative z-10">
                  <div className="flex-shrink-0">
                    <span className="font-display text-sm font-bold text-primary bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_12px_hsl(199_75%_48%/0.3)] transition-all duration-300">
                      {s.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-base md:text-lg font-bold mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
