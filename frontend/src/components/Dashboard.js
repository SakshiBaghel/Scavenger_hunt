// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav className="col-md-2 d-none d-md-block bg-dark sidebar">
//           <div className="sidebar-sticky">
//             <ul className="nav flex-column text-white">
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="/create-hunt">Create Hunt</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="/livehunt">Live Hunt</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="/upcoming-hunt">Upcoming Hunt</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="/yourhunt">Your Hunt</a>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main className="col-md-10 ml-sm-auto px-4">
//           <h1 className="mt-4">Welcome to Dashboard</h1>
//           <p>Select an option from the sidebar.</p>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
// import "../styles/Dashboard.css"; // Custom styles

// const Dashboard = () => {
//   const navigate = useNavigate();

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Clear auth token
//     navigate("/signin"); // Redirect to Sign-in page
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar vh-100">
//           <div className="position-sticky">
//             <h2 className="text-center text-white py-3">Dashboard</h2>
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <button 
//                   className="btn btn-primary w-100 my-2" 
//                   onClick={() => navigate("/CreateHunt")}
//                 >
//                   Create Hunt
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="/livehunt">Live Hunt</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="/upcoming-hunt">Upcoming Hunt</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="/yourhunt">Your Hunt</a>
//               </li>
//             </ul>
//             <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>Logout</button>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
//             <h1 className="h2">Welcome to Dashboard</h1>
//           </div>
//           <p>Select an option from the sidebar.</p>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import LiveHunt from "../pages/LiveHunt";
// import UpcomingHunt from "../pages/UpcomingHunt";
// import YourHunt from "../pages/YourHunt";
// import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
// import "../styles/Dashboard.css"; // Custom styles

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [activeSection, setActiveSection] = useState("LiveHunt"); // Default view

  // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Clear auth token
//     navigate("/signin"); // Redirect to Sign-in page
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar vh-100">
//           <div className="position-sticky">
//             <h2 className="text-center text-white py-3">Dashboard</h2>
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <button className="nav-link text-white btn btn-link" onClick={() => setActiveSection("LiveHunt")}>
//                   Live Hunt
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link text-white btn btn-link" onClick={() => setActiveSection("UpcomingHunt")}>
//                   Upcoming Hunt
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link text-white btn btn-link" onClick={() => setActiveSection("YourHunt")}>
//                   Your Hunt
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white btn btn-primary w-100" href="/create-hunt">
//                   Create Hunt
//                 </a>
//               </li>
//             </ul>
//             <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>Logout</button>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
//             <h1 className="h2">Welcome to Dashboard</h1>
//           </div>

//           {/* Dynamic Section Rendering */}
//           {activeSection === "LiveHunt" && <LiveHunt />}
//           {activeSection === "UpcomingHunt" && <UpcomingHunt />}
//           {activeSection === "YourHunt" && <YourHunt />}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LiveHunt from "../pages/LiveHunt";
import UpcomingHunt from "../pages/UpcomingHunt";
import YourHunt from "../pages/YourHunt";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import "../styles/Dashboard.css"; // Custom Styles
import CreateHunt from "../pages/CreateHunt";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("UpcomingHunt"); // Default section

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="/">HuntMaster</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><button className={`nav-link ${activeSection === "LiveHunt" ? "active" : ""}`} onClick={() => setActiveSection("LiveHunt")}>Live Hunt</button></li>
            <li className="nav-item"><button className={`nav-link ${activeSection === "UpcomingHunt" ? "active" : ""}`} onClick={() => setActiveSection("UpcomingHunt")}>Upcoming Hunt</button></li>
            <li className="nav-item"><button className={`nav-link ${activeSection === "YourHunt" ? "active" : ""}`} onClick={() => setActiveSection("YourHunt")}>Your Hunt</button></li>
            <li className="nav-item"><button className={`nav-link ${activeSection === "CreateHunt" ? "active" : ""}`} onClick={() => setActiveSection("CreateHunt")}>CreateHunt</button></li>
            {/* <li className="nav-item"><a className="nav-link" href="/createhunt">Create Hunt</a></li> */}
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          </ul>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Smooth Section Transitions */}
      <div className="dashboard-content">
        <AnimatePresence mode="wait">
          {activeSection === "LiveHunt" && (
            <motion.div key="live" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <LiveHunt />
            </motion.div>
          )}
           {activeSection === "CreateHunt" && (
            <motion.div key="create" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <CreateHunt />
            </motion.div>
          )}
          {activeSection === "UpcomingHunt" && (
            <motion.div key="upcoming" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <UpcomingHunt />
            </motion.div>
          )}
          {activeSection === "YourHunt" && (
            <motion.div key="yourhunt" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <YourHunt />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
