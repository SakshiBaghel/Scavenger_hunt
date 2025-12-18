

// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function Login() {
//   const navigate = useNavigate();
//   const { backendUrl, setIsLoggedin } = useContext(AppContext);

//   const [state, setState] = useState('Sign Up');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       axios.defaults.withCredentials = true;

//       if (state === 'Sign Up') {
//         const { data } = await axios.post(backendUrl + '/api/auth/register', {
//           name,
//           email,
//           password,
//         });
//         if (data.success) {
//           setIsLoggedin(true);
//           navigate('/');
//         } else toast.error(data.message);
//       } else {
//         const { data } = await axios.post(backendUrl + '/api/auth/login', {
//           email,
//           password,
//         });
//         if (data.success) {
//           setIsLoggedin(true);
//           navigate('/');
//         } else toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8] px-4">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-[#9112BC] text-center">
//           {state === 'Sign Up' ? 'Create Account' : 'Login'}
//         </h2>
//         <p className="text-center text-gray-600">
//           {state === 'Sign Up'
//             ? 'Create your account'
//             : 'Login to your account'}
//         </p>

//         <form className="space-y-4" onSubmit={onSubmitHandler} autoComplete="off">
//           {state === 'Sign Up' && (
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               autoComplete="off"
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AE75DA]"
//             />
//           )}

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             autoComplete="off"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AE75DA]"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             autoComplete="new-password"
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AE75DA]"
//           />

//           <p
//             onClick={() => navigate('/reset-password')}
//             className="text-sm text-[#9112BC] text-right cursor-pointer hover:underline"
//           >
//             Forgot Password?
//           </p>

//           <button
//             type="submit"
//             className="w-full bg-[#9112BC] text-white py-3 rounded-xl font-semibold hover:bg-[#AE75DA] transition"
//           >
//             {state === 'Sign Up' ? 'Create Account' : 'Login'}
//           </button>
//         </form>

//         <p className="text-center text-gray-700">
//           {state === 'Sign Up' ? (
//             <>
//               Already have an account?{' '}
//               <span
//                 onClick={() => setState('Login')}
//                 className="text-[#9112BC] font-semibold cursor-pointer hover:underline"
//               >
//                 Login here
//               </span>
//             </>
//           ) : (
//             <>
//               Don't have an account?{' '}
//               <span
//                 onClick={() => setState('Sign Up')}
//                 className="text-[#9112BC] font-semibold cursor-pointer hover:underline"
//               >
//                 Sign Up
//               </span>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin } = useContext(AppContext);

  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;

      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/auth/register', {
          name,
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          navigate('/dashboard');
        } else toast.error(data.message);
      } else {
        const { data } = await axios.post(backendUrl + '/api/auth/login', {
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          navigate('/dashboard');
        } else toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8] px-4">
        {/* <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6"> */}
        {/* <div className="max-w-md w-full bg-white rounded-2xl shadow-[0_20px_40px_rgba(145,18,188,0.25)] p-8 space-y-6"> */}
        <div className="max-w-md w-full bg-white rounded-2xl shadow-[0_20px_40px_rgba(145,18,188,0.25)] hover:shadow-[0_30px_60px_rgba(145,18,188,0.35)] transition-all duration-300 p-8 space-y-6">

          <h2 className="text-3xl font-bold text-[#9112BC] text-center">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </h2>

          <p className="text-center text-gray-600">
            {state === 'Sign Up'
              ? 'Create your account'
              : 'Login to your account'}
          </p>

          <form className="space-y-4" onSubmit={onSubmitHandler}>
            {state === 'Sign Up' && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#AE75DA]"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#AE75DA]"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#AE75DA]"
            />

            <p
              onClick={() => navigate('/reset-password')}
              className="text-sm text-[#9112BC] text-right cursor-pointer hover:underline"
            >
              Forgot Password?
            </p>

            <button className="w-full bg-[#9112BC] text-white py-3 rounded-xl font-semibold hover:bg-[#AE75DA]">
              {state === 'Sign Up' ? 'Create Account' : 'Login'}
            </button>
          </form>

          <p className="text-center text-gray-700">
            {state === 'Sign Up' ? (
              <>
                Already have an account?{' '}
                <span
                  onClick={() => setState('Login')}
                  className="text-[#9112BC] font-semibold cursor-pointer"
                >
                  Login here
                </span>
              </>
            ) : (
              <>
                Don’t have an account?{' '}
                <span
                  onClick={() => setState('Sign Up')}
                  className="text-[#9112BC] font-semibold cursor-pointer"
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
