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

/*
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

export default CreateHunt;*/
// import React, { useState } from "react";

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
//       puzzle: [
//         ...prev.puzzle,
//         { clue: "", location: { coordinates: ["", ""] }, hints: [{ hint: "" }], photoReq: false },
//       ],
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

//   // Styles with improved padding & spacing
//   const containerStyle = {
//     maxWidth: "800px",
//     margin: "30px auto",
//     padding: "30px 40px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     backgroundColor: "#fafafa",
//     boxSizing: "border-box",
//   };

//   const sectionStyle = { marginBottom: "28px" };
//   const labelStyle = { display: "block", marginBottom: "8px", fontWeight: "600", color: "#333" };
//   const inputStyle = {
//     width: "100%",
//     padding: "10px 12px",
//     marginBottom: "16px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     fontSize: "15px",
//     boxSizing: "border-box",
//   };

//   const buttonPrimary = {
//     padding: "12px 20px",
//     backgroundColor: "#10b981",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontWeight: "700",
//     marginTop: "12px",
//     transition: "background-color 0.3s ease",
//   };

//   const buttonSecondary = {
//     padding: "7px 14px",
//     backgroundColor: "#6c757d",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontWeight: "600",
//     marginTop: "8px",
//     marginRight: "12px",
//     transition: "background-color 0.3s ease",
//   };

//   const puzzleContainerStyle = {
//     backgroundColor: "#fff",
//     padding: "20px 25px",
//     borderRadius: "8px",
//     marginBottom: "24px",
//     // width: "calc(50% - 10px)",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//   };

//   const locationInputsWrapper = {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "16px",
//     marginBottom: "18px",
//   };

//   const locationInputStyle = {
//     flex: "1 1 50%",
//     padding: "10px 12px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     fontSize: "15px",
//     boxSizing: "border-box",
//   };

//   return (
//     <form onSubmit={handleSubmit} style={containerStyle}>
//       <h2 style={{ textAlign: "center", marginBottom: "28px", color: "#222" }}>Create New Hunt</h2>

//       <div style={sectionStyle}>
//         <label htmlFor="name" style={labelStyle}>
//           Hunt Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           placeholder="Enter hunt name"
//           value={huntData.name}
//           onChange={handleChange}
//           style={inputStyle}
//           required
//         />

//         <label htmlFor="description" style={labelStyle}>
//           Description
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           placeholder="Enter description"
//           value={huntData.description}
//           onChange={handleChange}
//           style={{ ...inputStyle, height: "90px", resize: "vertical" }}
//           required
//         />

//         <label htmlFor="startTime" style={labelStyle}>
//           Start Time
//         </label>
//         <input
//           id="startTime"
//           type="datetime-local"
//           name="startTime"
//           value={huntData.startTime}
//           onChange={handleChange}
//           style={inputStyle}
//           required
//         />

//         <label htmlFor="endTime" style={labelStyle}>
//           End Time
//         </label>
//         <input
//           id="endTime"
//           type="datetime-local"
//           name="endTime"
//           value={huntData.endTime}
//           onChange={handleChange}
//           style={inputStyle}
//           required
//         />

//         <label htmlFor="createdBy" style={labelStyle}>
//           Created By
//         </label>
//         <input
//           id="createdBy"
//           type="text"
//           name="createdBy"
//           placeholder="Your name"
//           value={huntData.createdBy}
//           onChange={handleChange}
//           style={inputStyle}
//           required
//         />
//       </div>

//       <div style={{ ...sectionStyle, borderTop: "1px solid #ddd", paddingTop: "28px" }}>
//         <h3 style={{ marginBottom: "24px", color: "#222" }}>Puzzles</h3>
//         {huntData.puzzle.map((puzzle, index) => (
//           <div key={index} style={puzzleContainerStyle}>
//             <label style={labelStyle}>Clue</label>
//             <input
//               type="text"
//               name="clue"
//               placeholder="Enter clue"
//               value={puzzle.clue}
//               onChange={(e) => handlePuzzleChange(index, e)}
//               style={inputStyle}
//               required
//             />

//             <div>
//               <h4 style={{ marginBottom: "12px", color: "#444" }}>Location Coordinates</h4>
//               <div style={locationInputsWrapper}>
//                 <input
//                   type="text"
//                   placeholder="Latitude"
//                   value={puzzle.location.coordinates[0]}
//                   onChange={(e) => handleLocationChange(index, 0, e)}
//                   style={locationInputStyle}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Longitude"
//                   value={puzzle.location.coordinates[1]}
//                   onChange={(e) => handleLocationChange(index, 1, e)}
//                   style={locationInputStyle}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <h4 style={{ marginBottom: "12px", color: "#444" }}>Hints</h4>
//               {puzzle.hints.map((hint, hintIndex) => (
//                 <input
//                   key={hintIndex}
//                   type="text"
//                   placeholder={`Hint ${hintIndex + 1}`}
//                   value={hint.hint}
//                   onChange={(e) => handleHintChange(index, hintIndex, e)}
//                   style={inputStyle}
//                   required
//                 />
//               ))}
//               <button type="button" onClick={() => addHint(index)} style={buttonSecondary}>
//                 + Add Hint
//               </button>
//             </div>
//           </div>
//         ))}

