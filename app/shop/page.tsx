  "use client"

  
  import Link from "next/link";
  import { client } from "../../sanity/lib/client";
  import { urlFor } from "../../sanity/lib/image";
  import { useState, useEffect } from "react";
  import Image from "next/image";
  import Header from "../components/Header";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import { useClerk, useUser } from "@clerk/clerk-react";  
 
  

  function page() {
   


    const [isProducts, setIsProducts] = useState<any[]>([]);
    const [sortBy, setSortBy] = useState("");
    const [activeStatus, setActiveStatus] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [isActiveColor, setIsActiveColor] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isAlertShow, setIsAlertShow] = useState(false);
    const [isError,setIsError] = useState(false);
    const [isCart,setIsCart] = useState(false);
    const { user, isLoaded, isSignedIn } = useUser();  
    const { openSignIn } = useClerk();   
  
    const [isRegister , setIsRegister] = useState(false); 

    
    const showResetAlert = () => {
      setIsAlertShow(!isAlertShow);
      setTimeout(() => {
        setIsAlertShow(false);
      }, 1500);
    };

  
    useEffect(() => {
      async function getData() {
        const query = `*[_type=="product"]{
            productName,category,price,inventory,colors,status,image,description
          }`;
  try{
    
    const response = await client.fetch(query);
    setIsProducts(response);
    console.log(response);
  } catch(error){
    setIsError(!isError)
    
  }
      }
      getData();
    }, []);

    
    const sortedProducts = [...isProducts].sort((a, b) =>
      sortBy === "lowToHigh" ? a.price - b.price : sortBy === "highToLow" ? b.price - a.price : 0
    );

    const handleSort = (order: string) => setSortBy(order);

    
    const filteredProducts = sortedProducts.filter((product) => {
      const matchesSearch = product.productName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory ? product.category === activeCategory : true;
      const matchesStatus = activeStatus ? product.status === activeStatus : true;
      const matchesColor = isActiveColor ? product.colors.includes(isActiveColor) : true;
      return matchesSearch && matchesStatus && matchesCategory && matchesColor;
    });

  
 

    
    const addToCart = (product: any) => {
      if (!isSignedIn) {
        alert("Please log in first to add items to the cart.");
        openSignIn();  
        return;
      }
    
  
      const userId = user?.id;
      console.log(userId);
      if (!userId) return;
    
      const cartKey = `cartItems_${userId}`;
      const cart = JSON.parse(localStorage.getItem(cartKey) || "[]");
    
      const productIndex = cart.findIndex((item: any) => item.productName === product.productName);
    
      if (productIndex > -1) {
        cart[productIndex].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
    
      localStorage.setItem(cartKey, JSON.stringify(cart));
      showCartAlert();
    };
    
    function showCartAlert(){
      setIsCart(!isCart);
      setTimeout(()=>{
        setIsCart(false)
      },1500);  
    }
    
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
            
  <button onClick={() => {addToCart(items); showCartAlert()}} className="py-2 bg-black text-white rounded-xl add-to-cart" data-id="product-id" data-name="product-name" data-image="product-image">
    Add to Cart
  </button>

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
                Men's Training 
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
  <div className="flex justify-center m-auto">
  <div id="toast-simple" className={`${isError ? "top-20" : "top-[-100%]"} fixed top-20 justify-center transition-all duration-500   m-auto flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
          </svg>
          <span className="sr-only">Warning icon</span>
      </div>
      <div className="ps-4 text-sm font-normal">Failed To Fetch Products</div>
  </div>
  </div>


  <div className="m-auto flex justify-center">
  <div id="toast-simple" className={`${isCart ? "top-20" : "top-[-100%]"} transition-all m-auto duration-500 flex fixed top-20  items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-green-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
      <div className="ps-4 text-sm font-normal text-[#838383]">Add To Cart Successfully</div>
  </div>
  </div>

  
    
          <Footer></Footer>
      </div>
    )
  }

  export default page;








//   "use client"
// import Link from "next/link";
// import { client } from "../../sanity/lib/client";
// import { urlFor } from "../../sanity/lib/image";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useClerk, useUser } from "@clerk/clerk-react";  // Import Clerk hooks

// function Page() {
//   const { user, isLoaded, isSignedIn } = useUser();  // Use Clerk's useUser hook to track authentication status
//   const { openSignIn } = useClerk();  // Use Clerk's openSignIn function to show login modal

//   const [isProducts, setIsProducts] = useState<any[]>([]);
//   const [sortBy, setSortBy] = useState("");
//   const [activeStatus, setActiveStatus] = useState<string | null>(null);
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [isActiveColor, setIsActiveColor] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAlertShow, setIsAlertShow] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [isCart, setIsCart] = useState(false);

//   const showResetAlert = () => {
//     setIsAlertShow(!isAlertShow);
//     setTimeout(() => {
//       setIsAlertShow(false);
//     }, 1500);
//   };

//   useEffect(() => {
//     async function getData() {
//       const query = `*[_type=="product"]{
//           productName,category,price,inventory,colors,status,image,description
//         }`;
//       try {
//         const response = await client.fetch(query);
//         setIsProducts(response);
//       } catch (error) {
//         setIsError(true);
//       }
//     }
//     getData();
//   }, []);

//   const sortedProducts = [...isProducts].sort((a, b) =>
//     sortBy === "lowToHigh" ? a.price - b.price : sortBy === "highToLow" ? b.price - a.price : 0
//   );

//   const handleSort = (order: string) => setSortBy(order);

//   const filteredProducts = sortedProducts.filter((product) => {
//     const matchesSearch = product.productName
//       ?.toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const matchesCategory = activeCategory ? product.category === activeCategory : true;
//     const matchesStatus = activeStatus ? product.status === activeStatus : true;
//     const matchesColor = isActiveColor ? product.colors.includes(isActiveColor) : true;
//     return matchesSearch && matchesStatus && matchesCategory && matchesColor;
//   });

//   const addToCart = (product: any) => {
//     if (!isSignedIn) {
//       // Show notification or modal asking the user to log in
//       alert("Please log in first to add items to the cart.");
//       openSignIn(); // Opens Clerk's sign-in modal
//       return;
//     }

//     const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");

//     const productIndex = cart.findIndex((item: any) => item.productName === product.productName);

//     if (productIndex > -1) {
//       cart[productIndex].quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     showCartAlert(); // Display cart alert
//   };

//   const showCartAlert = () => {
//     setIsCart(!isCart);
//     setTimeout(() => {
//       setIsCart(false);
//     }, 1500);
//   };

//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <section className="flex lg:justify-evenly justify-between my-20 px-8 lg:flex-row-reverse flex-col-reverse">
//         <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center gap-5">
//           {filteredProducts.map((items: any, index: any) => (
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
//                   <span className={`${items.status === "Just In" ? "text-green-700" : "text-red-500"} font-poppins`}>
//                     {items.status}
//                   </span>
//                   <p className="text-[1em] font-poppins">{items.productName}</p>
//                   <span className="text-[#838383]">{items.category}</span>
//                   <span className="text-[#838383]">{items.colors}</span>
//                 </div>
//                 <div>
//                   <span className="text-[1em] font-poppins">{`MRP : ₹ ${items.price}`}</span>
//                 </div>
//                 <button
//                   onClick={() => addToCart(items)}
//                   className="py-2 bg-black text-white rounded-xl add-to-cart"
//                 >
//                   Add to Cart
//                 </button>
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
