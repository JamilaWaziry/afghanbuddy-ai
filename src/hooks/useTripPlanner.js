import { useState } from "react";
import { generateTrip } from "../services/ai";

export default function useTripPlanner() {
  const [trip, setTrip] = useState("");

  const [loading, setLoading] = useState(false);

  const createTrip = async (form) => {
    try {
      setLoading(true);

      const result = await generateTrip(form);

      setTrip(result);
    } catch (error) {
      console.error(error);

      setTrip("Unable to generate your trip. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    trip,
    loading,
    createTrip,
  };
}
