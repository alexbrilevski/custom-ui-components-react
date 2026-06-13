import { type AffairType, deleteAffair, filterAffairs } from "./Affairs";

let initialState: AffairType[];

beforeEach(() => {
  initialState = [
    { _id: 1, name: "React", priority: "high" },
    { _id: 2, name: "Movies", priority: "low" },
    { _id: 3, name: "Games", priority: "low" },
    { _id: 4, name: "Work", priority: "high" },
    { _id: 5, name: "HTML & CSS", priority: "middle" },
  ];
});

test('filter by all', () => {
  const newState = filterAffairs(initialState, "all");
  expect(newState.length).toBe(5);
});

test('filter by high', () => {
  const newState = filterAffairs(initialState, "high");
  expect(newState.length).toBe(2);
});

test('filter by middle', () => {
  const newState = filterAffairs(initialState, "middle");
  expect(newState.length).toBe(1);
});

test('filter by low', () => {
  const newState = filterAffairs(initialState, "low");
  expect(newState.length).toBe(2);
});

test('delete 0', () => {
  const newState = deleteAffair(initialState, 0);
  expect(newState.length).toBe(5);
});

test('delete 1', () => {
  const newState = deleteAffair(initialState, 1);
  expect(newState.length).toBe(4);
});
test('delete 3', () => {
  const newState = deleteAffair(initialState, 3);
  expect(newState.length).toBe(4);
});

test('delete 7', () => {
  const newState = deleteAffair(initialState, 7);
  expect(newState.length).toBe(5);
});
