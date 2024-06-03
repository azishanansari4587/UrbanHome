import React from 'react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import { getInteriorCollections } from '@/lib/actions'


import first  from '@/public/images/Master Bedroom Design.jpg'
import second  from '@/public/images/Home.jpg'
import third  from '@/public/images/Living.jpg'
import fourth  from '@/public/images/Kitchen.jpg'
import fifth  from '@/public/images/Bathroom.jpg'


const InteriorCat = async  () => {

  // const interiorCollections = await getInteriorCollections();

  
const interiorCollections = [
    {
      name: 'Complete Home Interior',
      description: 'Second',
      imageSrc: second,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Bedroom Interior',
      description: 'Work from home accessories',
      imageSrc: first,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    
    {
      name: 'Living Room Interior',
      description: 'Rice',
      imageSrc: third,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
      name: 'Kitchen Interior',
      description: 'Work from home accessories',
      imageSrc: fourth,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Washroom Interior',
      description: 'Second',
      imageSrc: fifth,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    
  ]


  return (
    <section className=' my-4'>
      <div className='mx-auto max-w-full px-2 md:px-2 lg:py-5'>
        <div className="my-8">
          <h1 className="text-center text-gray-900 text-heading2-bold">Interior Collection</h1>
        </div>

        {/* {!interiorCollections || interiorCollections.length === 0 ? (
        <p className="text-body-bold">No Interior Collections found</p>
      ) : ( */}

        <div className="mx-auto grid w-full max-w-screen items-center space-y-4 px-2 py-10  md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-5">
          {interiorCollections.map((interiorCollection: InteriorCollectionType) => ( 

            <Link key={interiorCollection._id} href={''}>
              <div className="rounded-md border">
                
                <Image
                  src= {interiorCollection.image}
                  alt={interiorCollection.title}
                  width={300}
                  height={300}
                  className="aspect-[4/3] z-0 w-full rounded-md md:aspect-auto md:h-[500px] lg:h-[500px]"
                />
                
                  <div className="absolute bottom-4 left-4 bg-black p-1 rounded-md">
                    <h1 className="text-base leading-7 font-medium text-white ">{interiorCollection.title}</h1>
                  </div>

              </div>
            </Link>

          ))}
        </div>  

      


      </div>
      </section>
  )
}

export default InteriorCat
