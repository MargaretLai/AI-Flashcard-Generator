import React from "react";

export default function UserInput() {
  return (
    <label className="form-control w-full max-w-xs user-input">
      <div className="label">
        <span className="label-text">Enter subject/topic</span>
      </div>
      <input
        type="text"
        placeholder="Calculus/Integral/Series"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <button className="btn btn-outline btn-accent user-input-button">Generate Flashcards</button>
    </label>
  );
}
