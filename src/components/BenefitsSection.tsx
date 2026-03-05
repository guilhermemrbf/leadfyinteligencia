import { Search, Mail, TrendingUp, Users, Sparkles, Shield, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { icon: Sparkles, title: "Apps profissionais em minutos", desc: "A IA cria apps que parecem ter custado R$ 50 mil. Seu cliente nunca vai saber que levou 15 minutos." },
  { icon: Search, title: "Leads qualificados todo dia", desc: "O sistema encontra empresas que PRECISAM de um app — e te entrega de bandeja. Zero esforço." },
  { icon: Mail, title: "Mensagens que vendem sozinhas", desc: "Copy testada e otimizada por nicho. Taxa de resposta 3x maior que cold email tradicional." },
  { icon: TrendingUp, title: "Faturamento previsível", desc: "Saiba exatamente o que fazer todo dia. Sem achismo. Sem sorte. Método puro." },
  { icon: Users, title: "Feito pra quem começa do zero", desc: "Não sabe programar? Nunca vendeu? Perfeito. O Leadfy foi construído pra VOCÊ." },
  { icon: Shield, title: "Método comprovado por +500 pessoas", desc: "Não é teoria. São centenas de pessoas reais faturando com apps. Os resultados estão aí." },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            💎 Por que o Leadfy é Imbatível
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Tudo que você precisa para{" "}
            <span className="gradient-text">faturar de R$ 5K a R$ 30K por mês</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-14 max-w-2xl mx-auto">
            E o melhor: você não precisa de talento especial, conexões ou investimento alto. Só precisa de vontade e do Leadfy.
          </p>
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

        <AnimatedSection delay={600}>
          <div className="mt-10 md:mt-14">
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-base px-8 py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              GARANTIR MINHA VAGA AGORA
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BenefitsSection;
