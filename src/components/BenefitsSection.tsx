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
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
            Benefícios
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-14">
            Tudo que você precisa para{" "}
            <span className="gradient-text">fechar mais clientes</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass-card p-6 text-left hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary-sm transition-shadow duration-300">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
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
