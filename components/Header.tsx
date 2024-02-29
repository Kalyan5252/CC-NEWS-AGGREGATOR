import React from 'react';

const Header = () => {
  return (
    <div className="absolute top-5 z-10 flex self-center bg-gray-300 text-black min-w-[250px] py-3 px-4 mt-3 rounded-full justify-between items-center">
      <div className="h-[20px] w-[20px] rounded-full bg-black"></div>
      <div className="flex gap-4">
        <h1 className="cursor-pointer hover:text-teal-900 transition-all">
          About
        </h1>
        <h1 className="cursor-pointer hover:text-teal-900 transition-all">
          twitter
        </h1>
      </div>
    </div>
  );
};

export default Header;
