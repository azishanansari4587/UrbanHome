import Link from 'next/link'
import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { MdEmail, MdOutlineAddIcCall } from 'react-icons/md'

const CustomerSup = () => {
  return (
    <section className=' py-16'>
        <div className='mx-auto max-w-7xl px-2 lg:px-8'>
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 className="text-heading1-bold sm:text-4xl">Customer Care</h2>

                        <p className="mt-4 text-gray-600">
                        Customer care is the backbone of any successful business. It encompasses the strategies and practices aimed at providing exceptional service to customers, addressing their needs, and ensuring satisfaction. Effective customer care involves active listening, prompt responses, and personalized solutions to enhance the overall customer experience. 
                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                        <Link
                        href={"mailto:info@urbanhomecity.com"}
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <MdEmail className='h-12 w-12'/>
                        </span>

                        <h2 className="mt-2 font-bold">Email us</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            info@urbanhomecity.com
                        </p>
                        </Link>

                        <Link
                        href={'tel:+91 70220 47203'}
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <MdOutlineAddIcCall className='h-12 w-12'/>

                        </span>

                        <h2 className="mt-2 font-bold">Call us</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            +91 70220 47203.
                        </p>
                        </Link>

                        <Link
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href={"/faqs"}
                        >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <FaQuestion  className='h-12 w-12'/>
                        </span>

                        <h2 className="mt-2 font-bold">FAQ&apos;s</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Check frequently asked questions.
                        </p>
                        </Link>

                        <Link
                        href={'/issue'}
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <HiOutlineComputerDesktop className='h-12 w-12'/>
                        </span>

                        <h2 className="mt-2 font-bold">Raise Issue</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Have a problem with a project?
                        </p>
                        </Link>

                    </div>
                </div>

            </div>
        </div>    
    </section>
  )
}

export default CustomerSup

