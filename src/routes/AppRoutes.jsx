import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import AIAssistant from "../pages/AIAssistant";
import TripPlanner from "../pages/TripPlanner";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/destinations" element={<Destinations />} />

          <Route path="/destinations/:id" element={<DestinationDetails />} />

          <Route path="/trip-planner" element={<TripPlanner />} />

          <Route path="/favorites" element={<Favorites />} />
        </Route>

        <Route path="/assistant" element={<AIAssistant />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
