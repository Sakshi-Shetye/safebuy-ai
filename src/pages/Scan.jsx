// import React, { useState, useEffect } from "react";
// import Footer from "../components/Footer";
// import { FaArrowLeft, FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

// // This is a mock data object. In a real application, you would replace this
// // with a call to your AI API (e.g., fetch from your backend).
// const mockAIResponse = {
//   productName: "Organic Baby Lotion",
//   category: "Baby Care",
//   overallScore: 85,
//   overallAdvice: "Safe to use",
//   ingredients: [
//     {
//       name: "Aloe Vera",
//       status: "Good",
//       reason: "Natural moisturizer, great for sensitive skin. Suitable for all ages.",
//       ageRecommendation: "All Ages",
//     },
//     {
//       name: "Chamomile",
//       status: "Good",
//       reason: "Known for its calming and anti-inflammatory properties.",
//       ageRecommendation: "All Ages",
//     },
//     {
//       name: "Fragrance",
//       status: "Bad",
//       reason: "Can be a potential irritant for sensitive baby skin. Use with caution for newborns.",
//       ageRecommendation: "6-12 years, Teenagers, Adults, Seniors",
//     },
//     {
//       name: "Glycerin",
//       status: "Okay",
//       reason: "A common humectant, generally safe but source matters.",
//       ageRecommendation: "All Ages",
//     },
//     {
//       name: "Parabens",
//       status: "Bad",
//       reason: "A preservative linked to skin irritation and hormonal disruption. Not recommended for infants.",
//       ageRecommendation: "Not Recommended",
//     },
//   ],
//   ageBreakdown: [
//     { label: "Infants (0-5 years)", safe: false, reason: "Contains parabens and fragrance" },
//     { label: "Children (6-12 years)", safe: true, reason: "Safe with caution" },
//     { label: "Teenagers (13-19 years)", safe: true, reason: "Safe to use" },
//     { label: "Adults (20-60 years)", safe: true, reason: "Safe to use" },
//     { label: "Seniors (60+)", safe: true, reason: "Safe to use" },
//   ],
// };

// const getStatusStyles = (status) => {
//   switch (status) {
//     case "Good":
//       return { bg: "bg-green-200", text: "text-green-700", icon: FaCheckCircle };
//     case "Bad":
//       return { bg: "bg-red-200", text: "text-red-700", icon: FaTimesCircle };
//     case "Okay":
//       return { bg: "bg-yellow-200", text: "text-yellow-700", icon: FaInfoCircle };
//     default:
//       return { bg: "bg-gray-200", text: "text-gray-700", icon: FaInfoCircle };
//   }
// };

// export default function Scan() {
//   const [analysisData, setAnalysisData] = useState(null);

//   useEffect(() => {
//     // Simulate fetching data from an AI API
//     const fetchAnalysis = () => {
//       // In a real app, this would be an API call:
//       // const response = await fetch('/api/analyze-product');
//       // const data = await response.json();
//       // setAnalysisData(data);

//       // Using mock data for demonstration
//       setAnalysisData(mockAIResponse);
//     };

//     fetchAnalysis();
//   }, []);

//   if (!analysisData) {
//     return (
//       <div className="flex flex-col min-h-screen items-center justify-center font-display text-neutral-800">
//         <p className="text-xl font-semibold">Analyzing product...</p>
//       </div>
//     );
//   }

//   const { productName, category, overallScore, overallAdvice, ingredients, ageBreakdown } = analysisData;

//   const getOverallAdviceColor = (advice) => {
//     if (advice.includes("Safe")) return "text-green-700";
//     if (advice.includes("Caution")) return "text-yellow-700";
//     if (advice.includes("Avoid")) return "text-red-700";
//     return "text-gray-700";
//   };

