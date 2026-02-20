import { ArrowRight, Monitor, Shield } from "lucide-react";
import heroMockup from "@/assets/leadfy-hero-mockup.png";

const tabs = ["Dashboard", "Prospecção", "Prompts", "Contatos", "Assistente"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-spacing pt-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 backdrop-blur-sm px-5 py-2 rounded-full mb-10 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Nova versão disponível</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.08] mb-7 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Encontre clientes para seus apps{" "}
            <span className="gradient-text">todos os dias</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Conheça o Leadfy e prospecte clientes com prompts inteligentes, sem depender de indicações ou sorte.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
            >
              Começar agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#preco"
              className="inline-flex items-center gap-2 border border-border/60 bg-muted/20 backdrop-blur-sm text-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-muted/40 transition-all duration-300"
            >
              <Monitor className="w-5 h-5" />
              Ver planos
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground uppercase tracking-widest animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <span className="flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5" />
              Em qualquer dispositivo
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Garantia de 7 dias
            </span>
          </div>
        </div>

        {/* Product showcase with tabs */}
        <div className="relative mx-auto max-w-5xl animate-fade-up" style={{ animationDelay: "0.45s" }}>
          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
            {tabs.map((tab, i) => (
              <span
                key={tab}
                className={`text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                  i === 0
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30 border border-transparent"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-3xl scale-110" />
            <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 via-transparent to-transparent rounded-2xl" />
            <img
              src={heroMockup}
              alt="Leadfy Inteligência — plataforma de prospecção e abordagens para vendedores de apps"
              className="relative rounded-2xl border border-border/20 shadow-2xl w-full"
              loading="eager"
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(207,58%,11%)] to-transparent rounded-b-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
