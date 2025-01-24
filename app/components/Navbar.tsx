"use client"






import { useState } from "react";
import {Search,Heart,ShoppingBag,X} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs';


function Navbar() {

    const [isMenuOpen , setIsMenuOpen] = useState(false);

    const togglerNav = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <div>
        <nav className="flex sm:justify-around font-poppins justify-between items-center py-2 px-4">
            <div className="lg:hidden block text-[1.4em] font-[400]" onClick={togglerNav}>☰</div>
            <Image src={logo} alt="Logo Nike"/>
            <ul className="lg:flex hidden gap-7">
            <li>
                    <Link  className="text-[1em] font-poppins" href="/">Home</Link>
                </li>
                <li>
                    <Link  className="text-[1em] font-poppins" href="/shop">Shop</Link>
                </li>
                <li>
                    <Link className="text-[1em] font-poppins" href="/signup">Signup</Link>
                </li>
                <li>
                    <Link className="text-[1em] font-poppins"  href="/login">Login</Link>
                </li>
                <li>    
                    <Link  className="text-[1em] font-poppins" href="/cart">Cart</Link>
                </li>
                <li>
                    <Link  className="text-[1em] font-poppins" href="/contact">Contact</Link>
                </li>
            </ul>

            <div className="flex sm:gap-8 gap-4">
                <Search className=""/>
                <Heart className="sm:block hidden"/>
                <ShoppingBag className=" "/>
                <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn >
            <UserButton />
          </SignedIn>
          
            </div>
        </nav>
        <div className={`${isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"} fixed sm:w-[250px] w-[90%] transition-all duration-500 bg-white z-[9999]  h-full top-0 bottom-0 left-0`}>
            <div className="absolute top-4 right-4" onClick={togglerNav}><X/></div>
            <ul className="flex flex-col gap-7 absolute top-[24%] left-[12%]">
                <li>
                    <Link  className="text-[1em] font-poppins" href="/">Home</Link>
                </li>
                <li>
                    <Link  className="text-[1em] font-poppins" href="/shop">Shop</Link>
                </li>
                <li>
                    <Link className="text-[1em] font-poppins" href="/signup">Signup</Link>
                </li>
                <li>
                    <Link className="text-[1em] font-poppins"  href="/login">Login</Link>
                </li>
                <li>
                    <Link  className="text-[1em] font-poppins" href="/cart">Cart</Link>
                </li>
                <li>
                    <Link  className="text-[1em] font-poppins" href="/contact">Contact</Link>
                </li>
            </ul>
            <Link href="/" className="flex sm:hidden top-[65%] mx-2 absolute gap-5 bg-black border border-black w-[85%] text-white justify-center items-center py-2 px-4 rounded-full duration-500 transition-all hover:text-black hover:bg-transparent">
            <Heart/>
            Wishlist</Link>
        </div>
        <div className={`${isMenuOpen ? "block" : "hidden"} transition-all duration-500 fixed top-0 left-0 bottom-0 right-0 h-full w-full bg-black z-[999] bg-opacity-50`}>

        </div>
    </div>
  )
}

export default Navbar;