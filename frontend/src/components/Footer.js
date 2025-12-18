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


const Footer = () => {
  return (
    <footer className="bg-[#9112BC] text-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        
        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold">Scavenger Hunt</h2>
            <p className="text-purple-200 text-sm mt-1 max-w-sm">
              An interactive platform to create, join, and experience exciting
              scavenger hunts with friends and communities.
            </p>
          </div>

          {/* Contact */}
          <div className="text-sm text-purple-200">
            <h3 className="font-semibold text-white mb-1">Contact</h3>
            <p>Email: support@scavengerhunt.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-purple-400 mt-5 pt-3 text-center text-xs text-purple-200">
          © {new Date().getFullYear()} Scavenger Hunt. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
