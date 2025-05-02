import React from "react";
import logo from "../../public/Assets/logo.png";
import arrow from "../../public/Assets/arrow.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28 bg-white">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
        <Image src={logo} width={180} alt="" className="w-[130px] sm:w-auto cursor-pointer" />
        </Link>
        <button className="text-black rounded-md px-3 py-1 sm:px-6 sm:py-3 border border-solid font-medium flex gap-2 items-center shadow-[-7px_7px_0px_#000000]">
          get started
          <Image src={arrow} alt="" />
        </button>
      </div>

     
    </div>
  );
};

export default Navbar;
