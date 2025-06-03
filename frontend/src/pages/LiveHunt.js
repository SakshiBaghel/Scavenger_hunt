
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const LiveHunt = () => {
//     const [hunts, setHunts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate(); // Initialize navigate function

//     useEffect(() => {
//         const fetchLiveHunts = async () => {
//             try {
//                 const response = await fetch("http://localhost:4000/api/hunt/liveHunts");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch live hunts");
//                 }
//                 const data = await response.json();
//                 setHunts(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchLiveHunts();
//     }, []);

//     // const handleJoinHunt = (huntId) => {
//     //     navigate(`/joinHunt/${huntId}`); // Redirect to the JoinHunt page with hunt ID
//     // };

//     const handleJoinHunt = async (huntId) => {
//         if (!huntId) {
//             alert("Hunt ID is missing!"); 
//             return;
//         }
    
//         const dummyPlayerId = "65d6f7e8a9b0c1d2e3f4g5h6"; // Use a fake Player ID for now
    
//         console.log("Joining Hunt with ID:", huntId); // Debugging log
    
//         try {
//             const response = await fetch("http://localhost:4000/api/player/createPlayer", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ userId: dummyPlayerId, huntId: huntId }), // Ensure correct keys
//             });
    
//             const data = await response.json();
//             if (!response.ok) throw new Error(data.message || "Failed to join the hunt");
    
//             alert("Joined the hunt successfully!");
//             navigate(`/joinHunt/${huntId}`);
//         } catch (error) {
//             console.error("Error joining hunt:", error); // Log error for debugging
//             alert(error.message);
//         }
//     };
    

//     if (loading) return <p>Loading live hunts... ⏳</p>;
//     if (error)
//         return (
//             <div>
//                 <p>Error: {error}</p>
//                 <button onClick={() => window.location.reload()}>Retry</button>
//             </div>
//         );

//     return (
//         <div>
//             <h2>Live Hunts</h2>
//             {hunts.length === 0 ? (
//                 <p>No Live hunts available</p>
//             ) : (
//                 <ul>
//                     {hunts.map((hunt) => (
//                         <li key={hunt._id} className="hunt-card">
//                             <h3>{hunt.name}</h3>
//                             <p>{hunt.description}</p>
//                             <p>Starts: {new Date(hunt.startTime).toLocaleString()}</p>
//                             <p>Ends: {new Date(hunt.endTime).toLocaleString()}</p>
//                             <p>
//                                 Number of Puzzles: <strong>{hunt.puzzleCount}</strong>
//                             </p>
//                             <button onClick={() => handleJoinHunt(hunt._id)}>Join Hunt</button>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default LiveHunt;




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LiveHunt = () => {
//     const [hunts, setHunts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchLiveHunts = async () => {
//             try {
//                 const response = await fetch("http://localhost:4000/api/hunt/liveHunts");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch live hunts");
//                 }
//                 const data = await response.json();
//                 setHunts(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchLiveHunts();
//     }, []);

//     const handleJoinHunt = async (huntId) => {
//         const dummyPlayerId = "65f8e4d9a1b2c3456789abcd"; // Use a fake Player ID for now

//         try {
//             const response = await fetch(`http://localhost:4000/api/player/createPlayer`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ hunt: huntId, user: dummyPlayerId }),
//             });

//             const data = await response.json();
//             if (!response.ok) throw new Error(data.message || "Failed to join the hunt");

//             alert("Joined the hunt successfully!");
//             navigate(`/joinhunt/${huntId}`); // Redirect to the hunt page after joining
//         } catch (error) {
//             alert(error.message);
//         }
//     };

//     if (loading) return <p>Loading live hunts... ⏳</p>;
//     if (error)
//         return (
//             <div>
//                 <p>Error: {error}</p>
//                 <button onClick={() => window.location.reload()}>Retry</button>
//             </div>
//         );

//     return (
//         <div>
//             <h2>Live Hunts</h2>
//             {hunts.length === 0 ? (
//                 <p>No Live hunts available</p>
//             ) : (
//                 <ul>
//                     {hunts.map((hunt) => (
//                         <li key={hunt._id} className="hunt-card">
//                             <h3>{hunt.name}</h3>
//                             <p>{hunt.description}</p>
//                             <p>Starts: {new Date(hunt.startTime).toLocaleString()}</p>
//                             <p>Ends: {new Date(hunt.endTime).toLocaleString()}</p>
//                             <p>
//                                 Number of Puzzles: <strong>{hunt.puzzleCount}</strong>
//                             </p>
//                             <button onClick={() => handleJoinHunt(hunt._id)}>Join Hunt</button>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default LiveHunt;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import LayoutWrapper from '../components/LayoutWrapper';

// const LiveHunt = () => {
//   const [hunts, setHunts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLiveHunts = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/api/hunt/liveHunts");
//         if (!response.ok) {
//           throw new Error("Failed to fetch live hunts");
//         }
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
//     const dummyPlayerId = "65f8e4d9a1b2c3456789abcd"; // Fake Player ID for now

//     try {
//       const response = await fetch(`http://localhost:4000/api/player/createPlayer`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ hunt: huntId, user: dummyPlayerId }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to join the hunt");

//       alert("Joined the hunt successfully!");
//       navigate(`/joinhunt/${huntId}`);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   // Styles
//   const containerStyle = {
//     maxWidth: "700px",
//     margin: "40px auto",
//     padding: "20px 30px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   };

//   const titleStyle = {
//     textAlign: "center",
//     marginBottom: "30px",
//     color: "#222",
//   };

//   const listStyle = {
//     listStyleType: "none",
//     padding: 0,
//   };

//   const cardStyle = {
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "20px 25px",
//     marginBottom: "20px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
//     backgroundColor: "#fff",
//   };

//   const huntTitleStyle = {
//     margin: "0 0 12px 0",
//     color: "#007BFF",
//   };

//   const paragraphStyle = {
//     margin: "6px 0",
//     color: "#444",
//   };

//   const buttonStyle = {
//     marginTop: "14px",
//     padding: "10px 18px",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     fontWeight: "600",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   };

//   const errorStyle = {
//     color: "red",
//     textAlign: "center",
//     marginBottom: "20px",
//   };

//   const loadingStyle = {
//     textAlign: "center",
//     fontSize: "18px",
//     color: "#555",
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={titleStyle}>Live Hunts</h2>

//       {loading && <p style={loadingStyle}>Loading live hunts... ⏳</p>}

//       {error && (
//         <div style={errorStyle}>
//           <p>Error: {error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       {!loading && !error && hunts.length === 0 && <p style={{ textAlign: "center" }}>No live hunts available</p>}

//       {!loading && !error && hunts.length > 0 && (
//         <ul style={listStyle}>
//           {hunts.map((hunt) => (
//             <li key={hunt._id} style={cardStyle}>
//               <h3 style={huntTitleStyle}>{hunt.name}</h3>
//               <p style={paragraphStyle}>{hunt.description}</p>
//               <p style={paragraphStyle}>
//                 <strong>Starts:</strong> {new Date(hunt.startTime).toLocaleString()}
//               </p>
//               <p style={paragraphStyle}>
//                 <strong>Ends:</strong> {new Date(hunt.endTime).toLocaleString()}
//               </p>
//               <p style={paragraphStyle}>
//                 <strong>Number of Puzzles:</strong> {hunt.puzzleCount}
//               </p>
//               <button style={buttonStyle} onClick={() => handleJoinHunt(hunt._id)}>
//                 Join Hunt
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default LiveHunt;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutWrapper from "../components/LayoutWrapper";

const LiveHunt = () => {
  const [hunts, setHunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    const dummyPlayerId = "65f8e4d9a1b2c3456789abcd";
    try {
      const response = await fetch("http://localhost:4000/api/player/createPlayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hunt: huntId, user: dummyPlayerId }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to join the hunt");

      alert("Joined the hunt successfully!");
      navigate(`/joinhunt/${huntId}`);
    } catch (error) {
      alert(error.message);
    }
  };

return (
  <LayoutWrapper>
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-extrabold text-center text-black mb-10">🔥 Live Hunts</h1>

      {loading && (
        <p className="text-center text-white text-lg">Loading live hunts... ⏳</p>
      )}

      {error && (
        <div className="text-center text-red-800">
          <p className="mb-3">NO LIVE HUNTS AVAILABLE</p>
          <button
            onClick={() => window.location.reload()}
            className="green text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && hunts.length === 0 && (
        <div className="text-center text-white">
          <p className="text-xl mb-2">No live hunts available</p>
          <p className="text-lg text-gray-700">Live Hunts: Not Live Now</p>
        </div>
      )}

      {!loading && !error && hunts.length > 0 && (
        <ul className="space-y-6">
          {hunts.map((hunt) => (
            <li
              key={hunt._id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{hunt.name}</h3>
              <p className="text-gray-800 mb-1">{hunt.description}</p>
              <p className="text-gray-600">
                <strong>Starts:</strong> {new Date(hunt.startTime).toLocaleString()}
              </p>
              <p className="text-gray-600">
                <strong>Ends:</strong> {new Date(hunt.endTime).toLocaleString()}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Puzzles:</strong> {hunt.puzzleCount}
              </p>
              <button
                onClick={() => handleJoinHunt(hunt._id)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Join Hunt
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </LayoutWrapper>
);

};

export default LiveHunt;
