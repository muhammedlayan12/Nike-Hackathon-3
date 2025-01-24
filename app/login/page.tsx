// import Link from "next/link";
// import Image from "next/image";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import logo from "../../public/images/logo.png";

// function page() {
//   return (
//     <div>
//       <Header></Header>
//       <Navbar></Navbar>
//       <section className="py-10 m-auto xl:w-[25%] my-10 gap-5 lg:w-[35%] md:w-[50%] sm:w-[65%] w-[100%] px-4 flex flex-col h-[100%] justify-center items-center text-center">
//         <Image src={logo} alt="logo" />
//         <h1 className="font-poppins sm:text-[1.3em] text-[1em] font-normal">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
//         <p className="text-[0.9em] font-poppins text-[#555]">
//           Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
//         </p>
//         <form action="" className="flex flex-col gap-2">
//           <input
//             type="text"
//             className="py-2 pl-[0.5vmin] rounded-md text-[0.85em] font-poppins outline-none border border-[#939393]"
//             placeholder="Email Address"
//           />
//           <input
//             type="text"
//             className="py-2 pl-[0.5vmin] rounded-md text-[0.85em] font-poppins outline-none border border-[#939393]"
//             placeholder="Password"
//           />
//           <div className="flex gap-5 justify-start items-center">
//             <div className="text-[#555] flex gap-2 items-center font-poppins text-[0.8em]">
//               <input type="checkbox" />Keep Me Signed In
//             </div>
//           </div>
//           <p className="text-[0.85em] text-[#555] font-poppins">
//             By logging in, you agree to Nike&apos;s <span>Privacy Policy</span> and <span>Terms of Use</span>.
//           </p>
//           <input className="text-[white] bg-black border border-black font-poppins py-2 uppercase rounded-md" type="submit" value="Sign In" />
//           <div className="flex text-[0.8em] items-center justify-center gap-2 text-center font-poppins text-[#555]">
//             Not a member <Link href="/signup" className="text-[1em] text-black underline">Join Us</Link>
//           </div>
//         </form>
//       </section>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default page;




import { SignIn } from '@clerk/nextjs';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SignupPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=' my-28 justify-center items-center flex'>
      <SignIn />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignupPage;
