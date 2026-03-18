import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Preciso saber programar?",
    a: "Não. O Leadfy usa IA para criar apps prontos. Se você sabe usar WhatsApp, sabe usar o Leadfy.",
  },
  {
    q: "E se eu não souber vender?",
    a: "Você recebe mensagens prontas, testadas e otimizadas por nicho. É copiar, colar e enviar.",
  },
  {
    q: "Quanto tempo leva para o primeiro cliente?",
    a: "Com 15 minutos por dia, a maioria fecha o primeiro cliente em 7 a 14 dias.",
  },
  {
    q: "Quanto posso cobrar por um app?",
    a: "Entre R$ 2.000 e R$ 10.000 por app simples. Um único cliente já paga anos de Leadfy.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Devolvemos 100% sem perguntas.",
  },
  {
    q: "Por que o preço está tão baixo?",
    a: "Estamos em fase de crescimento. Esse preço não vai durar — quem entra agora garante a condição especial.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-spacing">
      <div className="container max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Perguntas Frequentes
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-4 md:px-6 border-border/40 hover:border-primary/15 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
