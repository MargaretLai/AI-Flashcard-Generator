import React from "react";
import { useState } from "react";

export default function UserInput({ onGenerateFlashcards}) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onGenerateFlashcards(inputValue);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <label className="form-control w-full max-w-xs user-input">
      <div className="label">
        <span className="label-text">Enter subject/topic</span>
      </div>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Calculus/Integral/Series"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <button
        onClick={handleSubmit}
        className="btn btn-outline btn-accent user-input-button"
      >
        Generate Flashcards
      </button>
    </label>
  );
}
