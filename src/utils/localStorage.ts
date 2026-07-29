export function saveState<T>(key: string, state: T) {
  const stateAsString = JSON.stringify(state);
  localStorage.setItem(key, stateAsString);
}

export function restoreState<T>(key: string, defaultState: T) {
  let state = defaultState;
  const stateAsString = localStorage.getItem(key);
  if (stateAsString !== null) state = JSON.parse(stateAsString) as T;
  return state;
}

// -------------------------------------------
// Usage example:
// type StateType = {
//   x: string,
//   y: number,
// };

// Save object of type StateType to 'test' key
// saveState<StateType>('test', {x: 'A', y: 1});

// Get object by 'test' key or default object if key doesn't exit
// const state: StateType = restoreState<StateType>('test', {x: '', y: 0});
