import LeadfyLogo from "@/components/LeadfyLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <LeadfyLogo className="h-6 opacity-60" />
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Termos</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Contato</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Leadfy Inteligência</p>
      </div>
    </footer>
  );
};

export default Footer;
