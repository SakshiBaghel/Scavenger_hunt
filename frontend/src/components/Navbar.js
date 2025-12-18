// // // import React,{useContext} from 'react'
// // // import { useNavigate } from 'react-router-dom'
// // // import { AppContext } from '../context/AppContext'
// // // import axios from 'axios'
// // // import { toast } from 'react-toastify'



// // // const  Navbar=()=> {
// // //     const navigate =useNavigate()
// // //     const {userData,backendUrl,setUserData,setIsLoggedin}=useContext(AppContext);


// // //     const sendVerificationOtp = async () => {
// // //         try{
// // //             axios.defaults.withCredentials = true;

// // //             const {data}=await axios.post(backendUrl+'/api/auth/send-verify-otp');
// // //             if(data.success){
// // //                 navigate('/email-verify')
// // //                 toast.success(data.message)
// // //             }
// // //             else{
// // //                 toast.error(data.message)
// // //             }

// // //         }catch(error){
// // //             toast.error(error.message)

// // //         }


// // //     }
    
// // //     const logout = async () => {
// // //         try {
// // //             axios.defaults.withCredentials = true;
// // //             const response = await axios.post(backendUrl + '/api/auth/logout');
    
// // //             console.log("Logout Response:", response.data); // Log response
    
// // //             if (response.data.success) {
// // //                 setIsLoggedin(false);
// // //                 setUserData(null);
// // //                 navigate('/');
// // //             } else {
// // //                 toast.error("Logout failed: " + (response.data.message || "Unknown error"));
// // //             }
// // //         } catch (error) {
// // //             console.error("Logout Error:", error);
// // //             toast.error(error.response?.data?.message || "Logout request failed");
// // //         }
// // //     };
    
// // //   return (
// // //     <div>
// // //         {/* <img src="" alt="" /> */}

// // //         {userData?<div>
// // //             {userData.name[0].toUpperCase()}
// // //             <div>
// // //                 <ul>
// // //                     {!userData.isAccountVerified && <li onClick={sendVerificationOtp}>Verify Email</li>}
                    
// // //                     <li onClick={logout}>Logout</li>
// // //                 </ul>

// // //             </div>
// // //         </div>:<button onClick={()=>navigate('/login')}>Login</button>
// // //     }

// // //     </div>
// // //   )
// // // }

// // // export default Navbar


// // import React, { useContext, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { AppContext } from '../context/AppContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const { userData, backendUrl, setUserData, setIsLoggedin } =
// //     useContext(AppContext);

// //   const [open, setOpen] = useState(false);

// //   const sendVerificationOtp = async () => {
// //     try {
// //       axios.defaults.withCredentials = true;
// //       const { data } = await axios.post(
// //         backendUrl + '/api/auth/send-verify-otp'
// //       );

// //       if (data.success) {
// //         navigate('/email-verify');
// //         toast.success(data.message);
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       axios.defaults.withCredentials = true;
// //       const { data } = await axios.post(backendUrl + '/api/auth/logout');

// //       if (data.success) {
// //         setIsLoggedin(false);
// //         setUserData(null);
// //         navigate('/');
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Logout failed');
// //     }
// //   };

// //   return (
   
// //     <nav className="bg-[#9112BC] px-6 py-4 flex justify-between items-center shadow-lg">
// //   {/* Logo */}
// //   <h1
// //     onClick={() => navigate('/')}
// //     className="text-2xl font-bold text-white cursor-pointer tracking-wide"
// //   >
// //     Scavenger Hunt
// //   </h1>

// //   {/* Right Section */}
// //   {userData ? (
// //     <div className="relative">
// //       {/* Avatar */}
// //       <div
// //         onClick={() => setOpen(!open)}
// //         className="w-10 h-10 rounded-full bg-[#FFFCB8] text-[#9112BC]
// //                    flex items-center justify-center font-bold cursor-pointer
// //                    hover:scale-105 transition"
// //       >
// //         {userData.name[0].toUpperCase()}
// //       </div>

