// // 
// import { useEffect, useState } from 'react';

// const UpcomingHunt = () => {
//   const [hunts, setHunts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUpcomingHunts = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/hunt/upcomingHunts');
//         if (!response.ok) {
//           throw new Error("Failed to fetch upcoming hunts");
//         }
//         const data = await response.json();
//         setHunts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUpcomingHunts();
//   }, []);

//   if (loading) return <p>Loading upcoming hunts... ⏳</p>;

//   if (error) return (
//     <div style={{ padding: '1rem' }}>
//       <p style={{ color: 'red' }}>Error: {error}</p>
//       <button onClick={() => window.location.reload()}>Retry</button>
//     </div>
//   );

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2 style={{ marginBottom: '1.5rem' }}>Upcoming Hunts</h2>
//       {hunts.length === 0 ? (
//         <p>No upcoming hunts available.</p>
//       ) : (
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {hunts.map((hunt) => (
//             <li key={hunt._id} className="hunt-card" style={{
//               border: '1px solid #ccc',
//               borderRadius: '10px',
//               padding: '1.5rem',
//               marginBottom: '1.5rem',
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
//             }}>
//               <h3>{hunt.name}</h3>
//               <p>{hunt.description}</p>
//               <p><strong>Starts:</strong> {new Date(hunt.startTime).toLocaleString()}</p>
//               <p><strong>Ends:</strong> {new Date(hunt.endTime).toLocaleString()}</p>
//               <p>
//                 <strong>Number of Puzzles:</strong> {hunt.puzzleCount ?? "N/A"}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UpcomingHunt;
// import { useEffect, useState } from 'react';
// import LayoutWrapper from '../components/LayoutWrapper';

// const UpcomingHunt = () => {
//   const [hunts, setHunts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLiveHunts = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/hunt/upcomingHunts');
//         if (!response.ok) {
//           throw new Error('Failed to fetch live hunts');
//         }
//         const data = await response.json();
//         setHunts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLiveHunts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-600 mt-6">Loading live hunts... ⏳</p>;
//   if (error)
//     return (
//       <div className="text-center mt-6 text-red-600">
//         <p>Error: {error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Retry
//         </button>
//       </div>
//     );

//   return (
//     <LayoutWrapper>
//     <div className="min-h-screen w-full bg-gradient-to-br from-lime-500 via-green-500 to-emerald-400">
//       <h2 className="text-3xl font-semibold mb-6 text-center">Upcoming Hunts</h2>
//       {hunts.length === 0 ? (
//         <p className="text-center text-gray-500">No Live hunts available</p>
//       ) : (
//         <ul className="space-y-6">
//           {hunts.map((hunt) => (
//             <li
//               key={hunt._id}
//               className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition cursor-pointer"
//             >
//               <h3 className="text-xl font-bold mb-2">{hunt.name}</h3>
//               <p className="text-gray-600 mb-1">{hunt.description}</p>
//               <p className="text-sm text-gray-500">
//                 Starts: {new Date(hunt.startTime).toLocaleString()}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Ends: {new Date(hunt.endTime).toLocaleString()}
//               </p>
//               <p className="mt-2 font-semibold">
//                 Number of Puzzles: <span className="text-blue-600">{hunt.puzzleCount}</span>
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//     </LayoutWrapper>
//   );
// };

// export default UpcomingHunt;
import { useEffect, useState } from 'react';
import LayoutWrapper from '../components/LayoutWrapper';
import { ArrowLeftCircle, ArrowRightCircle, Puzzle, CalendarCheck, Clock } from 'lucide-react';

const UpcomingHunt = () => {
  const [hunts, setHunts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveHunts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/hunt/upcomingHunts');
        if (!response.ok) {
          throw new Error('Failed to fetch live hunts');
        }
        const data = await response.json();
        setHunts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveHunts();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? hunts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === hunts.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading)
    return <p className="text-center text-gray-600 mt-6 animate-pulse">Loading live hunts... ⏳</p>;

  if (error)
    return (
      <div className="text-center mt-6 text-red-600">
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    );

  return (
    <LayoutWrapper>
      <div className="relative w-full p-4 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-center mb-6">🔥 Upcoming Hunts 🔥</h2>

        {hunts.length === 0 ? (
          <p className="text-center text-gray-500">No live hunts available right now.</p>
        ) : (
          <div className="relative w-full max-w-md">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-blue-300 active:scale-90 transition"
            >
              <ArrowLeftCircle size={48} className="text-green-600 hover:scale-110 hover:shadow-xl transition" />
            </button>

            {/* Current Hunt Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:shadow-2xl hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-2 text-green-700">{hunts[currentIndex].name}</h3>
              <p className="text-gray-600 text-sm mb-4">{hunts[currentIndex].description}</p>
              <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                <CalendarCheck size={20} className="mr-2 text-green-500" />
                Starts: {new Date(hunts[currentIndex].startTime).toLocaleString()}
              </div>
              <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                <Clock size={20} className="mr-2 text-green-500" />
                Ends: {new Date(hunts[currentIndex].endTime).toLocaleString()}
              </div>
              <div className="flex items-center justify-center mt-2 text-blue-600 font-medium">
                <Puzzle size={22} className="mr-2" /> {hunts[currentIndex].puzzleCount} puzzles
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-blue-300 active:scale-90 transition"
            >
              <ArrowRightCircle size={48} className="text-green-600 hover:scale-110 hover:shadow-xl transition" />
            </button>
          </div>
        )}
      </div>
    </LayoutWrapper>
  );
};

export default UpcomingHunt;
