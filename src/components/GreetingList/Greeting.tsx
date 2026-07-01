
import type { ChangeEvent, FC, KeyboardEvent } from "react";
import s from "./Greeting.module.css";

type GreetingProps = {
  name: string,
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void,
  addUser: () => void,
  error: string,
  totalUsers: number,
}

const Greeting: FC<GreetingProps> = (
  {name, setNameCallback, addUser, error, totalUsers}
) => {
  const inputClass = error ? `${s.nameInput} ${s.error}` : s.nameInput;

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addUser();
  };

  return (
    <div className={s.greetingContainer}>
      <input
        value={name}
        onChange={setNameCallback}
        onKeyPress={onKeyPressHandler}
        className={inputClass}
      />
      <span className={s.errorMessage}>{error}</span>
      <button onClick={addUser}>add</button>
      <span>{totalUsers}</span>
    </div>
  )
};

export default Greeting;