//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       {/* Scattered Emojis with Blur Effect */}
//       <div className="absolute top-10 left-10 w-12 h-12 rounded-full flex items-center justify-center text-green-700 text-3xl animate-pulse backdrop-filter backdrop-blur-sm">🌱</div>
//       <div className="absolute top-20 right-10 w-10 h-10 rounded-full flex items-center justify-center text-blue-700 text-2xl animate-pulse delay-500 backdrop-filter backdrop-blur-sm">👶</div>
//       <div className="absolute bottom-20 left-16 w-14 h-14 rounded-full flex items-center justify-center text-yellow-700 text-3xl animate-pulse delay-1000 backdrop-filter backdrop-blur-sm">✨</div>
//       <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-green-700 text-xl animate-bounce delay-200 backdrop-filter backdrop-blur-sm">🌿</div>
//       <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center text-red-700 text-2xl animate-bounce delay-700 backdrop-filter backdrop-blur-sm">⚠️</div>

//       {/* Main Content Container with Z-Index for layering */}
//       <div className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center">
//         {/* Top Header */}
//         <header className="flex items-center justify-between p-4 bg-transparent w-full md:max-w-lg">
//           <button className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700">
//             <FaArrowLeft className="text-2xl text-gray-700" />
//           </button>
//           <div className="text-center">
//             <h1 className="text-lg font-bold text-gray-800">Analysis Results</h1>
//           </div>
//           <div className="w-12"></div>
//         </header>

//         {/* Main Content Area */}
//         <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-6 w-full md:max-w-lg">
//           <div className="w-full flex flex-col items-start text-left">
//             {/* Product Title and Category */}
//             <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
//               {productName}
//             </h1>
//             <p className="text-lg text-gray-600 font-semibold mb-8">
//               {category}
//             </p>

//             {/* Score and Image Section */}
//             <div className="relative w-full flex items-center justify-center mb-8">
//               {/* Product Score Card */}
//               <div className="w-full h-40 bg-white rounded-2xl shadow-lg flex items-center p-6">
//                 <div className="flex flex-col items-center mr-6">
//                   {/* Score Ring */}
//                   <div className="w-24 h-24 flex items-center justify-center relative">
//                     <div className="w-full h-full rounded-full border-4 border-gray-200 absolute"></div>
//                     <div
//                       className="absolute inset-0 rounded-full border-4"
//                       style={{
//                         borderColor: 'transparent',
//                         borderTopColor: overallScore > 50 ? '#4ADE80' : '#F87171',
//                         borderRightColor: overallScore > 50 ? '#4ADE80' : '#F87171',
//                         transform: `rotate(${45 + (overallScore / 100) * 360}deg)`,
//                       }}
//                     ></div>
//                     <div className="w-full h-full rounded-full flex items-center justify-center flex-col">
//                       <span className="text-4xl font-extrabold text-gray-800">{overallScore}</span>
//                       <span className="text-sm text-gray-500">/100</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Overall Advice and Image */}
//                 <div className="flex-grow flex items-end">
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold mb-1">Overall Advice</h3>
//                     <p className={`text-lg font-semibold ${getOverallAdviceColor(overallAdvice)}`}>
//                       {overallAdvice}
//                     </p>
//                   </div>
//                   <img
//                     src="https://i.imgur.com/kS9Gj1n.png"
//                     alt="Product"
//                     className="w-24 h-auto rounded-xl shadow-lg -mb-4 -mr-4"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Ingredients Section */}
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">
//               Ingredients
//             </h2>

//             <div className="w-full space-y-4">
//               {ingredients.map((item, index) => {
//                 const { bg, text, icon: Icon } = getStatusStyles(item.status);
//                 return (
//                   <div key={index} className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-start">
//                     <div className="flex-grow pr-4 text-left">
//                       <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//                       <p className="text-sm text-gray-600">{item.reason}</p>
//                     </div>
//                     <div className={`flex-shrink-0 ${bg} ${text} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
//                       <Icon className="text-base" /> {item.status}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Age-wise Recommendations Section */}
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">
//               Age-wise Recommendations
//             </h2>
//             <div className="w-full space-y-4 mb-10">
//               {ageBreakdown.map((age, index) => (
//                 <div key={index} className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center">
//                   <span className="text-lg font-bold text-gray-800">{age.label}</span>
//                   <div className={`flex-shrink-0 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${age.safe ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
//                     {age.safe ? <FaCheckCircle /> : <FaTimesCircle />}
//                     {age.safe ? 'Safe' : 'Unsafe'}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Action Buttons */}
//             <div className="w-full mt-10 mb-6 space-y-4">
//               <button className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-full text-base transition-transform hover:scale-105 shadow-lg shadow-green-500/50">
//                 Analyze Another Product
//               </button>
//               <button className="w-full bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-full text-base transition-transform hover:scale-105 shadow-md">
//                 Generate Full Report
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Bottom Navigation */}
//       <Footer />
//     </div>
//   );
// }






// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Footer from "../components/Footer";
// import { FaArrowLeft, FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

// // Helper to determine status colors/icons
// const getStatusStyles = (status) => {
//   switch (status) {
//     case "Good":
//       return { bg: "bg-green-200", text: "text-green-700", icon: FaCheckCircle };
//     case "Bad":
//       return { bg: "bg-red-200", text: "text-red-700", icon: FaTimesCircle };
//     case "Okay":
//       return { bg: "bg-yellow-200", text: "text-yellow-700", icon: FaInfoCircle };
//     default:
//       return { bg: "bg-gray-200", text: "text-gray-700", icon: FaInfoCircle };
//   }
// };

// // Mock AI response generator for demo purposes
// const generateMockResponse = (productName) => ({
//   productName: productName || "Unknown Product",
//   category: "Personal Care",
//   overallScore: Math.floor(Math.random() * 101),
//   overallAdvice: "Safe to use",
//   ingredients: [
//     { name: "Ingredient 1", status: "Good", reason: "Good for skin", ageRecommendation: "All Ages" },
//     { name: "Ingredient 2", status: "Bad", reason: "May irritate sensitive skin", ageRecommendation: "Not Recommended" },
//     { name: "Ingredient 3", status: "Okay", reason: "Neutral effect", ageRecommendation: "All Ages" },
//   ],
//   ageBreakdown: [
//     { label: "Infants (0-5 years)", safe: false, reason: "Contains strong chemicals" },
//     { label: "Children (6-12 years)", safe: true, reason: "Safe with caution" },
//     { label: "Teenagers (13-19 years)", safe: true, reason: "Safe to use" },
//     { label: "Adults (20-60 years)", safe: true, reason: "Safe to use" },
//     { label: "Seniors (60+)", safe: true, reason: "Safe to use" },
//   ],
// });

// export default function Scan() {
//   const location = useLocation();
//   const [analysisData, setAnalysisData] = useState(null);

//   useEffect(() => {
//     const productName = location.state?.productName || "Unknown Product";

//     // In a real app, you can replace this with an API call:
//     // fetch(`/api/analyze-product?name=${productName}`).then(res => res.json())
//     //   .then(data => setAnalysisData(data))

//     // Using mock data for demo
//     setAnalysisData(generateMockResponse(productName));
//   }, [location.state]);

//   if (!analysisData) {
//     return (
//       <div className="flex flex-col min-h-screen items-center justify-center font-display text-neutral-800">
//         <p className="text-xl font-semibold">Analyzing product...</p>
//       </div>
//     );
//   }

//   const { productName, category, overallScore, overallAdvice, ingredients, ageBreakdown } = analysisData;

//   const getOverallAdviceColor = (advice) => {
//     if (advice.includes("Safe")) return "text-green-700";
//     if (advice.includes("Caution")) return "text-yellow-700";
//     if (advice.includes("Avoid")) return "text-red-700";
//     return "text-gray-700";
//   };

//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       {/* Background and Effects */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       <div className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center">
//         <header className="flex items-center justify-between p-4 bg-transparent w-full md:max-w-lg">
//           <div className="w-12 h-12"></div>
//           <h1 className="text-lg font-bold text-gray-800">Analysis Results</h1>
//           <div className="w-12 h-12"></div>
//         </header>

