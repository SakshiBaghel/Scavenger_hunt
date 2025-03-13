
import React, { useEffect, useState } from "react";

function YourHunt() {
  const [hunts, setHunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyUserId = "67d27807a18ba8e7e700f944"; // Replace with actual user ID when authentication is added

  useEffect(() => {
    const fetchHunts = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${dummyUserId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch hunts");
        }
        const data = await response.json();
        setHunts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHunts();
  }, []);

  const handleCheckSubmission = (huntId) => {
    console.log(`Checking submission for Hunt ID: ${huntId}`);
    // You can navigate to a submission page or fetch submission details here
    // navigate(`CheckSubmission/${huntId}`);
  };

  return (
    <div>
      <h2>Your Hunt</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && hunts.length === 0 && <p>No hunts found.</p>}
      <ul>
        {hunts.map((hunt) => (
          <li key={hunt._id} style={{ marginBottom: "20px" }}>
            <h3>{hunt.name}</h3>
            <p>{hunt.description}</p>
            <p>Start Time: {new Date(hunt.startTime).toLocaleString()}</p>
            <p>End Time: {new Date(hunt.endTime).toLocaleString()}</p>
            <button onClick={() => handleCheckSubmission(hunt._id)}>Check Submission</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourHunt;
