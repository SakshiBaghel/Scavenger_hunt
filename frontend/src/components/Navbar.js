// import { Link } from 'react-router-dom'

// const Navbar = () => {

//     return (
//         <header>
//             <div className="container">
//                 <Link to="/">
//                     <h1>Campus-Hunt</h1>
//                 </Link>
//             </div>
//         </header>
//     )
// }
// export default Navbar
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//         <Link className="navbar-brand" to="/">My Website</Link>
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication when component loads
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);  // Convert to boolean (true if token exists)
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">My Website</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsAuthenticated(!isAuthenticated)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            {/* Dashboard button updates dynamically */}
            <li className="nav-item">
              <Link className="nav-link" to={isAuthenticated ? "/dashboard" : "/signin"}>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
