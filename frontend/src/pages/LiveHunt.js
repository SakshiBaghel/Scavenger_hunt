import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

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

    // const handleJoinHunt = async (huntId) => {
    //     if (!isLoggedin || !userData || !userData._id) {
    //         alert("You must be logged in to join a hunt.");
    //         return;
    //     }

    //     try {
    //         const response = await fetch("http://localhost:4000/api/player/createPlayer", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ hunt: huntId, user: userData._id }),
    //         });

    //         const data = await response.json();
    //         if (!response.ok) throw new Error(data.message || "Failed to join the hunt");

    //         alert("Joined the hunt successfully!");
    //         navigate(`/joinhunt/${huntId}`);
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // };
    const handleJoinHunt = async (huntId) => {
    if (!isLoggedin || !userData || !userData._id) {
        alert("You must be logged in to join a hunt.");
        return;
    }

    try {
        const response = await fetch("http://localhost:4000/api/player/createPlayer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ hunt: huntId, user: userData._id }),
        });

        const data = await response.json();

        // If player already joined, skip the alert and redirect
        if (response.ok || data.message === "Player already joined this hunt") {
            navigate(`/joinhunt/${huntId}`);
        } else {
            throw new Error(data.message || "Failed to join the hunt");
        }
    } catch (error) {
        alert(error.message);
    }
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
