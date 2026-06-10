interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary' | 'secondary-white';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-teal text-white hover:bg-teal-600 shadow-sm hover:shadow-md active:scale-[0.98]',
    outline: 'border border-teal text-teal bg-transparent hover:bg-teal-50 dark:hover:bg-teal-900/30 active:scale-[0.98]',
    secondary: 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-teal hover:text-teal bg-white dark:bg-gray-800 active:scale-[0.98]',
    'secondary-white': 'border border-white/30 text-white hover:bg-white/10 hover:border-white/50 active:scale-[0.98]',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
