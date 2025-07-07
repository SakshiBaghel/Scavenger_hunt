
// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext"; 
// import { useNavigate } from "react-router-dom";

// const CreateHunt = () => {
//   const { isLoggedin, backendUrl, userData } = useContext(AppContext);
//   const navigate = useNavigate();

//   const [huntData, setHuntData] = useState({
//     name: "",
//     description: "",
//     startTime: "",
//     endTime: "",
//     puzzle: [
//       {
//         clue: "",
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
//     const { name, value, type, checked } = e.target;
//     const updated = [...huntData.puzzle];
//     updated[index][name] = type === "checkbox" ? checked : value;
//     setHuntData((prev) => ({ ...prev, puzzle: updated }));
//   };

//   const handleHintChange = (puzzleIndex, hintIndex, e) => {
//     const value = e.target.value;
//     const updated = [...huntData.puzzle];
//     updated[puzzleIndex].hints[hintIndex] = { hint: value };
//     setHuntData((prev) => ({ ...prev, puzzle: updated }));
//   };

//   const addPuzzle = () => {
//     setHuntData((prev) => ({
//       ...prev,
//       puzzle: [
//         ...prev.puzzle,
//         { clue: "", hints: [{ hint: "" }], photoReq: false },
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
//     const requestBody = {
//       ...huntData,
//       userId: userData?._id, // required by backend for createdBy
//     };

//     try {
//       const response = await fetch(`${backendUrl}/api/hunt/createHunt`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // for sending cookies
//         body: JSON.stringify(requestBody),
//       });

//       const data = await response.json();
//       console.log("Server Response:", data);

//       if (response.ok) {
//         alert("Hunt created successfully!");
//         setHuntData({
//           name: "",
//           description: "",
//           startTime: "",
//           endTime: "",
//           puzzle: [
//             {
//               clue: "",
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
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} required />
//       <textarea name="description" placeholder="Description" value={huntData.description} onChange={handleChange} required />
//       <input type="datetime-local" name="startTime" value={huntData.startTime} onChange={handleChange} required />
//       <input type="datetime-local" name="endTime" value={huntData.endTime} onChange={handleChange} required />

//       <h3>Puzzles</h3>
//       {huntData.puzzle.map((puzzle, index) => (
//         <div key={index}>
//           <input type="text" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} required />
//           {puzzle.hints.map((hint, hintIndex) => (
//             <input key={hintIndex} type="text" placeholder={`Hint ${hintIndex + 1}`} value={hint.hint} onChange={(e) => handleHintChange(index, hintIndex, e)} />
//           ))}
//           <label>
//             <input type="checkbox" name="photoReq" checked={puzzle.photoReq} onChange={(e) => handlePuzzleChange(index, e)} />
//             Photo Required
//           </label>
//           <button type="button" onClick={() => addHint(index)}>Add Hint</button>
//         </div>
//       ))}
//       <button type="button" onClick={addPuzzle}>Add Puzzle</button>
//       <button type="submit">Create Hunt</button>
//     </form>
//   );
// };

// export default CreateHunt;



import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext"; 
import { useNavigate } from "react-router-dom";

const CreateHunt = () => {
  const { isLoggedin, backendUrl, userData } = useContext(AppContext);
  const navigate = useNavigate();

  const [huntData, setHuntData] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    puzzle: [
      {
        clue: "",
        hints: [{ hint: "" }],
      },
    ],
  });

  useEffect(() => {
    if (!isLoggedin) {
      navigate("/login");
    }
  }, [isLoggedin, navigate]);

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

  const addPuzzle = () => {
    setHuntData((prev) => ({
      ...prev,
      puzzle: [
        ...prev.puzzle,
        { clue: "", hints: [{ hint: "" }] },
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

  const now = new Date();
  const start = new Date(huntData.startTime);
  const end = new Date(huntData.endTime);

  if (start < now) {
    alert("Start time cannot be in the past.");
    return;
  }
  if (end < now) {
    alert("End time cannot be in the past.");
    return;
  }
  if (end <= start) {
    alert("End time must be after start time.");
    return;
  }

  const requestBody = {
    ...huntData,
    userId: userData?._id,
  };

  try {
    const response = await fetch(`${backendUrl}/api/hunt/createHunt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Hunt created successfully!");
      setHuntData({
        name: "",
        description: "",
        startTime: "",
        endTime: "",
        puzzle: [
          {
            clue: "",
            hints: [{ hint: "" }],
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


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Hunt Name" value={huntData.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={huntData.description} onChange={handleChange} required />
      <input type="datetime-local" name="startTime" value={huntData.startTime} onChange={handleChange} required />
      <input type="datetime-local" name="endTime" value={huntData.endTime} onChange={handleChange} required />

      <h3>Puzzles</h3>
      {huntData.puzzle.map((puzzle, index) => (
        <div key={index}>
          <input type="text" name="clue" placeholder="Clue" value={puzzle.clue} onChange={(e) => handlePuzzleChange(index, e)} required />
          {puzzle.hints.map((hint, hintIndex) => (
            <input key={hintIndex} type="text" placeholder={`Hint ${hintIndex + 1}`} value={hint.hint} onChange={(e) => handleHintChange(index, hintIndex, e)} />
          ))}
          <button type="button" onClick={() => addHint(index)}>Add Hint</button>
        </div>
      ))}
      <button type="button" onClick={addPuzzle}>Add Puzzle</button>
      <button type="submit">Create Hunt</button>
    </form>
  );
};

export default CreateHunt;
