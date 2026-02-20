import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 500, suffix: "+", label: "Leads encontrados por usuários" },
  { value: 50, suffix: "K+", label: "Mensagens enviadas na plataforma" },
  { value: 98, suffix: "%", label: "De satisfação dos clientes" },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, target, duration]);

  return count;
}

const StatItem = ({ value, suffix, label, isVisible, delay }: { value: number; suffix: string; label: string; isVisible: boolean; delay: number }) => {
  const count = useCountUp(value, isVisible, 2000 + delay);

  return (
    <div className="text-center">
      <div className="font-display text-5xl md:text-6xl font-extrabold gradient-text mb-2">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-spacing" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Nossos Resultados
            </h2>
            <p className="text-muted-foreground">Confira alguns de nossos números</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <StatItem {...s} isVisible={isVisible} delay={i * 200} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
