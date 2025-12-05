import React, { useState } from "react";
import { loadHistorySessions } from "../utils/storage.js";
import "../styles/HistoryPage.css";

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function HistoryPage() {
  // Cargamos sólo una vez desde localStorage
  const [sessions] = useState(() => {
    const data = loadHistorySessions();
    return Array.isArray(data) ? data : [];
  });

  const hasSessions = sessions.length > 0;

  return (
    <section className="history">
      <div className="history__header">
        <h1 className="history__title">Workout History</h1>
        <p className="history__subtitle">
          Review your previous training sessions.
        </p>
      </div>

      {!hasSessions && (
        <p className="history__empty">
          You don&apos;t have any saved sessions yet. Log a workout on the Today
          tab and it will be saved automatically here by date.
        </p>
      )}

      {hasSessions && (
        <ul className="history__list">
          {[...sessions].reverse().map((session) => (
            <li key={session.id} className="history__card">
              <header className="history__card-header">
                <div>
                  <p className="history__card-date">
                    {formatDate(session.date)}
                  </p>
                  <p className="history__card-meta">
                    {session.exercisesCount} exercises · {session.setsCount}{" "}
                    sets
                  </p>
                </div>

                <p className="history__card-volume">
                  {session.volumeKg.toLocaleString()} kg total volume
                </p>
              </header>

              <ul className="history__exercises">
                {session.exercises.map((ex) => (
                  <li key={ex.id} className="history__exercise">
                    <div className="history__exercise-main">
                      <span className="history__exercise-name">{ex.name}</span>
                      <span className="history__exercise-muscle">
                        {ex.muscleGroup || "—"}
                      </span>
                    </div>
                    <span className="history__exercise-details">
                      {ex.sets} sets · {ex.reps} reps · {ex.weight} kg
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default HistoryPage;
