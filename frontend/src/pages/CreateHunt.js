
// import React, { useState } from "react";
// import "../styles/theme.css";

// const CreateHunt = () => {
//   const [huntData, setHuntData] = useState({
//     name: "",
//     description: "",
//     startTime: "",
//     endTime: "",
//     createdBy: "",
//     puzzle: [
//       {
//         clue: "",
//         location: { coordinates: ["", ""] },
//         hints: [{ hint: "" }],
//         photoReq: false,
//       },
//     ],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHuntData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePuzzleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedPuzzles = [...huntData.puzzle];
//     updatedPuzzles[index][name] = value;
//     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
//   };

//   const handleHintChange = (puzzleIndex, hintIndex, e) => {
//     const value = e.target.value;
//     const updatedPuzzles = [...huntData.puzzle];
//     updatedPuzzles[puzzleIndex].hints[hintIndex] = { hint: value };
//     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
//   };

//   const addPuzzle = () => {
//     setHuntData((prev) => ({
//       ...prev,
//       puzzle: [...prev.puzzle, { clue: "", location: { coordinates: ["", ""] }, hints: [{ hint: "" }], photoReq: false }],
//     }));
//   };

//   const addHint = (index) => {
//     const updatedPuzzles = [...huntData.puzzle];
//     updatedPuzzles[index].hints.push({ hint: "" });
//     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
//   };

//   const handleLocationChange = (index, coordIndex, e) => {
//     const value = e.target.value;
//     const updatedPuzzles = [...huntData.puzzle];
//     updatedPuzzles[index].location.coordinates[coordIndex] = value;
//     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(huntData);
    
//     const response = await fetch("http://localhost:4000/api/hunt/createHunt", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(huntData),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       alert("Hunt created successfully!");
//       setHuntData({
//         name: "",
//         description: "",
//         startTime: "",
//         endTime: "",
//         createdBy: "",
//         puzzle: [{ clue: "", location: { coordinates: ["", ""] }, hints: [{ hint: "" }], photoReq: false }],
//       });
//     } else {
//       alert(data.message || "Error creating hunt");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Create a Scavenger Hunt</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} required />
//         <textarea name="description" placeholder="Description" value={huntData.description} onChange={handleChange} required />
//         <input type="datetime-local" name="startTime" value={huntData.startTime} onChange={handleChange} required />
//         <input type="datetime-local" name="endTime" value={huntData.endTime} onChange={handleChange} required />
//         <input type="text" name="createdBy" placeholder="Created By" value={huntData.createdBy} onChange={handleChange} required />

//         <h3>Puzzles</h3>
//         {huntData.puzzle.map((puzzle, index) => (
//           <div key={index} className="puzzle-block">
//             <input type="text" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} required />
//             <h4>Location</h4>
//             <input type="text" placeholder="Latitude" value={puzzle.location.coordinates[0]} onChange={(e) => handleLocationChange(index, 0, e)} required />
//             <input type="text" placeholder="Longitude" value={puzzle.location.coordinates[1]} onChange={(e) => handleLocationChange(index, 1, e)} required />
//             <h4>Hints</h4>
//             {puzzle.hints.map((hint, hintIndex) => (
//               <input key={hintIndex} type="text" placeholder={`Hint ${hintIndex + 1}`} value={hint.hint} onChange={(e) => handleHintChange(index, hintIndex, e)} required />
//             ))}
//             <button type="button" className="btn-small" onClick={() => addHint(index)}>Add Hint</button>
//           </div>
//         ))}
//         <button type="button" className="btn-small" onClick={addPuzzle}>Add Puzzle</button>
//         <button type="submit" className="btn-submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateHunt;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/index.css";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/theme.css";


