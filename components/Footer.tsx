import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';
import CurrentYear from './ui/CurrentYear';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-20 relative' id='contact'>
        <div className='w-full absolute left-0 -bottom-0 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
        </div>

        <div className='flex flex-col items-center'>
          <h1 className='heading lg:max-w-[45vw]'>
            Ready to Take <span className='text-purple'>Your</span> Digital Presence to the Next Level?
          </h1>
          <p className='text-white-200 md:mt-10 my-5 text-center'>
            Reach out to Me today and let&apos;s discuss how I can help.
          </p>
          <a href='mailto:minsung.kdg@gmail.com'>
            <MagicButton
              title="Let's Get in Touch"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
          <p className='md:text-base text-sm md:font-normal font-light'>Copyright © <CurrentYear /> Minsung Kim</p>
          <div className='flex items-center md:gap-3 gap-6 py-3'>
            {socialMedia.map((profile) => (
              <a key={profile.id} href={profile.link} className='w-10 h-10  cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <img src={profile.img} alt={profile.id} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
    </footer>
  )
}

export default Footer