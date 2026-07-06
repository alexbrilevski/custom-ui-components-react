import { HashRouter } from "react-router-dom";
import Header from "../pages/Header";
import Pages from "../pages/Pages";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <HashRouter>
        <Header />
        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
