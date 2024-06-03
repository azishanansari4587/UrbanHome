'use client'

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { CircleArrowLeft, CircleArrowRight} from 'lucide-react'
import first from '@/public/images/kitchen.png'
import second from '@/public/images/design.png'
import third from '@/public/images/BATHROOM.png'
import fourth from '@/public/images/living.png'
import fifth from '@/public/images/balkini.png'
import sixth from '@/public/images/Bedroom.png'

const Sliders = () => {

    const swiperContent =[
      {
        imag: first, alt: "Kitchen Image "
      },
      {
        imag: second, alt: "Kitchen"
      },
      {
        imag: third, alt: "Bathroom Image "
      },
      {
        imag: fourth, alt: "Living Room Image "
      },
      {
        imag: sixth, alt: "Bedroom Image "
      } ,
      {
        imag: fifth, alt: "Balkini Image "
      } 
    ]

      
  return (
    <div className='w-full'>
        <Swiper
        autoplay={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={
            {
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
            }
        }
        modules={[Pagination, Navigation]}
        className="relative group"
      >
          {swiperContent.map((content, index) => (
            <SwiperSlide key={index}>

              <section
                className='relative'
              >

                <div className="rounded-lg">
                <Image
                  className="object-cover object-center lg:h-screen lg:w-screen"
                  src={content.imag}
                  alt={content.alt}
                />
              </div>
              </section>
            </SwiperSlide>
          ))}
          <div className='top-[50%] absolute z-10 button-prev-slide left-0 text-white w-[40px] h-[40px] bg-black grid place-items-center'>
            <CircleArrowLeft />
          </div>

          <div className='top-[50%] absolute z-10 button-next-slide right-0 text-white w-[40px] h-[40px] bg-black grid place-items-center'> 
            <CircleArrowRight />
          </div>
        </Swiper>
    </div>
  )
}

export default Sliders
