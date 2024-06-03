import React from 'react'

import Link from 'next/link'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaSnapchat, FaXTwitter } from 'react-icons/fa6';
import { Linkedin, Mail, MapPin } from 'lucide-react';
const ContactLogo = () => {
  return (
    <div className='py-8'>
      <div className="bg-slate-200 py-16 sm:py-24">
          <div className=" mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-heading2-bold leading-8 text-gray-900">
              Contact Us
            </h2>
            <div className="mx-auto mt-10 grid max-w-xl grid-cols-5 items-center  gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Link href={'https://api.whatsapp.com/message/NA3HEQW7BTG5H1?autoload=1&app_absent=0'} target='blank' className='hover:text-white hover:bg-black rounded-full p-2 flex items-center gap-x-3'>
              <IoLogoWhatsapp className="h-12 w-12 "/><p className='text-body-bold hidden sm:block'>WhatsApp</p>
            </Link>
            <Link href={'https://www.facebook.com/UrbanHomeCity'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2 flex items-center gap-x-3'>
              <FaFacebook className="h-12 w-12 "/><p className='text-body-bold hidden sm:block'>Facebook</p>
            </Link>
            <Link href={'https://www.instagram.com/urbanhomecity/?hl=en'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2 flex items-center gap-x-3'> 
              <FaInstagram  className="h-12 w-12 " /><p className='text-body-bold hidden sm:block'>Instagram</p>
            </Link>
            <Link href={'/'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2 flex items-center gap-x-3'>
              <Linkedin className="h-12 w-12 "/><p className='text-body-bold hidden sm:block'>Linkedin</p>
            </Link>
            <Link href={'https://twitter.com/i/flow/login?redirect_after_login=%2FUrbanHomeCity'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2 flex items-center gap-x-3'>
              <FaXTwitter className="h-12 w-12 "/><p className='text-body-bold hidden sm:block'>Twitter</p>
            </Link>
            <Link href={'https://www.youtube.com/@urbanhomecity'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2 flex items-center gap-x-3'>
              <ImYoutube2  className="h-12 w-12 "/><p className='text-body-bold hidden sm:block'>YouTube</p>
            </Link>
            <Link href={'https://g.co/kgs/KnsE3yp'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2 flex items-center gap-x-3'>
              <FaGoogle  className="h-12 w-12 "/><p className='text-body-bold hidden sm:block'>Google</p>
            </Link>
            <Link href={'https://maps.app.goo.gl/gSBm6ZxuXASe7iWVA'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2 flex items-center gap-x-3'>
              <MapPin className="h-12 w-12 "/><p className='text-body-bold hidden sm:block'>Location</p>
            </Link>
            <Link href={'mailto:info@urbanhomecity'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2 flex items-center gap-x-3'>
              <Mail className="h-12 w-12 "/><p className='text-body-bold hidden sm:block'>Mail</p>
            </Link>
            <Link href={'mailto:info@urbanhomecity'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2 flex items-center gap-x-3'>
              <FaSnapchat className="h-12 w-12"/><p className='text-body-bold hidden sm:block'>Snapchat</p>
            </Link>
            </div>
          </div>
      </div>
    </div>  
  )
}

export default ContactLogo
