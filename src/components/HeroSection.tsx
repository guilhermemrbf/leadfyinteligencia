import { ArrowRight, Play, Shield, Zap, Users, Clock, Flame } from "lucide-react";
import heroMockup from "@/assets/leadfy-hero-mockup.png";
import AICodeAnimation from "./AICodeAnimation";

const tabs = ["Dashboard", "Prospecção", "Prompts", "Contatos", "Assistente"];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 py-20 pt-24 md:pt-32 overflow-hidden">
      {/* Background effects — single blur for perf */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[350px] md:h-[500px] bg-primary/6 rounded-full blur-[120px] md:blur-[160px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 border border-destructive/40 bg-destructive/10 backdrop-blur-sm px-3 py-1 md:px-5 md:py-2 rounded-full mb-3 md:mb-4 animate-fade-up">
            <Flame className="w-3 h-3 md:w-3.5 md:h-3.5 text-destructive animate-pulse" />
            <span className="text-[10px] md:text-sm text-destructive font-bold">VAGAS LIMITADAS — Pode sair do ar a qualquer momento</span>
          </div>

          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 backdrop-blur-sm px-3 py-1 md:px-5 md:py-2 rounded-full mb-6 md:mb-10 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <Users className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
            <span className="text-[10px] md:text-sm text-primary font-medium">+500 pessoas já faturam com apps</span>
          </div>

          <h1 className="font-display text-[1.6rem] sm:text-3xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] mb-4 md:mb-7 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Enquanto você pensa,{" "}
            <span className="gradient-text">outros já estão faturando R$ 10K/mês</span>{" "}
            vendendo apps com IA
          </h1>

          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 md:mb-4 leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Sem programar. Sem experiência. O Leadfy te entrega o app pronto, os clientes certos e as mensagens que vendem. <strong className="text-foreground">Você só precisa clicar em "enviar".</strong>
          </p>

          <p className="text-xs md:text-base text-destructive font-semibold mb-6 md:mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            ⚠️ Cada dia sem o Leadfy é dinheiro que você deixa na mesa.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <a
              href="#preco"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-glow-pulse"
            >
              🔥 QUERO FATURAR COM APPS AGORA
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border/60 bg-muted/20 backdrop-blur-sm text-foreground font-semibold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-muted/40 active:scale-[0.98] transition-all duration-300"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5" />
              Ver como funciona
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[0.6rem] md:text-xs text-muted-foreground uppercase tracking-wider animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Sem experiência
            </span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Garantia 7 dias
            </span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Resultados em 7 dias
            </span>
          </div>
        </div>

        {/* Two-column: Product + AI Code */}
        <div className="relative mx-auto max-w-6xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 items-start">
            {/* Product showcase */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              {/* Tabs - hidden on small mobile */}
              <div className="hidden sm:flex items-center justify-start md:justify-center gap-2 mb-4 md:mb-6 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
                {tabs.map((tab, i) => (
                  <span
                    key={tab}
                    className={`text-xs font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
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
                <div className="absolute inset-0 bg-primary/5 rounded-xl blur-2xl scale-105" />
                <img
                  src={heroMockup}
                  alt="Leadfy Inteligência — plataforma de prospecção e abordagens para vendedores de apps"
                  className="relative rounded-xl md:rounded-2xl border border-border/20 shadow-2xl w-full"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-[hsl(207,58%,11%)] to-transparent rounded-b-xl md:rounded-b-2xl" />
              </div>
            </div>

            {/* AI Code Animation */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <p className="text-[10px] md:text-xs text-primary font-semibold uppercase tracking-wider mb-2 md:mb-3 text-center lg:text-left">
                🤖 Veja a IA criando um app em tempo real
              </p>
              <AICodeAnimation />
              <div className="mt-3 md:mt-4 glass-card p-3 md:p-4 border-primary/20">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    <span className="text-foreground font-semibold">247 pessoas</span> criando apps agora
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
