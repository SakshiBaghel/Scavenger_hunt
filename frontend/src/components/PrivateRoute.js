// const express = require("express");
// const router = express.Router();
// const authenticateUser = require("../../../backend/middlewares/authMiddleware");

// // Protected Routes
// router.get("/create-hunt", authenticateUser, (req, res) => {
//   res.json({ message: "Welcome to Create Hunt Page" });
// });

// router.get("/livehunt", authenticateUser, (req, res) => {
//   res.json({ message: "Welcome to Live Hunt Page" });
// });

// router.get("/upcoming-hunt", authenticateUser, (req, res) => {
//   res.json({ message: "Welcome to Upcoming Hunt Page" });
// });

// router.get("/yourhunt", authenticateUser, (req, res) => {
//   res.json({ message: "Welcome to Your Hunt Page" });
// });

// module.exports = router;
// import { Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("token");  // Check authentication
//   useEffect(() => {
//     setIsAuthenticated(!!localStorage.getItem("token"));
//   }, []);

//   return isAuthenticated ? children : <Navigate to="/signin" />;
// };

// import { Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const PrivateRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     !!localStorage.getItem("token")
//   );

//   useEffect(() => {
//     setIsAuthenticated(!!localStorage.getItem("token"));
//   }, []);

//   return isAuthenticated ? children : <Navigate to="/signin" replace />;
// };

// export default PrivateRoute;

// export default PrivateRoute;
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;

