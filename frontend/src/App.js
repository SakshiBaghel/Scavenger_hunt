// import { BrowserRouter, Routes, Route} from 'react-router-dom'

// //pages and component

// import Home from './pages/Home'
// import CreateHunt from './pages/CreateHunt'
// import LiveHunt from './pages/LiveHunt'
// import UpcomingHunt from './pages/UpcomingHunt'
// import JoinHunt from './components/JoinHunt'
// import YourHunt from './pages/YourHunt'
// // import CheckSubmission from './pages/CheckSubmission'
// import Signup from "./components/Signup";
// import About from "./pages/About";
// import Signin from "./components/Signin";
// import Dashboard from "./components/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <div className="pages">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CreateHunt" element={<CreateHunt />} />
//           <Route path="/LiveHunt" element={<LiveHunt />} />
//           <Route path="/UpcomingHunt" element={<UpcomingHunt />} />
//           <Route path="/JoinHunt/:huntId" element={<JoinHunt />} />
//           <Route path="/YourHunt/:userId" element={<YourHunt />} />
//           {/* <Route path="/CheckSubmission/:huntId" element={<CheckSubmission />} /> */}
//           <Route path="/about" element={<About />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//         </Routes>
//       </div>
//       </BrowserRouter>
    
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home";
import CreateHunt from "./pages/CreateHunt";
import LiveHunt from "./pages/LiveHunt";
import UpcomingHunt from "./pages/UpcomingHunt";
import JoinHunt from "./components/JoinHunt";
import YourHunt from "./pages/YourHunt";
import Signup from "./components/Signup";
import About from "./pages/About";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Private Routes (Requires Sign-in) */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/CreateHunt" element={<PrivateRoute><CreateHunt /></PrivateRoute>} />
            <Route path="/LiveHunt" element={<PrivateRoute><LiveHunt /></PrivateRoute>} />
            
            <Route path="/UpcomingHunt" element={<PrivateRoute><UpcomingHunt /></PrivateRoute>} />
            <Route path="/YourHunt/:userId" element={<PrivateRoute><YourHunt /></PrivateRoute>} />
            <Route path="/JoinHunt/:huntId" element={<PrivateRoute><JoinHunt /></PrivateRoute>} />
          

            {/* Redirect unknown routes to sign-in */}
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

