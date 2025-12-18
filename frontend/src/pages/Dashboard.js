// // import React from 'react';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';

// // function Dashboard() {
// //   return (
// //     <>
// //       <Navbar />

// //       <div className="min-h-screen bg-[#FFFCB8] flex items-center justify-center">
// //         <h1 className="text-3xl font-bold text-[#9112BC]">
// //           Welcome to Dashboard
// //         </h1>
// //       </div>

// //       <Footer />
// //     </>
// //   );
// // }

// // export default Dashboard;


// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { AppContext } from '../context/AppContext';

// function Dashboard() {
//   const navigate = useNavigate();
//   const { isLoggedin, userData } = useContext(AppContext);

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-[#FFFCB8] flex flex-col items-center justify-center px-4">
//         <h1 className="text-3xl font-bold text-[#9112BC] mb-6">
//           Dashboard
//         </h1>

//         <p className="text-gray-700 mb-8 text-center">
//           Manage your hunts and explore ongoing challenges
//         </p>

//         {/* Buttons Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
//           <button
//             onClick={() => navigate('/CreateHunt')}
//             className="bg-[#9112BC] text-white py-3 rounded-xl font-semibold hover:bg-[#AE75DA] transition"
//           >
//             Create Hunt
//           </button>

//           <button
//             onClick={() => navigate('/LiveHunt')}
//             className="bg-[#AE75DA] text-white py-3 rounded-xl font-semibold hover:bg-[#9112BC] transition"
//           >
//             Live Hunt
//           </button>

//           <button
//             onClick={() => navigate('/UpcomingHunt')}
//             className="bg-[#E9E294] text-[#9112BC] py-3 rounded-xl font-semibold hover:bg-[#AE75DA] hover:text-white transition"
//           >
//             Upcoming Hunt
//           </button>

//           <button
//             onClick={() => navigate('/PrevHunt')}
//             className="bg-[#E9E294] text-[#9112BC] py-3 rounded-xl font-semibold hover:bg-[#AE75DA] hover:text-white transition"
//           >
//             Previous Hunt
//           </button>

//           {isLoggedin && userData?._id && (
//             <button
//               onClick={() => navigate(`/YourHunt/${userData._id}`)}
//               className="sm:col-span-2 bg-[#9112BC] text-white py-3 rounded-xl font-semibold hover:bg-[#AE75DA] transition"
//             >
//               Your Hunt
//             </button>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Dashboard;


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';
import { AppContext } from '../context/AppContext';

function Dashboard() {
  const navigate = useNavigate();
  const { isLoggedin, userData } = useContext(AppContext);

  return (
    <>
      <Navbar />

      {/* <div className="min-h-screen bg-[#FFFCB8] px-8 py-20"> */}
      <div className="min-h-screen bg-[#FFFCB8] px-6 md:px-12 py-16">
  
        {/* Header */}
        <div className="text-center mb-16">
        {/* <div className="max-w-7xl mx-auto mb-14"> */}

          <h1 className="text-4xl font-bold text-[#9112BC]">
            Dashboard
          </h1>
          <p className="mt-4 text-gray-700">
            Manage your hunts and explore activities
          </p>
        </div>

        {/* Cards Grid (6 cards) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <DashboardCard
            title="Create Hunt"
            description="Design a new scavenger hunt by adding clues, rules, and timelines."
            onClick={() => navigate('/CreateHunt')}
          />

          <DashboardCard
            title="Live Hunts"
            description="View and participate in hunts that are currently active."
            onClick={() => navigate('/LiveHunt')}
          />

          <DashboardCard
            title="Upcoming Hunts"
            description="Check hunts scheduled to start soon."
            onClick={() => navigate('/UpcomingHunt')}
          />

          <DashboardCard
            title="Previous Hunts"
            description="Review completed hunts and your performance."
            onClick={() => navigate('/PrevHunt')}
          />

          {isLoggedin && userData?._id ? (
            <DashboardCard
              title="Your Hunts"
              description="Access hunts created or joined by you."
              onClick={() => navigate(`/YourHunt/${userData._id}`)}
            />
          ) : (
            <DashboardCard
              title="Your Hunts"
              description="Login to see hunts associated with your account."
              onClick={() => navigate('/login')}
            />
          )}

          {/* Dummy Card */}
          <DashboardCard
            title="Coming Soon"
            description="New features and improvements will appear here."
            onClick={() => {}}
          />

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
