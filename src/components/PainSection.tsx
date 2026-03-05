import { AlertTriangle, XCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pains = [
  "Você assiste outros faturando R$ 5K, R$ 10K, R$ 20K por mês com apps — e continua parado, só olhando.",
  "Já tentou aprender a programar, mas desistiu porque parecia impossível. Spoiler: você NÃO precisa programar.",
  "Não sabe que tipo de app criar, qual nicho escolher, nem quanto cobrar. Resultado? Paralisia total.",
  "Tenta abordar empresas, mas trava. Não sabe o que dizer. Manda mensagem genérica. Ninguém responde.",
  "Depende de sorte, indicação ou anúncios caros que queimam seu dinheiro sem retorno.",
  "Cada mês que passa, você perde milhares de reais em oportunidades que NUNCA vão voltar.",
];

const PainSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-destructive font-bold mb-3 uppercase tracking-wider text-xs md:text-sm">
            ⚠️ Atenção
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-5 md:mb-6">
            Se você se identifica com isso,{" "}
            <span className="text-destructive">está perdendo dinheiro agora.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto">
            A verdade dói: o problema não é falta de talento — é falta de <strong className="text-foreground">método</strong>. 
            E sem método, até gênio fica sem cliente.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {pains.map((pain, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-5 md:p-6 text-left flex items-start gap-3 md:gap-4 h-full hover-card-glow hover-inner-glow group border-destructive/10 hover:border-destructive/30">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-foreground/90 text-sm md:text-base">{pain}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700}>
          <div className="mt-10 md:mt-14 glass-card p-6 md:p-8 border-primary/30 text-center">
            <p className="text-lg md:text-xl font-bold mb-2">
              A boa notícia? <span className="gradient-text">Isso acaba HOJE.</span>
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              O Leadfy resolve cada um desses problemas — e transforma qualquer pessoa em um vendedor de apps lucrativo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PainSection;