//         <button type="button" onClick={addPuzzle} style={{ ...buttonPrimary, marginBottom: "24px" }}>
//           + Add Puzzle
//         </button>
//       </div>

//       <button type="submit" style={{ ...buttonPrimary, width: "100%", fontSize: "17px" }}>
//         Create Hunt
//       </button>
//     </form>
//   );
// };
// export default CreateHunt;
// import React, { useState } from "react";

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
//       puzzle: [
//         ...prev.puzzle,
//         { clue: "", location: { coordinates: ["", ""] }, hints: [{ hint: "" }], photoReq: false },
//       ],
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
//       headers: { "Content-Type": "application/json" },
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
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6"
//     >
//       <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//         Create New Hunt
//       </h2>

//       <div className="mb-6">
//         <label className="block font-semibold mb-2">Hunt Name</label>
//         <input
//           type="text"
//           name="name"
//           value={huntData.name}
//           onChange={handleChange}
//           placeholder="Enter hunt name"
//           className="w-full p-3 border rounded-md mb-4"
//           required
//         />

//         <label className="block font-semibold mb-2">Description</label>
//         <textarea
//           name="description"
//           value={huntData.description}
//           onChange={handleChange}
//           placeholder="Enter description"
//           className="w-full p-3 border rounded-md mb-4 h-24 resize-y"
//           required
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block font-semibold mb-2">Start Time</label>
//             <input
//               type="datetime-local"
//               name="startTime"
//               value={huntData.startTime}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-2">End Time</label>
//             <input
//               type="datetime-local"
//               name="endTime"
//               value={huntData.endTime}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md"
//               required
//             />
//           </div>
//         </div>

//         <label className="block font-semibold mt-4 mb-2">Created By</label>
//         <input
//           type="text"
//           name="createdBy"
//           value={huntData.createdBy}
//           onChange={handleChange}
//           placeholder="Your name"
//           className="w-full p-3 border rounded-md"
//           required
//         />
//       </div>

//       <div className="border-t pt-6 mt-6">
//         <h3 className="text-xl font-semibold mb-4">Puzzles</h3>
//         {huntData.puzzle.map((puzzle, index) => (
//           <div
//             key={index}
//             className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6"
//           >
//             <label className="block font-semibold mb-2">Clue</label>
//             <input
//               type="text"
//               name="clue"
//               value={puzzle.clue}
//               onChange={(e) => handlePuzzleChange(index, e)}
//               placeholder="Enter clue"
//               className="w-full p-3 border rounded-md mb-4"
//               required
//             />

//             <h4 className="font-medium mb-2">Location Coordinates</h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <input
//                 type="text"
//                 placeholder="Latitude"
//                 value={puzzle.location.coordinates[0]}
//                 onChange={(e) => handleLocationChange(index, 0, e)}
//                 className="p-3 border rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Longitude"
//                 value={puzzle.location.coordinates[1]}
//                 onChange={(e) => handleLocationChange(index, 1, e)}
//                 className="p-3 border rounded-md"
//                 required
//               />
//             </div>

//             <h4 className="font-medium mb-2">Hints</h4>
//             {puzzle.hints.map((hint, hintIndex) => (
//               <input
//                 key={hintIndex}
//                 type="text"
//                 placeholder={`Hint ${hintIndex + 1}`}
//                 value={hint.hint}
//                 onChange={(e) => handleHintChange(index, hintIndex, e)}
//                 className="w-full p-3 border rounded-md mb-2"
//                 required
//               />
//             ))}

//             <button
//               type="button"
//               onClick={() => addHint(index)}
//               className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 mt-2"
//             >
//               + Add Hint
//             </button>
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={addPuzzle}
//           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mb-6"
//         >
//           + Add Puzzle
//         </button>
//       </div>

//       <button
//         type="submit"
//         className="w-full px-4 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700"
//       >
//         Create Hunt
//       </button>
//     </form>
//   );
// };

