import React from "react";
import "./ExerciseCard.css";

function ExerciseCard({ exercise }) {
  return (
    <article className="exercise-card">
      <header className="exercise-card__header">
        <h3 className="exercise-card__title">{exercise.name}</h3>
        <span className="exercise-card__tag">{exercise.muscle}</span>
      </header>

      <dl className="exercise-card__meta">
        <div className="exercise-card__meta-row">
          <dt className="exercise-card__meta-label">Equipment</dt>
          <dd className="exercise-card__meta-value">
            {exercise.equipment || "Bodyweight"}
          </dd>
        </div>
        <div className="exercise-card__meta-row">
          <dt className="exercise-card__meta-label">Type</dt>
          <dd className="exercise-card__meta-value">
            {exercise.type || "Strength"}
          </dd>
        </div>
      </dl>

      <p className="exercise-card__instructions">{exercise.instructions}</p>
    </article>
  );
}

export default ExerciseCard;
