import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext"; 
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const CreateHunt = () => {
  const { isLoggedin, backendUrl, userData } = useContext(AppContext);
  const navigate = useNavigate();

  const [huntData, setHuntData] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    puzzle: [
      { clue: "", hints: [{ hint: "" }] },
    ],
  });

  useEffect(() => {
    if (!isLoggedin) navigate("/login");
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

  const handleHintChange = (pIndex, hIndex, e) => {
    const updated = [...huntData.puzzle];
    updated[pIndex].hints[hIndex] = { hint: e.target.value };
    setHuntData((prev) => ({ ...prev, puzzle: updated }));
  };

  const addPuzzle = () => {
    setHuntData((prev) => ({
      ...prev,
      puzzle: [...prev.puzzle, { clue: "", hints: [{ hint: "" }] }],
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
      toast.error("Start time cannot be in the past.");
      return;
    }
    if (end < now) {
      toast.error("End time cannot be in the past.");
      return;
    }
    if (end <= start) {
      toast.error("End time must be after start time.");
      return;
    }

    const requestBody = { ...huntData, userId: userData?._id };

    try {
      const response = await fetch(`${backendUrl}/api/hunt/createHunt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Hunt created successfully!");
        setHuntData({
          name: "",
          description: "",
          startTime: "",
          endTime: "",
          puzzle: [{ clue: "", hints: [{ hint: "" }] }],
        });
      } else {
        toast.error(data.message || "Error creating hunt");
      }
    } catch (error) {
      toast.error("Something went wrong: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCB8]">
      <Navbar />

      <div className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9112BC] mb-6 text-center">
          Create a New Hunt
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Hunt Details */}
          <input
            type="text"
            name="name"
            placeholder="Hunt Name"
            value={huntData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9112BC]"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={huntData.description}
            onChange={handleChange}
            required
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9112BC] h-32 resize-none"
          />

          {/* Start & End Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Start Time</label>
              <input
                type="datetime-local"
                name="startTime"
                value={huntData.startTime}
                onChange={handleChange}
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9112BC]"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">End Time</label>
              <input
                type="datetime-local"
                name="endTime"
                value={huntData.endTime}
                onChange={handleChange}
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9112BC]"
              />
            </div>
          </div>

          {/* Puzzles Section */}
          <h2 className="text-2xl font-semibold text-[#9112BC] mt-4">Puzzles</h2>

          <div className="flex flex-col gap-6">
            {huntData.puzzle.map((puzzle, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
              >
                <input
                  type="text"
                  name="clue"
                  placeholder="Clue"
                  value={puzzle.clue}
                  onChange={(e) => handlePuzzleChange(index, e)}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9112BC] mb-4"
                />

                <div className="flex flex-col gap-3">
                  {puzzle.hints.map((hint, hintIndex) => (
                    <input
                      key={hintIndex}
                      type="text"
                      placeholder={`Hint ${hintIndex + 1}`}
                      value={hint.hint}
                      onChange={(e) => handleHintChange(index, hintIndex, e)}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9112BC]"
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => addHint(index)}
                  className="mt-4 bg-[#9112BC] text-white px-5 py-2 rounded-xl hover:bg-[#AE75DA] transition"
                >
                  Add Hint
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={addPuzzle}
              className="bg-[#9112BC] text-white px-6 py-3 rounded-xl hover:bg-[#AE75DA] transition"
            >
              Add Puzzle
            </button>

            <button
              type="submit"
              className="bg-[#9112BC] text-white px-6 py-3 rounded-xl hover:bg-[#AE75DA] transition"
            >
              Create Hunt
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CreateHunt;
