interface LogoProps {
  variant?: 'light' | 'dark';
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  variant = 'dark',
  onClick,
  className = '',
  size = 'md',
}: LogoProps) {
  const isLight = variant === 'light';

  // Sizing configurations optimized for the 2.66:1 transparent horizontal lockup
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10 md:h-11.5',
    lg: 'h-12 sm:h-14',
  }[size];

  // The official VoiceSpace transparent horizontal gradient logo asset
  const logoSrc = '/assets/aistudio/VoiceSpace_Gradient_Logo_ec9da38b.png';

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`inline-flex items-center cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl select-none transition-all ${className}`}
      aria-label="VoiceSpace - Return to homepage"
    >
      {isLight ? (
        // Dark background (e.g. Footer): elegant white container card preserving full contrast of the dark navy & vibrant blue gradient wordmark
        <div className="bg-white px-3.5 py-1.5 rounded-2xl shadow-sm border border-white/10 group-hover:shadow-md group-hover:scale-105 transition-all duration-200 inline-flex items-center justify-center">
          <img
            src={logoSrc}
            alt="VoiceSpace - Technology, Digital Marketing & BPO Solutions"
            className={`${sizeClasses} w-auto object-contain shrink-0`}
            loading="eager"
          />
        </div>
      ) : (
        // Light background (e.g. Header / Navbar): crisp transparent logo with subtle hover micro-interaction
        <div className="inline-flex items-center py-1">
          <img
            src={logoSrc}
            alt="VoiceSpace - Technology, Digital Marketing & BPO Solutions"
            className={`${sizeClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0`}
            loading="eager"
          />
        </div>
      )}
    </div>
  );
}
