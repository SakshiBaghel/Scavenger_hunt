// import { Link } from 'react-router-dom'

// const Footer = () => {

//     return (
//         <header>
//             <div className="container">
//                 <Link to="/">
//                     <h1>Footer</h1>
//                 </Link>
//             </div>
//         </header>
//     )
// }
// export default Footer
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    background: "linear-gradient(to right, #98D2C0, #F6F8D5)",
    position: "fixed",
    bottom: "0",
    width: "100%",
    // marginTop:"150px",
    boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.1)",
  },
  text: {
    color: "#205781",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default Footer;
