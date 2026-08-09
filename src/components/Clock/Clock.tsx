import {useState} from "react";
import Button from "../UIKit/common/Button/Button";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId);
  };
  const start = () => {
    stop();
    const id: number = +setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const stringTime = date?.toLocaleTimeString() || <br/>;
  const stringDate = date?.toLocaleDateString() || <br/>;

  return (
    <div className={s.clock}>
      <div className={s.clockItem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {stringTime}
      </div>

      <div className={s.clockItem}>
        {show && stringDate}
      </div>

      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
    </div>
  );
}

export default Clock;
