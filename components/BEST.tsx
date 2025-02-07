// "use client"
// import * as React from "react"

// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/cards"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// import Link from "next/link"
// import { airMax } from "@/data/detail"

// export function CarouselSize() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full"
//     >
//       <CarouselContent>
//         {airMax.map((item) => (
          
//           <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
//             <Link href={""}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className=" bg-[#F5F5F5] aspect-square group ">
//                  <Image src={item.img} alt={"shoes"} width={440} height={440}/>
//                 </CardContent>
                
//               </Card>
//             </div>
//                 <div className=" flex justify-between mx-2 mt-2">
//                   <h1 className="font-semibold text-sm">{item.title}</h1>
//                     <h2 className="font-semibold text-sm">{item.price}</h2>
//                 </div>
//                 <h3 className="ml-2 text-sm">{item.title2}</h3>
//                 </Link>
//           </CarouselItem>
//         ))}
        
//       </CarouselContent>
//       <div className="absolute  bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
//       <CarouselPrevious />
//       <CarouselNext />
//       </div>
   
//     </Carousel>
//   )
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////





'use client';

import { Product } from "@/type/products";

import { client } from "@/sanity/lib/client";
import { allProducts } from "../sanity/lib/querry";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from '../sanity/lib/image';
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from 'sweetalert2';

const SHOES = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProducts);
    }
    fetchproduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: `${product.productName} has been added to the cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Latest Products: samreen batool
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            {/* <Link href={`/product/${product.slug.current}`}> */}
            <Link href={product.slug ? `/product/${product.slug.current}` : '#'}>
            {product.slug ? 'View Product' : 'No Slug Available'}

              {product.image && (
                <div className="flex flex-col items-center">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName || "Product Image"}
                    width={200}
                    height={200}
                    className="rounded-md hover:scale-105 transition-transform duration-300"
                  />
                  <p className="mt-2 text-lg font-semibold text-gray-700">
                    Price: ${product.price}
                  </p>
                </div>
              )}
            </Link>
            <button
              onClick={(e) => handleAddToCart(e, product)}
              className="mt-4 w-full bg-yellow-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHOES;
