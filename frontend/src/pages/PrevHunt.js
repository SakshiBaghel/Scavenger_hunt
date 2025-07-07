import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

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
            alert("Please log in to view leaderboard");
            return;
        }

        navigate(`/leaderboard/${huntId}`);
    };

    if (loading) return <p>Loading previous hunts... ⏳</p>;
    if (error)
        return (
            <div>
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );

    return (
        <div>
            <h2>Previous Hunts</h2>
            {hunts.length === 0 ? (
                <p>No previous hunts found</p>
            ) : (
                <ul>
                    {hunts.map((hunt) => (
                        <li key={hunt._id} className="hunt-card">
                            <h3>{hunt.name}</h3>
                            <p>{hunt.description}</p>
                            <p>Start: {new Date(hunt.startTime).toLocaleString()}</p>
                            <p>End: {new Date(hunt.endTime).toLocaleString()}</p>
                            <p>
                                Number of Puzzles: <strong>{hunt.puzzleCount}</strong>
                            </p>
                            <button onClick={() => handleViewLeaderboard(hunt._id)}>Leaderboard</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PrevHunt;
