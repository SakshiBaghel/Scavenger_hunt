// // import React, { useContext, useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import App from '../App'
// // import { AppContext } from '../context/AppContext'
// // import axios from 'axios'
// // import { toast } from 'react-toastify'
// // // import '../styles/Login.css'

// // function Login() {

// //   const navigate =useNavigate()
// //   const {backendUrl,setIsLoggedin}=useContext(AppContext)

// //   const [state,setState]=useState("Sign Up")
// //   const [name ,setName]=useState('')
// //   const [email ,setEmail]=useState('')
// //   const [password ,setPassword]=useState('')

// // const onSubmitHandler = async(e)=>{
// //   try{
// //     e.preventDefault();
// //     axios.defaults.withCredentials=true
// //     if(state==='Sign Up'){
// //       const {data}=await axios.post(backendUrl+'/api/auth/register',{name,email,password})
// //       if(data.success){
// //         setIsLoggedin(true)
// //         navigate('/')
// //       }else{
// //         toast.error(data.message)
// //       }

// //     }else{

// //       const {data}=await axios.post(backendUrl+'/api/auth/login',{email,password})
// //       if(data.success){
// //         setIsLoggedin(true)
// //         navigate('/')
// //       }else{
// //         toast.error(data.message)
// //       }



// //     }

// //   }catch(error){
// //     toast.error(error.response?.data?.message || "Something went wrong");  }

// // }

// //   return (
// //     <div>
// //       <h2>{state ==='Sign Up' ?   "Create Account":"Login  " }</h2>
// //       <p>{state ==='Sign Up'?"Create your Account":"Login to your Account !"}</p>
// //       <form onSubmit={onSubmitHandler}>
// //         {state=== 'Sign Up' && (<div>
// //           <img src="" alt="" />
// //           <input onChange={e=>setName(e.target.value)} 
// //           value={name} type="text" 
// //           placeholder="Full Name" required />
// //         </div>)}
        
// //         <div>
// //           <img src="" alt="" />
// //           <input  onChange={e=>setEmail(e.target.value)} 
// //           value={email}
// //           type="email" placeholder="Email id" required />
// //         </div>
// //         <div>
// //           <img src="" alt="" />
// //           <input 
// //            onChange={e=>setPassword(e.target.value)} 
// //            value={password}
          
// //           type="password" placeholder="Password" required />
// //         </div>
// //         <p onClick={()=>navigate('/reset-password')}>Forgot Password ?</p>

// //         <button>{state}</button>
// //       </form>
// //       {state === 'Sign Up' ? ( <p>Already have an account?{" "}
// //         <span onClick={()=>setState('Login')}>Login here</span>

// //       </p>):(<p>Don't have an account?{" "}
// //         <span onClick={()=>setState('Sign Up')} >Sign up</span>

// //       </p>
// // )}
     
      

// //     </div>
// //   )
// // }

// // export default Login
// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function Login() {
//   const navigate = useNavigate();
//   const { backendUrl, setIsLoggedin } = useContext(AppContext);

//   const [mode, setMode] = useState('Sign Up');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       axios.defaults.withCredentials = true;

//       if (mode === 'Sign Up') {
//         const { data } = await axios.post(`${backendUrl}/api/auth/register`, {
//           name,
//           email,
//           password,
//         });
//         if (data.success) {
//           setIsLoggedin(true);
//           navigate('/');
//         } else {
//           toast.error(data.message);
//         }
//       } else {
//         const { data } = await axios.post(`${backendUrl}/api/auth/login`, {
//           email,
//           password,
//         });
//         if (data.success) {
//           setIsLoggedin(true);
//           navigate('/');
//         } else {
//           toast.error(data.message);
//         }
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem' }}>
//       <h2>{mode === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
//       <p>{mode === 'Sign Up' ? 'Create your account' : 'Login to your account'}</p>

//       <form onSubmit={onSubmitHandler}>
//         {mode === 'Sign Up' && (
//           <div style={{ marginBottom: '1rem' }}>
//             <input
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               type="text"
//               placeholder="Full Name"
//               required
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//         )}

//         <div style={{ marginBottom: '1rem' }}>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             type="email"
//             placeholder="Email"
//             required
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>

//         <div style={{ marginBottom: '1rem' }}>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             type="password"
//             placeholder="Password"
//             required
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>

//         <p onClick={() => navigate('/reset-password')} style={{ cursor: 'pointer', color: 'blue' }}>
//           Forgot Password?
//         </p>

//         <button type="submit" style={{ padding: '10px 20px', marginTop: '1rem' }}>
//           {mode}
//         </button>
//       </form>

//       <p style={{ marginTop: '1rem' }}>
//         {mode === 'Sign Up' ? (
//           <>
//             Already have an account?{' '}
//             <span onClick={() => setMode('Login')} style={{ color: 'blue', cursor: 'pointer' }}>
//               Login here
//             </span>
//           </>
//         ) : (
//           <>
//             Don’t have an account?{' '}
//             <span onClick={() => setMode('Sign Up')} style={{ color: 'blue', cursor: 'pointer' }}>
//               Sign up
//             </span>
//           </>
//         )}
//       </p>
//     </div>
//   );
// }

