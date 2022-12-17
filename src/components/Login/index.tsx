import React from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';

import EmailLogin from 'components/Login/EmailLogin';
import PhoneLogin from 'components/Login/PhoneLogin';
import Button from 'components/Button';

import GoogleIcon from 'assets/img/icons/google-icon.svg';
import OTPForm from './OTPForm';

interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {}

const Login: React.FC<LoginProps> = (props) => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<EmailLogin />} />
        <Route path="/phone" element={<PhoneLogin />} />
        <Route path="/otp" element={<OTPForm />} />
      </Routes>
      {location.pathname != '/login/otp' && (
        <>
          <Button className="flex items-center justify-center mt-5 !bg-white hover:!bg-slate-50 text-slate-600">
            <GoogleIcon className="w-8 h-8 mr-3" />
            Login with Google
          </Button>
          <span className="text-[1.3rem] text-center mt-6 text-slate-800">
            Don't have an account?{' '}
            <NavLink
              to="/signup"
              className="text-violet-600 hover:text-violet-700 hover:underline"
            >
              Signup
            </NavLink>
          </span>
        </>
      )}
    </>
  );
};

export default Login;
