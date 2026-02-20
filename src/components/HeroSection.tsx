import { Zap } from "lucide-react";
import heroImg from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-spacing overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            Prospecção Inteligente para Vendedores de Apps
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
            Encontre Clientes Para Seus Apps{" "}
            <span className="gradient-text">Todos os Dias</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            O sistema de prospecção guiada com prompts inteligentes que encontra
            empresas e gera abordagens prontas — para você fechar clientes mesmo
            sem experiência em vendas.
          </p>

          <a
            href="#preco"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl glow-primary hover:brightness-110 transition-all duration-300 animate-glow-pulse"
          >
            Começar Agora
          </a>

          <p className="mt-4 text-sm text-muted-foreground">
            Garantia de 7 dias · Cancele quando quiser
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl" />
          <img
            src={heroImg}
            alt="Painel Leadfy mostrando prospecção inteligente"
            className="relative rounded-2xl border border-border/30 shadow-2xl w-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
