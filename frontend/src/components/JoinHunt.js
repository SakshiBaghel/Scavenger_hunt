// // // // // import { useEffect, useState, useContext } from "react";
// // // // // import { useParams } from "react-router-dom";
// // // // // import axios from "axios";
// // // // // import { AppContext } from "../context/AppContext";

// // // // // const JoinHunt = () => {
// // // // //     const { userData } = useContext(AppContext);
// // // // //     const { huntId } = useParams();

// // // // //     const [hunt, setHunt] = useState(null);
// // // // //     const [loading, setLoading] = useState(true);
// // // // //     const [error, setError] = useState(null);
// // // // //     const [showHints, setShowHints] = useState({});
// // // // //     const [hintsUsed, setHintsUsed] = useState({});
// // // // //     const [selectedImages, setSelectedImages] = useState({});
// // // // //     const [uploadedImages, setUploadedImages] = useState({});
// // // // //     const [playerGuesses, setPlayerGuesses] = useState({});
// // // // //     const [totalScore, setTotalScore] = useState(0);

// // // // //     // Load from localStorage on mount
// // // // //     useEffect(() => {
// // // // //         setHintsUsed(JSON.parse(localStorage.getItem("hintsUsed")) || {});
// // // // //         setShowHints(JSON.parse(localStorage.getItem("showHints")) || {});
// // // // //         setUploadedImages(JSON.parse(localStorage.getItem("uploadedImages")) || {});
// // // // //     }, []);

// // // // //     useEffect(() => {
// // // // //         const fetchHunt = async () => {
// // // // //             try {
// // // // //                 const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
// // // // //                 setHunt(response.data);
// // // // //             } catch {
// // // // //                 setError("Failed to fetch hunt details");
// // // // //             } finally {
// // // // //                 setLoading(false);
// // // // //             }
// // // // //         };

// // // // //         const fetchPlayerProgress = async () => {
// // // // //             if (!userData?._id) return;

// // // // //             try {
// // // // //                 const res = await axios.get(`http://localhost:4000/api/player/progress/${userData._id}/${huntId}`);
// // // // //                 const guessesByPuzzle = {};
// // // // //                 res.data.guesses.forEach(g => {
// // // // //                     if (!guessesByPuzzle[g.puzzleIndex]) {
// // // // //                         guessesByPuzzle[g.puzzleIndex] = [];
// // // // //                     }
// // // // //                     guessesByPuzzle[g.puzzleIndex].push(g);
// // // // //                 });

// // // // //                 const progressMap = {};
// // // // //                 Object.entries(guessesByPuzzle).forEach(([index, guesses]) => {
// // // // //                     const latestGuess = guesses[guesses.length - 1];
// // // // //                     progressMap[index] = {
// // // // //                         status: latestGuess.status,
// // // // //                         score: latestGuess.score
// // // // //                     };
// // // // //                 });

// // // // //                 setPlayerGuesses(progressMap);
// // // // //                 setTotalScore(res.data.totalScore || 0);
// // // // //             } catch {
// // // // //                 console.error("Could not load progress");
// // // // //             }
// // // // //         };

// // // // //         fetchHunt();
// // // // //         fetchPlayerProgress();
// // // // //     }, [huntId, userData]);

// // // // //     const toggleHint = (puzzleIndex, hintIndex) => {
// // // // //         const updatedHints = {
// // // // //             ...showHints,
// // // // //             [`${puzzleIndex}-${hintIndex}`]: true
// // // // //         };
// // // // //         const updatedHintsUsed = {
// // // // //             ...hintsUsed,
// // // // //             [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1
// // // // //         };

// // // // //         setShowHints(updatedHints);
// // // // //         setHintsUsed(updatedHintsUsed);
// // // // //         localStorage.setItem("showHints", JSON.stringify(updatedHints));
// // // // //         localStorage.setItem("hintsUsed", JSON.stringify(updatedHintsUsed));
// // // // //     };

// // // // //     const handleFileChange = (puzzleIndex, event) => {
// // // // //         const file = event.target.files[0];
// // // // //         if (file) {
// // // // //             setSelectedImages(prev => ({
// // // // //                 ...prev,
// // // // //                 [puzzleIndex]: file
// // // // //             }));
// // // // //         }
// // // // //     };

// // // // //     const handleSubmit = async (puzzleIndex) => {
// // // // //         const puzzleData = playerGuesses[puzzleIndex];
// // // // //         const currentStatus = puzzleData?.status ?? "NotAnswered";

// // // // //         if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
// // // // //             alert(`You cannot resubmit for a puzzle marked '${currentStatus}'.`);
// // // // //             return;
// // // // //         }

// // // // //         const image = selectedImages[puzzleIndex];
// // // // //         if (!image) {
// // // // //             alert("Please select an image before submitting.");
// // // // //             return;
// // // // //         }

// // // // //         const formData = new FormData();
// // // // //         formData.append("photo", image);
// // // // //         formData.append("userId", userData._id);
// // // // //         formData.append("huntId", huntId);
// // // // //         formData.append("puzzleIndex", puzzleIndex);
// // // // //         formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

// // // // //         try {
// // // // //             const res = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData);
// // // // //             const newImageUrl = res.data.imageUrl;

// // // // //             const updatedUploads = {
// // // // //                 ...uploadedImages,
// // // // //                 [puzzleIndex]: newImageUrl
// // // // //             };

// // // // //             setUploadedImages(updatedUploads);
// // // // //             localStorage.setItem("uploadedImages", JSON.stringify(updatedUploads));

// // // // //             setPlayerGuesses(prev => ({
// // // // //                 ...prev,
// // // // //                 [puzzleIndex]: {
// // // // //                     status: "Pending",
// // // // //                     score: 0
// // // // //                 }
// // // // //             }));

// // // // //             alert("Photo uploaded and marked as Pending.");
// // // // //         } catch (err) {
// // // // //             console.error("Error submitting photo:", err);
// // // // //             alert("Failed to upload photo.");
// // // // //         }
// // // // //     };

// // // // //     if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
// // // // //     if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
// // // // //     if (!hunt) return <h2 style={{ textAlign: "center" }}>Hunt not found</h2>;

// // // // //     return (
// // // // //         <div className="container" style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}>
// // // // //             <h1>{hunt.name}</h1>
// // // // //             <p>{hunt.description}</p>
// // // // //             <h3>Start Time: {new Date(hunt.startTime).toLocaleString()}</h3>
// // // // //             <h3>End Time: {new Date(hunt.endTime).toLocaleString()}</h3>
// // // // //             <h3>Total Score: {totalScore}</h3>

// // // // //             <h2>Puzzles:</h2>
// // // // //             {hunt.puzzles.map((puzzle, puzzleIndex) => {
// // // // //                 const status = playerGuesses[puzzleIndex]?.status || "NotAnswered";
// // // // //                 const score = playerGuesses[puzzleIndex]?.score ?? "Not Set";
// // // // //                 const isDisabled = !["NotAnswered", "Wrong"].includes(status);

// // // // //                 return (
// // // // //                     <div key={puzzleIndex} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
// // // // //                         <h3>Clue: {puzzle.clue}</h3>

// // // // //                         {puzzle.hints.map((hint, hintIndex) => (
// // // // //                             <div key={hintIndex}>
// // // // //                                 <button
// // // // //                                     onClick={() => toggleHint(puzzleIndex, hintIndex)}
// // // // //                                     disabled={showHints[`${puzzleIndex}-${hintIndex}`]}
// // // // //                                 >
// // // // //                                     Open Hint {hintIndex + 1}
// // // // //                                 </button>
// // // // //                                 {showHints[`${puzzleIndex}-${hintIndex}`] && <p>Hint: {hint.hint}</p>}
// // // // //                             </div>
// // // // //                         ))}

// // // // //                         <p>Hints Used: {hintsUsed[puzzleIndex] || 0}</p>
// // // // //                         <p>Status: {status}</p>
// // // // //                         <p>Score: {score}</p>

