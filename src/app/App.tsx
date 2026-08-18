import { HashRouter } from "react-router-dom";
import Header from "../pages/Header";
import Pages from "../pages/Pages";
import style from "./App.module.css";
import { Provider } from "react-redux";
import store from "../components/ImageUpload/bll/store";

function App() {
  return (
    <Provider store={store}>
      <div className={style.app}>
        <HashRouter>
          <Header />
          <Pages />
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
