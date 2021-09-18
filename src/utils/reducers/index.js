import coffees from "../db/coffees.json";

const reducerInitialState = { coffees };

export const reducer = (state = reducerInitialState, action) => {
  switch (action.type) {
    case "getAll":
      return state;
    case "getSome":
      return state;
    default:
      return state;
  }
};
