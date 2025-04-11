import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and component

import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';

import CreateHunt from './pages/CreateHunt'
import LiveHunt from './pages/LiveHunt'
import UpcomingHunt from './pages/UpcomingHunt'
import JoinHunt from './components/JoinHunt'
import YourHunt from './pages/YourHunt'
import CheckSubmission from './pages/CheckSubmission'


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

          <Route path="/CreateHunt" element={<CreateHunt />} />
          <Route path="/LiveHunt" element={<LiveHunt />} />
          <Route path="/UpcomingHunt" element={<UpcomingHunt />} />
          <Route path="/JoinHunt/:huntId" element={<JoinHunt />} />
          <Route path="/YourHunt/:userId" element={<YourHunt />} />
          {/* <Route path="/CheckSubmission/:huntId" element={<CheckSubmission />} /> */}
          <Route path="/yourHunt/:userId/CheckSubmission/:huntId" element={<CheckSubmission />} />
        </Routes>
      </div>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
