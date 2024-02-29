'use client';
import React, { useEffect } from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';
import Header from './Header';

const Hero = () => {
  return (
    // <div className="hero h-[90vh] w-full flex flex-col hero_bg text-gray-300">
    <div className="hero h-[90vh] w-full flex flex-col hero_bg_1 text-gray-300">
      {/* <div className="bg-gradient-to-tr  absolute h-[30px] w-[30px] z-10 left-40 top-10">
        Klaya
      </div> */}
      <Header />
      <div className="flex-1 flex flex-col padding-x justify-center items-center gap-5">
        <h1 className=" text-5xl font-bold hero_txt flex text-[85px] h-max items-center  bg-gradient-to-r text-center space-y-5 from-zinc-300 to-zinc-300 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(0,0,0,.4)]">
          Information at your <br /> Finger Tips
        </h1>
        <p className="bg-gradient-to-r from-gray-300 to-slate-200 text-transparent bg-clip-text">
          Magic in your MailBox, evary alternate Saturday.
        </p>
        <div className=" min-w-max min-h-max rounded-full  flex items-center px-5 gap-2">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="outline-none p-4 w-[300px] rounded-full text-gray-300 bg-none"
          />
          <button
            type="button"
            className="bg-black text-white p-4 mr-3 outline-zin-300 outline rounded-full hover:bg-teal-900 hover:text-white transition-all"
          >
            Subscribe
          </button>
        </div>
        {/* <div className="hover:bg-slate-700 hover:drop-shadow-lg flex items-center p-4 rounded-sm">
          <a href="#trans">
            <CustomButton
              title="Explore Our Site →"
              containerStyles="text-xl font-semibold text-white bg-gradient-to-r from-amber-400 to-amber-700 text-transparent bg-clip-text"
            />
          </a>
        </div> */}
      </div>
      {/*<div className="flex justify-end p-10 font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
        Developed by Team yan & Co
      </div>*/}
    </div>
  );
};

export default Hero;