// export default Login;
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

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
        const { data } = await axios.post(backendUrl + '/api/auth/register', { name, email, password });
        if (data.success) {
          setIsLoggedin(true);
          navigate('/');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/auth/login', { email, password });
        if (data.success) {
          setIsLoggedin(true);
          navigate('/');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-lime-500 via-green-500 to-emerald-400">
  //     <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
  //       <h2 className="text-3xl font-bold mb-4 text-center">{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
  //       <p className="text-center mb-6 text-gray-600">{state === 'Sign Up' ? 'Create your Account' : 'Login to your Account!'}</p>
  //       <form onSubmit={onSubmitHandler} className="space-y-5">
  //         {state === 'Sign Up' && (
  //           <input
  //             type="text"
  //             placeholder="Full Name"
  //             required
  //             value={name}
  //             onChange={(e) => setName(e.target.value)}
  //             className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //           />
  //         )}
  //         <input
  //           type="email"
  //           placeholder="Email id"
  //           required
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //         />
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           required
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //         />
  //         <p
  //           onClick={() => navigate('/reset-password')}
  //           className="text-blue-600 cursor-pointer text-right hover:underline"
  //         >
  //           Forgot Password?
  //         </p>
  //         <button
  //           type="submit"
  //           className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
  //         >
  //           {state}
  //         </button>
  //       </form>
  //       <p className="text-center mt-6 text-gray-700">
  //         {state === 'Sign Up' ? (
  //           <>
  //             Already have an account?{' '}
  //             <span onClick={() => setState('Login')} className="text-blue-600 cursor-pointer hover:underline">
  //               Login here
  //             </span>
  //           </>
  //         ) : (
  //           <>
  //             Don't have an account?{' '}
  //             <span onClick={() => setState('Sign Up')} className="text-blue-600 cursor-pointer hover:underline">
  //               Sign up
  //             </span>
  //           </>
  //         )}
  //       </p>
  //     </div>
  //   </div>
  // );
//   return (
//   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-500 via-green-500 to-emerald-400 p-6">
//     <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-10 transform transition hover:scale-105">
//       <h2 className="text-4xl font-extrabold mb-4 text-center text-gray-800">
//         {state === 'Sign Up' ? 'Create Account' : 'Welcome Back!'}
//       </h2>
//       <p className="text-center mb-6 text-gray-600">
//         {state === 'Sign Up' ? 'Let’s get you started' : 'Login to your account'}
//       </p>
//       <form onSubmit={onSubmitHandler} className="space-y-5">
//         {state === 'Sign Up' && (
//           <input
//             type="text"
//             placeholder="Full Name"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm transition"
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm transition"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm transition"
//         />
//         <div className="flex justify-end">
//           <p
//             onClick={() => navigate('/reset-password')}
//             className="text-sm text-emerald-600 cursor-pointer hover:underline transition"
//           >
//             Forgot Password?
//           </p>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-lime-500 to-emerald-400 text-white py-3 rounded-full font-semibold shadow-lg hover:from-emerald-400 hover:to-lime-500 transition"
//         >
//           {state}
//         </button>
//       </form>
//       <p className="text-center mt-6 text-gray-700">
//         {state === 'Sign Up' ? (
//           <>
//             Already have an account?{' '}
//             <span
//               onClick={() => setState('Login')}
//               className="text-emerald-600 cursor-pointer hover:underline transition"
//             >
//               Login here
//             </span>
//           </>
//         ) : (
//           <>
//             Don't have an account?{' '}
//             <span
//               onClick={() => setState('Sign Up')}
//               className="text-emerald-600 cursor-pointer hover:underline transition"
//             >
//               Sign up
//             </span>
//           </>
//         )}
//       </p>
//     </div>
//   </div>
// );

// }

// export default Login;
return (
  <div className="min-h-screen flex items-center justify-center p-4"
  style={{ backgroundImage: "url('/images/G1.jpeg')"}}>
    <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full sm:p-10 p-6 transform transition lg:hover:scale-105">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-gray-800">
        {state === 'Sign Up' ? 'Create Account' : 'Welcome Back!'}
      </h2>
      <p className="text-center mb-6 text-gray-600">
        {state === 'Sign Up' ? 'Let’s get you started' : 'Login to your account'}
      </p>
      <form onSubmit={onSubmitHandler} className="space-y-5">
        {state === 'Sign Up' && (
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm transition"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm transition"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm transition"
        />
        <div className="flex justify-end">
          <p
            onClick={() => navigate('/reset-password')}
            className="text-sm text-emerald-600 cursor-pointer hover:underline transition"
          >
            Forgot Password?
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-lime-500 to-emerald-400 text-white py-3 rounded-full font-semibold shadow-lg hover:from-emerald-400 hover:to-lime-500 transition"
        >
          {state}
        </button>
      </form>
      <p className="text-center mt-6 text-gray-700">
        {state === 'Sign Up' ? (
          <>
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className="text-emerald-600 cursor-pointer hover:underline transition"
            >
              Login here
            </span>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <span
              onClick={() => setState('Sign Up')}
              className="text-emerald-600 cursor-pointer hover:underline transition"
            >
              Sign up
            </span>
          </>
        )}
      </p>
    </div>
  </div>
);
}
export default Login;