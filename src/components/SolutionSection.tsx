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
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
            A Solução
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Conheça o{" "}
            <span className="gradient-text">Leadfy Inteligência</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            A única plataforma que une prospecção, prompts e organização de leads —
            feita sob medida para quem cria e vende apps.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative mx-auto max-w-4xl mb-16">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-3xl scale-105" />
            <img
              src={productImg}
              alt="Leadfy Inteligência — plataforma desktop e mobile"
              className="relative rounded-2xl border border-border/20 shadow-2xl w-full"
            />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={i} delay={i * 120}>
              <div className="glass-card p-8 text-center hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mx-auto mb-6 group-hover:glow-primary-sm transition-shadow duration-300`}>
                  <p.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
