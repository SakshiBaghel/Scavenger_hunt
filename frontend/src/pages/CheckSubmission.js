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
