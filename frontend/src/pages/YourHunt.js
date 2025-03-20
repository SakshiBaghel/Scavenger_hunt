// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/theme.css";
// function YourHunt() {
//   const [hunts, setHunts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const dummyUserId = "67d27807a18ba8e7e700f944"; // Replace with actual user ID

//   useEffect(() => {
//     const fetchHunts = async () => {
//       try {
//         console.log("Fetching hunts..."); // ✅ Debugging log
//         const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${dummyUserId}`);
        
//         if (!response.ok) {
//           throw new Error("Failed to fetch hunts");
//         }

//         const data = await response.json();
//         console.log("Fetched Hunts:", data); // ✅ Check data in console

//         setHunts(data);
//       } catch (error) {
//         console.error("Error fetching hunts:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHunts();
//   }, []);

//   const handleCheckSubmission = (huntId) => {
//     console.log(`Checking submission for Hunt ID: ${huntId}`);
//     navigate(`/CheckSubmission/${huntId}`);
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center fw-bold">Your Hunts</h2>

//       {loading && <p className="text-center">Loading...</p>}
//       {error && <p className="text-center text-danger">{error}</p>}

//       {!loading && !error && hunts.length === 0 && (
//         <p className="text-center">No hunts found.</p>
//       )}

//       <ul className="list-group">
//         {hunts.length > 0 ? (
//           hunts.map((hunt) => (
//             <li key={hunt._id} className="list-group-item">
//               <h3 className="fw-bold text-primary">{hunt.name}</h3>
//               <p>{hunt.description}</p>
//               <p>Start Time: {new Date(hunt.startTime).toLocaleString()}</p>
//               <p>End Time: {new Date(hunt.endTime).toLocaleString()}</p>
//               <button
//                 className="btn btn-primary mt-2"
//                 onClick={() => handleCheckSubmission(hunt._id)}
//               >
//                 Check Submission
//               </button>
//             </li>
//           ))
//         ) : (
//           <p className="text-center">No hunts available.</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default YourHunt;
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../styles/theme.css";

// // function YourHunt() {
// //   const [hunts, setHunts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();
  

// //   // Get user ID and token from local storage (assuming they are stored after login)
// //   const userId = localStorage.getItem("userId");
// //   const token = localStorage.getItem("token");
 
// //   useEffect(() => {
// //     const fetchHunts = async () => {
// //       if (!userId) {
// //         setError("User not logged in.");
// //         setLoading(false);
// //         return;
// //       }
// //       try {
// //         console.log("Fetching hunts...");
// //         const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${userId}`, {
// //           method: "GET",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}` // Attach token for authentication
// //           }
// //         });

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch hunts");
// //         }

// //         const data = await response.json();
// //         console.log("Fetched Hunts:", data);

// //         setHunts(data);
// //       } catch (error) {
// //         console.error("Error fetching hunts:", error);
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchHunts();
// //   }, [userId, token]);

// //   const handleCheckSubmission = (huntId) => {
// //     console.log(`Checking submission for Hunt ID: ${huntId}`);
// //     navigate(`/CheckSubmission/${huntId}`);
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <h2 className="text-center fw-bold">Your Hunts</h2>

// //       {loading && <p className="text-center">Loading...</p>}
// //       {error && <p className="text-center text-danger">{error}</p>}

// //       {!loading && !error && hunts.length === 0 && (
// //         <p className="text-center">No hunts found.</p>
// //       )}

// //       <ul className="list-group">
// //         {hunts.length > 0 ? (
// //           hunts.map((hunt) => (
// //             <li key={hunt._id} className="list-group-item">
// //               <h3 className="fw-bold text-primary">{hunt.name}</h3>
// //               <p>{hunt.description}</p>
// //               <p>Start Time: {new Date(hunt.startTime).toLocaleString()}</p>
// //               <p>End Time: {new Date(hunt.endTime).toLocaleString()}</p>
// //               <button
// //                 className="btn btn-primary mt-2"
// //                 onClick={() => handleCheckSubmission(hunt._id)}
// //               >
// //                 Check Submission
// //               </button>
// //             </li>
// //           ))
// //         ) : (
// //           <p className="text-center">No hunts available.</p>
// //         )}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default YourHunt;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/theme.css";

function YourHunt() {
  const [hunts, setHunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHunts = async () => {
      const userId = localStorage.getItem("userId"); // 🔹 Logged-in user ID
      
      if (!userId) {
        setError("User not logged in!");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching hunts for user:", userId); // ✅ Debugging log
        const response = await fetch(`http://localhost:4000/api/hunt/yourHunt/${userId}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch hunts");
        }

        const data = await response.json();
        console.log("Fetched Hunts:", data); // ✅ Check data in console

        setHunts(data);
      } catch (error) {
        console.error("Error fetching hunts:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHunts();
  }, []);

  const handleCheckSubmission = (huntId) => {
    console.log(`Checking submission for Hunt ID: ${huntId}`);
    navigate(`/CheckSubmission/${huntId}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold">Your Hunts</h2>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && hunts.length === 0 && (
        <p className="text-center">No hunts found.</p>
      )}

      <ul className="list-group">
        {hunts.length > 0 ? (
          hunts.map((hunt) => (
            <li key={hunt._id} className="list-group-item">
              <h3 className="fw-bold text-primary">{hunt.name}</h3>
              <p>{hunt.description}</p>
              <p>Start Time: {new Date(hunt.startTime).toLocaleString()}</p>
              <p>End Time: {new Date(hunt.endTime).toLocaleString()}</p>
              <button
                className="btn btn-primary mt-2"
                onClick={() => handleCheckSubmission(hunt._id)}
              >
                Check Submission
              </button>
            </li>
          ))
        ) : (
          <p className="text-center">No hunts available.</p>
        )}
      </ul>
    </div>
  );
}

export default YourHunt;
