// // import React from 'react'
// // import Navbar from '../components/Navbar'
// // // import Footer from '../components/Footer'
// // // import Navbar from '../components/Navbar'
// // import Footer from '../components/Footer'
// // // import Signup from '../components/Signup'

// // // function Homepage() {
// // //   return (
// // //     <div>
// // //       <Navbar/>
// // //       {/* <Signup/> */}
// // //       <h2>Home</h2>
// // //       <Footer/>
// // //     </div>
// // //   )
// // // }

// // // export default Homepage
// // // import React from "react";
// // import { Link } from "react-router-dom";

// // const Home = () => {
// //   const buttonStyle = {
// //     padding: "12px 24px",
// //     margin: "10px",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //     borderRadius: "5px",
// //     border: "1px solid #333",
// //     backgroundColor: "#f0f0f0",
// //     textDecoration: "none",
// //     color: "black",
// //     display: "inline-block",
// //     width: "150px",
// //     textAlign: "center",
// //   };

// //   return (
// //     <div
// //       style={{
// //         maxWidth: 400,
// //         margin: "50px auto",
// //         textAlign: "center",
// //         fontFamily: "Arial, sans-serif",
// //       }}
// //     >
// //       <h1>Welcome to the Hunt App</h1>

// //       <Link to="/CreateHunt" style={buttonStyle}>
// //         Create Hunt
// //       </Link>

// //       <Link to="/LiveHunt" style={buttonStyle}>
// //         Live Hunt
// //       </Link>

// //       <Link to="/UpcomingHunt" style={buttonStyle}>
// //         Upcoming Hunt
// //       </Link>

// //       {/* 
// //         Note: Your YourHunt route expects a userId param:
// //         /YourHunt/:userId
// //         So replace "user123" below with dynamic user id from your auth/state
// //       */}
// //       <Link to="/YourHunt/user123" style={buttonStyle}>
// //         Your Hunt
// //       </Link>

// //       <Link to="/login" style={buttonStyle}>
// //         Login
// //       </Link>
// //     </div>
// //   );
// // };

// // export default Home;
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import LayoutWrapper from '../components/LayoutWrapper';
// // const Home = () => {
// //   return (
// //     <LayoutWrapper>
// //     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8 text-gray-700">
// //       <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Welcome to Scavenger Hunt</h1>
// //       <p className="text-lg max-w-xl mb-10 text-center">
// //         Explore upcoming hunts, create your own, join live hunts, and check your submissions—all in one place.
// //       </p>

// //       <div className="flex flex-col space-y-4 w-full max-w-sm">
// //         <Link
// //           to="/login"
// //           className="block px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-center font-medium hover:bg-gray-100 transition"
// //         >
// //           Login
// //         </Link>

// //         <Link
// //           to="/CreateHunt"
// //           className="block px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-center font-medium hover:bg-gray-100 transition"
// //         >
// //           Create Hunt
// //         </Link>

// //         <Link
// //           to="/LiveHunt"
// //           className="block px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-center font-medium hover:bg-gray-100 transition"
// //         >
// //           Live Hunt
// //         </Link>

// //         <Link
// //           to="/UpcomingHunt"
// //           className="block px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-center font-medium hover:bg-gray-100 transition"
// //         >
// //           Upcoming Hunt
// //         </Link>

// //         <Link
// //           to="/YourHunt/yourUserId"
// //           className="block px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-center font-medium hover:bg-gray-100 transition"
// //         >
// //           Your Hunt
// //         </Link>
// //       </div>
// //     </div>
// //     </LayoutWrapper>
// //   );
// // };

// // export default Home;
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { FaMapMarkedAlt, FaCompass, FaCrosshairs, FaUser, FaBinoculars } from 'react-icons/fa';
// // import { motion } from 'framer-motion';
// // import { FaBoxes } from 'react-icons/fa'; // Example: replace with FaBoxes


// // export const Home = () => {
// //   return (
// //     <div className="flex min-h-screen w-full bg-gradient-to-br from-lime-500 via-green-500 to-emerald-400">
// //       {/* Sidebar */}
// //       <div className="w-64 bg-green-900 text-white flex flex-col p-4 space-y-4 shadow-xl">
// //         <h2 className=" font-bold mb-4 border-b pb-2 text-3xl ">Scavenger Hunt</h2>
// //         <Link to="/login" className="hover:bg-green-700 rounded p-2 transition text-2xl font-bold font-orbitron">Login</Link>
// //         <Link to="/CreateHunt" className="hover:bg-green-700 rounded p-2 transition text-2xl font-bold font-orbitron">Create Hunt</Link>
// //         <Link to="/LiveHunt" className="hover:bg-green-700 rounded p-2 transition text-2xl font-bold font-orbitron">Live Hunt</Link>
// //         <Link to="/UpcomingHunt" className="hover:bg-green-700 rounded p-2 transition text-2xl font-bold font-orbitron">Upcoming Hunt</Link>
// //         <Link to="/YourHunt/yourUserId" className="hover:bg-green-700 rounded p-2 transition text-2xl font-bold font-press">Your Hunt</Link>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-1 flex justify-center items-center p-10">
// //         <motion.div 
// //           initial={{ opacity: 0, scale: 0.9 }} 
// //           animate={{ opacity: 1, scale: 1 }} 
// //           transition={{ duration: 0.6 }}
// //           className="bg-white rounded-2xl shadow-2xl p-10 max-w-4xl w-full text-center"
// //         >
// //           <h1 className="text-4xl font-extrabold text-green-800 mb-4">Scavenger Hunt, <b>Let’s explore the campus!! </b></h1>
// //           <p className="text-gray-600 mb-6 text-lg">
// //             Dive into the ultimate hunting adventure. Create your own hunts, join live events, uncover hidden treasures, and explore thrilling maps!
// //           </p>

