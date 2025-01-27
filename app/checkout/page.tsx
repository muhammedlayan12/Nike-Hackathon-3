// "use client"

// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import img1 from "../../public/images/p1.png";
// import img2 from "../../public/images/p4.png";
// import {useState , useEffect} from "react";
// import { urlFor } from "@/sanity/lib/image";
 

// function CheckoutPage() {
  

//   const [checkoutItems, setCheckoutItems] = useState([]);

//   useEffect(() => {
//     const storedItems = localStorage.getItem("checkoutCart");
//     if (storedItems) {
//       setCheckoutItems(JSON.parse(storedItems));
//     }
//   }, []);
 
   
 
   
//   return (
//     <div className="bg-gray-100 min-h-screen font-poppins">
//       <Header />
//       <Navbar />

//       <main className="py-8 px-4">
//         <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">How would you like to get your order?</h2>
//             <p className="text-sm sm:text-base text-gray-600 mb-4">
//               Customs regulation for India requires a copy of the recipient&apos;s KYC...{" "}
//               <a href="#" className="text-blue-500 underline">Learn More</a>
//             </p>

//             <div className="mb-6">
//               <label className="flex items-center space-x-2">
//                 <input type="radio" name="delivery-method" className="form-radio" />
//                 <span>Deliver it</span>
//               </label>
//             </div>

//             <form>
//               <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input type="text" placeholder="First Name" className="input w-full" />
//                 <input type="text" placeholder="Last Name" className="input w-full" />
//               </div>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input type="text" placeholder="Address Line 1" className="input w-full" />
//                 <input type="text" placeholder="Address Line 2" className="input w-full" />
//               </div>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input type="text" placeholder="Postal Code" className="input w-full" />
//                 <input type="text" placeholder="Locality" className="input w-full" />
//               </div>
//               <div className="mb-4">
//                 <select className="input w-full">
//                   <option>State/Territory</option>
//                   <option>India</option>
//                 </select>
//               </div>
//               <div className="flex items-center space-x-2 mb-6">
//                 <input type="checkbox" id="save-address" className="form-checkbox" />
//                 <label htmlFor="save-address">Save this address to my profile</label>
//               </div>

//               <h3 className="text-lg font-semibold mb-4">What&apos;s your contact information?</h3>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input type="email" placeholder="Email" className="input w-full" />
//                 <input type="tel" placeholder="Phone Number" className="input w-full" />
//               </div>
//               <h3 className="text-lg font-semibold mb-4">What&apos;s your PAN?</h3>
//               <input type="text" placeholder="PAN" className="input w-full mb-4" />
//               <div className="flex items-center space-x-2 mb-6">
//                 <input type="checkbox" id="save-pan" className="form-checkbox" />
//                 <label htmlFor="save-pan">Save PAN details to the profile</label>
//               </div>

//               <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
//                 Continue
//               </button>
//             </form>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
//             <div className="mb-6">
//               <p className="text-sm sm:text-base">Subtotal: <span className="font-bold">₹  20,890.00y</span></p>
//               <p className="text-sm sm:text-base">Delivery/Shipping: <span className="font-bold">Free</span></p>
//               <p className="text-sm sm:text-base">Total: <span className="font-bold">₹ 20,890.00</span></p>
//               <small className="text-gray-500">
//                 (The total reflects the price of your order, including duties and taxes.)
//               </small>
//             </div>
//            {checkoutItems.length > 0 ? (
//              <div>
//            {checkoutItems.map((item:any,index)=>(
              
//               <div  key={index} className="flex items-center space-x-2 mb-4">
//                 <Image src={urlFor(item.image).url()} alt="Product Image" width={60} height={60} className="rounded-md" />
//                 <p className="ml-4 text-sm">{item.productName}</p>
//                 <p className="ml-4 text-sm">{`$${item.price}`}</p>
//               </div>
//            ))}
//            </div>
//            ):(
//             <p>No items available for checkout.</p>
//            )}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default CheckoutPage;
   

// "use client";

// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import img1 from "../../public/images/p1.png";
// import img2 from "../../public/images/p4.png";
// import { useState, useEffect } from "react";
// import { urlFor } from "@/sanity/lib/image";

// function CheckoutPage() {
//   const [checkoutItems, setCheckoutItems] = useState([]);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address1: "",
//     address2: "",
//     postalCode: "",
//     locality: "",
//     state: "",
//     email: "",
//     phone: "",
//     pan: "",
//     saveAddress: false,
//     savePan: false,
//   });

