import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className=" flex flex-col ">
      <div className="flex  justify-between  items-center border-t-2 ">
        <div className="p-10 flex-col hidden md:flex justify-center gap-2 border-r-[1px]">
          <div className="flex flex-col justify-center  gap-2 uppercase">
            <Image
              src="/newsicon.png"
              alt="app logo"
              height={100}
              width={100}
            />
            <p className="font-bold text-gray-400">News Aggregator</p>
          </div>
          <p className="text-sm opacity-45">Developed by Kalyan</p>
          {/* <p>News Api</p> */}
        </div>
        <div className="p-10 flex gap-20 flex-col md:flex-row w-full md:w-auto sm:justify-center">
          {footerLinks.map((ele) => (
            <div className="flex flex-col gap-5 transition-all" key={ele.title}>
              <h2 className="font-semibold mb-4">{ele.title}</h2>
              {ele.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-700 hover:underline "
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between border-t-2  p-10 text-gray-400">
        <p className="">&copy; All Rights Reserved</p>
        <Link href="/">Terms of Use</Link>
      </div>
    </footer>
  );
};

export default Footer;
