// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Signin = () => {
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace with your API endpoint and logic for sign in.
//       const response = await fetch("http://localhost:4000/api/auth/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       });

//       const result = await response.json();
//       if (result.success) {
//         // Optionally store tokens or user info and redirect.
//         localStorage.setItem("token", result.token); 
//         navigate("/dashboard"); // Redirect to homepage or dashboard.
//       } else {
//         alert(result.message || "Sign in failed!");
//       }
//     } catch (error) {
//       console.error("Sign in error:", error);
//       alert("Sign in failed due to server error!");
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <Navbar />
//       <div style={styles.container}>
//         <h3 style={styles.heading}>Sign In</h3>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={credentials.email}
//               onChange={handleChange}
//               className="form-control"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={credentials.password}
//               onChange={handleChange}
//               className="form-control"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button type="submit" style={styles.button} className="btn btn-primary w-100">
//             Sign In
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// const styles = {
//   page: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #205781, #4F959D, #98D2C0, #F6F8D5)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     paddingTop: "80px", // Adjust for fixed navbar if needed
//     paddingBottom:"80px",
//     boxSizing: "border-box",
//   },
//   container: {
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     borderRadius: "15px",
//     padding: "40px",
//     width: "80%",
//     maxWidth: "500px",
//     textAlign: "center",
//     fontWeight: "bold",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//     margin: "20px 10px",
//   },
//   heading: {
//     color: "#205781",
//     fontSize: "28px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   button: {
//     backgroundColor: "#98D2C0",
//     border: "none",
//     padding: "12px 24px",
//     fontSize: "18px",
//     color: "#205781",
//     fontWeight: "bold",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
// };

// export default Signin;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
  
      const result = await response.json();
      console.log("API Response:", result); // ✅ Debugging
  
      if (response.ok && result.token) {
        localStorage.setItem("token", result.token);
        if (result.userId) {
          localStorage.setItem("userId", result.userId);
          console.log("Stored userId:", result.userId);
        }
        navigate("/dashboard");
      } else {
        alert(result.message || "Sign in failed!");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      alert("Sign in failed due to server error!");
    }
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.container}>
        <h3 style={styles.heading}>Sign In</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3 text-center">
  <a href="/forgot-password" style={{ color: "#205781", fontSize: "14px" }}>
    Forgot Password?
  </a>
</div>
          {/* console.log("API Response:", result); */}
          <button  type="submit" style={styles.button} className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #205781, #4F959D, #98D2C0, #F6F8D5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "80px",
    paddingBottom: "80px",
    boxSizing: "border-box",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "15px",
    padding: "40px",
    width: "80%",
    maxWidth: "500px",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    margin: "20px 10px",
  },
  heading: {
    color: "#205781",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    backgroundColor: "#98D2C0",
    border: "none",
    padding: "12px 24px",
    fontSize: "18px",
    color: "#205781",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Signin;