//         <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-6 w-full md:max-w-lg">
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{productName}</h1>
//           <p className="text-lg text-gray-600 font-semibold mb-8">{category}</p>

//           {/* Score Card */}
//           <div className="w-full flex flex-col items-center mb-8">
//             <div className="w-full h-40 bg-white rounded-2xl shadow-lg flex items-center p-6">
//               <div className="flex flex-col items-center mr-6">
//                 <div className="w-24 h-24 flex items-center justify-center relative">
//                   <div className="w-full h-full rounded-full border-4 border-gray-200 absolute"></div>
//                   <div
//                     className="absolute inset-0 rounded-full border-4"
//                     style={{
//                       borderColor: 'transparent',
//                       borderTopColor: overallScore > 50 ? '#4ADE80' : '#F87171',
//                       borderRightColor: overallScore > 50 ? '#4ADE80' : '#F87171',
//                       transform: `rotate(${45 + (overallScore / 100) * 360}deg)`,
//                     }}
//                   ></div>
//                   <div className="w-full h-full rounded-full flex items-center justify-center flex-col">
//                     <span className="text-4xl font-extrabold text-gray-800">{overallScore}</span>
//                     <span className="text-sm text-gray-500">/100</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-grow flex items-end">
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold mb-1">Overall Advice</h3>
//                   <p className={`text-lg font-semibold ${getOverallAdviceColor(overallAdvice)}`}>
//                     {overallAdvice}
//                   </p>
//                 </div>
//                 <img
//                   src="https://i.imgur.com/kS9Gj1n.png"
//                   alt="Product"
//                   className="w-24 h-auto rounded-xl shadow-lg -mb-4 -mr-4"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Ingredients */}
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">Ingredients</h2>
//           <div className="w-full space-y-4">
//             {ingredients.map((item, index) => {
//               const { bg, text, icon: Icon } = getStatusStyles(item.status);
//               return (
//                 <div key={index} className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-start">
//                   <div className="flex-grow pr-4 text-left">
//                     <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//                     <p className="text-sm text-gray-600">{item.reason}</p>
//                   </div>
//                   <div className={`flex-shrink-0 ${bg} ${text} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
//                     <Icon className="text-base" /> {item.status}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Age Breakdown */}
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">Age-wise Recommendations</h2>
//           <div className="w-full space-y-4 mb-10">
//             {ageBreakdown.map((age, index) => (
//               <div key={index} className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center">
//                 <span className="text-lg font-bold text-gray-800">{age.label}</span>
//                 <div className={`flex-shrink-0 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${age.safe ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
//                   {age.safe ? <FaCheckCircle /> : <FaTimesCircle />}
//                   {age.safe ? 'Safe' : 'Unsafe'}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="w-full mt-10 mb-6 space-y-4">
//             <button className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-full text-base transition-transform hover:scale-105 shadow-lg shadow-green-500/50">
//               Analyze Another Product
//             </button>
//             <button className="w-full bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-full text-base transition-transform hover:scale-105 shadow-md">
//               Generate Full Report
//             </button>
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Footer from "../components/Footer";
// import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
// import { analyzeProduct } from "../api/analyze-product";

// // Status helper
// const getStatusStyles = (status) => {
//   switch (status) {
//     case "Good":
//       return { bg: "bg-green-200", text: "text-green-700", icon: FaCheckCircle };
//     case "Bad":
//       return { bg: "bg-red-200", text: "text-red-700", icon: FaTimesCircle };
//     case "Okay":
//       return { bg: "bg-yellow-200", text: "text-yellow-700", icon: FaInfoCircle };
//     default:
//       return { bg: "bg-gray-200", text: "text-gray-700", icon: FaInfoCircle };
//   }
// };

// export default function Scan() {
//   const location = useLocation();
//   const [analysisData, setAnalysisData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const product = location.state?.product || "Unknown Product";

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const data = await analyzeProduct(product);
//         setAnalysisData(data);
//       } catch (error) {
//         console.error(error);
//         alert("Failed to fetch product data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [product]);

