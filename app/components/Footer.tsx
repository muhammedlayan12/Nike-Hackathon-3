import { Copyright, Facebook, Github, Instagram, Linkedin, MapPin } from "lucide-react";

function Footer() {
  return (
    <div>
        <footer className="bg-[#111] flex flex-col gap-10 py-10 mt-20 font-poppins  lg:px-16 md:px-12 sm:px-8 px-4">
            <div className="flex flex-wrap justify-between items-start">
                <div className="flex flex-wrap justify-center gap-16">
                <div className="flex flex-col gap-5">
                        <h3 className="text-[1.3em] font-[501] text-white">Find A Store</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="text-[0.8em] text-white">Become A Member</li>
                            <li className="text-[0.8em] text-white">Sign Up For Email</li>
                            <li className="text-[0.8em] text-white">Send Us Feedback</li>
                            <li className="text-[0.8em] text-white">Student Discount</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[1.3em] font-[501] text-white">Get Help</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="text-[0.8em] text-[#737373]">Order Status</li>
                            <li className="text-[0.8em] text-[#737373]">Delivery</li>
                            <li className="text-[0.8em] text-[#737373]">Returns</li>
                            <li className="text-[0.8em] text-[#737373]">Payment Options</li>
                            <li className="text-[0.8em] text-[#737373]">Contact Us On Nike.com Inquiries</li>
                            <li className="text-[0.8em] text-[#737373]">Contact Us On All Other Inquiries</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[1.3em] font-[501] text-white">About Nike</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="text-[0.8em] text-[#737373]">News</li>
                            <li className="text-[0.8em] text-[#737373]">Careers</li>
                            <li className="text-[0.8em] text-[#737373]">Investor</li>
                            <li className="text-[0.8em] text-[#737373]">Sustainability</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-5 flex-wrap justify-center">
                    <Facebook className="py-2 px-2 bg-white rounded-full bg-opacity-20" size={35}/>
                    <Instagram className="py-2 px-2 bg-white rounded-full bg-opacity-20" size={35}/>
                    <Github className="py-2 px-2 bg-white rounded-full bg-opacity-20" size={35}/>
                    <Linkedin className="py-2 px-2 bg-white rounded-full bg-opacity-20" size={35}/>
                </div>
            </div>
            <div className="flex justify-between flex-wrap items-center">
                <p className="text-[#838383] text-sm flex gap-7 items-center"><span className="flex gap-4 text-white"><MapPin/> Pakistan</span><span className="flex items-center gap-2"><Copyright size={15}/> Nike, Inc. 2022. All rights reserved.</span></p>
                <ul className="flex gap-5 flex-wrap">
                    <li className="text-[0.8em] text-[#737373]">Guides</li>
                    <li className="text-[0.8em] text-[#737373]">Terms & Sales</li>
                    <li className="text-[0.8em] text-[#737373]">Terms & Use</li>
                    <li className="text-[0.8em] text-[#737373]">Nike Privacy Policy</li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer;