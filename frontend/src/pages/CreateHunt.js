
// // // import React, { useState } from "react";

// // // const CreateHunt = () => {
// // //   const [huntData, setHuntData] = useState({
// // //     name: "",
// // //     description: "",
// // //     startTime: "",
// // //     endTime: "",
// // //     createdBy: "",
// // //     puzzle: [
// // //       {
// // //         clue: "",
// // //         location: { coordinates: ["", ""] },
// // //         hints: [{ hint: "" }], // Hints as objects
// // //         photoReq: false,
// // //       },
// // //     ],
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setHuntData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handlePuzzleChange = (index, e) => {
// // //     const { name, value } = e.target;
// // //     const updatedPuzzles = [...huntData.puzzle];
// // //     updatedPuzzles[index][name] = value;
// // //     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
// // //   };

// // //   const handleHintChange = (puzzleIndex, hintIndex, e) => {
// // //     const value = e.target.value;
// // //     const updatedPuzzles = [...huntData.puzzle];
// // //     updatedPuzzles[puzzleIndex].hints[hintIndex] = { hint: value };
// // //     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
// // //   };

// // //   const addPuzzle = () => {
// // //     setHuntData((prev) => ({
// // //       ...prev,
// // //       puzzle: [
// // //         ...prev.puzzle,
// // //         { clue: "", location: { coordinates: ["", ""] }, hints: [{ hint: "" }], photoReq: false },
// // //       ],
// // //     }));
// // //   };

// // //   const addHint = (index) => {
// // //     const updatedPuzzles = [...huntData.puzzle];
// // //     updatedPuzzles[index].hints.push({ hint: "" });
// // //     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
// // //   };

// // //   const handleLocationChange = (index, coordIndex, e) => {
// // //     const value = e.target.value;
// // //     const updatedPuzzles = [...huntData.puzzle];
// // //     updatedPuzzles[index].location.coordinates[coordIndex] = value;
// // //     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
// // //   };

// // //   // const handleSubmit = (e) => {
// // //   //   e.preventDefault();
// // //   //   console.log(huntData);
// // //   //   // Send huntData to backend
// // //   // };

  
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
    
// // //     console.log(huntData);
    
// // //     const response = await fetch("http://localhost:4000/api/hunt/createHunt", {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json"
// // //       },
// // //       body: JSON.stringify(huntData)
// // //     });

// // //     const data = await response.json();
// // //     if (response.ok) {
// // //       alert("Hunt created successfully!");
// // //       setHuntData({
// // //         name: "",
// // //         description: "",
// // //         startTime: "",
// // //         endTime: "",
// // //         createdBy: "",
// // //         puzzle: [{ 
// // //           clue: "", 
// // //           location: { coordinates: ["", ""] }, 
// // //           hints: [{ hint: "" }],  // Corrected: Array of objects
// // //           photoReq: false 
// // //         }]
// // //       });
// // //     } else {
// // //       alert(data.message || "Error creating hunt");
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <input type="text" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} />
// // //       <textarea name="description" placeholder="Description" value={huntData.description} onChange={handleChange} />
// // //       <input type="datetime-local" name="startTime" value={huntData.startTime} onChange={handleChange} />
// // //       <input type="datetime-local" name="endTime" value={huntData.endTime} onChange={handleChange} />
// // //       <input type="text" name="createdBy" placeholder="Created By" value={huntData.createdBy} onChange={handleChange} />

// // //       <h3>Puzzles</h3>
// // //       {huntData.puzzle.map((puzzle, index) => (
// // //         <div key={index}>
// // //           <input type="text" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} />
// // //           <h4>Location</h4>
// // //           <input type="text" placeholder="Latitude" value={puzzle.location.coordinates[0]} onChange={(e) => handleLocationChange(index, 0, e)} />
// // //           <input type="text" placeholder="Longitude" value={puzzle.location.coordinates[1]} onChange={(e) => handleLocationChange(index, 1, e)} />
// // //           <h4>Hints</h4>
// // //           {puzzle.hints.map((hint, hintIndex) => (
// // //             <input key={hintIndex} type="text" placeholder={`Hint ${hintIndex + 1}`} value={hint.hint} onChange={(e) => handleHintChange(index, hintIndex, e)} />
// // //           ))}
// // //           <button type="button" onClick={() => addHint(index)}>Add Hint</button>
// // //         </div>
// // //       ))}
// // //       <button type="button" onClick={addPuzzle}>Add Puzzle</button>
// // //       <button type="submit">Submit</button>
// // //     </form>
// // //   );
// // // };

