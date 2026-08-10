import { useState } from "react";
import { generateTrip } from "../services/ai";

export default function useTripPlanner() {
  const [trip, setTrip] = useState("");
  const [loading, setLoading] = useState(false);

  const createTrip = async (form) => {
    try {
      setLoading(true);
      setTrip("");

      console.log("Trip Form Submitted:", form);

      const result = await generateTrip(form);

      setTrip(result);
    } catch (error) {
      console.error("Trip Planner Error:", error);

      setTrip(`
## Unable to Generate Your Trip

Something went wrong while creating your trip.

Please try again.
`);
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
