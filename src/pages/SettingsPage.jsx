import React from 'react';

const SettingsPage = () => {
  const accountSettings = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Profile',
      description: 'Update your deets',
      gradient: 'from-green-400 to-blue-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Password',
      description: 'Keep your account secure',
      gradient: 'from-yellow-400 to-orange-500',
    },
  ];

  const preferencesSettings = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Notifications',
      description: 'Pings and dings',
      gradient: 'from-blue-400 to-purple-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002 12c0 2.83 1.044 5.485 2.812 7.426M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3 8c-3.136 0-5.91-.94-8-2.5a13.977 13.977 0 008 2.5c2.09 0 4.864-.94 8-2.5a13.977 13.977 0 00-8 2.5z" />
        </svg>
      ),
      title: 'Privacy',
      description: 'Your data, your rules',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  const supportSettings = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9.247a8.967 8.967 0 011.086-1.515 1.838 1.838 0 112.551 2.551c-.675.675-.919 1.444-.919 2.228v.079m7.456 3.419V19a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6m4 0a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Help Center',
      description: 'Find answers here',
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-6 13h6a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2h6l-2 2" />
        </svg>
      ),
      title: 'Contact Us',
      description: "We're here for you",
      gradient: 'from-pink-400 to-red-500',
    },
  ];

  const SettingCard = ({ icon, title, description, gradient }) => (
    <div className={`flex items-center p-4 mb-3 rounded-xl shadow-md cursor-pointer bg-gradient-to-r ${gradient} text-white`}>
      <div className="flex-shrink-0 p-2 rounded-full bg-white bg-opacity-30 mr-4">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
      <svg className="w-5 h-5 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start font-inter p-4" style={{ background: 'linear-gradient(180deg, #D4EDDA, #F0F7E9)' }}>
      <div className="relative z-10 w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col min-h-[90vh] sm:min-h-[85vh] my-4">

        {/* Header Section */}
        <div className="flex items-center justify-center p-6 relative flex-shrink-0">
          <svg className="absolute left-4 w-6 h-6 text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <h1 className="text-2xl font-bold text-[#102210] leading-tight">Settings</h1>
        </div>

        {/* Settings Content */}
        <div className="flex-grow overflow-y-auto p-4">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">ACCOUNT</h2>
            {accountSettings.map((setting, index) => (
              <SettingCard key={index} {...setting} />
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">PREFERENCES</h2>
            {preferencesSettings.map((setting, index) => (
              <SettingCard key={index} {...setting} />
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">SUPPORT</h2>
            {supportSettings.map((setting, index) => (
              <SettingCard key={index} {...setting} />
            ))}
          </div>

          <button className="w-full bg-red-500 text-white font-semibold py-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300 mt-4">
            Log Out
          </button>
        </div>

        {/* Optional Footer Navigation (if integrated into a full app) */}
        {/*
        <div className="flex justify-around items-center bg-white p-4 rounded-t-3xl shadow-lg relative flex-shrink-0">
          <div className="flex flex-col items-center text-gray-400 text-xs font-medium cursor-pointer">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-400 text-xs font-medium cursor-pointer">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            <span>Categories</span>
          </div>
          <div className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl cursor-pointer shadow-lg transition-transform duration-200 hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 8H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8 17h2v-2H8v2zm0-4h2v-2H8v2zm-2-2h-2v2h2v-2zm-2 2H2v2h2v-2zm14 0h-2v2h2v-2zm2-2h-2v2h2v-2zm-6 4h-2v2h2v-2zm-2 0h-2v2h2v-2zm-4 0H6v2h2v-2zm0-4H6v2h2v-2zm-2 0h-2v2h2v-2zm2-2H2v2h2v-2zm-2-2h-2v2h2v-2z" /></svg>
            </div>
          </div>
          <div className="flex flex-col items-center text-gray-400 text-xs font-medium cursor-pointer">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
            <span>Reports</span>
          </div>
          <div className="flex flex-col items-center text-green-500 text-xs font-medium cursor-pointer">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-.215-.821-.384-1.3-.497C10.05 2.585 9.5 2.5 9 2.5c-.5 0-1.05.085-1.19.173-.479.113-.92.282-1.3.497A4.95 4.95 0 004 7.5a4.95 4.95 0 00-1.19 2.83c.113.479.282.92.497 1.3.215.38.384.821.497 1.3.088.479.173.99.173 1.19 0 .5-.085 1.05-.173 1.19-.113.479-.282.92-.497 1.3A4.95 4.95 0 007.5 20c1.336 0 2.518-.475 3.32-1.19C11.594 18.423 12.034 18.254 12.414 18.04c.38-.215.821-.384 1.3-.497.479-.088.99-.173 1.19-.173.5 0 1.05.085 1.19.173.113.479.282.92.497 1.3a4.95 4.95 0 00-1.19-2.83c-.113-.479-.282-.92-.497-1.3-.215-.38-.384-.821-.497-1.3-.088-.479-.173-.99-.173-1.19 0-.5.085-1.05.173-1.19.113-.479.282-.92.497-1.3A4.95 4.95 0 0015.5 4c-1.336 0-2.518.475-3.32 1.19-.38.38-.82.687-1.3.834a5.2 5.2 0 01-1.19.173zM10 13a3 3 0 110-6 3 3 0 010 6z" clipRule="evenodd" /></svg>
            <span>Settings</span>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default SettingsPage;