// //       {/* Dropdown */}
// //       {open && (
// //         <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg">
// //           <ul className="text-sm text-gray-700">
// //             {!userData.isAccountVerified && (
// //               <li
// //                 onClick={sendVerificationOtp}
// //                 className="px-4 py-2 hover:bg-[#F3E8FF] cursor-pointer"
// //               >
// //                 Verify Email
// //               </li>
// //             )}
// //             <li
// //               onClick={logout}
// //               className="px-4 py-2 hover:bg-red-100 cursor-pointer text-red-600"
// //             >
// //               Logout
// //             </li>
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   ) : (
// //     <button
// //       onClick={() => navigate('/login')}
// //       className="bg-[#FFFCB8] text-[#9112BC] px-6 py-2 rounded-xl
// //                  font-semibold hover:bg-[#E9E294] transition"
// //     >
// //       Login
// //     </button>
// //   )}
// // </nav>

// //   );
// // };

// // export default Navbar;



// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { userData, backendUrl, setUserData, setIsLoggedin, isLoggedin } =
//     useContext(AppContext);

//   const [open, setOpen] = useState(false);

//   const sendVerificationOtp = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(
//         backendUrl + '/api/auth/send-verify-otp'
//       );

//       if (data.success) {
//         navigate('/email-verify');
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const logout = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(backendUrl + '/api/auth/logout');

//       if (data.success) {
//         setIsLoggedin(false);
//         setUserData(null);
//         navigate('/');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Logout failed');
//     }
//   };

//   const handleDashboardClick = () => {
//     if (isLoggedin) navigate('/dashboard');
//     else navigate('/login');
//   };

//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//         aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };


//   return (
//     <nav className="bg-[#9112BC] px-10 py-4 flex items-center shadow-lg">
      
//       {/* Logo - Left */}
//       <h1
//         onClick={() => navigate('/')}
//         className="text-2xl font-bold text-white cursor-pointer tracking-wide"
//       >
//         Scavenger Hunt
//       </h1>

//       {/* Right Side */}
//       <div className="ml-auto flex items-center gap-10">
        
//         {/* Nav Links */}
//         <ul className="hidden md:flex gap-8 text-white font-medium">
//           <li
//             onClick={() => navigate('/')}
//             className="cursor-pointer hover:text-[#FFFCB8] transition"
//           >
//             Home
//           </li>
//           <li
//             onClick={() => navigate('/about')}
//             className="cursor-pointer hover:text-[#FFFCB8] transition"
//           >
//             About Us
//           </li>
//           <li
//             onClick={handleDashboardClick}
//             className="cursor-pointer hover:text-[#FFFCB8] transition"
//           >
//             Dashboard
//           </li>
//         </ul>

//         {/* Profile / Login */}
//         {userData ? (
//           <div className="relative">
//             <div
//               onClick={() => setOpen(!open)}
//               className="w-10 h-10 rounded-full bg-[#FFFCB8] text-[#9112BC]
//                          flex items-center justify-center font-bold cursor-pointer
//                          hover:scale-105 transition"
//             >
//               {userData.name[0].toUpperCase()}
//             </div>

//             {open && (
//               <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg">
//                 <ul className="text-sm text-gray-700">
//                   {!userData.isAccountVerified && (
//                     <li
//                       onClick={sendVerificationOtp}
//                       className="px-4 py-2 hover:bg-[#F3E8FF] cursor-pointer"
//                     >
//                       Verify Email
//                     </li>
//                   )}
//                   <li
//                     onClick={logout}
//                     className="px-4 py-2 hover:bg-red-100 cursor-pointer text-red-600"
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate('/login')}
//             className="bg-[#FFFCB8] text-[#9112BC] px-6 py-2 rounded-xl
//                        font-semibold hover:bg-[#E9E294] transition"
//           >
//             Login
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    userData,
    backendUrl,
    setUserData,
    setIsLoggedin,
    isLoggedin,
  } = useContext(AppContext);

  const [open, setOpen] = useState(false);

  // Send email verification OTP
  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        `${backendUrl}/api/auth/send-verify-otp`
      );

      if (data.success) {
        navigate('/email-verify');
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Logout
  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);

      if (data.success) {
        setIsLoggedin(false);
        setUserData(null);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  };

  // Dashboard (auth protected)
  const handleDashboardClick = () => {
    if (isLoggedin) navigate('/dashboard');
    else navigate('/login');
  };

  // About Us scroll (works from any page)
  const handleAboutClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'about' } });
    } else {
      const section = document.getElementById('about');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#9112BC] px-10 py-4 flex items-center shadow-lg">
      
      {/* Logo - Left */}
      <h1
        onClick={() => navigate('/')}
        className="text-2xl font-bold text-white cursor-pointer tracking-wide"
      >
        Scavenger Hunt
      </h1>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-10">
        
        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li
            onClick={() => navigate('/')}
            className="cursor-pointer hover:text-[#FFFCB8] transition"
          >
            Home
          </li>

          <li
            onClick={handleAboutClick}
            className="cursor-pointer hover:text-[#FFFCB8] transition"
          >
            About Us
          </li>

          <li
            onClick={handleDashboardClick}
            className="cursor-pointer hover:text-[#FFFCB8] transition"
          >
            Dashboard
          </li>
        </ul>

        {/* Profile / Login */}
        {userData ? (
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-[#FFFCB8] text-[#9112BC]
                         flex items-center justify-center font-bold cursor-pointer
                         hover:scale-105 transition"
            >
              {userData.name[0].toUpperCase()}
            </div>

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg">
                <ul className="text-sm text-gray-700">
                  {!userData.isAccountVerified && (
                    <li
                      onClick={sendVerificationOtp}
                      className="px-4 py-2 hover:bg-[#F3E8FF] cursor-pointer"
                    >
                      Verify Email
                    </li>
                  )}
                  <li
                    onClick={logout}
                    className="px-4 py-2 hover:bg-red-100 cursor-pointer text-red-600"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-[#FFFCB8] text-[#9112BC] px-6 py-2 rounded-xl
                       font-semibold hover:bg-[#E9E294] transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
