import { useState, type ChangeEvent, type FC, type KeyboardEvent } from "react";
import type { AffairType } from "./Affairs";
import AddItemFrom from "./AddItemFrom";

type AddAffairProps = {
  items: AffairType[],
  onAddItem: (userName: string) => void,
};

const AddAffair: FC<AddAffairProps> = ({items, onAddItem}) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedName = e.currentTarget.value.trim();
    if (trimmedName !== "") {
      setName(trimmedName);
      error && setError("");
    } else {
      name && setName("");
      setError("Name is required");
    }
  };

  const addItem = () => {
    onAddItem(name);
    setName("");
  };

  const onEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name) {
      addItem();
    } else {
      setError("Name is required");
    }
  };

  const totalUsers = items.length;

  return (
    <AddItemFrom
      name={name}
      setNameCallback={setNameCallback}
      onEnterKeyPress={onEnterKeyPress}
      addUser={addItem}
      error={error}
      totalUsers={totalUsers}
    />
  );
};

export default AddAffair;
