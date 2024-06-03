"use client"
import { useState } from "react";

import { MinusCircle, PlusCircle } from "lucide-react";


import HeartFavorite from "./HeartFavourite";
import useCart from "@/lib/hooks/UseCart";
import Gallery from "./Gallery";
import { FaShareAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { Button } from "./ui/button";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (

    <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
      <div className="mb-7 border-b border-gray-300 pb-7">
        <h2 className="text-heading1-bold mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
          {productInfo.title}
        </h2>
        <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
          {productInfo.description}
        </p>
        <div className="mt-5 flex items-center ">
          <div className="text-heading2-bold pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
            ₹ {productInfo.expense}
          </div>
          <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
            ₹ {productInfo.price}
          </span>
        </div>
      </div>
      <div className="border-b border-gray-300 pb-3  ">

        {productInfo.sizes.length > 0 && (
          <div className="mb-4">
            <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">Sizes:</h3>
            <div className="flex gap-2">
              {productInfo.sizes.map((size, index) => (
                <p
                  key={index}
                  className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                    selectedSize === size && "bg-black text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </p>
              ))}
            </div>
          </div>
        )}

        {productInfo.colors.length > 0 && (
          <div className="mb-4">
          <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">Color:</h3>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color && "bg-black text-white"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>

        )}

      </div>
      <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
        <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
          <Button onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
            
          >
            -
          </Button>
          <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
            {quantity}
          </span>
          <Button onClick={() => setQuantity(quantity + 1)} className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
            +
          </Button>
        </div>
        <button
          type="button"
              onClick={() => {
                cart.addItem({
                  item: productInfo,
                  quantity,
                  color: selectedColor,
                  size: selectedSize,
                });
              }}
          className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to cart
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <HeartFavorite product={productInfo} />
        <div className="relative">
          <Button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <FaShareAlt className="h-6 mr-3"/>

            <span className="block">Share</span>
          </Button>
        </div>
      </div>

      <div className="py-6 ">
        <ul className="space-y-5 pb-1 text-sm">
          <li>
            <span className="text-heading inline-block pr-2 font-semibold">SKU:</span>
            N/A
          </li>
          <li>
            <span className="text-heading inline-block pr-2 font-semibold">Category:</span>
              {productInfo.category}
          </li>
          <li className="productTags">
            <span className="text-heading inline-block pr-2 font-semibold">Tags:</span>
              {productInfo.tags}
          </li>
        </ul>
      </div>


      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6"
        >
          <h2 className="text-heading4-bold pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">Product Details</h2>

          <MdKeyboardArrowDown  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 h-8 w-8" />
        </summary>

        <p className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
          {productInfo.details}
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6"
        >
          <h2 className="text-heading4-bold pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">Care Guide</h2>

          <MdKeyboardArrowDown  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 h-8 w-8" />
        </summary>

        <p className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
          {productInfo.care}
        </p>
      </details>


      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6"
        >
          <h2 className="text-heading4-bold pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">Warranty Terms</h2>

          <MdKeyboardArrowDown  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 h-8 w-8" />
        </summary>

        <p className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
         {productInfo.warranty}
        </p>
      </details>

    </div>
  
  );
};



export default ProductInfo;
