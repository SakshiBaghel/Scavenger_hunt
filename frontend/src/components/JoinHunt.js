// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";

// // const JoinHunt = () => {
// //     const dummyUserId = "65a3c9c3f1a2b3d4e5f6a7b8";
// //     const { huntId } = useParams();
// //     const [hunt, setHunt] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [showHints, setShowHints] = useState({});
// //     const [hintsUsed, setHintsUsed] = useState({});
// //     const [selectedImages, setSelectedImages] = useState({});
// //     const [uploadedImages, setUploadedImages] = useState({});

// //     useEffect(() => {
// //         axios.get(`http://localhost:4000/api/hunt/${huntId}`)
// //             .then(response => {
// //                 setHunt(response.data);
// //                 setLoading(false);
// //             })
// //             .catch(err => {
// //                 setError("Failed to fetch hunt details");
// //                 setLoading(false);
// //             });
// //     }, [huntId]);

// //     const toggleHint = (puzzleIndex, hintIndex) => {
// //         setShowHints(prev => ({
// //             ...prev,
// //             [`${puzzleIndex}-${hintIndex}`]: true 
// //         }));

// //         setHintsUsed(prev => ({
// //             ...prev,
// //             [puzzleIndex]: (prev[puzzleIndex] || 0) + 1 
// //         }));
// //     };

// //     const handleFileChange = (puzzleIndex, event) => {
// //         const file = event.target.files[0];
// //         if (file) {
// //             setSelectedImages(prev => ({
// //                 ...prev,
// //                 [puzzleIndex]: file
// //             }));
// //         }
// //     };

// //     const handleSubmit = async (puzzleIndex) => {
// //         if (!selectedImages[puzzleIndex]) {
// //             alert("Please select an image before submitting.");
// //             return;
// //         }

// //         const formData = new FormData();
// //         formData.append("photo", selectedImages[puzzleIndex]);
// //         formData.append("userId", dummyUserId);
// //         formData.append("huntId", huntId);
// //         formData.append("puzzleIndex", puzzleIndex);
// //         formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

// //         try {
// //             const response = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData, {
// //                 headers: { "Content-Type": "multipart/form-data" }
                
// //             });
// //             console.log("working")
// //             setUploadedImages(prev => ({
// //                 ...prev,
// //                 [puzzleIndex]: response.data.imageUrl
// //             }));

// //             alert(response.data.message);
// //         } catch (error) {
// //             console.error("Error submitting photo:", error);
// //             alert("Failed to upload photo");
// //         }
// //     };

// //     if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
// //     if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
// //     if (!hunt) return <h2 style={{ textAlign: "center" }}>Hunt not found</h2>;

// //     return (
// //         <div className="container" style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}>
// //             <h1>{hunt.name}</h1>
// //             <p>{hunt.description}</p>
// //             <h3>Start Time: {new Date(hunt.startTime).toLocaleString()}</h3>
// //             <h3>End Time: {new Date(hunt.endTime).toLocaleString()}</h3>

// //             <h2>Puzzles:</h2>
// //             {hunt.puzzles.map((puzzle, puzzleIndex) => (
// //                 <div key={puzzleIndex} className="puzzle" style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
// //                     <h3>Clue: {puzzle.clue}</h3>

// //                     {puzzle.hints.length > 0 && (
// //                         <div>
// //                             {puzzle.hints.map((hint, hintIndex) => (
// //                                 <div key={hintIndex}>
// //                                     <button 
// //                                         onClick={() => toggleHint(puzzleIndex, hintIndex)}
// //                                         disabled={showHints[`${puzzleIndex}-${hintIndex}`]}
// //                                     >
// //                                         Open Hint {hintIndex + 1}
// //                                     </button>
// //                                     {showHints[`${puzzleIndex}-${hintIndex}`] && <p>Hint: {hint.hint}</p>}
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     )}

