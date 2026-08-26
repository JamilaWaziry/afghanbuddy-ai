import { useEffect, useState } from "react";
import { chat } from "../services/openrouter";
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

      // quick replies
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

        let context = "";

        if (matchedDestination) {
          context = `
Destination:
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
`;
        } else {
          context = destinations
            .map(
              (destination) => `
Destination:
${destination.name}

Category:
${destination.category}

Description:
${destination.description}

Best Time:
${destination.bestTime}

Recommended Duration:
${destination.duration}

Rating:
${destination.rating}
`,
            )
            .join("\n");
        }

        reply = await chat(text, context);
      }

      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat Error:", error);

      const errorMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Sorry, something went wrong while connecting to AfghanBuddy AI. Please try again.",
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
