import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
