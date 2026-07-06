import { Navigate, Route, Routes } from "react-router-dom";
import Basics from "./Basics";
import Error404 from "./Error404";

export const PATH = {
  BASICS: "/basics",
};

function Pages() {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.BASICS} />} />
      <Route path={PATH.BASICS} element={<Basics />} />
      <Route path={"/*"} element={<Error404 />} />
    </Routes>
  );
}

export default Pages;
