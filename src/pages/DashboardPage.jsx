// src/pages/DashboardPage.jsx
import React, { useState, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm/WorkoutForm.jsx";
import WorkoutList from "../components/WorkoutList/WorkoutList.jsx";
import {
  loadTodayExercises,
  saveTodayExercises,
  upsertTodayHistory,
} from "../utils/storage.js";

function DashboardPage() {
  // Cargar ejercicios de HOY solo una vez (sin useEffect)
  const [exercises, setExercises] = useState(() => {
    const stored = loadTodayExercises();
    return Array.isArray(stored) ? stored : [];
  });

  // Guardar HOY + History cada vez que cambien los ejercicios
  useEffect(() => {
    saveTodayExercises(exercises);
    upsertTodayHistory(exercises);
  }, [exercises]);

  function handleAddExercise(exerciseData) {
    const newExercise = {
      id: crypto.randomUUID(),
      ...exerciseData,
    };
    setExercises((prev) => [...prev, newExercise]);
  }

  function handleRemoveExercise(id) {
    setExercises((prev) => prev.filter((exercise) => exercise.id !== id));
  }

  return (
    <section className="dashboard">
      <h1 className="dashboard__title">Today&apos;s Workout</h1>
      <p className="dashboard__subtitle">
        Plan and log your sets, reps, and weight for today.
      </p>

      <WorkoutForm onAddExercise={handleAddExercise} />

      <WorkoutList
        exercises={exercises}
        onRemoveExercise={handleRemoveExercise}
      />
    </section>
  );
}

export default DashboardPage;
