import { useState } from "react";
import { User, Mail, Save, LogOut, Heart, MapPin } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import useFavorites from "../hooks/useFavorites";
import { supabase } from "../services/supabase";

export default function Profile() {
  const { user, logout } = useAuth();
  const { favorites } = useFavorites();

  const [name, setName] = useState(user?.user_metadata?.full_name || "");

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setMessage("");

      const { error } = await supabase.auth.updateUser({
        data: {
          full_name: name,
        },
      });

      if (error) {
        throw error;
      }

      setMessage("Profile updated successfully.");
    } catch (error) {
      console.error(error);
      setMessage("Unable to update your profile.");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  if (!user) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Please sign in</h1>

          <p className="mt-3 text-slate-500">
            You need to be logged in to view your profile.
          </p>
        </div>
      </section>
    );
  }

  const initial =
    name?.charAt(0)?.toUpperCase() ||
    user.email?.charAt(0)?.toUpperCase() ||
    "U";

  return (
    <section className="min-h-screen bg-slate-50 px-6 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        \
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            My Account
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Your Profile
          </h1>

          <p className="mt-3 text-slate-500">
            Manage your AfghanBuddy account and travel preferences.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-3xl font-bold text-white shadow-lg shadow-cyan-500/20">
                {initial}
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                {name || "AfghanBuddy User"}
              </h2>

              <p className="mt-1 max-w-full truncate text-sm text-slate-500">
                {user.email}
              </p>
            </div>

            <div className="my-7 border-t border-slate-100" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-600">
                  <Heart size={18} />
                  <span>Favorites</span>
                </div>

                <span className="font-bold text-slate-900">
                  {favorites.length}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin size={18} />
                  <span>Travel Profile</span>
                </div>

                <span className="text-sm font-medium text-cyan-600">
                  Active
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="
                mt-8 flex w-full items-center
                justify-center gap-2
                rounded-xl border border-red-100
                px-4 py-3
                text-sm font-semibold
                text-red-500
                transition
                hover:bg-red-50
              "
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Personal Information
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Update the information connected to your AfghanBuddy account.
              </p>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
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
                    className="
                      w-full rounded-xl
                      border border-slate-200
                      bg-slate-50
                      py-3.5 pl-11 pr-4
                      text-slate-900
                      outline-none
                      transition
                      focus:border-cyan-400
                      focus:bg-white
                      focus:ring-4
                      focus:ring-cyan-500/10
                    "
                  />
                </div>
              </div>

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
                    value={user.email || ""}
                    disabled
                    className="
                      w-full rounded-xl
                      border border-slate-200
                      bg-slate-100
                      py-3.5 pl-11 pr-4
                      text-slate-500
                    "
                  />
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Your email is managed by your authentication account.
                </p>
              </div>

              {message && (
                <div className="rounded-xl bg-cyan-50 px-4 py-3 text-sm font-medium text-cyan-700">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={saving}
                className="
                  inline-flex items-center
                  justify-center gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-teal-500
                  px-6 py-3.5
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-cyan-500/20
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                <Save size={18} />

                {saving ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
