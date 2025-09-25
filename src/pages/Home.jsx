// import React from "react";
// import Footer from "../components/Footer";
// import { FaCog } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       {/* Top Header */}
//       <header className="relative z-10 flex items-center justify-between p-4 bg-transparent">
//         <div className="w-12"></div>
//         <div className="text-center">
//           <h1 className="text-lg font-bold text-gray-800">SafeBuy AI</h1>
//         </div>
//         <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
//           <FaCog className="text-2xl text-gray-700" />
//         </button>
//       </header>

//       {/* Main Content Area */}
//       <main className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center mt-10">
//         {/* Main Card Container */}
//         <div className="relative w-full max-w-sm bg-[#f2f4f2] dark:bg-[#2e3a2e] rounded-3xl shadow-xl p-6">
//           {/* Main Image Container */}
//           <div className="relative w-full aspect-[3/4] mb-6">
//             <img
//               src="https://i.imgur.com/8Q9jB5h.png"
//               alt="SafeBuy AI Robot analyzing products"
//               className="w-full h-full object-contain"
//             />
//             {/* Floating Emojis */}
//             <div className="absolute top-10 -left-4 w-12 h-12 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse">🥑</div>
//             <div className="absolute top-20 -right-4 w-10 h-10 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-2xl animate-pulse delay-500">🧴</div>
//             <div className="absolute bottom-16 -left-2 w-14 h-14 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse delay-1000">🧼</div>
//           </div>

//           {/* Title and Description */}
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             Know Your Products Before You Buy!
//           </h2>
//           <p className="text-base text-gray-600 mb-8 max-w-md mx-auto">
//             Check ingredients, safety, and recommendations for any food, shampoo, or skincare product instantly.
//           </p>
//         </div>

//         {/* Analyze Button */}
//         <div className="w-full max-w-xs mt-8">
//           <button className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-full text-base transition-transform hover:scale-105 shadow-lg shadow-green-500/50">
//             Analyze Your Product
//           </button>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <Footer />
//     </div>
//   );
// }


// import React from "react";
// import Footer from "../components/Footer";
// import { FaCog } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       {/* Top Header */}
//       <header className="relative z-10 flex items-center justify-between p-4 bg-transparent">
//         <div className="w-12"></div>
//         <div className="text-center">
//           <h1 className="text-lg font-bold text-gray-800">SafeBuy AI</h1>
//         </div>
//         <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
//           <FaCog className="text-2xl text-gray-700" />
//         </button>
//       </header>

//       {/* Main Content Area */}
//       <main className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center mt-10">
//         {/* Main Card Container */}
//         <div className="relative w-full max-w-sm bg-[#f2f4f2] dark:bg-[#2e3a2e] rounded-3xl shadow-xl p-6">
//           {/* Main Image Container (Robot only) */}
//           <div className="relative w-full aspect-[3/4] mb-6">
//             {/* IMPORTANT: Replace this src with an image of JUST THE ROBOT,
//                 without the products at its base, to achieve the scattered effect.
//                 For example: src="https://example.com/robot-only.png" 
//             */}
//             <img
//               src="https://i.imgur.com/gK2T3xX.png" // Using the previous robot-only image for demonstration
//               alt="SafeBuy AI Robot"
//               className="w-full h-full object-contain"
//             />
            
//             {/* Floating Emojis (Avocado & Bottle) */}
//             <div className="absolute top-10 -left-4 w-12 h-12 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse">🥑</div>
//             <div className="absolute top-20 -right-4 w-10 h-10 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-2xl animate-pulse delay-500">🧴</div>
//             <div className="absolute bottom-16 -left-2 w-14 h-14 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse delay-1000">🧼</div>

//             {/* Scattered Product-like Emojis (Simulating waffles, chocolate, drinks etc.) */}
//             <div className="absolute top-5 left-1/4 transform -translate-x-1/2 w-8 h-8 bg-yellow-300/50 rounded-full flex items-center justify-center text-yellow-700 text-xl animate-bounce delay-200">🧇</div>
//             <div className="absolute bottom-20 right-1/4 transform translate-x-1/2 w-9 h-9 bg-red-300/50 rounded-full flex items-center justify-center text-red-700 text-2xl animate-bounce delay-700">🍫</div>
//             <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-10 h-10 bg-blue-300/50 rounded-full flex items-center justify-center text-blue-700 text-2xl animate-bounce delay-400">🥤</div>
//             <div className="absolute bottom-5 left-1/3 transform -translate-x-1/2 w-11 h-11 bg-purple-300/50 rounded-full flex items-center justify-center text-purple-700 text-3xl animate-bounce delay-900">🚿</div> {/* Represents skincare/shampoo */}
//             <div className="absolute top-1/3 right-0 transform translate-x-1/2 w-8 h-8 bg-orange-300/50 rounded-full flex items-center justify-center text-orange-700 text-xl animate-bounce delay-1200">🥫</div>
//           </div>

//           {/* Title and Description */}
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             Know Your Products Before You Buy!
//           </h2>
//           <p className="text-base text-gray-600 mb-8 max-w-md mx-auto">
//             Check ingredients, safety, and recommendations for any food, shampoo, or skincare product instantly.
//           </p>
//         </div>

//         {/* Analyze Button */}
//         <div className="w-full max-w-xs mt-8">
//           <button className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-full text-base transition-transform hover:scale-105 shadow-lg shadow-green-500/50">
//             Analyze Your Product
//           </button>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <Footer />
//     </div>
//   );
// }



