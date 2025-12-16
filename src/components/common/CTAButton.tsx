
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  trackingId?: string;
}

const CTAButton = ({
  text = 'Get Started Free',
  href = '#get-started',
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  className = '',
  trackingId,
}: CTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'text-white bg-gradient shadow-cta hover-scale focus:ring-primary',
    secondary: 'text-primary bg-surface hover:bg-muted focus:ring-primary',
    outline: 'text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (trackingId) {
      // Analytics tracking would go here
      console.log(`CTA clicked: ${trackingId}`);
    }
    
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      <span>{text}</span>
    </>
  );

  if (href && !onClick) {
      // If href is a hash, use <a> tag to ensure simple anchoring within the page
      if (href.startsWith('#')) {
          return (
             <a
                href={href}
                className={combinedClasses}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
                aria-disabled={disabled || loading}
             >
                {content}
             </a>
          );
      }
      // Otherwise use Link
    return (
      <Link
        to={href}
        className={combinedClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => handleClick(e as any)}
        aria-disabled={disabled || loading}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
};

export default CTAButton;