//   if (loading) {
//     return (
//       <div className="flex flex-col min-h-screen items-center justify-center font-display text-neutral-800">
//         <p className="text-xl font-semibold">Analyzing product...</p>
//       </div>
//     );
//   }

//   if (!analysisData) {
//     return (
//       <div className="flex flex-col min-h-screen items-center justify-center font-display text-neutral-800">
//         <p className="text-xl font-semibold">No data found for "{product}"</p>
//       </div>
//     );
//   }

//   const { productName, category, overallScore, overallAdvice, ingredients, ageBreakdown } = analysisData;

//   const getOverallAdviceColor = (advice) =>
//     advice.includes("Safe")
//       ? "text-green-700"
//       : advice.includes("Caution")
//       ? "text-yellow-700"
//       : "text-red-700";

//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       <div className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center">
//         <header className="flex items-center justify-between p-4 w-full md:max-w-lg">
//           <div className="w-12 h-12"></div>
//           <h1 className="text-lg font-bold text-gray-800">Analysis Results</h1>
//           <div className="w-12 h-12"></div>
//         </header>

//         <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-6 w-full md:max-w-lg">
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{productName}</h1>
//           <p className="text-lg text-gray-600 font-semibold mb-8">{category}</p>

//           {/* Overall Score & Advice */}
//           <div className="w-full p-6 mb-6 bg-white rounded-2xl shadow-md flex flex-col items-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">Overall Safety Score</h2>
//             <p className={`text-xl font-semibold ${getOverallAdviceColor(overallAdvice)}`}>
//               {overallAdvice} - {overallScore}/100
//             </p>
//           </div>

//           {/* Ingredients */}
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
//           <div className="w-full space-y-4">
//             {ingredients.map((item, index) => {
//               const { bg, text, icon: Icon } = getStatusStyles(item.status);
//               return (
//                 <div
//                   key={index}
//                   className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-start"
//                 >
//                   <div className="flex-grow pr-4 text-left">
//                     <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//                     <p className="text-sm text-gray-600">{item.reason}</p>
//                   </div>
//                   <div
//                     className={`flex-shrink-0 ${bg} ${text} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}
//                   >
//                     <Icon className="text-base" /> {item.status}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Age Breakdown */}
//           <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Age-wise Recommendations</h2>
//           <div className="w-full space-y-4">
//             {ageBreakdown.map((age, index) => (
//               <div
//                 key={index}
//                 className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center"
//               >
//                 <span className="text-lg font-bold text-gray-800">{age.label}</span>
//                 <div
//                   className={`flex-shrink-0 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${
//                     age.safe ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
//                   }`}
//                 >
//                   {age.safe ? <FaCheckCircle /> : <FaTimesCircle />}
//                   {age.safe ? "Safe" : "Unsafe"}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>

//       <Footer />
//     </div>
//   );
// }




// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Footer from "../components/Footer";
// import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
// import { analyzeProduct } from "../api/analyze-product";

// const getStatusStyles = (status) => {
//   switch (status) {
//     case "Good": return { bg: "bg-green-200", text: "text-green-700", icon: FaCheckCircle };
//     case "Bad": return { bg: "bg-red-200", text: "text-red-700", icon: FaTimesCircle };
//     case "Okay": return { bg: "bg-yellow-200", text: "text-yellow-700", icon: FaInfoCircle };
//     default: return { bg: "bg-gray-200", text: "text-gray-700", icon: FaInfoCircle };
//   }
// };

// export default function Scan() {
//   const location = useLocation();
//   const [analysisData, setAnalysisData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const product = location.state?.product || "Unknown Product";

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const data = await analyzeProduct(product);
//         setAnalysisData(data);
//       } catch (error) {
//         console.error(error);
//         alert("Failed to fetch product data. Try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [product]);

//   if (loading) return <div className="flex items-center justify-center min-h-screen">Analyzing product...</div>;
//   if (!analysisData) return <div className="flex items-center justify-center min-h-screen">No data found for {product}</div>;

