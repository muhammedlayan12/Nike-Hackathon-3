import { ChevronRight } from "lucide-react";
import Image from "next/image";
import img1 from "../../public/images/pr1.png";
import img2 from "../../public/images/pr2.png";

function BestYear() {
  return (
    <div>
      <section className="flex flex-col my-20 py-10 lg:px-16 md:px-12 sm:px-8 px-4">
        <div className="flex justify-between">
          <h1 className="font-poppins text-[1.2em]">Best Of Air Max</h1>
          <p className="font-poppins text-[1.2em] flex gap-5 items-center">Shop <ChevronRight size={20} /></p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          
          <div className="flex flex-col gap-2">
            <Image src={img1} alt="product 1 nike shoes" />
            <div className="flex justify-between">
              <div className="name">
                <h3 className="font-poppins text-[1.1em]">Nike Air Max Pulse</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">Woman Shoe&apos;s</span>
              </div>
              <p className="text-[1em] font-poppins">$134.00</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Image src={img2} alt="product 1 nike shoes" />
            <div className="flex justify-between">
              <div className="name">
                <h3 className="font-poppins text-[1.1em]">Nike Air See 18</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">Man Shoe&apos;s</span>
              </div>
              <p className="text-[1em] font-poppins">$432.00</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Image src={img1} alt="product 1 nike shoes" />
            <div className="flex justify-between">
              <div className="name">
                <h3 className="font-poppins text-[1.1em]">Nike Air Max Pulse</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">Woman Shoe&apos;s</span>
              </div>
              <p className="text-[1em] font-poppins">$197.00</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default BestYear;
