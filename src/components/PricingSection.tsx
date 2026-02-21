import { Check, Star, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
"Prospecção inteligente de leads",
"Prompts personalizados por nicho",
"Organização de contatos",
"Todos os bônus inclusos",
"Suporte via comunidade",
"Atualizações contínuas"];


const PricingSection = () => {
  return (
    <section id="preco" className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            Investimento
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Escolha seu plano
          </h2>
          <p className="text-muted-foreground mb-10 md:mb-14 max-w-xl mx-auto text-sm md:text-base">
            Menos que uma pizza por mês. Um cliente fechado paga anos de Leadfy.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-3xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="glass-card p-6 md:p-8 relative border-primary/50 hover-card-glow group h-full" style={{ boxShadow: "0 0 15px hsl(199 75% 48% / 0.15), 0 0 30px hsl(199 75% 48% / 0.08)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3" /> Mais Popular
                </span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold mb-1 mt-2">Plano Mensal</h3>
              <p className="text-muted-foreground text-sm mb-5 md:mb-6">Ideal para começar</p>
              <div className="mb-5 md:mb-6">
                <span className="font-display text-4xl md:text-5xl font-extrabold">R$ 39</span>
                <span className="text-xl md:text-2xl font-bold text-muted-foreground">,99</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-2.5 md:space-y-3 text-left mb-6 md:mb-8">
                {features.map((f, i) =>
                <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                )}
              </ul>
              <a
                href="https://pay.cakto.com.br/4fuejyf_776810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 md:py-4 rounded-xl text-center glow-primary hover:brightness-110 active:scale-[0.98] transition-all duration-300">

                Começar Agora
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-muted-foreground mt-3">Garantia de 7 dias</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="glass-card p-6 md:p-8 h-full hover-card-glow group">
              <h3 className="font-display text-lg md:text-xl font-bold mb-1 mt-2">Plano Vitalício</h3>
              <p className="text-muted-foreground text-sm mb-5 md:mb-6">Pague uma vez, use para sempre</p>
              <div className="mb-5 md:mb-6">
                <span className="font-display text-4xl md:text-5xl font-extrabold">R$ 149</span>
                <span className="text-xl md:text-2xl font-bold text-muted-foreground">,99</span>
                <span className="text-muted-foreground"> /único</span>
                <p className="text-base md:text-lg text-muted-foreground mt-2">
                  ou até <span className="font-bold text-foreground text-lg md:text-xl">12x</span> de <span className="font-bold text-foreground text-lg md:text-xl">R$ 17,33</span>
                </p>
              </div>
              <ul className="space-y-2.5 md:space-y-3 text-left mb-6 md:mb-8">
                {features.map((f, i) =>
                <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                )}
                <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                  <Check className="w-4 h-4 shrink-0" />
                  Acesso vitalício
                </li>
              </ul>
              <a
                href="https://pay.cakto.com.br/cz2hi5z_776929"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-primary text-primary font-semibold py-3.5 md:py-4 rounded-xl text-center hover:bg-primary/10 active:scale-[0.98] transition-all duration-300">

                Garantir Acesso Vitalício
              </a>
              <p className="text-xs text-muted-foreground mt-3">Garantia de 7 dias</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>);

};

export default PricingSection;