//   const { productName, category, ingredients, ageBreakdown } = analysisData;

//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       <div className="relative z-10 flex-grow flex flex-col items-center px-4 text-center">
//         <header className="flex items-center justify-between p-4 w-full md:max-w-lg">
//           <div className="w-12 h-12"></div>
//           <h1 className="text-lg font-bold text-gray-800">Analysis Results</h1>
//           <div className="w-12 h-12"></div>
//         </header>

//         <main className="flex-grow flex flex-col items-center mt-6 w-full md:max-w-lg">
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{productName}</h1>
//           <p className="text-lg text-gray-600 font-semibold mb-8">{category}</p>

//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
//           <div className="w-full space-y-4">
//             {ingredients.map((item, idx) => {
//               const { bg, text, icon: Icon } = getStatusStyles(item.status);
//               return (
//                 <div key={idx} className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-start">
//                   <div className="flex-grow pr-4 text-left">
//                     <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//                     <p className="text-sm text-gray-600">{item.reason}</p>
//                   </div>
//                   <div className={`${bg} ${text} px-3 py-1 rounded-full flex items-center gap-1`}>
//                     <Icon className="text-base" /> {item.status}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Age-wise Recommendations</h2>
//           <div className="w-full space-y-4">
//             {ageBreakdown.map((age, idx) => (
//               <div key={idx} className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center">
//                 <span className="text-lg font-bold text-gray-800">{age.label}</span>
//                 <div className={`${age.safe ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} px-3 py-1 rounded-full flex items-center gap-1`}>
//                   {age.safe ? <FaCheckCircle /> : <FaTimesCircle />}
//                   {age.safe ? "Safe" : "Unsafe"}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>

//       <Footer />
//     </div>
//   );
// }







// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Footer from "../components/Footer";
// import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
// import { analyzeProduct } from "../api/analyze-product";

// // Helper for ingredient status
// const getStatusStyles = (status) => {
//   switch (status) {
//     case "Good": return { bg: "bg-green-200", text: "text-green-700", icon: FaCheckCircle };
//     case "Bad": return { bg: "bg-red-200", text: "text-red-700", icon: FaTimesCircle };
//     case "Okay": return { bg: "bg-yellow-200", text: "text-yellow-700", icon: FaInfoCircle };
//     default: return { bg: "bg-gray-200", text: "text-gray-700", icon: FaInfoCircle };
//   }
// };

// export default function Scan() {
//   const location = useLocation();
//   const product = location.state?.product || "Unknown Product";

//   const [analysisData, setAnalysisData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const data = await analyzeProduct(product);
//         setAnalysisData(data);
//       } catch (error) {
//         console.error(error);
//         alert("Failed to fetch product data. Try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [product]);

//   if (loading) {
//     return <div className="flex flex-col min-h-screen items-center justify-center font-display text-neutral-800">
//       <p className="text-xl font-semibold">Analyzing product...</p>
//     </div>;
//   }

//   if (!analysisData) {
//     return <div className="flex flex-col min-h-screen items-center justify-center font-display text-neutral-800">
//       <p className="text-xl font-semibold">No data found for "{product}"</p>
//     </div>;
//   }

//   const { productName, category, ingredients, ageBreakdown } = analysisData;

//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>
//       <div className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center">
//         <header className="flex items-center justify-between p-4 w-full md:max-w-lg">
//           <div className="w-12 h-12"></div>
//           <h1 className="text-lg font-bold text-gray-800">Analysis Results</h1>
//           <div className="w-12 h-12"></div>
//         </header>

//         <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-6 w-full md:max-w-lg">
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{productName}</h1>
//           <p className="text-lg text-gray-600 font-semibold mb-8">{category}</p>

