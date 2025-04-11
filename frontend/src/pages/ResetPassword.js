import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { set } from 'mongoose'

const  ResetPassword=()=> {
  const {backendUrl}=useContext(AppContext);
  axios.defaults.withCredentials=true;




  const navigate=useNavigate();
  const inputRefs = React.useRef([]);
  
  const [email,setEmail]=useState('');
  const [newPassword,setNewPassword]=useState('');
  const [isEmailSent,setIsEmailSent]=useState(false);
  const [otp,setOtp]=useState(0);
  const [isOtpSubmitted,setIsOtpSubmitted]=useState(false);




  const handleInput=(e,index)=>{
    if(e.target.value.length>0 && index!==inputRefs.current.length-1){
      inputRefs.current[index+1].focus();
    }
  }

  const handleKeyDown=(e,index)=>{
    if(e.key==='Backspace' && index>0 && e.target.value===''){
      inputRefs.current[index-1].focus();
    }
  }

  const handlePaste=(e)=>{
    const paste=e.clipboardData.getData('text');
    const pasteArray=paste.split('');
    pasteArray.forEach((data,index)=>{
      if(inputRefs.current[index]){
      inputRefs.current[index].value=data;
      }
    })
    

  }

  const onSubmitEmail=async (e)=>{
    e.preventDefault();
    try{
      console.log("backendUrl:", backendUrl);

      const {data}=await axios.post(backendUrl+'/api/auth/send-reset-otp',{email});
      data.success?toast.success(data.message):toast.error(data.message);
      data.success && setIsEmailSent(true);
      console.log("isEmailSent set to true"); // Debugging


    }
    catch(error){
      toast.error(error.message);
    }
  }

  const onSubmitOtp=async (e)=>{
    e.preventDefault()
    const otpArray=inputRefs.current.map(e=>e.value);
    setOtp(otpArray.join(''));
    setIsOtpSubmitted(true);
    
  }


  const onsubmitNewPassword=async (e)=>{
    e.preventDefault()
    try{
      const {data}=await axios.post(backendUrl+'/api/auth/reset-password',{email,newPassword,otp});
      data.success?toast.success(data.message):toast.error(data.message);
      data.success && navigate('/login');

    }catch(error){
      toast.error(error.message)
    }


    
  }



  return (
    <div>

      {!isEmailSent && 
      <form onSubmit={onSubmitEmail}>
        <h1>Reset Password</h1>
        <p>Enter your registered email address</p>
        <div>
          <input type="email" placeholder="Email id" value={email} onChange={e=>setEmail(e.target.value)} required/>
        </div>
        <button type="submit">Submit</button>

      </form>
  } 

  {!isOtpSubmitted && isEmailSent && 

      <form onSubmit={onSubmitOtp}>
        <h1>Reset Password Otp</h1>
        <p>Enter the 6-digit code sent to your email id.</p>
        <div onPaste={handlePaste}>
          {Array(6).fill(0).map((_,index)=>{
            return <input type="text" key={index} maxLength="1" 
            ref={e=>inputRefs.current[index]=e}
            onInput={(e)=>handleInput(e,index)}
            onKeyDown={(e)=>handleKeyDown(e,index)}
            />
            
          })}
      

        </div>
        <button>Submit</button>
      </form>
}

      {/* enter new password form  */}
      {isOtpSubmitted && isEmailSent &&
      <form onSubmit={onsubmitNewPassword}>
        <h1>new Password</h1>
        <p>Enter the new password below</p>
        <div>
          <input type="Password" placeholder="Password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} required/>
        </div>
        <button type="submit">Submit</button>

      </form>
}


    </div>
  )
}

export default ResetPassword