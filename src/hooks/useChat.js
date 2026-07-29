import { useEffect, useState } from "react";
import { generateTrip } from "../services/ai";
import { quickReplies } from "../data/chatReplies";
import { destinations } from "../data/destinations";

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load saved chat
  useEffect(() => {
    const savedChat = localStorage.getItem("chat");

    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    }
  }, []);

  // Save chat automatically
  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (text) => {
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

      // Greeting / Thanks replies
      const quickReply = quickReplies.find((item) =>
        item.keywords.some((keyword) => query.includes(keyword)),
      );

      let reply = "";

      if (quickReply) {
        reply = quickReply.reply;
      } else {
        // Check whether the user typed one of our destinations
        const matchedDestination = destinations.find((destination) =>
          query.includes(destination.name.toLowerCase()),
        );

        if (matchedDestination) {
          reply = await generateTrip({
            interests: matchedDestination.name,
            mood: matchedDestination.category,
            budget: "",
            duration: "",
            style: "",
          });
        } else {
          // Normal AI request
          reply = await generateTrip({
            interests: text,
            mood: "",
            budget: "",
            duration: "",
            style: "",
          });
        }
      }

      // Show typing indicator
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
