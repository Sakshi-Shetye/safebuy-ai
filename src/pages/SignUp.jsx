// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   MdEmail,
//   MdLockOutline,
//   MdVisibility,
//   MdVisibilityOff,
//   MdPerson,
//   MdPhone,
// } from "react-icons/md";
// import { FcGoogle } from "react-icons/fc";

// export default function SignUp() {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark font-display p-4">
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-400 via-blue-500 to-yellow-300 opacity-20 dark:opacity-30"></div>
//       <div className="relative z-10 w-full max-w-sm text-center">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="waving-hand text-6xl">👋</div>
//           <h1 className="text-3xl font-bold text-background-dark dark:text-background-light mt-2">
//             Welcome to SafeBuy AI
//           </h1>
//           <p className="text-background-dark/70 dark:text-background-light/70 mt-2">
//             Create your account to get started.
//           </p>
//         </div>

//         {/* Form */}
//         <form className="space-y-4">
//           {/* Name */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full h-14 pl-12 pr-4 rounded-lg bg-background-light/80 dark:bg-background-dark/80 text-background-dark dark:text-background-light placeholder-background-dark/50 dark:placeholder-background-light/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
//             />
//             <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-background-dark/50 dark:text-background-light/50" />
//           </div>

//           {/* Email */}
//           <div className="relative">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full h-14 pl-12 pr-4 rounded-lg bg-background-light/80 dark:bg-background-dark/80 text-background-dark dark:text-background-light placeholder-background-dark/50 dark:placeholder-background-light/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
//             />
//             <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-background-dark/50 dark:text-background-light/50" />
//           </div>

//           {/* Phone */}
//           <div className="relative">
//             <input
//               type="tel"
//               placeholder="Phone number"
//               className="w-full h-14 pl-12 pr-4 rounded-lg bg-background-light/80 dark:bg-background-dark/80 text-background-dark dark:text-background-light placeholder-background-dark/50 dark:placeholder-background-light/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
//             />
//             <MdPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-background-dark/50 dark:text-background-light/50" />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full h-14 pl-12 pr-12 rounded-lg bg-background-light/80 dark:bg-background-dark/80 text-background-dark dark:text-background-light placeholder-background-dark/50 dark:placeholder-background-light/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
//             />
//             <MdLockOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-background-dark/50 dark:text-background-light/50" />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-background-dark/50 dark:text-background-light/50"
//             >
//               {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//             </button>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full h-14 rounded-lg bg-primary text-background-dark font-bold text-lg hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/30"
//           >
//             Create Account
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="relative flex items-center justify-center my-6">
//           <div className="absolute inset-x-0 h-px bg-background-dark/20 dark:bg-background-light/20"></div>
//           <span className="relative px-2 bg-background-light dark:bg-background-dark text-sm text-background-dark/60 dark:text-background-light/60">
//             OR
//           </span>
//         </div>

//         {/* Social logins */}
//         <div className="space-y-3">
//           <button className="w-full h-12 rounded-lg bg-background-light/80 dark:bg-background-dark/80 text-background-dark dark:text-background-light font-medium flex items-center justify-center gap-3 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300 backdrop-blur-sm border border-background-dark/10 dark:border-background-light/10">
//             <FcGoogle className="w-5 h-5" />
//             Sign in with Google
//           </button>
//           <button className="w-full h-12 rounded-lg bg-background-light/80 dark:bg-background-dark/80 text-background-dark dark:text-background-light font-medium flex items-center justify-center gap-3 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300 backdrop-blur-sm border border-background-dark/10 dark:border-background-light/10">
//             <span className="material-symbols-outlined">sms</span>
//             Sign in with Phone OTP
//           </button>
//         </div>

//         {/* Terms */}
//         <p className="text-xs text-background-dark/50 dark:text-background-light/50 mt-8">
//           By creating an account, you agree to our{" "}
//           <a href="#" className="underline hover:text-primary">
//             Terms of Service
//           </a>
//           .
//         </p>

//         {/* Link to Login */}
//         <p className="mt-4 text-sm text-background-dark/70 dark:text-background-light/70">
//           Already have an account?{" "}
//           <button
//             onClick={() => navigate("/login")}
//             className="text-primary font-medium underline"
//           >
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   MdEmail,
//   MdLockOutline,
//   MdVisibility,
//   MdVisibilityOff,
//   MdPerson,
//   MdPhone,
// } from "react-icons/md";
// import { FcGoogle } from "react-icons/fc";
// import { FaCommentDots } from "react-icons/fa";

// export default function SignUp() {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center font-sans p-4 relative overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-400 via-blue-500 to-yellow-300"></div>

//       {/* Main Container with Frosted Glass Effect */}
//       <div className="relative z-10 w-full max-w-sm text-center rounded-3xl overflow-hidden shadow-2xl backdrop-filter backdrop-blur-3xl bg-white bg-opacity-20 border border-white border-opacity-30">
//         {/* Top Header */}
//         <div className="w-full bg-gray-200 text-sm font-semibold text-gray-600 py-2 text-center">
//           Signup / Create Account Page
//         </div>

