// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useParams } from "react-router-dom";
// // // // // import axios from "axios";

// // // // // const CheckSubmission = () => {
// // // // //     const { huntId } = useParams();
// // // // //     const [submissions, setSubmissions] = useState([]);
// // // // //     const [loading, setLoading] = useState(false);
// // // // //     const [error, setError] = useState(null);

// // // // //     useEffect(() => {
// // // // //         if (!huntId) return;

// // // // //         const fetchSubmissions = async () => {
// // // // //             setLoading(true);
// // // // //             setError(null);

// // // // //             try {
// // // // //                 const response = await axios.get(`http://localhost:4000/api/player/submissions/${huntId}`);
// // // // //                 console.log("huntId", huntId)
// // // // //                 setSubmissions(response.data.submissions);
// // // // //             } catch (err) {
// // // // //                 setError("Failed to fetch submissions. Please check the Hunt ID.");
// // // // //             } finally {
// // // // //                 setLoading(false);
// // // // //             }
// // // // //         };

// // // // //         fetchSubmissions();
// // // // //     }, [huntId]);


// // // // //     const updateSubmission = async (submissionId, isCorrect, hintsUsed) => {
// // // // //         const newStatus = isCorrect ? "Correct" : "Wrong";
    
// // // // //         try {
// // // // //             await axios.put(`http://localhost:4000/api/player/updateAction`, {
// // // // //                 userId: submissionId,
// // // // //                 huntId,
// // // // //                 status: newStatus,
// // // // //                 isCorrect,
// // // // //                 hintUsed: hintsUsed,
// // // // //             });
    
// // // // //             let updatedScore = null;
    
// // // // //             if (isCorrect) {
// // // // //                 updatedScore = Math.max(0, 10 - 2 * hintsUsed);
// // // // //                 alert(`Answer marked correct. ${updatedScore} points awarded.`);
// // // // //             } else {
// // // // //                 alert(`Answer marked wrong. No points awarded.`);
// // // // //             }
    
// // // // //             setSubmissions((prevSubmissions) =>
// // // // //                 prevSubmissions.map((sub) =>
// // // // //                     sub._id === submissionId
// // // // //                         ? { ...sub, status: newStatus, score: updatedScore }
// // // // //                         : sub
// // // // //                 )
// // // // //             );
// // // // //         } catch (error) {
// // // // //             console.error("Failed to update submission:", error);
// // // // //             setError("Failed to update submission. Please try again.");
// // // // //         }
// // // // //     };
    

// // // // //     return (
// // // // //         <div className="container mx-auto p-6">
// // // // //             <h1 className="text-3xl font-bold text-center mb-4">Treasure Hunt Submissions</h1>

// // // // //             {loading && <p>Loading submissions...</p>}
// // // // //             {error && <p className="text-red-500">{error}</p>}

// // // // //             <table className="w-full border-collapse border border-gray-300">
// // // // //                 <thead>
// // // // //                     <tr className="bg-gray-200 text-center">
// // // // //                         <th className="border p-2">User ID</th>
// // // // //                         <th className="border p-2">Puzzle Index</th>
// // // // //                         <th className="border p-2">Guessed Image</th>
// // // // //                         <th className="border p-2">Hints Used</th>
// // // // //                         <th className="border p-2">Status</th>
// // // // //                         <th className="border p-2">Score</th>
// // // // //                         <th className="border p-2">Action</th>
// // // // //                     </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                     {submissions.length === 0 ? (
// // // // //                         <tr>
// // // // //                             <td colSpan="7" className="text-center p-4">No submissions found</td>
// // // // //                         </tr>
// // // // //                     ) : (
// // // // //                         submissions.map((submission) => (
// // // // //                             <tr key={submission._id} className="text-center">
// // // // //                                 <td className="border p-2">{submission.userName}</td>
// // // // //                                 <td className="border p-2">{submission.puzzleIndex}</td>
// // // // //                                 <td className="border p-2">
// // // // //                                     <img
// // // // //                                         src={submission.imageUrl}
// // // // //                                         alt="Guess"
// // // // //                                         className="w-20 h-20 object-cover"
// // // // //                                     />
// // // // //                                 </td>
// // // // //                                 <td className="border p-2">{submission.hintUsed}</td>
// // // // //                                 <td className="border p-2">{submission.status ?? "Pending"}</td>
// // // // //                                 <td className="border p-2">
// // // // //                                     {submission.score !== null && submission.score !== undefined
// // // // //                                         ? submission.score
// // // // //                                         : "Not Set"}
// // // // //                                 </td>
// // // // //                                 <td className="border p-2 flex gap-2 justify-center">
// // // // //                                     <button
// // // // //                                         onClick={() =>
// // // // //                                             updateSubmission(submission.userId, true, submission.hintUsed)
// // // // //                                         }
// // // // //                                         className="bg-green-500 text-white px-3 py-1 rounded"
// // // // //                                     >
// // // // //                                         Correct
// // // // //                                     </button>
// // // // //                                     <button
// // // // //                                         onClick={() =>
// // // // //                                             updateSubmission(submission.userId, false, submission.hintUsed)
// // // // //                                         }
// // // // //                                         className="bg-red-500 text-white px-3 py-1 rounded"
// // // // //                                     >
// // // // //                                         Wrong
// // // // //                                     </button>
// // // // //                                 </td>
// // // // //                             </tr>
// // // // //                         ))
// // // // //                     )}
// // // // //                 </tbody>
// // // // //             </table>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default CheckSubmission;


