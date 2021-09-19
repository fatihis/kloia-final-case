import { createStore } from "redux";
import coffees from "../db/coffees.json";
/* createStore to serve data*/
const reducerInitialState = { coffees };

const reducer = (state = reducerInitialState) => {
  return state;
};

export const store = createStore(reducer);

/*returns store's data as prop to the component
usage : use it to export any kind of data to props as under the name of `list`
*/
export const mapDispatchToProps = (dispatch) => {
  return {
    list: dispatch,
  };
};
