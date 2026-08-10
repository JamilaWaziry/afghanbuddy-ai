import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { uploadDestinations } from "./scripts/uploadDestinations";

function App() {
  useEffect(() => {
    uploadDestinations();
  }, []);

  return <AppRoutes />;
}

export default App;