//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
//           <div className="w-full space-y-4">
//             {ingredients.map((item, idx) => {
//               const { bg, text, icon: Icon } = getStatusStyles(item.status);
//               return (
//                 <div key={idx} className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-start">
//                   <div className="flex-grow pr-4 text-left">
//                     <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//                     <p className="text-sm text-gray-600">{item.reason}</p>
//                   </div>
//                   <div className={`flex-shrink-0 ${bg} ${text} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
//                     <Icon className="text-base" /> {item.status}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Age-wise Recommendations</h2>
//           <div className="w-full space-y-4">
//             {ageBreakdown.map((age, idx) => (
//               <div key={idx} className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center">
//                 <span className="text-lg font-bold text-gray-800">{age.label}</span>
//                 <div className={`flex-shrink-0 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${age.safe ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
//                   {age.safe ? <FaCheckCircle /> : <FaTimesCircle />}
//                   {age.safe ? "Safe" : "Unsafe"}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>

//       <Footer />
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
import { analyzeProduct } from "../api/analyze-product";

const getStatusStyles = (status) => {
  switch (status) {
    case "Good": return { bg: "bg-green-200", text: "text-green-700", icon: FaCheckCircle };
    case "Bad": return { bg: "bg-red-200", text: "text-red-700", icon: FaTimesCircle };
    case "Okay": return { bg: "bg-yellow-200", text: "text-yellow-700", icon: FaInfoCircle };
    default: return { bg: "bg-gray-200", text: "text-gray-700", icon: FaInfoCircle };
  }
};