//   useEffect(() => {
//     const storedItems = localStorage.getItem("checkoutCart");
//     if (storedItems) {
//       setCheckoutItems(JSON.parse(storedItems));
//     }
//   }, []);

//   const handleChange = (e:any) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     alert("Order placed successfully!");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen font-poppins">
//       <Header />
//       <Navbar />

//       <main className="py-8 px-4">
//         <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Delivery Information Section */}
//           <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">
//               How would you like to get your order?
//             </h2>
//             <p className="text-sm sm:text-base text-gray-600 mb-4">
//               Customs regulation for India requires a copy of the recipient&apos;s KYC...{" "}
//               <a href="#" className="text-blue-500 underline">
//                 Learn More
//               </a>
//             </p>

//             <div className="mb-6">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="delivery-method"
//                   className="form-radio"
//                 />
//                 <span>Deliver it</span>
//               </label>
//             </div>

//             <form onSubmit={handleSubmit}>
//               {/* Name and Address */}
//               <h3 className="text-lg font-semibold mb-4">
//                 Enter your name and address:
//               </h3>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   className="input w-full"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   className="input w-full"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input
//                   type="text"
//                   name="address1"
//                   placeholder="Address Line 1"
//                   className="input w-full"
//                   value={formData.address1}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   name="address2"
//                   placeholder="Address Line 2"
//                   className="input w-full"
//                   value={formData.address2}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input
//                   type="text"
//                   name="postalCode"
//                   placeholder="Postal Code"
//                   className="input w-full"
//                   value={formData.postalCode}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   name="locality"
//                   placeholder="Locality"
//                   className="input w-full"
//                   value={formData.locality}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-4">
//                 <select
//                   name="state"
//                   className="input w-full"
//                   value={formData.state}
//                   onChange={handleChange}
//                 >
//                   <option value="">State/Territory</option>
//                   <option value="India">India</option>
//                 </select>
//               </div>
//               <div className="flex items-center space-x-2 mb-6">
//                 <input
//                   type="checkbox"
//                   name="saveAddress"
//                   className="form-checkbox"
//                   checked={formData.saveAddress}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="save-address">Save this address to my profile</label>
//               </div>

//               {/* Contact Information */}
//               <h3 className="text-lg font-semibold mb-4">
//                 What&apos;s your contact information?
//               </h3>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="input w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   className="input w-full"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* PAN Information */}
//               <h3 className="text-lg font-semibold mb-4">What&apos;s your PAN?</h3>
//               <input
//                 type="text"
//                 name="pan"
//                 placeholder="PAN"
//                 className="input w-full mb-4"
//                 value={formData.pan}
//                 onChange={handleChange}
//               />
//               <div className="flex items-center space-x-2 mb-6">
//                 <input
//                   type="checkbox"
//                   name="savePan"
//                   className="form-checkbox"
//                   checked={formData.savePan}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="save-pan">Save PAN details to the profile</label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
//               >
//                 Continue
//               </button>
//             </form>
//           </div>

//           {/* Order Summary */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
//             <div className="mb-6">
//               <p className="text-sm sm:text-base">
//                 Subtotal: <span className="font-bold">₹ 20,890.00</span>
//               </p>
//               <p className="text-sm sm:text-base">
//                 Delivery/Shipping: <span className="font-bold">Free</span>
//               </p>
//               <p className="text-sm sm:text-base">
//                 Total: <span className="font-bold">₹ 20,890.00</span>
//               </p>
//               <small className="text-gray-500">
//                 (The total reflects the price of your order, including duties and taxes.)
//               </small>
//             </div>
//             {checkoutItems.length > 0 ? (
//               <div>
//                 {checkoutItems.map((item:any, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-2 mb-4"
//                   >
//                     <Image
//                       src={urlFor(item.image).url()}
//                       alt="Product Image"
//                       width={60}
//                       height={60}
//                       className="rounded-md"
//                     />
//                     <p className="ml-4 text-sm">{item.productName}</p>
//                     <p className="ml-4 text-sm">{`$${item.price}`}</p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No items available for checkout.</p>
//             )}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default CheckoutPage;












// "use client";

// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { urlFor } from "@/sanity/lib/image";

// function CheckoutPage() {
//   const [checkoutItems, setCheckoutItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

  

