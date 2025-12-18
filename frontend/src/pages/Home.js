

// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { AppContext } from '../context/AppContext';

// function Home() {
//   const navigate = useNavigate();
//   const { isLoggedin, userData } = useContext(AppContext);

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
//       <Navbar />

//       {/* Hero Section */}
// <div className="flex-grow px-6 py-24 text-center">
//   <h1 className="text-4xl md:text-5xl font-bold text-[#9112BC]">
//     Welcome to Scavenger Hunt
//   </h1>

//   <p className="mt-8 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
//     Scavenger Hunt is a digital platform designed to bring adventure,
//     creativity, and teamwork together through interactive challenges
//     and puzzle-based hunts.
//   </p>
// </div>

// {/* About Section */}
// <div className="px-6 py-24 bg-white">
//   <div className="max-w-4xl mx-auto text-center">
//     <h2 className="text-3xl font-bold text-[#9112BC]">
//       What is Scavenger Hunt?
//     </h2>

//     <p className="mt-10 text-gray-700 leading-relaxed text-lg">
//       This platform allows users to participate in thoughtfully designed
//       scavenger hunts where problem-solving, observation, and strategy
//       play a key role. Each hunt consists of clues, tasks, and challenges
//       that must be completed within a defined structure.
//     </p>

//     <p className="mt-6 text-gray-700 leading-relaxed text-lg">
//       Whether it is a campus event, team activity, or casual game among
//       friends, Scavenger Hunt provides an organized and engaging
//       environment for participants.
//     </p>
//   </div>
// </div>

// {/* How It Works Section */}
// <div className="px-6 py-24 bg-[#FFFCB8]">
//   <div className="max-w-5xl mx-auto">
//     <h2 className="text-3xl font-bold text-[#9112BC] text-center">
//       How the Platform Works
//     </h2>

//     <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
//       <div className="text-center">
//         <h3 className="text-xl font-semibold text-[#9112BC]">
//           Create Hunts
//         </h3>
//         <p className="mt-4 text-gray-700 leading-relaxed">
//           Organizers can design hunts by adding clues, setting time
//           limits, and defining rules that guide participants through
//           the experience.
//         </p>
//       </div>

//       <div className="text-center">
//         <h3 className="text-xl font-semibold text-[#9112BC]">
//           Participate & Solve
//         </h3>
//         <p className="mt-4 text-gray-700 leading-relaxed">
//           Players progress through challenges by solving puzzles and
//           completing tasks, making each hunt both engaging and rewarding.
//         </p>
//       </div>

//       <div className="text-center">
//         <h3 className="text-xl font-semibold text-[#9112BC]">
//           Track Progress
//         </h3>
//         <p className="mt-4 text-gray-700 leading-relaxed">
//           The platform tracks participation, progress, and completion,
//           allowing users to review their journey after the hunt ends.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

// {/* Vision Section */}
// <div className="px-6 py-24 bg-white">
//   <div className="max-w-4xl mx-auto text-center">
//     <h2 className="text-3xl font-bold text-[#9112BC]">
//       Our Vision
//     </h2>

//     <p className="mt-10 text-gray-700 leading-relaxed text-lg">
//       Our goal is to create meaningful interactive experiences that go
//       beyond traditional games. Scavenger Hunt encourages collaboration,
//       critical thinking, and exploration in a structured yet enjoyable
//       way.
//     </p>

//     <p className="mt-6 text-gray-700 leading-relaxed text-lg">
//       By combining technology with creativity, the platform aims to make
//       every hunt memorable and accessible for all types of users.
//     </p>
//   </div>
// </div>


//       <Footer />
//     </div>
//   );
// }

// export default Home;



import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';

function Home() {
  const { isLoggedin, userData } = useContext(AppContext);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
      <Navbar />

      {/* HERO SECTION (Full-height feel) */}
      <div className="min-h-[85vh] flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#9112BC] leading-tight">
            Welcome to <br /> Scavenger Hunt
          </h1>

          <p className="mt-12 text-xl text-gray-700 leading-relaxed">
            Scavenger Hunt is a digital platform designed to bring adventure,
            creativity, and teamwork together through interactive challenges
            and puzzle-based hunts.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover meaningful experiences where strategy, collaboration,
            and exploration come together.
          </p>
        </div>
      </div>

      {/* ABOUT SECTION (Scroll Target) */}
      <div id="about" className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#9112BC]">
            What is Scavenger Hunt?
          </h2>

          <p className="mt-10 text-gray-700 leading-relaxed text-lg">
            This platform allows users to participate in thoughtfully designed
            scavenger hunts where problem-solving, observation, and strategy
            play a key role. Each hunt consists of clues, tasks, and challenges
            that must be completed within a defined structure.
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            Whether it is a campus event, team activity, or casual game among
            friends, Scavenger Hunt provides an organized and engaging
            environment for participants.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="px-6 py-24 bg-[#FFFCB8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#9112BC] text-center">
            How the Platform Works
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#9112BC]">
                Create Hunts
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Organizers design hunts by adding clues, setting time
                limits, and defining rules that guide participants.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#9112BC]">
                Participate & Solve
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Players progress through challenges by solving puzzles
                and completing tasks step by step.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#9112BC]">
                Track Progress
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The platform records progress and completion, allowing
                users to revisit their journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VISION */}
      <div className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#9112BC]">
            Our Vision
          </h2>

          <p className="mt-10 text-gray-700 leading-relaxed text-lg">
            Our goal is to create meaningful interactive experiences that go
            beyond traditional games. Scavenger Hunt encourages collaboration,
            critical thinking, and exploration in a structured yet enjoyable way.
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            By combining technology with creativity, the platform aims to make
            every hunt memorable and accessible for all users.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
