// import { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { AppContext } from "../context/AppContext";

// const JoinHunt = () => {
//     const { userData } = useContext(AppContext);
//     const { huntId } = useParams();

//     const [hunt, setHunt] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showHints, setShowHints] = useState({});
//     const [hintsUsed, setHintsUsed] = useState({});
//     const [selectedImages, setSelectedImages] = useState({});
//     const [uploadedImages, setUploadedImages] = useState({});
//     const [playerGuesses, setPlayerGuesses] = useState({});
//     const [totalScore, setTotalScore] = useState(0);

//     // Load from localStorage on mount
//     useEffect(() => {
//         setHintsUsed(JSON.parse(localStorage.getItem("hintsUsed")) || {});
//         setShowHints(JSON.parse(localStorage.getItem("showHints")) || {});
//         setUploadedImages(JSON.parse(localStorage.getItem("uploadedImages")) || {});
//     }, []);

//     useEffect(() => {
//         const fetchHunt = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
//                 setHunt(response.data);
//             } catch {
//                 setError("Failed to fetch hunt details");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const fetchPlayerProgress = async () => {
//             if (!userData?._id) return;

//             try {
//                 const res = await axios.get(`http://localhost:4000/api/player/progress/${userData._id}/${huntId}`);
//                 const guessesByPuzzle = {};
//                 res.data.guesses.forEach(g => {
//                     if (!guessesByPuzzle[g.puzzleIndex]) {
//                         guessesByPuzzle[g.puzzleIndex] = [];
//                     }
//                     guessesByPuzzle[g.puzzleIndex].push(g);
//                 });

//                 const progressMap = {};
//                 Object.entries(guessesByPuzzle).forEach(([index, guesses]) => {
//                     const latestGuess = guesses[guesses.length - 1];
//                     progressMap[index] = {
//                         status: latestGuess.status,
//                         score: latestGuess.score
//                     };
//                 });

//                 setPlayerGuesses(progressMap);
//                 setTotalScore(res.data.totalScore || 0);
//             } catch {
//                 console.error("Could not load progress");
//             }
//         };

//         fetchHunt();
//         fetchPlayerProgress();
//     }, [huntId, userData]);

//     const toggleHint = (puzzleIndex, hintIndex) => {
//         const updatedHints = {
//             ...showHints,
//             [`${puzzleIndex}-${hintIndex}`]: true
//         };
//         const updatedHintsUsed = {
//             ...hintsUsed,
//             [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1
//         };

//         setShowHints(updatedHints);
//         setHintsUsed(updatedHintsUsed);
//         localStorage.setItem("showHints", JSON.stringify(updatedHints));
//         localStorage.setItem("hintsUsed", JSON.stringify(updatedHintsUsed));
//     };

//     const handleFileChange = (puzzleIndex, event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSelectedImages(prev => ({
//                 ...prev,
//                 [puzzleIndex]: file
//             }));
//         }
//     };

//     const handleSubmit = async (puzzleIndex) => {
//         const puzzleData = playerGuesses[puzzleIndex];
//         const currentStatus = puzzleData?.status ?? "NotAnswered";

//         if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
//             alert(`You cannot resubmit for a puzzle marked '${currentStatus}'.`);
//             return;
//         }

//         const image = selectedImages[puzzleIndex];
//         if (!image) {
//             alert("Please select an image before submitting.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("photo", image);
//         formData.append("userId", userData._id);
//         formData.append("huntId", huntId);
//         formData.append("puzzleIndex", puzzleIndex);
//         formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

//         try {
//             const res = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData);
//             const newImageUrl = res.data.imageUrl;

//             const updatedUploads = {
//                 ...uploadedImages,
//                 [puzzleIndex]: newImageUrl
//             };

//             setUploadedImages(updatedUploads);
//             localStorage.setItem("uploadedImages", JSON.stringify(updatedUploads));

//             setPlayerGuesses(prev => ({
//                 ...prev,
//                 [puzzleIndex]: {
//                     status: "Pending",
//                     score: 0
//                 }
//             }));

//             alert("Photo uploaded and marked as Pending.");
//         } catch (err) {
//             console.error("Error submitting photo:", err);
//             alert("Failed to upload photo.");
//         }
//     };

//     if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
//     if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
//     if (!hunt) return <h2 style={{ textAlign: "center" }}>Hunt not found</h2>;

//     return (
//         <div className="container" style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}>
//             <h1>{hunt.name}</h1>
//             <p>{hunt.description}</p>
//             <h3>Start Time: {new Date(hunt.startTime).toLocaleString()}</h3>
//             <h3>End Time: {new Date(hunt.endTime).toLocaleString()}</h3>
//             <h3>Total Score: {totalScore}</h3>

