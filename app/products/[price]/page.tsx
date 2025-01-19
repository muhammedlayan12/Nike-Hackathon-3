

    "use client";

    import { client } from "../../../sanity/lib/client";
    import { useState, useEffect } from "react";
    import { urlFor } from "../../../sanity/lib/image";
    import Image from "next/image";
    import Link from "next/link";
    import Header from "../../components/Header";
    import Navbar from "../../components/Navbar";
    import Footer from "../../components/Footer";
    import { useParams } from 'next/navigation';   

    interface Product {
      productName: string;
      category: string;
      price: number;
      inventory: number;
      colors: string[];
      status: string;
      image: string;
      description: string;
    }

    function Data() {
      const [isProducts, setIsProducts] = useState<Product[]>([]);

    
      const params = useParams(); 
      const price = params.price;
      useEffect(() => {
      

        async function getData() {
          const query = `*[_type=="product"]{
            productName, category, price, inventory, colors, status, image, description
          }`;

          const response = await client.fetch(query);
          const filtered = response.filter((item: any) => item.price === Number(price));  
          console.log(filtered);
          setIsProducts(filtered);
        }

        getData();
      }, [price]);
      
      

      return (
        <div>
          <Header />
          <Navbar />
          {isProducts.length === 0 ? (
      <div className="flex justify-center items-center h-screen">
        
        <div role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-300 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
      </div>
    ) : (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={urlFor(isProducts[0]?.image).url()}
              width={600}
              height={600}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{isProducts[0]?.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{isProducts[0]?.productName}</h1>
              <div className="flex mb-4">
                <span className={`${isProducts[0]?.inventory > 20 ? "text-green-600" : "text-red-600"} flex gap-2 items-center ml-3`}>
                  {isProducts[0]?.inventory}
                  <span className="flex items-center text-black">+ Inventory</span>
                </span>
              </div>
              <p className={isProducts[0]?.status === "Just In" ? "text-green-600" : "text-red-500"}>{isProducts[0]?.status}</p>
              <p className="leading-relaxed">{isProducts[0]?.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color : {isProducts[0]?.colors.join(", ")}</span>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">${isProducts[0]?.price}</span>
                <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none  rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1  justify-center gap-5">
                  
        
                  
        
              
                          
                      </div>
      </section>
    )}

          <Footer />
        </div>
      );
    }

    export default Data;


