import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'



const  Navbar=()=> {
    const navigate =useNavigate()
    const {userData,backendurl,setUserData,setIsLoggedin}=useContext(AppContext);

    console.log("Navbar userData:", userData); 

    const logout=async ()=>{
        try{
            axios.defaults.withCredentials=true
            const {data}=await axios.post(backendurl+'/api/auth/logout')
            data.success && setIsLoggedin(false)
            data.success && setUserData(false)
            navigate('/')

        }catch(error){
            toast.error(error.message)  
        }

    }

  return (
    <div>
        {/* <img src="" alt="" /> */}

        {userData?<div>
            {userData.name[0].toUpperCase()}
            <div>
                <ul>
                    {!userData.isAccountVerified && <li>Verify Email</li>}
                    
                    <li onClick={logout}>Logout</li>
                </ul>

            </div>
        </div>:<button onClick={()=>navigate('/login')}>Login</button>
    }

    </div>
  )
}

export default Navbar