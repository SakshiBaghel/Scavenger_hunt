// import React, { useEffect } from 'react'
// import axios from 'axios';
// import { AppContext } from '../context/AppContext';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// function EmailVerify() {
//   axios.defaults.withCredentials=true;

//   const {backendUrl,isLoggedin,userData,getUserData}=useContext(AppContext);

//   const navigate=useNavigate();
//   const inputRefs = React.useRef([]);
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

//   const onSubmitHandler=async (e)=>{
//     try{
//       e.preventDefault();
//       const otpArray=inputRefs.current.map(e=>e.value);
//       const otp=otpArray.join('');
//       const {data}=await axios.post(backendUrl+'/api/auth/verify-account',{otp});
//       if(data.success){
//         toast.success(data.message);
//         getUserData()
//         navigate('/')
//       }else{
//         toast.error(data.message);
//       }


//     }catch(error){
//       toast.error(error.message)

//     }
//   }

//   useEffect(()=>{
//     isLoggedin && userData && userData.isAccountVerified && navigate('/')
//   },[isLoggedin,userData])


//   return (
//     <div>
//       <form onSubmit={onSubmitHandler}>
//         <h1>Email Verify Otp</h1>
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
//         <button>Verify email</button>
//       </form>

//     </div>
//   )
// }

// export default EmailVerify


import React, { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EmailVerify = () => {
  axios.defaults.withCredentials = true;

  const { backendUrl, isLoggedin, userData, getUserData } =
    useContext(AppContext);

  const navigate = useNavigate();
  const inputRefs = useRef([]);

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const otp = inputRefs.current.map((el) => el.value).join("");
      const { data } = await axios.post(
        `${backendUrl}/api/auth/verify-account`,
        { otp }
      );

      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedin && userData?.isAccountVerified) {
      navigate("/");
    }
  }, [isLoggedin, userData, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border border-gray-200">
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-[#9112BC] text-center">
              Verify Your Email
            </h1>

            <p className="text-sm text-gray-600 text-center">
              Enter the 6-digit code sent to your email address
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
              Verify Email
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmailVerify;
