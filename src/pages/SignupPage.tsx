import React from 'react';

import FashionSignup from 'assets/img/fashion-signup.jpg';
import Signup from 'components/Signup';

interface SignupPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignupPage: React.FC<SignupPageProps> = (props) => {
  return (
    <div className="bg-slate-300 min-h-screen pt-24 flex justify-center items-center">
      <div className="flex rounded-[0.5rem] overflow-hidden border-white">
        <div className="relative flex justify-center items-center">
          <img
            className="w-[45rem] h-[45rem] object-cover grayscale-[0.2] bg-slate-200"
            src={FashionSignup}
            alt="Fashion image for login page"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-slate-900 bg-opacity-20"></div>
          <div className="absolute p-20 h-full">
            <h1 className="mb-16 text-[7rem] text-white">Signup</h1>
            <h1 className="text-slate-100 text-[2rem]">
              "Fashion is the armor to survive the reality of everyday life"
            </h1>
            <h2 className="text-[1.6rem] mt-6 text-slate-100">
              ~Bill Cunningham
            </h2>
          </div>
        </div>
        <div className="px-20 flex flex-col justify-center bg-slate-100 z-10">
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
