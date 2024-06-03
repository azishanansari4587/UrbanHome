"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

import logo from "../public/logo.png"
import { CircleUserRound, Menu, ShoppingBag } from 'lucide-react'
import { UserButton, useUser,  } from '@clerk/nextjs'
import { GrFavorite } from 'react-icons/gr'
import { FaCartShopping } from "react-icons/fa6"
import useCart from '@/lib/hooks/UseCart'
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation'


const navLinks = [
  {
    url: '/',
    label: 'Home'
  },
  {
    url: '/interior',
    label: 'Interior'
  },
  {
    url: '/furniture',
    label: 'Furniture'
  },
  {
    url: '/about',
    label: 'About'
  },
  {
    url: '/contact',
    label: 'Contact'
  },
  {
    url: '/getEstimate',
    label: 'GetEstimate'
  }
]

const Navbar = () => {

  const pathname = usePathname();
  const {user} = useUser();
  const cart = useCart();
  const [dropdownMenu, setDropDownMenu] = useState(false);


  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link  href={'/'}>
              <span className="sr-only">Home</span>
                <Image src={logo} alt='logo' width={200} height={150}/>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-4 text-sm">
                {
                  navLinks.map((link) => (
                    <li key={link.url} >
                      <Link  className={`${pathname === link.url ? "text-white bg-black":"text-gray-900 transition"}   rounded-full px-2 py-1`} href={link.url}> {link.label} </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3">

            <div className="hidden sm:flex sm:gap-3">

              {/* <Link href={"/wishlist"} className='flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white'>
                <GrFavorite className='h-6 w-6' />
              </Link> */}

              {/* <Link href={"/order"} className='flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white'>
                <ShoppingBag className='h-6 w-6' />
              </Link>

              <Link href={"/cart"} className='flex items-center border rounded-lg px-2 py-1 hover:bg-black hover:text-white'>
                <FaCartShopping  className='h-6 w-6' />
                <sup className="text-base">
                  ({cart.cartItems.length})
                </sup>
              </Link> */}

              
            </div>

            {user 
              ? (<UserButton afterSignOutUrl='/sign-in'/>) 
              : (<div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md  hover:bg-black hover:text-white px-5 py-2.5 text-sm font-medium"
                href={"/sign-up"}
              >
                Register
              </Link>
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href={"/sign-in"}
              >
                Login
              </Link>
            </div>)
            }

            <div className=" block md:hidden ">
              { dropdownMenu ? <IoCloseSharp className="cursor-pointer h-6" onClick={()=> setDropDownMenu(!dropdownMenu)}/> : <Menu className="cursor-pointer" onClick={()=> setDropDownMenu(!dropdownMenu)}/>}
            </div>

          </div>
        </div>


        {
           dropdownMenu && (
            <div className='py-3'>
              <ul className="bg-gray-400 rounded-lg py-3">

                {
                  navLinks.map((link) => (
                    <li  key={link.url}>
                      <Link  className={`${pathname === link.url ? "text-white bg-black":"text-gray-900 transition"}   rounded-full px-2 py-1`} href={link.url}  onClick={()=> setDropDownMenu(!dropdownMenu)}> {link.label} </Link>
                    </li>
                  ))
                }

                {/* <li>
                  <Link className="text-white transition hover:bg-black hover:text-white rounded-full px-4 py-2" href={'/'}> Home </Link>
                </li>

                <li>
                  <Link className="text-white transition hover:text-white hover:bg-black rounded-full px-4 py-2" href="#"> Interior </Link>
                </li>

                <li>
                  <Link className="text-white transition hover:text-white hover:bg-black rounded-full px-4 py-2" href="#"> Furniture </Link>
                </li>

                <li>
                  <Link className="text-white transition hover:text-white hover:bg-black rounded-full px-4 py-2" href={"/about"}> About</Link>
                </li>

                <li>
                  <Link className="text-white transition hover:text-white hover:bg-black rounded-full px-4 py-2" href={'/contact'}> Contact</Link>
                </li>

                <li>
                  <Link className="text-white transition hover:text-white hover:bg-black rounded-full px-4 py-2" href={"/getEstimate"} > Get Estimate </Link>
                </li> */}
              </ul>
            </div>
          )
        }


      </div>
    </header>
    
  )
}

export default Navbar
