/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import RegistPage from "./pages/RegistPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/register" element={<RegistPage />} />
      </Routes>
    </>
  );
}

export default App;