//         <div className="p-8">
//           {/* Header */}
//           <div className="mb-8">
//             <div className="waving-hand text-6xl">👋</div>
//             <h1 className="text-3xl font-bold text-gray-800 mt-2">
//               Welcome to SafeBuy AI
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Create your account to get started.
//             </p>
//           </div>

//           {/* Form */}
//           <form className="space-y-4">
//             {/* Name */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full h-14 pl-12 pr-4 rounded-lg bg-white bg-opacity-50 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//               />
//               <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full h-14 pl-12 pr-4 rounded-lg bg-white bg-opacity-50 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//               />
//               <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//             </div>

//             {/* Phone */}
//             <div className="relative">
//               <input
//                 type="tel"
//                 placeholder="Phone number"
//                 className="w-full h-14 pl-12 pr-4 rounded-lg bg-white bg-opacity-50 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//               />
//               <MdPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full h-14 pl-12 pr-12 rounded-lg bg-white bg-opacity-50 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//               />
//               <MdLockOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
//               >
//                 {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//               </button>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full h-14 rounded-lg bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-colors duration-300 shadow-lg shadow-green-500/30"
//             >
//               Create Account
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="relative flex items-center justify-center my-6">
//             <div className="absolute inset-x-0 h-px bg-gray-300"></div>
//             <span className="relative px-2 bg-white text-sm text-gray-500">
//               OR
//             </span>
//           </div>

//           {/* Social logins */}
//           <div className="space-y-3">
//             <button className="w-full h-12 rounded-lg bg-white bg-opacity-50 text-gray-700 font-medium flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors duration-300 border border-gray-300">
//               <FcGoogle className="w-5 h-5" />
//               Sign in with Google
//             </button>
//             <button className="w-full h-12 rounded-lg bg-white bg-opacity-50 text-gray-700 font-medium flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors duration-300 border border-gray-300">
//               <FaCommentDots className="w-5 h-5 text-gray-700" />
//               Sign in with Phone OTP
//             </button>
//           </div>

//           {/* Terms */}
//           <p className="text-xs text-gray-500 mt-8">
//             By creating an account, you agree to our{" "}
//             <a href="#" className="underline text-gray-500 hover:text-blue-500 transition-colors duration-300">
//               Terms of Service.
//             </a>
//           </p>

//           {/* Link to Login */}
//           <p className="mt-4 text-sm text-gray-600">
//             Already have an account?{" "}
//             <button
//               onClick={() => navigate("/login")}
//               className="text-gray-800 font-medium underline"
//             >
//               Login
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdEmail,
  MdLockOutline,
  MdVisibility,
  MdVisibilityOff,
  MdPerson,
  MdPhone,
} from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaCommentDots } from "react-icons/fa";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans p-4 relative overflow-hidden">
      {/* Subtle Background Gradient - Adjusted for pastel tones */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100"></div>

      {/* Main Container with Frosted Glass Effect */}
      <div className="relative z-10 w-full max-w-sm text-center rounded-3xl overflow-hidden shadow-2xl backdrop-filter backdrop-blur-3xl bg-white bg-opacity-20 border border-white border-opacity-30">
        {/* Top Header */}
        <div className="w-full bg-gray-100 text-sm font-semibold text-gray-500 py-2 text-center border-b border-white border-opacity-30">
          Signup / Create Account Page
        </div>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="waving-hand text-6xl">👋</div>
            <h1 className="text-3xl font-bold text-gray-700 mt-2">
              Welcome to SafeBuy AI
            </h1>
            <p className="text-gray-500 mt-2">
              Create your account to get started.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-14 pl-12 pr-4 rounded-lg bg-white bg-opacity-50 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              />
              <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-14 pl-12 pr-4 rounded-lg bg-white bg-opacity-50 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              />
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full h-14 pl-12 pr-4 rounded-lg bg-white bg-opacity-50 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              />
              <MdPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-14 pl-12 pr-12 rounded-lg bg-white bg-opacity-50 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              />
              <MdLockOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-14 rounded-lg bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-colors duration-300 shadow-lg shadow-green-500/30"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-x-0 h-px bg-gray-300"></div>
            <span className="relative px-2 bg-white text-sm text-gray-500">
              OR
            </span>
          </div>

          {/* Social logins */}
          <div className="space-y-3">
            <button className="w-full h-12 rounded-lg bg-white bg-opacity-50 text-gray-600 font-medium flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <FcGoogle className="w-5 h-5" />
              Sign in with Google
            </button>
            <button className="w-full h-12 rounded-lg bg-white bg-opacity-50 text-gray-600 font-medium flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <FaCommentDots className="w-5 h-5 text-gray-600" />
              Sign in with Phone OTP
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 mt-8">
            By creating an account, you agree to our{" "}
            <a href="#" className="underline text-gray-500 hover:text-blue-500 transition-colors duration-300">
              Terms of Service.
            </a>
          </p>

          {/* Link to Login */}
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-gray-700 font-medium underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}