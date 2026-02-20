import { Search, Mail, TrendingUp, Users, Megaphone, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { icon: Search, title: "Encontrar empresas automaticamente", desc: "O sistema busca leads qualificados no seu nicho." },
  { icon: Mail, title: "Mensagens prontas por nicho", desc: "Abordagens testadas que geram respostas." },
  { icon: TrendingUp, title: "Prospecção rápida e previsível", desc: "Saiba exatamente o que fazer todo dia." },
  { icon: Users, title: "Organização de contatos", desc: "Nunca mais perca um lead importante." },
  { icon: Megaphone, title: "Mais clientes sem anúncios", desc: "Prospecção orgânica e sem custo extra." },
  { icon: Sparkles, title: "Sistema simples de usar", desc: "Funciona mesmo sem experiência em vendas." },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            Benefícios
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-10 md:mb-14">
            Tudo que você precisa para{" "}
            <span className="gradient-text">fechar mais clientes</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass-card p-5 md:p-6 text-left hover-card-glow hover-inner-glow group h-full">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_16px_hsl(199_75%_48%/0.25)] transition-all duration-300">
                  <b.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-300">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
