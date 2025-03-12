
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

    // const handleJoinHunt = async (huntId) => {
    //     if (!huntId) {
    //         alert("Hunt ID is missing!"); 
    //         return;
    //     }
    
    //     const dummyPlayerId = "65d6f7e8a9b0c1d2e3f4g5h6"; // Use a fake Player ID for now
    
    //     console.log("Joining Hunt with ID:", huntId); // Debugging log
    
    //     try {
    //         const response = await fetch("http://localhost:4000/api/player/createPlayer", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ huntId: huntId, playerId: dummyPlayerId }), // Ensure correct keys
    //         });
    
    //         const data = await response.json();
    //         if (!response.ok) throw new Error(data.message || "Failed to join the hunt");
    
    //         alert("Joined the hunt successfully!");
    //         navigate(`/joinHunt/${huntId}`);
    //     } catch (error) {
    //         console.error("Error joining hunt:", error); // Log error for debugging
    //         alert(error.message);
    //     }
    // };
    

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
//         const dummyPlayerId = "65d6f7e8a9b0c1d2e3f4g5h6"; // Use a fake Player ID for now

//         try {
//             const response = await fetch(`http://localhost:4000/api/player/createPlayer`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ huntId, playerId: dummyPlayerId }),
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
