import { useEffect, useState } from "react";
import { ArrowRight, LogIn, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import AuthModal from "./AuthModal";

export default function AuthPrompt() {
  const { user, loading } = useAuth();

  const [showPrompt, setShowPrompt] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    if (loading || user) return;

    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [loading, user]);

  if (user) return null;

  return (
    <>
      {showPrompt && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/50 px-5 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowPrompt(false);
            }
          }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowPrompt(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
            >
              <X size={18} />
            </button>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/20">
              <LogIn size={26} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Make your journey personal
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Sign in to save your favorite destinations, manage your profile,
              and get a more personalized AfghanBuddy experience.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  setShowPrompt(false);
                  setAuthOpen(true);
                }}
                className="
                  group flex items-center
                  justify-center gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-teal-500
                  px-5 py-3.5
                  font-semibold
                  text-white
                  shadow-lg shadow-cyan-500/20
                  transition
                  hover:-translate-y-0.5
                "
              >
                Sign In
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => setShowPrompt(false)}
                className="
                  rounded-xl
                  border border-slate-200
                  px-5 py-3.5
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-50
                "
              >
                Stay Logged Out
              </button>
            </div>
          </div>
        </div>
      )}

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        initialMode="login"
      />
    </>
  );
}
