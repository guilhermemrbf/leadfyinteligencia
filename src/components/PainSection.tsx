import { XCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pains = [
  "Vê outros faturando R$ 5K, R$ 10K por mês com apps — e continua parado, só olhando.",
  "Já tentou aprender a programar, mas desistiu. Spoiler: você NÃO precisa programar.",
  "Não sabe que tipo de app criar, qual nicho escolher, nem quanto cobrar. Resultado? Paralisia total.",
  "Manda mensagem genérica. Ninguém responde. Cada dia perdido é dinheiro que NUNCA volta.",
];

const PainSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Se você se identifica com isso,{" "}
            <span className="text-destructive">está perdendo dinheiro agora.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 md:mb-10 max-w-xl mx-auto">
            O problema não é falta de talento — é falta de <strong className="text-foreground">método</strong>.
            Sem método, até gênio fica sem cliente.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
          {pains.map((pain, i) => (
            <AnimatedSection key={i} delay={i * 80} animation="scale-in">
              <div className="glass-card p-4 md:p-5 flex items-start gap-3 h-full group hover:border-destructive/20 transition-all duration-500">
                <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-foreground/90 text-left leading-relaxed">{pain}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="glass-card p-6 md:p-8 border-primary/20 text-center">
            <p className="text-lg md:text-xl font-bold mb-1.5">
              A boa notícia? <span className="gradient-text">Isso acaba HOJE.</span>
            </p>
            <p className="text-muted-foreground text-sm">
              O Leadfy resolve cada um desses problemas — e transforma qualquer pessoa em um vendedor de apps lucrativo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PainSection;
