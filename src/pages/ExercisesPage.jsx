import React, { useState, useEffect } from "react";
import { getExercisesByMuscle } from "../utils/exercisesApi";
import Preloader from "../components/Preloader/Preloader.jsx";
import "../styles/ExercisesPage.css";

const MUSCLE_FILTER_TO_API = {
  chest: "chest",
  back: "lats", // Back → lats
  legs: "quadriceps", // Legs → quadriceps
  shoulders: "shoulders",
  biceps: "biceps",
  triceps: "triceps",
  abs: "abdominals", // Abs → abdominals
};

function ExercisesPage() {
  const [muscle, setMuscle] = useState("chest");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");

      const apiMuscle = MUSCLE_FILTER_TO_API[muscle] || muscle;

      try {
        const data = await getExercisesByMuscle(apiMuscle);
        setExercises(data);
      } catch (err) {
        console.error("Error fetching exercises:", err);
        setExercises([]);
        setError("There was a problem loading exercises. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [muscle]);

  return (
    <section className="ex-page">
      <h1 className="ex-title">Exercise Explorer</h1>

      <div className="ex-select-wrapper">
        <label className="ex-select-label">Muscle Group</label>
        <select
          className="ex-select"
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
        >
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="legs">Legs</option>
          <option value="shoulders">Shoulders</option>
          <option value="biceps">Biceps</option>
          <option value="triceps">Triceps</option>
          <option value="abs">Abs</option>
        </select>
      </div>

      {loading && <Preloader />}

      {!loading && error && (
        <p className="ex-loading" style={{ color: "red" }}>
          {error}
        </p>
      )}

      {!loading && !error && (
        <ul className="ex-list">
          {exercises.map((item) => (
            <li key={item.id || item.name} className="ex-card">
              <h3 className="ex-card__title">{item.name}</h3>
              <p className="ex-card__desc">
                <strong>Muscle:</strong> {item.muscle} <br />
                <strong>Equipment:</strong> {item.equipment || "Bodyweight"}{" "}
                <br />
                <strong>Instructions:</strong> {item.instructions}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ExercisesPage;
