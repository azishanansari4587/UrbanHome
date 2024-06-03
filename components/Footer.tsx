import React from 'react'
import Image from 'next/image';

import Link from "next/link";
import {Linkedin, Mail, MapPin} from 'lucide-react';

import logo from "../public/logo.png"
import loge from "../public/loge.png"
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = async() => {



  return (
    <footer className="py-12 w-full bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start space-x-8 md:flex-row">
            <div className="w-full px-4 md:w-1/2 lg:px-0">
                <Image src={loge} alt='Logo' />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-4/5 lg:grid-cols-4">
            
                <div  className="mb-8 lg:mb-0">
                    <p className="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                        <li><Link href={'/about'}>About us</Link></li>
                        <li><Link href={'/contact'}>Contact Us</Link></li>
                        <li><Link href={'/team'}>Our Team</Link></li>
                        <li><Link href={'https://online.fliphtml5.com/vtgzc/xfqn/#p=1'}>Interior Cataloge</Link></li>

                    </ul>
                </div>

                <div  className="mb-8 lg:mb-0">
                    <p className="mb-6 text-lg font-semibold text-gray-700 ">Interior Categories</p>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                        <li>Complete Home Interior</li>
                        <li>Bedroom Interior</li>
                        <li>Living Room Interior</li>
                        <li>Kitchen Interior</li>
                        <li>Bathroom Interior</li>
                    </ul>
                </div>

                <div  className="mb-8 lg:mb-0">
                    <p className="mb-6 text-lg font-semibold text-gray-700 ">Furniture Categories</p>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                        <li>Bedroom Furniture </li>
                        <li>Office Furniture</li>
                        <li>Living Room Furniture </li>
                        <li>Sofa Sets</li>
                        <li>Bathroom</li>
                    </ul>
                </div>

                <div  className="mb-8 lg:mb-0">
                    <p className="mb-6 text-lg font-semibold text-gray-700 ">Help</p>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                        <li> <Link href={"/term&condition"}>Term & Condition</Link> </li>
                        <li><Link href={'/privacypolicy'}>Privacy Policy</Link> </li>
                        <li><Link href={'/paymentsecurity'}> Payment Security</Link></li>
                        <li><Link href={"/shipping&delivery"}>Shipping & Delivery</Link></li>
                        <li><Link href={'/faqs'}>FAQ&apos;s</Link></li>
                    </ul>
                </div>

            </div>
        </div>
        <hr className="my-4"/>
        <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
            <div className="inline-flex items-center">
                <Image src={logo} alt={'Logo'} width={200} height={150}/> 
            </div>

            <div className="inline-flex items-center justify-around w-80">
                <Link href={'https://api.whatsapp.com/message/NA3HEQW7BTG5H1?autoload=1&app_absent=0'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2'><IoLogoWhatsapp className="h-6 w-6"/></Link>
                <Link href={'https://www.facebook.com/UrbanHomeCity'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2'><FaFacebook className="h-6 w-6"/></Link>
                <Link href={'https://www.instagram.com/urbanhomecity/?hl=en'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2'> <FaInstagram  className="h-6 w-6" /></Link>
                <Link href={'/'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2'><Linkedin className="h-6 w-6"/></Link>
                <Link href={'https://twitter.com/i/flow/login?redirect_after_login=%2FUrbanHomeCity'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2'><FaXTwitter className="h-6 w-6"/></Link>
                <Link href={'https://www.youtube.com/@urbanhomecity'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2'><ImYoutube2  className="h-6 w-6 "/></Link>
                <Link href={'https://g.co/kgs/KnsE3yp'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2'><FaGoogle  className="h-6 w-6"/></Link>
                <Link href={'https://maps.app.goo.gl/gSBm6ZxuXASe7iWVA'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2'><MapPin className="h-6 w-6 "/></Link>
                <Link href={'mailto:info@urbanhomecity'} target='blank' className='hover:text-white hover:bg-black rounded-full px-2 py-2'><Mail className="h-6 w-6"/></Link>
                
            </div>

            <div className="mt-4 md:mt-0">
                <p className="text-sm font-medium text-gray-500">© 2024 Urban Home City. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
