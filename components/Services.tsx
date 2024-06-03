import Image from 'next/image'
import React from 'react'

import kicthen from '@/public/services/kitchen.png'
import Bathroom from '@/public/services/bath.png'
import Wardrobes from '@/public/services/wardrobe.png'
import Storage from '@/public/services/storage.png'
import paint from '@/public/services/paint-roller.png'
import Study from '@/public/services/work-table.png'
import Pooja from '@/public/services/Pooja.jpeg'
import Tv from '@/public/services/tv-stand.png'
import bed from '@/public/services/bed.png'
import fur from '@/public/services/furnitures.png'
import { FaWhatsapp } from 'react-icons/fa6'
import Link from 'next/link'

const Services = () => {
  return (
    <div>
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-heading1-bold sm:text-4xl">Our Interior Services</h2>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={kicthen} alt='Modular Kitchen' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">Modular Kitchen</h2>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={Bathroom} alt='Bathroom' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">Bathroom</h2>

                        
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={Wardrobes} alt='Wardrobes' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">Wardrobes</h2>

                        
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={Tv} alt='TV Unit' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">TV Unit</h2>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={Study} alt='Study Table' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">Study Table</h2>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={Pooja} alt='Pooja Unit' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">Pooja Unit</h2>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={Storage} alt='Crockery Unit' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">Crockery Unit</h2>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={paint} alt='Paints' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">Paints</h2>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={bed} alt='BedRoom' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">Bedroom</h2>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    >
                        <Image src={fur} alt='Furnitures' className="size-40"/>

                        <h2 className="mt-4 text-xl font-bold text-center">Furnitures</h2>
                    </div>


                </div>

                <div className="mt-12 text-center">
                <Link
                    href="https://api.whatsapp.com/message/NA3HEQW7BTG5H1?autoload=1&app_absent=0" target='blank'
                    className="inline-block  rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                    Let&#39;s Enquiry Now
                </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services
