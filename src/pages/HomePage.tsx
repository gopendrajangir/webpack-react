import React from 'react';
import Scooter from 'assets/img/vector-scooter.png';
import Shirt from 'assets/img/shirt.png';

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <>
      <div
        className={`flex flex-col min-h-screen h-screen pt-24 bg-slate-300 text-2xl`}
      >
        <div className={`flex-1`}>
          <div className={`flex h-full`}>
            <div className="flex-1 flex flex-col justify-end relative pl-36">
              <h1 className="text-slate-500 absolute text-[9.5vh] leading-[1.1] font-thin w-min uppercase translate-x-1/3 self-end top-1/2 -translate-y-1/2">
                <span className="text-slate-400">Buy</span>{' '}
                <span className="text-[7.5vh] text-slate-400">everything</span>{' '}
                <span className="text-[6.6vh] text-slate-100">from one</span>{' '}
                <span className="text-[5.5vh] text-slate-100">place</span>
              </h1>
              <div className="mb-auto mt-auto">
                <img src={Shirt} alt="shirt image" className="h-32 mb-5" />
                <span className="uppercase text-red-400 text-xl">
                  upto 50-90% off
                </span>
                <h1 className="text-[2.5rem] mt-3 text-slate-700">
                  India's biggest sales
                </h1>
                <div className="mt-12 w-[25rem] h-[4rem] flex relative">
                  <button className="bg-slate-600 text-slate-200 rounded-[3rem] h-full px-8 z-20 absolute left-0 w-1/2 hover:w-full transition-all">
                    Best Offers
                  </button>
                  <button className="bg-white text-slate-600 rounded-[3rem] h-full px-5 absolute right-0 w-3/4 pl-28 hover:z-30 hover:w-full hover:pl-5 transition-all">
                    Explore Trends
                  </button>
                </div>
              </div>
              <div className="flex">
                <div className="h-[2px] w-20 bg-slate-600"></div>
                <div className="h-[2px] w-20  bg-slate-400"></div>
                <div className="h-[2px] w-20  bg-slate-200"></div>
                <div className="h-[2px] w-20  bg-white"></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-end items-center overflow-x-hidden relative">
              <img className="h-[55vh]" src={Scooter} alt="vector image" />
              <div className="h-[1px] w-3/4 bg-white bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300"></div>
            </div>
          </div>
        </div>
        <div className="h-16 bg-gradient-to-b from-slate-300 to-slate-200"></div>
      </div>
      <div className="h-[500px]">Hello</div>
    </>
  );
};

export default HomePage;
