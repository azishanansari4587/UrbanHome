import React from 'react'
import Image from 'next/image'
import Soon from '@/public/images/Soon.png'

const Furniture = () => {
  return (
    <div>
      <Image src={Soon} alt='Comming Soon' className="w-screen "/>
    </div>
  )
}

export default Furniture