// // // // //                         <input
// // // // //                             type="file"
// // // // //                             accept="image/*"
// // // // //                             onChange={(e) => handleFileChange(puzzleIndex, e)}
// // // // //                             disabled={isDisabled}
// // // // //                         />
// // // // //                         {selectedImages[puzzleIndex] && (
// // // // //                             <div>
// // // // //                                 <p>Selected: {selectedImages[puzzleIndex].name}</p>
// // // // //                                 <img
// // // // //                                     src={URL.createObjectURL(selectedImages[puzzleIndex])}
// // // // //                                     alt="Preview"
// // // // //                                     style={{ width: "100px", height: "100px", objectFit: "cover" }}
// // // // //                                 />
// // // // //                             </div>
// // // // //                         )}
// // // // //                         <button onClick={() => handleSubmit(puzzleIndex)} disabled={isDisabled}>
// // // // //                             Upload & Submit
// // // // //                         </button>

// // // // //                         {uploadedImages[puzzleIndex] && (
// // // // //                             <div>
// // // // //                                 <p>Uploaded Image:</p>
// // // // //                                 <img
// // // // //                                     src={uploadedImages[puzzleIndex]}
// // // // //                                     alt="Submitted"
// // // // //                                     style={{ width: "150px", height: "150px", objectFit: "cover" }}
// // // // //                                 />
// // // // //                             </div>
// // // // //                         )}
// // // // //                     </div>
// // // // //                 );
// // // // //             })}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default JoinHunt;


// // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // import { useParams } from "react-router-dom";
// // // // // import axios from "axios";
// // // // // import { AppContext } from "../context/AppContext";

// // // // // const JoinHunt = () => {
// // // // //     const { userData } = useContext(AppContext);
// // // // //     const { huntId } = useParams();

// // // // //     const [hunt, setHunt] = useState(null);
// // // // //     const [loading, setLoading] = useState(true);
// // // // //     const [error, setError] = useState(null);
// // // // //     const [showHints, setShowHints] = useState({});
// // // // //     const [hintsUsed, setHintsUsed] = useState({});
// // // // //     const [selectedImages, setSelectedImages] = useState({});
// // // // //     const [uploadedImages, setUploadedImages] = useState({});
// // // // //     const [playerGuesses, setPlayerGuesses] = useState({});
// // // // //     const [totalScore, setTotalScore] = useState(0);

// // // // //     // Load from localStorage on mount
// // // // //     useEffect(() => {
// // // // //         setHintsUsed(JSON.parse(localStorage.getItem("hintsUsed")) || {});
// // // // //         setShowHints(JSON.parse(localStorage.getItem("showHints")) || {});
// // // // //         setUploadedImages(JSON.parse(localStorage.getItem("uploadedImages")) || {});
// // // // //     }, []);

// // // // //     useEffect(() => {
// // // // //         const fetchHunt = async () => {
// // // // //             try {
// // // // //                 const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
// // // // //                 setHunt(response.data);
// // // // //             } catch {
// // // // //                 setError("Failed to fetch hunt details");
// // // // //             } finally {
// // // // //                 setLoading(false);
// // // // //             }
// // // // //         };

// // // // //         const fetchPlayerProgress = async () => {
// // // // //             if (!userData?._id) return;

// // // // //             try {
// // // // //                 const res = await axios.get(`http://localhost:4000/api/player/progress/${userData._id}/${huntId}`);
// // // // //                 const guessesByPuzzle = {};
// // // // //                 res.data.guesses.forEach(g => {
// // // // //                     if (!guessesByPuzzle[g.puzzleIndex]) {
// // // // //                         guessesByPuzzle[g.puzzleIndex] = [];
// // // // //                     }
// // // // //                     guessesByPuzzle[g.puzzleIndex].push(g);
// // // // //                 });

// // // // //                 const progressMap = {};
// // // // //                 let totalScoreCount = 0;

// // // // //                 Object.entries(guessesByPuzzle).forEach(([index, guesses]) => {
// // // // //                     const latestGuess = guesses[guesses.length - 1];
// // // // //                     progressMap[index] = {
// // // // //                         status: latestGuess.status,
// // // // //                         score: latestGuess.score
// // // // //                     };
// // // // //                     totalScoreCount += latestGuess.score || 0;
// // // // //                 });

// // // // //                 setPlayerGuesses(progressMap);
// // // // //                 setTotalScore(totalScoreCount || 0);
// // // // //             } catch {
// // // // //                 console.error("Could not load progress");
// // // // //             }
// // // // //         };

// // // // //         fetchHunt();
// // // // //         fetchPlayerProgress();
// // // // //     }, [huntId, userData]);

// // // // //     const toggleHint = (puzzleIndex, hintIndex) => {
// // // // //         const updatedHints = {
// // // // //             ...showHints,
// // // // //             [`${puzzleIndex}-${hintIndex}`]: true
// // // // //         };
// // // // //         const updatedHintsUsed = {
// // // // //             ...hintsUsed,
// // // // //             [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1
// // // // //         };

// // // // //         setShowHints(updatedHints);
// // // // //         setHintsUsed(updatedHintsUsed);
// // // // //         localStorage.setItem("showHints", JSON.stringify(updatedHints));
// // // // //         localStorage.setItem("hintsUsed", JSON.stringify(updatedHintsUsed));
// // // // //     };

// // // // //     const handleFileChange = (puzzleIndex, event) => {
// // // // //         const file = event.target.files[0];
// // // // //         if (file) {
// // // // //             setSelectedImages(prev => ({
// // // // //                 ...prev,
// // // // //                 [puzzleIndex]: file
// // // // //             }));
// // // // //         }
// // // // //     };

// // // // //     const handleSubmit = async (puzzleIndex) => {
// // // // //         const puzzleData = playerGuesses[puzzleIndex];
// // // // //         const currentStatus = puzzleData?.status ?? "NotAnswered";

// // // // //         if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
// // // // //             alert(`You cannot resubmit for a puzzle marked '${currentStatus}'.`);
// // // // //             return;
// // // // //         }

// // // // //         const image = selectedImages[puzzleIndex];
// // // // //         if (!image) {
// // // // //             alert("Please select an image before submitting.");
// // // // //             return;
// // // // //         }

// // // // //         const formData = new FormData();
// // // // //         formData.append("photo", image);
// // // // //         formData.append("userId", userData._id);
// // // // //         formData.append("huntId", huntId);
// // // // //         formData.append("puzzleIndex", puzzleIndex);
// // // // //         formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

// // // // //         try {
// // // // //             const res = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData);
// // // // //             const newImageUrl = res.data.imageUrl;

// // // // //             const updatedUploads = {
// // // // //                 ...uploadedImages,
// // // // //                 [puzzleIndex]: newImageUrl
// // // // //             };

// // // // //             setUploadedImages(updatedUploads);
// // // // //             localStorage.setItem("uploadedImages", JSON.stringify(updatedUploads));

// // // // //             setPlayerGuesses(prev => ({
// // // // //                 ...prev,
// // // // //                 [puzzleIndex]: {
// // // // //                     status: "Pending",
// // // // //                     score: 0
// // // // //                 }
// // // // //             }));

// // // // //             alert("Photo uploaded and marked as Pending.");
// // // // //         } catch (err) {
// // // // //             console.error("Error submitting photo:", err);
// // // // //             alert("Failed to upload photo.");
// // // // //         }
// // // // //     };

// // // // //     if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
// // // // //     if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
// // // // //     if (!hunt) return <h2 style={{ textAlign: "center" }}>Hunt not found</h2>;

// // // // //     return (
// // // // //         <div className="container" style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}>
// // // // //             <h1>{hunt.name}</h1>
// // // // //             <p>{hunt.description}</p>
// // // // //             <h3>Start Time: {new Date(hunt.startTime).toLocaleString()}</h3>
// // // // //             <h3>End Time: {new Date(hunt.endTime).toLocaleString()}</h3>
// // // // //             <h3>Total Score: {totalScore}</h3>

// // // // //             <h2>Puzzles:</h2>
// // // // //             {hunt.puzzles.map((puzzle, puzzleIndex) => {
// // // // //                 const status = playerGuesses[puzzleIndex]?.status || "NotAnswered";
// // // // //                 const score = playerGuesses[puzzleIndex]?.score ?? "Not Set";
// // // // //                 const isDisabled = !["NotAnswered", "Wrong"].includes(status);

