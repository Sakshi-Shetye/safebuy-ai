import React from "react";
import { MdPhoneIphone, MdEmail } from "react-icons/md";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 via-green-100 to-green-50 relative overflow-hidden p-4">
      {/* Floating decorative emojis (background layer) */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <div className="absolute top-6 left-6 text-4xl float">🍎</div>
        <div className="absolute top-14 right-8 text-3xl float float-delay-1">🧴</div>
        <div className="absolute top-36 left-8 text-3xl float float-delay-2">🍫</div>
        <div className="absolute bottom-28 right-12 text-4xl float float-delay-3">🥤</div>
        <div className="absolute bottom-14 left-6 text-3xl float float-delay-1">🧇</div>
        <div className="absolute top-60 right-6 text-3xl float">💄</div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl py-8 px-6 text-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="SafeBuy AI Logo"
          className="w-28 h-28 mx-auto mb-4"
          onError={(e) => {
            // graceful placeholder if logo missing
            e.currentTarget.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='100%25' height='100%25' fill='%23f3f7f3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Space Grotesk,Arial' font-size='20' fill='%23102310'%3ESafeBuy%3C/text%3E%3C/svg%3E";
          }}
        />

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#102210] leading-tight">
          Welcome to SafeBuy AI
        </h1>
        <p className="mt-2 mb-6 text-sm text-[#102210]/70">
          Make Smart Choices Before You Buy!
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-primary py-3 px-4 rounded-xl shadow-md hover:opacity-95 transition font-semibold text-[#071707]"
          >
            <MdEmail className="text-lg" />
            <span>Sign in with Google</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-primary/20 py-3 px-4 rounded-xl shadow-sm hover:bg-primary/30 transition font-semibold text-[#102210]"
          >
            <MdPhoneIphone className="text-lg" />
            <span>Sign in with Phone OTP</span>
          </button>
        </div>
      </div>

      {/* Footer text */}
      <footer className="absolute bottom-6 left-0 right-0 z-10 text-center">
        <p className="text-xs text-[#102210]/60">Your AI-powered shopping assistant</p>
      </footer>
    </div>
  );
}
