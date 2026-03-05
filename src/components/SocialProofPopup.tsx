import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const names = [
  "Rafael O.",
  "Ana Paula L.",
  "Bruno M.",
  "Juliana C.",
  "Carlos S.",
  "Mariana R.",
  "Pedro H.",
  "Fernanda G.",
];

const actions = [
  "acabou de garantir acesso",
  "fechou o primeiro cliente",
  "entrou para o Leadfy",
  "garantiu o plano vitalício",
];

const SocialProofPopup = () => {
  const [current, setCurrent] = useState<{ name: string; action: string } | null>(null);

  useEffect(() => {
    const show = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      setCurrent({ name, action });
      setTimeout(() => setCurrent(null), 4000);
    };

    const interval = setInterval(show, 12000);
    const firstShow = setTimeout(show, 6000);
    return () => {
      clearInterval(interval);
      clearTimeout(firstShow);
    };
  }, []);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-20 left-4 z-40 glass-card px-4 py-3 flex items-center gap-3 shadow-lg border-primary/20 max-w-xs"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
            {current.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="text-sm font-semibold">{current.name}</p>
            <p className="text-xs text-muted-foreground">{current.action} 🎉</p>
          </div>
          <span className="text-[10px] text-muted-foreground whitespace-nowrap">agora</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofPopup;
