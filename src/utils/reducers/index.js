import coffees from "../db/coffees.json";

const reducerInitialState = { coffees };

export const reducer = (state = reducerInitialState, action) => {
  switch (action.type) {
    case GETALL:
      return state;
    case GETALL:
      return state;
    default:
      return state;
  }
};

/* Since actions is limited did not separated from reducers itself
   IF any more couple of actions needed, then separate it to another folder for not to be any complex
*/

export const ACTIONS = [
  {
    GETALL: "GETALL",
    GETSINGLE: "GETSINGLE",
  },
];

const getSingle = (id) => {
  useSearch();
};
