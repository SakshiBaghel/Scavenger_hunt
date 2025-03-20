import React from "react";
import { Link } from "react-router-dom";
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Signup from '../components/Signup'

function Homepage() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Signup/> */}
      {/* <Footer/> */}
      <h2>Home</h2>

      {/* ✅ Upload Photo Button Added */}
      <Link to="/upload">
        <button style={{ padding: "10px 20px", fontSize: "16px", marginTop: "10px" }}>
          Upload Photo
        </button>
      </Link>
    </div>
  );
}

export default Homepage;
