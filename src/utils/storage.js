// src/utils/storage.js

const TODAY_KEY = "gpt-gym-today-exercises";
const HISTORY_KEY = "gpt-gym-history-sessions";

// ---------- HOY ----------

export function loadTodayExercises() {
  try {
    const raw = localStorage.getItem(TODAY_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.error("Error loading today exercises", e);
    return [];
  }
}

export function saveTodayExercises(exercises) {
  try {
    localStorage.setItem(TODAY_KEY, JSON.stringify(exercises));
  } catch (e) {
    console.error("Error saving today exercises", e);
  }
}

// ---------- HISTORY ----------

export function loadHistorySessions() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.error("Error loading history sessions", e);
    return [];
  }
}

export function saveHistorySessions(sessions) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(sessions));
  } catch (e) {
    console.error("Error saving history sessions", e);
  }
}

// Calcula stats de un día
function buildSessionFromExercises(dateISO, exercises) {
  const exercisesCount = exercises.length;

  const setsCount = exercises.reduce(
    (sum, ex) => sum + Number(ex.sets || 0),
    0
  );

  const volumeKg = exercises.reduce(
    (sum, ex) =>
      sum +
      Number(ex.sets || 0) * Number(ex.reps || 0) * Number(ex.weight || 0),
    0
  );

  return {
    id: dateISO, // un día = una sesión
    date: dateISO,
    exercises,
    exercisesCount,
    setsCount,
    volumeKg,
  };
}

// Guarda/actualiza la sesión de HOY automáticamente
export function upsertTodayHistory(exercises) {
  const dateISO = new Date().toISOString(); // fecha completa
  const dateKey = dateISO.slice(0, 10); // yyyy-mm-dd

  let sessions = loadHistorySessions();

  // Si no hay ejercicios hoy, borramos la sesión de hoy (si existe)
  if (!exercises.length) {
    sessions = sessions.filter((s) => s.date.slice(0, 10) !== dateKey);
    saveHistorySessions(sessions);
    return;
  }

  const newSession = buildSessionFromExercises(dateISO, exercises);

  const existingIndex = sessions.findIndex(
    (s) => s.date.slice(0, 10) === dateKey
  );

  if (existingIndex !== -1) {
    sessions[existingIndex] = newSession;
  } else {
    sessions.push(newSession);
  }

  saveHistorySessions(sessions);
}
