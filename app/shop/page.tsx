"use client"
import Link from "next/link";
import {client} from "../../sanity/lib/client";
import {urlFor} from "../../sanity/lib/image";
import {useState,useEffect} from "react";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {  ChevronUp } from "lucide-react";

function page() {
 const [isProducts,setIsProducts] = useState([]);
  
  
  useEffect(()=>{
    async function getData(){
      const query = `
  *[_type=="product"]{
      productName,category,price,inventory,colors,status,image,description
  }`;
  
  const responce = await client.fetch(query);
  console.log(responce);
  setIsProducts(responce);
    }
  getData();
  },[])
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <section className="flex justify-between my-20 px-8 lg:flex-row flex-col">
            <div className=" px-10  gap-10 flex flex-col">
                <div className="flex flex-col gap-5">
                <h2 className="text-[1.5em] font-[501] font-poppins">New (500)</h2>
                <ul className="flex flex-col gap-2">
                    <li className="font-poppins text-[0.9em] ">Shoes</li>
                    <li className="font-poppins text-[0.9em] ">Sports & Bras</li>
                    <li className="font-poppins text-[0.9em] ">Top & T-Shirts</li>
                    <li className="font-poppins text-[0.9em] ">Hoodies & Sweatshirts</li>
                    <li className="font-poppins text-[0.9em] ">Trousers & Tight</li>
                    <li className="font-poppins text-[0.9em] ">Shorts</li>
                    <li className="font-poppins text-[0.9em] ">Jumpsuit & Romper</li>
                    <li className="font-poppins text-[0.9em] ">Tracksuit</li>
                    <li className="font-poppins text-[0.9em] ">Socks</li>
                    <li className="font-poppins text-[0.9em] ">Accessories & Equipment</li>
                </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[1.3em] font-poppins flex items-center justify-between">Gender <ChevronUp/></h2>
                    <ul className="flex flex-col gap-2">
                        <li className="font-poppins text-[0.9em] ">Male</li>
                        <li className="font-poppins text-[0.9em] ">Female</li>
                        <li className="font-poppins text-[0.9em] ">Unisex</li>
                    </ul>
                </div><div className="flex flex-col gap-5">
                    <h2 className="text-[1.3em] font-poppins flex items-center justify-between">Kids <ChevronUp/></h2>
                    <ul className="flex flex-col gap-2">
                        <li className="font-poppins text-[0.9em] ">Boys</li>
                        <li className="font-poppins text-[0.9em] ">Girls</li> 
                    </ul>
                </div><div className="flex flex-col gap-5">
                    <h2 className="text-[1.3em] font-poppins flex items-center justify-between">Shop By Price <ChevronUp/></h2>
                    <ul className="flex flex-col gap-2">
                        <li className="font-poppins text-[0.9em] ">Under $244.00</li>
                        <li className="font-poppins text-[0.9em] ">$6556.00</li>
                    </ul>
                </div>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center gap-5">
              
          {isProducts.map((items:any,index:any) => (
              <div className="flex m-auto flex-col gap-2" key={index}>
                <Link href={`/products/${items.price}`}>
             <Image src={urlFor(items.image).url()} width={350} height={350} className="sm:w-[350px] w-[100%]" alt={items.productName}/> 
             </Link>            
              <div className="flex flex-col gap-3">
              <div className="flex flex-col">
              <span className={`${items.status === "Just In"  ? "text-green-700" : "text-red-500"}  font-poppins`}>{items.status}</span>
                <p className="text-[1em] font-poppins">{items.title}</p>
                <span className="text-[#838383]">{items.category}</span>
                <span className="text-[#838383]">{items.colors}</span>

              </div>
                <div>
                <span className="text-[1em] font-poppins">{`MRP : ₹ ${items.price}`}</span>
                </div>
              </div>
          </div>

          ))}
                  
              </div>
        </section>
        <Footer></Footer>
    </div>
  )
}

export default page;