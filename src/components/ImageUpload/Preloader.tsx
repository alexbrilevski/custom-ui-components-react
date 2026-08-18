import { useDispatch, useSelector } from "react-redux";
import type { Dispatch } from "redux";
import { toggleIsLoadingAC, type SetIsLoadingActionType } from "./bll/loadingReducer";
import type { AppStateType } from "./bll/store";
import Button from "../UIKit/common/Button/Button";
import s from "./Preloader.module.css";

function Preloader() {
  const isLoading = useSelector<AppStateType, boolean>(state => state.loading.isLoading);
  const dispatch = useDispatch<Dispatch<SetIsLoadingActionType>>();

  const setLoading = () => {
    dispatch(toggleIsLoadingAC(true));

    setTimeout(() => {
      dispatch(toggleIsLoadingAC(false));
    }, 3000);
  };

  return (
    <div>
      {isLoading
        ? (
          <div className={s.preloader}>
            Loading...
          </div>
        ) : (
          <div className={s.preloader}>
            <Button onClick={setLoading}>Set loading...</Button>
          </div>
        )
      }

      <hr />
    </div>
  )
}

export default Preloader;
