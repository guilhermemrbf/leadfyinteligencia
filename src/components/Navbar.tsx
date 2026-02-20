import LeadfyLogo from "@/components/LeadfyLogo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/30">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center">
          <LeadfyLogo className="h-9" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#solucao" className="hover:text-foreground transition-colors">Como Funciona</a>
          <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
          <a href="#preco" className="hover:text-foreground transition-colors">Preços</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>

        <a
          href="#preco"
          className="bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:brightness-110 transition-all duration-300"
        >
          Começar Agora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