// // // // //                 return (
// // // // //                     <div key={puzzleIndex} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
// // // // //                         <h3>Clue: {puzzle.clue}</h3>

// // // // //                         {puzzle.hints.map((hint, hintIndex) => (
// // // // //                             <div key={hintIndex}>
// // // // //                                 <button
// // // // //                                     onClick={() => toggleHint(puzzleIndex, hintIndex)}
// // // // //                                     disabled={showHints[`${puzzleIndex}-${hintIndex}`]}
// // // // //                                 >
// // // // //                                     Open Hint {hintIndex + 1}
// // // // //                                 </button>
// // // // //                                 {showHints[`${puzzleIndex}-${hintIndex}`] && <p>Hint: {hint.hint}</p>}
// // // // //                             </div>
// // // // //                         ))}

// // // // //                         <p>Hints Used: {hintsUsed[puzzleIndex] || 0}</p>
// // // // //                         <p>Status: {status}</p>
// // // // //                         <p>Score: {score}</p>

// // // // //                         <input
// // // // //                             type="file"
// // // // //                             accept="image/*"
// // // // //                             onChange={(e) => handleFileChange(puzzleIndex, e)}
// // // // //                             disabled={isDisabled}
// // // // //                         />
// // // // //                         {selectedImages[puzzleIndex] && (
// // // // //                             <div>
// // // // //                                 <p>Selected: {selectedImages[puzzleIndex].name}</p>
// // // // //                                 <img
// // // // //                                     src={URL.createObjectURL(selectedImages[puzzleIndex])}
// // // // //                                     alt="Preview"
// // // // //                                     style={{ width: "100px", height: "100px", objectFit: "cover" }}
// // // // //                                 />
// // // // //                             </div>
// // // // //                         )}
// // // // //                         <button onClick={() => handleSubmit(puzzleIndex)} disabled={isDisabled}>
// // // // //                             Upload & Submit
// // // // //                         </button>

// // // // //                         {uploadedImages[puzzleIndex] && (
// // // // //                             <div>
// // // // //                                 <p>Uploaded Image:</p>
// // // // //                                 <img
// // // // //                                     src={uploadedImages[puzzleIndex]}
// // // // //                                     alt="Submitted"
// // // // //                                     style={{ width: "150px", height: "150px", objectFit: "cover" }}
// // // // //                                 />
// // // // //                             </div>
// // // // //                         )}
// // // // //                     </div>
// // // // //                 );
// // // // //             })}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default JoinHunt;

// // // // import React, { useEffect, useState, useContext } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import axios from "axios";
// // // // import { AppContext } from "../context/AppContext";

// // // // const JoinHunt = () => {
// // // //     const { userData } = useContext(AppContext);
// // // //     const { huntId } = useParams();

// // // //     const [hunt, setHunt] = useState(null);
// // // //     const [loading, setLoading] = useState(true);
// // // //     const [error, setError] = useState(null);
// // // //     const [showHints, setShowHints] = useState({});
// // // //     const [hintsUsed, setHintsUsed] = useState({});
// // // //     const [selectedImages, setSelectedImages] = useState({});
// // // //     const [uploadedImages, setUploadedImages] = useState({});
// // // //     const [playerGuesses, setPlayerGuesses] = useState({});
// // // //     const [totalScore, setTotalScore] = useState(0);

// // // //     const hintsKey = `hintsUsed-${userData?._id}-${huntId}`;
// // // //     const showHintsKey = `showHints-${userData?._id}-${huntId}`;
// // // //     const uploadedKey = `uploadedImages-${userData?._id}-${huntId}`;

// // // //     // Load from localStorage on mount (scoped by user and hunt)
// // // //     useEffect(() => {
// // // //         if (!userData || !huntId) return;
// // // //         setHintsUsed(JSON.parse(localStorage.getItem(hintsKey)) || {});
// // // //         setShowHints(JSON.parse(localStorage.getItem(showHintsKey)) || {});
// // // //         setUploadedImages(JSON.parse(localStorage.getItem(uploadedKey)) || {});
// // // //     }, [userData, huntId]);

// // // //     useEffect(() => {
// // // //         const fetchHunt = async () => {
// // // //             try {
// // // //                 const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
// // // //                 setHunt(response.data);
// // // //             } catch {
// // // //                 setError("Failed to fetch hunt details");
// // // //             } finally {
// // // //                 setLoading(false);
// // // //             }
// // // //         };

// // // //         const fetchPlayerProgress = async () => {
// // // //             if (!userData?._id) return;
// // // //             try {
// // // //                 const res = await axios.get(`http://localhost:4000/api/player/progress/${userData._id}/${huntId}`);
// // // //                 const progressMap = {};
// // // //                 let totalScoreCount = 0;
// // // //                 res.data.guesses.forEach(g => {
// // // //                     progressMap[g.puzzleIndex] = {
// // // //                         status: g.status,
// // // //                         score: g.score
// // // //                     };
// // // //                     totalScoreCount += g.score || 0;
// // // //                 });
// // // //                 setPlayerGuesses(progressMap);
// // // //                 setTotalScore(totalScoreCount);
// // // //             } catch {
// // // //                 console.error("Could not load progress");
// // // //             }
// // // //         };

// // // //         fetchHunt();
// // // //         fetchPlayerProgress();
// // // //     }, [huntId, userData]);

// // // //     const toggleHint = (puzzleIndex, hintIndex) => {
// // // //         const updatedHints = {
// // // //             ...showHints,
// // // //             [`${puzzleIndex}-${hintIndex}`]: true
// // // //         };
// // // //         const updatedHintsUsed = {
// // // //             ...hintsUsed,
// // // //             [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1
// // // //         };

// // // //         setShowHints(updatedHints);
// // // //         setHintsUsed(updatedHintsUsed);
// // // //         localStorage.setItem(showHintsKey, JSON.stringify(updatedHints));
// // // //         localStorage.setItem(hintsKey, JSON.stringify(updatedHintsUsed));
// // // //     };

// // // //     const handleFileChange = (puzzleIndex, event) => {
// // // //         const file = event.target.files[0];
// // // //         if (file) {
// // // //             setSelectedImages(prev => ({
// // // //                 ...prev,
// // // //                 [puzzleIndex]: file
// // // //             }));
// // // //         }
// // // //     };

// // // //     const handleSubmit = async (puzzleIndex) => {
// // // //         const puzzleData = playerGuesses[puzzleIndex];
// // // //         const currentStatus = puzzleData?.status ?? "NotAnswered";

// // // //         if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
// // // //             alert(`You cannot resubmit for a puzzle marked '${currentStatus}'.`);
// // // //             return;
// // // //         }

// // // //         const image = selectedImages[puzzleIndex];
// // // //         if (!image) {
// // // //             alert("Please select an image before submitting.");
// // // //             return;
// // // //         }

// // // //         const formData = new FormData();
// // // //         formData.append("photo", image);
// // // //         formData.append("userId", userData._id);
// // // //         formData.append("huntId", huntId);
// // // //         formData.append("puzzleIndex", puzzleIndex);
// // // //         formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

// // // //         try {
// // // //             const res = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData);
// // // //             const newImageUrl = res.data.imageUrl;

// // // //             const updatedUploads = {
// // // //                 ...uploadedImages,
// // // //                 [puzzleIndex]: newImageUrl
// // // //             };

// // // //             setUploadedImages(updatedUploads);
// // // //             localStorage.setItem(uploadedKey, JSON.stringify(updatedUploads));

// // // //             setPlayerGuesses(prev => ({
// // // //                 ...prev,
// // // //                 [puzzleIndex]: {
// // // //                     status: "Pending",
// // // //                     score: 0
// // // //                 }
// // // //             }));

// // // //             alert("Photo uploaded and marked as Pending.");
// // // //         } catch (err) {
// // // //             console.error("Error submitting photo:", err);
// // // //             alert("Failed to upload photo.");
// // // //         }
// // // //     };

// // // //     if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
// // // //     if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
// // // //     if (!hunt) return <h2 style={{ textAlign: "center" }}>Hunt not found</h2>;

