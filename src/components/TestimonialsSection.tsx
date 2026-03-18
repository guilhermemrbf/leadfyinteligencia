import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Rafael Oliveira",
    role: "Faturou R$ 8K no primeiro mês",
    text: "Em 2 semanas usando o Leadfy, fechei 3 clientes. Os prompts prontos são absurdos — eu sabia exatamente o que dizer.",
    stars: 5,
  },
  {
    name: "Ana Paula Lima",
    role: "Nunca tinha programado",
    text: "Criei meu primeiro app em 20 minutos e fechei um cliente em 10 dias por R$ 3.500.",
    stars: 5,
  },
  {
    name: "Bruno Mendes",
    role: "Dobrou o faturamento",
    text: "15 minutos por dia. Meu faturamento dobrou em 3 meses e demiti 2 ferramentas que não serviam.",
    stars: 5,
  },
  {
    name: "Juliana Costa",
    role: "Fatura R$ 12K/mês",
    text: "Com o Leadfy finalmente tenho previsibilidade. Fecho 2 a 3 clientes por semana.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Pessoas comuns, <span className="gradient-text">resultados extraordinários</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
              Eles estavam na mesma situação que você. A diferença? Decidiram agir.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass-card p-5 md:p-6 hover-card-glow group relative h-full">
                <Quote className="absolute top-5 right-5 w-6 h-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
                
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground/90 leading-relaxed mb-4 text-sm">"{t.text}"</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xs">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-primary text-xs font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
