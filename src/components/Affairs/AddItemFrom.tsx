import type { ChangeEvent, FC, KeyboardEvent } from "react";
import s from "./AddItemFrom.module.css";

type AddItemFromProps = {
  name: string,
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void,
  onEnterKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void,
  addUser: () => void,
  error: string,
  totalUsers: number,
};

const AddItemFrom: FC<AddItemFromProps> = (
  { name, setNameCallback, onEnterKeyPress, addUser, error, totalUsers }
) => {
  const inputClass = error ? `${s.nameInput} ${s.error}` : s.nameInput;

  return (
    <div className={s.greetingContainer}>
      <div>
        <input
          value={name}
          onChange={setNameCallback}
          onKeyPress={onEnterKeyPress}
          className={inputClass}
        />
        {error && <span className={s.errorMessage}>{error}</span>}
      </div>
      <button onClick={addUser} className={s.addButton} disabled={!name}>Add</button>
      <span>{totalUsers}</span>
    </div>
  );
};

export default AddItemFrom;
