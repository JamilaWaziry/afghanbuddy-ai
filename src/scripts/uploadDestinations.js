import { supabase } from "../services/supabase";
import { destinations } from "../data/destinations";

export async function uploadDestinations() {
  const rows = destinations.map((d) => ({
    name: d.name,
    province: d.province,
    category: d.category,
    description: d.description,
    best_time: d.bestTime,
    duration: d.duration,
    rating: d.rating,
    image: d.image,
  }));

  const { data, error } = await supabase
    .from("destinations")
    .insert(rows)
    .select();

  if (error) {
    console.error(error);
    return;
  }

  console.log(`Uploaded ${data.length} destinations`);
}
