import React from 'react'
import Image from 'next/image'

import boy from '@/public/images/Designer (11).png'
import second from '@/public/images/Designer (16).png'
import third from '@/public/images/Designer (18).png'
import fourth from '@/public/images/Designer (19).png'

const features = [
    { name: 'Experience', description: 'Urban Home City Interior Specialty, located in Bengaluru, has established itself as a premier interior design firm over the past 𝟐𝟓+ years.'},
    { name: 'Projects', description: 'Urban Home City Interior Specialty has demonstrated exceptional versatility and innovation through 𝟮𝟱𝟬𝟬+ projects.', },
    { name: 'Customized Solutions', description: 'Whether it’s a cozy apartment, a sprawling villa, or a chic office space, our designs are customized to your lifestyle and preferences.', },
    { name: 'Consultation', description: ' We begin with an in-depth consultation to understand your vision and requirements.' },
    { name: 'Design Conceptualization', description: 'Our designers craft a unique concept that aligns with your vision and Bengaluru’s urban vibe.' },
    { name: 'Execution', description: 'We oversee every detail of the implementation process, ensuring the highest quality and adherence to the agreed-upon design.' },
  ]
  

const Speciality = () => {
  return (
    <div className="bg-slate-200 selection:bg-cyan-300">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-heading2-bold tracking-tight text-gray-900 sm:text-4xl">Urban Home City Interior Speciality</h2>
            <p className="mt-4 text-gray-700 ">
            Welcome to the heart of innovation and style – Bengaluru, a city where traditional aesthetics meet modern design. Our Urban Home City Interior Design specialization is tailored for the cosmopolitan dwellers of this vibrant city. We bring you bespoke design solutions that reflect Bengaluru’s unique blend of culture and contemporary living.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-black">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-700">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <Image
              src={boy}
              alt="A Boy Polish a furniture wood"
              className="rounded-lg bg-gray-100 object-cover h-[250px]"
            />
            <Image
              src={second}
              alt="A Boy mesurment the Wooden"
              className="rounded-lg bg-gray-100 object-cover h-[250px]"
            />
            <Image
              src={third}
              alt="A Boy Cut the Wooden"
              className="rounded-lg bg-gray-100 object-cover h-[250px]"
            />
            <Image
              src={fourth}
              alt="A Boy driliing in wood."
              className="rounded-lg bg-gray-100 object-cover h-[250px]"
            />
          </div>
        </div>
      </div>
  )
}

export default Speciality
