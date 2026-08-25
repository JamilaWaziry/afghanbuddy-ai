import { useEffect, useState } from "react";
import AuthModal from "./AuthModal";
import AuthPrompt from "./AuthPrompt";
import { useAuth } from "../../context/AuthContext";

export default function AuthManager() {
  const { user, loading } = useAuth();

  const [showPrompt, setShowPrompt] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  useEffect(() => {
    if (loading || user) return;

    const alreadyAsked = sessionStorage.getItem("afghanbuddy_auth_prompt");

    if (alreadyAsked) return;

    const timer = setTimeout(() => {
      setShowPrompt(true);

      sessionStorage.setItem("afghanbuddy_auth_prompt", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, [loading, user]);

  const openLogin = () => {
    setShowPrompt(false);
    setAuthMode("login");
    setShowAuth(true);
  };

  const openSignup = () => {
    setShowPrompt(false);
    setAuthMode("signup");
    setShowAuth(true);
  };

  const closeAuth = () => {
    setShowAuth(false);
  };

  if (user) return null;

  return (
    <>
      {showPrompt && (
        <AuthPrompt onLogin={openLogin} onClose={() => setShowPrompt(false)} />
      )}

      <AuthModal isOpen={showAuth} onClose={closeAuth} initialMode={authMode} />
    </>
  );
}
