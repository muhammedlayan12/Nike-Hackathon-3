import { ChevronRight } from "lucide-react";
import Image from "next/image";
import img1 from "../../public/images/Image (13).png";
import img2 from "../../public/images/Image (14).png";
import img3 from "../../public/images/Image (15).png";
import img4 from "../../public/images/Image (16).png";

function Gear() {
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
   
   
          <div className="flex flex-col gap-2">
            <Image src={img1} alt="product 1 nike shoes" />
            <div className="flex justify-between">
              <div className="name">
                <h3 className="font-poppins text-[1.1em]">Nike Air Max Pulse</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">
                  Women&apos;s Shoes for Winter
                </span>
                <p className="text-[#737373] font-poppins text-[0.8em]">Available in sizes 6-10</p>
              </div>
              <p className="text-[1em] font-poppins">$134.00</p>
            </div>
          </div>


          <div className="flex flex-col gap-2">
            <Image src={img2} alt="product 2 nike shoes" />
            <div className="flex justify-between">
              <div className="name">
                <h3 className="font-poppins text-[1.1em]">Nike Air See 18</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">
                  Men&apos;s Shoes for Winter
                </span>
                <p className="text-[#737373] font-poppins text-[0.8em]">Durable leather finish</p>
              </div>
              <p className="text-[1em] font-poppins">$432.00</p>
            </div>
          </div>

          
          
          <div className="flex flex-col gap-2">
            <Image src={img3} alt="product 3 kids shoes" />
            <div className="flex justify-between">
              <div className="name">
                <h3 className="font-poppins text-[1.1em]">Nike Air Max Pulse</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">
                  Kids&apos; Shoes for Winter
                </span>
                <p className="text-[#737373] font-poppins text-[0.8em]">Lightweight and cozy</p>
              </div>
              <p className="text-[1em] font-poppins">$197.00</p>
            </div>
          </div>

   
   
          <div className="flex flex-col gap-2">
            <Image src={img4} alt="product 4 nike shoes" />
            <div className="flex justify-between">
              <div className="name">
                <h3 className="font-poppins text-[1.1em]">Nike Air Zoom Pulse</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">
                  Women&apos;s Shoes for Running
                </span>
                <p className="text-[#737373] font-poppins text-[0.8em]">Enhanced grip and flexibility</p>
              </div>
              <p className="text-[1em] font-poppins">$197.00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gear;
