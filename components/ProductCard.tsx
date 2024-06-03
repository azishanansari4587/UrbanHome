"use client"
import { useUser } from '@clerk/nextjs'
import { Heart } from 'lucide-react'
import Link from 'next/link'
// import React, { useEffect, useState } from 'react'


interface ProductCardProps {
    product: ProductType;
    updateSignedInUser?: (updatedUser: UserType) => void;
  }

const ProductCard =({ product, updateSignedInUser }: ProductCardProps ) => {

  return (
    <div className=' shadow-xl p-2 rounded-xl'>
      <Link href={`/products/${product._id}`} className="group block overflow-hidden">
        <img
            src={product.media[0]}
            alt={product.title}
            className="h-[150px] w-96 object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative bg-white pt-3">  
          <div className='flex justify-between'>
            <h3
              className="text-body  group-hover:underline group-hover:underline-offset-4"
              >{product.title} </h3>

          </div>
            
            <p className="mt-2 flex justify-between">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-gray-900">₹ {product.expense}</span>

            <span className="tracking-wider text-gray-500 line-through">₹ {product.price}</span>
            </p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;