// // // //     return (
// // // //         <div className="container" style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}>
// // // //             <h1>{hunt.name}</h1>
// // // //             <p>{hunt.description}</p>
// // // //             <h3>Start Time: {new Date(hunt.startTime).toLocaleString()}</h3>
// // // //             <h3>End Time: {new Date(hunt.endTime).toLocaleString()}</h3>
// // // //             <h3>Total Score: {totalScore}</h3>

// // // //             <h2>Puzzles:</h2>
// // // //             {hunt.puzzles.map((puzzle, puzzleIndex) => {
// // // //                 const status = playerGuesses[puzzleIndex]?.status || "NotAnswered";
// // // //                 const score = playerGuesses[puzzleIndex]?.score ?? "Not Set";
// // // //                 const isDisabled = !["NotAnswered", "Wrong"].includes(status);

// // // //                 return (
// // // //                     <div key={puzzleIndex} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
// // // //                         <h3>Clue: {puzzle.clue}</h3>

// // // //                         {puzzle.hints.map((hint, hintIndex) => (
// // // //                             <div key={hintIndex}>
// // // //                                 <button
// // // //                                     onClick={() => toggleHint(puzzleIndex, hintIndex)}
// // // //                                     disabled={showHints[`${puzzleIndex}-${hintIndex}`]}
// // // //                                 >
// // // //                                     Open Hint {hintIndex + 1}
// // // //                                 </button>
// // // //                                 {showHints[`${puzzleIndex}-${hintIndex}`] && <p>Hint: {hint.hint}</p>}
// // // //                             </div>
// // // //                         ))}

// // // //                         <p>Hints Used: {hintsUsed[puzzleIndex] || 0}</p>
// // // //                         <p>Status: {status}</p>
// // // //                         <p>Score: {score}</p>

// // // //                         <input
// // // //                             type="file"
// // // //                             accept="image/*"
// // // //                             onChange={(e) => handleFileChange(puzzleIndex, e)}
// // // //                             disabled={isDisabled}
// // // //                         />
// // // //                         {selectedImages[puzzleIndex] && (
// // // //                             <div>
// // // //                                 <p>Selected: {selectedImages[puzzleIndex].name}</p>
// // // //                                 <img
// // // //                                     src={URL.createObjectURL(selectedImages[puzzleIndex])}
// // // //                                     alt="Preview"
// // // //                                     style={{ width: "100px", height: "100px", objectFit: "cover" }}
// // // //                                 />
// // // //                             </div>
// // // //                         )}
// // // //                         <button onClick={() => handleSubmit(puzzleIndex)} disabled={isDisabled}>
// // // //                             Upload & Submit
// // // //                         </button>

// // // //                         {uploadedImages[puzzleIndex] && (
// // // //                             <div>
// // // //                                 <p>Uploaded Image:</p>
// // // //                                 <img
// // // //                                     src={uploadedImages[puzzleIndex]}
// // // //                                     alt="Submitted"
// // // //                                     style={{ width: "150px", height: "150px", objectFit: "cover" }}
// // // //                                 />
// // // //                             </div>
// // // //                         )}
// // // //                     </div>
// // // //                 );
// // // //             })}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default JoinHunt;



// // // import React, { useEffect, useState, useContext } from "react";
// // // import { useParams } from "react-router-dom";
// // // import axios from "axios";
// // // import { AppContext } from "../context/AppContext";

// // // const JoinHunt = () => {
// // //   const { userData } = useContext(AppContext);
// // //   const { huntId } = useParams();

// // //   const [hunt, setHunt] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [showHints, setShowHints] = useState({});
// // //   const [hintsUsed, setHintsUsed] = useState({});
// // //   const [selectedImages, setSelectedImages] = useState({});
// // //   const [uploadedImages, setUploadedImages] = useState({});
// // //   const [playerGuesses, setPlayerGuesses] = useState({});
// // //   const [totalScore, setTotalScore] = useState(0);

// // //   const hintsKey = `hintsUsed-${userData?._id}-${huntId}`;
// // //   const showHintsKey = `showHints-${userData?._id}-${huntId}`;
// // //   const uploadedKey = `uploadedImages-${userData?._id}-${huntId}`;

// // //   // Load from localStorage
// // //   useEffect(() => {
// // //     if (!userData || !huntId) return;
// // //     setHintsUsed(JSON.parse(localStorage.getItem(hintsKey)) || {});
// // //     setShowHints(JSON.parse(localStorage.getItem(showHintsKey)) || {});
// // //     setUploadedImages(JSON.parse(localStorage.getItem(uploadedKey)) || {});
// // //   }, [userData, huntId]);

// // //   useEffect(() => {
// // //     const fetchHunt = async () => {
// // //       try {
// // //         const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
// // //         setHunt(response.data);
// // //       } catch {
// // //         setError("Failed to fetch hunt details");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     const fetchPlayerProgress = async () => {
// // //       if (!userData?._id) return;
// // //       try {
// // //         const res = await axios.get(`http://localhost:4000/api/player/progress/${userData._id}/${huntId}`);
// // //         const progressMap = {};
// // //         let totalScoreCount = 0;
// // //         res.data.guesses.forEach((g) => {
// // //           progressMap[g.puzzleIndex] = { status: g.status, score: g.score };
// // //           totalScoreCount += g.score || 0;
// // //         });
// // //         setPlayerGuesses(progressMap);
// // //         setTotalScore(totalScoreCount);
// // //       } catch {
// // //         console.error("Could not load progress");
// // //       }
// // //     };

// // //     fetchHunt();
// // //     fetchPlayerProgress();
// // //   }, [huntId, userData]);

// // //   const toggleHint = (puzzleIndex, hintIndex) => {
// // //     const updatedHints = { ...showHints, [`${puzzleIndex}-${hintIndex}`]: true };
// // //     const updatedHintsUsed = { ...hintsUsed, [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1 };

// // //     setShowHints(updatedHints);
// // //     setHintsUsed(updatedHintsUsed);
// // //     localStorage.setItem(showHintsKey, JSON.stringify(updatedHints));
// // //     localStorage.setItem(hintsKey, JSON.stringify(updatedHintsUsed));
// // //   };

// // //   const handleFileChange = (puzzleIndex, event) => {
// // //     const file = event.target.files[0];
// // //     if (file) {
// // //       setSelectedImages((prev) => ({ ...prev, [puzzleIndex]: file }));
// // //     }
// // //   };

// // //   const handleSubmit = async (puzzleIndex) => {
// // //     const puzzleData = playerGuesses[puzzleIndex];
// // //     const currentStatus = puzzleData?.status ?? "NotAnswered";

// // //     if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
// // //       alert(`Cannot resubmit for a puzzle marked '${currentStatus}'.`);
// // //       return;
// // //     }

// // //     const image = selectedImages[puzzleIndex];
// // //     if (!image) {
// // //       alert("Please select an image before submitting.");
// // //       return;
// // //     }

// // //     const formData = new FormData();
// // //     formData.append("photo", image);
// // //     formData.append("userId", userData._id);
// // //     formData.append("huntId", huntId);
// // //     formData.append("puzzleIndex", puzzleIndex);
// // //     formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

// // //     try {
// // //       const res = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData);
// // //       const newImageUrl = res.data.imageUrl;

// // //       const updatedUploads = { ...uploadedImages, [puzzleIndex]: newImageUrl };
// // //       setUploadedImages(updatedUploads);
// // //       localStorage.setItem(uploadedKey, JSON.stringify(updatedUploads));

// // //       setPlayerGuesses((prev) => ({ ...prev, [puzzleIndex]: { status: "Pending", score: 0 } }));
// // //       alert("Photo uploaded and marked as Pending.");
// // //     } catch (err) {
// // //       console.error("Error submitting photo:", err);
// // //       alert("Failed to upload photo.");
// // //     }
// // //   };

// // //   if (loading) return <p className="text-center text-lg mt-10">Loading...</p>;
// // //   if (error) return <p className="text-center text-red-600 text-lg mt-10">{error}</p>;
// // //   if (!hunt) return <p className="text-center text-lg mt-10">Hunt not found</p>;

