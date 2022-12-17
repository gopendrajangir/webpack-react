import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import IndiaFlag from 'assets/img/icons/india.svg';
import Input from './Input';

interface PhoneInputProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  error,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex items-center w-[24rem] h-16 bg-white ${
        error && 'border border-red-400'
      }`}
    >
      <div className="flex h-full">
        <div
          className={`border-r px-2 pl-3 ${
            error && 'border-r-red-400'
          } flex justify-center gap-x-2 items-center h-full text-[1.2rem] text-slate-600`}
        >
          <IndiaFlag className="h-5 india-flag" />
          (+91)
        </div>
      </div>
      <Input
        type="text"
        {...props}
        className="border-none min-w-0 flex-1 pl-3 h-full"
      />
    </div>
  );
};

export default PhoneInput;
