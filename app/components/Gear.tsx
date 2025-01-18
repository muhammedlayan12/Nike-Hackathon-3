"use client"






import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {client} from "../../sanity/lib/client";
import {urlFor} from "../../sanity/lib/image";
import { useState , useEffect } from "react";
import Image from "next/image";

function Gear() {
    const [isProducts,setIsProducts] = useState([]);
  
  
  useEffect(()=>{
    async function getData(){
      const query = `
  *[_type=="product"]{
      productName,category,price,inventory,colors,status,image,description
  }`;
  
  const responce = await client.fetch(query);
  const filterData = responce.slice(11,15);
  console.log(filterData);
  setIsProducts(filterData);
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
      {/* <p className="text-[#737373] font-poppins text-[0.8em]">Enhanced grip and flexibility</p> */}
    </div>
    <p className="text-[1em] font-poppins">{`${items.price}`}</p>
  </div>
</div>
))}


        </div>
      </section>
    </div>
  );
}

export default Gear;
