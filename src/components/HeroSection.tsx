import { Zap, ArrowRight } from "lucide-react";
import heroMockup from "@/assets/leadfy-hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-spacing pt-28 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-muted-foreground animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            A Plataforma Nº1 Para Vendedores de Apps
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Crie Apps e Encontre Clientes{" "}
            <span className="gradient-text">Todos os Dias</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            O sistema de prospecção guiada com prompts inteligentes que encontra
            empresas e gera abordagens prontas — para você fechar clientes mesmo
            sem experiência em vendas.
          </p>

          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-105 transition-all duration-300 animate-glow-pulse"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="mt-4 text-sm text-muted-foreground">
              Garantia de 7 dias · Cancele quando quiser
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-3xl scale-105" />
          <img
            src={heroMockup}
            alt="Leadfy Inteligência — plataforma de prospecção e abordagens para vendedores de apps"
            className="relative rounded-2xl border border-border/20 shadow-2xl w-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
