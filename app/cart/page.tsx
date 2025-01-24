"use client"

// // import Link from "next/link";
// // import { Heart, Trash } from "lucide-react"; 
// // import Image from "next/image";
// // import Header from "../components/Header";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import { useEffect, useState } from "react";
// // import { urlFor } from "@/sanity/lib/image";
// // import { useRouter } from "next/navigation";   

// // interface CartItem {
// //   image: string;
// //   productName: string;
// //   description: string;
// //   size: string;
// //   price: number;
// //   quantity: number;
// // }

// // function Page() {
// //   const [cartItems, setCartItems] = useState<CartItem[]>([]);
// //   const [isError, setIsError] = useState(false);
// //   const [userLoggedIn, setUserLoggedIn] = useState(false);
// //   const router = useRouter();  // Initialize useRouter

// //   useEffect(() => {
// //     const loggedInStatus = localStorage.getItem("userLoggedIn");
// //     console.log("Logged in status:", loggedInStatus);
// //     if (loggedInStatus) {
// //       setUserLoggedIn(true);
// //       const savedCart = localStorage.getItem("cartItems");
// //       console.log("Saved cart:", savedCart);
// //       if (savedCart) {
// //         setCartItems(JSON.parse(savedCart));
// //       }
// //     }
// //   }, []);
  
// //   function removeItem(index: number) {
// //     try {
// //       const updatedCart = cartItems.filter((item, i) => i !== index);
// //       setCartItems(updatedCart);
// //       localStorage.setItem("cartItems", JSON.stringify(updatedCart));
// //     } catch (error) {
// //       setIsError(true);
// //     }
// //   }

// //   const calculateTotal = () => {
// //     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// //   };

// //   if (!userLoggedIn) {
// //     return (
// //       <div>
// //         <Header />
// //         <Navbar />
// //         <section className="flex flex-col gap-5 lg:px-18 text-start my-20 md:px-14 sm:px-8 font-poppins px-4">
// //           <h3 className="text-[1em] font-semibold">Please login or signup to access your cart</h3>
// //           <Link href="/login" className="text-blue-500 underline">
// //             Login / Signup
// //           </Link>
// //         </section>
// //         <Footer />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div>
// //       <Header />
// //       <Navbar />
// //       <section className="flex flex-col gap-5 lg:px-18 text-start my-20 md:px-14 sm:px-8 font-poppins px-4">
// //         <h3 className="text-[1em] font-semibold">Free Delivery</h3>
// //         <p className="text-[0.85em] text-[#555]">
// //           Applies to orders of ₹ 14 000.00 or more.{" "}
// //           <span className="text-black underline">View Detail</span>
// //         </p>

// //         <div className="flex lg:flex-row flex-col justify-between items-center">
// //           <div>
// //             <h2 className="text-[1em] font-semibold">Cart</h2>
// //             <ul className="flex flex-col gap-5 border border-black px-6 py-4">
// //               {cartItems.length > 0 ? (
// //                 cartItems.map((item, index) => (
// //                   <li key={index} className="flex sm:flex-row flex-col gap-5 items-center">
// //                     <Image src={urlFor(item.image).url()} height={250} width={250} alt={`cart product ${index + 1}`} />
// //                     <div className="flex flex-col gap-4">
// //                       <div className="flex flex-col gap-1">
// //                         <p className="text-[1em] font-bold">{item.productName}</p>
// //                         <p className="text-[0.85em] text-[#555]">{item.description}</p>
// //                         <p className="text-[0.85em] text-[#555]">{`$${item.price}`}</p>
// //                         <p className="text-[0.85em] text-[#555]">Quantity {item.quantity}</p>
// //                         <div className="flex gap-4">
// //                           <Heart />
// //                           <Trash onClick={() => removeItem(index)} />
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </li>
// //                 ))
// //               ) : (
// //                 <li>No items in cart</li>
// //               )}
// //             </ul>
// //           </div>

