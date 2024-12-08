import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../../public/images/logo.png";

function page() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <section className="py-10 m-auto xl:w-[25%] my-10 gap-5 lg:w-[35%] md:w-[50%] sm:w-[65%] w-[100%] px-4 flex flex-col h-[100%] justify-center items-center text-center">
        <Image src={logo} alt="logo" />
        <h1 className="font-poppins sm:text-[1.3em] text-[1em] font-normal">BECOME A NIKE MEMBER</h1>
        <p className="text-[0.9em] font-poppins text-[#555]">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
        </p>
        <form action="" className="flex flex-col gap-2">
          <input
            type="text"
            className="py-2 pl-[0.5vmin] rounded-md text-[0.85em] font-poppins outline-none border border-[#939393]"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="py-2 pl-[0.5vmin] rounded-md text-[0.85em] font-poppins outline-none border border-[#939393]"
            placeholder="Password"
          />
          <input
            type="text"
            className="py-2 pl-[0.5vmin] rounded-md text-[0.85em] font-poppins outline-none border border-[#939393]"
            placeholder="First Name"
          />
          <input
            type="text"
            className="py-2 pl-[0.5vmin] rounded-md text-[0.85em] font-poppins outline-none border border-[#939393]"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="py-2 pl-[0.5vmin] rounded-md text-[0.85em] font-poppins outline-none border border-[#939393]"
            placeholder="D-O-B"
          />
          <input
            type="text"
            className="py-2 pl-[0.5vmin] rounded-md text-[0.85em] font-poppins outline-none border border-[#939393]"
            placeholder="Country"
          />
          <div className="flex gap-5 justify-center items-center">
            <div className="text-[#555] flex gap-2 items-center font-poppins text-[0.8em]">
              <input type="checkbox" />Male
            </div>
            <div className="text-[#555] flex gap-2 items-center font-poppins text-[0.8em]">
              <input type="checkbox" />Female
            </div>
          </div>
          <div className="flex gap-2 text-[0.8em] text-[#555] items-start font-poppins">
            <input type="checkbox" />{" "}
            <p>Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
          </div>
          <p className="text-[0.85em] text-[#555] font-poppins">
            By creating an account, you agree to Nike&apos;s{" "}
            <span className="text-[1em] text-black underline">Privacy Policy</span> and{" "}
            <span className="text-[1em] text-black underline">Terms of Use</span>.
          </p>
          <input
            className="text-[white] bg-black border border-black font-poppins py-2 rounded-md"
            type="submit"
            value="Join Us"
          />
        </form>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default page;
