// import { useParams } from 'react-router-dom'

// const JoinHunt = () => {
//     const { huntId } = useParams();
//     return (
//         <header>
//             <div className="container">
//                 <h1>Join hunt: {huntId}</h1>
//             </div>
//         </header>
//     )
// }

// export default JoinHunt


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JoinHunt = () => {
    const { huntId } = useParams();
    const [hunt, setHunt] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;
    if (!hunt) return <h2>Hunt not found</h2>;

    return (
        <div className="container">
            <h1>{hunt.name}</h1>
            <p>{hunt.description}</p>
            <h3>Start Time: {new Date(hunt.startTime).toLocaleString()}</h3>
            <h3>End Time: {new Date(hunt.endTime).toLocaleString()}</h3>

            <h2>Puzzles:</h2>
            {hunt.puzzles.map((puzzle, index) => (
                <div key={index} className="puzzle">
                    <h3>Clue: {puzzle.clue}</h3>
                    {puzzle.hints.length > 0 && (
                        <ul>
                            {puzzle.hints.map((hint, i) => (
                                <li key={i}>Hint: {hint.hint}</li>
                            ))}
                        </ul>
                    )}
                    {puzzle.photoReq && <p><strong>Photo required to complete this puzzle!</strong></p>}
                    {puzzle.location.coordinates && (
                        <p>Location: {puzzle.location.coordinates.join(", ")}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default JoinHunt;
