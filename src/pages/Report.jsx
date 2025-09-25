import React, { useState } from "react";
import Footer from "../components/Footer"; // Make sure Footer.jsx exists

const ReportCard = ({ title, rating, imageUrl, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center bg-white p-4 rounded-xl mb-4 shadow-md transition-transform duration-200 transform hover:-translate-y-1 cursor-pointer"
  >
    <div className="flex-grow">
      <div className="text-sm text-green-500 font-medium">SafeBuy AI</div>
      <div className="text-base font-semibold text-gray-800">{title}</div>
      <div className="flex items-center text-gray-500 text-sm mt-1">
        <svg
          className="w-4 h-4 text-yellow-400 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        {rating}
      </div>
    </div>
    <img
      src={imageUrl}
      alt={title}
      className="w-20 h-20 object-cover rounded-xl ml-4 shadow-sm"
    />
  </div>
);

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const reportsData = [
    {
      title: "Organic Apple Cider Vinegar",
      rating: 4.5,
      imageUrl: "https://placehold.co/80x80/ffe4b5/000?text=Vinegar",
      details: "Full analysis for Organic Apple Cider Vinegar...",
    },
    {
      title: "Natural Lavender Shampoo",
      rating: 3.8,
      imageUrl: "https://placehold.co/80x80/e6e6fa/000?text=Shampoo",
      details: "Full analysis for Natural Lavender Shampoo...",
    },
    {
      title: "Aloe Vera Moisturizing Cream",
      rating: 4.2,
      imageUrl: "https://placehold.co/80x80/e0f0e0/000?text=Cream",
      details: "Full analysis for Aloe Vera Moisturizing Cream...",
    },
    {
      title: "Gluten-Free Multigrain Bread",
      rating: 4.9,
      imageUrl: "https://placehold.co/80x80/d2b48c/000?text=Bread",
      details: "Full analysis for Gluten-Free Multigrain Bread...",
    },
    {
      title: "Sensitive Skin Sunscreen SPF 50",
      rating: 4.6,
      imageUrl: "https://placehold.co/80x80/ffd700/000?text=Sunscreen",
      details: "Full analysis for Sensitive Skin Sunscreen SPF 50...",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-display bg-green-50 p-4">
      <div className="flex flex-col flex-grow w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-center p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-green-800">Reports</h1>
        </div>

        {/* Report Cards / Details */}
        <div className="flex-grow overflow-y-auto px-6 py-4">
          {!selectedReport &&
            reportsData.map((report, index) => (
              <ReportCard
                key={index}
                {...report}
                onClick={() => setSelectedReport(report)}
              />
            ))}

          {selectedReport && (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {selectedReport.title}
              </h2>
              <p className="text-gray-600 mb-6">{selectedReport.details}</p>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                onClick={() => setSelectedReport(null)}
              >
                Back
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0">
          <Footer bgColor="bg-green-100" />
        </div>
      </div>
    </div>
  );
};

export default Reports;
