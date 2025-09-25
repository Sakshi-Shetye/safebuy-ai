// import React from "react";
// import Footer from "../components/Footer";
// import { FaCog, FaSearch } from "react-icons/fa";

// export default function Asking() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 font-display text-neutral-800">
//       {/* Top Header */}
//       <header className="flex items-center justify-between p-4 bg-transparent">
//         <div className="w-12"></div>
//         <div className="text-center">
//           <h1 className="text-lg font-bold text-gray-800">SafeBuy AI</h1>
//         </div>
//         <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
//           <FaCog className="text-2xl text-gray-700" />
//         </button>
//       </header>

//       {/* Main Content Area */}
//       <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-10">
//         <div className="w-full max-w-sm flex flex-col items-start text-left">
//           {/* Main Title */}
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">
//             What product do you want to check today?
//           </h1>

//           {/* Search Bar */}
//           <div className="relative w-full mb-6">
//             <input
//               type="text"
//               placeholder="Or search by product name..."
//               className="w-full h-12 pl-12 pr-4 rounded-full bg-white placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//           </div>

//           {/* Category Cards */}
//           <div className="w-full space-y-4">
//             {/* Card 1: Check your food */}
//             <div className="w-full p-4 rounded-xl shadow-md bg-green-100">
//               <h3 className="text-lg font-bold text-gray-800">
//                 Check your food
//               </h3>
//               <p className="text-sm font-medium text-green-600">
//                 Wafers, chocolate, snacks
//               </p>
//             </div>

//             {/* Card 2: Check your drinks */}
//             <div className="w-full p-4 rounded-xl shadow-md bg-green-100">
//               <h3 className="text-lg font-bold text-gray-800">
//                 Check your drinks
//               </h3>
//               <p className="text-sm font-medium text-green-600">
//                 Soft drinks, juices, supplements
//               </p>
//             </div>

//             {/* Card 3: Check your skincare */}
//             <div className="w-full p-4 rounded-xl shadow-md bg-green-100">
//               <h3 className="text-lg font-bold text-gray-800">
//                 Check your skincare
//               </h3>
//               <p className="text-sm font-medium text-green-600">
//                 Creams, lotions
//               </p>
//             </div>

//             {/* Card 4: Check your shampoo & haircare */}
//             <div className="w-full p-4 rounded-xl shadow-md bg-green-100">
//               <h3 className="text-lg font-bold text-gray-800">
//                 Check your shampoo & haircare
//               </h3>
//               <p className="text-sm font-medium text-green-600">
//                 Shampoos, conditioners
//               </p>
//             </div>

//             {/* Card 5: Other personal care products */}
//             <div className="w-full p-4 rounded-xl shadow-md bg-green-100">
//               <h3 className="text-lg font-bold text-gray-800">
//                 Other personal care products
//               </h3>
//               <p className="text-sm font-medium text-green-600">
//                 Soaps, body washes
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <Footer />
//     </div>
//   );
// }


// import React from "react";
// import Footer from "../components/Footer";
// import { FaCog, FaSearch } from "react-icons/fa";

// export default function Asking() {
//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       {/* Scattered Emojis with Blur Effect */}
//       <div className="absolute top-10 left-10 w-12 h-12 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse backdrop-filter backdrop-blur-sm">🥑</div>
//       <div className="absolute top-20 right-10 w-10 h-10 rounded-full flex items-center justify-center text-green-700 text-2xl animate-pulse delay-500 backdrop-filter backdrop-blur-sm">🧴</div>
//       <div className="absolute bottom-20 left-16 w-14 h-14 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse delay-1000 backdrop-filter backdrop-blur-sm">🧼</div>
//       <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-yellow-700 text-xl animate-bounce delay-200 backdrop-filter backdrop-blur-sm">🧇</div>
//       <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center text-red-700 text-2xl animate-bounce delay-700 backdrop-filter backdrop-blur-sm">🍫</div>
//       <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 text-2xl animate-bounce delay-400 backdrop-filter backdrop-blur-sm">🥤</div>
//       <div className="absolute bottom-10 right-1/3 transform -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center text-purple-700 text-3xl animate-bounce delay-900 backdrop-filter backdrop-blur-sm">🚿</div>
//       <div className="absolute top-1/3 right-10 transform translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-orange-700 text-xl animate-bounce delay-1200 backdrop-filter backdrop-blur-sm">🥫</div>

