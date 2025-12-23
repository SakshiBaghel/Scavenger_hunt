// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";

// const YourHunt = () => {
//   const [hunts, setHunts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const { userData, isLoggedin } = useContext(AppContext);

//   useEffect(() => {
//     const fetchHunts = async () => {
//       if (!isLoggedin || !userData?._id) {
//         setError("You must be logged in to view your hunts.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${userData._id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch hunts");
//         }
//         const data = await response.json();
//         setHunts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHunts();
//   }, [isLoggedin, userData]);

//   const handleCheckSubmission = (huntId) => {
//     navigate(`CheckSubmission/${huntId}`);
//   };

//   const handleUpdateLeaderBoard = async (huntId) => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/hunt/updateLeaderboards/${huntId}`, {
//         method: "POST",
//         credentials: "include",
//       });
//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Leaderboard updated successfully!");
//         console.log("Updated leaderboard:", data.leaderboard);
//       } else {
//         toast.error(data.message || "Failed to update leaderboard");
//       }
//     } catch (err) {
//       toast.error("Error updating leaderboard: " + err.message);
//     }
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
//         <p className="text-[#9112BC] text-lg">Loading your hunts... ⏳</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFCB8]">
//         <p className="text-red-600 text-lg mb-4">{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="bg-[#9112BC] text-white px-6 py-2 rounded-xl hover:bg-[#AE75DA] transition"
//         >
//           Retry
//         </button>
//       </div>
//     );

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
//       <Navbar />

//       <div className="flex-grow max-w-7xl mx-auto px-6 py-16">
//         <h1 className="text-3xl md:text-4xl font-bold text-[#9112BC] mb-12 text-center">
//           Your Hunts
//         </h1>

//         {hunts.length === 0 ? (
//           <p className="text-center text-gray-700 text-lg">No hunts found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {hunts.map((hunt) => (
//               <div
//                 key={hunt._id}
//                 className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition flex flex-col justify-between w-full cursor-pointer"
//               >
//                 {/* Hunt Details */}
//                 <div>
//                   <h2 className="text-2xl font-bold text-[#9112BC] mb-2">{hunt.name}</h2>
//                   <p className="text-gray-600 mb-2">{hunt.description}</p>
//                   <div className="text-gray-500 text-sm space-y-1">
//                     <p>
//                       <strong>Start:</strong> {new Date(hunt.startTime).toLocaleString()}
//                     </p>
//                     <p>
//                       <strong>End:</strong> {new Date(hunt.endTime).toLocaleString()}
//                     </p>
//                     <p>
//                       <strong>Puzzles:</strong> {hunt.puzzleCount}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-4 flex flex-col gap-3">
//                   <button
//                     onClick={() => handleCheckSubmission(hunt._id)}
//                     className="bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
//                   >
//                     Check Submission
//                   </button>
//                   <button
//                     onClick={() => handleUpdateLeaderBoard(hunt._id)}
//                     className="bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
//                   >
//                     Update Leaderboard
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default YourHunt;


import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const YourHunt = () => {
  const [hunts, setHunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { userData, isLoggedin } = useContext(AppContext);

  useEffect(() => {
    const fetchHunts = async () => {
      if (!isLoggedin || !userData?._id) {
        setError("Please login to view your hunts.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:4000/api/hunt/yourHunt/${userData._id}`,
          { credentials: "include" }
        );

        // ✅ If user has no hunts, backend usually sends 404 or empty array
        if (response.status === 404) {
          setHunts([]);
          setError(null);
          return;
        }

        if (!response.ok) {
          throw new Error("Something went wrong while fetching hunts.");
        }

        const data = await response.json();
        setHunts(data || []);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHunts();
  }, [isLoggedin, userData]);

  const handleCheckSubmission = (huntId) => {
    navigate(`CheckSubmission/${huntId}`);
  };

  const handleUpdateLeaderBoard = async (huntId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/hunt/updateLeaderboards/${huntId}`,
        { method: "POST", credentials: "include" }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Leaderboard updated successfully!");
      } else {
        toast.error(data.message || "Failed to update leaderboard");
      }
    } catch (err) {
      toast.error("Error updating leaderboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
      <Navbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9112BC] mb-12 text-center">
          Your Hunts
        </h1>

        {/* Loading */}
        {loading && (
          <p className="text-center text-[#9112BC] text-lg">
            Loading your hunts... ⏳
          </p>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-center text-red-600 text-lg">{error}</p>
        )}

        {/* No Hunts Created */}
        {!loading && !error && hunts.length === 0 && (
          <div className="text-center bg-white p-10 rounded-3xl shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-[#9112BC] mb-4">
              No Hunts Created Yet 🧩
            </h2>
            <p className="text-gray-600 mb-6">
              You haven’t created any treasure hunts yet.
              Start by creating one and challenge your players!
            </p>
            <button
              onClick={() => navigate("/CreateHunt")}
              className="bg-[#9112BC] text-white px-8 py-3 rounded-xl hover:bg-[#AE75DA] transition"
            >
              Create Your First Hunt
            </button>
          </div>
        )}

        {/* Hunts Grid */}
        {!loading && !error && hunts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hunts.map((hunt) => (
              <div
                key={hunt._id}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#9112BC] mb-2">
                    {hunt.name}
                  </h2>
                  <p className="text-gray-600 mb-3">{hunt.description}</p>

                  <div className="text-gray-500 text-sm space-y-1">
                    <p>
                      <strong>Start:</strong>{" "}
                      {new Date(hunt.startTime).toLocaleString()}
                    </p>
                    <p>
                      <strong>End:</strong>{" "}
                      {new Date(hunt.endTime).toLocaleString()}
                    </p>
                    <p>
                      <strong>Puzzles:</strong> {hunt.puzzleCount}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    onClick={() => handleCheckSubmission(hunt._id)}
                    className="bg-[#9112BC] text-white py-3 rounded-xl hover:bg-[#AE75DA] transition"
                  >
                    Check Submission
                  </button>
                  <button
                    onClick={() => handleUpdateLeaderBoard(hunt._id)}
                    className="bg-[#9112BC] text-white py-3 rounded-xl hover:bg-[#AE75DA] transition"
                  >
                    Update Leaderboard
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default YourHunt;
