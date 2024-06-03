// // import { Trash } from 'lucide-react'
// import Link from 'next/link'
// import React from 'react'
// import { FaCheckSquare } from 'react-icons/fa'


// import useCart from "@/lib/hooks/UseCart";
// import { useUser } from "@clerk/nextjs";
// import { MinusCircle, PlusCircle, Trash } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";


// // const products = [
// //     {
// //       id: 1,
// //       name: 'Nike Air Force 1 07 LV8',
// //       href: '#',
// //       price: '₹47,199',
// //       originalPrice: '₹48,900',
// //       discount: '5% Off',
// //       color: 'Orange',
// //       size: '8 UK',
// //       imageSrc:
// //         'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
// //     },
// //     {
// //       id: 2,
// //       name: 'Nike Blazer Low 77 SE',
// //       href: '#',
// //       price: '₹1,549',
// //       originalPrice: '₹2,499',
// //       discount: '38% off',
// //       color: 'White',
// //       leadTime: '3-4 weeks',
// //       size: '8 UK',
// //       imageSrc:
// //         'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
// //     },
// //     {
// //       id: 3,
// //       name: 'Nike Air Max 90',
// //       href: '#',
// //       price: '₹2219 ',
// //       originalPrice: '₹999',
// //       discount: '78% off',
// //       color: 'Black',
// //       imageSrc:
// //         'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
// //     },
// //   ]

// const CartItem = () => {
//   const router = useRouter();
//   const { user } = useUser();
//   const cart = useCart();

//   const total = cart.cartItems.reduce(
//     (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
//     0
//   );
//   const totalRounded = parseFloat(total.toFixed(2));

//   const totalCost = cart.cartItems.reduce(
//     (acc, cartItem) => acc + cartItem.item.expense * cartItem.quantity,
//     0
//   );
//   const totalRoundedCost = parseFloat(totalCost.toFixed(2));

//   const discountCost = cart.cartItems.reduce(
//     (acc, cartItem) => acc + (cartItem.item.price - cartItem.item.expense) * cartItem.quantity,
//     0
//   );
//   const discountRoundedCost = parseFloat(discountCost.toFixed(2));

//   // const discount = cart.cartItems.reduce(
//   //   (acc, cartItem) => acc + (cartItem.item.price - discountCost),
//   //   0
//   // );
 

//   // const discountAmount = (cart.cartItems.item.price * discount) / 100;
//   // const finalPrice = originalPrice - discountAmount;

//   const customer = {
//     clerkId: user?.id,
//     email: user?.emailAddresses[0].emailAddress,
//     name: user?.fullName,
//   };


//   const handleCheckout = async () => {
//     try {
//       if (!user) {
//         router.push("sign-in");
//       } else {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
//           method: "POST",
//           body: JSON.stringify({ cartItems: cart.cartItems, customer }),
//         });
//         const data = await res.json();
//         window.location.href = data.url;
//         console.log(data);
//       }
//     } catch (err) {
//       console.log("[checkout_POST]", err);
//     }
//   };


//   return (
    
//     <div className="mx-auto max-w-7xl px-2 lg:px-0">
//       <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
//         <h1 className="text-heading1-bold  font-bold tracking-tight text-gray-900 sm:text-4xl">
//           Shopping Cart
//         </h1>
//         <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
//           <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
//             <h2 id="cart-heading" >
//               Items in your shopping cart
//             </h2>
//             <ul role="list" className="divide-y divide-gray-200">
//               {cart.cartItems.map((cartItem) => (
//                 <div className="">
//                   <li className="flex py-6 sm:py-6 ">
//                     <div className="flex-shrink-0">
//                       <img
//                         src={cartItem.item.media[0]}
//                         alt={cartItem.item.title}
//                         width={100}
//                         height={100}
//                         className="sm:h-38 sm:w-38 h-32 w-32 rounded-md object-contain object-center"
//                       />
//                     </div>