// // //   return (
// // //     <div className="min-h-screen bg-[#FFFCB8] py-12 px-6">
// // //       <div className="max-w-4xl mx-auto">
// // //         <div className="text-center mb-8">
// // //           <h1 className="text-3xl font-bold text-[#9112BC] mb-2">{hunt.name}</h1>
// // //           <p className="text-gray-700 mb-2">{hunt.description}</p>
// // //           <p className="text-gray-500 mb-1">Start: {new Date(hunt.startTime).toLocaleString()}</p>
// // //           <p className="text-gray-500 mb-1">End: {new Date(hunt.endTime).toLocaleString()}</p>
// // //           <p className="text-gray-700 font-semibold">Total Score: {totalScore}</p>
// // //         </div>

// // //         <h2 className="text-2xl font-bold text-[#9112BC] mb-6">Puzzles</h2>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //           {hunt.puzzles.map((puzzle, puzzleIndex) => {
// // //             const status = playerGuesses[puzzleIndex]?.status || "NotAnswered";
// // //             const score = playerGuesses[puzzleIndex]?.score ?? "Not Set";
// // //             const isDisabled = !["NotAnswered", "Wrong"].includes(status);

// // //             return (
// // //               <div key={puzzleIndex} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col">
// // //                 <h3 className="text-lg font-bold text-[#9112BC] mb-3">Clue: {puzzle.clue}</h3>

// // //                 {puzzle.hints.map((hint, hintIndex) => (
// // //                   <div key={hintIndex} className="mb-2">
// // //                     <button
// // //                       onClick={() => toggleHint(puzzleIndex, hintIndex)}
// // //                       disabled={showHints[`${puzzleIndex}-${hintIndex}`]}
// // //                       className="bg-[#9112BC] text-white py-1 px-3 rounded-md hover:bg-[#AE75DA] transition text-sm"
// // //                     >
// // //                       Open Hint {hintIndex + 1}
// // //                     </button>
// // //                     {showHints[`${puzzleIndex}-${hintIndex}`] && <p className="text-gray-600 mt-1">Hint: {hint.hint}</p>}
// // //                   </div>
// // //                 ))}

// // //                 <p className="text-gray-500 mt-2">Hints Used: {hintsUsed[puzzleIndex] || 0}</p>
// // //                 <p className="text-gray-500">Status: {status}</p>
// // //                 <p className="text-gray-500 mb-3">Score: {score}</p>

// // //                 <input
// // //                   type="file"
// // //                   accept="image/*"
// // //                   onChange={(e) => handleFileChange(puzzleIndex, e)}
// // //                   disabled={isDisabled}
// // //                   className="mb-3"
// // //                 />
// // //                 {selectedImages[puzzleIndex] && (
// // //                   <div className="mb-3">
// // //                     <p>Selected: {selectedImages[puzzleIndex].name}</p>
// // //                     <img
// // //                       src={URL.createObjectURL(selectedImages[puzzleIndex])}
// // //                       alt="Preview"
// // //                       className="w-32 h-32 object-cover rounded-md mt-1"
// // //                     />
// // //                   </div>
// // //                 )}

// // //                 <button
// // //                   onClick={() => handleSubmit(puzzleIndex)}
// // //                   disabled={isDisabled}
// // //                   className="bg-[#9112BC] text-white py-2 px-4 rounded-xl hover:bg-[#AE75DA] transition font-semibold mt-2"
// // //                 >
// // //                   Upload & Submit
// // //                 </button>

// // //                 {uploadedImages[puzzleIndex] && (
// // //                   <div className="mt-3">
// // //                     <p className="text-gray-600 mb-1">Uploaded Image:</p>
// // //                     <img
// // //                       src={uploadedImages[puzzleIndex]}
// // //                       alt="Submitted"
// // //                       className="w-36 h-36 object-cover rounded-md"
// // //                     />
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default JoinHunt;


// // import React, { useEffect, useState, useContext } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import { AppContext } from "../context/AppContext";

// // const JoinHunt = () => {
// //   const { userData } = useContext(AppContext);
// //   const { huntId } = useParams();

// //   const [hunt, setHunt] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [showHints, setShowHints] = useState({});
// //   const [hintsUsed, setHintsUsed] = useState({});
// //   const [selectedImages, setSelectedImages] = useState({});
// //   const [uploadedImages, setUploadedImages] = useState({});
// //   const [playerGuesses, setPlayerGuesses] = useState({});
// //   const [totalScore, setTotalScore] = useState(0);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [timeLeft, setTimeLeft] = useState("");

// //   const hintsKey = `hintsUsed-${userData?._id}-${huntId}`;
// //   const showHintsKey = `showHints-${userData?._id}-${huntId}`;
// //   const uploadedKey = `uploadedImages-${userData?._id}-${huntId}`;

// //   // Load from localStorage
// //   useEffect(() => {
// //     if (!userData || !huntId) return;
// //     setHintsUsed(JSON.parse(localStorage.getItem(hintsKey)) || {});
// //     setShowHints(JSON.parse(localStorage.getItem(showHintsKey)) || {});
// //     setUploadedImages(JSON.parse(localStorage.getItem(uploadedKey)) || {});
// //   }, [userData, huntId]);

// //   useEffect(() => {
// //     const fetchHunt = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
// //         setHunt(response.data);
// //         updateTimer(response.data.endTime);
// //       } catch {
// //         setError("Failed to fetch hunt details");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     const fetchPlayerProgress = async () => {
// //       if (!userData?._id) return;
// //       try {
// //         const res = await axios.get(`http://localhost:4000/api/player/progress/${userData._id}/${huntId}`);
// //         const progressMap = {};
// //         let totalScoreCount = 0;
// //         res.data.guesses.forEach((g) => {
// //           progressMap[g.puzzleIndex] = { status: g.status, score: g.score };
// //           totalScoreCount += g.score || 0;
// //         });
// //         setPlayerGuesses(progressMap);
// //         setTotalScore(totalScoreCount);
// //       } catch {
// //         console.error("Could not load progress");
// //       }
// //     };

// //     fetchHunt();
// //     fetchPlayerProgress();
// //   }, [huntId, userData]);

// //   // Timer countdown
// //   const updateTimer = (endTime) => {
// //     const interval = setInterval(() => {
// //       const now = new Date().getTime();
// //       const distance = new Date(endTime).getTime() - now;

// //       if (distance < 0) {
// //         clearInterval(interval);
// //         setTimeLeft("Hunt ended");
// //         return;
// //       }

// //       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
// //       const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
// //       const minutes = Math.floor((distance / 1000 / 60) % 60);
// //       const seconds = Math.floor((distance / 1000) % 60);

// //       setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
// //     }, 1000);
// //   };

// //   const toggleHint = (puzzleIndex, hintIndex) => {
// //     const updatedHints = { ...showHints, [`${puzzleIndex}-${hintIndex}`]: true };
// //     const updatedHintsUsed = { ...hintsUsed, [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1 };

// //     setShowHints(updatedHints);
// //     setHintsUsed(updatedHintsUsed);
// //     localStorage.setItem(showHintsKey, JSON.stringify(updatedHints));
// //     localStorage.setItem(hintsKey, JSON.stringify(updatedHintsUsed));
// //   };

// //   const handleFileChange = (puzzleIndex, event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       setSelectedImages((prev) => ({ ...prev, [puzzleIndex]: file }));
// //     }
// //   };

// //   const handleSubmit = async (puzzleIndex) => {
// //     const puzzleData = playerGuesses[puzzleIndex];
// //     const currentStatus = puzzleData?.status ?? "NotAnswered";

// //     if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
// //       alert(`Cannot resubmit for a puzzle marked '${currentStatus}'.`);
// //       return;
// //     }

// //     const image = selectedImages[puzzleIndex];
// //     if (!image) {
// //       alert("Please select an image before submitting.");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("photo", image);
// //     formData.append("userId", userData._id);
// //     formData.append("huntId", huntId);
// //     formData.append("puzzleIndex", puzzleIndex);
// //     formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

