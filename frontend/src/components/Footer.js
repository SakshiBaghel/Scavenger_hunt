import { Link } from 'react-router-dom'

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
// export default Footerimport React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-white shadow-inner mt-10">
//       <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-600">
//         © {new Date().getFullYear()} MyApp. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;
function Footer() {
  return (
    <footer className="bg-green-800 shadow-inner ">
      <div className="max-w-screen-xl mx-auto px-6 py-6 text-center text-white">
        <p className="mb-2 text-lg italic font-semibold">
          "Hunting is not just a sport, it’s a way of connecting with nature."
        </p>
        <div className="text-sm text-green-100">
          © {new Date().getFullYear()} Scavenger. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
