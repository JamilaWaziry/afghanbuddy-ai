import { destinations } from "../data/destinations";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const MODEL = "inclusionai/ling-3.0-flash:free";

export async function generateTrip(data) {
  // Check if user mentioned one of our destinations
  const matchedDestination = destinations.find((destination) =>
    data.interests.toLowerCase().includes(destination.name.toLowerCase()),
  );

  let destinationContext = "";

  if (matchedDestination) {
    destinationContext = `
Destination Information

Name:
${matchedDestination.name}

Category:
${matchedDestination.category}

Description:
${matchedDestination.description}

Best Time:
${matchedDestination.bestTime}

Recommended Duration:
${matchedDestination.duration}

Rating:
${matchedDestination.rating}

Only recommend this destination.
`;
  } else {
    destinationContext = `
Available Destinations

${destinations
  .map(
    (destination) => `
Name: ${destination.name}
Category: ${destination.category}
Description: ${destination.description}
Best Time: ${destination.bestTime}
Duration: ${destination.duration}
Rating: ${destination.rating}
`,
  )
  .join("\n")}
`;
  }

  const prompt = `
You are AfghanBuddy AI.

You are an expert travel assistant for Afghanistan.

Use ONLY the destination information provided below.

${destinationContext}

User Request

${data.interests}

Generate a professional response using this format:

🌄 Trip Summary

📅 Day-by-Day Itinerary

💰 Estimated Budget

🎒 Packing List

🛡 Safety Tips

🌤 Best Time to Visit

❤️ Why This Destination Was Recommended

Rules:

- Only recommend destinations from the provided list.
- Never invent destinations.
- Keep the answer friendly and professional.
- Use Markdown formatting.
`;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",

          // Optional but recommended by OpenRouter
          "HTTP-Referer": window.location.origin,
          "X-Title": "AfghanBuddy AI",
        },

        body: JSON.stringify({
          model: MODEL,

          temperature: 0.7,

          max_tokens: 1800,

          messages: [
            {
              role: "system",
              content:
                "You are AfghanBuddy AI, an intelligent travel assistant specialised in Afghanistan tourism.",
            },

            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const error = await response.text();
      console.error(error);
      throw new Error("OpenRouter request failed.");
    }

    const json = await response.json();

    return (
      json?.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a travel plan."
    );
  } catch (error) {
    console.error(error);

    return "❌ Sorry, AfghanBuddy AI is currently unavailable. Please try again in a few moments.";
  }
}
