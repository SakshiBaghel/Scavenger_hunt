import React from 'react';

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen  bg-cover bg-center bg-opacity-5 bg-no-repeat flex items-center justify-center bg-black" style={{ backgroundImage: "url('/images/G1.jpeg')"}
    }>
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        {children}
      </div>
    </div>
  );
}
