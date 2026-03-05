import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import modulo01 from "@/assets/modulo-01-intelligence.png";
import modulo02 from "@/assets/modulo-02-approach.png";
import modulo03 from "@/assets/modulo-03-prospeccao-plus.png";
import modulo04 from "@/assets/modulo-04-prospeccao-pro.png";
import modulo05 from "@/assets/modulo-05-painel-adm.png";
import modulo06 from "@/assets/modulo-06-dominio.png";

const modules = [
  {
    image: modulo01,
    title: "Leadfy Intelligence",
    subtitle: "Criação, Estruturação e Publicação de Apps e Sites",
    tags: ["UX", "Frontend", "Backend", "API", "Deploy", "IA"],
  },
  {
    image: modulo02,
    title: "Leadfy Approach",
    subtitle: "Atração, Abordagem e Conversão de Clientes",
    tags: ["CRM", "Email", "Lead", "Alvo", "Lead Qualificado"],
  },
  {
    image: modulo03,
    title: "Prospecção Plus",
    subtitle: "Redes Sociais, Cold Mail e Perfis Qualificados",
    tags: ["Software", "Automação", "Número 1"],
  },
  {
    image: modulo04,
    title: "Prospecção Pro",
    subtitle: "Prospecção de Novos Leads + Correção de Bugs",
    tags: ["Leads", "Qualificação", "Code", "Parcerias", "Tech"],
  },
  {
    image: modulo05,
    title: "Painel ADM",
    subtitle: "Dashboard, Autenticação e Gestão de Conteúdo",
    tags: ["Dashboard", "Auth", "Logs", "Gestão"],
  },
  {
    image: modulo06,
    title: "Domínio & Marca",
    subtitle: "Remover Marca D'água e Conectar Domínio Próprio",
    tags: ["DNS", "Domínio", "Branding"],
  },
];

const ModulesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="modulos" className="section-spacing overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-16">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              Conteúdo Exclusivo
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Módulos disponíveis{" "}
              <span className="gradient-text">no sistema</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Cada módulo foi pensado para te levar do zero ao resultado. Explore o que você vai aprender.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="relative">
            {/* Carousel */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {modules.map((mod, i) => {
                  const isActive = i === selectedIndex;
                  return (
                    <div
                      key={i}
                      className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_38%] min-w-0 px-3"
                    >
                      <div
                        className={`glass-card overflow-hidden transition-all duration-500 group cursor-pointer ${
                          isActive
                            ? "scale-105 shadow-[0_0_40px_hsl(199_75%_48%/0.3)] border-primary/40"
                            : "scale-95 opacity-60"
                        }`}
                        onClick={() => emblaApi?.scrollTo(i)}
                      >
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={mod.image}
                            alt={mod.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                          {/* Module number badge */}
                          <div className="absolute top-3 left-3">
                            <span className="font-display text-xs font-bold text-primary-foreground bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/40">
                              Módulo {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-4 md:p-5 -mt-8 relative z-10">
                          <h3 className="font-display text-base md:text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                            {mod.title}
                          </h3>
                          <p className="text-muted-foreground text-xs md:text-sm mb-3 leading-relaxed">
                            {mod.subtitle}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {mod.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] md:text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/40 transition-all disabled:opacity-30"
              aria-label="Módulo anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/40 transition-all disabled:opacity-30"
              aria-label="Próximo módulo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {modules.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "w-8 bg-primary shadow-[0_0_10px_hsl(199_75%_48%/0.5)]"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para módulo ${i + 1}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ModulesCarousel;
