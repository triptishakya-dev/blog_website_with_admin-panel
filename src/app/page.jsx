import BlogSection from '@/Components/BlogSection'
import { Footer } from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import NewsLetter from '@/Components/Newsletter'
import Tripti from '@/Components/Tripti'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
    
      <NewsLetter/>
      <BlogSection/>
    

      
    </div>
  )
}

export default page