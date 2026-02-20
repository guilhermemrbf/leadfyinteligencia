import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "E se eu não souber vender?",
    a: "O Leadfy foi feito exatamente para quem não é vendedor. Você recebe prompts prontos e abordagens testadas — é só copiar, personalizar e enviar.",
  },
  {
    q: "Não tenho tempo para prospectar. Funciona mesmo assim?",
    a: "Com 15 a 30 minutos por dia você já consegue prospectar de forma consistente. O sistema elimina o trabalho pesado de pesquisa e escrita.",
  },
  {
    q: "Não sei o que falar para os clientes. E agora?",
    a: "Esse é o principal problema que o Leadfy resolve. Você recebe mensagens prontas por nicho, testadas e otimizadas para gerar respostas.",
  },
  {
    q: "Já tentei prospectar e não consegui clientes.",
    a: "Provavelmente faltou método e mensagens certas. O Leadfy te dá um sistema passo a passo que funciona mesmo para quem nunca vendeu.",
  },
  {
    q: "Meu nicho é muito difícil. Vai funcionar?",
    a: "O Leadfy cobre diversos nichos e gera abordagens personalizadas. Se existem empresas no seu nicho, o sistema encontra e te ajuda a abordá-las.",
  },
  {
    q: "Ferramentas de leads não são complicadas demais?",
    a: "O Leadfy é simples e direto. Nada de dashboards complexos. Você acessa, encontra leads e tem as mensagens prontas em poucos cliques.",
  },
  {
    q: "Isso funciona para quem vende apps?",
    a: "Foi feito especificamente para isso. Todos os prompts, scripts e abordagens são pensados para quem vende apps e soluções digitais.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-spacing">
      <div className="container max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
              Dúvidas Frequentes
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Ainda tem dúvidas?
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-border/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
