import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Leaderboard = () => {
  const { huntId } = useParams(); // assuming route contains /leaderboard/:huntId
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/hunt/leaderboard/${huntId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load leaderboard");
        }

        setLeaderboard(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [huntId]);

  if (loading) return <p>Loading leaderboard... ⏳</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Score</th>
              <th>Completed At</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry._id}>
                <td>{index + 1}</td>
                <td>{entry.user?.name || "Unknown"}</td>
                <td>{entry.score}</td>
                <td>{new Date(entry.timeCompleted).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
