import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import InputError from 'components/InputError';

import PhoneInput from 'components/PhoneInput';

interface PhoneLoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const PhoneLoginForm: React.FC<PhoneLoginFormProps> = () => {
  const { register, handleSubmit, formState, setValue } = useForm();

  const { errors } = formState;

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <form
        role="form"
        className="flex flex-col gap-y-5 mb-5 w-min"
        onSubmit={handleSubmit(({ phone }) => {
          navigate('/login/otp', {
            state: {
              phoneNumber: phone,
            },
          });
        })}
      >
        <div>
          <InputError error={errors.phone} />
          <PhoneInput
            error={errors.phone}
            placeholder="Phone number"
            {...register('phone', {
              required: 'Please provide a phone number',
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
        <Button>Send OTP</Button>
      </form>
      <NavLink className="text-[1.3rem] text-center text-slate-800" to="/login">
        Login via Email
      </NavLink>
    </div>
  );
};

export default PhoneLoginForm;