// // // // import React, { useState, useEffect } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import axios from "axios";

// // // // const CheckSubmission = () => {
// // // //     const { huntId } = useParams();
// // // //     const [submissions, setSubmissions] = useState([]);
// // // //     const [loading, setLoading] = useState(false);
// // // //     const [error, setError] = useState(null);
// // // //     const [disabledSubmissions, setDisabledSubmissions] = useState(new Set());

// // // //     useEffect(() => {
// // // //         if (!huntId) return;

// // // //         const fetchSubmissions = async () => {
// // // //             setLoading(true);
// // // //             setError(null);
// // // //             try {
// // // //                 const response = await axios.get(`http://localhost:4000/api/player/submissions/${huntId}`);
// // // //                 setSubmissions(response.data.submissions);
// // // //             } catch (err) {
// // // //                 setError("Failed to fetch submissions. Please check the Hunt ID.");
// // // //             } finally {
// // // //                 setLoading(false);
// // // //             }
// // // //         };

// // // //         fetchSubmissions();
// // // //     }, [huntId]);

// // // //     const updateSubmission = async (submissionId, isCorrect, hintsUsed) => {
// // // //         if (disabledSubmissions.has(submissionId)) return;

// // // //         const newStatus = isCorrect ? "Correct" : "Wrong";

// // // //         try {
// // // //             await axios.put(`http://localhost:4000/api/player/updateAction`, {
// // // //                 userId: submissionId,
// // // //                 huntId,
// // // //                 status: newStatus,
// // // //                 isCorrect,
// // // //                 hintUsed: hintsUsed,
// // // //             });

// // // //             const updatedScore = isCorrect ? Math.max(0, 10 - 2 * hintsUsed) : null;

// // // //             alert(
// // // //                 isCorrect
// // // //                     ? `Answer marked correct. ${updatedScore} points awarded.`
// // // //                     : `Answer marked wrong. No points awarded.`
// // // //             );

// // // //             setSubmissions(prev =>
// // // //                 prev.map(sub =>
// // // //                     sub._id === submissionId
// // // //                         ? { ...sub, status: newStatus, score: updatedScore }
// // // //                         : sub
// // // //                 )
// // // //             );

// // // //             setDisabledSubmissions(prev => new Set(prev).add(submissionId));
// // // //         } catch (error) {
// // // //             console.error("Failed to update submission:", error);
// // // //             setError("Failed to update submission. Please try again.");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="container mx-auto p-6">
// // // //             <h1 className="text-3xl font-bold text-center mb-4">Treasure Hunt Submissions</h1>

// // // //             {loading && <p>Loading submissions...</p>}
// // // //             {error && <p className="text-red-500">{error}</p>}