// import React from "react";
// import Footer from "../components/Footer";
// import { FaCog } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       {/* Scattered Emojis and Product Symbols */}
//       {/* Avocado */}
//       <div className="absolute top-10 left-10 w-12 h-12 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse">🥑</div>
//       {/* Bottle */}
//       <div className="absolute top-20 right-10 w-10 h-10 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-2xl animate-pulse delay-500">🧴</div>
//       {/* Soap */}
//       <div className="absolute bottom-20 left-16 w-14 h-14 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse delay-1000">🧼</div>
//       {/* Waffle */}
//       <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 w-8 h-8 bg-yellow-300/50 rounded-full flex items-center justify-center text-yellow-700 text-xl animate-bounce delay-200">🧇</div>
//       {/* Chocolate */}
//       <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 w-9 h-9 bg-red-300/50 rounded-full flex items-center justify-center text-red-700 text-2xl animate-bounce delay-700">🍫</div>
//       {/* Drink */}
//       <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-10 h-10 bg-blue-300/50 rounded-full flex items-center justify-center text-blue-700 text-2xl animate-bounce delay-400">🥤</div>
//       {/* Shampoo/Skincare */}
//       <div className="absolute bottom-10 right-1/3 transform -translate-x-1/2 w-11 h-11 bg-purple-300/50 rounded-full flex items-center justify-center text-purple-700 text-3xl animate-bounce delay-900">🚿</div>
//       {/* Can */}
//       <div className="absolute top-1/3 right-10 transform translate-x-1/2 w-8 h-8 bg-orange-300/50 rounded-full flex items-center justify-center text-orange-700 text-xl animate-bounce delay-1200">🥫</div>

//       {/* Top Header */}
//       <header className="relative z-10 flex items-center justify-between p-4 bg-transparent">
//         <div className="w-12"></div>
//         <div className="text-center">
//           <h1 className="text-lg font-bold text-gray-800">SafeBuy AI</h1>
//         </div>
//         <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
//           <FaCog className="text-2xl text-gray-700" />
//         </button>
//       </header>

//       {/* Main Content Area */}
//       <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-center">
//         {/* Main Card Container */}
//         <div className="relative w-full max-w-sm bg-[#f2f4f2] dark:bg-[#2e3a2e] rounded-3xl shadow-xl p-6">
//           {/* Main Image Container */}
//           <div className="relative w-full aspect-[3/4] mb-6">
//             <img
//               src="https://i.imgur.com/gK2T3xX.png"
//               alt="SafeBuy AI Robot"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           {/* Title and Description */}
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             Know Your Products Before You Buy!
//           </h2>
//           <p className="text-base text-gray-600 mb-8 max-w-md mx-auto">
//             Check ingredients, safety, and recommendations for any food, shampoo, or skincare product instantly.
//           </p>
//         </div>

//         {/* Analyze Button */}
//         <div className="w-full max-w-xs mt-8">
//           <button className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-full text-base transition-transform hover:scale-105 shadow-lg shadow-green-500/50">
//             Analyze Your Product
//           </button>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <Footer />
//     </div>
//   );
// }



import React from "react";
import Footer from "../components/Footer";
import { FaCog } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

      {/* Scattered Emojis and Product Symbols */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse">🥑</div>
      <div className="absolute top-20 right-10 w-10 h-10 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-2xl animate-pulse delay-500">🧴</div>
      <div className="absolute bottom-20 left-16 w-14 h-14 bg-green-300/50 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse delay-1000">🧼</div>
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 w-8 h-8 bg-yellow-300/50 rounded-full flex items-center justify-center text-yellow-700 text-xl animate-bounce delay-200">🧇</div>
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 w-9 h-9 bg-red-300/50 rounded-full flex items-center justify-center text-red-700 text-2xl animate-bounce delay-700">🍫</div>
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-10 h-10 bg-blue-300/50 rounded-full flex items-center justify-center text-blue-700 text-2xl animate-bounce delay-400">🥤</div>
      <div className="absolute bottom-10 right-1/3 transform -translate-x-1/2 w-11 h-11 bg-purple-300/50 rounded-full flex items-center justify-center text-purple-700 text-3xl animate-bounce delay-900">🚿</div>
      <div className="absolute top-1/3 right-10 transform translate-x-1/2 w-8 h-8 bg-orange-300/50 rounded-full flex items-center justify-center text-orange-700 text-xl animate-bounce delay-1200">🥫</div>

      {/* Top Header */}
      <header className="relative z-10 flex items-center justify-between p-4 bg-transparent">
        <div className="w-12"></div>
        <div className="text-center">
          <h1 className="text-lg font-bold text-gray-800">SafeBuy AI</h1>
        </div>
        <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
          <FaCog className="text-2xl text-gray-700" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-center">
        {/* Main Card Container */}
        <div className="relative w-full max-w-sm bg-[#f2f4f2] dark:bg-[#2e3a2e] rounded-3xl shadow-xl p-6">
          {/* Main Image Container */}
          <div className="relative w-full aspect-[3/4] mb-6">
            <img
              src="/home.webp"
              alt="SafeBuy AI Robot"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title and Description */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Know Your Products Before You Buy!
          </h2>
          <p className="text-base text-gray-600 mb-8 max-w-md mx-auto">
            Check ingredients, safety, and recommendations for any food, shampoo, or skincare product instantly.
          </p>
        </div>

        {/* Analyze Button */}
        <div className="w-full max-w-xs mt-8">
          <button className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-full text-base transition-transform hover:scale-105 shadow-lg shadow-green-500/50">
            Analyze Your Product
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
}
