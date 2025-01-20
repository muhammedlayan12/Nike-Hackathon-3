"use client"






import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {client} from "../../sanity/lib/client";
import {urlFor} from "../../sanity/lib/image";
import { useState , useEffect } from "react";
import Image from "next/image";

function Gear() {
    const [isProducts,setIsProducts] = useState([]);
    const [isError,setIsError] = useState(false);
  
  
  useEffect(()=>{
    async function getData(){
      const query = `
  *[_type=="product"]{
      productName,category,price,inventory,colors,status,image,description
  }`;
  try{
    const responce = await client.fetch(query);
  const filterData = responce.slice(11,15);
  console.log(filterData);
  setIsProducts(filterData);
  } catch (error) {
  console.log("Failed To Display Products")
  setIsError(!isError);
  }
    }
  getData();
  },[])
  
  return (
    <div>
      <section className="flex flex-col my-20 py-10 gap-5 lg:px-16 md:px-12 sm:px-8 px-4">
        <div className="flex justify-between">
          <h1 className="font-poppins text-[1.2em]">Gear Up</h1>
          <p className="font-poppins text-[1.2em] flex gap-5 items-center">
            Shop Woman&apos;s <ChevronRight size={20} />
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
   
    
{isProducts.map((items:any,index:any)=>(
  
  <div className="flex flex-col gap-2" key={index}>
    <Link href={`/products/${items.price}`}>
  <Image src={urlFor(items.image).url()} width={380} height={380} className="sm:w-[380px] w-[100%]" alt="product 4 nike shoes" />
  </Link>
  <div className="flex justify-between">
    <div className="name">
      <h3 className="font-poppins text-[1.1em]">{items.productName}</h3>
      <span className="text-[#737373] font-poppins text-[0.8em]">
        {items.category}
      </span>
 
    </div>
    <p className="text-[1em] font-poppins">{`${items.price}`}</p>
  </div>
</div>
))}


        </div>
      </section>
      
 
 



<div className="flex justify-center m-auto">
<div id="toast-simple" className={`${isError ? "top-20" : "top-[-100%]"} fixed justify-center transition-all duration-500   m-auto flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>
        <span className="sr-only">Warning icon</span>
    </div>
    <div className="ps-4 text-sm font-normal">Failed To Fetch Products</div>
</div>
</div>


    </div>
  );
}

export default Gear;