// // // //             <table className="w-full border-collapse border border-gray-300">
// // // //                 <thead>
// // // //                     <tr className="bg-gray-200 text-center">
// // // //                         <th className="border p-2">User ID</th>
// // // //                         <th className="border p-2">Puzzle Index</th>
// // // //                         <th className="border p-2">Guessed Image</th>
// // // //                         <th className="border p-2">Hints Used</th>
// // // //                         <th className="border p-2">Status</th>
// // // //                         <th className="border p-2">Score</th>
// // // //                         <th className="border p-2">Action</th>
// // // //                     </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                     {submissions.length === 0 ? (
// // // //                         <tr>
// // // //                             <td colSpan="7" className="text-center p-4">No submissions found</td>
// // // //                         </tr>
// // // //                     ) : (
// // // //                         submissions.map((submission) => (
// // // //                             <tr key={submission._id} className="text-center">
// // // //                                 <td className="border p-2">{submission.userName}</td>
// // // //                                 <td className="border p-2">{submission.puzzleIndex}</td>
// // // //                                 <td className="border p-2">
// // // //                                     <img
// // // //                                         src={submission.imageUrl}
// // // //                                         alt="Guess"
// // // //                                         className="w-20 h-20 object-cover"
// // // //                                     />
// // // //                                 </td>
// // // //                                 <td className="border p-2">{submission.hintUsed}</td>
// // // //                                 <td className="border p-2">{submission.status ?? "Pending"}</td>
// // // //                                 <td className="border p-2">
// // // //                                     {submission.score !== null && submission.score !== undefined
// // // //                                         ? submission.score
// // // //                                         : "Not Set"}
// // // //                                 </td>
// // // //                                 <td className="border p-2 flex gap-2 justify-center">
// // // //                                     <button
// // // //                                         disabled={disabledSubmissions.has(submission._id)}
// // // //                                         onClick={() =>
// // // //                                             updateSubmission(submission.userId, true, submission.hintUsed)
// // // //                                         }
// // // //                                         className={`px-3 py-1 rounded ${disabledSubmissions.has(submission._id)
// // // //                                             ? "bg-gray-400 text-white"
// // // //                                             : "bg-green-500 text-white"
// // // //                                             }`}
// // // //                                     >
// // // //                                         Correct
// // // //                                     </button>
// // // //                                     <button
// // // //                                         disabled={disabledSubmissions.has(submission._id)}
// // // //                                         onClick={() =>
// // // //                                             updateSubmission(submission.userId, false, submission.hintUsed)
// // // //                                         }
// // // //                                         className={`px-3 py-1 rounded ${disabledSubmissions.has(submission._id)
// // // //                                             ? "bg-gray-400 text-white"
// // // //                                             : "bg-red-500 text-white"
// // // //                                             }`}
// // // //                                     >
// // // //                                         Wrong
// // // //                                     </button>
// // // //                                 </td>
// // // //                             </tr>
// // // //                         ))
// // // //                     )}
// // // //                 </tbody>
// // // //             </table>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CheckSubmission;


// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "react-router-dom";
// // // import axios from "axios";

// // // const CheckSubmission = () => {
// // //     const { huntId } = useParams();
// // //     const [submissions, setSubmissions] = useState([]);
// // //     const [loading, setLoading] = useState(false);
// // //     const [error, setError] = useState(null);
// // //     const [disabledSubmissions, setDisabledSubmissions] = useState(new Set());

// // //     useEffect(() => {
// // //         if (!huntId) return;

// // //         const fetchSubmissions = async () => {
// // //             setLoading(true);
// // //             setError(null);
// // //             try {
// // //                 const response = await axios.get(`http://localhost:4000/api/player/submissions/${huntId}`);
// // //                 setSubmissions(response.data.submissions);
// // //             } catch (err) {
// // //                 setError("Failed to fetch submissions. Please check the Hunt ID.");
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };

// // //         fetchSubmissions();
// // //     }, [huntId]);

// // //     const updateSubmission = async (submissionId, userId, puzzleIndex, isCorrect, hintsUsed) => {
// // //         if (disabledSubmissions.has(submissionId)) return;

// // //         const newStatus = isCorrect ? "Correct" : "Wrong";

// // //         try {
// // //             await axios.put(`http://localhost:4000/api/player/updateAction`, {
// // //                 userId,
// // //                 huntId,
// // //                 status: newStatus,
// // //                 isCorrect,
// // //                 hintUsed: hintsUsed,
// // //                 puzzleIndex,
// // //             });

// // //             const updatedScore = isCorrect ? Math.max(0, 10 - 2 * hintsUsed) : null;

// // //             alert(
// // //                 isCorrect
// // //                     ? `Answer marked correct. ${updatedScore} points awarded.`
// // //                     : `Answer marked wrong. No points awarded.`
// // //             );

