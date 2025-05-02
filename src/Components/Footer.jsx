import Image from 'next/image'
import React from 'react'
import logo_light from '../../public/Assets/logo_light.png'
import { assets } from '../../public/Assets/assets'

export const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black pb-5 items-center p-10'>
      <Image src={logo_light} alt='' width={120} />
      <p className='text-sm text-white'>All right reserved. Copyright @blogger</p>
      <div className='flex'>
      <Image src={assets.facebook_icon} alt='' width={40} />
      <Image src={assets.twitter_icon} alt='' width={40} />
      <Image src={assets.googleplus_icon} alt='' width={40} />
      </div>
    </div>
  )
}
