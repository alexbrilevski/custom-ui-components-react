import { Navigate, Route, Routes } from "react-router-dom";
import Basics from "./Basics";

export const PATH = {
  BASICS: "/basics",
};

function Pages() {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.BASICS} />} />
      <Route path={PATH.BASICS} element={<Basics />} />
    </Routes>
  );
}

export default Pages;
