import {
  Brain,
  Search,
  Users,
  MessageSquareText,
  BarChart3,
  Globe,
  Zap,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Brain,
    title: "IA Integrada da Leadfy",
    desc: "Inteligência artificial exclusiva que cria apps completos, gera abordagens e otimiza suas vendas automaticamente.",
    highlight: true,
  },
  {
    icon: Search,
    title: "Melhor Prospector do Mercado",
    desc: "Encontra leads qualificados todos os dias — empresas que PRECISAM de um app e estão prontas para pagar.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Área de Membros Completa",
    desc: "Acesso exclusivo a módulos, aulas, templates e comunidade. Tudo organizado para você evoluir rápido.",
    highlight: true,
  },
  {
    icon: MessageSquareText,
    title: "Abordagens Prontas por Nicho",
    desc: "Copy personalizada que faz o cliente QUERER responder.",
  },
  {
    icon: BookOpen,
    title: "Método Passo a Passo",
    desc: "Do zero ao primeiro cliente em 7 dias. Sem achismo.",
  },
  {
    icon: BarChart3,
    title: "Painel de Gestão",
    desc: "Dashboard para leads, clientes e faturamento em tempo real.",
  },
  {
    icon: Zap,
    title: "Automações Inteligentes",
    desc: "Prospectação e follow-up no automático.",
  },
  {
    icon: Globe,
    title: "Domínio e Marca Própria",
    desc: "Apps com sua marca. Sem marca d'água. Domínio incluso.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="section-spacing">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              Por que escolher a Leadfy?
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Tudo que você precisa, <span className="gradient-text">num só lugar</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              IA própria, prospector inteligente, área de membros e método validado —{" "}
              <strong className="text-foreground">nenhum concorrente entrega tudo isso.</strong>
            </p>
          </div>
        </AnimatedSection>

        {/* Top 3 — ZOD-style scale-in cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {features.filter(f => f.highlight).map((f, i) => (
            <AnimatedSection key={i} delay={i * 100} animation="scale-in">
              <div className="glass-card p-5 md:p-6 text-center hover-card-glow hover-inner-glow group h-full border-primary/15">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(199_75%_48%/0.3)] transition-all duration-500">
                  <f.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Secondary — compact grid with marquee feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {features.filter(f => !f.highlight).map((f, i) => (
            <AnimatedSection key={i} delay={300 + i * 60} animation="fade-up">
              <div className="glass-card p-4 md:p-5 hover-card-glow group h-full">
                <div className="flex items-center gap-3 mb-2">
                  <f.icon className="w-4 h-4 text-primary shrink-0" />
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                    {f.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700}>
          <div className="mt-10 md:mt-12 text-center">
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-base px-8 py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              QUERO ACESSO A TUDO ISSO
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
