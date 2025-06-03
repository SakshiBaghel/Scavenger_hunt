// // import React,{useContext} from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import { AppContext } from '../context/AppContext'
// // import axios from 'axios'
// // import { toast } from 'react-toastify'



// // const  Navbar=()=> {
// //     const navigate =useNavigate()
// //     const {userData,backendUrl,setUserData,setIsLoggedin}=useContext(AppContext);


// //     const sendVerificationOtp = async () => {
// //         try{
// //             axios.defaults.withCredentials = true;

// //             const {data}=await axios.post(backendUrl+'/api/auth/send-verify-otp');
// //             if(data.success){
// //                 navigate('/email-verify')
// //                 toast.success(data.message)
// //             }
// //             else{
// //                 toast.error(data.message)
// //             }

// //         }catch(error){
// //             toast.error(error.message)

// //         }


// //     }
    


// //     const logout = async () => {
// //         try {
// //             axios.defaults.withCredentials = true;
// //             const response = await axios.post(backendUrl + '/api/auth/logout');
    
// //             console.log("Logout Response:", response.data); // Log response
    
// //             if (response.data.success) {
// //                 setIsLoggedin(false);
// //                 setUserData(null);
// //                 navigate('/');
// //             } else {
// //                 toast.error("Logout failed: " + (response.data.message || "Unknown error"));
// //             }
// //         } catch (error) {
// //             console.error("Logout Error:", error);
// //             toast.error(error.response?.data?.message || "Logout request failed");
// //         }
// //     };
    
// //   return (
// //     <div>
// //         {/* <img src="" alt="" /> */}

// //         {userData?<div>
// //             {userData.name[0].toUpperCase()}
// //             <div>
// //                 <ul>
// //                     {!userData.isAccountVerified && <li onClick={sendVerificationOtp}>Verify Email</li>}
                    
// //                     <li onClick={logout}>Logout</li>
// //                 </ul>

// //             </div>
// //         </div>:<button onClick={()=>navigate('/login')}>Login</button>
// //     }

// //     </div>
// //   )
// // }

// // export default Navbar
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
// import { Link, useNavigate } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';
// import { Menu, X } from 'lucide-react'; // You can replace with any icon lib

// function Navbar() {
//   const { isLoggedIn, setIsLoggedin } = useContext(AppContext);
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     setIsLoggedin(false);
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-green-700 shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl w-full mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-extrabold text-white">
//           ScavengerHunt
//         </Link>

//         {/* Hamburger menu for small screens */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Main links */}
//         <div className={`space-x-6 text-white md:flex ${menuOpen ? 'block mt-4' : 'hidden md:block'}`}>
//           <Link to="/" className="hover:text-yellow-200 block py-1">
//             Home
//           </Link>
//           {!isLoggedIn ? (
//             <>
//               <Link to="/login" className="hover:text-yellow-200 block py-1">
//                 Login
//               </Link>
              
//             </>
//           ) : (
//             <>
//               <Link to="/dashboard" className="hover:text-yellow-200 block py-1">
//                 Dashboard
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="hover:text-yellow-200 block py-1"
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
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Menu, X, Gamepad2 } from 'lucide-react'; // using Gamepad2 icon

function Navbar() {
  const { isLoggedIn, setIsLoggedin } = useContext(AppContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedin(false);
    navigate('/login');
  };

  return (
    <nav className="bg-green-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl w-full mx-auto px-4 py-4 flex justify-between items-center">
        {/* Icon + Title */}
        <Link to="/" className="flex items-center space-x-2 text-white">
          <Gamepad2 size={28} />
          <span className="text-2xl font-extrabold">ScavengerHunt</span>
        </Link>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Main links */}
        <div className={`space-x-6 text-white md:flex ${menuOpen ? 'block mt-4' : 'hidden md:block'}`}>
          <Link to="/" className="hover:text-yellow-200 block py-1">
            Home
          </Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:text-yellow-200 block py-1">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="hover:text-yellow-200 block py-1">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-yellow-200 block py-1"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