//             <h2>Puzzles:</h2>
//             {hunt.puzzles.map((puzzle, puzzleIndex) => {
//                 const status = playerGuesses[puzzleIndex]?.status || "NotAnswered";
//                 const score = playerGuesses[puzzleIndex]?.score ?? "Not Set";
//                 const isDisabled = !["NotAnswered", "Wrong"].includes(status);

//                 return (
//                     <div key={puzzleIndex} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
//                         <h3>Clue: {puzzle.clue}</h3>

//                         {puzzle.hints.map((hint, hintIndex) => (
//                             <div key={hintIndex}>
//                                 <button
//                                     onClick={() => toggleHint(puzzleIndex, hintIndex)}
//                                     disabled={showHints[`${puzzleIndex}-${hintIndex}`]}
//                                 >
//                                     Open Hint {hintIndex + 1}
//                                 </button>
//                                 {showHints[`${puzzleIndex}-${hintIndex}`] && <p>Hint: {hint.hint}</p>}
//                             </div>
//                         ))}

//                         <p>Hints Used: {hintsUsed[puzzleIndex] || 0}</p>
//                         <p>Status: {status}</p>
//                         <p>Score: {score}</p>

//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handleFileChange(puzzleIndex, e)}
//                             disabled={isDisabled}
//                         />
//                         {selectedImages[puzzleIndex] && (
//                             <div>
//                                 <p>Selected: {selectedImages[puzzleIndex].name}</p>
//                                 <img
//                                     src={URL.createObjectURL(selectedImages[puzzleIndex])}
//                                     alt="Preview"
//                                     style={{ width: "100px", height: "100px", objectFit: "cover" }}
//                                 />
//                             </div>
//                         )}
//                         <button onClick={() => handleSubmit(puzzleIndex)} disabled={isDisabled}>
//                             Upload & Submit
//                         </button>

//                         {uploadedImages[puzzleIndex] && (
//                             <div>
//                                 <p>Uploaded Image:</p>
//                                 <img
//                                     src={uploadedImages[puzzleIndex]}
//                                     alt="Submitted"
//                                     style={{ width: "150px", height: "150px", objectFit: "cover" }}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default JoinHunt;


// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { AppContext } from "../context/AppContext";

// const JoinHunt = () => {
//     const { userData } = useContext(AppContext);
//     const { huntId } = useParams();

//     const [hunt, setHunt] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showHints, setShowHints] = useState({});
//     const [hintsUsed, setHintsUsed] = useState({});
//     const [selectedImages, setSelectedImages] = useState({});
//     const [uploadedImages, setUploadedImages] = useState({});
//     const [playerGuesses, setPlayerGuesses] = useState({});
//     const [totalScore, setTotalScore] = useState(0);

//     // Load from localStorage on mount
//     useEffect(() => {
//         setHintsUsed(JSON.parse(localStorage.getItem("hintsUsed")) || {});
//         setShowHints(JSON.parse(localStorage.getItem("showHints")) || {});
//         setUploadedImages(JSON.parse(localStorage.getItem("uploadedImages")) || {});
//     }, []);

//     useEffect(() => {
//         const fetchHunt = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
//                 setHunt(response.data);
//             } catch {
//                 setError("Failed to fetch hunt details");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const fetchPlayerProgress = async () => {
//             if (!userData?._id) return;

//             try {
//                 const res = await axios.get(`http://localhost:4000/api/player/progress/${userData._id}/${huntId}`);
//                 const guessesByPuzzle = {};
//                 res.data.guesses.forEach(g => {
//                     if (!guessesByPuzzle[g.puzzleIndex]) {
//                         guessesByPuzzle[g.puzzleIndex] = [];
//                     }
//                     guessesByPuzzle[g.puzzleIndex].push(g);
//                 });

//                 const progressMap = {};
//                 let totalScoreCount = 0;

//                 Object.entries(guessesByPuzzle).forEach(([index, guesses]) => {
//                     const latestGuess = guesses[guesses.length - 1];
//                     progressMap[index] = {
//                         status: latestGuess.status,
//                         score: latestGuess.score
//                     };
//                     totalScoreCount += latestGuess.score || 0;
//                 });

//                 setPlayerGuesses(progressMap);
//                 setTotalScore(totalScoreCount || 0);
//             } catch {
//                 console.error("Could not load progress");
//             }
//         };

//         fetchHunt();
//         fetchPlayerProgress();
//     }, [huntId, userData]);

