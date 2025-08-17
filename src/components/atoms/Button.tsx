import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
}

export const Button = ({ 
  children, 
  icon, 
  onClick, 
  className = '', 
  disabled = false,
  type = 'primary'
}: ButtonProps) => {
  const baseClasses = `
    relative
    rounded-[3.625rem]
    flex
    flex-row
    items-center
    justify-center
    text-center
    text-[3vw] md:text-[0.83vw]
    font-poppins
    active:scale-95
    transition-all
    duration-200
    disabled:opacity-50
    disabled:cursor-not-allowed
    hover:cursor-pointer
  `;

  const primaryClasses = `
    bg-gray-800
    text-purple-300
    w-[35vh] 
    md:w-[42vh] 
    py-0
    pl-6 
    md:pl-12 
    pr-0
    pr-1.5
    gap-3
    hover:bg-opacity-95
  `;

  const secondaryClasses = `
    bg-gray-700
    text-white
    h-12
    py-1.5
    px-5
    gap-2
    hover:bg-opacity-80
  `;

  const typeClasses = type === 'primary' ? primaryClasses : secondaryClasses;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${typeClasses} ${className}`}
    >
      <span className="contato relative">
        {children}
      </span>
      {icon && (
        <div className="frame-child w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
          {icon}
        </div>
      )}
    </button>
  );
};

export default Button;