//   useEffect(() => {
//     const storedItems = localStorage.getItem("checkoutCart");
//     if (storedItems) {
//       setCheckoutItems(JSON.parse(storedItems));
//     }
//   }, []);

  
//   useEffect(() => {
//     const total = checkoutItems.reduce(
//       (sum:any, item:any) => sum + item.price * item.quantity,
//       0
//     );
//     setTotalPrice(total);
//   }, [checkoutItems]);

   

//   return (
//     <div className="bg-gray-100 min-h-screen font-poppins">
//       <Header />
//       <Navbar />

//       <main className="py-8 px-4">
//         <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     
     
//           <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">How would you like to get your order?</h2>
//             <p className="text-sm sm:text-base text-gray-600 mb-4">
//               Customs regulation for India requires a copy of the recipient&apos;s KYC...{" "}
//               <a href="#" className="text-blue-500 underline">Learn More</a>
//             </p>

//             <div className="mb-6">
//               <label className="flex items-center space-x-2">
//                 <input type="radio" name="delivery-method" className="form-radio" />
//                 <span>Deliver it</span>
//               </label>
//             </div>

//             <form>
//               <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input type="text" placeholder="First Name" className="input w-full" />
//                 <input type="text" placeholder="Last Name" className="input w-full" />
//               </div>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input type="text" placeholder="Address Line 1" className="input w-full" />
//                 <input type="text" placeholder="Address Line 2" className="input w-full" />
//               </div>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input type="text" placeholder="Postal Code" className="input w-full" />
//                 <input type="text" placeholder="Locality" className="input w-full" />
//               </div>
//               <div className="mb-4">
//                 <select className="input w-full">
//                   <option>State/Territory</option>
//                   <option>India</option>
//                 </select>
//               </div>
//               <div className="flex items-center space-x-2 mb-6">
//                 <input type="checkbox" id="save-address" className="form-checkbox" />
//                 <label htmlFor="save-address">Save this address to my profile</label>
//               </div>

//               <h3 className="text-lg font-semibold mb-4">What&apos;s your contact information?</h3>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <input type="email" placeholder="Email" className="input w-full" />
//                 <input type="tel" placeholder="Phone Number" className="input w-full" />
//               </div>
//               <h3 className="text-lg font-semibold mb-4">What&apos;s your PAN?</h3>
//               <input type="text" placeholder="PAN" className="input w-full mb-4" />
//               <div className="flex items-center space-x-2 mb-6">
//                 <input type="checkbox" id="save-pan" className="form-checkbox" />
//                 <label htmlFor="save-pan">Save PAN details to the profile</label>
//               </div>

//               <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
//                 Continue
//               </button>
//             </form>
//           </div>

//           {/* Order Summary Section */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
//             {checkoutItems.length > 0 ? (
//               <div>
//                 {checkoutItems.map((item:any, index) => (
//                   <div key={index} className="flex items-center gap-4  mb-4">
//                     <Image
//                       src={urlFor(item.image).url()}
//                       alt="Product Image"
//                       width={60}
//                       height={60}
//                       className="rounded-md"
//                     />
//                     <div className="flex flex-col  ">
//                     <p className="text-sm">{item.productName}</p>
                    
//                     <p className="text-sm">{`$${item.price * item.quantity}`}</p>
                    
//                     <p className="text-sm">{item.quantity}</p>
//                     </div>
//                   </div>
//                 ))}
//                 <hr className="my-4" />
//                 <p className="text-sm sm:text-base">Subtotal: <span className="font-bold">₹ {totalPrice.toFixed(2)}</span></p>
//                 <p className="text-sm sm:text-base">Delivery/Shipping: <span className="font-bold">Free</span></p>
//                 <p className="text-sm sm:text-base">Total: <span className="font-bold">₹ {totalPrice.toFixed(2)}</span></p>
//               </div>
//             ) : (
//               <p>No items available for checkout.</p>
//             )}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default CheckoutPage;


// "use client";

// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { urlFor } from "@/sanity/lib/image";

// function CheckoutPage() {
//   const [checkoutItems, setCheckoutItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [formDetails, setFormDetails] = useState({
//     firstName: "",
//     lastName: "",
//     addressLine1: "",
//     addressLine2: "",
//     postalCode: "",
//     locality: "",
//     state: "",
//     email: "",
//     phoneNumber: "",
//     pan: "",
//   });