//     const toggleHint = (puzzleIndex, hintIndex) => {
//         const updatedHints = {
//             ...showHints,
//             [`${puzzleIndex}-${hintIndex}`]: true
//         };
//         const updatedHintsUsed = {
//             ...hintsUsed,
//             [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1
//         };

//         setShowHints(updatedHints);
//         setHintsUsed(updatedHintsUsed);
//         localStorage.setItem("showHints", JSON.stringify(updatedHints));
//         localStorage.setItem("hintsUsed", JSON.stringify(updatedHintsUsed));
//     };

//     const handleFileChange = (puzzleIndex, event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSelectedImages(prev => ({
//                 ...prev,
//                 [puzzleIndex]: file
//             }));
//         }
//     };

//     const handleSubmit = async (puzzleIndex) => {
//         const puzzleData = playerGuesses[puzzleIndex];
//         const currentStatus = puzzleData?.status ?? "NotAnswered";

//         if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
//             alert(`You cannot resubmit for a puzzle marked '${currentStatus}'.`);
//             return;
//         }

//         const image = selectedImages[puzzleIndex];
//         if (!image) {
//             alert("Please select an image before submitting.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("photo", image);
//         formData.append("userId", userData._id);
//         formData.append("huntId", huntId);
//         formData.append("puzzleIndex", puzzleIndex);
//         formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

//         try {
//             const res = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData);
//             const newImageUrl = res.data.imageUrl;

//             const updatedUploads = {
//                 ...uploadedImages,
//                 [puzzleIndex]: newImageUrl
//             };

//             setUploadedImages(updatedUploads);
//             localStorage.setItem("uploadedImages", JSON.stringify(updatedUploads));

//             setPlayerGuesses(prev => ({
//                 ...prev,
//                 [puzzleIndex]: {
//                     status: "Pending",
//                     score: 0
//                 }
//             }));

//             alert("Photo uploaded and marked as Pending.");
//         } catch (err) {
//             console.error("Error submitting photo:", err);
//             alert("Failed to upload photo.");
//         }
//     };

//     if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
//     if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
//     if (!hunt) return <h2 style={{ textAlign: "center" }}>Hunt not found</h2>;

//     return (
//         <div className="container" style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}>
//             <h1>{hunt.name}</h1>
//             <p>{hunt.description}</p>
//             <h3>Start Time: {new Date(hunt.startTime).toLocaleString()}</h3>
//             <h3>End Time: {new Date(hunt.endTime).toLocaleString()}</h3>
//             <h3>Total Score: {totalScore}</h3>

//             <h2>Puzzles:</h2>
//             {hunt.puzzles.map((puzzle, puzzleIndex) => {
//                 const status = playerGuesses[puzzleIndex]?.status || "NotAnswered";
//                 const score = playerGuesses[puzzleIndex]?.score ?? "Not Set";
//                 const isDisabled = !["NotAnswered", "Wrong"].includes(status);

//                 return (
//                     <div key={puzzleIndex} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
//                         <h3>Clue: {puzzle.clue}</h3>

//                         {puzzle.hints.map((hint, hintIndex) => (
//                             <div key={hintIndex}>
//                                 <button
//                                     onClick={() => toggleHint(puzzleIndex, hintIndex)}
//                                     disabled={showHints[`${puzzleIndex}-${hintIndex}`]}
//                                 >
//                                     Open Hint {hintIndex + 1}
//                                 </button>
//                                 {showHints[`${puzzleIndex}-${hintIndex}`] && <p>Hint: {hint.hint}</p>}
//                             </div>
//                         ))}

//                         <p>Hints Used: {hintsUsed[puzzleIndex] || 0}</p>
//                         <p>Status: {status}</p>
//                         <p>Score: {score}</p>

//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handleFileChange(puzzleIndex, e)}
//                             disabled={isDisabled}
//                         />
//                         {selectedImages[puzzleIndex] && (
//                             <div>
//                                 <p>Selected: {selectedImages[puzzleIndex].name}</p>
//                                 <img
//                                     src={URL.createObjectURL(selectedImages[puzzleIndex])}
//                                     alt="Preview"
//                                     style={{ width: "100px", height: "100px", objectFit: "cover" }}
//                                 />
//                             </div>
//                         )}
//                         <button onClick={() => handleSubmit(puzzleIndex)} disabled={isDisabled}>
//                             Upload & Submit
//                         </button>

