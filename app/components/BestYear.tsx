"use client"

import { client } from "../../sanity/lib/client";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/image";
import {useEffect,useState} from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";


function BestYear() {

  const [isProducts,setIsProducts] = useState([]);


useEffect(()=>{
  async function getData(){
    const query = `
*[_type=="product"]{
    productName,category,price,inventory,colors,status,image,description
}`;

const responce = await client.fetch(query);
const filterData = responce.slice(6,9);
console.log(filterData);
setIsProducts(filterData);
  }
getData();
},[])


  return (
    <div>
      <section className="flex flex-col my-20 py-10 lg:px-16 md:px-12 sm:px-8 px-4">
        <div className="flex justify-between">
          <h1 className="font-poppins text-[1.2em]">Best Of Air Max</h1>
          <p className="font-poppins text-[1.2em] flex gap-5 items-center">Shop <ChevronRight size={20} /></p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">

          {isProducts.map((items:any,index:any)=>(
             <div className="flex flex-col gap-2" key={index}>
            <Link href={`/products/${items.price}`}> <Image src={urlFor(items.image).url()} width={450} className="sm:w-[450px] w-[100%]" height={450} alt={items.productName} /></Link>
             <div className="flex justify-between">
               <div className="name">
                 <h3 className="font-poppins text-[1.1em]">{items.productName}</h3>
                 <span className="text-[#737373] font-poppins text-[0.8em]">{items.category}</span>
               </div>
               <p className="text-[1em] font-poppins">{`$${items.price}`}</p>
             </div>
           </div>
          ))
          }

        </div>
      </section>
    </div>
  );
}

export default BestYear;
