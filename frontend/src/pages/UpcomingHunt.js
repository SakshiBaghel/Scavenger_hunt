import { useEffect, useState } from 'react';

const UpcomingHunt = () => {
    const [hunts, setHunts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLiveHunts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/hunt/upcomingHunts'); 
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

    if (loading) return <p>Loading live hunts... ⏳</p>;
    if (error) return (
        <div>
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
        </div>
    );
  return (
    <div>
      <h2>Upcoming hunts</h2>
      {hunts.length === 0 ? (
        <p>No Live hunts available</p>
      ) : (
        <ul>
            {hunts.map((hunt) => (
                <li key={hunt._id} className="hunt-card">
                    <h3>{hunt.name}</h3>
                    <p>{hunt.deccription}</p>
                    <p> Starts: {new Date(hunt.startTime).toLocaleString()}</p>
                    <p> Ends: {new Date(hunt.endTime).toLocaleString()}</p>
                    <p>Number of Puzzles: <strong>{hunt.puzzleCount}</strong></p> {/* Added Puzzle Count */}
                </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingHunt