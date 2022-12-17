import React from 'react';
import { useForm } from 'react-hook-form';

import Input from 'components/Input';
import InputError from 'components/InputError';
import PasswordInput from 'components/PasswordInput';
import PhoneInput from 'components/PhoneInput';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';

interface SignupProps extends React.HTMLAttributes<HTMLDivElement> {}

const Signup: React.FC<SignupProps> = (props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(() => {})}>
        <div>
          <InputError error={errors.firstname} />
          <Input
            error={errors.firstname}
            type="text"
            placeholder="First name"
            {...register('firstname', {
              required: 'Please provide a first name',
            })}
          />
        </div>
        <div>
          <InputError error={errors.lastname} />
          <Input
            type="text"
            placeholder="Last name"
            {...register('lastname', {})}
          />
        </div>
        <div>
          <InputError error={errors.email} />
          <Input
            error={errors.email}
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'Please provide an email',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Please provide a valid email',
              },
            })}
          />
        </div>
        <div>
          <InputError error={errors.phone} />
          <PhoneInput
            error={errors.phone}
            placeholder="Phone number"
            {...register('phone', {
              minLength: {
                value: 10,
                message: 'Phone number should be 10 digits long',
              },
              onChange: ({ currentTarget: { value } }) => {
                setValue('phone', value.replace(/[^0-9]/g, ''));
              },
            })}
          />
        </div>
        <div>
          <InputError error={errors.password} />
          <PasswordInput
            error={errors.password}
            placeholder="Password"
            {...register('password', {
              required: 'Please provide a password',
              minLength: {
                value: 8,
                message: 'Password must be atleast 8 characters long',
              },
              maxLength: {
                value: 40,
                message:
                  'Password must be less than equal to 40 characters long',
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,}$/,
                message:
                  'Password must contain atleast 1 uppercase letter, 1 lowercase letter, 1 digt and 1 special character',
              },
            })}
          />
        </div>
        <Button>Signup</Button>
      </form>
      <span className="text-[1.3rem] text-center mt-5 text-slate-800">
        Already have an account?{' '}
        <NavLink
          to="/login"
          className="text-violet-600 hover:text-violet-700 hover:underline"
        >
          Login
        </NavLink>
      </span>
    </>
  );
};

export default Signup;