// //           <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center mt-6">
// //             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
// //               <FaMapMarkedAlt className="text-green-700 text-5xl mb-2" />
// //               <span className="font-medium">Create Hunt</span>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
// //               <FaCrosshairs className="text-green-700 text-5xl mb-2" />
// //               <span className="font-medium">Join Hunt</span>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
// //               <FaCompass className="text-green-700 text-5xl mb-2" />
// //               <span className="font-medium">Explore Maps</span>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
// //               <FaBoxes  className="text-green-700 text-5xl mb-2" />
// //               <span className="font-medium">Find Treasures</span>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
// //               <FaBinoculars className="text-green-700 text-5xl mb-2" />
// //               <span className="font-medium">Live Challenges</span>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
// //               <FaUser className="text-green-700 text-5xl mb-2" />
// //               <span className="font-medium">Your Profile</span>
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { FaMapMarkedAlt, FaCompass, FaCrosshairs, FaUser, FaBinoculars, FaBoxes } from 'react-icons/fa';
// // import { motion } from 'framer-motion';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaMapMarkedAlt, FaCompass, FaCrosshairs, FaUser, FaBinoculars } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { FaBoxes } from 'react-icons/fa'; 
// export const Home = () => {
//   return (
//     <div className="flex flex-col md:flex-row min-h-screen w-full bg-gradient-to-br from-lime-500 via-green-500 to-emerald-400">
//       {/* Sidebar */}
//       <div className="w-full md:w-64 bg-green-900 text-white flex flex-col p-4 space-y-4 shadow-xl">
//         <h2 className="font-bold mb-4 border-b pb-2 text-2xl md:text-3xl">Scavenger Hunt</h2>
//         <Link to="/login" className="hover:bg-green-700 rounded p-2 transition text-xl md:text-l font-bold font-orbitron">Login</Link>
//         <Link to="/CreateHunt" className="hover:bg-green-700 rounded p-2 transition text-xl md:text-l font-bold font-orbitron">Create Hunt</Link>
//         <Link to="/LiveHunt" className="hover:bg-green-700 rounded p-2 transition text-xl md:text-l font-bold font-orbitron">Live Hunt</Link>
//         <Link to="/UpcomingHunt" className="hover:bg-green-700 rounded p-2 transition text-xl md:text-l font-bold font-orbitron">Upcoming Hunt</Link>
//         <Link to="/YourHunt/yourUserId" className="hover:bg-green-700 rounded p-2 transition text-xl md:text-l font-bold font-press">Your Hunt</Link>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex justify-center items-center p-6 md:p-10">
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-4xl w-full text-center"
//         >
//           <h1 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
//             Scavenger Hunt, <b>Let’s explore the campus!!</b>
//           </h1>
//           <p className="text-gray-600 mb-6 text-base md:text-lg">
//             Dive into the ultimate hunting adventure. Create your own hunts, join live events, uncover hidden treasures, and explore thrilling maps!
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-center mt-4 md:mt-6">
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaMapMarkedAlt className="text-green-700 text-4xl md:text-5xl mb-2" />
//               <span className="font-medium text-sm md:text-base">Create Hunt</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaCrosshairs className="text-green-700 text-4xl md:text-5xl mb-2" />
//               <span className="font-medium text-sm md:text-base">Join Hunt</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaCompass className="text-green-700 text-4xl md:text-5xl mb-2" />
//               <span className="font-medium text-sm md:text-base">Explore Maps</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaBoxes className="text-green-700 text-4xl md:text-5xl mb-2" />
//               <span className="font-medium text-sm md:text-base">Find Treasures</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaBinoculars className="text-green-700 text-4xl md:text-5xl mb-2" />
//               <span className="font-medium text-sm md:text-base">Live Challenges</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaUser className="text-green-700 text-4xl md:text-5xl mb-2" />
//               <span className="font-medium text-sm md:text-base">Your Profile</span>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaMapMarkedAlt, FaCompass, FaCrosshairs, FaUser, FaBinoculars, FaBoxes } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// export const Home = () => {
//   return (
//     <div className="flex flex-col md:flex-row h-screen w-full bg-gradient-to-br from-lime-500 via-green-500 to-emerald-400 overflow-hidden">
//       {/* Sidebar */}
//       <div className="w-full md:w-64 bg-green-900 text-white flex flex-col p-4 space-y-4 shadow-xl flex-shrink-0">
//         <h2 className="font-bold mb-4 border-b pb-2 text-xl md:text-2xl">Scavenger Hunt</h2>
//         <Link to="/login" className="hover:bg-green-700 rounded p-2 transition text-base md:text-lg font-bold font-orbitron">Login</Link>
//         <Link to="/CreateHunt" className="hover:bg-green-700 rounded p-2 transition text-base md:text-lg font-bold font-orbitron">Create Hunt</Link>
//         <Link to="/LiveHunt" className="hover:bg-green-700 rounded p-2 transition text-base md:text-lg font-bold font-orbitron">Live Hunt</Link>
//         <Link to="/UpcomingHunt" className="hover:bg-green-700 rounded p-2 transition text-base md:text-lg font-bold font-orbitron">Upcoming Hunt</Link>
//         <Link to="/YourHunt/yourUserId" className="hover:bg-green-700 rounded p-2 transition text-base md:text-lg font-bold font-press">Your Hunt</Link>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex justify-center items-center p-4 md:p-6 overflow-auto">
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4 md:p-8 text-center"
//         >
//           <h1 className="text-2xl md:text-3xl font-extrabold text-green-800 mb-4">
//             Scavenger Hunt, <b>Let’s explore the campus!!</b>
//           </h1>
//           <p className="text-gray-600 mb-6 text-sm md:text-base">
//             Dive into the ultimate hunting adventure. Create your own hunts, join live events, uncover hidden treasures, and explore thrilling maps!
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-center mt-4">
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaMapMarkedAlt className="text-green-700" size={24} />
//               <span className="font-medium text-xs md:text-sm">Create Hunt</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaCrosshairs className="text-green-700" size={24} />
//               <span className="font-medium text-xs md:text-sm">Join Hunt</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaCompass className="text-green-700" size={24} />
//               <span className="font-medium text-xs md:text-sm">Explore Maps</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaBoxes className="text-green-700" size={24} />
//               <span className="font-medium text-xs md:text-sm">Find Treasures</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaBinoculars className="text-green-700" size={24} />
//               <span className="font-medium text-xs md:text-sm">Live Challenges</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
//               <FaUser className="text-green-700" size={24} />
//               <span className="font-medium text-xs md:text-sm">Your Profile</span>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaCompass, FaCrosshairs, FaUser, FaBinoculars, FaBoxes } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row bg-no-repeat bg-cover bg-center min-h-screen w-full bg-lime " style={{ backgroundImage: "url('/images/G1.jpeg')" }}>
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-green-900 text-white flex flex-col p-4 space-y-4 shadow-xl">
        <h2 className="font-bold mb-4 border-b pb-2 text-2xl md:text-3xl">Scavenger Hunt</h2>
        <Link to="/login" className="hover:bg-green-700 rounded p-2 transition text-lg font-bold">SignUp</Link>
        <Link to="/CreateHunt" className="hover:bg-green-700 rounded p-2 transition text-lg font-bold">Create Hunt</Link>
        <Link to="/LiveHunt" className="hover:bg-green-700 rounded p-2 transition text-lg font-bold">Live Hunt</Link>
        <Link to="/UpcomingHunt" className="hover:bg-green-700 rounded p-2 transition text-lg font-bold">Upcoming Hunt</Link>
        <Link to="/YourHunt/yourUserId" className="hover:bg-green-700 rounded p-2 transition text-lg font-bold">Your Hunt</Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-4 sm:p-6 md:p-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 md:p-10 max-w-6xl w-full text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
            Scavenger Hunt, <b>Let’s explore the campus!!</b>
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
            Dive into the ultimate hunting adventure. Create your own hunts, join live events, uncover hidden treasures, and explore thrilling maps!
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-center mt-4 md:mt-6">
            {[ 
              { icon: <FaMapMarkedAlt />, label: 'Create Hunt' },
              { icon: <FaCrosshairs />, label: 'Join Hunt' },
              { icon: <FaCompass />, label: 'Explore Maps' },
              { icon: <FaBoxes />, label: 'Find Treasures' },
              { icon: <FaBinoculars />, label: 'Live Challenges' },
              { icon: <FaUser />, label: 'Your Profile' },
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                <div className="text-green-700 text-3xl sm:text-4xl md:text-5xl mb-2">{item.icon}</div>
                <span className="font-medium text-xs sm:text-sm md:text-base">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