//       {/* Main Content Container with Z-Index for layering */}
//       <div className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center">
//         {/* Top Header */}
//         <header className="flex items-center justify-between p-4 bg-transparent w-full max-w-sm">
//           <div className="w-12"></div>
//           <div className="text-center">
//             <h1 className="text-lg font-bold text-gray-800">SafeBuy AI</h1>
//           </div>
//           <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
//             <FaCog className="text-2xl text-gray-700" />
//           </button>
//         </header>

//         {/* Main Content Area */}
//         <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-10 w-full max-w-sm">
//           <div className="w-full flex flex-col items-start text-left">
//             {/* Main Title */}
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">
//               What product do you want to check today?
//             </h1>

//             {/* Search Bar */}
//             <div className="relative w-full mb-6">
//               <input
//                 type="text"
//                 placeholder="Or search by product name..."
//                 className="w-full h-12 pl-12 pr-4 rounded-full bg-white placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//             </div>

//             {/* Category Cards */}
//             <div className="w-full space-y-4">
//               {/* Card 1: Check your food */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   Check your food
//                 </h3>
//                 <p className="text-sm font-medium text-green-600">
//                   Wafers, chocolate, snacks
//                 </p>
//               </div>

//               {/* Card 2: Check your drinks */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   Check your drinks
//                 </h3>
//                 <p className="text-sm font-medium text-green-600">
//                   Soft drinks, juices, supplements
//                 </p>
//               </div>

//               {/* Card 3: Check your skincare */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   Check your skincare
//                 </h3>
//                 <p className="text-sm font-medium text-green-600">
//                   Creams, lotions
//                 </p>
//               </div>

//               {/* Card 4: Check your shampoo & haircare */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   Check your shampoo & haircare
//                 </h3>
//                 <p className="text-sm font-medium text-green-600">
//                   Shampoos, conditioners
//                 </p>
//               </div>

//               {/* Card 5: Other personal care products */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   Other personal care products
//                 </h3>
//                 <p className="text-sm font-medium text-green-600">
//                   Soaps, body washes
//                 </p>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Bottom Navigation */}
//       <Footer />
//     </div>
//   );
// }



// import React from "react";
// import Footer from "../components/Footer";
// import { FaCog, FaSearch } from "react-icons/fa";

// export default function Asking() {
//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       {/* Scattered Emojis with Blur Effect */}
//       <div className="absolute top-10 left-10 w-12 h-12 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse backdrop-filter backdrop-blur-sm">🥑</div>
//       <div className="absolute top-20 right-10 w-10 h-10 rounded-full flex items-center justify-center text-green-700 text-2xl animate-pulse delay-500 backdrop-filter backdrop-blur-sm">🧴</div>
//       <div className="absolute bottom-20 left-16 w-14 h-14 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse delay-1000 backdrop-filter backdrop-blur-sm">🧼</div>
//       <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-yellow-700 text-xl animate-bounce delay-200 backdrop-filter backdrop-blur-sm">🧇</div>
//       <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center text-red-700 text-2xl animate-bounce delay-700 backdrop-filter backdrop-blur-sm">🍫</div>
//       <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 text-2xl animate-bounce delay-400 backdrop-filter backdrop-blur-sm">🥤</div>
//       <div className="absolute bottom-10 right-1/3 transform -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center text-purple-700 text-3xl animate-bounce delay-900 backdrop-filter backdrop-blur-sm">🚿</div>
//       <div className="absolute top-1/3 right-10 transform translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-orange-700 text-xl animate-bounce delay-1200 backdrop-filter backdrop-blur-sm">🥫</div>

//       {/* Main Content Container with Z-Index for layering */}
//       <div className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center">
//         {/* Top Header */}
//         <header className="flex items-center justify-between p-4 bg-transparent w-full max-w-sm">
//           <div className="w-12"></div>
//           <div className="text-center">
//             <h1 className="text-lg font-bold text-gray-800">SafeBuy AI</h1>
//           </div>
//           <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
//             <FaCog className="text-2xl text-gray-700" />
//           </button>
//         </header>

//         {/* Main Content Area */}
//         <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-10 w-full max-w-sm">
//           <div className="w-full flex flex-col items-start text-left">
//             {/* Main Title */}
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">
//               What product do you want to check today?
//             </h1>