// export default CreateHunt;
import { color } from "framer-motion";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(huntData);

    const response = await fetch("http://localhost:4000/api/hunt/createHunt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
  };

  // Styles with improved padding & spacing and reduced widths
  const containerStyle = {
    maxWidth: "800px",
    margin: "30px auto",
    padding: "30px 40px",
    border: "1px solid #ddd",
    backgroundImage: "url('/images/G1.jpeg')",
    borderRadius: "8px",
    // backgroundColor: "dark-green",
  
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    // backgroundColor: "#fafafa",
    boxSizing: "border-box",
    overflowX: "hidden", // prevent horizontal scroll on container
  };

  const sectionStyle = { marginBottom: "28px" };
  const labelStyle = { display: "block", marginBottom: "8px", fontWeight: "600", color: "#ffffff" };
  const inputStyle = {
    width: "95%", // reduced width to prevent scrollbar
    padding: "10px 12px",
    marginBottom: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "15px",
    
    boxSizing: "border-box",
    
    overflowWrap: "break-word", // break long words if any
  };

  const buttonPrimary = {
    padding: "12px 20px",
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "700",
    marginTop: "12px",
    transition: "background-color 0.3s ease",
  };

  const buttonSecondary = {
    padding: "7px 14px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "8px",
    marginRight: "12px",
    transition: "background-color 0.3s ease",
  };

  const puzzleContainerStyle = {
  backgroundColor: "#fff",
  padding: "20px 25px",
  borderRadius: "8px",
  marginBottom: "24px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
  maxWidth: "100%",
  
  // backgroundImage: "url('/images/puzzle.jpeg')",
  overflowWrap: "break-word",
};

  const locationInputsWrapper = {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "18px",
    color:"#000",
    flexWrap: "wrap", // make inputs wrap on small screens
  };

  const locationInputStyle = {
    flex: "1 1 45%", // slightly smaller to fit side by side without overflow
    padding: "10px 12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "15px",
    boxSizing: "border-box",
    minWidth: "120px", // minimum width so inputs don't get too small
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "28px", color: 'white',textSizeAdjust:'65px' }}>Create New Hunt</h2>

      <div style={sectionStyle}>
        <label htmlFor="name" style={labelStyle}>
          Hunt Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter hunt name"
          value={huntData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label htmlFor="description" style={labelStyle}>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          value={huntData.description}
          onChange={handleChange}
          style={{ ...inputStyle, height: "90px", resize: "vertical" }}
          required
        />

        <label htmlFor="startTime" style={labelStyle}>
          Start Time
        </label>
        <input
          id="startTime"
          type="datetime-local"
          name="startTime"
          value={huntData.startTime}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label htmlFor="endTime" style={labelStyle}>
          End Time
        </label>
        <input
          id="endTime"
          type="datetime-local"
          name="endTime"
          value={huntData.endTime}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label htmlFor="createdBy" style={labelStyle}>
          Created By
        </label>
        <input
          id="createdBy"
          type="text"
          name="createdBy"
          placeholder="Your name"
          value={huntData.createdBy}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      <div style={{ ...sectionStyle, borderTop: "1px solid #ddd", paddingTop: "28px" }}>
        <h3 style={{ marginBottom: "24px", color: "#ffff" }}>Puzzles</h3>
        {huntData.puzzle.map((puzzle, index) => (
          <div key={index} style={puzzleContainerStyle}>
            <label style={{ ...labelStyle, color: 'black' }}>Clue</label>
            <input
              type="text"
              name="clue"
              placeholder="Enter clue"
              value={puzzle.clue}
              onChange={(e) => handlePuzzleChange(index, e)}
              style={inputStyle}
              required
            />

            <div>
              <h4 style={{ marginBottom: "12px", color: 'black' }}>Location Coordinates</h4>
              <div style={locationInputsWrapper}>
                <input
                  type="text"
                  placeholder="Latitude"
                  value={puzzle.location.coordinates[0]}
                  onChange={(e) => handleLocationChange(index, 0, e)}
                  style={locationInputStyle}
                  required
                />
                <input
                  type="text"
                  placeholder="Longitude"
                  value={puzzle.location.coordinates[1]}
                  onChange={(e) => handleLocationChange(index, 1, e)}
                  style={locationInputStyle}
                  required
                />
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: "12px", color: 'black' }}>Hints</h4>
              {puzzle.hints.map((hint, hintIndex) => (
                <input
                  key={hintIndex}
                  type="text"
                  placeholder={`Hint ${hintIndex + 1}`}
                  value={hint.hint}
                  onChange={(e) => handleHintChange(index, hintIndex, e)}
                  style={inputStyle}
                  required
                />
              ))}
              <button type="button" onClick={() => addHint(index)} style={buttonSecondary}>
                + Add Hint
              </button>
            </div>

            <div style={{ marginTop: "12px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={puzzle.photoReq}
                  onChange={() => {
                    const updatedPuzzles = [...huntData.puzzle];
                    updatedPuzzles[index].photoReq = !updatedPuzzles[index].photoReq;
                    setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
                  }}
                />{" "}
                Photo Required
              </label>
            </div>
          </div>
        ))}
        <button type="button" onClick={addPuzzle} style={buttonSecondary}>
          + Add Puzzle
        </button>
      </div>

      <button type="submit" style={buttonPrimary}>
        Create Hunt
      </button>
    </form>
  );
};

export default CreateHunt;
