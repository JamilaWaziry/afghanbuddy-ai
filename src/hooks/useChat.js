import { useEffect, useState } from "react";
import { generateTrip } from "../services/ai";
import { quickReplies } from "../data/chatReplies";
import { destinations } from "../data/destinations";

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedChat = localStorage.getItem("chat");

    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (text, category = null) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const query = text.toLowerCase().trim();

      const quickReply = quickReplies.find((item) =>
        item.keywords.some((keyword) => query.includes(keyword)),
      );

      let reply = "";

      if (quickReply) {
        reply = quickReply.reply;
      } else {
        const matchedDestination = destinations.find((destination) =>
          query.includes(destination.name.toLowerCase()),
        );

        if (matchedDestination) {
          const prompt = category
            ? `Category: ${category}

Traveler Request:
${text}`
            : text;

          reply = await generateTrip({
            interests: prompt,
            mood: category || "",
            budget: "",
            duration: "",
            style: "",
          });
        } else {
          reply = await generateTrip({
            interests: text,
            mood: "",
            budget: "",
            duration: "",
            style: "",
          });
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 900));

      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "❌ Sorry, something went wrong while generating your travel plan. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    localStorage.removeItem("chat");
    setMessages([]);
  };

  return {
    messages,
    loading,
    sendMessage,
    clearChat,
  };
}
