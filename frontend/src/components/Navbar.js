import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'



const  Navbar=()=> {
    const navigate =useNavigate()
    const {userData,backendUrl,setUserData,setIsLoggedin}=useContext(AppContext);


    const sendVerificationOtp = async () => {
        try{
            axios.defaults.withCredentials = true;

            const {data}=await axios.post(backendUrl+'/api/auth/send-verify-otp');
            if(data.success){
                navigate('/email-verify')
                toast.success(data.message)
            }
            else{
                toast.error(data.message)
            }

        }catch(error){
            toast.error(error.message)

        }


    }
    


    const logout = async () => {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(backendUrl + '/api/auth/logout');
    
            console.log("Logout Response:", response.data); // Log response
    
            if (response.data.success) {
                setIsLoggedin(false);
                setUserData(null);
                navigate('/');
            } else {
                toast.error("Logout failed: " + (response.data.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Logout Error:", error);
            toast.error(error.response?.data?.message || "Logout request failed");
        }
    };
    
  return (
    <div>
        {/* <img src="" alt="" /> */}

        {userData?<div>
            {userData.name[0].toUpperCase()}
            <div>
                <ul>
                    {!userData.isAccountVerified && <li onClick={sendVerificationOtp}>Verify Email</li>}
                    
                    <li onClick={logout}>Logout</li>
                </ul>

            </div>
        </div>:<button onClick={()=>navigate('/login')}>Login</button>
    }

    </div>
  )
}

export default Navbar