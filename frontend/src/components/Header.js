// import React from 'react'

// function Header() {
//   return (
//     <div>
//         <h1>header</h1>

//     </div>
//   )
// }

// export default Headerimport React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// function Navbar() {
//   const { isLoggedIn, setIsLoggedin } = useContext(AppContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsLoggedin(false);
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-purple-600">
//           MyApp
//         </Link>
//         <div className="space-x-4">
//           <Link to="/" className="text-gray-700 hover:text-purple-500">
//             Home
//           </Link>
//           {!isLoggedIn ? (
//             <>
//               <Link to="/login" className="text-gray-700 hover:text-purple-500">
//                 Login
//               </Link>
//               <Link to="/signup" className="text-gray-700 hover:text-purple-500">
//                 Sign Up
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link to="/dashboard" className="text-gray-700 hover:text-purple-500">
//                 Dashboard
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="text-gray-700 hover:text-purple-500"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