// // // export default CreateHunt;



// // import React, { useState } from "react";

// // const CreateHunt = () => {
// //   const [huntData, setHuntData] = useState({
// //     name: "",
// //     description: "",
// //     startTime: "",
// //     endTime: "",
// //     puzzle: [
// //       {
// //         clue: "",
// //         location: { coordinates: ["", ""] },
// //         hints: [{ hint: "" }],
// //         photoReq: false,
// //       },
// //     ],
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setHuntData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handlePuzzleChange = (index, e) => {
// //     const { name, value } = e.target;
// //     const updatedPuzzles = [...huntData.puzzle];
// //     updatedPuzzles[index][name] = value;
// //     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
// //   };

// //   const handleHintChange = (puzzleIndex, hintIndex, e) => {
// //     const value = e.target.value;
// //     const updatedPuzzles = [...huntData.puzzle];
// //     updatedPuzzles[puzzleIndex].hints[hintIndex] = { hint: value };
// //     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
// //   };

// //   const handleLocationChange = (index, coordIndex, e) => {
// //     const value = e.target.value;
// //     const updatedPuzzles = [...huntData.puzzle];
// //     updatedPuzzles[index].location.coordinates[coordIndex] = value;
// //     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
// //   };

// //   const addPuzzle = () => {
// //     setHuntData((prev) => ({
// //       ...prev,
// //       puzzle: [
// //         ...prev.puzzle,
// //         {
// //           clue: "",
// //           location: { coordinates: ["", ""] },
// //           hints: [{ hint: "" }],
// //           photoReq: false,
// //         },
// //       ],
// //     }));
// //   };

// //   const addHint = (index) => {
// //     const updatedPuzzles = [...huntData.puzzle];
// //     updatedPuzzles[index].hints.push({ hint: "" });
// //     setHuntData((prev) => ({ ...prev, puzzle: updatedPuzzles }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("http://localhost:4000/api/hunt/createHunt", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         credentials: "include", // Send cookies (JWT)
// //         body: JSON.stringify(huntData),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("Hunt created successfully!");
// //         setHuntData({
// //           name: "",
// //           description: "",
// //           startTime: "",
// //           endTime: "",
// //           puzzle: [
// //             {
// //               clue: "",
// //               location: { coordinates: ["", ""] },
// //               hints: [{ hint: "" }],
// //               photoReq: false,
// //             },
// //           ],
// //         });
// //       } else {
// //         alert(data.message || "Error creating hunt");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("Something went wrong.");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Create New Hunt</h2>
// //       <input
// //         type="text"
// //         name="name"
// //         placeholder="Hunt Name"
// //         value={huntData.name}
// //         onChange={handleChange}
// //       />
// //       <textarea
// //         name="description"
// //         placeholder="Description"
// //         value={huntData.description}
// //         onChange={handleChange}
// //       />
// //       <input
// //         type="datetime-local"
// //         name="startTime"
// //         value={huntData.startTime}
// //         onChange={handleChange}
// //       />
// //       <input
// //         type="datetime-local"
// //         name="endTime"
// //         value={huntData.endTime}
// //         onChange={handleChange}
// //       />

// //       <h3>Puzzles</h3>
// //       {huntData.puzzle.map((puzzle, index) => (
// //         <div key={index}>
// //           <input
// //             type="text"
// //             name="clue"
// //             placeholder="Clue"
// //             value={puzzle.clue}
// //             onChange={(e) => handlePuzzleChange(index, e)}
// //           />
// //           <h4>Location</h4>
// //           <input
// //             type="text"
// //             placeholder="Latitude"
// //             value={puzzle.location.coordinates[0]}
// //             onChange={(e) => handleLocationChange(index, 0, e)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Longitude"
// //             value={puzzle.location.coordinates[1]}
// //             onChange={(e) => handleLocationChange(index, 1, e)}
// //           />
// //           <h4>Hints</h4>
// //           {puzzle.hints.map((hint, hintIndex) => (
// //             <input
// //               key={hintIndex}
// //               type="text"
// //               placeholder={`Hint ${hintIndex + 1}`}
// //               value={hint.hint}
// //               onChange={(e) => handleHintChange(index, hintIndex, e)}
// //             />
// //           ))}
// //           <button type="button" onClick={() => addHint(index)}>
// //             Add Hint
// //           </button>
// //         </div>
// //       ))}

// //       <button type="button" onClick={addPuzzle}>
// //         Add Puzzle
// //       </button>
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // };

// // export default CreateHunt;



// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext"; 
// import { useNavigate } from "react-router-dom";

// const CreateHunt = () => {
//   const { isLoggedin, backendUrl, userData } = useContext(AppContext);
//   const navigate = useNavigate();
//   console.log("user_Id: ", userData?._id)
//   const [huntData, setHuntData] = useState({
//     name: "",
//     description: "",
//     startTime: "",
//     endTime: "",
//     createdBy: userData?._id || "", // default to logged-in user's ID
//     puzzle: [
//       {
//         clue: "",
//         location: { coordinates: ["", ""] },
//         hints: [{ hint: "" }],
//         photoReq: false,
//       },
//     ],
//   });

//   useEffect(() => {
//     if (!isLoggedin) {
//       navigate("/login");
//     }
//   }, [isLoggedin, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHuntData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePuzzleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updated = [...huntData.puzzle];
//     updated[index][name] = value;
//     setHuntData((prev) => ({ ...prev, puzzle: updated }));
//   };

//   const handleHintChange = (puzzleIndex, hintIndex, e) => {
//     const value = e.target.value;
//     const updated = [...huntData.puzzle];
//     updated[puzzleIndex].hints[hintIndex] = { hint: value };
//     setHuntData((prev) => ({ ...prev, puzzle: updated }));
//   };

//   const handleLocationChange = (index, coordIndex, e) => {
//     const value = e.target.value;
//     const updated = [...huntData.puzzle];
//     updated[index].location.coordinates[coordIndex] = value;
//     setHuntData((prev) => ({ ...prev, puzzle: updated }));
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
//     const updated = [...huntData.puzzle];
//     updated[index].hints.push({ hint: "" });
//     setHuntData((prev) => ({ ...prev, puzzle: updated }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${backendUrl}/api/hunt/createHunt`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // very important for cookie-based sessions
//         body: JSON.stringify(huntData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Hunt created successfully!");
//         setHuntData({
//           name: "",
//           description: "",
//           startTime: "",
//           endTime: "",
//           createdBy: userData?._id || "",
//           puzzle: [
//             {
//               clue: "",
//               location: { coordinates: ["", ""] },
//               hints: [{ hint: "" }],
//               photoReq: false,
//             },
//           ],
//         });
//       } else {
//         alert(data.message || "Error creating hunt");
//       }
//     } catch (error) {
//       alert("Something went wrong: " + error.message);
//     }
//   };

//   return (
//     isLoggedin && (
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} />
//         <textarea name="description" placeholder="Description" value={huntData.description} onChange={handleChange} />
//         <input type="datetime-local" name="startTime" value={huntData.startTime} onChange={handleChange} />
//         <input type="datetime-local" name="endTime" value={huntData.endTime} onChange={handleChange} />

