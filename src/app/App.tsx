import { HashRouter } from "react-router-dom";
import Pages from "../pages/Pages";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <HashRouter>
        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