//             {/* Search Bar */}
//             <div className="relative w-full mb-6">
//               <input
//                 type="text"
//                 placeholder="Or search by product name..."
//                 className="w-full h-12 pl-12 pr-4 rounded-full bg-white placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//             </div>

//             {/* Category Cards */}
//             <div className="w-full space-y-4">
//               {/* Card 1: Check your food */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Check your food
//                   </h3>
//                   <p className="text-sm font-medium text-green-600">
//                     Wafers, chocolate, snacks
//                   </p>
//                 </div>
//                 <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
//                   <span className="text-2xl">🍎</span>
//                 </div>
//               </div>

//               {/* Card 2: Check your drinks */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Check your drinks
//                   </h3>
//                   <p className="text-sm font-medium text-green-600">
//                     Soft drinks, juices, supplements
//                   </p>
//                 </div>
//                 <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
//                   <span className="text-2xl">🥤</span>
//                 </div>
//               </div>

//               {/* Card 3: Check your skincare */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Check your skincare
//                   </h3>
//                   <p className="text-sm font-medium text-green-600">
//                     Creams, lotions
//                   </p>
//                 </div>
//                 <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center">
//                   <span className="text-2xl">🧴</span>
//                 </div>
//               </div>

//               {/* Card 4: Check your shampoo & haircare */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Check your shampoo & haircare
//                   </h3>
//                   <p className="text-sm font-medium text-green-600">
//                     Shampoos, conditioners
//                   </p>
//                 </div>
//                 <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
//                   <span className="text-2xl">🚿</span>
//                 </div>
//               </div>

//               {/* Card 5: Other personal care products */}
//               <div className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Other personal care products
//                   </h3>
//                   <p className="text-sm font-medium text-green-600">
//                     Soaps, body washes
//                   </p>
//                 </div>
//                 <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center">
//                   <span className="text-2xl">🧼</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Bottom Navigation */}
//       <Footer />
//     </div>
//   );
// }


// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import { FaCog, FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export default function Asking() {
//   const navigate = useNavigate();

//   // State to track selected category
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [productName, setProductName] = useState("");

//   // Handle Generate button click
//   const handleGenerate = () => {
//     if (!selectedCategory && !productName) {
//       alert("Please select a category or type a product name!");
//       return;
//     }

//     // Navigate to Scan page with state
//     navigate("/scan", {
//       state: {
//         category: selectedCategory,
//         product: productName,
//       },
//     });
//   };

//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       {/* Scattered Emojis */}
//       <div className="absolute top-10 left-10 w-12 h-12 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse backdrop-filter backdrop-blur-sm">🥑</div>
//       <div className="absolute top-20 right-10 w-10 h-10 rounded-full flex items-center justify-center text-green-700 text-2xl animate-pulse delay-500 backdrop-filter backdrop-blur-sm">🧴</div>
//       <div className="absolute bottom-20 left-16 w-14 h-14 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse delay-1000 backdrop-filter backdrop-blur-sm">🧼</div>
//       <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-yellow-700 text-xl animate-bounce delay-200 backdrop-filter backdrop-blur-sm">🧇</div>
//       <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center text-red-700 text-2xl animate-bounce delay-700 backdrop-filter backdrop-blur-sm">🍫</div>
//       <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 text-2xl animate-bounce delay-400 backdrop-filter backdrop-blur-sm">🥤</div>
//       <div className="absolute bottom-10 right-1/3 transform -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center text-purple-700 text-3xl animate-bounce delay-900 backdrop-filter backdrop-blur-sm">🚿</div>
//       <div className="absolute top-1/3 right-10 transform translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-orange-700 text-xl animate-bounce delay-1200 backdrop-filter backdrop-blur-sm">🥫</div>

//       {/* Main Content */}
//       <div className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center">
//         {/* Header */}
//         <header className="flex items-center justify-between p-4 bg-transparent w-full max-w-sm">
//           <div className="w-12"></div>
//           <div className="text-center">
//             <h1 className="text-lg font-bold text-gray-800">SafeBuy AI</h1>
//           </div>
//           <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
//             <FaCog className="text-2xl text-gray-700" />
//           </button>
//         </header>

//         {/* Main Content Area */}
//         <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-10 w-full max-w-sm">
//           <div className="w-full flex flex-col items-start text-left">
//             {/* Main Title */}
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">
//               What product do you want to check today?
//             </h1>