// //           <div className="py-10 m-auto justify-center mx-4 text-center xl:w-[40%] lg:w-[45%] md:w-[70%] sm:w-[75%] w-[100%] flex flex-col gap-5">
// //             <h1 className="text-[1em] font-semibold">Summary</h1>
// //             <div className="flex flex-col gap-14 sm:px-3 px-2">
// //               <div className="flex flex-col gap-5">
// //                 <div className="flex justify-between">
// //                   <p className="sm:text-[1em] text-[0.85em]">Subtotal</p>
// //                   <span>{`$${calculateTotal().toFixed(2)}`}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <p className="sm:text-[1em] text-[0.85em]">Estimated Delivery &amp; Handling</p>
// //                   <span>Free</span>
// //                 </div>
// //               </div>
// //               <div className="flex justify-between">
// //                 <p className="sm:text-[1em] text-[0.85em]">Total</p>
// //                 <span>{`$${calculateTotal().toFixed(2)}`}</span>
// //               </div>
// //               <Link href="/checkout" className="text-white bg-[#222] rounded-full py-2">
// //                 Member Checkout
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //       <div className="flex justify-center m-auto">
// //         <div id="toast-simple" className={`${isError ? "top-20" : "top-[-100%]"} fixed justify-center transition-all duration-500   m-auto flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
// //           <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
// //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// //               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
// //             </svg>
// //             <span className="sr-only">Warning icon</span>
// //           </div>
// //           <div className="ps-4 text-sm font-normal">Failed To Show Products</div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default Page;








// import Link from "next/link";
// import { Heart, Trash } from "lucide-react"; 
// import Image from "next/image";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import { urlFor } from "@/sanity/lib/image";
// import { useRouter } from "next/router";  // Import useRouter

// interface CartItem {
//   image: string;
//   productName: string;
//   description: string;
//   size: string;
//   price: number;
//   quantity: number;
// }

// function Page() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [isError, setIsError] = useState(false);
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const router = useRouter();  // Initialize useRouter

//   useEffect(() => {
//     // Check if the user is logged in by checking the localStorage or cookies
//     const loggedInStatus = localStorage.getItem("userLoggedIn");  // Example of checking login status
//     if (loggedInStatus) {
//       setUserLoggedIn(true);
//       // Fetch the cart items if the user is logged in
//       const savedCart = localStorage.getItem("cartItems");
//       if (savedCart) {
//         setCartItems(JSON.parse(savedCart));
//       }
//     }
//   }, []);  // Empty dependency array ensures this runs once after component mounts

//   function removeItem(index: number) {
//     try {
//       const updatedCart = cartItems.filter((item, i) => i !== index);
//       setCartItems(updatedCart);
//       localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//     } catch (error) {
//       setIsError(true);
//     }
//   }

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   if (!userLoggedIn) {
//     return (
//       <div>
//         <Header />
//         <Navbar />
//         <section className="flex flex-col gap-5 lg:px-18 text-start my-20 md:px-14 sm:px-8 font-poppins px-4">
//           <h3 className="text-[1em] font-semibold">Please login or signup to access your cart</h3>
//           <Link href="/login" className="text-blue-500 underline">
//             Login / Signup
//           </Link>
//         </section>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <section className="flex flex-col gap-5 lg:px-18 text-start my-20 md:px-14 sm:px-8 font-poppins px-4">
//         <h3 className="text-[1em] font-semibold">Free Delivery</h3>
//         <p className="text-[0.85em] text-[#555]">
//           Applies to orders of ₹ 14 000.00 or more.{" "}
//           <span className="text-black underline">View Detail</span>
//         </p>

//         <div className="flex lg:flex-row flex-col justify-between items-center">
//           <div>
//             <h2 className="text-[1em] font-semibold">Cart</h2>
//             <ul className="flex flex-col gap-5 border border-black px-6 py-4">
//               {cartItems.length > 0 ? (
//                 cartItems.map((item, index) => (
//                   <li key={index} className="flex sm:flex-row flex-col gap-5 items-center">
//                     <Image src={urlFor(item.image).url()} height={250} width={250} alt={`cart product ${index + 1}`} />
//                     <div className="flex flex-col gap-4">
//                       <div className="flex flex-col gap-1">
//                         <p className="text-[1em] font-bold">{item.productName}</p>
//                         <p className="text-[0.85em] text-[#555]">{item.description}</p>
//                         <p className="text-[0.85em] text-[#555]">{`$${item.price}`}</p>
//                         <p className="text-[0.85em] text-[#555]">Quantity {item.quantity}</p>
//                         <div className="flex gap-4">
//                           <Heart />
//                           <Trash onClick={() => removeItem(index)} />
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 ))
//               ) : (
//                 <li>No items in cart</li>
//               )}
//             </ul>
//           </div>

