const LeadfyLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <circle cx="20" cy="20" r="17" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="80 14" />
        {/* Middle ring */}
        <circle cx="20" cy="20" r="11" stroke="url(#grad2)" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="50 12" />
        {/* Inner circle */}
        <circle cx="20" cy="20" r="5" fill="url(#grad3)" />
        {/* Connector line */}
        <line x1="25" y1="15" x2="34" y2="6" stroke="hsl(199 75% 48%)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="35" cy="5" r="2" fill="hsl(196 85% 58%)" />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="hsl(199 75% 48%)" />
            <stop offset="100%" stopColor="hsl(196 85% 58%)" />
          </linearGradient>
          <linearGradient id="grad2" x1="10" y1="10" x2="30" y2="30">
            <stop offset="0%" stopColor="hsl(196 85% 58%)" />
            <stop offset="100%" stopColor="hsl(199 75% 48%)" />
          </linearGradient>
          <linearGradient id="grad3" x1="15" y1="15" x2="25" y2="25">
            <stop offset="0%" stopColor="hsl(199 75% 48%)" />
            <stop offset="100%" stopColor="hsl(196 85% 58%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-foreground text-lg tracking-tight">Leadfy</span>
        <span className="text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-primary">Inteligência</span>
      </div>
    </div>
  );
};

export default LeadfyLogo;
