import React, { useEffect } from 'react'
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function EmailVerify() {
  axios.defaults.withCredentials=true;

  const {backendUrl,isLoggedin,userData,getUserData}=useContext(AppContext);

  const navigate=useNavigate();
  const inputRefs = React.useRef([]);
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

  const onSubmitHandler=async (e)=>{
    try{
      e.preventDefault();
      const otpArray=inputRefs.current.map(e=>e.value);
      const otp=otpArray.join('');
      const {data}=await axios.post(backendUrl+'/api/auth/verify-account',{otp});
      if(data.success){
        toast.success(data.message);
        getUserData()
        navigate('/')
      }else{
        toast.error(data.message);
      }


    }catch(error){
      toast.error(error.message)

    }
  }

  useEffect(()=>{
    isLoggedin && userData && userData.isAccountVerified && navigate('/')
  },[isLoggedin,userData])


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Email Verify Otp</h1>
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
        <button>Verify email</button>
      </form>

    </div>
  )
}

export default EmailVerify
