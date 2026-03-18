import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import LeadfyLogo from "./LeadfyLogo";

const FooterCTA = () => {
  return (
    <section className="section-spacing">
      <AnimatedSection>
        <div className="container max-w-3xl mx-auto">
          <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden border-primary/20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 leading-tight">
                Pronto para começar a{" "}
                <span className="gradient-text">faturar com apps</span>?
              </h2>
              <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
                Garantia de 7 dias. Se não gostar, devolvemos 100% — sem perguntas.
              </p>
              <a
                href="#preco"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-base md:text-lg px-10 py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                +500 pessoas já tomaram essa decisão.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <footer className="mt-16 border-t border-border/20 pt-8">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <LeadfyLogo className="h-7" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Leadfy Inteligência. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Termos</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterCTA;
