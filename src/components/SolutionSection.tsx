import { Target, MessageSquare, FolderOpen } from "lucide-react";
import productImg from "@/assets/leadfy-product.png";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: Target,
    title: "Prospecção Automática",
    desc: "Encontre empresas que precisam de apps no seu nicho, sem pesquisar manualmente.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: MessageSquare,
    title: "Prompts Inteligentes",
    desc: "Mensagens prontas e personalizadas por nicho para abordar clientes com confiança.",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: FolderOpen,
    title: "Organização de Leads",
    desc: "Controle seus contatos, acompanhe respostas e nunca perca uma oportunidade.",
    gradient: "from-primary/20 to-secondary/5",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            A Solução
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Conheça o{" "}
            <span className="gradient-text">Leadfy Inteligência</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto">
            A única plataforma que une prospecção, prompts e organização de leads —
            feita sob medida para quem cria e vende apps.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative mx-auto max-w-4xl mb-12 md:mb-16">
            <div className="absolute inset-0 bg-primary/5 rounded-xl md:rounded-2xl blur-3xl scale-105" />
            <img
              src={productImg}
              alt="Leadfy Inteligência — plataforma desktop e mobile"
              className="relative rounded-xl md:rounded-2xl border border-border/20 shadow-2xl w-full"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={i} delay={i * 120}>
              <div className="glass-card p-6 md:p-8 text-center hover-card-glow hover-inner-glow group h-full">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mx-auto mb-5 md:mb-6 group-hover:shadow-[0_0_20px_hsl(199_75%_48%/0.25)] transition-all duration-300`}>
                  <p.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
