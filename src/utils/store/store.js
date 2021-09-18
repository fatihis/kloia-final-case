import { reducer } from "../reducers";
import { createStore } from "redux";

/* createStore to serve data*/
export const store = createStore(reducer);

/*returns store's data as prop to the component
usage : use it to export any kind of data to props as under the name of `list`
*/
export const mapDispatchToProps = (dispatch) => {
  return {
    list: dispatch,
  };
};
