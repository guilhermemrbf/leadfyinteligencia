import { Search, MessageSquare, Sparkles, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Escolha um nicho que paga caro",
    desc: "O Leadfy revela nichos com empresas desesperadas por um app. Nichos onde você cobra R$ 2K a R$ 10K tranquilamente.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Crie o app em minutos com IA",
    desc: "A inteligência artificial gera um app profissional completo. Seu cliente vai achar que custou R$ 50 mil.",
  },
  {
    num: "03",
    icon: MessageSquare,
    title: "Receba mensagens que vendem sozinhas",
    desc: "Prompts inteligentes criam abordagens personalizadas que fazem o cliente QUERER responder.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Feche e fature toda semana",
    desc: "Envie, negocie, feche. Repita. Membros do Leadfy fecham 2 a 4 clientes por semana. Quanto você quer ganhar?",
  },
];

const StepsSection = () => {
  return (
    <section id="como-funciona" className="section-spacing">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              Como funciona
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Do zero ao primeiro cliente{" "}
              <span className="gradient-text">em 4 passos ridiculamente simples</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Não precisa de experiência, diploma ou conexões. O Leadfy faz o trabalho pesado por você.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100} animation="scale-in">
              <div className="glass-card p-5 md:p-6 hover-card-glow hover-inner-glow group h-full relative overflow-hidden">
                <span className="absolute -top-2 -right-2 font-display text-[4rem] font-extrabold text-primary/[0.04] leading-none select-none pointer-events-none group-hover:text-primary/[0.06] transition-colors duration-500">
                  {s.num}
                </span>

                <div className="flex items-start gap-4 relative z-10">
                  <span className="font-display text-sm font-bold text-primary bg-primary/10 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-primary/15 group-hover:bg-primary/20 group-hover:shadow-[0_0_12px_hsl(199_75%_48%/0.3)] transition-all duration-500">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold mb-1.5 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
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
