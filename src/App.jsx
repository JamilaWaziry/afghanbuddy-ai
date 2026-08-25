import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { uploadDestinations } from "./scripts/uploadDestinations";
import AuthPrompt from "./components/auth/AuthPrompt";

function App() {
  useEffect(() => {
    uploadDestinations();
  }, []);

  return (
    <>
      <AppRoutes />
      <AuthPrompt />
    </>
  );
}

export default App;
