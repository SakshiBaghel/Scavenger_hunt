// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

// function Homepage() {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.page}>
//       <Navbar />
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Welcome to Our Platform</h2>
//         <p style={styles.text}>Join us now and explore amazing features!</p>
//         <button onClick={() => navigate("/signup")} style={styles.button}>
//           Sign Up
//         </button>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// const styles = {
//   page: {
//     height: "100%",              // <-- lowercase "height"
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #205781, #4F959D, #98D2C0, #F6F8D5)",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",     // Vertically center
//     alignItems: "center",         // Horizontally center
//     paddingTop: "80px",           // Space for fixed navbar (adjust as needed)
//     boxSizing: "border-box",      // Ensures padding doesn't overflow
//   },
//   container: {
//     textAlign: "center",
//     padding: "40px",
//     borderRadius: "15px",
//     backgroundColor: "rgba(255, 255, 255, 0.2)",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//     backdropFilter: "blur(10px)",
//     width: "80%",
//     maxWidth: "500px",
//     // marginTop:"300px",
//     marginBottom: "100px",                    // No large manual margins
//   },
//   heading: {
//     color: "#205781",
//     fontSize: "28px",
//     fontWeight: "bold",
//   },
//   text: {
//     color: "#4F959D",
//     fontSize: "18px",
//     marginBottom: "20px",
//   },
//   button: {
//     backgroundColor: "#F6F8D5",
//     border: "none",
//     padding: "12px 24px",
//     fontSize: "18px",
//     color: "#205781",
//     fontWeight: "bold",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s",
//     width: "100%",
//     maxWidth: "200px",
//   },
// };

// export default Homepage;
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Scavenger Hunt</h1>
        <p style={styles.subheading}>Hunting in Campus</p>
        <div style={styles.buttonContainer}>
          <button onClick={() => navigate("/signup")} style={styles.signupButton}>
            Sign Up
          </button>
          <button onClick={() => navigate("/signin")} style={styles.signinButton}>
            Sign In
          </button>
        </div>
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
    maxWidth: "600px",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    margin: "20px 10px",
  },
  heading: {
    color: "#205781",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subheading: {
    color: "#4F959D",
    fontSize: "18px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  signupButton: {
    backgroundColor: "#205781",
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  signinButton: {
    backgroundColor: "#98D2C0",
    color: "#205781",
    border: "none",
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Home;
