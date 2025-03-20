import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      // Replace with your actual signup API endpoint
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        // On successful signup, redirect to the Signin page (or dashboard)
        navigate("/signin");
      } else {
        alert(result.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Create Account
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #205781, #4F959D, #98D2C0, #F6F8D5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "80px", // Adjust based on your navbar height
    paddingBottom:"80px", //can adjust..
    boxSizing: "border-box",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "15px",
    padding: "40px",
    width: "80%",
    maxWidth: "500px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    margin: "20px 0",
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
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
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

export default Signup;