const PuzzleBlock = ({ puzzle, index, handlePuzzleChange, handleLocationChange, handleHintChange, addHint }) => (
  <div className="card mb-3 p-3 shadow-sm">
    <input type="text" className="form-control mb-2" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} required />
    <label className="form-label">Location</label>
    <div className="row">
      <div className="col">
        <input type="text" className="form-control" placeholder="Latitude" value={puzzle.location.coordinates[0]} onChange={(e) => handleLocationChange(index, 0, e)} required />
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Longitude" value={puzzle.location.coordinates[1]} onChange={(e) => handleLocationChange(index, 1, e)} required />
      </div>
    </div>
    <label className="form-label mt-2">Hints</label>
    {puzzle.hints.map((hint, hintIndex) => (
      <input key={hintIndex} type="text" className="form-control mb-2" placeholder={`Hint ${hintIndex + 1}`} value={hint.hint} onChange={(e) => handleHintChange(index, hintIndex, e)} required />
    ))}
    <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => addHint(index)}>Add Hint</button>
  </div>
);

const CreateHunt = () => {
  const [huntData, setHuntData] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    createdBy: "",
    puzzle: [
      {
        clue: "",
        location: { coordinates: ["", ""] },
        hints: [{ hint: "" }],
        photoReq: false,
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHuntData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePuzzleChange = (index, e) => {
    const { name, value } = e.target;
    setHuntData((prev) => {
      const updatedPuzzles = [...prev.puzzle];
      updatedPuzzles[index] = { ...updatedPuzzles[index], [name]: value };
      return { ...prev, puzzle: updatedPuzzles };
    });
  };

  const handleHintChange = (puzzleIndex, hintIndex, e) => {
    const value = e.target.value;
    setHuntData((prev) => {
      const updatedPuzzles = [...prev.puzzle];
      updatedPuzzles[puzzleIndex].hints[hintIndex] = { hint: value };
      return { ...prev, puzzle: updatedPuzzles };
    });
  };

  const addPuzzle = () => {
    setHuntData((prev) => ({
      ...prev,
      puzzle: [...prev.puzzle, { clue: "", location: { coordinates: ["", ""] }, hints: [{ hint: "" }], photoReq: false }],
    }));
  };

  const addHint = (index) => {
    setHuntData((prev) => {
      const updatedPuzzles = [...prev.puzzle];
      updatedPuzzles[index].hints.push({ hint: "" });
      return { ...prev, puzzle: updatedPuzzles };
    });
  };

  const handleLocationChange = (index, coordIndex, e) => {
    const value = e.target.value;
    setHuntData((prev) => {
      const updatedPuzzles = [...prev.puzzle];
      updatedPuzzles[index].location.coordinates[coordIndex] = value;
      return { ...prev, puzzle: updatedPuzzles };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/hunt/createHunt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(huntData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Hunt created successfully!");
        setHuntData({
          name: "",
          description: "",
          startTime: "",
          endTime: "",
          createdBy: "",
          puzzle: [{ clue: "", location: { coordinates: ["", ""] }, hints: [{ hint: "" }], photoReq: false }],
        });
      } else {
        alert(data.message || "Error creating hunt");
      }
    } catch (error) {
      alert("Failed to create hunt. Please try again.");
    }
  };

  return (
    <div className="theme-background" style={{ paddingTop: "30px" }}>
      {/* <Navbar /> */}
      <div className="container mt-4 main-container">
        <h2 className="text-center mb-4">Create a Scavenger Hunt</h2>
        <form onSubmit={handleSubmit} className="card p-4 shadow">
          <input type="text" className="form-control mb-3" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} required />
          <textarea className="form-control mb-3" name="description" placeholder="Description" value={huntData.description} onChange={handleChange} required />
          <input type="datetime-local" className="form-control mb-3" name="startTime" value={huntData.startTime} onChange={handleChange} required />
          <input type="datetime-local" className="form-control mb-3" name="endTime" value={huntData.endTime} onChange={handleChange} required />
          <input type="text" className="form-control mb-3" name="createdBy" placeholder="Created By" value={huntData.createdBy} onChange={handleChange} required />
          <h3 className="text-center mt-3">Puzzles</h3>
          {huntData.puzzle.map((puzzle, index) => (
            <PuzzleBlock 
              key={index} 
              puzzle={puzzle} 
              index={index} 
              handlePuzzleChange={handlePuzzleChange} 
              handleLocationChange={handleLocationChange} 
              handleHintChange={handleHintChange} 
              addHint={addHint} 
            />
          ))}
          <button type="button" className="btn btn-outline-success mt-3" onClick={addPuzzle}>Add Puzzle</button>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateHunt;
