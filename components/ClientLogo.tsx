import React from 'react'
import Image from 'next/image'

import Zolo from'@/public/zolo.png'
import helloworld from '@/public/hello-world-logo.png'
import Bhive from '@/public/BHive.png'
import prestige from '@/public/logo (1).svg'
import bhel from '@/public/th.jpg'
import IIT from '@/public/IIT.png'
import KIMS from '@/public/KIMS.jpg'
import godrej from '@/public/godrej.webp'
import shapur from '@/public/Shapur.png'
import continental from '@/public/Continental.png'

const ClientLogo = () => {
  return (
    <div className=" py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-heading2-bold leading-8 text-gray-900">
            Trusted Client&apos;s
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Zolo}
              alt="Zolo"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={helloworld}
              alt="Hello World"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Bhive}
              alt="Bhive"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={prestige}
              alt="Prestige"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={bhel}
              alt="BHEL"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={IIT}
              alt="IIT Dharwad"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={KIMS}
              alt="KIMS"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={godrej}
              alt="Godrej Properties"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={shapur}
              alt="Shapoorji Pallonji"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={continental}
              alt="Continental"
              width={158}
              height={48}
            />

          </div>
        </div>
      </div>
  )
}

export default ClientLogo
