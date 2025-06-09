// // // import React from 'react'
// // // import Navbar from '../components/Navbar'
// // // import Footer from '../components/Footer'


// // // function Homepage() {
// // //   return (
// // //     <div>
// // //       <Navbar/>
// // //       {/* <Signup/> */}
// // //       <h2>Home</h2>
// // //       <h2> CreateHunt</h2>
// // //       <Footer/>
// // //     </div>
// // //   )
// // // }

// // // export default Homepage


// // // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';

// // function Homepage() {
// //   const navigate = useNavigate();

// //   const handleCreateHuntClick = () => {
// //     navigate('/createHunt');
// //   };
// //   const handleLiveHuntClick = () => {
// //     navigate('/liveHunt');
// //   };
// //   const handleUpcomingHuntClick = () => {
// //     navigate('/upcomingHunt');
// //   };

// //   return (
// //     <div>
// //       <Navbar />
// //       <h2>Home</h2>
// //       <button onClick={handleCreateHuntClick}>
// //         Create Hunt
// //       </button>
// //       <button onClick={handleLiveHuntClick}>
// //         Live Hunt
// //       </button>
// //       <button onClick={handleUpcomingHuntClick}>
// //         Upcoming Hunt
// //       </button>

// //       <Footer />
// //     </div>
// //   );
// // }

// // export default Homepage;


// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { AppContext } from '../context/AppContext'; // adjust path if needed

// function Homepage() {
//   const navigate = useNavigate();
//   const { isLoggedin } = useContext(AppContext); // 👈 get login state

//   const handleCreateHuntClick = () => navigate('/createHunt');
//   const handleLiveHuntClick = () => navigate('/liveHunt');
//   const handleUpcomingHuntClick = () => navigate('/upcomingHunt');
//   const handleYourHuntClick = () => navigate('/YourHunt/:userId'); // 👈 navigate to Your Hunt

//   return (
//     <div>
//       <Navbar />
//       <h2>Home</h2>

//       <button onClick={handleCreateHuntClick}>Create Hunt</button>
//       <button onClick={handleLiveHuntClick}>Live Hunt</button>
//       <button onClick={handleUpcomingHuntClick}>Upcoming Hunt</button>

//       {/* ✅ Show only if user is logged in */}
//       {isLoggedin && (
//         <button onClick={handleYourHuntClick}>Your Hunt</button>
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default Homepage;


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext'; // adjust if needed

function Homepage() {
  const navigate = useNavigate();
  const { isLoggedin, userData } = useContext(AppContext);

  const handleCreateHuntClick = () => navigate('/createHunt');
  const handleLiveHuntClick = () => navigate('/liveHunt');
  const handleUpcomingHuntClick = () => navigate('/upcomingHunt');

  const handleYourHuntClick = () => {
    if (userData && userData._id) {
      navigate(`/YourHunt/${userData._id}`);  // ✅ dynamically using user ID
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Home</h2>

      <button onClick={handleCreateHuntClick}>Create Hunt</button>
      <button onClick={handleLiveHuntClick}>Live Hunt</button>
      <button onClick={handleUpcomingHuntClick}>Upcoming Hunt</button>

      {isLoggedin && (
        <button onClick={handleYourHuntClick}>Your Hunt</button>
      )}

      <Footer />
    </div>
  );
}

export default Homepage;
