import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Preciso saber programar?",
    a: "Absolutamente NÃO. O Leadfy usa IA para criar apps prontos. Se você sabe usar WhatsApp, sabe usar o Leadfy. É tão simples que chega a ser assustador.",
  },
  {
    q: "E se eu não souber vender?",
    a: "PERFEITO — esse é justamente o problema que resolvemos. Você recebe mensagens prontas, testadas e otimizadas por nicho. É literalmente copiar, colar e enviar. Os clientes respondem sozinhos.",
  },
  {
    q: "Quanto tempo leva para conseguir o primeiro cliente?",
    a: "Com 15 minutos por dia, a maioria dos nossos membros fecha o primeiro cliente em 7 a 14 dias. Alguns fecham no primeiro dia. O sistema elimina toda a adivinhação.",
  },
  {
    q: "Quanto posso cobrar por um app?",
    a: "Entre R$ 2.000 e R$ 10.000 por app simples. Nossos membros mais ativos faturam R$ 15K a R$ 30K por mês. Um ÚNICO cliente já paga anos de Leadfy.",
  },
  {
    q: "Já tentei prospectar e não deu certo.",
    a: "Normal — porque você tentou sem método. O Leadfy te dá um sistema passo a passo que funciona mesmo para quem NUNCA vendeu na vida. É diferente de tudo que você já tentou.",
  },
  {
    q: "E se eu não gostar?",
    a: "Sem problema. Você tem 7 dias de garantia INCONDICIONAL. Não gostou? Devolvemos 100% do seu dinheiro na hora. Sem burocracia, sem perguntas. O risco é completamente ZERO.",
  },
  {
    q: "Por que o preço está tão baixo?",
    a: "Porque estamos em fase de crescimento e queremos mais casos de sucesso. Esse preço NÃO vai durar. Quem entrar agora garante a condição especial para sempre.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-spacing">
      <div className="container max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-12">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              ❓ Suas Últimas Dúvidas
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Respondemos tudo para você{" "}
              <span className="gradient-text">não ter desculpa</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion type="single" collapsible className="space-y-2.5 md:space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-4 md:px-6 border-border/50 hover:border-primary/20 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 md:py-5 text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-5 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm mb-4">Ainda com dúvida? A garantia de 7 dias elimina qualquer risco.</p>
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              QUERO COMEÇAR AGORA — RISCO ZERO
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
