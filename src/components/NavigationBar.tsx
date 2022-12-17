import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'assets/img/logo.png';

interface NavigationBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavigationBar: React.FC<NavigationBarProps> = ({ className }) => {
  const [navBg, setNavBg] = useState(window.scrollY < 200 ? '' : 'bg-white');

  const changeNavBg = useCallback(() => {
    if (window.scrollY >= 200 && navBg == '') {
      setNavBg('bg-white');
      return;
    }
    if (window.scrollY < 200 && navBg != '') {
      setNavBg('');
      return;
    }
  }, [navBg]);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);

    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, [changeNavBg]);

  return (
    <nav
      className={`${className} fixed top-0 px-10 h-24 w-full flex items-center text-2xl z-50 ${navBg} transition-colors`}
    >
      <NavLink to="/">
        <img className="w-40" src={Logo} alt="Website logo" />
      </NavLink>
      <div className={`ml-auto mr-auto flex gap-16`}>
        <NavLink to="/men" className="text-slate-700 hover:text-slate-600">
          Men
        </NavLink>
        <NavLink to="/men" className="text-slate-700 hover:text-slate-600">
          Women
        </NavLink>
        <NavLink to="/men" className="text-slate-700 hover:text-slate-600">
          Kids
        </NavLink>
        <NavLink to="/men" className="text-slate-700 hover:text-slate-600">
          Electronics
        </NavLink>
      </div>
      <div className={`flex gap-5`}>
        <NavLink
          to="/login"
          className={`${
            navBg === ''
              ? 'text-white hover:text-slate-100'
              : 'text-slate-700 hover:text-slate-600'
          }`}
        >
          Login
        </NavLink>
        <span className="text-red-300">|</span>
        <NavLink
          to="/signup"
          className={`${
            navBg === ''
              ? 'text-white hover:text-slate-100'
              : 'text-slate-700 hover:text-slate-600'
          }`}
        >
          Create an account
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
