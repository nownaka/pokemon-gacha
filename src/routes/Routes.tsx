import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Gacha from "../pages/Gacha";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Gacha" element={<Gacha />} />
    </Routes>
  );
};

export default AppRoutes;
