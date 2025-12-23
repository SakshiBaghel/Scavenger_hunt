// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// // const Leaderboard = () => {
// //   const { huntId } = useParams(); // assuming route contains /leaderboard/:huntId
// //   const [leaderboard, setLeaderboard] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchLeaderboard = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:4000/api/hunt/leaderboard/${huntId}`);
// //         const data = await response.json();

// //         if (!response.ok) {
// //           throw new Error(data.message || "Failed to load leaderboard");
// //         }

// //         setLeaderboard(data);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchLeaderboard();
// //   }, [huntId]);

// //   if (loading) return <p>Loading leaderboard... ⏳</p>;
// //   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

// //   return (
// //     <div>
// //       <h2>Leaderboard</h2>
// //       {leaderboard.length === 0 ? (
// //         <p>No results found.</p>
// //       ) : (
// //         <table border="1" cellPadding="8" cellSpacing="0">
// //           <thead>
// //             <tr>
// //               <th>Rank</th>
// //               <th>User</th>
// //               <th>Score</th>
// //               <th>Completed At</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {leaderboard.map((entry, index) => (
// //               <tr key={entry._id}>
// //                 <td>{index + 1}</td>
// //                 <td>{entry.user?.name || "Unknown"}</td>
// //                 <td>{entry.score}</td>
// //                 <td>{new Date(entry.timeCompleted).toLocaleString()}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default Leaderboard;


// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// const Leaderboard = () => {
//   const { huntId } = useParams();
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLeaderboard = async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:4000/api/hunt/leaderboard/${huntId}`
//         );
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.message || "Failed to load leaderboard");
//         setLeaderboard(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLeaderboard();
//   }, [huntId]);

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
//         <p className="text-[#9112BC] text-lg font-semibold">Loading leaderboard…</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
//         <p className="text-red-600">{error}</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
//       {/* Navbar */}
//       <nav className="bg-[#9112BC] text-white px-8 py-4 flex justify-between items-center shadow-md">
//         <h1 className="text-xl font-bold tracking-wide">Scavenger Hunt</h1>
//         <div className="space-x-6 text-sm font-medium">
//           <Link to="/" className="hover:text-[#FFFCB8]">Home</Link>
//           <Link to="/hunts" className="hover:text-[#FFFCB8]">Hunts</Link>
//           <Link to="#" className="hover:text-[#FFFCB8]">Leaderboard</Link>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-grow px-6 py-10">
//         <h2 className="text-3xl font-bold text-[#9112BC] text-center mb-8">
//           🏆 Leaderboard
//         </h2>

//         {leaderboard.length === 0 ? (
//           <p className="text-center text-gray-600">No results found.</p>
//         ) : (
//           <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-2xl shadow-lg">
//             <table className="w-full border-collapse">
//               <thead className="bg-[#AE75DA] text-white">
//                 <tr>
//                   <th className="py-3 px-4 text-left">Rank</th>
//                   <th className="py-3 px-4 text-left">User</th>
//                   <th className="py-3 px-4 text-left">Score</th>
//                   <th className="py-3 px-4 text-left">Completed At</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaderboard.map((entry, index) => (
//                   <tr
//                     key={entry._id}
//                     className={`border-b ${
//                       index % 2 === 0 ? "bg-[#FFFCB8]" : "bg-[#E9E294]"
//                     }`}
//                   >
//                     <td className="py-3 px-4 font-semibold text-[#9112BC]">
//                       #{index + 1}
//                     </td>
//                     <td className="py-3 px-4">
//                       {entry.user?.name || "Unknown"}
//                     </td>
//                     <td className="py-3 px-4 font-semibold">
//                       {entry.score}
//                     </td>
//                     <td className="py-3 px-4 text-sm text-gray-700">
//                       {new Date(entry.timeCompleted).toLocaleString()}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#9112BC] text-[#FFFCB8] text-center py-4 text-sm">
//         © {new Date().getFullYear()} Scavenger Hunt • Built with ❤️
//       </footer>
//     </div>
//   );
// };

// export default Leaderboard;


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
