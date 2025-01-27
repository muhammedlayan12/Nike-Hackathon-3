// "use client";

// import { useState, useEffect } from "react";

// function TrackingPage() {
//   const [shippedOrders, setShippedOrders] = useState([]);

//   useEffect(() => {
//     const ordersString = localStorage.getItem("shippedOrders");
//     const orders = ordersString ? JSON.parse(ordersString) : [];
//     setShippedOrders(orders);
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen font-poppins">
//       <h1 className="text-2xl font-bold text-center py-6">Shipped Orders</h1>
//       <div className="max-w-7xl mx-auto grid gap-6">
//         {shippedOrders.length > 0 ? (
//           shippedOrders.map((order:any, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-lg font-semibold mb-2">{`${order.firstName} ${order.lastName}`}</h2>
//               <p>{`${order.addressLine1}, ${order.addressLine2}, ${order.locality}, ${order.state} - ${order.postalCode}`}</p>
//               <p className="text-sm text-gray-600">Email: {order.email}</p>
//               <p className="text-sm text-gray-600">Phone: {order.phoneNumber}</p>
//               <p className="text-sm text-gray-600">PAN: {order.pan}</p>
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Order Summary:</h3>
//                 {order.items.map((item:any, i:any) => (
//                   <div key={i} className="flex items-center justify-between text-sm mb-2">
//                     <span>{item.productName}</span>
//                     <span>{`$${item.price * item.quantity}`}</span>
//                   </div>
//                 ))}
//                 <p className="font-bold text-sm mt-2">Total: ₹{order.totalPrice.toFixed(2)}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-600">No orders to track.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TrackingPage;



"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TrackingPage() {
  const [shippedOrders, setShippedOrders] = useState([]);

  useEffect(() => {
    const ordersString = localStorage.getItem("shippedOrder");
    const orders = ordersString ? JSON.parse(ordersString) : [];
    setShippedOrders(orders);
  }, []);

  return (
    
    <div>
        <Navbar></Navbar>
        <div className="bg-gray-100 min-h-screen font-poppins">
      <h1 className="text-2xl font-bold text-center py-6">Shipped Orders</h1>
      <div className="max-w-7xl mx-auto grid gap-6">
        {shippedOrders.length > 0 ? (
          shippedOrders.map((order:any, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-2">{`${order.firstName} ${order.lastName}`}</h2>
              <p>{`${order.addressLine1}, ${order.addressLine2}, ${order.locality}, ${order.state} - ${order.postalCode}`}</p>
              <p className="text-sm text-gray-600">Email: {order.email}</p>
              <p className="text-sm text-gray-600">Phone: {order.phoneNumber}</p>
              <p className="text-sm text-gray-600">PAN: {order.pan}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Order Summary:</h3>
                {order.items.map((item:any, i:any) => (
                  <div key={i} className="flex items-center justify-between text-sm mb-2">
                    <span>{item.productName}</span>
                    <span>{`$${item.price * item.quantity}`}</span>
                  </div>
                ))}
                <p className="font-bold text-sm mt-2">Total: ₹{order.totalPrice.toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No orders to track.</p>
        )}
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default TrackingPage;