//             {/* Search Bar */}
//             <div className="relative w-full mb-6">
//               <input
//                 type="text"
//                 placeholder="Or search by product name..."
//                 className="w-full h-12 pl-12 pr-4 rounded-full bg-white placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 value={productName}
//                 onChange={(e) => setProductName(e.target.value)}
//               />
//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//             </div>

//             {/* Category Cards */}
//             <div className="w-full space-y-4">
//               {[
//                 { name: "Food", desc: "Wafers, chocolate, snacks", icon: "🍎", color: "bg-green-200" },
//                 { name: "Drinks", desc: "Soft drinks, juices, supplements", icon: "🥤", color: "bg-blue-200" },
//                 { name: "Skincare", desc: "Creams, lotions", icon: "🧴", color: "bg-yellow-200" },
//                 { name: "Shampoo & Haircare", desc: "Shampoos, conditioners", icon: "🚿", color: "bg-purple-200" },
//                 { name: "Other Personal Care", desc: "Soaps, body washes", icon: "🧼", color: "bg-red-200" },
//               ].map((cat) => (
//                 <div
//                   key={cat.name}
//                   className={`w-full p-4 rounded-2xl shadow-md flex justify-between items-center cursor-pointer ${
//                     selectedCategory === cat.name ? "border-2 border-green-500" : "bg-white"
//                   }`}
//                   onClick={() => setSelectedCategory(cat.name)}
//                 >
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-800">{cat.name}</h3>
//                     <p className="text-sm font-medium text-green-600">{cat.desc}</p>
//                   </div>
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${cat.color}`}>
//                     <span className="text-2xl">{cat.icon}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Generate Button */}
//             <button
//               className="w-full bg-green-500 text-white py-3 rounded-full font-bold mt-4 hover:bg-green-600"
//               onClick={handleGenerate}
//             >
//               Generate
//             </button>
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <Footer active="categories" /> {/* Pass active prop to highlight footer */}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import { FaCog, FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export default function Asking() {
//   const navigate = useNavigate();
//   const [productName, setProductName] = useState("");
//   const [activeCategory, setActiveCategory] = useState(""); // Chat mode

//   const categories = [
//     { name: "Food", desc: "Wafers, chocolate, snacks", icon: "🍎", color: "bg-green-200" },
//     { name: "Drinks", desc: "Soft drinks, juices, supplements", icon: "🥤", color: "bg-blue-200" },
//     { name: "Skincare", desc: "Creams, lotions", icon: "🧴", color: "bg-yellow-200" },
//     { name: "Shampoo & Haircare", desc: "Shampoos, conditioners", icon: "🚿", color: "bg-purple-200" },
//     { name: "Other Personal Care", desc: "Soaps, body washes", icon: "🧼", color: "bg-red-200" },
//   ];

//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//     setProductName(""); // Reset input
//   };

//   const handleSearchGenerate = () => {
//     if (!productName) {
//       alert("Please type a product name!");
//       return;
//     }
//     setActiveCategory("Custom");
//   };

//   const handleGenerateChat = () => {
//     if (!productName) {
//       alert("Please type a product name!");
//       return;
//     }
//     navigate("/scan", { state: { category: activeCategory, product: productName } });
//   };

//   return (
//     <div className="flex flex-col min-h-screen relative font-display text-neutral-800">
//       {/* Background */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100 -z-10"></div>

//       <div className="relative flex flex-col flex-grow items-center justify-start px-4 py-6 w-full max-w-md mx-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between w-full mb-6">
//           <div className="w-12"></div>
//           <h1 className="text-xl font-bold text-gray-800">SafeBuy AI</h1>
//           <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
//             <FaCog className="text-2xl" />
//           </button>
//         </header>

//         <main className="w-full flex flex-col items-center">
//           {!activeCategory ? (
//             <>
//               {/* Initial Page */}
//               <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//                 What product do you want to check today?
//               </h2>

//               {/* Search */}
//               <div className="relative w-full mb-6">
//                 <input
//                   type="text"
//                   placeholder="Or search by product name..."
//                   className="w-full h-12 pl-12 pr-4 rounded-full bg-white placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   value={productName}
//                   onChange={(e) => setProductName(e.target.value)}
//                 />
//                 <FaSearch
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
//                   onClick={handleSearchGenerate}
//                 />
//               </div>

//               {/* Category Cards */}
//               <div className="w-full space-y-4">
//                 {categories.map((cat) => (
//                   <div
//                     key={cat.name}
//                     className="w-full p-4 rounded-2xl shadow-md flex justify-between items-center cursor-pointer bg-white hover:shadow-lg transition"
//                     onClick={() => handleCategoryClick(cat.name)}
//                   >
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-800">{cat.name}</h3>
//                       <p className="text-sm font-medium text-green-600">{cat.desc}</p>
//                     </div>
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center ${cat.color}`}
//                     >
//                       <span className="text-2xl">{cat.icon}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </>
//           ) : (
//             <>
//               {/* Chat Interface */}
//               <div className="w-full p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center space-y-4">
//                 <h2 className="text-2xl font-bold text-gray-800">{activeCategory} Chat</h2>
//                 <textarea
//                   placeholder="Type product name here..."
//                   className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                   value={productName}
//                   onChange={(e) => setProductName(e.target.value)}
//                 />
//                 <button
//                   className="w-full bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition"
//                   onClick={handleGenerateChat}
//                 >
//                   Generate
//                 </button>
//                 <button
//                   className="text-gray-700 underline hover:text-gray-900"
//                   onClick={() => setActiveCategory("")}
//                 >
//                   Back
//                 </button>
//               </div>
//             </>
//           )}
//         </main>
//       </div>

