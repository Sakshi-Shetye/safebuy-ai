// import React from "react";
// import { FaHome, FaListUl, FaChartBar, FaCog, FaQrcode } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="sticky bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-lg border-t border-gray-100 dark:bg-gray-800 dark:border-gray-700">
//       <nav className="flex items-center justify-around py-4">
//         {/* Home */}
//         <a href="#" className="flex flex-col items-center text-green-500 font-medium">
//           <FaHome className="text-2xl mb-1" />
//           <span className="text-xs">Home</span>
//         </a>

//         {/* Categories */}
//         <a href="#" className="flex flex-col items-center text-gray-500">
//           <FaListUl className="text-2xl mb-1" />
//           <span className="text-xs">Categories</span>
//         </a>

//         {/* Scan/Barcode Icon (Middle) */}
//         <a href="#" className="relative -mt-10 mx-4">
//           <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
//             <FaQrcode className="text-3xl text-white" />
//           </div>
//         </a>

//         {/* Reports */}
//         <a href="#" className="flex flex-col items-center text-gray-500">
//           <FaChartBar className="text-2xl mb-1" />
//           <span className="text-xs">Reports</span>
//         </a>

//         {/* Settings */}
//         <a href="#" className="flex flex-col items-center text-gray-500">
//           <FaCog className="text-2xl mb-1" />
//           <span className="text-xs">Settings</span>
//         </a>
//       </nav>
//     </footer>
//   );
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaListUl, FaChartBar, FaCog, FaQrcode } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="sticky bottom-0 left-0 w-full bg-green-50 rounded-t-2xl shadow-lg border-t border-gray-100">
//       <nav className="flex items-center justify-around py-4">
//         {/* Home */}
//         <Link
//           to="/"
//           className="flex flex-col items-center text-green-500 font-medium"
//         >
//           <FaHome className="text-2xl mb-1" />
//           <span className="text-xs">Home</span>
//         </Link>

//         {/* Categories */}
//         <Link
//           to="/asking"
//           className="flex flex-col items-center text-gray-500"
//         >
//           <FaListUl className="text-2xl mb-1" />
//           <span className="text-xs">Categories</span>
//         </Link>

//         {/* Scan / QR Code Icon (Middle) */}
//         <Link to="/scan" className="relative -mt-10 mx-4">
//           <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
//             <FaQrcode className="text-3xl text-white" />
//           </div>
//         </Link>

//         {/* Reports */}
//         <Link
//           to="/report"
//           className="flex flex-col items-center text-gray-500"
//         >
//           <FaChartBar className="text-2xl mb-1" />
//           <span className="text-xs">Reports</span>
//         </Link>

//         {/* Settings */}
//         <Link
//           to="/settings"
//           className="flex flex-col items-center text-gray-500"
//         >
//           <FaCog className="text-2xl mb-1" />
//           <span className="text-xs">Settings</span>
//         </Link>
//       </nav>
//     </footer>
//   );
// }



import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaListUl, FaChartBar, FaCog, FaQrcode } from "react-icons/fa";

export default function Footer() {
  const location = useLocation(); // get current route path

  // helper function to check if route is active
  const isActive = (path) => location.pathname.toLowerCase() === path.toLowerCase();

  return (
    <footer className="sticky bottom-0 left-0 w-full bg-green-50 rounded-t-2xl shadow-lg border-t border-gray-100">
      <nav className="flex items-center justify-around py-4">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center font-medium ${
            isActive("/") ? "text-green-500" : "text-gray-500"
          }`}
        >
          <FaHome className="text-2xl mb-1" />
          <span className="text-xs">Home</span>
        </Link>

        {/* Categories */}
        <Link
          to="/asking"
          className={`flex flex-col items-center font-medium ${
            isActive("/asking") ? "text-green-500" : "text-gray-500"
          }`}
        >
          <FaListUl className="text-2xl mb-1" />
          <span className="text-xs">Categories</span>
        </Link>

        {/* Scan / QR Code Icon (Middle) */}
        <Link
          to="/scan"
          className="relative -mt-10 mx-4"
        >
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
              isActive("/scan") ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <FaQrcode className="text-3xl text-white" />
          </div>
        </Link>

        {/* Reports */}
        <Link
          to="/report"
          className={`flex flex-col items-center font-medium ${
            isActive("/report") ? "text-green-500" : "text-gray-500"
          }`}
        >
          <FaChartBar className="text-2xl mb-1" />
          <span className="text-xs">Reports</span>
        </Link>

        {/* Settings */}
        <Link
          to="/settings"
          className={`flex flex-col items-center font-medium ${
            isActive("/settings") ? "text-green-500" : "text-gray-500"
          }`}
        >
          <FaCog className="text-2xl mb-1" />
          <span className="text-xs">Settings</span>
        </Link>
      </nav>
    </footer>
  );
}

