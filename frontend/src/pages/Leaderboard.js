import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const Leaderboard = () => {
  const { huntId } = useParams();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/hunt/leaderboard/${huntId}`
        );
        const data = await res.json();

        if (!res.ok) throw new Error(data.message);
        setLeaderboard(data);
      } catch (err) {
        toast.error(err.message || "Failed to load leaderboard");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [huntId]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
      <Navbar />

      <div className="flex-grow max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9112BC] mb-10 text-center">
          🏆 Leaderboard
        </h1>

        {loading ? (
          <p className="text-center text-[#9112BC] font-semibold">
            Loading leaderboard...
          </p>
        ) : leaderboard.length === 0 ? (
          <p className="text-center text-gray-600">No results found.</p>
        ) : (
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-x-auto">
            <div className="min-w-[1000px]">
              <table className="w-full border-collapse">
                <thead className="bg-[#AE75DA] text-white">
                  <tr>
                    <th className="py-5 px-8 text-left">Rank</th>
                    <th className="py-5 px-8 text-left">User</th>
                    <th className="py-5 px-8 text-left">Score</th>
                    <th className="py-5 px-8 text-left">Completed At</th>
                  </tr>
                </thead>

                <tbody>
                  {leaderboard.map((entry, index) => (
                    <tr
                      key={entry._id}
                      className={`border-b ${
                        index % 2 === 0 ? "bg-[#FFFCB8]" : "bg-[#E9E294]"
                      }`}
                    >
                      <td className="py-4 px-8 font-bold text-[#9112BC]">
                        #{index + 1}
                      </td>
                      <td className="py-4 px-8">
                        {entry.user?.name || "Unknown"}
                      </td>
                      <td className="py-4 px-8 font-semibold">
                        {entry.score}
                      </td>
                      <td className="py-4 px-8 text-sm text-gray-700">
                        {new Date(entry.timeCompleted).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Leaderboard;
