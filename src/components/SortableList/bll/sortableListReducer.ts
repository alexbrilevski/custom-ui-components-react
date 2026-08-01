export type UserType = {
  _id: number,
  name: string,
  age: number,
};

type SortActionType = {
  type: "sort",
  payload: "up" | "down",
};

type CheckActionType = {
  type: "check",
  payload: number,
};

type ActionType = SortActionType | CheckActionType;

export const sortableListReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': {
      const newState = [...state].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });

      return action.payload === "up" ? newState : newState.reverse();
    }
    case 'check': {
      return state.filter(u => u.age >= action.payload);
    }
    default:
      return state;
  }
};
