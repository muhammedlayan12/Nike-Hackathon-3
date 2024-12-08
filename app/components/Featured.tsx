import Image from "next/image";
import img1 from "../../public/images/fe.png";



function Featured() {
  return (
    <div>
        <section className="flex flex-col my-20 text-center py-10 gap-5 lg:px-16 md:px-12 sm:px-8 px-4">
            <h2 className="text-start font-poppins text-[1.2em]">Featured</h2>
            <Image src={img1} alt="Featured Image"/>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold  lg:text-5xl sm:text-3xl text-2xl uppercase font-poppins">STEP INTO WHAT FEELS GOOD</h1>
                <p className="text-[#333] font-poppins sm:text-[0.9em] text-[0.8em]  ">Cause everyone should know the feeling of running in that perfect pair.</p>
                <div>
                    <button className="bg-[#111] text-white rounded-full py-[0.65vmin] px-8 font-poppins">Find Your Shoe</button>
                </div>
                </div> 
        </section>
    </div>
  )
}

export default Featured;