const API_KEY = import.meta.env.VITE_EXERCISES_API_KEY;
const BASE_URL = "https://api.api-ninjas.com/v1/exercises";

export async function getExercisesByMuscle(muscle) {
  const response = await fetch(`${BASE_URL}?muscle=${muscle}`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching exercises");
  }

  return await response.json();
}
