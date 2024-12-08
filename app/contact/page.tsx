// import { ThumbsUp, ThumbsDown, Phone } from "lucide-react";
// import Link from "next/link";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Page() {
//   return (
//     <div>
//       <Header />
//       <Navbar />

//       <section className="flex flex-col gap-5 lg:px-14 text-center my-20 md:px-10 sm:px-6 font-poppins px-4">
//         <h1 className="sm:text-[2em] text-[1.2em] font-[501]">GET HELP</h1>

//         <div className="flex justify-center">
//           <input
//             type="text"
//             placeholder="What can we help you with?"
//             className="py-2 pr-16 outline-none border border-[#555] pl-[0.5vmin] text-[0.8em]"
//           />
//         </div>

//         <div className="flex md:flex-row flex-col justify-between text-start">
//           <div className="flex flex-col gap-10 py-10">
//             <h2 className="sm:text-3xl text-2xl font-[500]">
//               WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
//             </h2>
//             <ul className="text-[0.8em] flex flex-col gap-3">
//               <li>
//                 We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
//                 <ol className="ml-6 my-2 flex flex-col gap-3">
//                   <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
//                   <li>
//                     If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
//                   </li>
//                   <li>Apple Pay</li>
//                 </ol>
//               </li>
//               <li>
//                 <span className="text-[1em] text-black underline">Nike</span> Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,{" "}
//                 <span className="text-[1em] text-black underline">join us</span> today.
//               </li>
//             </ul>

//             <div className="flex flex-col sm:flex-row gap-2 sm:m-0 m-auto">
//               <Link className="py-1 px-8 bg-[#111] rounded-full text-white" href="/signup">
//                 Join Us
//               </Link>
//               <Link className="py-1 px-8 bg-[#111] rounded-full text-white" href="/shop">
//                 Shop Nike
//               </Link>
//             </div>

//             <h2 className="sm:text-3xl text-2xl font-[500]">FAQs</h2>
//             <div className="flex flex-col gap-2">
//               <p className="text-[1.1em] font-semibold">Does my card need international purchases enabled?</p>
//               <p>
//                 Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
//               </p>
//               <p className="text-[0.9em]">Please note, some banks may charge a <span>small transaction fee</span> for international orders.</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <p className="text-[1.1em] font-semibold">Can I pay for my order with multiple methods?</p>
//               <p className="text-[0.9em]">No, payment for Nike orders can't be split between multiple payment methods.</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <p className="text-[1.1em] font-semibold">What payment method is accepted for SNKRS orders?</p>
//               <p className="text-[0.9em]">You can use any accepted credit card to pay for your SNKRS order.</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <p className="text-[1.1em] font-semibold">Why don't I see Apple Pay as an option?</p>
//               <p className="text-[0.9em]">
//                 To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
//               </p>
//             </div>

//             <div className="flex flex-col gap-2">
//               <p className="text-[1em]">Was this answer helpful?</p>
//               <div className="flex gap-2">
//                 <ThumbsUp />
//                 <ThumbsDown />
//               </div>
//               <span className="uppercase text-[#666]">Related</span>
//             </div>

//             <ul className="flex flex-col gap-2">
//               <li className="text-[1em]">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</li>
//               <li className="text-[1em]">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex flex-col gap-12">
//           <div className="flex flex-col gap-3 text-center justify-center items-center">
//             <Phone size={40} />
//             <div className="flex flex-col gap-2">
//               <p className="font-semibold text-[1.1em]">000 800 919 0566</p>
//               <p className="text-[0.9em] text-[#555]">
//                 Products & Orders: 24 hours a day, 7 days a week
//                 <br />
//                 Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default Page;






import { ThumbsUp, ThumbsDown, Phone } from "lucide-react";
import Link from "next/link";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page() {
  return (
    <div>
      <Header />
      <Navbar />

      <section className="flex flex-col gap-5 lg:px-14 text-center my-20 md:px-10 sm:px-6 font-poppins px-4">
        <h1 className="sm:text-[2em] text-[1.2em] font-[501]">GET HELP</h1>

        <div className="flex justify-center">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="py-2 pr-16 outline-none border border-[#555] pl-[0.5vmin] text-[0.8em]"
          />
        </div>

        <div className="flex md:flex-row flex-col justify-between text-start">
          <div className="flex flex-col gap-10 py-10">
            <h2 className="sm:text-3xl text-2xl font-[500]">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <ul className="text-[0.8em] flex flex-col gap-3">
              <li>
                We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
                <ol className="ml-6 my-2 flex flex-col gap-3">
                  <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                  <li>
                    If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
                  </li>
                  <li>Apple Pay</li>
                </ol>
              </li>
              <li>
                <span className="text-[1em] text-black underline">Nike</span> Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member,{" "}
                <span className="text-[1em] text-black underline">join us</span> today.
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-2 sm:m-0 m-auto">
              <Link className="py-1 px-8 bg-[#111] rounded-full text-white" href="/signup">
                Join Us
              </Link>
              <Link className="py-1 px-8 bg-[#111] rounded-full text-white" href="/shop">
                Shop Nike
              </Link>
            </div>

            <h2 className="sm:text-3xl text-2xl font-[500]">FAQs</h2>
            <div className="flex flex-col gap-2">
              <p className="text-[1.1em] font-semibold">Does my card need international purchases enabled?</p>
              <p>
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
              </p>
              <p className="text-[0.9em]">Please note, some banks may charge a <span>small transaction fee</span> for international orders.</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[1.1em] font-semibold">Can I pay for my order with multiple methods?</p>
              <p className="text-[0.9em]">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[1.1em] font-semibold">What payment method is accepted for SNKRS orders?</p>
              <p className="text-[0.9em]">You can use any accepted credit card to pay for your SNKRS order.</p>
            <div className="flex flex-col gap-2">
              <p className="text-[1.1em] font-semibold">Why don&apos;t I see Apple Pay as an option?</p>
              <p className="text-[0.9em]">
                To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[1em]">Was this answer helpful?</p>
              <div className="flex gap-2">
                <ThumbsUp />
                <ThumbsDown />
              </div>
              <span className="uppercase text-[#666]">Related</span>
            </div>

            <ul className="flex flex-col gap-2">
              <li className="text-[1em]">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</li>
              <li className="text-[1em]">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3 text-center justify-center items-center">
            <Phone size={40} />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[1.1em]">000 800 919 0566</p>
              <p className="text-[0.9em] text-[#555]">
                Products & Orders: 24 hours a day, 7 days a week
                <br />
                Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;