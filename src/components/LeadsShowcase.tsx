import { MapPin, Globe, ArrowRight, Lock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const leads = [
  {
    name: "D'Blash Hair",
    category: "Salão de Beleza",
    level: "Básico",
    minValue: 350,
    maxValue: 450,
    recurrence: 0,
    description: "Salão de beleza em São Paulo. Precisa de sistema de agendamento para clientes.",
    location: "Vila Pirituba, São Paulo",
    tags: ["agendamento"],
  },
  {
    name: "Pizzaria Bella Napoli",
    category: "Restaurante",
    level: "Intermediário",
    minValue: 600,
    maxValue: 900,
    recurrence: 120,
    description: "Pizzaria tradicional precisa de cardápio digital e sistema de delivery.",
    location: "Bela Vista, São Paulo",
    tags: ["delivery", "cardápio"],
  },
  {
    name: "Clínica Vida Saudável",
    category: "Saúde",
    level: "Avançado",
    minValue: 900,
    maxValue: 1500,
    recurrence: 200,
    description: "Clínica médica precisa de sistema de prontuário eletrônico e agendamentos.",
    location: "Pinheiros, São Paulo",
    tags: ["prontuário", "agendamento"],
  },
  {
    name: "Boutique Elegance",
    category: "Moda",
    level: "Avançado",
    minValue: 800,
    maxValue: 1200,
    recurrence: 150,
    description: "Loja de roupas femininas busca e-commerce completo com gestão de estoque.",
    location: "Pinheiros, São Paulo",
    tags: ["e-commerce", "estoque"],
  },
];

const LeadsShowcase = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              Oportunidades reais encontradas pelo prospector
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Empresas <span className="gradient-text">desesperadas por um app</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              O prospector encontra leads como esses <strong className="text-foreground">todos os dias</strong>. 
              Assine e tenha acesso completo a contatos e valores.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {leads.map((lead, i) => (
            <AnimatedSection key={i} delay={i * 100} animation="scale-in">
              <div className="glass-card p-5 md:p-6 hover-card-glow hover-inner-glow group h-full relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-bold text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                    {lead.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {lead.category}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {lead.level}
                    </span>
                  </div>
                </div>

                {/* Value */}
                <div className="flex items-center gap-5 mb-3">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">💰 Valor Estimado</p>
                    <p className="text-sm font-bold">
                      R$ {lead.minValue} <span className="text-muted-foreground font-normal">—</span> R$ {lead.maxValue}
                    </p>
                  </div>
                  {lead.recurrence > 0 && (
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">📈 Recorrência</p>
                      <p className="text-sm font-bold text-primary">+R$ {lead.recurrence}/mês</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{lead.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {lead.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    Sem presença digital
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {lead.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/8 text-primary/80 border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Lock overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent rounded-b-xl flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    <Lock className="w-3 h-3" />
                    Assine para ver contatos
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <div className="text-center mt-8 md:mt-10">
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm md:text-base px-8 py-3.5 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              DESBLOQUEAR TODOS OS LEADS
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeadsShowcase;