//   useEffect(() => {
//     const storedItems = localStorage.getItem("checkoutCart");
//     if (storedItems) {
//       setCheckoutItems(JSON.parse(storedItems));
//     }
//   }, []);

//   useEffect(() => {
//     const total = checkoutItems.reduce(
//       (sum: any, item: any) => sum + item.price * item.quantity,
//       0
//     );
//     setTotalPrice(total);
//   }, [checkoutItems]);

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

    
//     localStorage.setItem("shippingDetails", JSON.stringify(formDetails));

    
//     console.log("Form submitted:", formDetails);

//     alert("Order placed successfully! Details have been saved for tracking.");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen font-poppins">
//       <Header />
//       <Navbar />

//       <main className="py-8 px-4">
//         <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      
//           <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">How would you like to get your order?</h2>
//             <p className="text-sm sm:text-base text-gray-600 mb-4">
//               Customs regulation for India requires a copy of the recipient&apos;s KYC...{" "}
//               <a href="#" className="text-blue-500 underline">Learn More</a>
//             </p>

            // <form onSubmit={handleSubmit}>
            //   <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
            //   <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            //     <input
            //       type="text"
            //       name="firstName"
            //       placeholder="First Name"
            //       value={formDetails.firstName}
            //       onChange={handleFormChange}
            //       className="input w-full"
            //     />
            //     <input
            //       type="text"
            //       name="lastName"
            //       placeholder="Last Name"
            //       value={formDetails.lastName}
            //       onChange={handleFormChange}
            //       className="input w-full"
            //     />
            //   </div>
            //   <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            //     <input
            //       type="text"
            //       name="addressLine1"
            //       placeholder="Address Line 1"
            //       value={formDetails.addressLine1}
            //       onChange={handleFormChange}
            //       className="input w-full"
            //     />
            //     <input
            //       type="text"
            //       name="addressLine2"
            //       placeholder="Address Line 2"
            //       value={formDetails.addressLine2}
            //       onChange={handleFormChange}
            //       className="input w-full"
            //     />
            //   </div>
            //   <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            //     <input
            //       type="text"
            //       name="postalCode"
            //       placeholder="Postal Code"
            //       value={formDetails.postalCode}
            //       onChange={handleFormChange}
            //       className="input w-full"
            //     />
            //     <input
            //       type="text"
            //       name="locality"
            //       placeholder="Locality"
            //       value={formDetails.locality}
            //       onChange={handleFormChange}
            //       className="input w-full"
            //     />
            //   </div>
            //   <div className="mb-4">
            //     <select
            //       name="state"
            //       value={formDetails.state}
            //       onChange={handleFormChange}
            //       className="input w-full"
            //     >
            //       <option value="">State/Territory</option>
            //       <option value="India">India</option>
            //     </select>
            //   </div>

            //   <h3 className="text-lg font-semibold mb-4">What&apos;s your contact information?</h3>
            //   <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            //     <input
            //       type="email"
            //       name="email"
            //       placeholder="Email"
            //       value={formDetails.email}
            //       onChange={handleFormChange}
            //       className="input w-full"
            //     />
            //     <input
            //       type="tel"
            //       name="phoneNumber"
            //       placeholder="Phone Number"
            //       value={formDetails.phoneNumber}
            //       onChange={handleFormChange}
            //       className="input w-full"
            //     />
            //   </div>
            //   <h3 className="text-lg font-semibold mb-4">What&apos;s your PAN?</h3>
            //   <input
            //     type="text"
            //     name="pan"
            //     placeholder="PAN"
            //     value={formDetails.pan}
            //     onChange={handleFormChange}
            //     className="input w-full mb-4"
            //   />

            //   <button
            //     type="submit"
            //     className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            //   >
            //     Place Order
            //   </button>
            // </form>
//           </div>

