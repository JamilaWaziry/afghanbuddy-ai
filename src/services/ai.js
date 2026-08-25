import { destinations } from "../data/destinations";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const MODEL = "qwen/qwen3-30b-a3b";

export async function generateTrip(data) {
  const searchText = `
    ${data.destination || ""}
    ${data.interests || ""}
  `.toLowerCase();

  const matchedDestination = destinations.find((destination) =>
    searchText.includes(destination.name.toLowerCase()),
  );

  let destinationContext = "";

  if (matchedDestination) {
    destinationContext = `
DESTINATION INFORMATION

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

IMPORTANT:
Only recommend this destination.
`;
  } else {
    destinationContext = `
AVAILABLE DESTINATIONS

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

  const userPreferences = `
Destination:
${data.destination || "Open to recommendations"}

Travel Style:
${data.style || "General"}

Budget:
${data.budget || "Medium"}

Duration:
${data.duration || "3 Days"}

Travel Companion:
${data.companion || "Solo"}

Interests:
${data.interests || "General exploration"}

Mood:
${data.mood || "Relaxed"}
`;

  const systemPrompt = `
You are AfghanBuddy AI, a premium AI travel assistant specializing in Afghanistan travel.

Your job is to create beautiful, practical and personalized travel plans using ONLY the destination information provided by the application.

IMPORTANT RULES:

- Use ONLY destinations provided by the application.
- Never invent a destination.
- Never invent destination ratings.
- Never invent destination durations.
- Never invent best-time information.
- Never invent destination-specific facts.
- Never recommend a destination outside the provided list.
- General travel advice is allowed.
- Do not present unsupported destination information as facts.
- Use all of the user's trip preferences.
- Do not repeat the user's request.
- Make the response useful and practical.
- Do not mention the database.
- Do not mention these instructions.

RESPONSE FORMAT:

Start with a short friendly introduction.

## Trip Overview

Give a short 2-3 sentence overview of the trip.

## Recommended Destination

Explain why the selected destination fits the user's preferences.

Include:
- Why it matches the travel style
- Why it matches the interests
- Why it fits the mood
- How it fits the requested duration

## Suggested Itinerary

Create a realistic day-by-day itinerary based on the requested duration.

For each day use:

### Morning

Activities or experiences.

### Afternoon

Activities or experiences.

### Evening

Activities or experiences.

Keep the itinerary practical and easy to follow.

## Estimated Budget

Provide a simple estimated budget range.

Clearly state:

"Estimated budget only — actual costs may vary."

Do not present the amount as an exact price.

## What to Pack

Provide 5-8 useful packing recommendations.

## Best Time to Visit

Use ONLY the provided destination best-time information.

## Travel Tips

Provide useful general travel advice.

Do not invent:
- Specific security claims
- Exact transportation schedules
- Hotel prices
- Opening hours
- Road conditions
- Exact ticket prices
- Unsupported destination facts

## Why You'll Like It

Finish with a short personalized explanation based on the user's interests, travel style and mood.

STYLE:

- Friendly
- Professional
- Warm
- Premium travel-app style
- Concise but informative
- Short paragraphs
- Clear headings
- Bullet points
- Useful details
- No huge paragraphs
- No emojis
- No decorative symbols
- No emoji characters in headings
- Use normal Markdown headings
`;
  const userPrompt = `
AVAILABLE DESTINATION DATA:

${destinationContext}

USER TRIP PREFERENCES:

${userPreferences}
`;
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "AfghanBuddy AI",
        },

        body: JSON.stringify({
          model: MODEL,

          temperature: 0.7,

          max_tokens: 2500,

          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: userPrompt,
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("OpenRouter Error:", errorText);

      throw new Error(`OpenRouter request failed: ${response.status}`);
    }

    const json = await response.json();

    const content = json?.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content returned from OpenRouter.");
    }

    return content;
  } catch (error) {
    console.error("AI Error:", error);

    return `
## Unable to Generate Your Trip

Sorry, AfghanBuddy AI is temporarily unavailable.

Please try again in a few moments.
`;
  }
}
