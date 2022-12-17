import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OtpInput from 'react-otp-input';

import Button from 'components/Button';

import ArrowBack from 'assets/img/icons/arrow-back.svg';
import { Controller, FieldError, useForm } from 'react-hook-form';
import InputError from 'components/InputError';

interface OTPFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const OTPForm: React.FC<OTPFormProps> = (props, context) => {
  const [countdownTime, setCountdownTime] = useState(60);
  const [otpSentTimes, setOtpSentTimes] = useState(1);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const phoneNumber = location?.state?.phoneNumber;

  useEffect(() => {
    setCountdownTime(60);
    const intervalId = window.setInterval(() => {
      setCountdownTime((seconds) => {
        if (seconds === 1) {
          clearInterval(intervalId);
          return seconds - 1;
        }
        return seconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [otpSentTimes]);

  useEffect(() => {
    if (!phoneNumber) {
      navigate('/login/phone', { replace: true });
    }
  }, []);

  return (
    <div className="flex flex-col h-full w-[24rem]">
      <button
        className="bg-transparent self-start"
        onClick={() => navigate(-1)}
      >
        <ArrowBack className="h-10 arrow-back" />
      </button>
      <div className="mt-auto mb-auto">
        <p className="text-[1.5rem] mb-10 text-slate-700">
          We have sent a 6-digit otp code on the phone number{' '}
          <b>{phoneNumber}</b>
        </p>
        <form
          role="form"
          onSubmit={handleSubmit(() => {})}
          className="flex flex-col gap-y-4"
        >
          <p className="text-[1.4rem] text-slate-700">Enter the OTP</p>
          <InputError error={errors.otp as FieldError} />
          <Controller
            name="otp"
            control={control}
            rules={{
              required: 'Please enter the otp',
              minLength: { value: 6, message: 'OTP should be 6-digit long' },
            }}
            render={({ field: { onChange, value } }) => (
              <OtpInput
                value={value}
                onChange={onChange}
                numInputs={6}
                separator={<div className="flex justify-center"></div>}
                shouldAutoFocus
                containerStyle="w-[24rem] justify-between"
                focusStyle="border border-slate-700"
                inputStyle="!w-[3.5rem] h-[3.5rem] text-[1.6rem] outline-none"
              />
            )}
          />
          <Button>Verify OTP</Button>
        </form>
        <div className="text-[1.2rem] text-slate-700 mt-5">
          Didn't recieve code?{' '}
          {countdownTime === 0 ? (
            <button
              className="text-violet-600 hover:text-violet-700 hover:underline font-bold"
              onClick={() => setOtpSentTimes(otpSentTimes + 1)}
            >
              Resend
            </button>
          ) : (
            <>
              You can resend the otp in <b>{countdownTime}</b> seconds.
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
