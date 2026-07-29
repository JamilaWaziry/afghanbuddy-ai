export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="rounded-3xl border bg-white p-5 shadow">
        <div className="mb-4 font-semibold">AfghanBuddy AI</div>

        <div className="flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500"></span>

          <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:200ms]"></span>

          <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:400ms]"></span>
        </div>
      </div>
    </div>
  );
}
