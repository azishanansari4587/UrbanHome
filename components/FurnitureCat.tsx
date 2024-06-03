'use client'
import React from 'react'
import Image from 'next/image'
import { getCollections } from '@/lib/actions'
import Link from 'next/link'


const FurnitureCat = async () => {

  const collections = await getCollections();
  
  return (
    <div className='mx-auto max-w-7xl px-2 md:px-2'>
        <div className="my-4">
          <h1 className="text-center text-gray-900 text-heading2-bold">Furnitures Collection</h1>
        </div>

        {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (

        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10  md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-5">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
            <div key={collection._id} className="rounded-md border">
              
              <Image
                src= {collection.image}
                alt={collection.title}
                width={200}
                height={150}
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[200px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg sm:text-sm font-semibold">{collection.title}</h1>
              </div>
              
            </div>
            </Link>
          ))}
        </div>
        )}
      </div>
  )
}

export default FurnitureCat

