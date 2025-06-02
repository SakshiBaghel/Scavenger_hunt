// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'


// function Homepage() {
//   return (
//     <div>
//       <Navbar/>
//       {/* <Signup/> */}
//       <h2>Home</h2>
//       <h2> CreateHunt</h2>
//       <Footer/>
//     </div>
//   )
// }

// export default Homepage


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Homepage() {
  const navigate = useNavigate();

  const handleCreateHuntClick = () => {
    navigate('/createHunt');
  };
  const handleLiveHuntClick = () => {
    navigate('/liveHunt');
  };
  const handleUpcomingHuntClick = () => {
    navigate('/upcomingHunt');
  };

  return (
    <div>
      <Navbar />
      <h2>Home</h2>
      <button onClick={handleCreateHuntClick}>
        Create Hunt
      </button>
      <button onClick={handleLiveHuntClick}>
        Live Hunt
      </button>
      <button onClick={handleUpcomingHuntClick}>
        Upcoming Hunt
      </button>

      <Footer />
    </div>
  );
}

export default Homepage;
