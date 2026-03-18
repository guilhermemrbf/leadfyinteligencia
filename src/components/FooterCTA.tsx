import { ArrowRight, Flame } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import LeadfyLogo from "./LeadfyLogo";

const FooterCTA = () => {
  return (
    <section className="section-spacing">
      <AnimatedSection animation="scale-in">
        <div className="container max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden border-primary/25">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 border border-destructive/30 bg-destructive/8 px-4 py-1.5 rounded-full mb-6">
                <Flame className="w-3.5 h-3.5 text-destructive animate-pulse" />
                <span className="text-xs text-destructive font-bold">ÚLTIMA CHANCE</span>
              </div>

              <h2 className="font-display text-2xl md:text-5xl font-bold mb-4 leading-tight">
                Daqui a 30 dias, você vai estar{" "}
                <span className="gradient-text">faturando com apps</span>{" "}
                ou vai estar no mesmo lugar?
              </h2>
              <p className="text-foreground text-lg font-semibold mb-2 max-w-xl mx-auto">
                A decisão é sua. Mas o tempo não para.
              </p>
              <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
                Risco zero: garantia de 7 dias. Se não gostar, devolvemos 100% — sem perguntas.
              </p>
              <a
                href="#preco"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] transition-all duration-300 animate-glow-pulse"
              >
                SIM, QUERO MUDAR MINHA VIDA
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                +500 pessoas já tomaram essa decisão. <strong className="text-foreground">E você?</strong>
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <footer className="mt-20 border-t border-border/15 pt-8">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <LeadfyLogo className="h-7" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Leadfy Inteligência. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-300">Termos</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Privacidade</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterCTA;
