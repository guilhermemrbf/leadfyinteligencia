import AnimatedSection from "./AnimatedSection";

const FooterCTA = () => {
  return (
    <section className="section-spacing">
      <AnimatedSection>
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Pare de esperar clientes.{" "}
            <span className="gradient-text">Vá buscá-los.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Com o Leadfy, você transforma prospecção em um sistema automático e
            previsível. Comece hoje.
          </p>
          <a
            href="#preco"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-lg px-10 py-4 rounded-xl glow-primary hover:brightness-110 transition-all duration-300"
          >
            Começar Agora — R$ 39,90/mês
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Garantia incondicional de 7 dias
          </p>
        </div>
      </AnimatedSection>

      <footer className="mt-20 border-t border-border/30 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Leadfy Inteligência. Todos os direitos
          reservados.
        </p>
      </footer>
    </section>
  );
};

export default FooterCTA;
