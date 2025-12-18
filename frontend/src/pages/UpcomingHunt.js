// import { useEffect, useState } from 'react';

// const UpcomingHunt = () => {
//     const [hunts, setHunts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchLiveHunts = async () => {
//             try {
//                 const response = await fetch('http://localhost:4000/api/hunt/upcomingHunts'); 
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch live hunts");
//                 }
//                 const data = await response.json();
//                 setHunts(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchLiveHunts();
//     }, []);

//     if (loading) return <p>Loading live hunts... ⏳</p>;
//     if (error) return (
//         <div>
//             <p>Error: {error}</p>
//             <button onClick={() => window.location.reload()}>Retry</button>
//         </div>
//     );
//   return (
//     <div>
//       <h2>Upcoming hunts</h2>
//       {hunts.length === 0 ? (
//         <p>No Live hunts available</p>
//       ) : (
//         <ul>
//             {hunts.map((hunt) => (
//                 <li key={hunt._id} className="hunt-card">
//                     <h3>{hunt.name}</h3>
//                     <p>{hunt.deccription}</p>
//                     <p> Starts: {new Date(hunt.startTime).toLocaleString()}</p>
//                     <p> Ends: {new Date(hunt.endTime).toLocaleString()}</p>
//                     <p>Number of Puzzles: <strong>{hunt.puzzleCount}</strong></p> {/* Added Puzzle Count */}
//                 </li>
//             ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UpcomingHunt


import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UpcomingHunt = () => {
  const [hunts, setHunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcomingHunts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/hunt/upcomingHunts');
        if (!response.ok) throw new Error('Failed to fetch upcoming hunts');
        const data = await response.json();
        setHunts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingHunts();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFCB8]">
        <p className="text-[#9112BC] text-lg">Loading upcoming hunts... ⏳</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFCB8]">
        <p className="text-red-600 text-lg mb-4">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#9112BC] text-white px-6 py-2 rounded-xl hover:bg-[#AE75DA] transition"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
      <Navbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9112BC] mb-12 text-center">
          Upcoming Hunts
        </h1>

        {hunts.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">No upcoming hunts available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hunts.map((hunt) => (
              <div
                key={hunt._id}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#9112BC] mb-2">{hunt.name}</h2>
                  <p className="text-gray-600 mb-2">{hunt.description || hunt.deccription}</p>
                  <div className="text-gray-500 text-sm space-y-1">
                    <p>
                      <strong>Start:</strong> {new Date(hunt.startTime).toLocaleString()}
                    </p>
                    <p>
                      <strong>End:</strong> {new Date(hunt.endTime).toLocaleString()}
                    </p>
                    <p>
                      <strong>Puzzles:</strong> {hunt.puzzleCount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default UpcomingHunt;
