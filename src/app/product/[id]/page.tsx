import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row'>
      {/* Image container */}
      {singleProduct.img && (
        <div className='relative w-full h-1/2'>
          <Image
            src={singleProduct.img}
            alt='single product'
            className=' object-contain'
            fill
            sizes='100%'
          />
        </div>
      )}
      {/* Text container */}
      <div className=' h-1/2 flex flex-col gap-4'>
        <h1 className=' text-3xl font-bold uppercase'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
