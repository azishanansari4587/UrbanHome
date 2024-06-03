import React from 'react'
import Image from 'next/image'


import refer from "@/public/images/refer.png"
import { Button } from './ui/button'

const Referral = () => {
  return (
    <section className="py-16 bg-slate-200">
        <div className="mx-auto items-center max-w-4xl px-2 lg:px-8">
            <div className="flex items-center max-w-4xl flex-col rounded-md border md:flex-row">
                
                <div>
                    <div className="p-4">
                        <h1 className="inline-flex items-center text-heading1-bold">
                        Loved us? Now refer us!

                        {/* <ArrowUpRight className="ml-2 h-4 w-4" /> */}
                        </h1>
                        <p className="my-3 text-sm text-gray-600">
                        Refer and earn ₹ 5,000 every time your friends try Urban Home City Interior.
                        </p>
                        <Button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                        Refer Now
                        </Button>
                    </div>
                </div>

                <div className="h-full w-full md:h-[200px] md:w-[500px]">
                    <Image
                        src={refer}
                        alt="Laptop"
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>

            </div>
        </div>    
    </section>  
  )
}

export default Referral
