import { useState, type ChangeEvent, type FC } from "react";
import Greeting from "./Greeting";
import type { UserType } from "./UserGreeting";


type GreetingContainerProps = {
  users: Array<UserType>,
  addUserCallback: (userName: string) => void,
};

const GreetingContainer: FC<GreetingContainerProps> = ({users, addUserCallback}) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setName(e.currentTarget.value);
  };

  const addUser = () => {
    const trimmedName = name.trim();
    if (trimmedName !== "") {
      addUserCallback(trimmedName);
      alert(`Hello ${trimmedName}!`);
    } else {
      setError("Name is required");
    }
    setName("");
  };

  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  );
};

export default GreetingContainer;