//           {/* Order Summary Section */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
//             {checkoutItems.length > 0 ? (
//               <div>
//                 {checkoutItems.map((item: any, index) => (
//                   <div key={index} className="flex items-center gap-4 mb-4">
//                     <Image
//                       src={urlFor(item.image).url()}
//                       alt="Product Image"
//                       width={60}
//                       height={60}
//                       className="rounded-md"
//                     />
//                     <div className="flex flex-col">
//                       <p className="text-sm">{item.productName}</p>
//                       <p className="text-sm">{`$${item.price * item.quantity}`}</p>
//                       <p className="text-sm">{item.quantity}</p>
//                     </div>
//                   </div>
//                 ))}
//                 <hr className="my-4" />
//                 <p className="text-sm sm:text-base">
//                   Subtotal: <span className="font-bold">₹ {totalPrice.toFixed(2)}</span>
//                 </p>
//                 <p className="text-sm sm:text-base">
//                   Delivery/Shipping: <span className="font-bold">Free</span>
//                 </p>
//                 <p className="text-sm sm:text-base">
//                   Total: <span className="font-bold">₹ {totalPrice.toFixed(2)}</span>
//                 </p>
//               </div>
//             ) : (
//               <p>No items available for checkout.</p>
//             )}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default CheckoutPage;



"use client";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";

function CheckoutPage() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    locality: "",
    state: "",
    email: "",
    phoneNumber: "",
    pan: "",
  });

  useEffect(() => {
    const storedItems = localStorage.getItem("checkoutCart");
    if (storedItems) {
      setCheckoutItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    const total = checkoutItems.reduce(
      (sum: any, item: any) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [checkoutItems]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
 
    const orderDetails = {
      ...formDetails,
      items: checkoutItems,
      totalPrice: totalPrice,
    };

     
    const existingOrders = JSON.parse(localStorage.getItem("shippedOrder") || "[]");
    existingOrders.push(orderDetails);
    localStorage.setItem("shippedOrder", JSON.stringify(existingOrders));

    localStorage.removeItem("checkoutCart");   

    alert("Order placed successfully! Details have been saved for tracking.");
  };

  return (
    <div className="bg-gray-100 min-h-screen font-poppins">
      <Header />
      <Navbar />

      <main className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4">How would you like to get your order?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Customs regulation for India requires a copy of the recipient&apos;s KYC...{" "}
              <a href="#" className="text-blue-500 underline">Learn More</a>
            </p>

            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formDetails.firstName}
                  onChange={handleFormChange}
                  className="input w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formDetails.lastName}
                  onChange={handleFormChange}
                  className="input w-full"
                />
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="addressLine1"
                  placeholder="Address Line 1"
                  value={formDetails.addressLine1}
                  onChange={handleFormChange}
                  className="input w-full"
                />
                <input
                  type="text"
                  name="addressLine2"
                  placeholder="Address Line 2"
                  value={formDetails.addressLine2}
                  onChange={handleFormChange}
                  className="input w-full"
                />
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formDetails.postalCode}
                  onChange={handleFormChange}
                  className="input w-full"
                />
                <input
                  type="text"
                  name="locality"
                  placeholder="Locality"
                  value={formDetails.locality}
                  onChange={handleFormChange}
                  className="input w-full"
                />
              </div>
              <div className="mb-4">
                <select
                  name="state"
                  value={formDetails.state}
                  onChange={handleFormChange}
                  className="input w-full"
                >
                  <option value="">State/Territory</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Saudia Arabia">Saudia Arabia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="USA">USA</option>
                </select>
              </div>

              <h3 className="text-lg font-semibold mb-4">What&apos;s your contact information?</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formDetails.email}
                  onChange={handleFormChange}
                  className="input w-full"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formDetails.phoneNumber}
                  onChange={handleFormChange}
                  className="input w-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-4">What&apos;s your PAN?</h3>
              <input
                type="text"
                name="pan"
                placeholder="PAN"
                value={formDetails.pan}
                onChange={handleFormChange}
                className="input w-full mb-4"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
            {checkoutItems.length > 0 ? (
              <div>
                {checkoutItems.map((item: any, index) => (
                  <div key={index} className="flex items-center gap-4 mb-4">
                    <Image
                      src={urlFor(item.image).url()}
                      alt="Product Image"
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm">{item.productName}</p>
                      <p className="text-sm">{`$${item.price * item.quantity}`}</p>
                      <p className="text-sm">{item.quantity}</p>
                    </div>
                  </div>
                ))}
                <hr className="my-4" />
                <p className="text-sm sm:text-base">
                  Subtotal: <span className="font-bold">₹ {totalPrice.toFixed(2)}</span>
                </p>
                <p className="text-sm sm:text-base">
                  Delivery/Shipping: <span className="font-bold">Free</span>
                </p>
                <p className="text-sm sm:text-base">
                  Total: <span className="font-bold">₹ {totalPrice.toFixed(2)}</span>
                </p>
              </div>
            ) : (
              <p>No items available for checkout.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