//       <Footer active="categories" />
//     </div>
//   );
// }




import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaCog, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Asking() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [activeCategory, setActiveCategory] = useState(""); // Current category selected

  const categories = [
    { name: "Food", desc: "Wafers, chocolate, snacks", icon: "🍎", color: "bg-green-200" },
    { name: "Drinks", desc: "Soft drinks, juices, supplements", icon: "🥤", color: "bg-blue-200" },
    { name: "Skincare", desc: "Creams, lotions", icon: "🧴", color: "bg-yellow-200" },
    { name: "Shampoo & Haircare", desc: "Shampoos, conditioners", icon: "🚿", color: "bg-purple-200" },
    { name: "Other Personal Care", desc: "Soaps, body washes", icon: "🧼", color: "bg-red-200" },
  ];

  // When clicking a category card
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setProductName(""); // Reset input for chat
  };

  // When clicking the search icon
  const handleSearchGenerate = () => {
    if (!productName.trim()) {
      alert("Please type a product name!");
      return;
    }
    setActiveCategory("Custom");
  };

  // When clicking "Generate" button in chat interface
  const handleGenerateChat = () => {
    if (!productName.trim()) {
      alert("Please type a product name!");
      return;
    }
    // Navigate to Scan.jsx with state
    navigate("/scan", { state: { category: activeCategory, product: productName } });
  };

  return (
    <div className="flex flex-col min-h-screen relative font-display text-neutral-800">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100 -z-10"></div>

      <div className="relative flex flex-col flex-grow items-center justify-start px-4 py-6 w-full max-w-md mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between w-full mb-6">
          <div className="w-12"></div>
          <h1 className="text-xl font-bold text-gray-800">SafeBuy AI</h1>
          <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
            <FaCog className="text-2xl" />
          </button>
        </header>

        <main className="w-full flex flex-col items-center">
          {!activeCategory ? (
            <>
              {/* Initial Page */}
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                What product do you want to check today?
              </h2>

              {/* Search */}
              <div className="relative w-full mb-6">
                <input
                  type="text"
                  placeholder="Or search by product name..."
                  className="w-full h-12 pl-12 pr-4 rounded-full bg-white placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <FaSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={handleSearchGenerate}
                />
              </div>

              {/* Category Cards */}
              <div className="w-full space-y-4">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="w-full p-4 rounded-2xl shadow-md flex justify-between items-center cursor-pointer bg-white hover:shadow-lg transition"
                    onClick={() => handleCategoryClick(cat.name)}
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{cat.name}</h3>
                      <p className="text-sm font-medium text-green-600">{cat.desc}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${cat.color}`}>
                      <span className="text-2xl">{cat.icon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Chat Interface */}
              <div className="w-full p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{activeCategory} Chat</h2>
                <textarea
                  placeholder="Type product name here..."
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <button
                  className="w-full bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition"
                  onClick={handleGenerateChat}
                >
                  Generate
                </button>
                <button
                  className="text-gray-700 underline hover:text-gray-900"
                  onClick={() => setActiveCategory("")}
                >
                  Back
                </button>
              </div>
            </>
          )}
        </main>
      </div>

      <Footer active="categories" />
    </div>
  );
}
