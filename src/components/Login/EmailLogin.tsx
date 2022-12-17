import React from 'react';
import { NavLink } from 'react-router-dom';
import { FieldError, useForm } from 'react-hook-form';

import Button from 'components/Button';
import Input from 'components/Input';
import InputError from 'components/InputError';

interface EmailLoginProps extends React.HTMLAttributes<HTMLDivElement> {}

const EmailLogin: React.FC<EmailLoginProps> = () => {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  return (
    <div className="flex flex-col">
      <form
        role="form"
        className="flex flex-col gap-y-5 w-min"
        onSubmit={handleSubmit(() => {})}
      >
        <div>
          <InputError error={errors.email as FieldError} />
          <Input
            error={errors.email as FieldError}
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'Please provide a valid email',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Please provide a valid email',
              },
            })}
          />
        </div>
        <div className="flex flex-col">
          <InputError error={errors.password as FieldError} />
          <Input
            error={errors.password as FieldError}
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Please provide a password',
            })}
          />
          <NavLink
            to="forgotPassword"
            className="text-[1.3rem] text-end text-slate-700 mt-2"
          >
            Forgot Password?
          </NavLink>
        </div>
        <Button>Login</Button>
      </form>
      <NavLink
        className="text-[1.3rem] text-center text-slate-800 mt-4"
        to="/login/phone"
      >
        Login via OTP
      </NavLink>
    </div>
  );
};

export default EmailLogin;
