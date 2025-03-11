import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JoinHunt = () => {
    const { huntId } = useParams();
    const [hunt, setHunt] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showHints, setShowHints] = useState({});
    const [answers, setAnswers] = useState({});
    const [selectedFiles, setSelectedFiles] = useState({});

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
            [`${puzzleIndex}-${hintIndex}`]: !prev[`${puzzleIndex}-${hintIndex}`]
        }));
    };

    const handleAnswerChange = (puzzleIndex, value) => {
        setAnswers(prev => ({
            ...prev,
            [puzzleIndex]: value
        }));
    };

    const handleFileChange = (puzzleIndex, file) => {
        setSelectedFiles(prev => ({
            ...prev,
            [puzzleIndex]: file
        }));
    };

    const handleSubmit = (puzzleIndex) => {
        console.log("Submitting answer:", answers[puzzleIndex]);
        console.log("Submitting photo:", selectedFiles[puzzleIndex]);
        alert(`Answer submitted: ${answers[puzzleIndex]}`);
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
                                    <button onClick={() => toggleHint(puzzleIndex, hintIndex)}>Open Hint {hintIndex + 1}</button>
                                    {showHints[`${puzzleIndex}-${hintIndex}`] && <p>Hint: {hint.hint}</p>}
                                </div>
                            ))}
                        </div>
                    )}

                    {puzzle.photoReq && (
                        <div style={{ marginTop: "10px" }}>
                            <p><strong>Photo required to complete this puzzle!</strong></p>
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={(e) => handleFileChange(puzzleIndex, e.target.files[0])} 
                            />
                        </div>
                    )}

                    <div style={{ marginTop: "10px" }}>
                        <input 
                            type="text" 
                            placeholder="Enter your answer" 
                            value={answers[puzzleIndex] || ""} 
                            onChange={(e) => handleAnswerChange(puzzleIndex, e.target.value)} 
                        />
                        <button onClick={() => handleSubmit(puzzleIndex)}>Submit Answer</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JoinHunt;
