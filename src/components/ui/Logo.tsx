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

  // Responsive height configurations matching the horizontal aspect ratio (2.66:1)
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10 md:h-11.5',
    lg: 'h-12 sm:h-14',
  }[size];

  // The official VoiceSpace horizontal transparent logo asset
  // For dark backgrounds (like the footer): uses the transparent variant with crisp white "Voice" and gradient "Space"
  // For light backgrounds (like the navbar): uses the transparent logo with dark navy "Voice" and gradient "Space"
  const logoSrc = isLight
    ? '/assets/aistudio/VoiceSpace_Logo_WhiteText.png'
    : '/assets/aistudio/VoiceSpace_Gradient_Logo_ec9da38b.png';

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
      <div className="inline-flex items-center py-1">
        <img
          src={logoSrc}
          alt="VoiceSpace - Technology, Digital Marketing & BPO Solutions"
          className={`${sizeClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0`}
          loading="eager"
        />
      </div>
    </div>
  );
}
