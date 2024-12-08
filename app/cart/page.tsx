import Link from "next/link";
import img1 from "../../public/images/p1.png";
import img2 from "../../public/images/p4.png";
import img3 from "../../public/images/p3.png";
import { Heart, Trash } from "lucide-react"; 
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page() {
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
 
        <div className="flex lg:flex-row flex-col justify-between items-start">
          <div>
            <h2 className="text-[1em] font-semibold">Cart</h2>
            <ul className="flex flex-col gap-5 border border-black px-6 py-4">
 
              <li className="flex sm:flex-row flex-col gap-5 items-center">
                <Image src={img1} width={250} alt="cart product 1" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[1em] font-bold">Nike Dri-FIT ADV TechKnit Ultra</p>
                    <p className="text-[0.85em] text-[#555]">Men&apos;s Short-Sleeve Running Top</p>
                    <p className="text-[0.85em] text-[#555]">Ashen Slate/Cobalt Bliss</p>
                    <p className="text-[0.85em] text-[#555]">Size L Quantity 1</p>
                    <div className="flex gap-4">
                      <Heart />
                      <Trash />
                    </div>
                  </div>
                </div>
              </li>
       
              <li className="flex sm:flex-row flex-col gap-5 items-center">
                <Image src={img2} width={250} alt="cart product 2" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[1em] font-bold">Nike Dri-FIT ADV TechKnit Ultra</p>
                    <p className="text-[0.85em] text-[#555]">Men&apos;s Short-Sleeve Running Top</p>
                    <p className="text-[0.85em] text-[#555]">Ashen Slate/Cobalt Bliss</p>
                    <p className="text-[0.85em] text-[#555]">Size L Quantity 1</p>
                    <div className="flex gap-4">
                      <Heart />
                      <Trash />
                    </div>
                  </div>
                </div>
              </li>
             
              <li className="flex sm:flex-row flex-col gap-5 items-center">
                <Image src={img3} width={250} alt="cart product 3" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[1em] font-bold">Nike Dri-FIT ADV TechKnit Ultra</p>
                    <p className="text-[0.85em] text-[#555]">Men&apos;s Short-Sleeve Running Top</p>
                    <p className="text-[0.85em] text-[#555]">Ashen Slate/Cobalt Bliss</p>
                    <p className="text-[0.85em] text-[#555]">Size L Quantity 1</p>
                    <div className="flex gap-4">
                      <Heart />
                      <Trash />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        
          <div className="py-10 m-auto justify-center mx-4 text-center xl:w-[40%] lg:w-[45%] md:w-[70%] sm:w-[75%] w-[100%] flex flex-col gap-5">
            <h1 className="text-[1em] font-semibold">Summary</h1>
            <div className="flex flex-col gap-14 sm:px-3 px-2">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                  <p className="sm:text-[1em] text-[0.85em]">Subtotal</p>
                  <span>₹ 20 890.00</span>
                </div>
                <div className="flex justify-between">
                  <p className="sm:text-[1em] text-[0.85em]">Estimated Delivery &amp; Handling</p>
                  <span>Free</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="sm:text-[1em] text-[0.85em]">Total</p>
                <span>₹ 20 890.00</span>
              </div>
              <Link href="/checkout" className="text-white bg-[#222] rounded-full py-2">
                Member Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Page;
