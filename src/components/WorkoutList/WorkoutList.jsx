import React from "react";
import "./WorkoutList.css";

function WorkoutList({ exercises, onRemoveExercise }) {
  if (exercises.length === 0) {
    return (
      <p className="workout-list__empty">
        No exercises logged yet. Add your first exercise above.
      </p>
    );
  }

  return (
    <section className="workout-list">
      <h2 className="workout-list__title">Today&apos;s exercises</h2>
      <ul className="workout-list__items">
        {exercises.map((exercise) => (
          <li key={exercise.id} className="workout-list__item">
            <div className="workout-list__main">
              <p className="workout-list__name">{exercise.name}</p>
              <p className="workout-list__details">
                {exercise.sets} sets · {exercise.reps} reps · {exercise.weight}{" "}
                kg
              </p>
            </div>
            <button
              className="workout-list__remove"
              type="button"
              onClick={() => onRemoveExercise(exercise.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkoutList;
