import { useState, type ChangeEvent, type FC, type KeyboardEvent } from "react";
import Greeting from "./Greeting";
import type { UserType } from "./UserGreeting";

type GreetingContainerProps = {
  users: UserType[],
  addUserCallback: (userName: string) => void,
};

const GreetingContainer: FC<GreetingContainerProps> = ({users, addUserCallback}) => {
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
    } // fixed
  };

  const addUser = () => {
    addUserCallback(name);
    alert(`Hello ${name}!`);
    setName(""); // fixed
  };

  const onEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name) {
      addUser();
    } else {
      setError("Name is required");
    }
  };

  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      onEnterKeyPress={onEnterKeyPress}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  );
};

export default GreetingContainer;
