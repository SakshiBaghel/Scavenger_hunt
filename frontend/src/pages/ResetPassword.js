// import React, { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { set } from 'mongoose'

// const  ResetPassword=()=> {
//   const {backendUrl}=useContext(AppContext);
//   axios.defaults.withCredentials=true;
//   const navigate=useNavigate();
//   const inputRefs = React.useRef([]);
  
//   const [email,setEmail]=useState('');
//   const [newPassword,setNewPassword]=useState('');
//   const [isEmailSent,setIsEmailSent]=useState(false);
//   const [otp,setOtp]=useState(0);
//   const [isOtpSubmitted,setIsOtpSubmitted]=useState(false);

//   const handleInput=(e,index)=>{
//     if(e.target.value.length>0 && index!==inputRefs.current.length-1){
//       inputRefs.current[index+1].focus();
//     }
//   }

//   const handleKeyDown=(e,index)=>{
//     if(e.key==='Backspace' && index>0 && e.target.value===''){
//       inputRefs.current[index-1].focus();
//     }
//   }

//   const handlePaste=(e)=>{
//     const paste=e.clipboardData.getData('text');
//     const pasteArray=paste.split('');
//     pasteArray.forEach((data,index)=>{
//       if(inputRefs.current[index]){
//       inputRefs.current[index].value=data;
//       }
//     })
    

//   }

//   const onSubmitEmail=async (e)=>{
//     e.preventDefault();
//     try{
//       console.log("backendUrl:", backendUrl);

//       const {data}=await axios.post(backendUrl+'/api/auth/send-reset-otp',{email});
//       data.success?toast.success(data.message):toast.error(data.message);
//       data.success && setIsEmailSent(true);
//       console.log("isEmailSent set to true"); // Debugging


//     }
//     catch(error){
//       toast.error(error.message);
//     }
//   }

//   const onSubmitOtp=async (e)=>{
//     e.preventDefault()
//     const otpArray=inputRefs.current.map(e=>e.value);
//     setOtp(otpArray.join(''));
//     setIsOtpSubmitted(true);
    
//   }


//   const onsubmitNewPassword=async (e)=>{
//     e.preventDefault()
//     try{
//       const {data}=await axios.post(backendUrl+'/api/auth/reset-password',{email,newPassword,otp});
//       data.success?toast.success(data.message):toast.error(data.message);
//       data.success && navigate('/login');

//     }catch(error){
//       toast.error(error.message)
//     }
//   }

//   return (
//     <div>

//       {!isEmailSent && 
//       <form onSubmit={onSubmitEmail}>
//         <h1>Reset Password</h1>
//         <p>Enter your registered email address</p>
//         <div>
//           <input type="email" placeholder="Email id" value={email} onChange={e=>setEmail(e.target.value)} required/>
//         </div>
//         <button type="submit">Submit</button>

//       </form>
//   } 

//   {!isOtpSubmitted && isEmailSent && 

//       <form onSubmit={onSubmitOtp}>
//         <h1>Reset Password Otp</h1>
//         <p>Enter the 6-digit code sent to your email id.</p>
//         <div onPaste={handlePaste}>
//           {Array(6).fill(0).map((_,index)=>{
//             return <input type="text" key={index} maxLength="1" 
//             ref={e=>inputRefs.current[index]=e}
//             onInput={(e)=>handleInput(e,index)}
//             onKeyDown={(e)=>handleKeyDown(e,index)}
//             />
            
//           })}
      

//         </div>
//         <button>Submit</button>
//       </form>
// }

//       {/* enter new password form  */}
//       {isOtpSubmitted && isEmailSent &&
//       <form onSubmit={onsubmitNewPassword}>
//         <h1>new Password</h1>
//         <p>Enter the new password below</p>
//         <div>
//           <input type="Password" placeholder="Password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} required/>
//         </div>
//         <button type="submit">Submit</button>

//       </form>
// }
//     </div>
//   )
// }

// export default ResetPassword

import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResetPassword = () => {
  const { backendUrl } = useContext(AppContext);
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const inputRefs = useRef([]);

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  const handleInput = (e, index) => {
    if (e.target.value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    paste.split("").forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/auth/send-reset-otp`,
        { email }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && setIsEmailSent(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    const otpValue = inputRefs.current.map((el) => el.value).join("");
    setOtp(otpValue);
    setIsOtpSubmitted(true);
  };

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/auth/reset-password`,
        { email, newPassword, otp }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border border-gray-200">
          
          {/* EMAIL FORM */}
          {!isEmailSent && (
            <form onSubmit={onSubmitEmail} className="flex flex-col gap-6">
              <h1 className="text-2xl font-bold text-[#9112BC] text-center">
                Reset Password
              </h1>
              <p className="text-sm text-gray-600 text-center">
                Enter your registered email address
              </p>

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9112BC]"
              />

              <button
                type="submit"
                className="bg-[#9112BC] text-white py-3 rounded-xl hover:bg-[#AE75DA] transition"
              >
                Send OTP
              </button>
            </form>
          )}

          {/* OTP FORM */}
          {!isOtpSubmitted && isEmailSent && (
            <form onSubmit={onSubmitOtp} className="flex flex-col gap-6">
              <h1 className="text-2xl font-bold text-[#9112BC] text-center">
                Enter OTP
              </h1>
              <p className="text-sm text-gray-600 text-center">
                Enter the 6-digit code sent to your email
              </p>

              <div
                className="flex justify-between gap-2"
                onPaste={handlePaste}
              >
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[index] = el)}
                      onInput={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 text-center text-lg font-bold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9112BC]"
                    />
                  ))}
              </div>

              <button
                type="submit"
                className="bg-[#9112BC] text-white py-3 rounded-xl hover:bg-[#AE75DA] transition"
              >
                Verify OTP
              </button>
            </form>
          )}

          {/* NEW PASSWORD FORM */}
          {isOtpSubmitted && isEmailSent && (
            <form onSubmit={onSubmitNewPassword} className="flex flex-col gap-6">
              <h1 className="text-2xl font-bold text-[#9112BC] text-center">
                New Password
              </h1>
              <p className="text-sm text-gray-600 text-center">
                Enter your new password
              </p>

              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9112BC]"
              />

              <button
                type="submit"
                className="bg-[#9112BC] text-white py-3 rounded-xl hover:bg-[#AE75DA] transition"
              >
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResetPassword;