// // //             setSubmissions(prev =>
// // //                 prev.map(sub =>
// // //                     sub._id === submissionId
// // //                         ? { ...sub, status: newStatus, score: updatedScore }
// // //                         : sub
// // //                 )
// // //             );

// // //             setDisabledSubmissions(prev => new Set(prev).add(submissionId));
// // //         } catch (error) {
// // //             console.error("Failed to update submission:", error);
// // //             setError("Failed to update submission. Please try again.");
// // //         }
// // //     };

// // //     return (
// // //         <div className="container mx-auto p-6">
// // //             <h1 className="text-3xl font-bold text-center mb-4">Treasure Hunt Submissions</h1>

// // //             {loading && <p>Loading submissions...</p>}
// // //             {error && <p className="text-red-500">{error}</p>}

// // //             <table className="w-full border-collapse border border-gray-300">
// // //                 <thead>
// // //                     <tr className="bg-gray-200 text-center">
// // //                         <th className="border p-2">User ID</th>
// // //                         <th className="border p-2">Puzzle Index</th>
// // //                         <th className="border p-2">Guessed Image</th>
// // //                         <th className="border p-2">Hints Used</th>
// // //                         <th className="border p-2">Status</th>
// // //                         <th className="border p-2">Score</th>
// // //                         <th className="border p-2">Action</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {submissions.length === 0 ? (
// // //                         <tr>
// // //                             <td colSpan="7" className="text-center p-4">No submissions found</td>
// // //                         </tr>
// // //                     ) : (
// // //                         submissions.map((submission) => (
// // //                             <tr key={submission._id} className="text-center">
// // //                                 <td className="border p-2">{submission.userName}</td>
// // //                                 <td className="border p-2">{submission.puzzleIndex}</td>
// // //                                 <td className="border p-2">
// // //                                     <img
// // //                                         src={submission.imageUrl}
// // //                                         alt="Guess"
// // //                                         className="w-20 h-20 object-cover"
// // //                                     />
// // //                                 </td>
// // //                                 <td className="border p-2">{submission.hintUsed}</td>
// // //                                 <td className="border p-2">{submission.status ?? "Pending"}</td>
// // //                                 <td className="border p-2">
// // //                                     {submission.score !== null && submission.score !== undefined
// // //                                         ? submission.score
// // //                                         : "Not Set"}
// // //                                 </td>
// // //                                 <td className="border p-2 flex gap-2 justify-center">
// // //                                     <button
// // //                                         disabled={disabledSubmissions.has(submission._id)}
// // //                                         onClick={() =>
// // //                                             updateSubmission(submission._id, submission.userId, submission.puzzleIndex, true, submission.hintUsed)
// // //                                         }
// // //                                         className={`px-3 py-1 rounded ${disabledSubmissions.has(submission._id)
// // //                                             ? "bg-gray-400 text-white"
// // //                                             : "bg-green-500 text-white"
// // //                                             }`}
// // //                                     >
// // //                                         Correct
// // //                                     </button>
// // //                                     <button
// // //                                         disabled={disabledSubmissions.has(submission._id)}
// // //                                         onClick={() =>
// // //                                             updateSubmission(submission._id, submission.userId, submission.puzzleIndex, false, submission.hintUsed)
// // //                                         }
// // //                                         className={`px-3 py-1 rounded ${disabledSubmissions.has(submission._id)
// // //                                             ? "bg-gray-400 text-white"
// // //                                             : "bg-red-500 text-white"
// // //                                             }`}
// // //                                     >
// // //                                         Wrong
// // //                                     </button>
// // //                                 </td>
// // //                             </tr>
// // //                         ))
// // //                     )}
// // //                 </tbody>
// // //             </table>
// // //         </div>
// // //     );
// // // };

// // // export default CheckSubmission;


// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";

// // const CheckSubmission = () => {
// //     const { huntId } = useParams();
// //     const [submissions, setSubmissions] = useState([]);
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState(null);
// //     const [disabledSubmissions, setDisabledSubmissions] = useState(new Set());

// //     // ✅ Load reviewed submissions from localStorage
// //     useEffect(() => {
// //         const stored = localStorage.getItem("reviewedSubmissions");
// //         if (stored) {
// //             setDisabledSubmissions(new Set(JSON.parse(stored)));
// //         }
// //     }, []);

// //     useEffect(() => {
// //         if (!huntId) return;

