import { ArrowRight, Play } from "lucide-react";
import heroMockup from "@/assets/leadfy-hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 py-20 pt-28 md:pt-36 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[300px] md:h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-fade-up">
            <span className="text-xs text-primary font-medium">Automatização com IA de prospecção e vendas</span>
          </div>

          <h1 className="font-display text-[1.8rem] sm:text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.08] mb-6 md:mb-8 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.08s" }}>
            A forma mais rápida de{" "}
            <span className="gradient-text">faturar vendendo apps</span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.14s" }}>
            O Leadfy te entrega o app pronto, os clientes certos e as mensagens que vendem.
            Sem programar. Sem experiência. <strong className="text-foreground">Resultados em 7 dias.</strong>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#preco"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm md:text-lg px-7 md:px-10 py-3.5 md:py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Começar Agora
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border/50 bg-muted/10 backdrop-blur-sm text-foreground font-medium text-sm md:text-lg px-7 md:px-10 py-3.5 md:py-4 rounded-xl hover:bg-muted/30 active:scale-[0.98] transition-all duration-300"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5" />
              Como funciona
            </a>
          </div>

          {/* Minimal trust */}
          <p className="text-xs md:text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.26s" }}>
            +500 pessoas já faturam com apps · Garantia de 7 dias · Risco zero
          </p>
        </div>

        {/* Product showcase - clean, like ZOD */}
        <div className="relative mx-auto max-w-4xl animate-fade-up" style={{ animationDelay: "0.35s" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/4 rounded-2xl blur-3xl scale-105" />
            <div className="relative glass-card p-1.5 md:p-2 border-primary/10">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                <div className="flex-1 flex justify-center">
                  <span className="text-[10px] text-muted-foreground bg-muted/30 px-3 py-0.5 rounded-md">leadfy.com.br</span>
                </div>
              </div>
              <img
                src={heroMockup}
                alt="Leadfy — plataforma de prospecção e vendas de apps com IA"
                className="relative rounded-b-lg w-full"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
