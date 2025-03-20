import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and component

import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route path="/reset-password" element={<ResetPassword />} />



            
        </Routes>
      </div>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