// //         const fetchSubmissions = async () => {
// //             setLoading(true);
// //             setError(null);
// //             try {
// //                 const response = await axios.get(`http://localhost:4000/api/player/submissions/${huntId}`);
// //                 setSubmissions(response.data.submissions);
// //             } catch (err) {
// //                 setError("Failed to fetch submissions. Please check the Hunt ID.");
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchSubmissions();
// //     }, [huntId]);

// //     const updateSubmission = async (submissionId, userId, puzzleIndex, isCorrect, hintsUsed) => {
// //         if (disabledSubmissions.has(submissionId)) return;

// //         const newStatus = isCorrect ? "Correct" : "Wrong";

// //         try {
// //             await axios.put(`http://localhost:4000/api/player/updateAction`, {
// //                 userId,
// //                 huntId,
// //                 status: newStatus,
// //                 isCorrect,
// //                 hintUsed: hintsUsed,
// //                 puzzleIndex,
// //             });

// //             const updatedScore = isCorrect ? Math.max(0, 10 - 2 * hintsUsed) : null;

// //             alert(
// //                 isCorrect
// //                     ? `Answer marked correct. ${updatedScore} points awarded.`
// //                     : `Answer marked wrong. No points awarded.`
// //             );

// //             setSubmissions(prev =>
// //                 prev.map(sub =>
// //                     sub._id === submissionId
// //                         ? { ...sub, status: newStatus, score: updatedScore }
// //                         : sub
// //                 )
// //             );

// //             // ✅ Update localStorage and state
// //             setDisabledSubmissions(prev => {
// //                 const updated = new Set(prev).add(submissionId);
// //                 localStorage.setItem("reviewedSubmissions", JSON.stringify(Array.from(updated)));
// //                 return updated;
// //             });
// //         } catch (error) {
// //             console.error("Failed to update submission:", error);
// //             setError("Failed to update submission. Please try again.");
// //         }
// //     };

// //     return (
// //         <div className="container mx-auto p-6">
// //             <h1 className="text-3xl font-bold text-center mb-4">Treasure Hunt Submissions</h1>

// //             {loading && <p>Loading submissions...</p>}
// //             {error && <p className="text-red-500">{error}</p>}

// //             <table className="w-full border-collapse border border-gray-300">
// //                 <thead>
// //                     <tr className="bg-gray-200 text-center">
// //                         <th className="border p-2">User ID</th>
// //                         <th className="border p-2">Puzzle Index</th>
// //                         <th className="border p-2">Guessed Image</th>
// //                         <th className="border p-2">Hints Used</th>
// //                         <th className="border p-2">Status</th>
// //                         <th className="border p-2">Score</th>
// //                         <th className="border p-2">Action</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {submissions.length === 0 ? (
// //                         <tr>
// //                             <td colSpan="7" className="text-center p-4">No submissions found</td>
// //                         </tr>
// //                     ) : (
// //                         submissions.map((submission) => (
// //                             <tr key={submission._id} className="text-center">
// //                                 <td className="border p-2">{submission.userName}</td>
// //                                 <td className="border p-2">{submission.puzzleIndex}</td>
// //                                 <td className="border p-2">
// //                                     <img
// //                                         src={submission.imageUrl}
// //                                         alt="Guess"
// //                                         className="w-20 h-20 object-cover"
// //                                     />
// //                                 </td>
// //                                 <td className="border p-2">{submission.hintUsed}</td>
// //                                 <td className="border p-2">{submission.status ?? "Pending"}</td>
// //                                 <td className="border p-2">
// //                                     {submission.score !== null && submission.score !== undefined
// //                                         ? submission.score
// //                                         : "Not Set"}
// //                                 </td>
// //                                 <td className="border p-2 flex gap-2 justify-center">
// //                                     <button
// //                                         disabled={disabledSubmissions.has(submission._id)}
// //                                         onClick={() =>
// //                                             updateSubmission(submission._id, submission.userId, submission.puzzleIndex, true, submission.hintUsed)
// //                                         }
// //                                         className={`px-3 py-1 rounded ${disabledSubmissions.has(submission._id)
// //                                             ? "bg-gray-400"
// //                                             : "bg-green-500"} text-white`}
// //                                     >
// //                                         Correct
// //                                     </button>
// //                                     <button
// //                                         disabled={disabledSubmissions.has(submission._id)}
// //                                         onClick={() =>
// //                                             updateSubmission(submission._id, submission.userId, submission.puzzleIndex, false, submission.hintUsed)
// //                                         }
// //                                         className={`px-3 py-1 rounded ${disabledSubmissions.has(submission._id)
// //                                             ? "bg-gray-400"
// //                                             : "bg-red-500"} text-white`}
// //                                     >
// //                                         Wrong
// //                                     </button>
// //                                 </td>
// //                             </tr>
// //                         ))
// //                     )}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default CheckSubmission;


