import React from 'react';
const DashboardCard = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        bg-white rounded-3xl p-10 cursor-pointer
        shadow-[0_10px_30px_rgba(0,0,0,0.1)]
        hover:shadow-[0_20px_50px_rgba(145,18,188,0.35)]
        hover:-translate-y-2 transition-all duration-300
        min-h-[280px] flex flex-col justify-between
      "
    >
      <div>
        <h2 className="text-2xl font-bold text-[#9112BC] mb-6">
          {title}
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8">
        <span
          className="
            inline-block px-6 py-3 rounded-xl font-semibold
            bg-[#9112BC] text-white
            hover:bg-[#AE75DA] transition-colors duration-300
          "
        >
          Explore
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;