//                     <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
//                       <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
//                         <div>
//                           <div className="flex justify-between">
//                             <h3 className="text-sm">
//                               <a href={''} className="font-semibold text-black">
//                               {cartItem.item.title}
//                               </a>
//                             </h3>
//                           </div>
//                           <div className="mt-1 flex text-sm">
//                           {cartItem.color && (
//                             <p className="text-sm text-gray-500">{cartItem.color}</p>
//                           )}
//                             {cartItem.size ? (
//                               <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
//                                 {cartItem.size}
//                               </p>
//                             ) : null}
//                           </div>
//                           <div className="mt-1 flex gap-3 items-end">
//                             <p className="text-xs font-medium text-gray-500 line-through">
//                             ₹ {cartItem.item.price}
//                             </p>
//                             <p className="text-sm font-medium text-gray-900">
//                             ₹ {cartItem.item.expense}
//                             </p>
//                             &nbsp;&nbsp;
//                             {/* <p className="text-sm font-medium text-green-500">{} % off</p> */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <div className="mb-2 flex">
//                     <div className="min-w-24 flex">
//                       <button type="button" onClick={() => cart.decreaseQuantity(cartItem.item._id)} className="h-7 w-7">
//                         -
//                       </button>

//                       {/* <p className="text-body-bold">{cartItem.quantity}</p> */}

//                       <input
//                       readOnly
//                         type="text"
//                         className="mx-1 h-7 w-9 rounded-md border text-center"
//                         min={1}
//                         value={cartItem.quantity}
//                       />
//                       <button type="button" onClick={() => cart.increaseQuantity(cartItem.item._id)} className="flex h-7 w-7 items-center justify-center">
//                         +
//                       </button>
//                     </div>
//                     <div className="ml-6 flex text-sm">
//                       <button type="button" onClick={()=> cart.removeItem(cartItem.item._id)} className="flex items-center space-x-1 px-2 py-1 pl-0">
//                         <Trash size={18} className="text-red-500" />
//                         <span className="text-xs font-medium text-red-500">Remove</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </ul>
//           </section>
//           {/* Order summary */}
//           <section
//             aria-labelledby="summary-heading"
//             className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
//           >
//             <h2
//               id="summary-heading"
//               className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
//             >
//               Price Details
//             </h2>
//             <div>
//               <dl className=" space-y-1 px-2 py-4">
//                 <div className="flex items-center justify-between">
//                   <dt className="text-sm text-gray-800">Price {`(${cart.cartItems.length} ${cart.cartItems.length > 1 ? "items" : "item" })`}</dt>
//                   <dd className="text-sm font-medium text-gray-900">₹ {totalRounded}</dd>
//                 </div>
//                 <div className="flex items-center justify-between pt-4">
//                   <dt className="flex items-center text-sm text-gray-800">
//                     <span>Discount</span>
//                   </dt>
//                   <dd className="text-sm font-medium text-green-700">- ₹ {discountRoundedCost}</dd>
//                 </div>
//                 <div className="flex items-center justify-between py-4">
//                   <dt className="flex text-sm text-gray-800">
//                     <span>Delivery Charges</span>
//                   </dt>
//                   <dd className="text-sm font-medium text-green-700">Free</dd>
//                 </div>
//                 <div className="flex items-center justify-between border-y border-dashed py-4 ">
//                   <dt className="text-base font-medium text-gray-900">Total Amount</dt>
//                   <dd className="text-base font-medium text-gray-900">₹ {totalRoundedCost}</dd>
//                 </div>
//               </dl>
//               <div className="px-2 pb-4 font-medium text-green-700">
//                 You will save ₹ {discountRoundedCost} on this order
//               </div>

//               <button onClick={handleCheckout} className='flex items-center gap-3 text-center border rounded-lg px-2 py-1 hover:bg-black hover:text-white'>
//                 <FaCheckSquare className='h-6 w-6'/>
//                 CheckOut
//               </button>
              
//             </div>
              
//           </section>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default CartItem

