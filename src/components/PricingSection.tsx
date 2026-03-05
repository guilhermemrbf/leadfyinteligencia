import { Check, Star, ArrowRight, Flame, Shield, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  "Prospecção inteligente de leads",
  "Prompts personalizados por nicho",
  "Organização de contatos",
  "Todos os bônus inclusos (R$ 865)",
  "Suporte via comunidade exclusiva",
  "Atualizações contínuas e vitalícias",
];

const PricingSection = () => {
  return (
    <section id="preco" className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 border border-destructive/40 bg-destructive/10 px-4 py-1.5 rounded-full mb-6">
            <Clock className="w-3.5 h-3.5 text-destructive animate-pulse" />
            <span className="text-xs md:text-sm text-destructive font-bold">OFERTA POR TEMPO LIMITADO</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Quanto vale mudar de vida?
          </h2>
          <p className="text-muted-foreground mb-3 max-w-xl mx-auto text-sm md:text-base">
            Um único cliente paga <strong className="text-foreground">anos</strong> de Leadfy. Você está literalmente a uma decisão de distância de um novo patamar financeiro.
          </p>
          <p className="text-primary font-semibold mb-10 md:mb-14 text-sm md:text-base">
            ⚡ Quem entra hoje garante o menor preço. Amanhã pode ser tarde demais.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-3xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="glass-card p-6 md:p-8 relative border-primary/50 hover-card-glow group h-full" style={{ boxShadow: "0 0 15px hsl(199 75% 48% / 0.15), 0 0 30px hsl(199 75% 48% / 0.08)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Flame className="w-3 h-3" /> Mais Escolhido
                </span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold mb-1 mt-2">Plano Mensal</h3>
              <p className="text-muted-foreground text-sm mb-5 md:mb-6">Comece a faturar ainda hoje</p>
              <div className="mb-2">
                <span className="text-muted-foreground line-through text-lg">R$ 97/mês</span>
              </div>
              <div className="mb-5 md:mb-6">
                <span className="font-display text-4xl md:text-5xl font-extrabold">R$ 39</span>
                <span className="text-xl md:text-2xl font-bold text-muted-foreground">,99</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-xs text-primary font-semibold mb-5">🔥 Economia de 59% — só enquanto durar</p>
              <ul className="space-y-2.5 md:space-y-3 text-left mb-6 md:mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://pay.cakto.com.br/4fuejyf_776810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3.5 md:py-4 rounded-xl text-center glow-primary hover:brightness-110 active:scale-[0.98] transition-all duration-300 text-base"
              >
                🔥 GARANTIR MINHA VAGA AGORA
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Shield className="w-3 h-3 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Garantia de 7 dias — risco ZERO</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="glass-card p-6 md:p-8 h-full hover-card-glow group relative overflow-hidden">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-accent/20 text-accent text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 border border-accent/30">
                  💰 Melhor Custo-Benefício
                </span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold mb-1 mt-2">Plano Vitalício</h3>
              <p className="text-muted-foreground text-sm mb-5 md:mb-6">Pague uma vez. Use para SEMPRE.</p>
              <div className="mb-2">
                <span className="text-muted-foreground line-through text-lg">R$ 497</span>
              </div>
              <div className="mb-5 md:mb-6">
                <span className="font-display text-4xl md:text-5xl font-extrabold">R$ 149</span>
                <span className="text-xl md:text-2xl font-bold text-muted-foreground">,99</span>
                <span className="text-muted-foreground"> /único</span>
                <p className="text-base md:text-lg text-muted-foreground mt-2">
                  ou até <span className="font-bold text-foreground text-lg md:text-xl">12x</span> de <span className="font-bold text-foreground text-lg md:text-xl">R$ 17,33</span>
                </p>
              </div>
              <p className="text-xs text-primary font-semibold mb-5">💎 Economia de 70% — nunca mais paga nada</p>
              <ul className="space-y-2.5 md:space-y-3 text-left mb-6 md:mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                  <Check className="w-4 h-4 shrink-0" />
                  Acesso vitalício — para sempre
                </li>
              </ul>
              <a
                href="https://pay.cakto.com.br/cz2hi5z_776929"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3.5 md:py-4 rounded-xl text-center hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300 text-base"
              >
                💎 GARANTIR ACESSO VITALÍCIO
              </a>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Shield className="w-3 h-3 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Garantia de 7 dias — risco ZERO</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-10 md:mt-14 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm md:text-base">
              💡 <strong className="text-foreground">Pense assim:</strong> um único app vendido por R$ 2.000 já paga <strong className="text-foreground">mais de 4 anos</strong> de Leadfy mensal. E com o vitalício? Você nunca mais investe um centavo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
