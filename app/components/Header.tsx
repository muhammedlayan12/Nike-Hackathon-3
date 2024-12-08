import Image from "next/image";
import img1 from "../../public/images/header.png";

function Header() {
    return (
      <div>  
        <section className="md:flex hidden justify-between py-2 items-center px-12 font-helvita">
            <Image src={img1} alt="Header Logo" />
            <p className="font-poppins text-[0.8em]">Skip To Main Content</p>
            <div className="flex gap-2">
                <p className="font-poppins text-[0.8em]">Find A Store</p>
                <span className="font-poppins text-[0.8em]">|</span>
                <p className="font-poppins text-[0.8em]">Help</p>
                <span className="font-poppins text-[0.8em]">|</span>
                <p className="font-poppins text-[0.8em]">Join Us</p>
                <span className="font-poppins text-[0.8em]">|</span>
                <p className="font-poppins text-[0.8em]">Sign In</p>
                
            </div>
        </section>
        </div>
    )
  }
  
  export default Header;