//                         {uploadedImages[puzzleIndex] && (
//                             <div>
//                                 <p>Uploaded Image:</p>
//                                 <img
//                                     src={uploadedImages[puzzleIndex]}
//                                     alt="Submitted"
//                                     style={{ width: "150px", height: "150px", objectFit: "cover" }}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default JoinHunt;

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";

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

    const hintsKey = `hintsUsed-${userData?._id}-${huntId}`;
    const showHintsKey = `showHints-${userData?._id}-${huntId}`;
    const uploadedKey = `uploadedImages-${userData?._id}-${huntId}`;

    // Load from localStorage on mount (scoped by user and hunt)
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
                res.data.guesses.forEach(g => {
                    progressMap[g.puzzleIndex] = {
                        status: g.status,
                        score: g.score
                    };
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

    const toggleHint = (puzzleIndex, hintIndex) => {
        const updatedHints = {
            ...showHints,
            [`${puzzleIndex}-${hintIndex}`]: true
        };
        const updatedHintsUsed = {
            ...hintsUsed,
            [puzzleIndex]: (hintsUsed[puzzleIndex] || 0) + 1
        };

        setShowHints(updatedHints);
        setHintsUsed(updatedHintsUsed);
        localStorage.setItem(showHintsKey, JSON.stringify(updatedHints));
        localStorage.setItem(hintsKey, JSON.stringify(updatedHintsUsed));
    };

    const handleFileChange = (puzzleIndex, event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImages(prev => ({
                ...prev,
                [puzzleIndex]: file
            }));
        }
    };

    const handleSubmit = async (puzzleIndex) => {
        const puzzleData = playerGuesses[puzzleIndex];
        const currentStatus = puzzleData?.status ?? "NotAnswered";

        if (!["NotAnswered", "Wrong"].includes(currentStatus)) {
            alert(`You cannot resubmit for a puzzle marked '${currentStatus}'.`);
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

            const updatedUploads = {
                ...uploadedImages,
                [puzzleIndex]: newImageUrl
            };

            setUploadedImages(updatedUploads);
            localStorage.setItem(uploadedKey, JSON.stringify(updatedUploads));

            setPlayerGuesses(prev => ({
                ...prev,
                [puzzleIndex]: {
                    status: "Pending",
                    score: 0
                }
            }));

            alert("Photo uploaded and marked as Pending.");
        } catch (err) {
            console.error("Error submitting photo:", err);
            alert("Failed to upload photo.");
        }
    };

    if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
    if (!hunt) return <h2 style={{ textAlign: "center" }}>Hunt not found</h2>;

    return (
        <div className="container" style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}>
            <h1>{hunt.name}</h1>
            <p>{hunt.description}</p>
            <h3>Start Time: {new Date(hunt.startTime).toLocaleString()}</h3>
            <h3>End Time: {new Date(hunt.endTime).toLocaleString()}</h3>
            <h3>Total Score: {totalScore}</h3>

            <h2>Puzzles:</h2>
            {hunt.puzzles.map((puzzle, puzzleIndex) => {
                const status = playerGuesses[puzzleIndex]?.status || "NotAnswered";
                const score = playerGuesses[puzzleIndex]?.score ?? "Not Set";
                const isDisabled = !["NotAnswered", "Wrong"].includes(status);

                return (
                    <div key={puzzleIndex} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
                        <h3>Clue: {puzzle.clue}</h3>

                        {puzzle.hints.map((hint, hintIndex) => (
                            <div key={hintIndex}>
                                <button
                                    onClick={() => toggleHint(puzzleIndex, hintIndex)}
                                    disabled={showHints[`${puzzleIndex}-${hintIndex}`]}
                                >
                                    Open Hint {hintIndex + 1}
                                </button>
                                {showHints[`${puzzleIndex}-${hintIndex}`] && <p>Hint: {hint.hint}</p>}
                            </div>
                        ))}

                        <p>Hints Used: {hintsUsed[puzzleIndex] || 0}</p>
                        <p>Status: {status}</p>
                        <p>Score: {score}</p>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(puzzleIndex, e)}
                            disabled={isDisabled}
                        />
                        {selectedImages[puzzleIndex] && (
                            <div>
                                <p>Selected: {selectedImages[puzzleIndex].name}</p>
                                <img
                                    src={URL.createObjectURL(selectedImages[puzzleIndex])}
                                    alt="Preview"
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                />
                            </div>
                        )}
                        <button onClick={() => handleSubmit(puzzleIndex)} disabled={isDisabled}>
                            Upload & Submit
                        </button>

                        {uploadedImages[puzzleIndex] && (
                            <div>
                                <p>Uploaded Image:</p>
                                <img
                                    src={uploadedImages[puzzleIndex]}
                                    alt="Submitted"
                                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default JoinHunt;