// //     try {
// //       const res = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData);
// //       const newImageUrl = res.data.imageUrl;

// //       const updatedUploads = { ...uploadedImages, [puzzleIndex]: newImageUrl };
// //       setUploadedImages(updatedUploads);
// //       localStorage.setItem(uploadedKey, JSON.stringify(updatedUploads));

// //       setPlayerGuesses((prev) => ({ ...prev, [puzzleIndex]: { status: "Pending", score: 0 } }));
// //       alert("Photo uploaded and marked as Pending.");
// //     } catch (err) {
// //       console.error("Error submitting photo:", err);
// //       alert("Failed to upload photo.");
// //     }
// //   };

// //   const handlePrev = () => {
// //     setCurrentIndex((prev) => (prev === 0 ? hunt.puzzles.length - 1 : prev - 1));
// //   };

// //   const handleNext = () => {
// //     setCurrentIndex((prev) => (prev === hunt.puzzles.length - 1 ? 0 : prev + 1));
// //   };

// //   if (loading) return <p className="text-center text-lg mt-10">Loading...</p>;
// //   if (error) return <p className="text-center text-red-600 text-lg mt-10">{error}</p>;
// //   if (!hunt) return <p className="text-center text-lg mt-10">Hunt not found</p>;

// //   const puzzle = hunt.puzzles[currentIndex];
// //   const status = playerGuesses[currentIndex]?.status || "NotAnswered";
// //   const score = playerGuesses[currentIndex]?.score ?? "Not Set";
// //   const isDisabled = !["NotAnswered", "Wrong"].includes(status);

// //   return (
// //     <div className="min-h-screen bg-[#FFFCB8] py-12 px-6 flex flex-col items-center">
// //       <div className="max-w-2xl w-full text-center mb-8">
// //         <h1 className="text-4xl font-extrabold text-[#9112BC] mb-2">{hunt.name}</h1>
// //         <p className="text-lg text-gray-700 mb-2">{hunt.description}</p>
// //         <p className="text-xl text-gray-900 font-semibold">Total Score: {totalScore}</p>
// //         <p className="text-gray-500 mt-1">Time Left: {timeLeft}</p>
// //       </div>

// //       <div className="relative w-full max-w-xl">
// //         {/* Left Arrow */}
// //         <button
// //           onClick={handlePrev}
// //           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#9112BC] text-white p-3 rounded-full hover:bg-[#AE75DA] transition"
// //         >
// //           &#8592;
// //         </button>

// //         {/* Puzzle Card */}
// //         <div className="bg-white rounded-3xl p-6 shadow-lg mx-8">
// //           <h3 className="text-2xl font-bold text-[#9112BC] mb-3">Clue: {puzzle.clue}</h3>

// //           {puzzle.hints.map((hint, hintIndex) => (
// //             <div key={hintIndex} className="mb-2">
// //               <button
// //                 onClick={() => toggleHint(currentIndex, hintIndex)}
// //                 disabled={showHints[`${currentIndex}-${hintIndex}`]}
// //                 className="bg-[#9112BC] text-white py-1 px-3 rounded-md hover:bg-[#AE75DA] transition text-sm"
// //               >
// //                 Open Hint {hintIndex + 1}
// //               </button>
// //               {showHints[`${currentIndex}-${hintIndex}`] && <p className="text-gray-600 mt-1">Hint: {hint.hint}</p>}
// //             </div>
// //           ))}

// //           <p className="text-gray-500 mt-2">Hints Used: {hintsUsed[currentIndex] || 0}</p>
// //           <p className="text-gray-500">Status: {status}</p>
// //           <p className="text-gray-500 mb-3">Score: {score}</p>

// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => handleFileChange(currentIndex, e)}
// //             disabled={isDisabled}
// //             className="mb-3"
// //           />
// //           {selectedImages[currentIndex] && (
// //             <div className="mb-3">
// //               <p>Selected: {selectedImages[currentIndex].name}</p>
// //               <img
// //                 src={URL.createObjectURL(selectedImages[currentIndex])}
// //                 alt="Preview"
// //                 className="w-32 h-32 object-cover rounded-md mt-1"
// //               />
// //             </div>
// //           )}

// //           <button
// //             onClick={() => handleSubmit(currentIndex)}
// //             disabled={isDisabled}
// //             className="bg-[#9112BC] text-white py-2 px-4 rounded-xl hover:bg-[#AE75DA] transition font-semibold mt-2"
// //           >
// //             Upload & Submit
// //           </button>

// //           {uploadedImages[currentIndex] && (
// //             <div className="mt-3">
// //               <p className="text-gray-600 mb-1">Uploaded Image:</p>
// //               <img
// //                 src={uploadedImages[currentIndex]}
// //                 alt="Submitted"
// //                 className="w-36 h-36 object-cover rounded-md"
// //               />
// //             </div>
// //           )}
// //         </div>

// //         {/* Right Arrow */}
// //         <button
// //           onClick={handleNext}
// //           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#9112BC] text-white p-3 rounded-full hover:bg-[#AE75DA] transition"
// //         >
// //           &#8594;
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JoinHunt;


// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { AppContext } from "../context/AppContext";

// const JoinHunt = () => {
//   const { userData } = useContext(AppContext);
//   const { huntId } = useParams();

//   const [hunt, setHunt] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showHints, setShowHints] = useState({});
//   const [hintsUsed, setHintsUsed] = useState({});
//   const [selectedImages, setSelectedImages] = useState({});
//   const [uploadedImages, setUploadedImages] = useState({});
//   const [playerGuesses, setPlayerGuesses] = useState({});
//   const [totalScore, setTotalScore] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState("");

//   const hintsKey = `hintsUsed-${userData?._id}-${huntId}`;
//   const showHintsKey = `showHints-${userData?._id}-${huntId}`;
//   const uploadedKey = `uploadedImages-${userData?._id}-${huntId}`;

//   // Load from localStorage
//   useEffect(() => {
//     if (!userData || !huntId) return;
//     setHintsUsed(JSON.parse(localStorage.getItem(hintsKey)) || {});
//     setShowHints(JSON.parse(localStorage.getItem(showHintsKey)) || {});
//     setUploadedImages(JSON.parse(localStorage.getItem(uploadedKey)) || {});
//   }, [userData, huntId]);

//   useEffect(() => {
//     const fetchHunt = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
//         setHunt(response.data);
//         updateTimer(response.data.endTime);
//       } catch {
//         setError("Failed to fetch hunt details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchPlayerProgress = async () => {
//       if (!userData?._id) return;
//       try {
//         const res = await axios.get(`http://localhost:4000/api/player/progress/${userData._id}/${huntId}`);
//         const progressMap = {};
//         let totalScoreCount = 0;
//         res.data.guesses.forEach((g) => {
//           progressMap[g.puzzleIndex] = { status: g.status, score: g.score };
//           totalScoreCount += g.score || 0;
//         });
//         setPlayerGuesses(progressMap);
//         setTotalScore(totalScoreCount);
//       } catch {
//         console.error("Could not load progress");
//       }
//     };

//     fetchHunt();
//     fetchPlayerProgress();
//   }, [huntId, userData]);

//   // Timer countdown
//   const updateTimer = (endTime) => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = new Date(endTime).getTime() - now;

//       if (distance < 0) {
//         clearInterval(interval);
//         setTimeLeft("Hunt ended");
//         return;
//       }

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((distance / 1000 / 60) % 60);
//       const seconds = Math.floor((distance / 1000) % 60);

//       setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//     }, 1000);
//   };

//   const toggleHint = (puzzleIndex, hintIndex) => {
//     const updatedHints = { ...showHints, [`${puzzleIndex}-${hintIndex}`]: true };
//     const updatedHintsUsed = { ...hintsUsed, [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1 };

//     setShowHints(updatedHints);
//     setHintsUsed(updatedHintsUsed);
//     localStorage.setItem(showHintsKey, JSON.stringify(updatedHints));
//     localStorage.setItem(hintsKey, JSON.stringify(updatedHintsUsed));
//   };

//   const handleFileChange = (puzzleIndex, event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedImages((prev) => ({ ...prev, [puzzleIndex]: file }));
//     }
//   };

