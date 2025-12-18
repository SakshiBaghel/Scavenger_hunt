

// // import { useContext, useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { AppContext } from "../context/AppContext";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import { toast } from "react-toastify";

// // const LiveHunt = () => {
// //   const [hunts, setHunts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const { userData, isLoggedin } = useContext(AppContext);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchLiveHunts = async () => {
// //       try {
// //         const response = await fetch("http://localhost:4000/api/hunt/liveHunts");
// //         if (!response.ok) throw new Error("Failed to fetch live hunts");
// //         const data = await response.json();
// //         setHunts(data);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchLiveHunts();
// //   }, []);

// //   const handleJoinHunt = async (huntId) => {
// //     if (!isLoggedin || !userData?._id) {
// //       toast.error("You must be logged in to join a hunt.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:4000/api/player/createPlayer", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ hunt: huntId, user: userData._id }),
// //       });

// //       const data = await response.json();

// //       if (response.ok || data.message === "Player already joined this hunt") {
// //         navigate(`/joinhunt/${huntId}`);
// //       } else {
// //         throw new Error(data.message || "Failed to join the hunt");
// //       }
// //     } catch (err) {
// //       toast.error(err.message);
// //     }
// //   };

// //   if (loading)
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
// //         <p className="text-[#9112BC] text-lg">Loading live hunts... ⏳</p>
// //       </div>
// //     );

// //   if (error)
// //     return (
// //       <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFCB8]">
// //         <p className="text-red-600 text-lg mb-4">Error: {error}</p>
// //         <button
// //           onClick={() => window.location.reload()}
// //           className="bg-[#9112BC] text-white px-6 py-2 rounded-xl hover:bg-[#AE75DA] transition"
// //         >
// //           Retry
// //         </button>
// //       </div>
// //     );

// //   return (
// //     <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
// //       <Navbar />

// //       <div className="flex-grow max-w-6xl mx-auto px-6 py-16">
// //         <h1 className="text-3xl md:text-4xl font-bold text-[#9112BC] mb-12 text-center">
// //           Live Hunts
// //         </h1>

// //         {hunts.length === 0 ? (
// //           <p className="text-center text-gray-700 text-lg">No live hunts available</p>
// //         ) : (
// //           <div className="flex flex-col gap-6">
// //             {hunts.map((hunt) => (
// //               <div
// //                 key={hunt._id}
// //                 className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition flex flex-col md:flex-row justify-between items-start md:items-center w-full cursor-pointer"
// //               >
// //                 {/* Hunt Details */}
// //                 <div className="flex-1">
// //                   <h2 className="text-2xl font-bold text-[#9112BC] mb-2">{hunt.name}</h2>
// //                   <p className="text-gray-600 mb-2">{hunt.description}</p>
// //                   <div className="text-gray-500 text-sm space-y-1">
// //                     <p>
// //                       <strong>Start:</strong> {new Date(hunt.startTime).toLocaleString()}
// //                     </p>
// //                     <p>
// //                       <strong>End:</strong> {new Date(hunt.endTime).toLocaleString()}
// //                     </p>
// //                     <p>
// //                       <strong>Puzzles:</strong> {hunt.puzzleCount}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Join Button */}
// //                 <button
// //                   onClick={() => handleJoinHunt(hunt._id)}
// //                   className="mt-4 md:mt-0 bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
// //                 >
// //                   Join Hunt
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default LiveHunt;


// import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";

// const LiveHunt = () => {
//   const [hunts, setHunts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { userData, isLoggedin } = useContext(AppContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLiveHunts = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/api/hunt/liveHunts");
//         if (!response.ok) throw new Error("Failed to fetch live hunts");
//         const data = await response.json();
//         setHunts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLiveHunts();
//   }, []);

//   const handleJoinHunt = async (huntId) => {
//     if (!isLoggedin || !userData?._id) {
//       toast.error("You must be logged in to join a hunt.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:4000/api/player/createPlayer", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ hunt: huntId, user: userData._id }),
//       });

//       const data = await response.json();

//       if (response.ok || data.message === "Player already joined this hunt") {
//         navigate(`/joinhunt/${huntId}`);
//       } else {
//         throw new Error(data.message || "Failed to join the hunt");
//       }
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
//         <p className="text-[#9112BC] text-lg">Loading live hunts... ⏳</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFCB8]">
//         <p className="text-red-600 text-lg mb-4">Error: {error}</p>
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
//           Live Hunts
//         </h1>

//         {hunts.length === 0 ? (
//           <p className="text-center text-gray-700 text-lg">No live hunts available</p>
//         ) : (
//           <div className="flex flex-col gap-6">
//             {hunts.map((hunt) => (
//               <div
//                 key={hunt._id}
//                 className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition flex flex-col md:flex-row justify-between items-center w-full cursor-pointer"
//               >
//                 {/* Hunt Details */}
//                 <div className="flex-1 mb-4 md:mb-0 md:pr-8">
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

//                 {/* Join Button */}
//                 <div className="flex-shrink-0">
//                   <button
//                     onClick={() => handleJoinHunt(hunt._id)}
//                     className="bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
//                   >
//                     Join Hunt
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

// export default LiveHunt;


import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const LiveHunt = () => {
  const [hunts, setHunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userData, isLoggedin } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLiveHunts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/hunt/liveHunts");
        if (!response.ok) throw new Error("Failed to fetch live hunts");
        const data = await response.json();
        setHunts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveHunts();
  }, []);

  const handleJoinHunt = async (huntId) => {
    if (!isLoggedin || !userData?._id) {
      toast.error("You must be logged in to join a hunt.");
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/api/player/createPlayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hunt: huntId, user: userData._id }),
      });
      const data = await response.json();
      if (response.ok || data.message === "Player already joined this hunt") {
        navigate(`/joinhunt/${huntId}`);
      } else {
        throw new Error(data.message || "Failed to join the hunt");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
        <p className="text-[#9112BC] text-lg">Loading live hunts... ⏳</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFCB8]">
        <p className="text-red-600 text-lg mb-4">Error: {error}</p>
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
          Live Hunts
        </h1>

        {hunts.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">No live hunts available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hunts.map((hunt) => (
              <div
                key={hunt._id}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition flex justify-between items-center cursor-pointer"
              >
                {/* Hunt Details */}
                <div className="flex-1 pr-4">
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

                {/* Join Button on Right */}
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handleJoinHunt(hunt._id)}
                    className="bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
                  >
                    Join Hunt
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

export default LiveHunt;
