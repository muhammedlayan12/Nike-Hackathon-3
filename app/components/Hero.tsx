import Image from "next/image";
import img1 from "../../public/images/hero.png";

function Hero() {
  return (
    <div>
        <section className="flex flex-col gap-6 m-auto text-center py-10 px-5">
            <div className="flex flex-col gap-2">
                <h3 className="text-[1.2em] font-[500] font-poppins">Hello Nike App</h3>
                <p className="text-[0.9em]  font-poppins text-[#555]">Download the app to access everything Nike. <span className="text-[1em] font-poppins text-black underline"> Get Your Great</span></p>
            </div>
            <Image src={img1} alt="Hero Image" className="m-auto"/>
            <div className="flex flex-col gap-2">
                <span className="text-[1.2em] font-[500] font-poppins">First Look</span>
                <h1 className="font-bold  lg:text-5xl sm:text-3xl text-2xl uppercase font-poppins">Nike Air Max Pulse</h1>
                <p className="font-poppins sm:text-[0.9em] text-[0.8em] justify-center m-auto text-[#333] xl:w-[45%] lg:w-[65%] md:w-[75%] sm:w-[85%] w-[93%]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max.</p>
                <div className="flex sm:flex-row flex-col gap-5 justify-center">
                    <button className="bg-[#111] text-white rounded-full py-[0.65vmin] px-8 font-poppins">Notify Me</button>
                    <button className="bg-[#111] text-white rounded-full py-[0.65vmin] px-8 font-poppins">Shop Air Max</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero; 
