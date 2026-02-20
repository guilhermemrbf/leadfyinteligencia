import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import LeadfyLogo from "./LeadfyLogo";

const FooterCTA = () => {
  return (
    <section className="section-spacing">
      <AnimatedSection>
        <div className="container max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
                O poder de encontrar clientes{" "}
                <span className="gradient-text">na palma da sua mão</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Crie, prospecte e feche clientes com o Leadfy Inteligência.
              </p>
              <a
                href="#preco"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-lg px-10 py-4 rounded-xl glow-primary hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
              >
                Assinar agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <footer className="mt-20 border-t border-border/20 pt-8">
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
