import React from 'react'

import pic from "@/public/images/Designer.png"
import design from "@/public/images/Designer (2).png"
import Image from 'next/image'
import { FaAward } from 'react-icons/fa'
import { RiCustomerServiceLine } from 'react-icons/ri'
import { CgCommunity } from 'react-icons/cg'
import Link from 'next/link'


const About = () => {
  return (
    <div>
        <section className='overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center'>

            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl  ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="mt-8 text-heading1-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                        Welcome to Urban Home City
                    </h1>
                    <p className="mt-8 text-lg text-gray-700">
                        At Urban Home City, we are passionate about creating spaces that inspire and transform homes into personalized sanctuaries. As your one-stop destination for furniture and interior design services, we strive to elevate your living experience with innovative solutions tailored to your unique style and preferences.
                    </p>

                    <h2 className="mt-8 text-heading2-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                        Our Mission
                    </h2>
                    <p className="mt-8 text-lg text-gray-700">
                        Our mission is to redefine the way people experience their living spaces by offering high-quality furniture and expert interior design services that reflect individual tastes and lifestyles. We aim to inspire creativity, functionality, and comfort in every home we touch, empowering our customers to express themselves through their living environments.
                    </p>

                    <h2 className="mt-8 text-heading2-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                        Our Vision
                    </h2>
                    <p className="mt-8 text-lg text-gray-700">
                        Our vision is to become a trusted leader in the furniture and interior design industry, renowned for our commitment to excellence, innovation, and customer satisfaction. We aspire to be a source of inspiration and guidance for homeowners seeking to enhance their living spaces with quality furnishings and thoughtful design solutions.
                    </p>
                </div>
            </div>

            <Image
                className="aspect-[3/2] bg-gray-50 object-cover lg:h-[900px] xl:aspect-[16/9]"
                src={pic}
                alt=""
            />

        </section>

        <section className='py-10'>
            <h1 className="mt-8 text-heading1-bold tracking-tight text-black md:text-4xl text-center lg:text-6xl">What We Offer</h1>

            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-full lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                        <Image
                            alt=""
                            src={design}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        </div>
                    </div>

                    <div className="relative items-center bg-gray-100">
                        <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 items-center sm:p-16 lg:p-24">
                            <h2 className="text-heading2-bold font-bold sm:text-3xl">
                                Furniture Collection
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Explore our curated selection of furniture pieces designed to complement any style, from modern and minimalist to classic and eclectic. Whether you are furnishing a cozy apartment or a spacious villa, our diverse range of sofas, tables, chairs, beds, and accessories offers something for every space and budget.
                            </p>

                        </div>

                        <div className="p-8 items-center sm:p-16 lg:p-24">
                            <h2 className="text-heading2-bold font-bold sm:text-3xl">
                                Interior Design Services
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Let our team of experienced designers bring your vision to life with personalized interior design services. From concept development and space planning to furniture selection and decor, we collaborate closely with you to create functional and stylish interiors that reflect your personality and lifestyle.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </section>


        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-heading1-bold sm:text-4xl">Why Choose Urban Home City</h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Link
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    href={'/contact'}
                >
                    <FaAward className='text-pink-500 h-12 w-12'/>

                    <h2 className="mt-4 text-heading3-bold text-white">Quality Assurance</h2>

                    <p className="mt-1 py-3 text-sm text-gray-300">
                        We are committed to delivering top-quality products and services that meet the highest standards of craftsmanship, durability, and design. Our furniture pieces are crafted from premium materials to ensure longevity and timeless appeal, while our interior design services are tailored to your specific needs and preferences.
                    </p>
                </Link>

                <Link
                    href={'/contact'}
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    
                >
                    <RiCustomerServiceLine className='text-pink-500 h-12 w-12' />

                    <h2 className="mt-4 text-heading3-bold text-white">Customer-Centric Approach</h2>

                    <p className="mt-1 py-3 text-sm text-gray-300">
                        At Urban Home City, customer satisfaction is our top priority. We strive to provide a seamless shopping experience and personalized service at every step of your journey, from browsing our website to receiving your order. Our dedicated team is here to assist you with expert advice, product recommendations, and support to make your home transformation effortless and enjoyable.
                    </p>
                </Link>

                <Link
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    href={'/contact'}
                >
                    <CgCommunity  className='text-pink-500 h-12 w-12' />

                    <h2 className="mt-4 text-heading3-bold text-white">Community Engagement</h2>

                    <p className="mt-1 py-3 text-sm text-gray-300">
                        We believe in giving back to the community and supporting local artisans and craftsmen. By sourcing our products ethically and promoting sustainable practices, we aim to create positive social and environmental impact while offering you quality and value.
                    </p>
                </Link>

                
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href={'/contact'}
                        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Contact Us
                    </Link>
                </div>

            </div>
        </section>
    </div>    
  )
}

export default About


