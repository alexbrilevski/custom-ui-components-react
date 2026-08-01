import { Navigate, Route, Routes } from "react-router-dom";
import Basics from "./Basics";
import Error404 from "./Error404";
import BasicsPlus from "./BasicsPlus";

export const PATH = {
  BASICS: "/basics",
  BASICS_PLUS: "basics-plus",
};

function Pages() {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.BASICS} />} />
      <Route path={PATH.BASICS} element={<Basics />} />
      <Route path={PATH.BASICS_PLUS} element={<BasicsPlus />} />
      <Route path={"/*"} element={<Error404 />} />
    </Routes>
  );
}

export default Pages;
