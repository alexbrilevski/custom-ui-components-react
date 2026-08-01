import { sortableListReducer, type UserType } from "./sortableListReducer";

let initialState: UserType[];

beforeEach(() => {
  initialState = [
    { _id: 0, name: "Cat", age: 3 },
    { _id: 1, name: "Alexander", age: 66 },
    { _id: 2, name: "Max", age: 16 },
    { _id: 3, name: "Victor", age: 44 },
    { _id: 4, name: "Dmitry", age: 40 },
    { _id: 5, name: "Irina", age: 55 },
  ];
});

test("sort name up", () => {
  const newState = sortableListReducer(initialState, {
    type: "sort",
    payload: "up",
  });

  console.log(newState);

  const result = [1, 0, 4, 5, 2, 3].filter((el, i) => el === newState[i]._id);

  expect(result.length).toBe(newState.length);
});

test("sort name down", () => {
  const newState = sortableListReducer(initialState, {
    type: "sort",
    payload: "down",
  });

  console.log(newState);
  expect(newState).not.toBe(initialState);
  expect(newState[0]._id).toBe(3);
  expect(newState[5]._id).toBe(1);
  expect(newState[0].name).toBe("Victor");
  expect(newState[5].name).toBe("Alexander");
});

test("check age 18", () => {
  const newState = sortableListReducer(initialState, {
    type: "check",
    payload: 18,
  });

  console.log(newState);
  expect(newState).not.toBe(initialState);
  expect(newState.length).toBe(4);
  expect(newState[0].name).toBe("Alexander");
  expect(newState[0].age).toBe(66);
  expect(newState[3].name).toBe("Irina");
});
