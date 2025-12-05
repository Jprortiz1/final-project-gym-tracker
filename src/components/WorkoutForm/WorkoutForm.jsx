import React, { useState } from "react";
import "./WorkoutForm.css";

function WorkoutForm({ onAddExercise }) {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    onAddExercise({
      name: name.trim(),
      sets: Number(sets) || 0,
      reps: Number(reps) || 0,
      weight: Number(weight) || 0,
    });

    setName("");
    setSets("");
    setReps("");
    setWeight("");
  }

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <div className="workout-form__row">
        <label className="workout-form__field">
          <span className="workout-form__label">Exercise</span>
          <input
            className="workout-form__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Bench Press"
            required
          />
        </label>

        <label className="workout-form__field">
          <span className="workout-form__label">Sets</span>
          <input
            className="workout-form__input"
            type="number"
            min="0"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            placeholder="4"
          />
        </label>

        <label className="workout-form__field">
          <span className="workout-form__label">Reps</span>
          <input
            className="workout-form__input"
            type="number"
            min="0"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="10"
          />
        </label>

        <label className="workout-form__field">
          <span className="workout-form__label">Weight (kg)</span>
          <input
            className="workout-form__input"
            type="number"
            min="0"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="60"
          />
        </label>
      </div>

      <button className="workout-form__submit" type="submit">
        Add exercise
      </button>
    </form>
  );
}

export default WorkoutForm;
