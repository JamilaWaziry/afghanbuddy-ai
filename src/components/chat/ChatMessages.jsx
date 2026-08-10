import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import EmptyState from "./EmptyState";
import useAutoScroll from "../../hooks/useAutoScroll";

export default function ChatMessages({
  messages,
  loading,
  selectedCategory,
  onSuggestionClick,
}) {
  const bottomRef = useAutoScroll([messages, loading]);

  if (messages.length === 0) {
    return (
      <div className="h-full overflow-y-auto">
        <EmptyState
          onSuggestionClick={onSuggestionClick}
          selectedCategory={selectedCategory}
        />
      </div>
    );
  }

  return (
    <div
      className="
        h-full
        overflow-y-auto
        px-4
        py-5
        sm:px-6
        sm:py-6
        lg:px-10
        lg:py-8
      "
      style={{
        backgroundColor: "#F7F9FA",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(14,131,136,0.025) 0px, rgba(14,131,136,0.025) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-45deg, rgba(14,131,136,0.025) 0px, rgba(14,131,136,0.025) 1px, transparent 1px, transparent 30px)",
      }}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