// //                     <p>Hints Used: {hintsUsed[puzzleIndex] || 0}</p> 
// //                     <div style={{ marginTop: "10px" }}>
// //                         <input 
// //                             type="file" 
// //                             accept="image/*"
// //                             onChange={(e) => handleFileChange(puzzleIndex, e)}
// //                         />
// //                         {selectedImages[puzzleIndex] && (
// //                             <div>
// //                                 <p>Selected Image: {selectedImages[puzzleIndex].name}</p>
// //                                 <img 
// //                                     src={URL.createObjectURL(selectedImages[puzzleIndex])} 
// //                                     alt="Preview" 
// //                                     style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "5px" }}
// //                                 />
// //                             </div>
// //                         )}
// //                         <button onClick={() => handleSubmit(puzzleIndex)}>Upload & Submit</button>
// //                         {uploadedImages[puzzleIndex] && (
// //                             <div>
// //                                 <p>Uploaded Image:</p>
// //                                 <img 
// //                                     src={uploadedImages[puzzleIndex]} 
// //                                     alt="Submitted" 
// //                                     style={{ width: "150px", height: "150px", objectFit: "cover", marginTop: "5px" }}
// //                                 />
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default JoinHunt;



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const JoinHunt = () => {
//     const dummyUserId = "65a3c9c3f1a2b3d4e5f6a7b8";
//     const { huntId } = useParams();
//     const [hunt, setHunt] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showHints, setShowHints] = useState({});
//     const [hintsUsed, setHintsUsed] = useState({});
//     const [selectedImages, setSelectedImages] = useState({});
//     const [uploadedImages, setUploadedImages] = useState({});

//     useEffect(() => {
//         const fetchHunt = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4000/api/hunt/${huntId}`);
//                 setHunt(response.data);
//             } catch (err) {
//                 setError("Failed to fetch hunt details");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchHunt();
//     }, [huntId]);

//     const toggleHint = (puzzleIndex, hintIndex) => {
//         setShowHints(prev => ({
//             ...prev,
//             [`${puzzleIndex}-${hintIndex}`]: true
//         }));
//         setHintsUsed(prev => ({
//             ...prev,
//             [puzzleIndex]: (prev[puzzleIndex] || 0) + 1
//         }));
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
//         if (!selectedImages[puzzleIndex]) {
//             alert("Please select an image before submitting.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("photo", selectedImages[puzzleIndex]);
//         formData.append("userId", dummyUserId);
//         formData.append("huntId", huntId);
//         formData.append("puzzleIndex", puzzleIndex);
//         formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

//         try {
//             const response = await axios.post(
//                 "http://localhost:4000/api/player/uploadPhoto",
//                 formData,
//                 { headers: { "Content-Type": "multipart/form-data" } }
//             );
//             setUploadedImages(prev => ({
//                 ...prev,
//                 [puzzleIndex]: response.data.imageUrl
//             }));
//             alert(response.data.message);
//         } catch (error) {
//             console.error("Error submitting photo:", error);
//             alert("Failed to upload photo");
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

//             <h2>Puzzles:</h2>
//             {hunt.puzzles.map((puzzle, puzzleIndex) => (
//                 <div key={puzzleIndex} className="puzzle" style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
//                     <h3>Clue: {puzzle.clue}</h3>
//                     {puzzle.hints.length > 0 && puzzle.hints.map((hint, hintIndex) => (
//                         <div key={hintIndex}>
//                             <button
//                                 onClick={() => toggleHint(puzzleIndex, hintIndex)}
//                                 disabled={showHints[`${puzzleIndex}-${hintIndex}`]}
//                             >
//                                 Open Hint {hintIndex + 1}
//                             </button>
//                             {showHints[`${puzzleIndex}-${hintIndex}`] && <p>Hint: {hint.hint}</p>}
//                         </div>
//                     ))}
//                     <p>Hints Used: {hintsUsed[puzzleIndex] || 0}</p>
//                     <div style={{ marginTop: "10px" }}>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handleFileChange(puzzleIndex, e)}
//                         />
//                         {selectedImages[puzzleIndex] && (
//                             <div>
//                                 <p>Selected Image: {selectedImages[puzzleIndex].name}</p>
//                                 <img
//                                     src={URL.createObjectURL(selectedImages[puzzleIndex])}
//                                     alt="Preview"
//                                     style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "5px" }}
//                                 />
//                             </div>
//                         )}
//                         <button onClick={() => handleSubmit(puzzleIndex)}>Upload & Submit</button>
//                         {uploadedImages[puzzleIndex] && (
//                             <div>
//                                 <p>Uploaded Image:</p>
//                                 <img
//                                     src={uploadedImages[puzzleIndex]}
//                                     alt="Submitted"
//                                     style={{ width: "150px", height: "150px", objectFit: "cover", marginTop: "5px" }}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default JoinHunt;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JoinHunt = () => {
    const dummyUserId = "65a3c9c3f1a2b3d4e5f6a7b8";
    const { huntId } = useParams();
    const [hunt, setHunt] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showHints, setShowHints] = useState({});
    const [hintsUsed, setHintsUsed] = useState({});
    const [selectedImages, setSelectedImages] = useState({});
    const [uploadedImages, setUploadedImages] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:4000/api/hunt/${huntId}`)
            .then(response => {
                setHunt(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError("Failed to fetch hunt details");
                setLoading(false);
            });
    }, [huntId]);

    const toggleHint = (puzzleIndex, hintIndex) => {
        setShowHints(prev => ({
            ...prev,
            [`${puzzleIndex}-${hintIndex}`]: true 
        }));

        setHintsUsed(prev => ({
            ...prev,
            [puzzleIndex]: (prev[puzzleIndex] || 0) + 1 
        }));
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
        if (!selectedImages[puzzleIndex]) {
            alert("Please select an image before submitting.");
            return;
        }

        const formData = new FormData();
        formData.append("photo", selectedImages[puzzleIndex]);
        formData.append("userId", dummyUserId);
        formData.append("huntId", huntId);
        formData.append("puzzleIndex", puzzleIndex);
        formData.append("hintUsed", hintsUsed[puzzleIndex] || 0);

        try {
            const response = await axios.post("http://localhost:4000/api/player/uploadPhoto", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            setUploadedImages(prev => ({
                ...prev,
                [puzzleIndex]: response.data.imageUrl
            }));

            alert(response.data.message);
        } catch (error) {
            console.error("Error submitting photo:", error);
            alert("Failed to upload photo");
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

            <h2>Puzzles:</h2>
            {hunt.puzzles.map((puzzle, puzzleIndex) => (
                <div key={puzzleIndex} className="puzzle" style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "8px" }}>
                    <h3>Clue: {puzzle.clue}</h3>

                    {puzzle.hints.length > 0 && (
                        <div>
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
                        </div>
                    )}

                    <p>Hints Used: {hintsUsed[puzzleIndex] || 0}</p> 
                    <div style={{ marginTop: "10px" }}>
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => handleFileChange(puzzleIndex, e)}
                        />
                        {selectedImages[puzzleIndex] && (
                            <div>
                                <p>Selected Image: {selectedImages[puzzleIndex].name}</p>
                                <img 
                                    src={URL.createObjectURL(selectedImages[puzzleIndex])} 
                                    alt="Preview" 
                                    style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "5px" }}
                                />
                            </div>
                        )}
                        <button onClick={() => handleSubmit(puzzleIndex)}>Upload & Submit</button>
                        {uploadedImages[puzzleIndex] && (
                            <div>
                                <p>Uploaded Image:</p>
                                <img 
                                    src={uploadedImages[puzzleIndex]} 
                                    alt="Submitted" 
                                    style={{ width: "150px", height: "150px", objectFit: "cover", marginTop: "5px" }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JoinHunt;