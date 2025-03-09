// // import { useEffect, useState } from 'react';

// // const LiveHunt = () => {
// //     const [hunts, setHunts] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         const fetchLiveHunts = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:4000/api/hunt/liveHunts'); 
// //                 if (!response.ok) {
// //                     throw new Error("Failed to fetch live hunts");
// //                 }
// //                 const data = await response.json();
// //                 setHunts(data);
// //             } catch (err) {
// //                 setError(err.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchLiveHunts();
// //     }, []);

// //     if (loading) return <p>Loading live hunts... ⏳</p>;
// //     if (error) return (
// //         <div>
// //             <p>Error: {error}</p>
// //             <button onClick={() => window.location.reload()}>Retry</button>
// //         </div>
// //     );
// //   return (
// //     <div>
// //       <h2>Live hunts</h2>
// //       {hunts.length === 0 ? (
// //         <p>No Live hunts available</p>
// //       ) : (
// //         <ul>
// //             {hunts.map((hunt) => (
// //                 <li key={hunt._id} className="hunt-card">
// //                     <h3>{hunt.name}</h3>
// //                     <p>{hunt.deccription}</p>
// //                     <p> Starts: {new Date(hunt.startTime).toLocaleString()}</p>
// //                     <p> Ends: {new Date(hunt.endTime).toLocaleString()}</p>
// //                     <p>Number of Puzzles: <strong>{hunt.puzzleCount}</strong></p> {/* Added Puzzle Count */}
// //                 </li>
// //             ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default LiveHunt


// import { useEffect, useState } from "react";

// const LiveHunt = () => {
//     const [hunts, setHunts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

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
//     //     console.log(`Joining hunt with ID: ${huntId}`);
//     //     // You can replace this with an API call to join the hunt
//     // };
//     const handleJoinHunt = (huntId) => {
//         navigate(`/joinHunt/${huntId}`); // Redirect to the JoinHunt page with hunt ID
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



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LiveHunt = () => {
    const [hunts, setHunts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate function

    useEffect(() => {
        const fetchLiveHunts = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/hunt/liveHunts");
                if (!response.ok) {
                    throw new Error("Failed to fetch live hunts");
                }
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

    const handleJoinHunt = (huntId) => {
        navigate(`/joinHunt/${huntId}`); // Redirect to the JoinHunt page with hunt ID
    };

    if (loading) return <p>Loading live hunts... ⏳</p>;
    if (error)
        return (
            <div>
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );

    return (
        <div>
            <h2>Live Hunts</h2>
            {hunts.length === 0 ? (
                <p>No Live hunts available</p>
            ) : (
                <ul>
                    {hunts.map((hunt) => (
                        <li key={hunt._id} className="hunt-card">
                            <h3>{hunt.name}</h3>
                            <p>{hunt.description}</p>
                            <p>Starts: {new Date(hunt.startTime).toLocaleString()}</p>
                            <p>Ends: {new Date(hunt.endTime).toLocaleString()}</p>
                            <p>
                                Number of Puzzles: <strong>{hunt.puzzleCount}</strong>
                            </p>
                            <button onClick={() => handleJoinHunt(hunt._id)}>Join Hunt</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LiveHunt;
