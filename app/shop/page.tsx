"use client"
import Link from "next/link";
import {client} from "../../sanity/lib/client";
import {urlFor} from "../../sanity/lib/image";
import {useState,useEffect} from "react";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function page() {
 const [isProducts,setIsProducts] = useState<any[]>([]);
 const [sortBy, setSortBy] = useState("");
 const [activeStatus, setActiveStatus] = useState<string | null>(null);
 const [activeCategory, setActiveCategory] = useState<string | null>(null);
 const [isActiveColor , setIsActiveColor] = useState<string | null>(null);
 const [searchTerm, setSearchTerm] = useState("");
 const [isAlertShow,setIsAlertShow] = useState(false);





 const showResetAlert = ()=>{
  setIsAlertShow(!isAlertShow);
  setTimeout(() => {
    setIsAlertShow(false);
  }, 1500);
}

  
  
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


  const sortedProducts = [...isProducts].sort((a, b) =>
    sortBy === "lowToHigh" ? a.price - b.price : sortBy === "highToLow" ? b.price - a.price : 0
  );
  
  const handleSort = (order: string) => setSortBy(order);

   
  const filteredProducts = sortedProducts.filter((product) => {
  
    const matchesSearch = product.productName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory ? product.category == activeCategory : true;
    const matchesStatus = activeStatus ? product.status === activeStatus : true;
    const matchesColor = isActiveColor ? product.colors.includes(isActiveColor) : true;
    return matchesSearch && matchesStatus && matchesCategory && matchesColor;
  });

  
  
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <section className="flex lg:justify-evenly justify-between my-20 px-8 lg:flex-row-reverse flex-col-reverse">


            <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1  justify-center gap-5">
              
          {filteredProducts.map((items:any,index:any) => (
              <div className="flex m-auto flex-col gap-2" key={index}>
                <Link href={`/products/${items.price}`}>
             <Image src={urlFor(items.image).url()} width={350} height={350} className="sm:w-[350px] w-[100%]" alt={items.productName}/> 
             </Link>            
              <div className="flex flex-col gap-3">
              <div className="flex flex-col">
              <span className={`${items.status === "Just In"  ? "text-green-700" : "text-red-500"}  font-poppins`}>{items.status}</span>
                <p className="text-[1em] font-poppins">{items.productName}</p>
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
                         
<div className="px-10 gap-10 lg:flex hidden flex-col sticky top-0 bg-white z-10">
 
 <div className="flex flex-col gap-5">
   <h2 className="text-[1.5em] font-[501] font-poppins">Search</h2>
   <input
     type="text"
     onChange={(e)=>setSearchTerm(e.target.value)}
     placeholder="Search for products..."
     className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
   />
 </div>


 <div className="flex flex-col gap-5">
   <h2 className="text-[1.5em] font-[501] font-poppins">Filter by Color</h2>
   <ul className="grid grid-cols-3 gap-4">
 <li
   onClick={() => setIsActiveColor("Black")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#000000] text-white rounded-full cursor-pointer"
 >
   
 </li>
 <li
   onClick={() => setIsActiveColor("Beige")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#ffffda] text-black rounded-full cursor-pointer"
 >
   
 </li>
 <li
   onClick={() => setIsActiveColor("Pink")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#ffc0cb] text-black rounded-full cursor-pointer"
 >
 
 </li>
 <li
   onClick={() => setIsActiveColor("Teal")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#008080] text-white rounded-full cursor-pointer"
 >
 
 </li>
 <li
   onClick={() => setIsActiveColor("White")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#d3d3d3] text-black rounded-full cursor-pointer"
 >
   
 </li>
 <li
   onClick={() => setIsActiveColor("Gray")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#808080] text-white rounded-full cursor-pointer"
 >
 
 </li>
 <li
   onClick={() => setIsActiveColor("Blue")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#0056b3] text-white rounded-full cursor-pointer"
 >
 
 </li>
</ul>

 </div>


 
 

 <div className="flex flex-col gap-5">
   <h2 className="text-[1.5em] font-[501] font-poppins">Sort by Price</h2>
   <ul className="flex flex-col gap-2">
     <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" onClick={()=>(handleSort("lowToHigh"))}>Low to High</li>
     <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" onClick={()=>(handleSort("highToLow"))}>High to Low</li>
   </ul>
 </div>


 <div className="flex flex-col gap-5">
   <h2 className="text-[1.5em] font-[501] font-poppins">Filter by Status</h2>
   <ul className="flex flex-col gap-2">
     <li onClick={()=>(setActiveStatus("Just In"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Just In
     </li>
     <li onClick={()=>(setActiveStatus("Promo Exclusion"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Promo Exclusion
     </li>
     <li onClick={()=>(setActiveStatus("Sustainable Materials"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Sustainable Materials
     </li>
     <li onClick={()=>(setActiveStatus("Trending"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Trending
     </li>
     <li onClick={()=>(setActiveStatus("Best Seller"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Best Seller
     </li>
   </ul>
 </div>


 <div className="flex flex-col gap-5">
           <h2 className="text-[1.5em] font-[501] font-poppins">Categories</h2>
           <ul className="flex flex-col gap-2">
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Men's Shoes")}
             >
               Men's Shoes
             </li>
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Women's Shoes")}
             >
               Women's Shoes
             </li>
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Men's Running Shoes")}
             >
               Men's Running Shoes
             </li>
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Men's Training Shoes")}
             >
               Men's Training Shoes
             </li>
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Women's Basketball Jersey")}
             >
               Women's Basketball Jersey
             </li>
      
             
           </ul>
           <div
         
               className=" text-center flex justify-center py-2 rounded-xl mt-6 font-poppins text-[1em] text-white w-[100%] bg-black cursor-pointer "
               onClick={() => {setActiveCategory(null);setIsActiveColor(null);setSortBy("");setActiveStatus(null);showResetAlert()}}
    
             >
               Clear Filters
            
         </div>
         </div>
         

</div>
 
<div className="px-10 gap-10 flex lg:hidden flex-col   w-[100%] top-0 bg-white z-10">
 
 <div className="flex flex-col gap-5">
   <h2 className="text-[1.5em] font-[501] font-poppins">Search</h2>
   <input
     type="text"
     onChange={(e)=>setSearchTerm(e.target.value)}
     placeholder="Search for products..."
     className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
   />
 </div>


 <div className="flex flex-col gap-5">
   <h2 className="text-[1.5em] font-[501] font-poppins">Filter by Color</h2>
   <ul className="grid grid-cols-3 gap-4">
 <li
   onClick={() => setIsActiveColor("Black")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#000000] text-white rounded-full cursor-pointer"
 >
   
 </li>
 <li
   onClick={() => setIsActiveColor("Beige")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#ffffda] text-black rounded-full cursor-pointer"
 >
   
 </li>
 <li
   onClick={() => setIsActiveColor("Pink")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#ffc0cb] text-black rounded-full cursor-pointer"
 >
 
 </li>
 <li
   onClick={() => setIsActiveColor("Teal")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#008080] text-white rounded-full cursor-pointer"
 >
 
 </li>
 <li
   onClick={() => setIsActiveColor("White")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#d3d3d3] text-black rounded-full cursor-pointer"
 >
   
 </li>
 <li
   onClick={() => setIsActiveColor("Gray")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#808080] text-white rounded-full cursor-pointer"
 >
 
 </li>
 <li
   onClick={() => setIsActiveColor("Blue")}
   className="font-poppins text-[0.9em] py-4 px-4 w-[25px] bg-[#0056b3] text-white rounded-full cursor-pointer"
 >
 
 </li>
</ul>

 </div>


 
 

 <div className="flex flex-col gap-5">
   <h2 className="text-[1.5em] font-[501] font-poppins">Sort by Price</h2>
   <ul className="flex flex-col gap-2">
     <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" onClick={()=>(handleSort("lowToHigh"))}>Low to High</li>
     <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" onClick={()=>(handleSort("highToLow"))}>High to Low</li>
   </ul>
 </div>


 <div className="flex flex-col gap-5">
   <h2 className="text-[1.5em] font-[501] font-poppins">Filter by Status</h2>
   <ul className="flex flex-col gap-2">
     <li onClick={()=>(setActiveStatus("Just In"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Just In
     </li>
     <li onClick={()=>(setActiveStatus("Promo Exclusion"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Promo Exclusion
     </li>
     <li onClick={()=>(setActiveStatus("Sustainable Materials"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Sustainable Materials
     </li>
     <li onClick={()=>(setActiveStatus("Trending"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Trending
     </li>
     <li onClick={()=>(setActiveStatus("Best Seller"))} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl  text-center w-[100%] cursor-pointer">
     Best Seller
     </li>
   </ul>
 </div>


 <div className="flex flex-col gap-5">
           <h2 className="text-[1.5em] font-[501] font-poppins">Categories</h2>
           <ul className="flex flex-col gap-2">
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Men's Shoes")}
             >
               Men's Shoes
             </li>
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Women's Shoes")}
             >
               Women's Shoes
             </li>
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Men's Running Shoes")}
             >
               Men's Running Shoes
             </li>
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Men's Training Shoes")}
             >
               Men's Training Shoes
             </li>
             <li
               className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
               onClick={() => setActiveCategory("Women's Basketball Jersey")}
             >
               Women's Basketball Jersey
             </li>
      
             
           </ul>
           <div
         
               className=" text-center flex justify-center py-2 rounded-xl mt-6 font-poppins text-[1em] text-white w-[100%] bg-black cursor-pointer "
               onClick={() => {setActiveCategory(null);setIsActiveColor(null);setSortBy("");setActiveStatus(null);showResetAlert()}}
    
             >
               Clear Filters
            
         </div>
         </div>
         

</div>
 

    <div id="toast-simple" className={`${isAlertShow ? "top-20" : "top-[-100%]"} transition-all duration-500 flex fixed top-20  items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-green-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
    <div className="ps-4 text-sm font-normal text-[#838383]">Filter Reset successfully.</div>
</div>
</section>

  
        <Footer></Footer>
    </div>
  )
}

export default page;









// "use client";
// import Link from "next/link";
// import { client } from "../../sanity/lib/client";
// import { urlFor } from "../../sanity/lib/image";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Page() {
//   const [isProducts, setIsProducts] = useState<any[]>([]);
//   const [sortBy, setSortBy] = useState("");  

//   useEffect(() => {
//     async function getData() {
//       const query = `
//         *[_type == "product"] {
//           productName, category, price, inventory, colors, status, image, description
//         }
//       `;

//       const response = await client.fetch(query);
//       console.log(response);
//       setIsProducts(response);
//     }
//     getData();
//   }, []);

 

//   const sortedProducts = [...isProducts].sort((a, b) =>
//     sortBy === "lowToHigh" ? a.price - b.price : sortBy === "highToLow" ? b.price - a.price : 0
//   );
  
//   const handleSort = (order: string) => setSortBy(order);
  
  

//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <section className="flex lg:justify-evenly justify-between my-20 px-8 lg:flex-row flex-col">
//         <div className="px-10 gap-10 flex flex-col sticky top-0 bg-white z-10">
//           <div className="flex flex-col gap-5">
//             <h2 className="text-[1.5em] font-[501] font-poppins">Search</h2>
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
//             />
//           </div>

//           {/* Filter by Price */}
//           <div className="flex flex-col gap-5">
//             <h2 className="text-[1.5em] font-[501] font-poppins">Sort by Price</h2>
//             <ul className="flex flex-col gap-2">
//               <li
//                 onClick={() => handleSort("lowToHigh")}
//                 className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
//               >
//                 Low to High
//               </li>
//               <li
//                 onClick={() => handleSort("highToLow")}
//                 className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
//               >
//                 High to Low
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-5">
//           {sortedProducts.map((items, index) => (
//             <div className="flex m-auto flex-col gap-2" key={index}>
//               <Link href={`/products/${items.price}`}>
//                 <Image
//                   src={urlFor(items.image).url()}
//                   width={350}
//                   height={350}
//                   className="sm:w-[350px] w-[100%]"
//                   alt={items.productName}
//                 />
//               </Link>
//               <div className="flex flex-col gap-3">
//                 <div className="flex flex-col">
//                   <span
//                     className={`${
//                       items.status === "Just In" ? "text-green-700" : "text-red-500"
//                     } font-poppins`}
//                   >
//                     {items.status}
//                   </span>
//                   <p className="text-[1em] font-poppins">{items.productName}</p>
//                   <span className="text-[#838383]">{items.category}</span>
//                   <span className="text-[#838383]">{items.colors}</span>
//                 </div>
//                 <div>
//                   <span className="text-[1em] font-poppins">{`MRP : ₹ ${items.price}`}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default Page;



























// "use client"
// import Link from "next/link";
// import {client} from "../../sanity/lib/client";
// import {urlFor} from "../../sanity/lib/image";
// import {useState,useEffect} from "react";
// import Image from "next/image";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function page() {
//  const [isProducts,setIsProducts] = useState<any[]>([]);
//  const [sortBy, setSortBy] = useState("");
//  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  
  
//   useEffect(()=>{
//     async function getData(){
//       const query = `
//   *[_type=="product"]{
//       productName,category,price,inventory,colors,status,image,description
//   }`;
  
//   const responce = await client.fetch(query);
//   console.log(responce);
//   setIsProducts(responce);
//     }
//   getData();
//   },[])

//   const sortedProducts = [...isProducts].sort((a, b) =>
//     sortBy === "lowToHigh" ? a.price - b.price : sortBy === "highToLow" ? b.price - a.price : 0
//   );
  
//   const handleSort = (order: string) => setSortBy(order);

   
//   const filteredProducts = sortedProducts.filter((product) => {
    
//     const matchesCategory = activeCategory ? product.category === activeCategory : true;
//     return matchesCategory;
//   });

//   return (
//     <div>
//         <Header></Header>
//         <Navbar></Navbar>
//         <section className="flex lg:justify-evenly justify-between my-20 px-8 lg:flex-row flex-col">
           
// <div className="px-10 gap-10 flex flex-col sticky top-0 bg-white z-10">
 
//   <div className="flex flex-col gap-5">
//     <h2 className="text-[1.5em] font-[501] font-poppins">Search</h2>
//     <input
//       type="text"
//       placeholder="Search for products..."
//       className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
//     />
//   </div>

 
//   <div className="flex flex-col gap-5">
//     <h2 className="text-[1.5em] font-[501] font-poppins">Filter by Color</h2>
//     <ul className="flex flex-col gap-2">
//       <li onClick={() => setActiveCategory("White")} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[45%] text-center w-[100%] cursor-pointer">
//         White
//       </li>
//       <li onClick={() => setActiveCategory("Black")} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[45%] text-center w-[100%] cursor-pointer">
//         Black
//       </li>
//       <li  onClick={() => setActiveCategory("Beige")} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[45%] text-center w-[100%] cursor-pointer">
//         Beige
//       </li>
//       <li onClick={() => setActiveCategory("Pink")} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[45%] text-center w-[100%] cursor-pointer">
//         Pink
//       </li>
//       <li onClick={() => setActiveCategory("Teal")} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[45%] text-center w-[100%] cursor-pointer">
//         Teal
//       </li>
//       <li onClick={() => setActiveCategory("Gray")} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[45%] text-center w-[100%] cursor-pointer">
//         Gray
//       </li>
//       <li onClick={() => setActiveCategory("Blue")} className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[45%] text-center w-[100%] cursor-pointer">
//         Blue
//       </li>
//     </ul>
//   </div>

 
//   {/* <div className="flex flex-col gap-5">
//     <h2 className="text-[1.5em] font-[501] font-poppins">Filter by Stock</h2>
//     <ul className="flex flex-col gap-2">
//       <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" >In Stock</li>
//       <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" >Out of Stock</li>
//     </ul>
//   </div> */}
 
//   <div className="flex flex-col gap-5">
//     <h2 className="text-[1.5em] font-[501] font-poppins">Sort by Price</h2>
//     <ul className="flex flex-col gap-2">
//       <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" onClick={()=>(handleSort("lowToHigh"))}>Low to High</li>
//       <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" onClick={()=>(handleSort("highToLow"))}>High to Low</li>
//     </ul>
//   </div>

 
//   <div className="flex flex-col gap-5">
//     <h2 className="text-[1.5em] font-[501] font-poppins">Filter by Brand</h2>
//     <ul className="flex flex-col gap-2">
//       <li className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[55%] text-center w-[100%] cursor-pointer">
//         Nike
//       </li>
//       <li className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[55%] text-center w-[100%] cursor-pointer">
//         Adidas
//       </li>
//       <li className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[55%] text-center w-[100%] cursor-pointer">
//         Puma
//       </li>
//       <li className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[55%] text-center w-[100%] cursor-pointer">
//         Reebok
//       </li>
//       <li className="font-poppins text-[0.9em] py-2 px-6 bg-black text-white rounded-xl lg:w-[55%] text-center w-[100%] cursor-pointer">
//         Under Armour
//       </li>
//     </ul>
//   </div>

 
//   <div className="flex flex-col gap-5">
//             <h2 className="text-[1.5em] font-[501] font-poppins">Categories</h2>
//             <ul className="flex flex-col gap-2">
//               <li
//                 className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
//                 onClick={() => setActiveCategory("Men's Shoes")}
//               >
//                 Men's Shoes
//               </li>
//               <li
//                 className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
//                 onClick={() => setActiveCategory("Women's Shoes")}
//               >
//                 Women's Shoes
//               </li>
//               <li
//                 className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
//                 onClick={() => setActiveCategory("Men's Running Shoes")}
//               >
//                 Men's Running Shoes
//               </li>
//               <li
//                 className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
//                 onClick={() => setActiveCategory("Men's Training Shoes")}
//               >
//                 Men's Training Shoes
//               </li>
//               <li
//                 className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
//                 onClick={() => setActiveCategory("Women's Basketball Jersey")}
//               >
//                 Women's Basketball Jersey
//               </li>
       
//               <li
//                 className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500"
//                 onClick={() => setActiveCategory(null)}
//               >
//                 Clear Category Filter
//               </li>
//             </ul>
//           </div>

// </div>


//             <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1  justify-center gap-5">
              
//           {filteredProducts.map((items:any,index:any) => (
//               <div className="flex m-auto flex-col gap-2" key={index}>
//                 <Link href={`/products/${items.price}`}>
//              <Image src={urlFor(items.image).url()} width={350} height={350} className="sm:w-[350px] w-[100%]" alt={items.productName}/> 
//              </Link>            
//               <div className="flex flex-col gap-3">
//               <div className="flex flex-col">
//               <span className={`${items.status === "Just In"  ? "text-green-700" : "text-red-500"}  font-poppins`}>{items.status}</span>
//                 <p className="text-[1em] font-poppins">{items.title}</p>
//                 <span className="text-[#838383]">{items.category}</span>
//                 <span className="text-[#838383]">{items.colors}</span>

//               </div>
//                 <div>
//                 <span className="text-[1em] font-poppins">{`MRP : ₹ ${items.price}`}</span>
//                 </div>
//               </div>
//           </div>

//           ))}
                  
//               </div>
//         </section>
//         <Footer></Footer>
//     </div>
//   )
// }

// export default page;





 