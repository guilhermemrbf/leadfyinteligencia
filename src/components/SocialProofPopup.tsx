import { useState, useEffect } from "react";

const names = [
  "Rafael O.", "Ana Paula L.", "Bruno M.", "Juliana C.",
  "Carlos S.", "Mariana R.", "Pedro H.", "Fernanda G.",
];
const actions = [
  "acabou de garantir acesso",
  "fechou o primeiro cliente",
  "entrou para o Leadfy",
  "garantiu o plano vitalício",
];

const SocialProofPopup = () => {
  const [current, setCurrent] = useState<{ name: string; action: string } | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const display = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      setCurrent({ name, action });
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    };

    const firstShow = setTimeout(display, 6000);
    const interval = setInterval(display, 12000);
    return () => { clearInterval(interval); clearTimeout(firstShow); };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 glass-card px-4 py-3 flex items-center gap-3 shadow-lg border-primary/20 max-w-xs transition-all duration-500 ${
        show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
        {current.name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div>
        <p className="text-sm font-semibold">{current.name}</p>
        <p className="text-xs text-muted-foreground">{current.action} 🎉</p>
      </div>
      <span className="text-[10px] text-muted-foreground whitespace-nowrap">agora</span>
    </div>
  );
};

export default SocialProofPopup;