//   const handleSubmit = async (puzzleIndex) => {
//     const puzzleData = playerGuesses[puzzleIndex];
//     const currentStatus = puzzleData?.status ?? "NotAnswered";

//     if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
//       alert(`Cannot resubmit for a puzzle marked '${currentStatus}'.`);
//       return;
//     }

//     const image = selectedImages[puzzleIndex];
//     if (!image) {
//       alert("Please select an image before submitting.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("photo", image);
//     formData.append("userId", userData._id);
//     formData.append("huntId", huntId);
//     formData.append("puzzleIndex", puzzleIndex);
//     formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

//     try {
//       const res = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData);
//       const newImageUrl = res.data.imageUrl;

//       const updatedUploads = { ...uploadedImages, [puzzleIndex]: newImageUrl };
//       setUploadedImages(updatedUploads);
//       localStorage.setItem(uploadedKey, JSON.stringify(updatedUploads));

//       setPlayerGuesses((prev) => ({ ...prev, [puzzleIndex]: { status: "Pending", score: 0 } }));
//       alert("Photo uploaded and marked as Pending.");
//     } catch (err) {
//       console.error("Error submitting photo:", err);
//       alert("Failed to upload photo.");
//     }
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? hunt.puzzles.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === hunt.puzzles.length - 1 ? 0 : prev + 1));
//   };

//   if (loading) return <p className="text-center text-lg mt-10">Loading...</p>;
//   if (error) return <p className="text-center text-red-600 text-lg mt-10">{error}</p>;
//   if (!hunt) return <p className="text-center text-lg mt-10">Hunt not found</p>;

//   const puzzle = hunt.puzzles[currentIndex];
//   const status = playerGuesses[currentIndex]?.status || "NotAnswered";
//   const score = playerGuesses[currentIndex]?.score ?? "Not Set";
//   const isDisabled = !["NotAnswered", "Wrong"].includes(status);

//   return (
//     <div className="min-h-screen bg-[#FFFCB8] py-12 px-6 flex flex-col items-center relative">
//       {/* Heading Section */}
//       <div className="max-w-2xl w-full text-center mb-8">
//         <h1 className="text-5xl font-extrabold text-[#9112BC] mb-3">{hunt.name}</h1>
//         <p className="text-xl text-gray-700 mb-2">{hunt.description}</p>
//         <p className="text-2xl text-gray-900 font-semibold mb-1">Total Score: {totalScore}</p>
//         <p className="text-gray-500 text-lg">Time Left: {timeLeft}</p>
//       </div>

//       {/* Navigation Arrows
//       <button
//         onClick={handlePrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#9112BC] text-white p-4 rounded-full hover:bg-[#AE75DA] transition z-10"
//       >
//         &#8592;
//       </button>

//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#9112BC] text-white p-4 rounded-full hover:bg-[#AE75DA] transition z-10"
//       >
//         &#8594;
//       </button> */}
//       {/* Navigation Arrows */}
// <button
//   onClick={handlePrev}
//   className="absolute left-1/4 top-1/2 transform -translate-y-1/2 bg-[#9112BC] text-white p-4 rounded-full hover:bg-[#AE75DA] transition z-10"
// >
//   &#8592;
// </button>

// <button
//   onClick={handleNext}
//   className="absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-[#9112BC] text-white p-4 rounded-full hover:bg-[#AE75DA] transition z-10"
// >
//   &#8594;
// </button>


//       {/* Puzzle Card */}
//       <div className="bg-white rounded-3xl p-8 shadow-lg w-full max-w-2xl text-center">
//         <h3 className="text-3xl font-bold text-[#9112BC] mb-4">Clue: {puzzle.clue}</h3>

//         {puzzle.hints.map((hint, hintIndex) => (
//           <div key={hintIndex} className="mb-3">
//             <button
//               onClick={() => toggleHint(currentIndex, hintIndex)}
//               disabled={showHints[`${currentIndex}-${hintIndex}`]}
//               className="bg-[#9112BC] text-white py-1 px-3 rounded-md hover:bg-[#AE75DA] transition text-sm"
//             >
//               Open Hint {hintIndex + 1}
//             </button>
//             {showHints[`${currentIndex}-${hintIndex}`] && <p className="text-gray-600 mt-1">Hint: {hint.hint}</p>}
//           </div>
//         ))}

//         <p className="text-gray-500 mt-2">Hints Used: {hintsUsed[currentIndex] || 0}</p>
//         <p className="text-gray-500">Status: {status}</p>
//         <p className="text-gray-500 mb-3">Score: {score}</p>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => handleFileChange(currentIndex, e)}
//           disabled={isDisabled}
//           className="mb-4"
//         />
//         {selectedImages[currentIndex] && (
//           <div className="mb-4">
//             <p>Selected: {selectedImages[currentIndex].name}</p>
//             <img
//               src={URL.createObjectURL(selectedImages[currentIndex])}
//               alt="Preview"
//               className="w-32 h-32 object-cover rounded-md mt-1 mx-auto"
//             />
//           </div>
//         )}

//         <button
//           onClick={() => handleSubmit(currentIndex)}
//           disabled={isDisabled}
//           className="bg-[#9112BC] text-white py-2 px-6 rounded-xl hover:bg-[#AE75DA] transition font-semibold mt-2"
//         >
//           Upload & Submit
//         </button>

//         {uploadedImages[currentIndex] && (
//           <div className="mt-4">
//             <p className="text-gray-600 mb-1">Uploaded Image:</p>
//             <img
//               src={uploadedImages[currentIndex]}
//               alt="Submitted"
//               className="w-36 h-36 object-cover rounded-md mx-auto"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JoinHunt;


