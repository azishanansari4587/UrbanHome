"use client"
import { getProductDetails } from '@/lib/actions'
import { useUser } from '@clerk/nextjs'
import { Heart, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { LuShoppingCart } from 'react-icons/lu'
import ProductCard from './ProductCard'



const WishItem = () => {
    const { user } = useUser();

    const [loading, setLoading] = useState(true);
    const [signedInUser, setSignedInUser] = useState<UserType | null>(null)
    const [wishlist, setWishlist] = useState<ProductType[]>([])

    const getUser = async()=> {
        try{
            const res = await fetch("/api/users")
            const data = await res.json()
            setSignedInUser(data)
            setLoading(false)
        }catch (err) {
            console.log("[users_GET]", err);
            
        }
    }

    useEffect(()=> {
        if(user){
            getUser()
        }
    }, [user])

    const getWishlistProducts = async () => {
        setLoading(true)

        if(!signedInUser) return

        const wishlistProducts = await Promise.all(signedInUser.wishlist.map(async(productId)=> {
            const res = await getProductDetails(productId)
            return res;
        }))

        setWishlist(wishlistProducts),
        setLoading(false)
    }

    useEffect(()=> {
        if(signedInUser){
            getWishlistProducts()
        }
    }, [signedInUser])

    const updateSignedInUser = (updateUser: UserType) => {
        setSignedInUser(updateUser)
    }

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
        <h2 className="text-heading2-bold ">Wishlist</h2>
        <p className="mt-3 text-sm font-medium text-gray-700">
        Items in your add to wishlist.
        </p>
        <ul className="flex flex-col divide-y divide-gray-200">
        {wishlist.map((product) => (
            <li key={product._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <ProductCard key={product._id} product={product} updateSignedInUser={updateSignedInUser}/>
            {/* <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.imageSrc}
                alt={product.name}
                />
                <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                    <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.name}</h3>
                    <p className="text-sm">{product.color}</p>
                    </div>
                    <div className="text-right">
                    <p className="text-lg font-semibold">{product.price}</p>
                    </div>
                </div>
                <div className="flex justify-between  text-sm ">
                    <Link href={''} className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white">
                        <Trash size={16} />
                        <span>Remove To Wishlist</span>
                    </Link>

                    <Link href={''} className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white">
                        <FaCartPlus size={16} />
                        <span>Add To Cart</span>
                    </Link>
                    
                </div>
                </div>
            </div> */}
            </li>
        ))}
        </ul>
        {/* <div className="space-y-1 text-right">
        <p>
            Total amount:
            <span className="font-semibold"> ₹48,967</span>
        </p>
        </div>
        <div className="flex justify-end space-x-4">
        <Link
            href={'/'}
            className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
        >
            <IoHome />
            Back to Home
        </Link>
        <Link
            href={'/cart'}
            className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
        >
            <LuShoppingCart />
            Go To Cart
        </Link>
        </div> */}
    </div>
  )
}



export default WishItem