//         <h3>Puzzles</h3>
//         {huntData.puzzle.map((puzzle, index) => (
//           <div key={index}>
//             <input type="text" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} />
//             <input type="text" placeholder="Latitude" value={puzzle.location.coordinates[0]} onChange={(e) => handleLocationChange(index, 0, e)} />
//             <input type="text" placeholder="Longitude" value={puzzle.location.coordinates[1]} onChange={(e) => handleLocationChange(index, 1, e)} />
//             {puzzle.hints.map((hint, hintIndex) => (
//               <input key={hintIndex} type="text" placeholder={`Hint ${hintIndex + 1}`} value={hint.hint} onChange={(e) => handleHintChange(index, hintIndex, e)} />
//             ))}
//             <button type="button" onClick={() => addHint(index)}>Add Hint</button>
//           </div>
//         ))}
//         <button type="button" onClick={addPuzzle}>Add Puzzle</button>
//         <button type="submit">Submit</button>
//       </form>
//     )
//   );
// };

// export default CreateHunt;


import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext"; 
import { useNavigate } from "react-router-dom";

const CreateHunt = () => {
  const { isLoggedin, backendUrl, userData } = useContext(AppContext);
  const navigate = useNavigate();
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  // Default state for hunt creation form
  const [huntData, setHuntData] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    createdBy: userData?._id || "", // default to logged-in user's ID
    puzzle: [
      {
        clue: "",
        location: { coordinates: ["", ""] },
        hints: [{ hint: "" }],
        photoReq: false,
      },
    ],
  });

  // useEffect(() => {
  //   if (userData) {
  //     setIsUserDataLoaded(true); // Set user data as loaded when it's available
  //     console.log("user_ID:", userData._id); 
  //   }
  // }, [userData]);

  useEffect(() => {
    if (userData) {
      setIsUserDataLoaded(true);
      console.log("userData available:", userData);  // This will log the entire userData object
      console.log("user_ID:", userData._id);  // This should log the user _id if userData is available
    } else {
      console.log("userData is undefined or not yet loaded");
    }
  }, [userData]);

  useEffect(() => {
    if (!isLoggedin) {
      navigate("/login");
    }
  }, [isLoggedin, navigate]);

  

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHuntData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePuzzleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...huntData.puzzle];
    updated[index][name] = value;
    setHuntData((prev) => ({ ...prev, puzzle: updated }));
  };

  const handleHintChange = (puzzleIndex, hintIndex, e) => {
    const value = e.target.value;
    const updated = [...huntData.puzzle];
    updated[puzzleIndex].hints[hintIndex] = { hint: value };
    setHuntData((prev) => ({ ...prev, puzzle: updated }));
  };

  const handleLocationChange = (index, coordIndex, e) => {
    const value = e.target.value;
    const updated = [...huntData.puzzle];
    updated[index].location.coordinates[coordIndex] = value;
    setHuntData((prev) => ({ ...prev, puzzle: updated }));
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
    const updated = [...huntData.puzzle];
    updated[index].hints.push({ hint: "" });
    setHuntData((prev) => ({ ...prev, puzzle: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/hunt/createHunt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // very important for cookie-based sessions
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
          createdBy: userData?._id || "",
          puzzle: [
            {
              clue: "",
              location: { coordinates: ["", ""] },
              hints: [{ hint: "" }],
              photoReq: false,
            },
          ],
        });
      } else {
        alert(data.message || "Error creating hunt");
      }
    } catch (error) {
      alert("Something went wrong: " + error.message);
    }
  };

  // Ensure user data is loaded and user is logged in before showing the form
  if (!isUserDataLoaded || !isLoggedin) {
    return <p>Loading user data or redirecting to login...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={huntData.description} onChange={handleChange} />
      <input type="datetime-local" name="startTime" value={huntData.startTime} onChange={handleChange} />
      <input type="datetime-local" name="endTime" value={huntData.endTime} onChange={handleChange} />

      <h3>Puzzles</h3>
      {huntData.puzzle.map((puzzle, index) => (
        <div key={index}>
          <input type="text" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} />
          <input type="text" placeholder="Latitude" value={puzzle.location.coordinates[0]} onChange={(e) => handleLocationChange(index, 0, e)} />
          <input type="text" placeholder="Longitude" value={puzzle.location.coordinates[1]} onChange={(e) => handleLocationChange(index, 1, e)} />
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
