const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const MODEL = "inclusionai/ling-3.0-flash:free";

export async function chat(messages) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
      }),
    },
  );

  const data = await response.json();

  return data.choices[0].message.content;
}