// // Updated CheckSubmission.jsx
// // - Added Navbar & Footer
// // - Applied provided color palette
// // - Improved table & button styling (no logic change)

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const CheckSubmission = () => {
//   const { huntId } = useParams();
//   const [submissions, setSubmissions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [disabledSubmissions, setDisabledSubmissions] = useState(new Set());

//   useEffect(() => {
//     const stored = localStorage.getItem("reviewedSubmissions");
//     if (stored) setDisabledSubmissions(new Set(JSON.parse(stored)));
//   }, []);

//   useEffect(() => {
//     if (!huntId) return;

//     const fetchSubmissions = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await axios.get(`http://localhost:4000/api/player/submissions/${huntId}`);
//         setSubmissions(res.data.submissions);
//       } catch {
//         setError("Failed to fetch submissions.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubmissions();
//   }, [huntId]);

//   const updateSubmission = async (id, userId, puzzleIndex, isCorrect, hintsUsed) => {
//     if (disabledSubmissions.has(id)) return;

//     const status = isCorrect ? "Correct" : "Wrong";
//     const score = isCorrect ? Math.max(0, 10 - 2 * hintsUsed) : null;

//     try {
//       await axios.put(`http://localhost:4000/api/player/updateAction`, {
//         userId,
//         huntId,
//         status,
//         isCorrect,
//         hintUsed: hintsUsed,
//         puzzleIndex,
//       });

//       setSubmissions(prev =>
//         prev.map(s => (s._id === id ? { ...s, status, score } : s))
//       );

//       setDisabledSubmissions(prev => {
//         const updated = new Set(prev).add(id);
//         localStorage.setItem("reviewedSubmissions", JSON.stringify([...updated]));
//         return updated;
//       });
//     } catch {
//       setError("Failed to update submission.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
//       <Navbar />

//       <div className="flex-grow container mx-auto p-6">
//         <h1 className="text-4xl font-extrabold text-center text-[#9112BC] mb-6">
//           Treasure Hunt Submissions
//         </h1>

//         {loading && <p className="text-center">Loading submissions...</p>}
//         {error && <p className="text-center text-red-600">{error}</p>}

//         <div className="overflow-x-auto">
//           <table className="w-full border border-[#AE75DA] bg-white rounded-xl overflow-hidden">
//             <thead className="bg-[#E9E294]">
//               <tr className="text-center text-[#9112BC]">
//                 <th className="p-3 border">User</th>
//                 <th className="p-3 border">Puzzle</th>
//                 <th className="p-3 border">Image</th>
//                 <th className="p-3 border">Hints</th>
//                 <th className="p-3 border">Status</th>
//                 <th className="p-3 border">Score</th>
//                 <th className="p-3 border">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submissions.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="text-center p-6">No submissions found</td>
//                 </tr>
//               ) : (
//                 submissions.map(sub => (
//                   <tr key={sub._id} className="text-center hover:bg-[#FFFCB8] transition">
//                     <td className="border p-3">{sub.userName}</td>
//                     <td className="border p-3">{sub.puzzleIndex}</td>
//                     <td className="border p-3">
//                       <img src={sub.imageUrl} alt="Guess" className="w-20 h-20 mx-auto rounded-lg object-cover" />
//                     </td>
//                     <td className="border p-3">{sub.hintUsed}</td>
//                     <td className="border p-3 font-semibold">
//                       {sub.status ?? "Pending"}
//                     </td>
//                     <td className="border p-3">
//                       {sub.score ?? "Not Set"}
//                     </td>
//                     <td className="border p-3 flex gap-2 justify-center">
//                       <button
//                         disabled={disabledSubmissions.has(sub._id)}
//                         onClick={() => updateSubmission(sub._id, sub.userId, sub.puzzleIndex, true, sub.hintUsed)}
//                         className={`px-4 py-1 rounded-lg text-white font-semibold ${
//                           disabledSubmissions.has(sub._id)
//                             ? "bg-gray-400"
//                             : "bg-[#9112BC] hover:bg-[#AE75DA]"
//                         }`}
//                       >
//                         Correct
//                       </button>
//                       <button
//                         disabled={disabledSubmissions.has(sub._id)}
//                         onClick={() => updateSubmission(sub._id, sub.userId, sub.puzzleIndex, false, sub.hintUsed)}
//                         className={`px-4 py-1 rounded-lg text-white font-semibold ${
//                           disabledSubmissions.has(sub._id)
//                             ? "bg-gray-400"
//                             : "bg-red-500"
//                         }`}
//                       >
//                         Wrong
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CheckSubmission;

// Updated CheckSubmission.jsx
// - Added Navbar & Footer
// - Applied provided color palette
// - Improved table & button styling (no logic change)

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CheckSubmission = () => {
  const { huntId } = useParams();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disabledSubmissions, setDisabledSubmissions] = useState(new Set());

  useEffect(() => {
    const stored = localStorage.getItem("reviewedSubmissions");
    if (stored) setDisabledSubmissions(new Set(JSON.parse(stored)));
  }, []);

  useEffect(() => {
    if (!huntId) return;

    const fetchSubmissions = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`http://localhost:4000/api/player/submissions/${huntId}`);
        setSubmissions(res.data.submissions);
      } catch {
        setError("Failed to fetch submissions.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [huntId]);

  const updateSubmission = async (id, userId, puzzleIndex, isCorrect, hintsUsed) => {
    if (disabledSubmissions.has(id)) return;

    const status = isCorrect ? "Correct" : "Wrong";
    const score = isCorrect ? Math.max(0, 10 - 2 * hintsUsed) : null;

    try {
      await axios.put(`http://localhost:4000/api/player/updateAction`, {
        userId,
        huntId,
        status,
        isCorrect,
        hintUsed: hintsUsed,
        puzzleIndex,
      });

      setSubmissions(prev =>
        prev.map(s => (s._id === id ? { ...s, status, score } : s))
      );

      setDisabledSubmissions(prev => {
        const updated = new Set(prev).add(id);
        localStorage.setItem("reviewedSubmissions", JSON.stringify([...updated]));
        return updated;
      });
    } catch {
      setError("Failed to update submission.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
      <Navbar />

      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center text-[#9112BC] mb-6">
          Treasure Hunt Submissions
        </h1>

        {loading && <p className="text-center">Loading submissions...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="overflow-x-auto">
          <table className="w-full border border-[#AE75DA] bg-white rounded-xl overflow-hidden">
            <thead className="bg-[#E9E294]">
              <tr className="text-center text-[#9112BC]">
                <th className="p-3 border">User</th>
                <th className="p-3 border">Puzzle</th>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Hints</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Score</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center p-6">No submissions found</td>
                </tr>
              ) : (
                submissions.map(sub => (
                  <tr key={sub._id} className="text-center hover:bg-[#FFFCB8] transition">
                    <td className="border p-3">{sub.userName}</td>
                    <td className="border p-3">{sub.puzzleIndex}</td>
                    <td className="border p-3">
                      <img src={sub.imageUrl} alt="Guess" className="w-20 h-20 mx-auto rounded-lg object-cover" />
                    </td>
                    <td className="border p-3">{sub.hintUsed}</td>
                    <td className="border p-3 font-semibold">
                      {sub.status ?? "Pending"}
                    </td>
                    <td className="border p-3">
                      {sub.score ?? "Not Set"}
                    </td>
                    <td className="border p-3 flex gap-2 justify-center">
                      <button
                        disabled={disabledSubmissions.has(sub._id)}
                        onClick={() => updateSubmission(sub._id, sub.userId, sub.puzzleIndex, true, sub.hintUsed)}
                        className={`px-4 py-1 rounded-lg text-white font-semibold ${
                          disabledSubmissions.has(sub._id)
                            ? "bg-gray-400"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        Correct
                      </button>
                      <button
                        disabled={disabledSubmissions.has(sub._id)}
                        onClick={() => updateSubmission(sub._id, sub.userId, sub.puzzleIndex, false, sub.hintUsed)}
                        className={`px-4 py-1 rounded-lg text-white font-semibold ${
                          disabledSubmissions.has(sub._id)
                            ? "bg-gray-400"
                            : "bg-red-500"
                        }`}
                      >
                        Wrong
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckSubmission;
