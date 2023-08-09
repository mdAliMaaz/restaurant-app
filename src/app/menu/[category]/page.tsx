import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

const CaregoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500 '>
      {pizzas.map((item) => (
        <Link
          className='group w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between
           even:bg-fuchsia-50
          '
          key={item.id}
          href={`/product/${item.id}`}
        >
          {/* image container */}
          {item.img && (
            <div className=' relative h-[80%]'>
              <Image
                src={item.img}
                alt='catimg'
                fill
                className=' object-contain'
                sizes="100%"
              />
            </div>
          )}
          {/* Text container */}
          <div className=' flex items-center justify-between font-bold '>
            <h1 className=' text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className=' group-hover:hidden text-xl'>${item.price}</h2>
            <button className=' hidden group-hover:block bg-red-500 text-white uppercase rounded-md p-2'>
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CaregoryPage;
