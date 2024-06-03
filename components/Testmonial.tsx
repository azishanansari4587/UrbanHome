'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'


const reviews = [
    {
        name: 'Anjali Reddy',
        profession: '',
        review:'"Urban Home City in Bengaluru transformed my home into a modern oasis! Their team truly understands interior design and delivered a space that is both functional and stylish. The attention to detail and the quality of materials used were exceptional. Highly recommend them for anyone looking to revamp their home!"',
        image: '',
    },
    {
        name: 'Ramesh Kumar',
        profession: '',
        review:`"I had a fantastic experience with Urban Home City. From the initial consultation to the final installation, everything was seamless. The designers were professional, listened to my needs, and provided creative solutions that exceeded my expectations. My home feels brand new, and I couldn't be happier!"`,
        image: '',
    },
    {
        name: 'Priya Singh',
        profession: '',
        review:`"Urban Home City did an amazing job with my apartment in Bengaluru. They have a keen eye for design and were able to make the most out of my small space. The project was completed on time and within budget. I love the contemporary look and feel of my home now. Thank you, Urban Home City!"`,
        image: '',
    },
    {
        name: 'Arjun Mehta',
        profession: '',
        review:`"Working with Urban Home City was a delightful experience. Their team was professional, punctual, and very creative. They transformed my living room into a beautiful, inviting space that I now love to show off. If you're in Bengaluru and need interior design services, look no further!"`,
        image: '',
    },
    {
        name: 'Kavya D',
        profession: '',
        review:`"Urban Home City took my ideas and turned them into a stunning reality. The designers were patient, attentive, and full of great suggestions. They respected my budget and delivered high-quality work. My home looks amazing now, and I receive compliments from everyone who visits!"`,
        image: '',
    },
    {
        name: 'Sanjay P.',
        profession: '',
        review:`"I am extremely satisfied with the services provided by Urban Home City. Their team is very talented and dedicated to ensuring customer satisfaction. They helped me select the perfect furniture and decor for my home. The transformation is incredible, and I am grateful for their hard work."`,
        image: '',
    },
    {
        name: 'Sneha L.',
        profession: '',
        review:`"Urban Home City provided excellent interior design services for my new home in Bengaluru. They were professional, creative, and very responsive to my needs. The end result was a beautifully designed home that reflects my personal style. I highly recommend them to anyone looking for top-notch interior design services."`,
        image: '',
    },
]



const Testmonial = () => {
  return (
    <section className='mx-auto max-w-7xl px-2 md:px-2 lg:py-5'>
        <div className="my-4">
            <h1 className="text-center text-gray-900 text-heading1-bold">What Our Cutomer Say!</h1>
        </div>
        <Swiper
        centeredSlides = {false}
          slidesPerView={2}
          navigation={
            {
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
            }
        }
          modules={[ Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className= 'relative group mx-auto mx-w-7xl px-4 sm:px-6 lg:py-8'
        >
        {/* <div className='mx-auto grid w-screen max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4'> */}
        {reviews.map((rev, i) => (
            <SwiperSlide key={i} className='mx-auto max-w-7xl lg:px-2' style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}>
                <div key={i} className="mx-auto max-w-full rounded-md bg-black p-1">
                    <div className="flex flex-col rounded-md bg-white">
                        <div className="flex flex-1 flex-col justify-between p-5">
                            <div className="mb-4 flex space-x-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i}>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6 text-yellow-500"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                    </svg>
                                </span>
                                ))}
                            </div>
                            <div className="flex-1 pt-2">
                                <blockquote>
                                <p className="text-lg text-gray-800">
                                {rev.review}
                                </p>
                                </blockquote>
                            </div>

                            <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                                <div className="flex items-center">
                                <Image
                                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                                    src={rev.image}
                                    alt=""
                                />
                                <div className="ml-3 min-w-0">
                                    <p className="truncate text-base font-semibold text-gray-800">{rev.name}</p>
                                    <p className="truncate text-base text-gray-500">{rev.profession}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}    

            <div className='top-[50%] absolute z-10 button-prev-slide left-0 text-white w-[40px] h-[40px] bg-black grid place-items-center'>
                <CircleArrowLeft />
            </div>

            <div className='top-[50%] absolute z-10 button-next-slide right-0 text-white w-[40px] h-[40px] bg-black grid place-items-center'> 
                <CircleArrowRight />
            </div>

        </Swiper>
        {/* </div>  */}
    </section>
  )
}

export default Testmonial
