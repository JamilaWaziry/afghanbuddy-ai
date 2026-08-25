import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  X,
  Mountain,
} from "lucide-react";
import { supabase } from "../../services/supabase";

export default function AuthModal({ isOpen, onClose, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isOpen) return null;

  const resetMessages = () => {
    setError("");
    setSuccess("");
  };

  const switchMode = (newMode) => {
    resetMessages();
    setMode(newMode);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      setSuccess("Welcome back to AfghanBuddy.");

      setTimeout(() => {
        onClose();
        setEmail("");
        setPassword("");
        setSuccess("");
      }, 800);
    } catch (error) {
      console.error(error);
      setError(error.message || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        throw error;
      }

      if (!data.session) {
        setSuccess(
          "Account created. Please check your email to verify your account.",
        );
      } else {
        setSuccess("Your AfghanBuddy account has been created.");

        setTimeout(() => {
          onClose();
        }, 800);
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "Unable to create your account.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-md"
      onMouseDown={handleBackdropClick}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl">
        <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 px-7 pb-8 pt-7 text-white">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/10" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm">
              <Mountain size={25} />
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              {mode === "login"
                ? "Welcome back"
                : "Start your AfghanBuddy journey"}
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
              {mode === "login"
                ? "Sign in to save your favorite destinations and travel plans."
                : "Create an account and make your Afghanistan travel experience more personal."}
            </p>
          </div>
        </div>

        <div className="p-7">
          <div className="mb-6 flex rounded-xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => switchMode("login")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${
                mode === "login"
                  ? "bg-white text-cyan-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => switchMode("signup")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${
                mode === "signup"
                  ? "bg-white text-cyan-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Create Account
            </button>
          </div>

          {error && (
            <div className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-5 rounded-xl border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm text-cyan-700">
              {success}
            </div>
          )}

          <form
            onSubmit={mode === "login" ? handleLogin : handleSignup}
            className="space-y-4"
          >
            {mode === "signup" && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={
                    mode === "login"
                      ? "Enter your password"
                      : "Create a password"
                  }
                  minLength={6}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {mode === "signup" && (
                <p className="mt-2 text-xs text-slate-400">
                  Password must contain at least 6 characters.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? mode === "login"
                  ? "Signing in..."
                  : "Creating account..."
                : mode === "login"
                  ? "Sign In"
                  : "Create Account"}

              {!loading && (
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            Your account helps AfghanBuddy remember your favorites and
            personalize your travel experience.
          </p>
        </div>
      </div>
    </div>
  );
}
