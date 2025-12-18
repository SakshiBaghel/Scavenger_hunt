// // import { useContext, useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { AppContext } from "../context/AppContext";

// // const PrevHunt = () => {
// //     const [hunts, setHunts] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const { isLoggedin } = useContext(AppContext);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         const fetchPrevHunts = async () => {
// //             try {
// //                 const response = await fetch("http://localhost:4000/api/hunt/previousHunts");
// //                 if (!response.ok) throw new Error("Failed to fetch previous hunts");

// //                 const data = await response.json();
// //                 setHunts(data);
// //             } catch (err) {
// //                 setError(err.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchPrevHunts();
// //     }, []);

// //     const handleViewLeaderboard = (huntId) => {
// //         if (!isLoggedin) {
// //             alert("Please log in to view leaderboard");
// //             return;
// //         }

// //         navigate(`/leaderboard/${huntId}`);
// //     };

// //     if (loading) return <p>Loading previous hunts... ⏳</p>;
// //     if (error)
// //         return (
// //             <div>
// //                 <p>Error: {error}</p>
// //                 <button onClick={() => window.location.reload()}>Retry</button>
// //             </div>
// //         );

// //     return (
// //         <div>
// //             <h2>Previous Hunts</h2>
// //             {hunts.length === 0 ? (
// //                 <p>No previous hunts found</p>
// //             ) : (
// //                 <ul>
// //                     {hunts.map((hunt) => (
// //                         <li key={hunt._id} className="hunt-card">
// //                             <h3>{hunt.name}</h3>
// //                             <p>{hunt.description}</p>
// //                             <p>Start: {new Date(hunt.startTime).toLocaleString()}</p>
// //                             <p>End: {new Date(hunt.endTime).toLocaleString()}</p>
// //                             <p>
// //                                 Number of Puzzles: <strong>{hunt.puzzleCount}</strong>
// //                             </p>
// //                             <button onClick={() => handleViewLeaderboard(hunt._id)}>Leaderboard</button>
// //                         </li>
// //                     ))}
// //                 </ul>
// //             )}
// //         </div>
// //     );
// // };

// // export default PrevHunt;


// import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";

// const PrevHunt = () => {
//   const [hunts, setHunts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { isLoggedin } = useContext(AppContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPrevHunts = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/api/hunt/previousHunts");
//         if (!response.ok) throw new Error("Failed to fetch previous hunts");

//         const data = await response.json();
//         setHunts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPrevHunts();
//   }, []);

//   const handleViewLeaderboard = (huntId) => {
//     if (!isLoggedin) {
//       toast.error("Please log in to view leaderboard");
//       return;
//     }
//     navigate(`/leaderboard/${huntId}`);
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
//         <p className="text-[#9112BC] text-lg">Loading previous hunts... ⏳</p>
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
//           Previous Hunts
//         </h1>

//         {hunts.length === 0 ? (
//           <p className="text-center text-gray-700 text-lg">No previous hunts found</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {hunts.map((hunt) => (
//             //   <div
//             //     key={hunt._id}
//             //     className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition flex flex-col justify-between cursor-pointer"
//             //   >
//             //     <div className="flex-1 mb-4 md:mb-0">
//             //       <h2 className="text-2xl font-bold text-[#9112BC] mb-2">{hunt.name}</h2>
//             //       <p className="text-gray-600 mb-2">{hunt.description}</p>
//             //       <div className="text-gray-500 text-sm space-y-1">
//             //         <p>
//             //           <strong>Start:</strong> {new Date(hunt.startTime).toLocaleString()}
//             //         </p>
//             //         <p>
//             //           <strong>End:</strong> {new Date(hunt.endTime).toLocaleString()}
//             //         </p>
//             //         <p>
//             //           <strong>Puzzles:</strong> {hunt.puzzleCount}
//             //         </p>
//             //       </div>
//             //     </div>

//             //     {/* Leaderboard Button */}
//             //     <div className="flex-shrink-0 mt-4 md:mt-0">
//             //       <button
//             //         onClick={() => handleViewLeaderboard(hunt._id)}
//             //         className="bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
//             //       >
//             //         Leaderboard
//             //       </button>
//             //     </div>
//             //   </div>
//             <div
//   key={hunt._id}
//   className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition flex flex-col md:flex-row justify-between items-start w-full cursor-pointer"
// >
//   {/* Hunt Details */}
//   <div className="flex-1">
//     <h2 className="text-2xl font-bold text-[#9112BC] mb-2">{hunt.name}</h2>
//     <p className="text-gray-600 mb-2">{hunt.description}</p>
//     <div className="text-gray-500 text-sm space-y-1">
//       <p>
//         <strong>Start:</strong> {new Date(hunt.startTime).toLocaleString()}
//       </p>
//       <p>
//         <strong>End:</strong> {new Date(hunt.endTime).toLocaleString()}
//       </p>
//       <p>
//         <strong>Puzzles:</strong> {hunt.puzzleCount}
//       </p>
//     </div>
//   </div>

//   {/* Leaderboard Button */}
//   <div className="flex-shrink-0 mt-6">
//     <button
//       onClick={() => handleViewLeaderboard(hunt._id)}
//       className="bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
//     >
//       Leaderboard
//     </button>
//   </div>
// </div>

//             ))}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default PrevHunt;


import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const PrevHunt = () => {
  const [hunts, setHunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoggedin } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrevHunts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/hunt/previousHunts");
        if (!response.ok) throw new Error("Failed to fetch previous hunts");
        const data = await response.json();
        setHunts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrevHunts();
  }, []);

  const handleViewLeaderboard = (huntId) => {
    if (!isLoggedin) {
      toast.error("Please log in to view leaderboard");
      return;
    }
    navigate(`/leaderboard/${huntId}`);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
        <p className="text-[#9112BC] text-lg">Loading previous hunts... ⏳</p>
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
          Previous Hunts
        </h1>

        {hunts.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">No previous hunts found</p>
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

                {/* Leaderboard Button */}
                <button
                  onClick={() => handleViewLeaderboard(hunt._id)}
                  className="mt-4 bg-[#9112BC] text-white py-3 px-8 rounded-xl hover:bg-[#AE75DA] transition font-semibold"
                >
                  Leaderboard
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PrevHunt;
