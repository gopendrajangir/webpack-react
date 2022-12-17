import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-slate-700 hover:bg-slate-600 text-white h-16 p-2 text-[1.4rem] shadow-sm transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
