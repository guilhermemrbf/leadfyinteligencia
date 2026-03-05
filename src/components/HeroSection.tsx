import { ArrowRight, Play, Shield, Zap, Users, Clock, Flame } from "lucide-react";
import { motion } from "framer-motion";
import heroMockup from "@/assets/leadfy-hero-mockup.png";
import AICodeAnimation from "./AICodeAnimation";

const tabs = ["Dashboard", "Prospecção", "Prompts", "Contatos", "Assistente"];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 py-24 pt-28 md:pt-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] bg-primary/6 rounded-full blur-[150px] md:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/4 rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-destructive/40 bg-destructive/10 backdrop-blur-sm px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-4"
          >
            <Flame className="w-3.5 h-3.5 text-destructive animate-pulse" />
            <span className="text-xs md:text-sm text-destructive font-bold">VAGAS LIMITADAS — Condição especial pode sair do ar a qualquer momento</span>
          </motion.div>

          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 backdrop-blur-sm px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-8 md:mb-10"
          >
            <Users className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium">+500 pessoas já largaram o emprego e faturam com apps</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-[2rem] sm:text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] mb-5 md:mb-7 max-w-5xl mx-auto"
          >
            Enquanto você pensa,{" "}
            <span className="gradient-text">outros já estão faturando R$ 10K/mês</span>{" "}
            vendendo apps com IA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Sem programar. Sem experiência. Sem desculpas. O Leadfy te entrega o app pronto, os clientes certos e as mensagens que vendem. <strong className="text-foreground">Você só precisa clicar em "enviar".</strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm md:text-base text-destructive font-semibold mb-8 md:mb-10"
          >
            ⚠️ Cada dia sem o Leadfy é dinheiro que você está deixando na mesa.
          </motion.p>

          {/* Dual CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-5 md:mb-6"
          >
            <a
              href="#preco"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-base md:text-lg px-7 md:px-8 py-3.5 md:py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-glow-pulse"
            >
              🔥 QUERO FATURAR COM APPS AGORA
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border/60 bg-muted/20 backdrop-blur-sm text-foreground font-semibold text-base md:text-lg px-7 md:px-8 py-3.5 md:py-4 rounded-xl hover:bg-muted/40 active:scale-[0.98] transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Ver como funciona
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[0.65rem] md:text-xs text-muted-foreground uppercase tracking-widest"
          >
            <span className="flex items-center gap-1.5">
              <Zap className="w-3 md:w-3.5 h-3 md:h-3.5" />
              Zero experiência necessária
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3 md:w-3.5 h-3 md:h-3.5" />
              Garantia de 7 dias ou seu dinheiro de volta
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 md:w-3.5 h-3 md:h-3.5" />
              Resultados em até 7 dias
            </span>
          </motion.div>
        </div>

        {/* Two-column: Product + AI Code Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            {/* Product showcase */}
            <div className="lg:col-span-3">
              {/* Tabs */}
              <div className="flex items-center justify-start md:justify-center gap-2 mb-5 md:mb-6 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
                {tabs.map((tab, i) => (
                  <span
                    key={tab}
                    className={`text-xs font-medium px-3.5 md:px-4 py-1.5 md:py-2 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
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
                <div className="absolute inset-0 bg-primary/5 rounded-xl md:rounded-2xl blur-3xl scale-110" />
                <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 via-transparent to-transparent rounded-xl md:rounded-2xl" />
                <img
                  src={heroMockup}
                  alt="Leadfy Inteligência — plataforma de prospecção e abordagens para vendedores de apps"
                  className="relative rounded-xl md:rounded-2xl border border-border/20 shadow-2xl w-full"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-[hsl(207,58%,11%)] to-transparent rounded-b-xl md:rounded-b-2xl" />
              </div>
            </div>

            {/* AI Code Animation */}
            <div className="lg:col-span-2">
              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3 text-center lg:text-left">
                🤖 Veja a IA criando um app em tempo real
              </p>
              <AICodeAnimation />
              <div className="mt-4 glass-card p-4 border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground font-semibold">247 pessoas</span> estão criando apps agora
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
