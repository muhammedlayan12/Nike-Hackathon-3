import Image from "next/image";
import img1 from "../../public/images/Image (18).png";
import img2 from "../../public/images/Image (19).png";
import img3 from "../../public/images/Image (20).png";

function Essential() {
  return (
    <div>
      <section className="flex flex-col my-20 py-10 gap-5 lg:px-16 md:px-12 sm:px-8 px-4">
        <h1 className="font-poppins text-[1.2em]">Essential</h1>
        <div className="flex justify-center gap-5 flex-wrap">
          
         
         
          <div className="relative">
            <Image src={img2} alt="Essential image 1" />
            <button className="py-2 px-8 text-black bg-white rounded-full font-poppins text-[0.75em] bottom-8 left-6 absolute">
              {"Woman's"}
            </button>
          </div>
          
   
   
          <div className="relative">
            <Image src={img3} alt="Essential image 2" />
            <button className="py-2 px-8 text-black bg-white rounded-full font-poppins text-[0.75em] bottom-8 left-6 absolute">
              {"Men's"}
            </button>
          </div>
          
          <div className="relative">
            <Image src={img1} alt="Essential image 3" />
            <button className="py-2 px-8 text-black bg-white rounded-full font-poppins text-[0.75em] bottom-8 left-6 absolute">
              {"Kid's"}
            </button>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Essential;
