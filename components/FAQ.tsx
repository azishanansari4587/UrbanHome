import { ChevronDown } from 'lucide-react'
import React from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'

const FAQ = () => {
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-heading1-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
          Discover answers to common questions in this comprehensive FAQ article. From tech troubleshooting to lifestyle queries, find concise explanations for all your inquiries in one convenient resource.
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">

        {Array.from({ length: 5 }).map((_, i) => (
        <details key={i} className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200 group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-lg text-gray-900"
            >
              <h2 className="font-medium">What the minimum cost of the Modular Kitchen?</h2>

              <IoIosArrowDropdown className='h-6 w-6'/>
            </summary>

            <p className="mt-4 px-4 pb-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
              recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
            </details>
        ))}


        <p className="textbase mt-6 text-center text-gray-600 py-8">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#" title="" className="font-semibold text-black hover:underline">
            Contact our support
          </a>
        </p>

      </div>
    </section>  
  )
}

export default FAQ
