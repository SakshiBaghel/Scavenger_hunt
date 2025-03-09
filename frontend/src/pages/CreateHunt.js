// // import React, { useState } from "react";

// // function CreateHunt() {
// //   const [huntData, setHuntData] = useState({
// //     name: "",
// //     description: "",
// //     startTime: "",
// //     endTime: "",
// //     createdBy: "",
// //     puzzle: [{ clue: "", hints: [""], photoReq: false }]
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setHuntData((prev) => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handlePuzzleChange = (index, e) => {
// //     const { name, value, type, checked } = e.target;
// //     const updatedPuzzles = [...huntData.puzzle];

// //     updatedPuzzles[index][name] = type === "checkbox" ? checked : value;

// //     setHuntData((prev) => ({
// //       ...prev,
// //       puzzle: updatedPuzzles
// //     }));
// //   };

// //   const handleHintChange = (puzzleIndex, hintIndex, e) => {
// //     const value = e.target.value;
// //     const updatedPuzzles = [...huntData.puzzle];
// //     updatedPuzzles[puzzleIndex].hints[hintIndex] = value;
// //     setHuntData((prev) => ({
// //       ...prev,
// //       puzzle: updatedPuzzles
// //     }));
// //   };

// //   const addPuzzle = () => {
// //     setHuntData((prev) => ({
// //       ...prev,
// //       puzzle: [...prev.puzzle, { clue: "", hints: [""], photoReq: false }]
// //     }));
// //   };

// // //   const addHint = (index) => {
// // //     const updatedPuzzles = [...huntData.puzzle];
// // //     updatedPuzzles[index].hints.push("");
// // //     setHuntData((prev) => ({
// // //       ...prev,
// // //       puzzle: updatedPuzzles
// // //     }));
// // //   };

// // const addHint = (index) => {
// //     const updatedPuzzles = [...huntData.puzzle];
// //     updatedPuzzles[index].hints.push({ hint: "" });  // Ensure each hint is an object
// //     setHuntData((prev) => ({
// //       ...prev,
// //       puzzle: updatedPuzzles
// //     }));
// //   };
  

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     const response = await fetch("http://localhost:4000/api/hunt/createHunt", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json"
// //       },
// //       body: JSON.stringify(huntData)
// //     });

// //     const data = await response.json();
// //     if (response.ok) {
// //       alert("Hunt created successfully!");
// //       setHuntData({
// //         name: "",
// //         description: "",
// //         startTime: "",
// //         endTime: "",
// //         createdBy: "",
// //         puzzle: [{ clue: "", hints: [""], photoReq: false }]
// //       });
// //     } else {
// //       alert(data.message || "Error creating hunt");
// //     }
// //   };

// //   return (
// //     <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
// //       <h2>Create a New Hunt</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} required />
// //         <input type="text" name="description" placeholder="Description" value={huntData.description} onChange={handleChange} required />
// //         <input type="datetime-local" name="startTime" value={huntData.startTime} onChange={handleChange} required />
// //         <input type="datetime-local" name="endTime" value={huntData.endTime} onChange={handleChange} required />
// //         <input type="text" name="createdBy" placeholder="Created By (User ID)" value={huntData.createdBy} onChange={handleChange} />

// //         <h3>Puzzles</h3>
// //         {huntData.puzzle.map((puzzle, index) => (
// //           <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
// //             <input type="text" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} required />

// //             <h4>Hints</h4>
// //             {puzzle.hints.map((hint, hintIndex) => (
// //               <input key={hintIndex} type="text" placeholder={`Hint ${hintIndex + 1}`} value={hint} onChange={(e) => handleHintChange(index, hintIndex, e)} />
// //             ))}
// //             <button type="button" onClick={() => addHint(index)}>Add Hint</button>

// //             <div>
// //               <label>
// //                 <input type="checkbox" name="photoReq" checked={puzzle.photoReq} onChange={(e) => handlePuzzleChange(index, e)} />
// //                 Require Photo
// //               </label>
// //             </div>
// //           </div>
// //         ))}
        
// //         <button type="button" onClick={addPuzzle}>Add Puzzle</button>
// //         <button type="submit">Create Hunt</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default CreateHunt;



// import React, { useState } from "react";

// function CreateHunt() {
//   const [huntData, setHuntData] = useState({
//     name: "",
//     description: "",
//     startTime: "",
//     endTime: "",
//     createdBy: "",
//     puzzle: [
//       { clue: "", location: { coordinates: ["", ""] }, hints: [""], photoReq: false }
//     ]
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHuntData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handlePuzzleChange = (index, e) => {
//     const { name, value, type, checked } = e.target;
//     const updatedPuzzles = [...huntData.puzzle];

//     updatedPuzzles[index][name] = type === "checkbox" ? checked : value;

//     setHuntData((prev) => ({
//       ...prev,
//       puzzle: updatedPuzzles
//     }));
//   };

//   const handleLocationChange = (index, coordinateIndex, e) => {
//     const value = e.target.value;
//     const updatedPuzzles = [...huntData.puzzle];

//     updatedPuzzles[index].location.coordinates[coordinateIndex] = value;

//     setHuntData((prev) => ({
//       ...prev,
//       puzzle: updatedPuzzles
//     }));
//   };

//   // const handleHintChange = (puzzleIndex, hintIndex, e) => {
//   //   const value = e.target.value;
//   //   const updatedPuzzles = [...huntData.puzzle];
//   //   updatedPuzzles[puzzleIndex].hints[hintIndex] = value;
//   //   setHuntData((prev) => ({
//   //     ...prev,
//   //     puzzle: updatedPuzzles
//   //   }));
//   // };

// //   const handleHintChange = (puzzleIndex, hintIndex, e) => {
// //     const value = e.target.value;
// //     const updatedPuzzles = [...huntData.puzzle];

// //     // Ensure we update the "hint" property inside the object
// //     updatedPuzzles[puzzleIndex].hints[hintIndex] = { hint: value };  

// //     setHuntData((prev) => ({
// //       ...prev,
// //       puzzle: updatedPuzzles
// //     }));
// // };
// <h4>Hints</h4>
// {puzzle.hints.map((hint, hintIndex) => (
//   <input
//     key={hintIndex}
//     type="text"
//     placeholder={`Hint ${hintIndex + 1}`}
//     value={hint.hint}  // Corrected: Accessing hint.hint instead of hint directly
//     onChange={(e) => handleHintChange(index, hintIndex, e)}
//   />
// ))}
// <button type="button" onClick={() => addHint(index)}>Add Hint</button>


//   const addPuzzle = () => {
//     setHuntData((prev) => ({
//       ...prev,
//       puzzle: [
//         ...prev.puzzle,
//         { clue: "", location: { coordinates: ["", ""] }, hints: [""], photoReq: false }
//       ]
//     }));
//   };

// //   const addHint = (index) => {
// //     const updatedPuzzles = [...huntData.puzzle];
// //     updatedPuzzles[index].hints.push("");
// //     setHuntData((prev) => ({
// //       ...prev,
// //       puzzle: updatedPuzzles
// //     }));
// //   };

// const addHint = (index) => {
//   const updatedPuzzles = [...huntData.puzzle];
//   updatedPuzzles[index].hints.push({ hint: "" });  // Store as an object
//   setHuntData((prev) => ({
//     ...prev,
//     puzzle: updatedPuzzles
//   }));
// };


//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
    
//   //   const response = await fetch("http://localhost:4000/api/hunt/createHunt", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json"
//   //     },
//   //     body: JSON.stringify(huntData)
//   //   });

//   //   const data = await response.json();
//   //   if (response.ok) {
//   //     alert("Hunt created successfully!");
//   //     setHuntData({
//   //       name: "",
//   //       description: "",
//   //       startTime: "",
//   //       endTime: "",
//   //       createdBy: "",
//   //       puzzle: [{ clue: "", location: { coordinates: ["", ""] }, hints: [""], photoReq: false }]
//   //     });
//   //   } else {
//   //     alert(data.message || "Error creating hunt");
//   //   }
//   // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const response = await fetch("http://localhost:4000/api/hunt/createHunt", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(huntData)
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
//         puzzle: [{ 
//           clue: "", 
//           location: { coordinates: ["", ""] }, 
//           hints: [{ hint: "" }],  // Corrected: Array of objects
//           photoReq: false 
//         }]
//       });
//     } else {
//       alert(data.message || "Error creating hunt");
//     }
//   };


//   return (
//     <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
//       <h2>Create a New Hunt</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} required />
//         <input type="text" name="description" placeholder="Description" value={huntData.description} onChange={handleChange} required />
//         <input type="datetime-local" name="startTime" value={huntData.startTime} onChange={handleChange} required />
//         <input type="datetime-local" name="endTime" value={huntData.endTime} onChange={handleChange} required />
//         <input type="text" name="createdBy" placeholder="Created By (User ID)" value={huntData.createdBy} onChange={handleChange} />

//         <h3>Puzzles</h3>
//         {huntData.puzzle.map((puzzle, index) => (
//           <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//             <input type="text" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} required />

//             <h4>Location</h4>
//             <input
//               type="number"
//               placeholder="Latitude"
//               value={puzzle.location.coordinates[1]}
//               onChange={(e) => handleLocationChange(index, 1, e)}
//             />
//             <input
//               type="number"
//               placeholder="Longitude"
//               value={puzzle.location.coordinates[0]}
//               onChange={(e) => handleLocationChange(index, 0, e)}
//             />

//             {/* <h4>Hints</h4>
//             {puzzle.hints.map((hint, hintIndex) => (
//               <input key={hintIndex} type="text" placeholder={`Hint ${hintIndex + 1}`} value={hint} onChange={(e) => handleHintChange(index, hintIndex, e)} />
//             ))}
//             <button type="button" onClick={() => addHint(index)}>Add Hint</button>
//              */}

// <h4>Hints</h4>
// {puzzle.hints.map((hint, hintIndex) => (
//   <input
//     key={hintIndex}
//     type="text"
//     placeholder={`Hint ${hintIndex + 1}`}
//     value={hint.hint}  // Corrected: Accessing hint.hint instead of hint directly
//     onChange={(e) => handleHintChange(index, hintIndex, e)}
//   />
// ))}
// <button type="button" onClick={() => addHint(index)}>Add Hint</button>


//             <div>
//               <label>
//                 <input type="checkbox" name="photoReq" checked={puzzle.photoReq} onChange={(e) => handlePuzzleChange(index, e)} />
//                 Require Photo
//               </label>
//             </div>
//           </div>
//         ))}
        
//         <button type="button" onClick={addPuzzle}>Add Puzzle</button>
//         <button type="submit">Create Hunt</button>
//       </form>
//     </div>
//   );
// }

// export default CreateHunt;


import React, { useState } from "react";

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
        hints: [{ hint: "" }], // Hints as objects
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
    const updatedPuzzles = [...huntData.puzzle];
    updatedPuzzles[index][name] = value;
    setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
  };

  const handleHintChange = (puzzleIndex, hintIndex, e) => {
    const value = e.target.value;
    const updatedPuzzles = [...huntData.puzzle];
    updatedPuzzles[puzzleIndex].hints[hintIndex] = { hint: value };
    setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
  };

  const addPuzzle = () => {
    setHuntData((prev) => ({
      ...prev,
      puzzle: [
        ...prev.puzzle,
        { clue: "", location: { coordinates: ["", ""] }, hints: [{ hint: "" }], photoReq: false },
      ],
    }));
  };

  const addHint = (index) => {
    const updatedPuzzles = [...huntData.puzzle];
    updatedPuzzles[index].hints.push({ hint: "" });
    setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
  };

  const handleLocationChange = (index, coordIndex, e) => {
    const value = e.target.value;
    const updatedPuzzles = [...huntData.puzzle];
    updatedPuzzles[index].location.coordinates[coordIndex] = value;
    setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(huntData);
  //   // Send huntData to backend
  // };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(huntData);
    
    const response = await fetch("http://localhost:4000/api/hunt/createHunt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(huntData)
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
        puzzle: [{ 
          clue: "", 
          location: { coordinates: ["", ""] }, 
          hints: [{ hint: "" }],  // Corrected: Array of objects
          photoReq: false 
        }]
      });
    } else {
      alert(data.message || "Error creating hunt");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={huntData.description} onChange={handleChange} />
      <input type="datetime-local" name="startTime" value={huntData.startTime} onChange={handleChange} />
      <input type="datetime-local" name="endTime" value={huntData.endTime} onChange={handleChange} />
      <input type="text" name="createdBy" placeholder="Created By" value={huntData.createdBy} onChange={handleChange} />

      <h3>Puzzles</h3>
      {huntData.puzzle.map((puzzle, index) => (
        <div key={index}>
          <input type="text" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} />
          <h4>Location</h4>
          <input type="text" placeholder="Latitude" value={puzzle.location.coordinates[0]} onChange={(e) => handleLocationChange(index, 0, e)} />
          <input type="text" placeholder="Longitude" value={puzzle.location.coordinates[1]} onChange={(e) => handleLocationChange(index, 1, e)} />
          <h4>Hints</h4>
          {puzzle.hints.map((hint, hintIndex) => (
            <input key={hintIndex} type="text" placeholder={`Hint ${hintIndex + 1}`} value={hint.hint} onChange={(e) => handleHintChange(index, hintIndex, e)} />
          ))}
          <button type="button" onClick={() => addHint(index)}>Add Hint</button>
        </div>
      ))}
      <button type="button" onClick={addPuzzle}>Add Puzzle</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateHunt;