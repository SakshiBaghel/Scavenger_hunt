
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function YourHunt() {
//   const [hunts, setHunts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const dummyUserId = "67d579fbed75779ad83d6c28"; // Replace with actual user ID when authentication is added

//   useEffect(() => {
//     const fetchHunts = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${dummyUserId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch hunts");
//         }
//         const data = await response.json();
//         setHunts(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHunts();
//   }, []);

//   const handleCheckSubmission = (huntId) => {
//     console.log(`Checking submission for Hunt ID: ${huntId}`);
//     navigate(`CheckSubmission/${huntId}`);
//   };

//   return (
//     <div>
//       <h2>Your Hunt</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && !error && hunts.length === 0 && <p>No hunts found.</p>}
//       <ul>
//         {hunts.map((hunt) => (
//           <li key={hunt._id} style={{ marginBottom: "20px" }}>
//             <h3>{hunt.name}</h3>
//             <p>{hunt.description}</p>
//             <p>Start Time: {new Date(hunt.startTime).toLocaleString()}</p>
//             <p>End Time: {new Date(hunt.endTime).toLocaleString()}</p>
//             <button onClick={() => handleCheckSubmission(hunt._id)}>Check Submission</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default YourHunt;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutWrapper from '../components/LayoutWrapper';

function YourHunt() {
  const [hunts, setHunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dummyUserId = '67d579fbed75779ad83d6c28'; // Replace with actual user ID when authentication added

  useEffect(() => {
    const fetchHunts = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${dummyUserId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch hunts');
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
    navigate(`/yourHunt/${dummyUserId}/CheckSubmission/${huntId}`);
  };

  return (
    <LayoutWrapper>
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Your Hunts</h2>
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">Not Available hunt<br/>let's Create a Hunt</p>}
      {!loading && !error && hunts.length === 0 && (
        <p className="text-center text-gray-500">No hunts found.</p>
      )}
      <ul className="space-y-6">
        {hunts.map((hunt) => (
          <li
            key={hunt._id}
            className="bg-white rounded-lg shadow p-5 flex flex-col md:flex-row md:justify-between md:items-center hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{hunt.name}</h3>
              <p className="text-gray-600 mb-1">{hunt.description}</p>
              <p className="text-sm text-gray-500">
                Start Time: {new Date(hunt.startTime).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                End Time: {new Date(hunt.endTime).toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => handleCheckSubmission(hunt._id)}
              className="mt-4 md:mt-0 px-5 py-2 bg-green-600 text-white rounded hover:bg-black transition"
            >
              Check Submission
            </button>
          </li>
        ))}
      </ul>
    </div>
  </LayoutWrapper>
  );
}

export default YourHunt;
