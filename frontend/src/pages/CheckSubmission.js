
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CheckSubmission = () => {
    const { huntId } = useParams(); // Get huntId from URL
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!huntId) return;

        const fetchSubmissions = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://localhost:4000/api/hunt/submissions/${huntId}`);
                setSubmissions(response.data.table);
            } catch (err) {
                setError("Failed to fetch submissions. Please check the Hunt ID.");
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, [huntId]); // Fetch when huntId changes

    // Function to handle status and score update
    const updateSubmission = async (submissionId, isCorrect, hintsUsed) => {
        const newStatus = isCorrect ? "Correct" : "Wrong";
        const defaultScore = 10;
        const score = Math.max(0, defaultScore - 2 * hintsUsed); // Ensure score doesn't go below 0

        try {
            await axios.put(`http://localhost:4000/api/hunt/submission/${submissionId}`, {
                status: newStatus,
                score: score,
            });

            // Update UI without reloading
            setSubmissions((prevSubmissions) =>
                prevSubmissions.map((sub) =>
                    sub._id === submissionId ? { ...sub, status: newStatus, score: score } : sub
                )
            );
        } catch (error) {
            console.error("Failed to update submission:", error);
            setError("Failed to update submission. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-4">Treasure Hunt Submissions</h1>

            {loading && <p>Loading submissions...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">User ID</th>
                        <th className="border p-2">Puzzle Index</th>
                        <th className="border p-2">Puzzle</th>
                        <th className="border p-2">Guessed Image</th>
                        <th className="border p-2">Hints Used</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Score</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.length === 0 ? (
                        <tr>
                            <td colSpan="8" className="text-center p-4">No submissions found</td>
                        </tr>
                    ) : (
                        submissions.map((submission) => (
                            <tr key={submission._id} className="text-center">
                                <td className="border p-2">{submission.userId}</td>
                                <td className="border p-2">{submission.puzzleIndex}</td>
                                <td className="border p-2">{submission.puzzle}</td>
                                <td className="border p-2">
                                    <img src={submission.guessedImageUrl} alt="Guess" className="w-20 h-20 object-cover" />
                                </td>
                                <td className="border p-2">{submission.hintsUsed}</td>
                                <td className="border p-2">{submission.status}</td>
                                <td className="border p-2">{submission.score ?? "Not Set"}</td>
                                <td className="border p-2 flex gap-2 justify-center">
                                    <button
                                        onClick={() => updateSubmission(submission._id, true, submission.hintsUsed)}
                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                    >
                                        Correct
                                    </button>
                                    <button
                                        onClick={() => updateSubmission(submission._id, false, submission.hintsUsed)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
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
    );
};

export default CheckSubmission;