export default function Scan() {
  const location = useLocation();
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);

  const product = location.state?.product || "Unknown Product";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await analyzeProduct(product);
        setAnalysisData(data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch product data. Try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [product]);

  if (loading) return <div className="flex justify-center mt-20 text-xl">Analyzing product...</div>;
  if (!analysisData) return <div className="flex justify-center mt-20 text-xl">No data found</div>;

  const { productName, category, ingredients, ageBreakdown } = analysisData;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{productName}</h1>
      <p className="text-lg font-semibold mb-6">{category}</p>

      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <div className="space-y-2">
        {ingredients.map((item, i) => {
          const { bg, text, icon: Icon } = getStatusStyles(item.status);
          return (
            <div key={i} className="flex justify-between p-3 bg-white rounded-lg shadow">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm">{item.reason}</p>
              </div>
              <div className={`${bg} ${text} flex items-center gap-1 px-2 py-1 rounded-full`}>
                <Icon /> {item.status}
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-2">Age Recommendations</h2>
      <div className="space-y-2">
        {ageBreakdown.map((age, i) => (
          <div key={i} className="flex justify-between p-3 bg-white rounded-lg shadow">
            <span className="font-bold">{age.label}</span>
            <span className={`${age.safe ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} px-2 py-1 rounded-full flex items-center gap-1`}>
              {age.safe ? <FaCheckCircle /> : <FaTimesCircle />}
              {age.safe ? "Safe" : "Unsafe"}
            </span>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}






// import React, { useState, useEffect } from "react";
// import Footer from "../components/Footer";
// import { FaArrowLeft, FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";

// const getStatusStyles = (status) => {
//   switch (status) {
//     case "Good":
//       return { bg: "bg-green-200", text: "text-green-700", icon: FaCheckCircle };
//     case "Bad":
//       return { bg: "bg-red-200", text: "text-red-700", icon: FaTimesCircle };
//     case "Okay":
//       return { bg: "bg-yellow-200", text: "text-yellow-700", icon: FaInfoCircle };
//     default:
//       return { bg: "bg-gray-200", text: "text-gray-700", icon: FaInfoCircle };
//   }
// };

// export default function Scan() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { category: selectedCategory, product } = location.state || {}; // renamed category to selectedCategory

//   const [analysisData, setAnalysisData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!product) return;

//     const fetchAnalysis = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("/api/analyze-product", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ productName: product }),
//         });

//         const data = await response.json();
//         if (data.error) {
//           setError(data.error);
//         } else {
//           setAnalysisData(data);
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch product analysis");
//       }
//       setLoading(false);
//     };

//     fetchAnalysis();
//   }, [product]);

//   if (loading) {
//     return (
//       <div className="flex flex-col min-h-screen items-center justify-center font-display text-neutral-800">
//         <p className="text-xl font-semibold">Analyzing product...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col min-h-screen items-center justify-center font-display text-neutral-800">
//         <p className="text-xl font-semibold text-red-600">{error}</p>
//         <button
//           className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
//           onClick={() => navigate(-1)}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   const {
//     productName,
//     category: prodCategory,
//     overallScore,
//     overallAdvice,
//     ingredients,
//     ageBreakdown,
//     shelfLife,
//     alternatives,
//   } = analysisData || {};

//   const getOverallAdviceColor = (advice) => {
//     if (!advice) return "text-gray-700";
//     if (advice.includes("Safe")) return "text-green-700";
//     if (advice.includes("Caution")) return "text-yellow-700";
//     if (advice.includes("Avoid")) return "text-red-700";
//     return "text-gray-700";
//   };

//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden font-display text-neutral-800">
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

//       <div className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 text-center">
//         <header className="flex items-center justify-between p-4 bg-transparent w-full md:max-w-lg">
//           <button
//             className="w-12 h-12 flex items-center justify-center rounded-full text-gray-700"
//             onClick={() => navigate(-1)}
//           >
//             <FaArrowLeft className="text-2xl text-gray-700" />
//           </button>
//           <div className="text-center">
//             <h1 className="text-lg font-bold text-gray-800">Analysis Results</h1>
//           </div>
//           <div className="w-12"></div>
//         </header>

//         <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-6 w-full md:max-w-lg">
//           <div className="w-full flex flex-col items-start text-left">
//             <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{productName}</h1>
//             <p className="text-lg text-gray-600 font-semibold mb-4">{prodCategory || selectedCategory}</p>
//             <p className="text-md text-gray-700 mb-4">Shelf Life: {shelfLife}</p>

//             <div className="mb-8">
//               <h2 className="text-2xl font-bold mb-4">Overall Advice</h2>
//               <p className={`text-lg font-semibold ${getOverallAdviceColor(overallAdvice)}`}>
//                 {overallAdvice} ({overallScore}/100)
//               </p>
//             </div>

//             <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
//             <div className="w-full space-y-4 mb-6">
//               {ingredients?.map((item, i) => {
//                 const { bg, text, icon: Icon } = getStatusStyles(item.status);
//                 return (
//                   <div
//                     key={i}
//                     className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-start"
//                   >
//                     <div className="flex-grow pr-4 text-left">
//                       <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//                       <p className="text-sm text-gray-600">{item.reason}</p>
//                       <p className="text-xs text-gray-500">Age: {item.ageRecommendation}</p>
//                     </div>
//                     <div
//                       className={`flex-shrink-0 ${bg} ${text} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}
//                     >
//                       <Icon className="text-base" /> {item.status}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <h2 className="text-2xl font-bold mb-4">Age-wise Recommendations</h2>
//             <div className="w-full space-y-4 mb-6">
//               {ageBreakdown?.map((age, i) => (
//                 <div
//                   key={i}
//                   className="w-full p-4 rounded-2xl shadow-md bg-white flex justify-between items-center"
//                 >
//                   <span className="text-lg font-bold text-gray-800">{age.label}</span>
//                   <div
//                     className={`flex-shrink-0 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${
//                       age.safe ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
//                     }`}
//                   >
//                     {age.safe ? <FaCheckCircle /> : <FaTimesCircle />}
//                     {age.safe ? "Safe" : "Unsafe"}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {alternatives?.length > 0 && (
//               <div className="mb-6">
//                 <h2 className="text-2xl font-bold mb-2">Alternative Products</h2>
//                 <ul className="list-disc list-inside">
//                   {alternatives.map((alt, i) => (
//                     <li key={i} className="text-gray-700">
//                       {alt}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             <button
//               className="w-full mt-4 bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition"
//               onClick={() => navigate("/")}
//             >
//               Analyze Another Product
//             </button>
//           </div>
//         </main>
//       </div>

//       <Footer />
//     </div>
//   );
// }
