import { useState } from "react";
import { sortableListReducer, type UserType } from "./bll/sortableListReducer";
import s from "./SortableList.module.css";
import Button from "../UIKit/common/Button/Button";

const initialPeople: UserType[] = [
  { _id: 0, name: "Cat", age: 3 },
  { _id: 1, name: "Alexander", age: 66 },
  { _id: 2, name: "Max", age: 16 },
  { _id: 3, name: "Victor", age: 44 },
  { _id: 4, name: "Dmitry", age: 40 },
  { _id: 5, name: "Irina", age: 55 },
];

function SortableList() {
  const [people, setPeople] = useState<UserType[]>(initialPeople);

  const finalPeople = people.map((p: UserType) => (
    <div key={p._id} className={s.row}>
      <p className={s.item}>{p.name}</p>
      <p className={s.item}>{p.age}</p>
    </div>
  ));

  const sortUp = () => setPeople(sortableListReducer(initialPeople, { type: "sort", payload: "up" }));
  const sortDown = () => setPeople(sortableListReducer(initialPeople, { type: "sort", payload: "down" }));
  const check18 = () => setPeople(sortableListReducer(initialPeople, { type: "check", payload: 18 }));

  return (
    <div>
      <hr />
      {finalPeople}

      <div>
        <Button onClick={sortUp}>sort up</Button>
        <Button onClick={sortDown}>sort down</Button>
        <Button onClick={check18}>check 18</Button>
      </div>

      <hr />
    </div>
  )
}

export default SortableList;
