import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Oliveira",
    role: "Desenvolvedor de Apps",
    text: "Em 2 semanas usando o Leadfy, fechei 3 clientes novos. Os prompts prontos fizeram toda a diferença — eu sabia o que dizer em cada abordagem.",
    stars: 5,
  },
  {
    name: "Camila Santos",
    role: "Freelancer de Apps",
    text: "Eu sempre soube criar apps, mas nunca conseguia vender. O Leadfy mudou isso completamente. Agora prospectar faz parte da minha rotina diária.",
    stars: 5,
  },
  {
    name: "Bruno Mendes",
    role: "Fundador de Agência Digital",
    text: "O sistema é absurdamente simples. Em 15 minutos por dia eu encontro leads qualificados e envio mensagens personalizadas. Meu faturamento dobrou em 3 meses.",
    stars: 5,
  },
  {
    name: "Juliana Costa",
    role: "Criadora de SaaS",
    text: "Já tentei de tudo: anúncios, cold email genérico, indicações... Nada funcionava consistentemente. Com o Leadfy eu finalmente tenho um método previsível.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
            Prova Social
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Quem usa, <span className="gradient-text">recomenda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre o Leadfy Inteligência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-7 hover:border-primary/30 transition-all duration-300 group relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/90 leading-relaxed mb-5">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