//           <div className="py-10 m-auto justify-center mx-4 text-center xl:w-[40%] lg:w-[45%] md:w-[70%] sm:w-[75%] w-[100%] flex flex-col gap-5">
//             <h1 className="text-[1em] font-semibold">Summary</h1>
//             <div className="flex flex-col gap-14 sm:px-3 px-2">
//               <div className="flex flex-col gap-5">
//                 <div className="flex justify-between">
//                   <p className="sm:text-[1em] text-[0.85em]">Subtotal</p>
//                   <span>{`$${calculateTotal().toFixed(2)}`}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <p className="sm:text-[1em] text-[0.85em]">Estimated Delivery &amp; Handling</p>
//                   <span>Free</span>
//                 </div>
//               </div>
//               <div className="flex justify-between">
//                 <p className="sm:text-[1em] text-[0.85em]">Total</p>
//                 <span>{`$${calculateTotal().toFixed(2)}`}</span>
//               </div>
//               <Link href="/checkout" className="text-white bg-[#222] rounded-full py-2">
//                 Member Checkout
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="flex justify-center m-auto">
//         <div id="toast-simple" className={`${isError ? "top-20" : "top-[-100%]"} fixed justify-center transition-all duration-500   m-auto flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
//           <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
//             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
//             </svg>
//             <span className="sr-only">Warning icon</span>
//           </div>
//           <div className="ps-4 text-sm font-normal">Failed To Show Products</div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Page;







  import Link from "next/link";
  import { Heart, Trash } from "lucide-react"; 
  import Image from "next/image";
  import Header from "../components/Header";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import { useEffect, useState } from "react";
  import { urlFor } from "@/sanity/lib/image";
  import { useClerk, useUser } from "@clerk/clerk-react";  

  interface CartItem {
    image: string;
    productName: string;
    description: string;
    size: string;
    price: number;
    quantity: number;
  }

  function Page() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isError,setIsError] = useState(false);
    const { user, isLoaded, isSignedIn } = useUser();  
    

    useEffect(() => {
      if (typeof window !== "undefined") {
        const userId = user?.id; 
        if (userId) {
          const cartKey = `cartItems_${userId}`;
          const savedCart = localStorage.getItem(cartKey);
          if (savedCart) {
            setCartItems(JSON.parse(savedCart));
          }
        }
      }
    }, [user?.id]);  
    

  
    function removeItem(index: number) {
      try {
        const updatedCart = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCart);
    
        const userId = user?.id;
        if (userId) {
          const cartKey = `cartItems_${userId}`;
          localStorage.setItem(cartKey, JSON.stringify(updatedCart));
        }
      } catch (error) {
        setIsError(!isError);
      }
    }
    

    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
      <div>
        <Header />
        <Navbar />
        <section className="flex flex-col gap-5 lg:px-18 text-start my-20 md:px-14 sm:px-8 font-poppins px-4">
          <h3 className="text-[1em] font-semibold">Free Delivery</h3>
          <p className="text-[0.85em] text-[#555]">
            Applies to orders of ₹ 14 000.00 or more.{" "}
            <span className="text-black underline">View Detail</span>
          </p>

          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div>
              <h2 className="text-[1em] font-semibold">Cart</h2>
              <ul className="flex flex-col gap-5 border border-black px-6 py-4">
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <li key={index} className="flex sm:flex-row flex-col gap-5 items-center">
                      <Image src={urlFor(item.image).url()} height={250} width={250} alt={`cart product ${index + 1}`} />
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <p className="text-[1em] font-bold">{item.productName}</p>
                          <p className="text-[0.85em] text-[#555]">{item.description}</p>
                          <p className="text-[0.85em] text-[#555]">{`$${item.price}`}</p>
                          <p className="text-[0.85em] text-[#555]">Quantity {item.quantity}</p>
                          <div className="flex gap-4">
                            <Heart />
                            <Trash onClick={() => removeItem(index)} />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>No items in cart</li>
                )}
              </ul>
            </div>

            <div className="py-10 m-auto justify-center mx-4 text-center xl:w-[40%] lg:w-[45%] md:w-[70%] sm:w-[75%] w-[100%] flex flex-col gap-5">
              <h1 className="text-[1em] font-semibold">Summary</h1>
              <div className="flex flex-col gap-14 sm:px-3 px-2">
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between">
                    <p className="sm:text-[1em] text-[0.85em]">Subtotal</p>
                    <span>{`$${calculateTotal().toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="sm:text-[1em] text-[0.85em]">Estimated Delivery &amp; Handling</p>
                    <span>Free</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="sm:text-[1em] text-[0.85em]">Total</p>
                  <span>{`$${calculateTotal().toFixed(2)}`}</span>
                </div>
                <Link href="/checkout" className="text-white bg-[#222] rounded-full py-2">
                  Member Checkout
                </Link>
              </div>
            </div>
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
      <div className="ps-4 text-sm font-normal">Failed To Show Products</div>
  </div>
  </div>
        <Footer />
      </div>
    );
  }

  export default Page;
