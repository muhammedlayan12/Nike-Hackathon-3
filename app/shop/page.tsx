 
import img1 from "../../public/images/p1.png";
import img2 from "../../public/images/p2.png";
import img3 from "../../public/images/p3.png";
import img4 from "../../public/images/p4.png";
import img5 from "../../public/images/p5.png";
import img6 from "../../public/images/p6.png";
import img7 from "../../public/images/p7.png";
import img8 from "../../public/images/p8.png";
import img9 from "../../public/images/p9.png";
import img10 from "../../public/images/p10.png";
import img11 from "../../public/images/p11.png";
import img12 from "../../public/images/p12.png";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {  ChevronUp } from "lucide-react";

function page() {

    const products = [
        {
          id: 1,
          image: img1,
          altText: "product 1 nike shoes",
          status: "Just In",
          title: "Nike Air Force 1 Mid '07",
          category: "Men's Shoes",
          color: "1 Colour",
          price: "₹ 10,795.00",
        },
        {
          id: 2,
          image: img2,
          altText: "product 2 nike shoes",
          status: "Just In",
          title: "Nike Air Max 90",
          category: "Women's Shoes",
          color: "2 Colours",
          price: "₹ 12,995.00",
        },
        {
          id: 3,
          image: img3,
          altText: "product 3 nike shoes",
          status: "Bestseller",
          title: "Nike Dunk Low Retro",
          category: "Unisex Shoes",
          color: "3 Colours",
          price: "₹ 8,995.00",
        },
        {
          id: 4,
          image: img4,
          altText: "product 4 nike shoes",
          status: "New Arrival",
          title: "Nike Air Zoom Pegasus 40",
          category: "Men's Running Shoes",
          color: "1 Colour",
          price: "₹ 9,295.00",
        },
        {
          id: 5,
          image: img5,
          altText: "product 5 nike shoes",
          status: "Limited Edition",
          title: "Nike Blazer Mid '77 Vintage",
          category: "Women's Shoes",
          color: "4 Colours",
          price: "₹ 7,495.00",
        },
        {
          id: 6,
          image: img6,
          altText: "product 6 nike shoes",
          status: "Just In",
          title: "Nike SB Dunk Low",
          category: "Unisex Shoes",
          color: "1 Colour",
          price: "₹ 9,995.00",
        },
        {
          id: 7,
          image: img7,
          altText: "product 7 nike shoes",
          status: "Bestseller",
          title: "Nike Air Jordan 1",
          category: "Men's Shoes",
          color: "2 Colours",
          price: "₹ 15,495.00",
        },
        {
          id: 8,
          image: img8,
          altText: "product 8 nike shoes",
          status: "Just In",
          title: "Nike Free Run 5.0",
          category: "Women's Running Shoes",
          color: "1 Colour",
          price: "₹ 6,995.00",
        },
        {
          id: 9,
          image: img9,
          altText: "product 9 nike shoes",
          status: "Limited Edition",
          title: "Nike Air Huarache",
          category: "Men's Shoes",
          color: "3 Colours",
          price: "₹ 11,295.00",
        },
        {
          id: 10,
          image: img10,
          altText: "product 10 nike shoes",
          status: "New Arrival",
          title: "Nike React Infinity Run",
          category: "Unisex Running Shoes",
          color: "2 Colours",
          price: "₹ 13,495.00",
        },
        {
          id: 11,
          image: img11,
          altText: "product 11 nike shoes",
          status: "Just In",
          title: "Nike Metcon 8",
          category: "Women's Training Shoes",
          color: "1 Colour",
          price: "₹ 10,795.00",
        },
        {
          id: 12,
          image: img12,
          altText: "product 12 nike shoes",
          status: "Bestseller",
          title: "Nike Court Vision Low",
          category: "Men's Shoes",
          color: "3 Colours",
          price: "₹ 7,995.00",
        },
      ];
      
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
              
          {products.map((items => (
              <div className="flex m-auto flex-col gap-2" key={items.id}>
            
             <Image src={items.image} alt={items.altText}/> 
              <div className="flex flex-col gap-3">
              <div className="flex flex-col">
              <span className={`${items.status === "Just In" ? "text-green-700" :""} text-red-800 font-poppins`}>{items.status}</span>
                <p className="text-[1em] font-poppins">{items.title}</p>
                <span className="text-[#838383]">{items.category}</span>
                <span className="text-[#838383]">{items.color}</span>
              </div>
                <div>
                <span className="text-[1em] font-poppins">{`MRP : ${items.price}`}</span>
                </div>
              </div>
          </div>

          )))}
                  
              </div>
        </section>
        <Footer></Footer>
    </div>
  )
}

export default page;