import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JoinHunt = () => {
  const { userData } = useContext(AppContext);
  const { huntId } = useParams();

  const [hunt, setHunt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showHints, setShowHints] = useState({});
  const [hintsUsed, setHintsUsed] = useState({});
  const [selectedImages, setSelectedImages] = useState({});
  const [uploadedImages, setUploadedImages] = useState({});
  const [playerGuesses, setPlayerGuesses] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState("");

  const hintsKey = `hintsUsed-${userData?._id}-${huntId}`;
  const showHintsKey = `showHints-${userData?._id}-${huntId}`;
  const uploadedKey = `uploadedImages-${userData?._id}-${huntId}`;

  // Load from localStorage
  useEffect(() => {
    if (!userData || !huntId) return;
    setHintsUsed(JSON.parse(localStorage.getItem(hintsKey)) || {});
    setShowHints(JSON.parse(localStorage.getItem(showHintsKey)) || {});
    setUploadedImages(JSON.parse(localStorage.getItem(uploadedKey)) || {});
  }, [userData, huntId]);

  useEffect(() => {
    const fetchHunt = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
        setHunt(response.data);
        updateTimer(response.data.endTime);
      } catch {
        setError("Failed to fetch hunt details");
      } finally {
        setLoading(false);
      }
    };

    const fetchPlayerProgress = async () => {
      if (!userData?._id) return;
      try {
        const res = await axios.get(`http://localhost:4000/api/player/progress/${userData._id}/${huntId}`);
        const progressMap = {};
        let totalScoreCount = 0;
        res.data.guesses.forEach((g) => {
          progressMap[g.puzzleIndex] = { status: g.status, score: g.score };
          totalScoreCount += g.score || 0;
        });
        setPlayerGuesses(progressMap);
        setTotalScore(totalScoreCount);
      } catch {
        console.error("Could not load progress");
      }
    };

    fetchHunt();
    fetchPlayerProgress();
  }, [huntId, userData]);

  // Timer countdown
  const updateTimer = (endTime) => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endTime).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("Hunt ended");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
  };

  const toggleHint = (puzzleIndex, hintIndex) => {
    const updatedHints = { ...showHints, [`${puzzleIndex}-${hintIndex}`]: true };
    const updatedHintsUsed = { ...hintsUsed, [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1 };

    setShowHints(updatedHints);
    setHintsUsed(updatedHintsUsed);
    localStorage.setItem(showHintsKey, JSON.stringify(updatedHints));
    localStorage.setItem(hintsKey, JSON.stringify(updatedHintsUsed));
  };

  const handleFileChange = (puzzleIndex, event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImages((prev) => ({ ...prev, [puzzleIndex]: file }));
    }
  };

  const handleSubmit = async (puzzleIndex) => {
    const puzzleData = playerGuesses[puzzleIndex];
    const currentStatus = puzzleData?.status ?? "NotAnswered";

    if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
      alert(`Cannot resubmit for a puzzle marked '${currentStatus}'.`);
      return;
    }

    const image = selectedImages[puzzleIndex];
    if (!image) {
      alert("Please select an image before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("photo", image);
    formData.append("userId", userData._id);
    formData.append("huntId", huntId);
    formData.append("puzzleIndex", puzzleIndex);
    formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

    try {
      const res = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData);
      const newImageUrl = res.data.imageUrl;

      const updatedUploads = { ...uploadedImages, [puzzleIndex]: newImageUrl };
      setUploadedImages(updatedUploads);
      localStorage.setItem(uploadedKey, JSON.stringify(updatedUploads));

      setPlayerGuesses((prev) => ({ ...prev, [puzzleIndex]: { status: "Pending", score: 0 } }));
      alert("Photo uploaded and marked as Pending.");
    } catch (err) {
      console.error("Error submitting photo:", err);
      alert("Failed to upload photo.");
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? hunt.puzzles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === hunt.puzzles.length - 1 ? 0 : prev + 1));
  };

  if (loading) return <p className="text-center text-lg mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 text-lg mt-10">{error}</p>;
  if (!hunt) return <p className="text-center text-lg mt-10">Hunt not found</p>;

  const puzzle = hunt.puzzles[currentIndex];
  const status = playerGuesses[currentIndex]?.status || "NotAnswered";
  const score = playerGuesses[currentIndex]?.score ?? "Not Set";
  const isDisabled = !["NotAnswered", "Wrong"].includes(status);

  return (
    <div className="min-h-screen bg-[#FFFCB8] flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="py-12 px-6 flex flex-col items-center relative flex-grow">
        {/* Heading Section */}
        <div className="max-w-2xl w-full text-center mb-8">
          <h1 className="text-5xl font-extrabold text-[#9112BC] mb-3">{hunt.name}</h1>
          <p className="text-xl text-gray-700 mb-2">{hunt.description}</p>
          <p className="text-2xl text-gray-900 font-semibold mb-1">Total Score: {totalScore}</p>
          <p className="text-gray-500 text-lg">Time Left: {timeLeft}</p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-1/4 top-1/2 transform -translate-y-1/2 bg-[#9112BC] text-white p-4 rounded-full hover:bg-[#AE75DA] transition z-10"
        >
          &#8592;
        </button>

        <button
          onClick={handleNext}
          className="absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-[#9112BC] text-white p-4 rounded-full hover:bg-[#AE75DA] transition z-10"
        >
          &#8594;
        </button>

        {/* Puzzle Card */}
        {/* <div className="bg-white rounded-3xl p-8 shadow-lg w-full max-w-2xl text-center relative">
          <div className="absolute top-5 right-6">
            <span className="text-[#9112BC] font-bold text-lg bg-[#F3E8FF] px-4 py-1 rounded-full border border-[#9112BC]">
              Score: {score}
            </span>
          </div>
        
          <h3 className="text-3xl font-bold text-[#9112BC] mb-4">Clue: {puzzle.clue}</h3>
        
          {puzzle.hints.map((hint, hintIndex) => (
            <div key={hintIndex} className="mb-3">
              <button
                onClick={() => toggleHint(currentIndex, hintIndex)}
                disabled={showHints[`${currentIndex}-${hintIndex}`]}
                className="bg-[#9112BC] text-white py-1 px-3 rounded-md hover:bg-[#AE75DA] transition text-sm"
              >
                Open Hint {hintIndex + 1}
              </button>
              {showHints[`${currentIndex}-${hintIndex}`] && <p className="text-gray-600 mt-1">Hint: {hint.hint}</p>}
            </div>
          ))}
        
          <p className="text-gray-500 mt-2">Hints Used: {hintsUsed[currentIndex] || 0}</p>
          <p className="text-gray-500">Status: {status}</p>
      
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(currentIndex, e)}
            disabled={isDisabled}
            className="mb-4 mt-4"
          />
          {selectedImages[currentIndex] && (
            <div className="mb-4">
              <p>Selected: {selectedImages[currentIndex].name}</p>
              <img
                src={URL.createObjectURL(selectedImages[currentIndex])}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md mt-1 mx-auto"
              />
            </div>
          )}
        
          <button
            onClick={() => handleSubmit(currentIndex)}
            disabled={isDisabled}
            className="bg-[#9112BC] text-white py-2 px-6 rounded-xl hover:bg-[#AE75DA] transition font-semibold mt-2"
          >
            Upload & Submit
          </button>
      
          {uploadedImages[currentIndex] && (
            <div className="mt-4">
              <p className="text-gray-600 mb-1">Uploaded Image:</p>
              <img
                src={uploadedImages[currentIndex]}
                alt="Submitted"
                className="w-36 h-36 object-cover rounded-md mx-auto"
              />
            </div>
          )}
        </div> */}
        {/* Puzzle Card */}
<div className={`bg-white rounded-3xl p-8 w-full max-w-2xl text-center relative transition-all duration-300 ${
  status === "Correct" ? "shadow-[0_0_20px_5px_rgba(34,197,94,0.5)]" : 
  status === "Wrong" ? "shadow-[0_0_20px_5px_rgba(239,68,68,0.5)]" : 
  status === "Pending" ? "shadow-[0_0_20px_5px_rgba(145,18,188,0.5)]" : 
  "shadow-lg"
}`}>
  
  {/* Score Display - Top Right */}
  <div className="absolute top-5 right-6">
    <span className="text-[#9112BC] font-bold text-lg bg-[#F3E8FF] px-4 py-1 rounded-full border border-[#9112BC]">
      Score: {score}
    </span>
  </div>

  <h3 className="text-3xl font-bold text-[#9112BC] mb-4">Clue: {puzzle.clue}</h3>

  {puzzle.hints.map((hint, hintIndex) => (
    <div key={hintIndex} className="mb-3">
      <button
        onClick={() => toggleHint(currentIndex, hintIndex)}
        disabled={showHints[`${currentIndex}-${hintIndex}`]}
        className="bg-[#9112BC] text-white py-1 px-3 rounded-md hover:bg-[#AE75DA] transition text-sm"
      >
        Open Hint {hintIndex + 1}
      </button>
      {showHints[`${currentIndex}-${hintIndex}`] && <p className="text-gray-600 mt-1">Hint: {hint.hint}</p>}
    </div>
  ))}

  <p className="text-gray-500 mt-2">Hints Used: {hintsUsed[currentIndex] || 0}</p>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => handleFileChange(currentIndex, e)}
    disabled={isDisabled}
    className="mb-4 mt-6"
  />

  {selectedImages[currentIndex] && (
    <div className="mb-4">
      <p className="text-sm text-gray-500">Selected: {selectedImages[currentIndex].name}</p>
      <img
        src={URL.createObjectURL(selectedImages[currentIndex])}
        alt="Preview"
        className="w-32 h-32 object-cover rounded-md mt-1 mx-auto"
      />
    </div>
  )}

  <button
    onClick={() => handleSubmit(currentIndex)}
    disabled={isDisabled}
    className={`py-2 px-6 rounded-xl transition font-semibold mt-2 ${
        isDisabled ? "bg-gray-400 cursor-not-allowed text-white" : "bg-[#9112BC] text-white hover:bg-[#AE75DA]"
    }`}
  >
    {status === "Pending" ? "Pending Review" : "Upload & Submit"}
  </button>

  {uploadedImages[currentIndex] && (
    <div className="mt-4">
      <p className="text-gray-600 mb-1">Uploaded Image:</p>
      <img
        src={uploadedImages[currentIndex]}
        alt="Submitted"
        className="w-36 h-36 object-cover rounded-md mx-auto"
      />
    </div>
  )}
</div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JoinHunt;
