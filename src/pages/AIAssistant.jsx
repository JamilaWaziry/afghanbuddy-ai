import ChatWindow from "../components/chat/ChatWindow";

export default function AIAssistant() {
  return (
    <section className="min-h-screen bg-slate-100 pt-28 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <ChatWindow />
      </div>
    </section>
  );
}
