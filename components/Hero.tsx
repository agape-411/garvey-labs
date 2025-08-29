'use client'

import React from 'react'
import Practice from './Practice'
import Services from './Services'
import Image from 'next/image'

const HomeSection = () => {
  return (
    <div id='home' className='font-sans text-white'>
      {/* Hero Section */}
      <section className='relative w-full h-screen min-h-[500px]'>
        {/* Background Image */}
        <Image
          src='/images/hero.jpg'
          alt='Hero Background'
          fill
          className='object-cover'
          priority
        />

        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/70 z-10' />

        {/* Hero Content */}
        <div className='relative z-20 flex flex-col items-center justify-start h-full text-center px-4 sm:px-6 pt-32'>
          <h1 className='text-4xl md:text-7xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg'>
            Garvey Labs
          </h1>
          <p className='text-xl sm:text-xl md:text-xl lg:text-xl leading-relaxed max-w-3xl text-white drop-shadow-md font-semibold'>
            The Science of Strategic Communications & Civic Engagement
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className='relative z-10 bg-white text-gray-900'>
        <Practice />
        <Services />
      </section>
    </div>
  )
}

export default HomeSection
