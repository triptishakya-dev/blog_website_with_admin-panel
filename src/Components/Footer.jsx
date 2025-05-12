import Image from 'next/image';
import React from 'react';
import logo_light from '../../public/Assets/logo_light.png';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'; // X icon is now in Fa6 set
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-4 sm:gap-0 sm:flex-row bg-black pb-5 items-center p-10'>
      <Image src={logo_light} alt='logo' width={120} />
      
      <p className='text-sm text-white text-center'>
        All rights reserved. Copyright © Tripti Shakya 2025
      </p>

      <div className='flex gap-4 text-white text-2xl'>
       <Link href={"https://github.com/triptishakya-dev"} target='_blank'>
       
          <FaGithub className='hover:text-gray-400 transition-colors' />
       </Link>
      
          <Link href={"https://www.linkedin.com/in/tripti-shakya-602097281/"} target='_blank'>
       <FaLinkedin className='hover:text-gray-400 transition-colors' />
       </Link>
        
       <Link href={"https://x.com/ShakyaTrip48522"} target='_blank'> 
       <FaXTwitter className='hover:text-gray-400 transition-colors' />
       </Link>
         
        
      </div>
    </div>
  );
};
