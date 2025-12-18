
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function YourHunt() {
// //   const [hunts, setHunts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const dummyUserId = "67d579fbed75779ad83d6c28"; // Replace with actual user ID when authentication is added

// //   useEffect(() => {
// //     const fetchHunts = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${dummyUserId}`);
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch hunts");
// //         }
// //         const data = await response.json();
// //         setHunts(data);
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchHunts();
// //   }, []);

// //   const handleCheckSubmission = (huntId) => {
// //     console.log(`Checking submission for Hunt ID: ${huntId}`);
// //     navigate(`CheckSubmission/${huntId}`);
// //   };

// //   return (
// //     <div>
// //       <h2>Your Hunt</h2>
// //       {loading && <p>Loading...</p>}
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //       {!loading && !error && hunts.length === 0 && <p>No hunts found.</p>}
// //       <ul>
// //         {hunts.map((hunt) => (
// //           <li key={hunt._id} style={{ marginBottom: "20px" }}>
// //             <h3>{hunt.name}</h3>
// //             <p>{hunt.description}</p>
// //             <p>Start Time: {new Date(hunt.startTime).toLocaleString()}</p>
// //             <p>End Time: {new Date(hunt.endTime).toLocaleString()}</p>
// //             <button onClick={() => handleCheckSubmission(hunt._id)}>Check Submission</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default YourHunt;



// // import React, { useContext, useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { AppContext } from "../context/AppContext";

// // function YourHunt() {
// //   const [hunts, setHunts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const { userData, isLoggedin } = useContext(AppContext);

// //   useEffect(() => {
// //     const fetchHunts = async () => {
// //       if (!isLoggedin || !userData?._id) {
// //         setError("You must be logged in to view your hunts.");
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${userData._id}`);
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch hunts");
// //         }
// //         const data = await response.json();
// //         setHunts(data);
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchHunts();
// //   }, [isLoggedin, userData]);

// //   const handleCheckSubmission = (huntId) => {
// //     console.log(`Checking submission for Hunt ID: ${huntId}`);
// //     navigate(`CheckSubmission/${huntId}`);
// //   };

// //   return (
// //     <div>
// //       <h2>Your Hunt</h2>
// //       {loading && <p>Loading...</p>}
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //       {!loading && !error && hunts.length === 0 && <p>No hunts found.</p>}
// //       <ul>
// //         {hunts.map((hunt) => (
// //           <li key={hunt._id} style={{ marginBottom: "20px" }}>
// //             <h3>{hunt.name}</h3>
// //             <p>{hunt.description}</p>
// //             <p>Start Time: {new Date(hunt.startTime).toLocaleString()}</p>
// //             <p>End Time: {new Date(hunt.endTime).toLocaleString()}</p>
// //             <button onClick={() => handleCheckSubmission(hunt._id)}>Check Submission</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default YourHunt;


// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext"; // adjust the import path if needed

// function YourHunt() {
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
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHunts();
//   }, [isLoggedin, userData]);

//   const handleCheckSubmission = (huntId) => {
//     navigate(`CheckSubmission/${huntId}`);
//   };
//   // const handleUpdateLeaderBoard = (huntId) => {
//   //   // navigate(`CheckSubmission/${huntId}`);
//   // };

//   const handleUpdateLeaderBoard = async (huntId) => {
//   try {
//     const response = await fetch(`http://localhost:4000/api/hunt/updateLeaderboards/${huntId}`, {
//       method: "POST",
//       credentials: "include", // if auth cookie is needed
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert("Leaderboard updated successfully!");
//       console.log("Updated leaderboard:", data.leaderboard);
//     } else {
//       alert(data.message || "Failed to update leaderboard");
//     }
//   } catch (error) {
//     alert("Error updating leaderboard: " + error.message);
//   }
// };

//   return (
//     <div>
//       <h2>Your Hunt</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && !error && hunts.length === 0 && <p>No hunts found.</p>}
//       <ul>
//         {hunts.map((hunt) => (
//           <li key={hunt._id} style={{ marginBottom: "20px" }}>
//             <h3>{hunt.name}</h3>
//             <p>{hunt.description}</p>
//             <p>Start Time: {new Date(hunt.startTime).toLocaleString()}</p>
//             <p>End Time: {new Date(hunt.endTime).toLocaleString()}</p>
//             <button onClick={() => handleCheckSubmission(hunt._id)}>Check Submission</button>
//             <button onClick={() => handleUpdateLeaderBoard(hunt._id)}>Update LeaderBoard</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

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
        setError("You must be logged in to view your hunts.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${userData._id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch hunts");
        }
        const data = await response.json();
        setHunts(data);
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
      const response = await fetch(`http://localhost:4000/api/hunt/updateLeaderboards/${huntId}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Leaderboard updated successfully!");
        console.log("Updated leaderboard:", data.leaderboard);
      } else {
        toast.error(data.message || "Failed to update leaderboard");
      }
    } catch (err) {
      toast.error("Error updating leaderboard: " + err.message);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
        <p className="text-[#9112BC] text-lg">Loading your hunts... ⏳</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFCB8]">
        <p className="text-red-600 text-lg mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#9112BC] text-white px-6 py-2 rounded-xl hover:bg-[#AE75DA] transition"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
      <Navbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9112BC] mb-12 text-center">
          Your Hunts
        </h1>

        {hunts.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">No hunts found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hunts.map((hunt) => (
              <div
                key={hunt._id}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition flex flex-col justify-between w-full cursor-pointer"
              >
                {/* Hunt Details */}
                <div>
                  <h2 className="text-2xl font-bold text-[#9112BC] mb-2">{hunt.name}</h2>
                  <p className="text-gray-600 mb-2">{hunt.description}</p>
                  <div className="text-gray-500 text-sm space-y-1">
                    <p>
                      <strong>Start:</strong> {new Date(hunt.startTime).toLocaleString()}
                    </p>
                    <p>
                      <strong>End:</strong> {new Date(hunt.endTime).toLocaleString()}
                    </p>
                    <p>
                      <strong>Puzzles:</strong> {hunt.puzzleCount}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex flex-col gap-3">
                  <button
                    onClick={() => handleCheckSubmission(hunt._id)}
                    className="bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
                  >
                    Check Submission
                  </button>
                  <button
                    onClick={() => handleUpdateLeaderBoard(hunt._id)}
                    className="bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
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
