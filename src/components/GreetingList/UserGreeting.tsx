import { useState } from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";

// types
export type UserType = {
  _id: string,
  name: string,
};

function UserGreeting() {
  const [users, setUsers] = useState<Array<UserType>>([]);

  const addUserCallback = (name: string) => {
    setUsers([...users, { _id: v1(), name }]);
  };

  return (
    <div>
      <GreetingContainer users={users} addUserCallback={addUserCallback} />
    </div>
  );
}

export default UserGreeting;
