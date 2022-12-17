import React, { HTMLInputTypeAttribute, LegacyRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  pattern?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`h-16 w-[24rem] pl-5 text-[1.4rem] outline-none border-b focus:border-b-violet-500 ${
          error ? 'border !border-red-400' : ''
        } ${className}`}
      />
    );
  }
);

export default Input;
