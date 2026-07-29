import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import EmptyState from "./EmptyState";
import useAutoScroll from "../../hooks/useAutoScroll";

export default function ChatMessages({ messages, loading, onSuggestionClick }) {
  const bottomRef = useAutoScroll([messages, loading]);

  if (messages.length === 0) {
    return <EmptyState onSuggestionClick={onSuggestionClick} />;
  }

  return (
    <div className="flex-1 overflow-y-auto px-8 py-8">
      <div className="space-y-6">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
