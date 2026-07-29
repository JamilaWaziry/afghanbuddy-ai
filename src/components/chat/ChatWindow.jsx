import useChat from "../../hooks/useChat";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import QuickPrompts from "./QuickPrompts";

export default function ChatWindow() {
  const { messages, loading, sendMessage } = useChat();

  return (
    <div className="flex h-[84vh] flex-col overflow-hidden rounded-[34px] bg-white shadow-2xl">
      <ChatHeader />

      <ChatMessages messages={messages} loading={loading} />

      <QuickPrompts onSelect={sendMessage} />

      <ChatInput onSend={sendMessage} />
    </div>
  );
}
